import {
  TRecognidProps,
  TParams,
  TInitProps,
  TInitializationCompletedData,
  TOperationData,
} from './@types';
import { Liveness } from './liveness';
import { Processing } from './processing';
import {
  jsonToQueryString,
  joinURL,
  fetchData,
  string2html,
  // logger,
  trace,
  _,
} from './utils';

import preloader from './preloader';

export enum REQUEST_METHODS {
  POST = 'post',
  GET = 'get',
}

enum API_URIS {
  INIT = 'sdk/init',
  START = 'sdk/start',
  LIVENESS = 'sdk/liveness',
  RESPONSE = 'sdk/response',
  ENROLLMENT_UPLOAD = 'sdk/enrollment-3d',
  IDSCAN_UPLOAD = 'sdk/match-3d-2d-idscan',
  STATUS_UPLOAD = 'sdk/liveness-status',
  GET_CONFIG = 'config',
}

export enum VIEWS {
  LIVENESS = 'liveness',
  PROCESSING = 'processing',
  FINISH = 'finish',
  NOTHING = 'nothing',
}

export class RecognID {
  static appName = process.env.appName;
  static appVersion = process.env.appVersion;
  static deployTime = process.env.deployTime;
  static sdkVersion = '';
  static environment: string | boolean;
  static logger = false;

  private get paths() {
    let baseURL = 'https://';

    switch (true) {
      case _.isBoolean(this.props.dev) && this.props.dev:
        baseURL += 'recid.finmdtest.com';

        break;
      case _.isString(this.props.dev):
        baseURL = this.props.dev as string;

        break;

      default:
        baseURL += 'recognid.com';
    }

    const staticRoot = joinURL(baseURL, 'liveness-static/facetec');
    const apiURL = joinURL(baseURL, 'api/operation');

    return {
      baseURL,
      apiURL,
      staticRoot,
      sdk: joinURL(staticRoot, 'FaceTecSDK.js'),
      liveness: joinURL(apiURL, API_URIS.LIVENESS),
      getConfig: joinURL(apiURL, API_URIS.GET_CONFIG),
      enrollmentUpload: joinURL(apiURL, API_URIS.ENROLLMENT_UPLOAD),
      idScanUpload: joinURL(apiURL, API_URIS.IDSCAN_UPLOAD),
      start: joinURL(apiURL, API_URIS.START),
      init: joinURL(apiURL, API_URIS.INIT),
      response: joinURL(apiURL, API_URIS.RESPONSE),
      statusUpload: joinURL(apiURL, API_URIS.STATUS_UPLOAD),
    };
  }

  private props = {
    parentId: 'recognid-root',
  } as TRecognidProps;

  private params = {} as TParams;

  private initParams = {} as TInitProps;

  constructor(props: TRecognidProps) {
    this.props = Object.assign({}, this.props, props);

    RecognID.environment = (() => {
      switch (true) {
        case _.isBoolean(this.props.dev):
          return 'development';

        case _.isString(this.props.dev):
          return this.props.dev;

        default:
          return 'production';
      }
    })();

    if (this.props.logger) {
      console.log('Logger will be implemented soon');

      // RecognID.logger = true;
    }

    const assemblyStyle = 'background: #bada55; color: #222;';

    trace(
      `%cAssembly Version %c${RecognID.deployTime}`,
      `${assemblyStyle} padding: 0 0.5em;`,
      `${assemblyStyle} font-weight: bold`
    );

    trace(`${RecognID.appName} initialized`);
  }

  setParams(params: TParams) {
    this.params = Object.assign({}, this.params, params);

    //logger('setParams', this.params);
  }

  init(params: TInitProps) {
    if (!_.isString(this.params.resources)) {
      throw 'You must set the path to the RecognID resources in the context of the domain, before initialization using the method "setParams({resources: [ULI to resources]})"';
    }

    this.initParams = Object.assign({}, this.initParams, params);

    const options = {
      headers: {
        Authorization: this.props.apiKey,
        'Content-Type': 'application/json',
      },
      method: REQUEST_METHODS.POST,
      body: JSON.stringify(params),
    } as RequestInit;

    let operation_id = '';

    const showError = (err: any) => {
      const errData = {
        requestID: params.request_id,
        stages: { requested: params.stages, completed: [] },
        operationID: err.operation_id || operation_id || '',
        operationResult: 'SDK error',
      };

      trace(errData);

      this.props.onSession(null, errData);
      operation_id = '';
    };

    const init = async () => {
      const response = await fetchData(this.paths.init, options);

      operation_id = response.operation_id;

      return { id: response.operation_id };
    };

    const start = async (data: TOperationData) => {
      const response = await fetchData(
        this.paths.start + jsonToQueryString({ id: data.id })
      );

      const operationData = Object.assign({}, response, data);

      //logger('start', operationData);

      return operationData;
    };

    const initializationCompleted = (data: TInitializationCompletedData) => {
      const checkProcess = () => {
        setTimeout(
          () =>
            fetchData(this.paths.start + jsonToQueryString({ id: data.id }))
              .then((responseData) => {
                //logger(`Current process is ${data.view}`);

                return startProcess({ ...responseData, id: data.id });
              })
              .catch(showError),
          500
        );

        //logger('checkProcess');
      };

      const endSession = () => {
        fetchData(this.paths.response + jsonToQueryString({ id: data.id }))
          .then((data) => {
            this.props.onSession(
              !Object.keys(data).length
                ? new Error(
                    'Something went wrong, received object is empty or missing'
                  )
                : null,
              data
            );

            //logger(data);

            return;
          })
          .catch(showError);

        //logger('endSession');
      };

      const liveness = new Liveness(
        {
          containerId: this.props.parentId,
          preloader: string2html(preloader),
          id: data.id,
          checkProcess,
          showError,
        },
        {
          resources: this.params.resources,
          staticRoot: this.paths.staticRoot,
          sdk: this.paths.sdk,
          liveness: this.paths.liveness,
          getConfig: this.paths.getConfig,
          enrollmentUpload: this.paths.enrollmentUpload,
          idScanUpload: this.paths.idScanUpload,
          statusUpload: this.paths.statusUpload,
        }
      );

      const processing = new Processing({
        containerId: this.props.parentId,
        preloader: string2html(preloader),
        checkProcess,
      });

      const startProcess = (data: TInitializationCompletedData) => {
        switch (data.view) {
          case VIEWS.LIVENESS:
            liveness.startProcess();

            break;

          case VIEWS.PROCESSING:
            processing.startProcess();

            break;

          case VIEWS.FINISH:
          default:
            endSession();
        }
      };

      startProcess(data);

      //logger('initializationСompleted', data);
    };

    init().then(start).then(initializationCompleted).catch(showError);

    //logger('init', params);
  }
}

window.RecognID = RecognID;

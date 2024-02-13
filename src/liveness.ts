import { TLivenessPaths, TLivenessProps } from './@types';
import { Facetec, FLOW } from './Facetec';
import { TStatus } from './Facetec/@types';
import { Process } from './process';
import { fetchData, jsonToQueryString /* logger */, _ } from './utils';

export class Liveness extends Process {
  livenessStatus: TStatus;
  initializationAttempts: number;

  constructor(props: TLivenessProps, private paths: TLivenessPaths) {
    super(props);

    this.render();

    //logger('Liveness initialized', props);
    // history.pushState(null, null, VIEWS.LIVENESS);
  }

  setLivenessStatus = (data: TStatus) => (this.livenessStatus = data);

  getLivenessStatus = () => this.livenessStatus;

  startProcess() {
    const { liveness, ...restPaths } = this.paths;
    const { id } = this.props as TLivenessProps;

    const startCurrentProcess = () => {
      fetchData(liveness + jsonToQueryString({ id }))
        .then(
          (data) =>
            new Facetec({
              checkProcess: this.props.checkProcess,
              showError: (this.props as TLivenessProps).showError,
              flow: FLOW.ID_MATCH,
              config: {
                id,
                session: data.session,
                partner: data.partner_key,
              },
              paths: restPaths,
            })
        )
        .catch((this.props as TLivenessProps).showError);

      //logger('Liveness startProcess', process);
    };

    // To control the number of initializations
    switch (true) {
      case !_.isUndefined(this.initializationAttempts):
        if (this.initializationAttempts) {
          startCurrentProcess();

          this.initializationAttempts--;
        }

        break;

      case _.isUndefined(this.initializationAttempts):
      default:
        startCurrentProcess();
    }
  }
}

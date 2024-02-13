import { Controller } from './controllers';
import { Config } from './config/Config';
import { TConfigProps, TFacetecProps, TInitAppProps } from './@types';
import {
  fetchData,
  jsonToQueryString /* logger */,
  appendScript,
  removeScripts,
  appendStyle,
} from './../utils';
import { RecognID, REQUEST_METHODS } from '..';

export enum FLOW {
  ENROLL = 0, // Enroll User,
  ID_MATCH = 1, // Photo ID Match
}

class Facetec {
  recognidSDKScript = 'recognidSDKScript';
  recognidSDKStyle = 'recognidSDKStyle';

  constructor(private props: TFacetecProps) {
    const { checkProcess, showError, config, paths, ...restProps } = this.props;

    const getFacetecConfig = () => {
      const response = fetchData(
        `${paths.getConfig}/field${jsonToQueryString({
          key: 'facetec',
          id: config.id,
        })}`,
        { method: REQUEST_METHODS.GET }
      );

      //logger('getFacetecConfig', response);

      return response;
    };

    const getDowntimeConfig = () => {
      const response = fetchData(
        `${paths.getConfig}/timeout/${jsonToQueryString({
          id: config.id,
        })}`,
        { method: REQUEST_METHODS.GET }
      );

      //logger('getDowntimeConfig', response);

      return response;
    };

    const getLocaleConfig = () => {
      const response = fetchData(
        `${paths.getConfig}/file/${config.partner}${jsonToQueryString({
          id: config.id,
        })}`,
        { method: REQUEST_METHODS.GET }
      );

      //logger('getLocaleConfig', response);

      return response;
    };

    const initApp = (data: TInitAppProps[]) => {
      const [facetecResponse, downtimeResponse, localeResponse] = data;

      const facetecConfig = {
        ProductionKey: facetecResponse.value.production_key,
        DeviceKeyIdentifier: facetecResponse.value.device_key,
        PublicFaceScanEncryptionKey: facetecResponse.value.ssh_public_key,
        paths: {
          ...paths,
          base_url: facetecResponse.value.base_url,
        },
        locale: localeResponse,
        downtime: downtimeResponse,
        theme: {
          overlayCustomization: {
            brandingImage: `${paths.getConfig}/logo/${
              config.partner
            }${jsonToQueryString({ id: config.id })}`,
          },
        },
      } as unknown as TConfigProps;

      const cfg = new Config(
        FaceTecSDK,
        Object.assign({}, restProps, config, facetecConfig)
      );

      new Controller(cfg, {
        checkProcess,
        showError,
        clearScript: () => removeScripts(this.recognidSDKScript),
      });
    };

    appendStyle(this.recognidSDKStyle);
    appendScript(this.recognidSDKScript, { src: paths.sdk }, () => {
      RecognID.sdkVersion = FaceTecSDK.version();

      Promise.all([getFacetecConfig(), getDowntimeConfig(), getLocaleConfig()])
        .then(initApp)
        .catch(showError);
    });
  }
}

export { Facetec };

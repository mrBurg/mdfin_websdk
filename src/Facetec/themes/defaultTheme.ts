import { TFacetecSdk } from '../@types';
import { FaceTecCustomization } from '../declarations/FaceTecCustomization';
import defaultThemeData from './mdFinTheme.json';

export function getDefaultTheme(
  sdk: TFacetecSdk,
  defaultCustomization: FaceTecCustomization
) {
  defaultCustomization.cancelButtonCustomization.location =
    sdk.FaceTecCancelButtonLocation.TopRight;
  defaultCustomization.securityWatermarkCustomization.setSecurityWatermarkImage(
    sdk.FaceTecSecurityWatermarkImage.FaceTec_ZoOm
  );

  return Object.assign({}, defaultCustomization, defaultThemeData);
}

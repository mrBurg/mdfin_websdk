import { FLOW } from '..';
import { TConfigGetProps, TPaths } from './config';
import { TControllerProps } from './controller';

export * from './config';
export * from './controller';
export * from './processors';

/**
 * Native facetec parameters
 */
export type TFacetecSdk = typeof FaceTecSDK;

export type TFacetecProps = TControllerProps &
  Record<'flow', FLOW> &
  Record<'config', TConfigGetProps> &
  Record<'paths', TPaths>;

export type TInitAppProps = Record<'value', Record<string, unknown>>;

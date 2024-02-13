import { TJSON } from '../../@types';
import { FLOW } from '../Facetec';

/**
 * @param id идентификатор операции operation_id
 * @param session идентификатор сесии FaceTec: sessionToken
 * @param partner зашифрованный идентификатор партнера partner_key
 */
export type TConfigGetProps = Record<'id' | 'session' | 'partner', string>;

export type TPaths = Record<
  | 'sdk'
  | 'statusUpload'
  | 'staticRoot'
  | 'getConfig'
  | 'enrollmentUpload'
  | 'idScanUpload'
  | 'resources',
  string
> &
  Partial<Record<'auditTrailPath', string>>;

type TReceivedPaths = Record<'base_url', string>;

export type TConfigPaths = TPaths & TReceivedPaths;

export type TLocaleConfig = TJSON;

export type TDowntimeConfig = Record<'value', number>;

export type TThemeConfig = Record<
  'overlayCustomization',
  Record<'brandingImage', string>
>;

export type TConfigProps = Record<
  'ProductionKey' | 'DeviceKeyIdentifier' | 'PublicFaceScanEncryptionKey',
  string
> &
  TConfigGetProps &
  Record<'flow', FLOW> &
  Record<'paths', TConfigPaths> &
  Partial<
    Record<'locale', TLocaleConfig> &
      Record<'theme', TThemeConfig> &
      Record<'downtime', TDowntimeConfig>
  >;

export type TInitializeFromAutogeneratedConfigCallback = (
  initializedSuccessfully: boolean
) => void;

export type TGetConfigProps = Record<
  'production_key' | 'ssh_public_key' | 'device_key' | 'session_path',
  string
> &
  TReceivedPaths &
  Record<'session_timeout', number>;

import { TPaths, TProcessor } from '../Facetec/@types';

export type TJSON = Record<string, unknown>;

/**
 * Script parameters
 */
export type IScriptProps = Record<'src', string> &
  Partial<Record<'type', string>>;

/**
 * Settings for creating Recognid
 */
export type TRecognidProps = Partial<
  Record<'parentId', string> &
    Record<'dev', string | boolean> &
    Record<'logger', boolean>
> &
  Record<'apiKey', string> &
  Record<'onSession', (err: Error, response: TJSON) => void>;

/**
 * Settings for advanced options
 */
export type TParams = Record<'resources', string> &
  Partial<Record<'locale', string>>;

/**
 * Parameters for initialization
 */
export type TInitProps = Record<
  'request_id' | 'return_url' | 'webhook_url' | 'language',
  string
> &
  Record<'stages', string[]>;

/**
 * Received operation ID parameters
 */
export type TOperationData = Record<'id', string>;

/**
 * Received parameters after initialization
 */
export type TInitializationCompletedData = Record<'view', string> &
  TOperationData;

/**
 * Process parameters
 */
export type TProcessProps = Record<'containerId', string> &
  Record<'preloader', string | HTMLElement | ChildNode> &
  Record<'checkProcess', () => void>;

export type TProcessingProps = TProcessProps;

export type TLivenessProps = TProcessProps &
  Record<'showError', (err: ProgressEvent) => void> &
  TOperationData;

export type TLivenessPaths = Record<'sdk' | 'liveness', string> & TPaths;

export type TLogerData = string | TJSON | Promise<TJSON> | TProcessor;

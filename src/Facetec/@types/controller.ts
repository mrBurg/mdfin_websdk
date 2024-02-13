import { EnrollmentProcessor, PhotoIDMatchProcessor } from '../processors';
import { Processor } from '../processors/Processor';

export type TLatestProcessor = EnrollmentProcessor | PhotoIDMatchProcessor;

export type TLatestNetworkResponseStatus = number;

export type TSessionTokenCallback = (token: string) => void;

export type TProcess = Record<'checkProcess', () => void> &
  Partial<Record<'showError', (err: ProgressEvent) => void>>;

export type TControllerProps = TProcess &
  Partial<Record<'clearScript', () => void>>;

export type TProcessor = {
  new (...args: ConstructorParameters<typeof Processor>): TLatestProcessor;
};

export type TStatus = Record<'id', number> & Record<'name' | 'class', string>;

import { RecognID } from './src';

declare global {
  interface Window {
    RecognID: typeof RecognID;
  }
}

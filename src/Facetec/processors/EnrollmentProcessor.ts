import { FaceTecFaceScanProcessor } from '../declarations/FaceTecPublicApi';
import { Processor } from './Processor';

export class EnrollmentProcessor
  extends Processor
  implements FaceTecFaceScanProcessor
{
  onFaceTecSDKCompletelyDone() {
    this.success = this.latestSessionResult.isCompletelyDone;

    if (!this.success) {
      this.controller.clearLatestEnrollmentIdentifier();
    }

    this.controller.onComplete(
      this.latestSessionResult,
      null,
      this.latestNetworkRequest.status
    );
  }
}

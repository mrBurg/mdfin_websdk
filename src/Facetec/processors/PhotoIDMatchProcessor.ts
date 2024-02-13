import {
  FaceTecIDScanProcessor,
  FaceTecIDScanResult,
  FaceTecIDScanResultCallback,
} from '../declarations/FaceTecPublicApi';
import { TLatestNetworkRequestParams } from '../@types/processors';
import { Processor } from './Processor';

export class PhotoIDMatchProcessor
  extends Processor
  implements FaceTecIDScanProcessor
{
  latestIDScanResult = null;

  onFaceTecSDKCompletelyDone() {
    if (this.latestIDScanResult) {
      this.success = this.latestIDScanResult.isCompletelyDone;
    }

    if (!this.success) {
      this.controller.clearLatestEnrollmentIdentifier();
    }

    this.controller.onComplete(
      this.latestSessionResult,
      this.latestIDScanResult,
      this.latestNetworkRequest.status
    );
  }

  processIDScanResultWhileFaceTecSDKWaits(
    idScanResult: FaceTecIDScanResult,
    callback: FaceTecIDScanResultCallback
  ) {
    this.controller.reloadDowntime();
    this.latestIDScanResult = idScanResult;

    if (idScanResult.status !== this.cfg.sdk.FaceTecIDScanStatus.Success) {
      console.log(
        `ID Scan was not completed successfully, cancelling with status: ${
          this.cfg.sdk.FaceTecIDScanStatus[idScanResult.status]
        }.`
      );

      this.controller.statusUpload({
        id: idScanResult.status,
        name: this.cfg.sdk.FaceTecIDScanStatus[idScanResult.status],
        class: 'IDScanStatus',
      });
      this.latestNetworkRequest.abort();
      this.latestNetworkRequest = new XMLHttpRequest();
      callback.cancel();

      return;
    }

    const parameters = {
      idScan: idScanResult.idScan,
      sessionId: idScanResult.sessionId,
      operationId: this.cfg.id,
      // minMatchLevel: 3,
    } as TLatestNetworkRequestParams;

    if (idScanResult.frontImages && idScanResult.frontImages[0]) {
      parameters.idScanFrontImage = idScanResult.frontImages[0];
    }

    if (idScanResult.backImages && idScanResult.backImages[0]) {
      parameters.idScanBackImage = idScanResult.backImages[0];
    }

    this.prepareRequest(
      this.cfg.paths.idScanUpload,
      idScanResult.sessionId,
      parameters,
      callback
    );
  }
}

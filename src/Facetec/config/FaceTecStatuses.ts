export const statuses = {
  FaceTecSDKStatus: {
    0: 'NeverInitialized', // Initialize was never attempted.
    1: 'Initialized', // Initialized Successfully.
    2: 'NetworkIssues', // Check your network connection.
    3: 'InvalidDeviceKeyIdentifier', // The Key provided was invalid.
    4: 'VersionDeprecated', // Current version of SDK is deprecated.  This enum response is DEPRECATED and no longer returned.
    5: 'DeviceNotSupported', // Device not supported.
    6: 'DeviceInLandscapeMode', // FaceTec Browser SDK must be used in portrait orientation.
    7: 'DeviceLockedOut', // The device is locked out of FaceTec Browser SDK.
    8: 'KeyExpiredOrInvalid', // The Key was expired, contained invalid text, or you are attempting to initialize on a domain that is not specified in your Key.
    9: 'IFrameNotAllowedWithoutPermission', // Using FaceTec SDKs in an iFrame requires permission from FaceTec.  Please contact FaceTec for more details.
    10: 'StillLoadingResources', // FaceTec SDK Required resources are still loading.
    11: 'ResourcesCouldNotBeLoadedOnLastInit', // FaceTec SDK Required resources failed to load on last init.
  },
  FaceTecSessionStatus: {
    0: 'SessionCompletedSuccessfully', // The Session was performed successfully and a FaceScan was generated.
    1: 'MissingGuidanceImages', // The Session was cancelled because not all guidance images were configured.
    2: 'Timeout', // Session cancelled due to timeout.
    3: 'ContextSwitch', // Session cancelled because of Context Switch.
    4: 'ProgrammaticallyCancelled', // Session cancelled programmatically by developer.
    5: 'OrientationChangeDuringSession', // Session cancelled because device orientation change.
    6: 'LandscapeModeNotAllowed', // Session did not start because user is in landscape mode.
    7: 'UserCancelled', // User cancelled the session before completion.
    8: 'UserCancelledFromNewUserGuidance', // User cancelled from the new user guidance.
    9: 'UserCancelledFromRetryGuidance', // User cancelled from the retry screen.
    10: 'UserCancelledWhenAttemptingToGetCameraPermissions', // User cancelled from camera permissions error screen, when attempting to get camera permissions.
    11: 'LockedOut', // FaceTec Browser SDK is in a lockout state.
    12: 'CameraNotEnabled', // The user did not enable the camera after prompting for camera permissions or camera permissions were previously denied.
    13: 'NonProductionModeDeviceKeyIdentifierInvalid', // The Key was never validated.
    14: 'DocumentNotReady', // Session cancelled because document is not in ready state.
    15: 'SessionInProgress', // Session cancelled because a Session is already in progress.
    16: 'CameraNotRunning', // Session cancelled because selected camera is not active.
    17: 'InitializationNotCompleted', // FaceTec Browser SDK was never successfully initialized.
    18: 'UnknownInternalError', // The Session was cancelled because of an unknown and unexpected error.
    19: 'UserCancelledViaClickableReadyScreenSubtext', // The Session cancelled because user pressed the Get Ready screen subtext message.
    20: 'NotAllowedUseIframeConstructor', // The Session was cancelled because you used the iFrame Constructor but the calling context is not in an iFrame.
    21: 'NotAllowedUseNonIframeConstructor', // The Session was cancelled because you used the non-iFrame Constructor in an iFrame.
    22: 'IFrameNotAllowedWithoutPermission', // The Session was cancelled because you do not have permission to run the FaceTec Browser SDK in an iFrame. Please contact FaceTec to request the needed code.
    23: 'StillLoadingResources', // FaceTec SDK Required resources are still loading.
    24: 'ResourcesCouldNotBeLoadedOnLastInit', // FaceTec SDK Required resources failed to load on last init.
  },
  FaceTecIDScanStatus: {
    0: 'Success', // The ID Scan was performed successfully and identity document data was generated.
    1: 'Unsuccess', // The ID Scan was not performed successfully and identity document data was not generated.
    2: 'UserCancelled', // The user pressed the cancel button and did not complete the ID Scan process.
    3: 'TimedOut', // ID Scan cancelled due to timeout.
    4: 'ContextSwitch', // ID Scan cancelled because a Context Switch occurred.
    5: 'CameraError', // ID Scan cancelled due to a camera error.
    6: 'CameraNotEnabled', // The user did not enable the camera after prompting for camera permissions or camera permissions were previously denied.
    7: 'Skipped', // ID Scan was skipped.
  },
};

/* for (let i = 0; i <= 11; i++) {
  console.log(this.cfg.sdk.getFriendlyDescriptionForFaceTecSDKStatus(i));
} */

/* for (let i = 0; i <= 24; i++) {
  console.log(this.cfg.sdk.getFriendlyDescriptionForFaceTecSessionStatus(i));
} */

/* for (let i = 0; i <= 7; i++) {
  console.log(this.cfg.sdk.getFriendlyDescriptionForFaceTecIDScanStatus(i));
} */

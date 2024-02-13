export {};

// export function getLowLightCustomizationForTheme(
//   theme: string,
//   themeResourceDirectory: string
// ) {
//   var currentLowLightCustomization = getCustomizationForTheme(theme);
//   var retryScreenSlideshowImages = [
//     themeResourceDirectory + 'FaceTec_ideal_1.png',
//     themeResourceDirectory + 'FaceTec_ideal_2.png',
//     themeResourceDirectory + 'FaceTec_ideal_3.png',
//     themeResourceDirectory + 'FaceTec_ideal_4.png',
//     themeResourceDirectory + 'FaceTec_ideal_5.png',
//   ];
//   if (theme === 'Config Wizard Theme') {
//     currentLowLightCustomization =
//       Config.retrieveLowLightConfigurationWizardCustomization(FaceTecSDK);
//   } else if (theme === 'Bitcoin Exchange') {
//     var primaryColor = 'rgb(247, 150, 52)'; // orange
//     var secondaryColor = 'rgb(255, 255, 30)'; // yellow
//     var backgroundColor = 'rgb(66, 66, 66)'; // dark grey
//     // Overlay Customization
//     currentLowLightCustomization.overlayCustomization.brandingImage =
//       themeResourceDirectory + 'bitcoin-exchange/bitcoin_exchange_logo.png';
//     // Guidance Customization
//     currentLowLightCustomization.guidanceCustomization.foregroundColor =
//       backgroundColor;
//     currentLowLightCustomization.guidanceCustomization.buttonTextNormalColor =
//       'white';
//     currentLowLightCustomization.guidanceCustomization.buttonBackgroundNormalColor =
//       primaryColor;
//     currentLowLightCustomization.guidanceCustomization.buttonTextHighlightColor =
//       'white';
//     currentLowLightCustomization.guidanceCustomization.buttonBackgroundHighlightColor =
//       primaryColor;
//     currentLowLightCustomization.guidanceCustomization.buttonTextDisabledColor =
//       'white';
//     currentLowLightCustomization.guidanceCustomization.buttonBackgroundDisabledColor =
//       primaryColor;
//     currentLowLightCustomization.guidanceCustomization.buttonBorderColor =
//       'transparent';
//     currentLowLightCustomization.guidanceCustomization.readyScreenOvalFillColor =
//       'transparent';
//     currentLowLightCustomization.guidanceCustomization.readyScreenTextBackgroundColor =
//       'white';
//     currentLowLightCustomization.guidanceCustomization.retryScreenImageBorderColor =
//       primaryColor;
//     currentLowLightCustomization.guidanceCustomization.retryScreenOvalStrokeColor =
//       primaryColor;
//     currentLowLightCustomization.guidanceCustomization.retryScreenSlideshowImages =
//       [];
//     // ID Scan Customization
//     currentLowLightCustomization.idScanCustomization.selectionScreenDocumentImage =
//       themeResourceDirectory + 'bitcoin-exchange/document_grey.png';
//     currentLowLightCustomization.idScanCustomization.selectionScreenBrandingImage =
//       '';
//     currentLowLightCustomization.idScanCustomization.captureScreenForegroundColor =
//       primaryColor;
//     currentLowLightCustomization.idScanCustomization.reviewScreenForegroundColor =
//       primaryColor;
//     currentLowLightCustomization.idScanCustomization.selectionScreenForegroundColor =
//       primaryColor;
//     currentLowLightCustomization.idScanCustomization.buttonTextNormalColor =
//       'white';
//     currentLowLightCustomization.idScanCustomization.buttonBackgroundNormalColor =
//       primaryColor;
//     currentLowLightCustomization.idScanCustomization.buttonTextHighlightColor =
//       'white';
//     currentLowLightCustomization.idScanCustomization.buttonBackgroundHighlightColor =
//       primaryColor;
//     currentLowLightCustomization.idScanCustomization.buttonTextDisabledColor =
//       'white';
//     currentLowLightCustomization.idScanCustomization.buttonBackgroundDisabledColor =
//       primaryColor;
//     currentLowLightCustomization.idScanCustomization.buttonBorderColor =
//       'transparent';
//     currentLowLightCustomization.idScanCustomization.captureScreenTextBackgroundColor =
//       backgroundColor;
//     currentLowLightCustomization.idScanCustomization.captureScreenTextBackgroundBorderColor =
//       'transparent';
//     currentLowLightCustomization.idScanCustomization.reviewScreenTextBackgroundColor =
//       backgroundColor;
//     currentLowLightCustomization.idScanCustomization.reviewScreenTextBackgroundBorderColor =
//       'transparent';
//     currentLowLightCustomization.idScanCustomization.captureFrameStrokeColor =
//       primaryColor;
//     // Result Screen Customization
//     currentLowLightCustomization.resultScreenCustomization.foregroundColor =
//       backgroundColor;
//     currentLowLightCustomization.resultScreenCustomization.activityIndicatorColor =
//       primaryColor;
//     currentLowLightCustomization.resultScreenCustomization.customActivityIndicatorImage =
//       themeResourceDirectory + 'bitcoin-exchange/activity_indicator_orange.png';
//     currentLowLightCustomization.resultScreenCustomization.customActivityIndicatorAnimation =
//       null;
//     currentLowLightCustomization.resultScreenCustomization.resultAnimationBackgroundColor =
//       primaryColor;
//     currentLowLightCustomization.resultScreenCustomization.resultAnimationForegroundColor =
//       'white';
//     currentLowLightCustomization.resultScreenCustomization.resultAnimationSuccessBackgroundImage =
//       '';
//     currentLowLightCustomization.resultScreenCustomization.resultAnimationUnsuccessBackgroundImage =
//       '';
//     currentLowLightCustomization.resultScreenCustomization.customResultAnimationSuccess =
//       null;
//     currentLowLightCustomization.resultScreenCustomization.customResultAnimationUnsuccess =
//       null;
//     currentLowLightCustomization.resultScreenCustomization.uploadProgressTrackColor =
//       'rgba(0, 0, 0, 0.2)';
//     currentLowLightCustomization.resultScreenCustomization.uploadProgressFillColor =
//       primaryColor;
//     // Feedback Customization
//     currentLowLightCustomization.feedbackCustomization.backgroundColor =
//       backgroundColor;
//     currentLowLightCustomization.feedbackCustomization.textColor = 'white';
//     // Frame Customization
//     currentLowLightCustomization.frameCustomization.borderColor =
//       backgroundColor;
//     // Oval Customization
//     currentLowLightCustomization.ovalCustomization.strokeColor = primaryColor;
//     currentLowLightCustomization.ovalCustomization.progressColor1 =
//       secondaryColor;
//     currentLowLightCustomization.ovalCustomization.progressColor2 =
//       secondaryColor;
//     // Cancel Button Customization
//     currentLowLightCustomization.cancelButtonCustomization.customImage =
//       themeResourceDirectory +
//       'bitcoin-exchange/single_chevron_left_orange.png';
//     // Guidance Customization -- Text Style Overrides
//     // Ready Screen Header
//     currentLowLightCustomization.guidanceCustomization.readyScreenHeaderTextColor =
//       primaryColor;
//     // Ready Screen Subtext
//     currentLowLightCustomization.guidanceCustomization.readyScreenSubtextTextColor =
//       backgroundColor;
//     // Retry Screen Header
//     currentLowLightCustomization.guidanceCustomization.retryScreenHeaderTextColor =
//       primaryColor;
//     // Retry Screen Subtext
//     currentLowLightCustomization.guidanceCustomization.retryScreenSubtextTextColor =
//       backgroundColor;
//   } else if (theme === 'Sample Bank') {
//     var primaryColor = 'white';
//     var backgroundColor = 'rgb(29, 23, 79)'; // navy
//     // Overlay Customization
//     currentLowLightCustomization.overlayCustomization.brandingImage =
//       themeResourceDirectory + 'sample-bank/sample_bank_logo.png';
//     // Guidance Customization
//     currentLowLightCustomization.guidanceCustomization.foregroundColor =
//       backgroundColor;
//     currentLowLightCustomization.guidanceCustomization.buttonTextNormalColor =
//       primaryColor;
//     currentLowLightCustomization.guidanceCustomization.buttonBackgroundNormalColor =
//       backgroundColor;
//     currentLowLightCustomization.guidanceCustomization.buttonTextHighlightColor =
//       primaryColor;
//     currentLowLightCustomization.guidanceCustomization.buttonBackgroundHighlightColor =
//       'rgba(29, 23, 79, 0.8)';
//     currentLowLightCustomization.guidanceCustomization.buttonTextDisabledColor =
//       'rgba(255, 255, 255, 0.3)';
//     currentLowLightCustomization.guidanceCustomization.buttonBackgroundDisabledColor =
//       backgroundColor;
//     currentLowLightCustomization.guidanceCustomization.buttonBorderColor =
//       backgroundColor;
//     currentLowLightCustomization.guidanceCustomization.readyScreenOvalFillColor =
//       'transparent';
//     currentLowLightCustomization.guidanceCustomization.readyScreenTextBackgroundColor =
//       primaryColor;
//     currentLowLightCustomization.guidanceCustomization.retryScreenImageBorderColor =
//       backgroundColor;
//     currentLowLightCustomization.guidanceCustomization.retryScreenOvalStrokeColor =
//       primaryColor;
//     currentLowLightCustomization.guidanceCustomization.retryScreenSlideshowImages =
//       retryScreenSlideshowImages;
//     // ID Scan Customization
//     currentLowLightCustomization.idScanCustomization.selectionScreenDocumentImage =
//       '';
//     currentLowLightCustomization.idScanCustomization.selectionScreenBrandingImage =
//       '';
//     currentLowLightCustomization.idScanCustomization.captureScreenForegroundColor =
//       backgroundColor;
//     currentLowLightCustomization.idScanCustomization.reviewScreenForegroundColor =
//       backgroundColor;
//     currentLowLightCustomization.idScanCustomization.selectionScreenForegroundColor =
//       backgroundColor;
//     currentLowLightCustomization.idScanCustomization.buttonTextNormalColor =
//       primaryColor;
//     currentLowLightCustomization.idScanCustomization.buttonBackgroundNormalColor =
//       backgroundColor;
//     currentLowLightCustomization.idScanCustomization.buttonTextHighlightColor =
//       primaryColor;
//     currentLowLightCustomization.idScanCustomization.buttonBackgroundHighlightColor =
//       'rgba(29, 23, 79, 0.8)';
//     currentLowLightCustomization.idScanCustomization.buttonTextDisabledColor =
//       'rgba(255, 255, 255, 0.3)';
//     currentLowLightCustomization.idScanCustomization.buttonBackgroundDisabledColor =
//       backgroundColor;
//     currentLowLightCustomization.idScanCustomization.buttonBorderColor =
//       backgroundColor;
//     currentLowLightCustomization.idScanCustomization.captureScreenTextBackgroundColor =
//       primaryColor;
//     currentLowLightCustomization.idScanCustomization.captureScreenTextBackgroundBorderColor =
//       backgroundColor;
//     currentLowLightCustomization.idScanCustomization.reviewScreenTextBackgroundColor =
//       primaryColor;
//     currentLowLightCustomization.idScanCustomization.reviewScreenTextBackgroundBorderColor =
//       backgroundColor;
//     currentLowLightCustomization.idScanCustomization.captureFrameStrokeColor =
//       primaryColor;
//     // OCR Confirmation Screen Customization
//     currentLowLightCustomization.ocrConfirmationCustomization.mainHeaderDividerLineColor =
//       backgroundColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.mainHeaderTextColor =
//       backgroundColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.sectionHeaderTextColor =
//       backgroundColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.fieldLabelTextColor =
//       backgroundColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.fieldValueTextColor =
//       backgroundColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.inputFieldTextColor =
//       backgroundColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.inputFieldPlaceholderTextColor =
//       'rgba(29, 23, 79, 0.4)';
//     currentLowLightCustomization.ocrConfirmationCustomization.inputFieldBackgroundColor =
//       'transparent';
//     currentLowLightCustomization.ocrConfirmationCustomization.inputFieldBorderColor =
//       backgroundColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.buttonTextNormalColor =
//       primaryColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.buttonBackgroundNormalColor =
//       backgroundColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.buttonTextHighlightColor =
//       primaryColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.buttonBackgroundHighlightColor =
//       'rgba(29, 23, 79, 0.8)';
//     currentLowLightCustomization.ocrConfirmationCustomization.buttonTextDisabledColor =
//       'rgba(255, 255, 255, 0.3)';
//     currentLowLightCustomization.ocrConfirmationCustomization.buttonBackgroundDisabledColor =
//       backgroundColor;
//     currentLowLightCustomization.ocrConfirmationCustomization.buttonBorderColor =
//       backgroundColor;
//     // Result Screen Customization
//     currentLowLightCustomization.resultScreenCustomization.foregroundColor =
//       backgroundColor;
//     currentLowLightCustomization.resultScreenCustomization.activityIndicatorColor =
//       backgroundColor;
//     currentLowLightCustomization.resultScreenCustomization.customActivityIndicatorImage =
//       themeResourceDirectory + 'sample-bank/activity_indicator_navy.png';
//     currentLowLightCustomization.resultScreenCustomization.customActivityIndicatorAnimation =
//       null;
//     currentLowLightCustomization.resultScreenCustomization.resultAnimationBackgroundColor =
//       'transparent';
//     currentLowLightCustomization.resultScreenCustomization.resultAnimationForegroundColor =
//       backgroundColor;
//     currentLowLightCustomization.resultScreenCustomization.resultAnimationSuccessBackgroundImage =
//       themeResourceDirectory + 'sample-bank/reticle_navy.png';
//     currentLowLightCustomization.resultScreenCustomization.resultAnimationUnsuccessBackgroundImage =
//       themeResourceDirectory + 'sample-bank/reticle_navy.png';
//     currentLowLightCustomization.resultScreenCustomization.customResultAnimationSuccess =
//       null;
//     currentLowLightCustomization.resultScreenCustomization.customResultAnimationUnsuccess =
//       null;
//     currentLowLightCustomization.resultScreenCustomization.uploadProgressTrackColor =
//       'rgba(0, 0, 0, 0.2)';
//     currentLowLightCustomization.resultScreenCustomization.uploadProgressFillColor =
//       backgroundColor;
//     // Feedback Customization
//     currentLowLightCustomization.feedbackCustomization.backgroundColor =
//       backgroundColor;
//     currentLowLightCustomization.feedbackCustomization.textColor = primaryColor;
//     // Frame Customization
//     currentLowLightCustomization.frameCustomization.borderColor =
//       backgroundColor;
//     // Oval Customization
//     currentLowLightCustomization.ovalCustomization.strokeColor =
//       backgroundColor;
//     currentLowLightCustomization.ovalCustomization.progressColor1 =
//       'rgba(29, 23, 79, 0.8)';
//     currentLowLightCustomization.ovalCustomization.progressColor2 =
//       'rgba(29, 23, 79, 0.8)';
//     // Cancel Button Customization
//     currentLowLightCustomization.cancelButtonCustomization.customImage =
//       themeResourceDirectory + 'sample-bank/cancel_navy.png';
//   }
//   return currentLowLightCustomization;
// }

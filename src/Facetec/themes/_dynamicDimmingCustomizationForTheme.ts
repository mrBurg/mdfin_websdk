export {};

// export function getDynamicDimmingCustomizationForTheme(
//   theme: string,
//   themeResourceDirectory: string
// ) {
//   var currentDynamicDimmingCustomization = getCustomizationForTheme(theme);
//   var retryScreenSlideshowImages = [
//     themeResourceDirectory + 'FaceTec_ideal_1.png',
//     themeResourceDirectory + 'FaceTec_ideal_2.png',
//     themeResourceDirectory + 'FaceTec_ideal_3.png',
//     themeResourceDirectory + 'FaceTec_ideal_4.png',
//     themeResourceDirectory + 'FaceTec_ideal_5.png',
//   ];
//   if (theme === 'FaceTec Theme') {
//     // OCR Confirmation Screen Customization
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.sectionHeaderTextColor =
//       'white';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.fieldLabelTextColor =
//       'white';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.fieldValueTextColor =
//       'white';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldTextColor =
//       'white';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldPlaceholderTextColor =
//       'rgba(0, 0, 0, 0.4)';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldBorderColor =
//       'white';
//   }
//   if (theme === 'Config Wizard Theme') {
//     currentDynamicDimmingCustomization =
//       Config.retrieveDynamicDimmingConfigurationWizardCustomization(FaceTecSDK);
//   } else if (theme === 'Pseudo-Fullscreen') {
//     var primaryColor = 'rgb(238, 246, 248)'; // white
//     var secondaryColor = 'rgb(59, 195, 113)'; // green
//     var backgroundColor = 'black';
//     var activityIndicatorSVG = document.createElementNS(
//       'http://www.w3.org/2000/svg',
//       'svg'
//     );
//     activityIndicatorSVG.setAttribute('viewBox', '0 0 52 52');
//     activityIndicatorSVG.classList.add(
//       'pseudo-fullscreen-activity-indicator-svg__offwhite'
//     );
//     activityIndicatorSVG.innerHTML =
//       "<circle class='path' cx='26' cy='26' r='22'></circle>";
//     var successResultAnimationSVG = document.createElementNS(
//       'http://www.w3.org/2000/svg',
//       'svg'
//     );
//     successResultAnimationSVG.setAttribute('viewBox', '0 0 52 52');
//     successResultAnimationSVG.classList.add(
//       'pseudo-fullscreen-success-svg__offwhite'
//     );
//     successResultAnimationSVG.innerHTML =
//       "<circle class='circlePath' cx='26' cy='26' r='22'></circle><path class='checkmarkPath' d='M14.1 27.2l7.1 7.2 16.7-16.8'></path>";
//     var unsuccessResultAnimationSVG = document.createElementNS(
//       'http://www.w3.org/2000/svg',
//       'svg'
//     );
//     unsuccessResultAnimationSVG.setAttribute('viewBox', '0 0 52 52');
//     unsuccessResultAnimationSVG.classList.add(
//       'pseudo-fullscreen-unsuccess-svg__offwhite'
//     );
//     unsuccessResultAnimationSVG.innerHTML =
//       "<circle class='circlePath' cx='26' cy='26' r='22'></circle><line class='crossPath1' x1='18' y1='18' x2='34' y2='34'></line><line class='crossPath2' x1='34' y1='18' x2='18' y2='34'></line>";
//     // Overlay Customization
//     currentDynamicDimmingCustomization.overlayCustomization.brandingImage = '';
//     // Guidance Customization
//     currentDynamicDimmingCustomization.guidanceCustomization.foregroundColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonTextNormalColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonBackgroundNormalColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonTextHighlightColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonBackgroundHighlightColor =
//       'white';
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonTextDisabledColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonBackgroundDisabledColor =
//       'rgba(238, 246, 248, 0.3)';
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonBorderColor =
//       'transparent';
//     currentDynamicDimmingCustomization.guidanceCustomization.readyScreenOvalFillColor =
//       'transparent';
//     currentDynamicDimmingCustomization.guidanceCustomization.readyScreenTextBackgroundColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.retryScreenImageBorderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.retryScreenOvalStrokeColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.retryScreenSlideshowImages =
//       retryScreenSlideshowImages;
//     currentDynamicDimmingCustomization.guidanceCustomization.cameraPermissionsScreenImage =
//       themeResourceDirectory + 'pseudo-fullscreen/camera_shutter_black.png';
//     // ID Scan Customization
//     currentDynamicDimmingCustomization.idScanCustomization.selectionScreenDocumentImage =
//       themeResourceDirectory + 'pseudo-fullscreen/document_offwhite.png';
//     currentDynamicDimmingCustomization.idScanCustomization.selectionScreenBrandingImage =
//       '';
//     currentDynamicDimmingCustomization.idScanCustomization.captureScreenForegroundColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.reviewScreenForegroundColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.selectionScreenForegroundColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonTextNormalColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonBackgroundNormalColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonTextHighlightColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonBackgroundHighlightColor =
//       'white';
//     currentDynamicDimmingCustomization.idScanCustomization.buttonTextDisabledColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonBackgroundDisabledColor =
//       'rgba(238, 246, 248, 0.3)';
//     currentDynamicDimmingCustomization.idScanCustomization.buttonBorderColor =
//       'transparent';
//     currentDynamicDimmingCustomization.idScanCustomization.captureScreenTextBackgroundColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.idScanCustomization.captureScreenTextBackgroundBorderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.reviewScreenTextBackgroundColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.idScanCustomization.reviewScreenTextBackgroundBorderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.captureFrameStrokeColor =
//       primaryColor;
//     // OCR Confirmation Screen Customization
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.mainHeaderDividerLineColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.mainHeaderTextColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.sectionHeaderTextColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.fieldLabelTextColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.fieldValueTextColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldTextColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldPlaceholderTextColor =
//       'rgba(59, 195, 113, 0.4)';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldBackgroundColor =
//       'transparent';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldBorderColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonTextNormalColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonBackgroundNormalColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonTextHighlightColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonBackgroundHighlightColor =
//       'white';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonTextDisabledColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonBackgroundDisabledColor =
//       'rgba(238, 246, 248, 0.3)';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonBorderColor =
//       'transparent';
//     // Result Screen Customization
//     currentDynamicDimmingCustomization.resultScreenCustomization.foregroundColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.resultScreenCustomization.activityIndicatorColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.resultScreenCustomization.customActivityIndicatorImage =
//       themeResourceDirectory +
//       'pseudo-fullscreen/activity_indicator_faded_black.png';
//     currentDynamicDimmingCustomization.resultScreenCustomization.customActivityIndicatorAnimation =
//       activityIndicatorSVG;
//     currentDynamicDimmingCustomization.resultScreenCustomization.resultAnimationBackgroundColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.resultScreenCustomization.resultAnimationForegroundColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.resultScreenCustomization.resultAnimationSuccessBackgroundImage =
//       '';
//     currentDynamicDimmingCustomization.resultScreenCustomization.resultAnimationUnsuccessBackgroundImage =
//       '';
//     currentDynamicDimmingCustomization.resultScreenCustomization.customResultAnimationSuccess =
//       successResultAnimationSVG;
//     currentDynamicDimmingCustomization.resultScreenCustomization.customResultAnimationUnsuccess =
//       unsuccessResultAnimationSVG;
//     currentDynamicDimmingCustomization.resultScreenCustomization.showUploadProgressBar =
//       true;
//     currentDynamicDimmingCustomization.resultScreenCustomization.uploadProgressTrackColor =
//       'rgba(238, 246, 248, 0.2)';
//     currentDynamicDimmingCustomization.resultScreenCustomization.uploadProgressFillColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.resultScreenCustomization.animationRelativeScale = 1.0;
//     // Feedback Customization
//     currentDynamicDimmingCustomization.feedbackCustomization.backgroundColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.feedbackCustomization.textColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.feedbackCustomization.shadow =
//       '0px 3px 10px black';
//     // Frame Customization
//     currentDynamicDimmingCustomization.frameCustomization.borderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.frameCustomization.shadow = 'none';
//     // Oval Customization
//     currentDynamicDimmingCustomization.ovalCustomization.strokeColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ovalCustomization.progressColor1 =
//       'rgba(59, 195, 113, 0.7)';
//     currentDynamicDimmingCustomization.ovalCustomization.progressColor2 =
//       'rgba(59, 195, 113, 0.7)';
//     // Cancel Button Customization
//     currentDynamicDimmingCustomization.cancelButtonCustomization.customImage =
//       themeResourceDirectory +
//       'pseudo-fullscreen/single_chevron_left_offwhite.png';
//     // Guidance Customization -- Text Style Overrides
//     // Ready Screen Header
//     currentDynamicDimmingCustomization.guidanceCustomization.readyScreenHeaderTextColor =
//       primaryColor;
//     // Ready Screen Subtext
//     currentDynamicDimmingCustomization.guidanceCustomization.readyScreenSubtextTextColor =
//       primaryColor;
//     // Retry Screen Header
//     currentDynamicDimmingCustomization.guidanceCustomization.retryScreenHeaderTextColor =
//       primaryColor;
//     // Retry Screen Subtext
//     currentDynamicDimmingCustomization.guidanceCustomization.retryScreenSubtextTextColor =
//       primaryColor;
//   } else if (theme === 'Bitcoin Exchange') {
//     // Overlay Customization
//     currentDynamicDimmingCustomization.overlayCustomization.brandingImage =
//       themeResourceDirectory +
//       'bitcoin-exchange/bitcoin_exchange_logo_white.png';
//   } else if (theme === 'eKYC') {
//     var primaryColor = 'rgb(237, 28, 36)'; // red
//     var secondaryColor = 'white';
//     var backgroundColor = 'black';
//     var activityIndicatorSVG = document.createElementNS(
//       'http://www.w3.org/2000/svg',
//       'svg'
//     );
//     activityIndicatorSVG.setAttribute('viewBox', '0 0 52 52');
//     activityIndicatorSVG.classList.add('ekyc-activity-indicator-svg__white');
//     activityIndicatorSVG.innerHTML =
//       "<defs><filter id='goo'><feGaussianBlur in='SourceGraphic' stdDeviation='2' result='blur' /><feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9' result='goo' /><feComposite in='SourceGraphic' in2='goo' operator='atop'/></filter></defs><g filter='url(#goo)'><g transform='translate(26 26)'><circle class='circlePath1' cx='7' cy='26' r='3'><animateTransform attributeName='transform' dur='1s' type='translate' values='0,0; -6,-26; 0,0' repeatCount='indefinite' begin='0s'/><animateTransform attributeName='transform' attributeType='XML' dur='1s' type='scale' values='1;2;1' repeatCount='indefinite' additive='sum' begin='0s'/></circle><animateTransform attributeName='transform' dur='1s' type='rotate' from='0 26 26' to='360 26 26' repeatCount='indefinite' begin='0s'/></g>  <g transform='translate(26 26)'><circle class='circlePath2' cx='7' cy='26' r='3'><animateTransform attributeName='transform' dur='1.2s' type='translate' values='0,0; -6,-26; 0,0' repeatCount='indefinite' begin='0s'/><animateTransform attributeName='transform' attributeType='XML' dur='1.2s' type='scale' values='1;2;1' repeatCount='indefinite' additive='sum' begin='0s'/></circle><animateTransform attributeName='transform' dur='1.2s' type='rotate' from='0 26 26' to='360 26 26' repeatCount='indefinite' begin='0s'/></g>  <g transform='translate(26 26)'><circle class='circlePath3' cx='7' cy='26' r='3'><animateTransform attributeName='transform' dur='1.5s' type='translate' values='0,0; -6,-26; 0,0' repeatCount='indefinite' begin='0s'/><animateTransform attributeName='transform' dur='1.5s' type='scale' values='1;2;1' repeatCount='indefinite' additive='sum' begin='0s'/></circle><animateTransform attributeName='transform' dur='1.5s' type='rotate' from='0 26 26' to='360 26 26' repeatCount='indefinite' begin='0s'/></g>  <g transform='translate(26 26)'><circle class='circlePath4' cx='7' cy='26' r='3'><animateTransform attributeName='transform' dur='2s' type='translate' values='0,0; -6,-26; 0,0' repeatCount='indefinite' begin='0s'/><animateTransform attributeName='transform' dur='2s' type='scale' values='1;2;1' repeatCount='indefinite' additive='sum' begin='0s'/></circle><animateTransform attributeName='transform' dur='2s' type='rotate' from='0 26 26' to='360 26 26' repeatCount='indefinite' begin='0s'/></g> </g>";
//     var successResultAnimationSVG = document.createElementNS(
//       'http://www.w3.org/2000/svg',
//       'svg'
//     );
//     successResultAnimationSVG.setAttribute('viewBox', '0 0 52 52');
//     successResultAnimationSVG.classList.add('ekyc-success-svg__white');
//     successResultAnimationSVG.innerHTML =
//       "<path class='checkmarkPath__back' d='M14.1 27.2l7.1 7.2 16.7-16.8'></path><path class='checkmarkPath__front' d='M14.1 27.2l7.1 7.2 16.7-16.8'></path>";
//     var unsuccessResultAnimationSVG = document.createElementNS(
//       'http://www.w3.org/2000/svg',
//       'svg'
//     );
//     unsuccessResultAnimationSVG.setAttribute('viewBox', '0 0 52 52');
//     unsuccessResultAnimationSVG.classList.add('ekyc-unsuccess-svg__white');
//     unsuccessResultAnimationSVG.innerHTML =
//       "<line class='crossPath1__back' x1='18' y1='18' x2='34' y2='34'></line><line class='crossPath2__back' x1='34' y1='18' x2='18' y2='34'></line><line class='crossPath1__front' x1='18' y1='18' x2='34' y2='34'></line><line class='crossPath2__front' x1='34' y1='18' x2='18' y2='34'></line>";
//     // Overlay Customization
//     currentDynamicDimmingCustomization.overlayCustomization.brandingImage =
//       themeResourceDirectory + 'ekyc/ekyc_logo_white.png';
//     // Guidance Customization
//     currentDynamicDimmingCustomization.guidanceCustomization.foregroundColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonTextNormalColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonBackgroundNormalColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonTextHighlightColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonBackgroundHighlightColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonTextDisabledColor =
//       'rgba(237, 28, 36, 0.3)';
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonBackgroundDisabledColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.buttonBorderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.readyScreenOvalFillColor =
//       'transparent';
//     currentDynamicDimmingCustomization.guidanceCustomization.readyScreenTextBackgroundColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.retryScreenImageBorderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.retryScreenOvalStrokeColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.guidanceCustomization.retryScreenSlideshowImages =
//       retryScreenSlideshowImages;
//     // ID Scan Customization
//     currentDynamicDimmingCustomization.idScanCustomization.selectionScreenDocumentImage =
//       '';
//     currentDynamicDimmingCustomization.idScanCustomization.selectionScreenBrandingImage =
//       '';
//     currentDynamicDimmingCustomization.idScanCustomization.captureScreenForegroundColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.idScanCustomization.reviewScreenForegroundColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.idScanCustomization.selectionScreenForegroundColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonTextNormalColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonBackgroundNormalColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonTextHighlightColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonBackgroundHighlightColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonTextDisabledColor =
//       'rgba(237, 28, 36, 0.3)';
//     currentDynamicDimmingCustomization.idScanCustomization.buttonBackgroundDisabledColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.idScanCustomization.buttonBorderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.captureScreenTextBackgroundColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.captureScreenTextBackgroundBorderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.reviewScreenTextBackgroundColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.reviewScreenTextBackgroundBorderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.idScanCustomization.captureFrameStrokeColor =
//       primaryColor;
//     // OCR Confirmation Screen Customization
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.mainHeaderDividerLineColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.mainHeaderTextColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.sectionHeaderTextColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.fieldLabelTextColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.fieldValueTextColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldTextColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldPlaceholderTextColor =
//       'rgba(0, 0, 0, 0.4)';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldBackgroundColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.inputFieldBorderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonTextNormalColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonBackgroundNormalColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonTextHighlightColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonBackgroundHighlightColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonTextDisabledColor =
//       'rgba(237, 28, 36, 0.3)';
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonBackgroundDisabledColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.ocrConfirmationCustomization.buttonBorderColor =
//       primaryColor;
//     // Result Screen Customization
//     currentDynamicDimmingCustomization.resultScreenCustomization.foregroundColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.resultScreenCustomization.activityIndicatorColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.resultScreenCustomization.customActivityIndicatorImage =
//       '';
//     currentDynamicDimmingCustomization.resultScreenCustomization.customActivityIndicatorAnimation =
//       activityIndicatorSVG;
//     currentDynamicDimmingCustomization.resultScreenCustomization.resultAnimationBackgroundColor =
//       'transparent';
//     currentDynamicDimmingCustomization.resultScreenCustomization.resultAnimationForegroundColor =
//       'transparent';
//     currentDynamicDimmingCustomization.resultScreenCustomization.resultAnimationSuccessBackgroundImage =
//       '';
//     currentDynamicDimmingCustomization.resultScreenCustomization.resultAnimationUnsuccessBackgroundImage =
//       '';
//     currentDynamicDimmingCustomization.resultScreenCustomization.customResultAnimationSuccess =
//       successResultAnimationSVG;
//     currentDynamicDimmingCustomization.resultScreenCustomization.customResultAnimationUnsuccess =
//       unsuccessResultAnimationSVG;
//     currentDynamicDimmingCustomization.resultScreenCustomization.uploadProgressTrackColor =
//       'rgba(255, 255, 255, 0.2)';
//     currentDynamicDimmingCustomization.resultScreenCustomization.uploadProgressFillColor =
//       primaryColor;
//     // Feedback Customization
//     currentDynamicDimmingCustomization.feedbackCustomization.backgroundColor =
//       secondaryColor;
//     currentDynamicDimmingCustomization.feedbackCustomization.textColor =
//       backgroundColor;
//     currentDynamicDimmingCustomization.feedbackCustomization.shadow =
//       '0px 3px 6px 3px rgba(237, 28, 36, 0.7)';
//     // Frame Customization
//     currentDynamicDimmingCustomization.frameCustomization.borderColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.frameCustomization.shadow =
//       '0px 3px 6px 3px rgba(237, 28, 36, 0.7)';
//     // Oval Customization
//     currentDynamicDimmingCustomization.ovalCustomization.strokeColor =
//       primaryColor;
//     currentDynamicDimmingCustomization.ovalCustomization.progressColor1 =
//       'rgba(237, 28, 36, 0.7)';
//     currentDynamicDimmingCustomization.ovalCustomization.progressColor2 =
//       'rgba(237, 28, 36, 0.7)';
//     // Cancel Button Customization
//     currentDynamicDimmingCustomization.cancelButtonCustomization.customImage =
//       themeResourceDirectory + 'ekyc/cancel_box_red.png';
//   }
//   return currentDynamicDimmingCustomization;
// }

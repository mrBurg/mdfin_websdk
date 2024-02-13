function contentReady() {
  window.start = function () {
    const recognid = new RecognID(
      {
        // logger: true,
        dev: 'https://localhost:8443',
        // dev: true,
        apiKey: 'Basic bWRmaW46cXdlcnR5MTIzNDU=',
        parentId: 'recognid-root',
        onSession(err, response) {
          if (err) {
            throw err;
          }

          console.group('Response data');
          console.log(response);
          console.groupEnd();

          fetch('https://localhost:8443/api/ekyc/response', {
            method: 'POST',
            body: JSON.stringify(response),
          });
        },
      } /* as TRecognidProps */
    );

    recognid.setParams(
      {
        locale: 'en',
        resources: '/liveness-static/facetec/resources',
      } /* as TParams */
    );

    recognid.init(
      {
        request_id: 'req_credit_rapid',
        // return_url: 'https://recid.finmdtest.com?resp',
        webhook_url:
          'https://recid.finmdtest.com/api/operation/test/webhook?source=credit-rapid',
        stages: ['LivenessDetection', 'IDDocVerification', 'WatchlistsCheck'],
        language: 'ro',
      } /* TInitProps */
    );
  };

  window.start();
}

document.addEventListener('DOMContentLoaded', contentReady);

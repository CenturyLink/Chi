
'use strict';
(function () {
  var currentScript = document.currentScript;

  // Safari 10 support type="module" but still download and executes the nomodule script
  if (!currentScript || !currentScript.hasAttribute('nomodule') || !('onbeforeload' in currentScript)) {

    /* polyfills excluded */

    // Figure out currentScript (for IE11, since it does not support currentScript)
    var regex = /\/ux-chi-ce(\.esm)?\.js($|\?|#)/;
    var scriptElm = currentScript || Array.from(document.querySelectorAll('script')).find(function(s) {
      return regex.test(s.src) || s.getAttribute('data-stencil-namespace') === "ux-chi-ce";
    });

    var resourcesUrl = scriptElm ? scriptElm.getAttribute('data-resources-url') || scriptElm.src : '';
    var start = function() {
      // if src is not present then origin is "null", and new URL() throws TypeError: Failed to construct 'URL': Invalid base URL
      var url = new URL('./p-a77f81f3.system.js', new URL(resourcesUrl, window.location.origin !== 'null' ? window.location.origin : undefined));
      System.import(url.href);
    };

    start();

    // Note: using .call(window) here because the self-executing function needs
    // to be scoped to the window object for the ES6Promise polyfill to work
  }
}).call(window);

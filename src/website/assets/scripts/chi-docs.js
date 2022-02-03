const onLoadCallbacks = [];
let onLoadExecuted = false;
const processedAnchors = {
  all: [],
  latestH3: ''
};

function onLoad(callback) {
  if (!onLoadExecuted) {
    onLoadCallbacks.push(callback);
  } else {
    callback();
  }
}

function executeOnLoadCallbacks() {
  onLoadExecuted = true;
  onLoadCallbacks.forEach(callback => callback());
}

if (window.attachEvent) {
  window.attachEvent('onload', executeOnLoadCallbacks);
} else {
  if (window.onload) {
      const currentOnLoad = window.onload;
      const newOnLoad = function(evt) {
        currentOnLoad(evt);
        executeOnLoadCallbacks(evt);
      };
      window.onload = newOnLoad;
  } else {
    window.onload = executeOnLoadCallbacks;
  }
}

function addClass(item, className) {
  const classes = item.className.split(' ');

  if (classes.indexOf(className) === -1) {
    classes.push(className);
  }

  item.className = classes.join(' ');
}

function removeClass(item, className) {
  const classes = item.className.split(' ');

  item.className = classes.filter(name => name !== className);
}

function addId(item) {
  var id = item.textContent.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();

  if (item.nodeName === 'H3') {
    processedAnchors.latestH3 = id;
  }
  let counter = 1;
  while (processedAnchors.all.indexOf(id) !== -1) {
    id = id.replace(/^(.*?)(-\d+)?$/, '$1-' + counter);
    counter++;
  }
  item.id = id;
  processedAnchors.all.push(id);
}

function enableCopyToClipboardFeature(preElem) {

  const code = preElem.childNodes && preElem.childNodes[0];

  if (code.nodeName !== 'CODE' || !code.textContent) {
    return;
  }

  const copyButtonWrapper = document.createElement('div');
  copyButtonWrapper.setAttribute('class', 'clipboard');
  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copy';
  copyButton.setAttribute('class', 'clipboard__button chi-button -xs -flat');
  copyButtonWrapper.appendChild(copyButton);
  const textAreaWrapper = document.createElement('div');
  textAreaWrapper.setAttribute('class', 'clipboard__text-wrapper');
  copyButtonWrapper.appendChild(textAreaWrapper);

  preElem.parentNode.insertBefore(copyButtonWrapper, preElem);

  const copy = function() {
    const textArea = document.createElement("textarea");
    textArea.textContent = code.textContent;
    textArea.style.opacity = "0.01";
    textAreaWrapper.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textAreaWrapper.removeChild(textArea);
  };

  copyButton.addEventListener('click', copy);

}

onLoad(() => {

  var examples = document.querySelectorAll('.chi-example');

  Array.prototype.forEach.call(examples, function(example) {
    const firstChild = example.querySelector('li:first-child');
    const lastChild = example.querySelector('li:last-child');
    const htmlItem = example.querySelector('.chi-example__html');
    const codeItem = example.querySelector('.chi-example__code');

    firstChild.onclick = function(evt) {
      evt.preventDefault();

      addClass(firstChild, '-active');
      removeClass(lastChild, '-active');
      removeClass(htmlItem, '-hidden');
      addClass(codeItem, '-hidden');
    };

    lastChild.onclick = function(evt) {
      evt.preventDefault();

      removeClass(firstChild, '-active');
      addClass(lastChild, '-active');
      addClass(htmlItem, '-hidden');
      removeClass(codeItem, '-hidden');
    };
  });

  var anchors = [];

  Array.prototype.forEach.call(
    document.querySelectorAll('h2,h3,h4'),
    function(heading) {
      const docs = document.querySelector('.docs-body:not(.-non-doc)');

      if (docs && docs.contains(heading)) {
        anchors.push(heading);
      }
    });

  // Polyfill element.closest IE9+
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  Array.prototype.forEach.call(anchors, function(anchor) {
    const spanContainer = document.createElement('span');
    const anchorLink = document.createElement('a');
    const paramTheme = window.theme ? `?theme=${window.theme}` : '';

    if (anchor.closest(".example")) {
      return;
    } else {
      addClass(anchor, '-anchor');
      addId(anchor);
      spanContainer.appendChild(anchorLink);
      anchorLink.textContent = '#';
      anchorLink.setAttribute('class', '-ml--1');
      anchorLink.setAttribute('href', paramTheme + '#' + anchor.id);
      anchor.appendChild(spanContainer);
      if (window.location.hash === '#' + anchor.id) {
        window.location.hash = '#';
        window.location.hash = '#' + anchor.id;
      }
    }
  });

  var codeSnippets = document.getElementsByTagName('pre');
  Array.prototype.forEach.call(codeSnippets, function(codeSnippet) {
    if (codeSnippet.hasChildNodes('code')) {
      enableCopyToClipboardFeature(codeSnippet);
    }
  });

  var dropdownButton = document.getElementById('version-dropdown');
  chi.dropdown(dropdownButton);
  chi.dropdown(document.getElementById('support'));

  var urlHash = window.location.hash;
  var tabContentId;

  if (urlHash) {
    const activeTab = document.querySelector('#viewtabs li.-active');

    if (activeTab) {
      if (document.querySelector(`article ${urlHash}`)) {
        activeTab.classList.remove('-active');
      }
    }

    Array.prototype.forEach.call(document.querySelectorAll('article.docs-article > section.chi-grid__container > .chi-tabs-panel'), function(tabContent) {
      if (document.querySelector(`article ${urlHash}`)) {
        tabContent.classList.remove('-active');
      }
      if (tabContent && tabContent.contains(document.querySelector(`${urlHash}`))) {
        tabContent.classList.add('-active');
        tabContentId = tabContent.id;
        document.querySelector(`[href*=${tabContentId}]`).parentNode.classList.add('-active');
      }
    });
  }

  var docsSidenavAccessibilityAccordion = document.querySelector('nav.docs-sidenav .accessibility-accordion');
  var drawerAccessibilityAccordion = document.querySelector('div#drawer-sidenav .accessibility-accordion');

  if (docsSidenavAccessibilityAccordion) {
    chi.accordion(docsSidenavAccessibilityAccordion);
  }

  if (drawerAccessibilityAccordion) {
    chi.accordion(drawerAccessibilityAccordion);
  }

  var url = new URL(window.location.href);
  var urlThemeParam = url.searchParams.get("theme");
  var themeAssets = {
    chiCss: document.getElementById('chi-css'),
    docsCss: document.getElementById('docs-css'),
    faviconSvg: document.getElementById('favicon-svg'),
    faviconIco: document.getElementById('favicon-ico')
  };
  var rootUrl = window.location.hostname === 'assets.ctl.io' ?
    'https://assets.ctl.io/chi/' + window.chiCurrentVersion + '/' :
    window.location.hostname === 'assets-dev.ctl.io' ?
      'https://assets-dev.ctl.io/chi/staging/' : 
    window.location.hostname === 'lib.lumen.com' ?
      'https://lib.lumen.com/chi/' + window.chiCurrentVersion + '/' : '/';

  var themes = {
    Lumen: {
      chiCss: rootUrl + 'chi.css',
      docsCss: rootUrl + 'assets/themes/lumen/docs.css',
      faviconSvg: rootUrl + 'assets/themes/lumen/images/favicon.svg',
      faviconIco: rootUrl + 'assets/themes/lumen/images/favicon.ico',
      trigger: '.theme-trigger-lumen'
    },
    CenturyLink: {
      chiCss: rootUrl + 'chi-centurylink.css',
      docsCss: rootUrl + 'assets/themes/centurylink/docs.css',
      faviconSvg: rootUrl + 'assets/themes/centurylink/images/favicon.svg',
      faviconIco: rootUrl + 'assets/themes/centurylink/images/favicon.ico',
      trigger: '.theme-trigger-centurylink'
    },
    Portal: {
      chiCss: rootUrl + 'chi-portal.css',
      docsCss: rootUrl + 'assets/themes/portal/docs.css',
      faviconSvg: rootUrl + 'assets/themes/lumen/images/favicon.svg',
      faviconIco: rootUrl + 'assets/themes/lumen/images/favicon.ico',
      trigger: '.theme-trigger-portal'
    },
    Brightspeed: {
      chiCss: rootUrl + 'chi-brightspeed.css',
      docsCss: rootUrl + 'assets/themes/brightspeed/docs.css',
      faviconSvg: rootUrl + 'assets/themes/brightspeed/images/favicon.svg',
      faviconIco: rootUrl + 'assets/themes/brightspeed/images/favicon.ico',
      trigger: '.theme-trigger-brightspeed'
    }
  };

  function updateAnchorHrefs() {
    if (window.theme) {
      Array.prototype.forEach.call(
        document.querySelectorAll('.-anchor'), function(anchor) {
          const anchorLink = anchor.querySelector('a');
          const paramTheme = window.theme ? `?theme=${window.theme}` : '';

          anchorLink.setAttribute('href', paramTheme + '#' + anchor.id);
        });
    }
  }

  window.switchTheme = function(theme, anchorTarget) {
    var logoElement = document.getElementById('header-logo');
    var themeSwitchButtons = document.querySelectorAll('button.-theme-switch');

    window.theme = theme;
    if (logoElement) {
      logoElement.parentNode.setAttribute('aria-label', theme);
      if (theme === 'CenturyLink') {
        logoElement.logo = theme.toLowerCase();
        logoElement.color = 'black';
      } 
      else if (theme === 'Brightspeed') {
        logoElement.logo = theme.toLowerCase();

        if (logoElement.color) {
          logoElement.removeAttribute('color');
        }
      } else {
        logoElement.logo = 'lumen';

        if (logoElement.color) {
          logoElement.removeAttribute('color');
        }
      }
    }

    localStorage.setItem('chiTheme', theme);
    document.querySelector('html').setAttribute('class', `chi theme-${theme.toLowerCase()}`);

    function replaceAsset(currentAsset, replacementHref) {
      const replacement = document.createElement('LINK');

      replacement.setAttribute('rel', 'stylesheet');
      replacement.setAttribute('href', replacementHref);
      currentAsset.parentNode
        .insertBefore(replacement, currentAsset.nextSibling);
      replacement.addEventListener('load', function() {
        const assetId = currentAsset.getAttribute('id');

        replacement.setAttribute('id', assetId);
        currentAsset.remove();
      });
    }

    Array.prototype.forEach.call(
      ['chiCss', 'docsCss', 'faviconSvg', 'faviconIco'],
      function(asset) {
        if (asset === 'chiCss') {
          const chiCssElement = document.getElementById('chi-css');

          replaceAsset(chiCssElement, themes[theme][asset]);
        } else if (asset === 'docsCss') {
          const docsCssElement = document.getElementById('docs-css');

          replaceAsset(docsCssElement, themes[theme][asset]);
        } else {
          themeAssets[asset].setAttribute('href', themes[theme][asset]);
        }
      }
    );

    Array.prototype.forEach.call(
      themeSwitchButtons,
      function(button) {
        const buttonImg = button.querySelector('img.-favicon');
        const buttonThemeName = button.querySelector('.-theme-name');

        if (anchorTarget) {
          const themeFavicon = anchorTarget.querySelector('img').getAttribute('src');
  
          buttonImg.setAttribute('src', themeFavicon);
          buttonThemeName.innerText = anchorTarget.dataset.theme;
        }
      }
    );
    updateAnchorHrefs()
  };

  if (urlThemeParam && themes.hasOwnProperty(urlThemeParam)) {
    switchTheme(urlThemeParam,
      document.querySelector(themes[urlThemeParam].trigger));
  } else if (window.localStorage.getItem('chiTheme')) {
    const localStorageTheme = window.localStorage.getItem('chiTheme');

    switchTheme(localStorageTheme,
      document.querySelector(themes[localStorageTheme].trigger));
  } else {
    switchTheme('Lumen',
      document.querySelector(themes.Lumen.trigger));
  }

  chi.dropdown(document.querySelectorAll('.-theme-switch'));
});

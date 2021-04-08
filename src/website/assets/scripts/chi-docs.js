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

function enableCopyToClipboardFeature (preElem) {

  const code = preElem.childNodes && preElem.childNodes[0];

  if ( code.nodeName !== 'CODE' || !code.textContent ) {
    return;
  }

  const copyButtonWrapper = document.createElement('div');
  copyButtonWrapper.setAttribute('class', 'clipboard');
  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copy';
  copyButton.setAttribute('class', 'clipboard__button chi-button -sm -flat');
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
    if (anchor.closest(".example")) {
      return;
    } else {
      addClass(anchor, '-anchor');
      addId(anchor);
      spanContainer.appendChild(anchorLink);
      anchorLink.textContent = '#';
      anchorLink.setAttribute('class', '-ml--1');
      anchorLink.setAttribute('href', '#'+anchor.id);
      anchor.appendChild(spanContainer);
      if (window.location.hash === '#'+anchor.id) {
        window.location.hash = '#';
        window.location.hash = '#'+anchor.id;
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

    Array.prototype.forEach.call(document.querySelectorAll('article.docs-article > section.chi-grid__container > .chi-tabs-panel'), function (tabContent) {
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
  var themes = {
    Lumen: {
      chiCss: '/chi.css',
      docsCss: '/assets/themes/lumen/docs.css',
      faviconSvg: '/assets/themes/lumen/images/favicon.svg',
      faviconIco: '/assets/themes/lumen/images/favicon.ico',
      trigger: '.theme-trigger-lumen'
    },
    CenturyLink: {
      chiCss: '/chi-centurylink.css',
      docsCss: '/assets/themes/centurylink/docs.css',
      faviconSvg: '/assets/themes/centurylink/images/favicon.svg',
      faviconIco: '/assets/themes/centurylink/images/favicon.ico',
      trigger: '.theme-trigger-centurylink'
    }
  };

  window.switchTheme = function(theme, anchorTarget) {
    var themeFavicon = anchorTarget.querySelector('img').getAttribute('src');
    var themeSwitchButtons = document.querySelectorAll('button.-theme-switch');

    window.theme = theme;
    localStorage.setItem('chiTheme', theme);
    document.querySelector('html').setAttribute('class', `chi theme-${theme.toLowerCase()}`);

    Array.prototype.forEach.call(
      ['chiCss', 'docsCss', 'faviconSvg', 'faviconIco'],
      function(asset) {
        themeAssets[asset].setAttribute('href', themes[theme][asset]);
      }
    );

    Array.prototype.forEach.call(
      themeSwitchButtons,
      function(button) {
        const buttonImg = button.querySelector('img.-favicon');
        const buttonThemeName = button.querySelector('.-theme-name');

        buttonImg.setAttribute('src', themeFavicon);
        buttonThemeName.innerText = window.theme;
      }
    );
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

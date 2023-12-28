import { CHI_LIB_LUMEN } from './constants';
import ChiJs from '../utils/chi.js?raw';

export const importCss = (version: string, theme: string) => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const themeToUse = theme !== 'lumen' ? `chi-${theme}.css` : 'chi.css';

  const createUrl = () => `${CHI_LIB_LUMEN}/${version}/${themeToUse}`;

  const styleSheets = Array.from(head.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'));
  const hrefExists = styleSheets.some(({ href }) => href.endsWith(themeToUse));

  if (!hrefExists) {
    const cssLink = document.createElement('link');

    cssLink.rel = 'stylesheet';
    cssLink.href = createUrl();
    cssLink.crossOrigin = 'anonymous';

    if (head.firstChild) {
      head.insertBefore(cssLink, head.firstChild);
    } else {
      head.appendChild(cssLink);
    }

    document.documentElement.classList.add('chi');
  }
};

export const importWebComponents = (version: string) => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const createUrl = (fileName: string) => `${CHI_LIB_LUMEN}/${version}/js/ce/ux-chi-ce/${fileName}`;

  const ESM = 'ux-chi-ce.esm.js';
  const JS = 'ux-chi-ce.js';

  const scripts = Array.from(head.querySelectorAll<HTMLScriptElement>('script'));
  const scriptEsmExists = scripts.some(({ src }) => src.endsWith(ESM));
  const scriptJsExists = scripts.some(({ src }) => src.endsWith(JS));

  const addScriptToHead = (isModule: boolean) => {
    const script = document.createElement('script');

    script.src = createUrl(isModule ? ESM : JS);
    script.crossOrigin = 'anonymous';

    if (isModule) {
      script.type = 'module';
    } else {
      script.noModule = true;
    }

    head.appendChild(script);
  };

  if (!scriptEsmExists) addScriptToHead(true);
  if (!scriptJsExists) addScriptToHead(false);
};

export const importJs = (w: Window) => {
  // TypeScript doesn't know about the eval function on the window object
  (w as any).eval(ChiJs);
};

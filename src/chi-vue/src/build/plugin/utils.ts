import { CHI_LIB_LUMEN } from './constants';
import ChiJs from '../utils/chi.js?raw';

export const importCss = (version: string, theme: 'lumen' | 'lumen-rebrand24' |'portal' | 'portal-rebrand24' | 'brightspeed' | 'centuryLink' | 'colt') => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const themeToUse = theme !== 'lumen' ? `chi-${theme}.css` : 'chi.css';

  const createUrl = () => `${CHI_LIB_LUMEN}/${version}/${themeToUse}`;

  const styleSheets = Array.from(head.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'));
  const hrefExists = styleSheets.some(({ href }) => href.endsWith(themeToUse));

  if (!hrefExists) {
    const cssLink = document.createElement('link');

    cssLink.id = 'chi-theme';
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

  const scripts = Array.from(head.querySelectorAll<HTMLScriptElement>('script'));
  const scriptEsmExists = scripts.some(({ src }) => src.endsWith(ESM));

  const addScriptToHead = () => {
    const script = document.createElement('script');

    script.src = createUrl(ESM);
    script.crossOrigin = 'anonymous';

    script.type = 'module';

    head.appendChild(script);
  };

  if (!scriptEsmExists) addScriptToHead();
};

export const importJs = (w: Window) => {
  // TypeScript doesn't know about the eval function on the window object
  (w as any).eval(ChiJs);
};

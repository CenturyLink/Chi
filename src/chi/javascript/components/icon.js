import { Util } from '../core/util.js';
import { chi } from '../core/chi.js';

const ICON_SELECTOR = '.chi-icon';
const LOADING_CLASS = '-loading';
const HIDDEN_CLASS = chi.classes.DISPLAY.NONE;
const ICON_FONT = '1em "Material Symbols Outlined"';
const NAMED_ICON = /(^|\s)icon-[\w-]+/;
const LOGO_ICON = /(^|\s)icon-logo-/;
const STYLE_RETRY_FRAMES = 300;
const LIGATURE_GLYPH_RATIO = 1.4;

let fontReady = false;
let fontLoaded = false;
let fontWatched = false;
let retryRunning = false;
let sawUnstyled = false;
let observer = null;

const forEach = Function.prototype.call.bind(Array.prototype.forEach);

function computed(el, pseudo) {
  return window.getComputedStyle(el, pseudo || null);
}

function isChiStyled(el) {
  try {
    return computed(el).fontFamily.indexOf('Material Symbols') !== -1;
  } catch (e) {
    return true;
  }
}

function hasGlyph(el) {
  try {
    const glyph = computed(el, '::before').content;

    return !!glyph && glyph !== 'none' && glyph !== 'normal';
  } catch (e) {
    return true;
  }
}

function hasText(el) {
  return !!(el.textContent && el.textContent.trim());
}

function isUnresolvedLigature(el) {
  try {
    const range = document.createRange();

    range.selectNodeContents(el);

    const width = range.getBoundingClientRect().width;
    const fontSize = parseFloat(computed(el).fontSize) || 0;

    return fontSize > 0 && width > fontSize * LIGATURE_GLYPH_RATIO;
  } catch (e) {
    return false;
  }
}

function skip(el, classes) {
  return !!((el.closest && el.closest('chi-icon')) || LOGO_ICON.test(classes));
}

function watchFont() {
  if (fontWatched) {
    return;
  }
  fontWatched = true;

  const fonts = typeof document !== 'undefined' && document.fonts;

  if (!fonts || typeof fonts.load !== 'function') {
    fontReady = true;
    fontLoaded = true;
    return;
  }

  try {
    if (fonts.check(ICON_FONT)) {
      fontReady = true;
    }
  } catch (e) {
    fontReady = true;
  }

  const onLoaded = () => {
    fontReady = true;
    fontLoaded = true;
    enhanceAll();
  };

  fonts.load(ICON_FONT).then(onLoaded, onLoaded);
}

function enhanceIcon(el) {
  const classes = el.className || '';

  if (skip(el, classes)) {
    return;
  }

  if (!isChiStyled(el)) {
    sawUnstyled = true;
    scheduleRetry();
    return;
  }

  if (NAMED_ICON.test(classes) && !hasGlyph(el) && !hasText(el)) {
    Util.addClass(el, HIDDEN_CLASS);
    return;
  }

  watchFont();

  if (!fontReady) {
    Util.addClass(el, LOADING_CLASS);
    return;
  }

  Util.removeClass(el, LOADING_CLASS);

  if (fontLoaded && !hasGlyph(el) && hasText(el) && isUnresolvedLigature(el)) {
    Util.addClass(el, HIDDEN_CLASS);
  }
}

function enhanceAll() {
  if (typeof document !== 'undefined') {
    forEach(document.querySelectorAll(ICON_SELECTOR), enhanceIcon);
  }
}

function scheduleRetry() {
  if (retryRunning || typeof requestAnimationFrame === 'undefined') {
    return;
  }

  retryRunning = true;

  let frames = 0;
  const tick = () => {
    sawUnstyled = false;
    enhanceAll();

    if (sawUnstyled && ++frames < STYLE_RETRY_FRAMES) {
      requestAnimationFrame(tick);
    } else {
      retryRunning = false;
    }
  };

  requestAnimationFrame(tick);
}

function factory(target) {
  if (!target) {
    return;
  }

  if (target.nodeType === 1) {
    enhanceIcon(target);
  } else if (typeof target.length === 'number') {
    forEach(target, factory);
  }
}

function observe() {
  if (observer || typeof MutationObserver === 'undefined' || !document.body) {
    return;
  }

  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      forEach(mutation.addedNodes, (node) => {
        if (node.nodeType !== 1) {
          return;
        }

        if (node.matches && node.matches(ICON_SELECTOR)) {
          enhanceIcon(node);
        }

        if (node.querySelectorAll) {
          factory(node.querySelectorAll(ICON_SELECTOR));
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function autoInit() {
  if (typeof document === 'undefined') {
    return;
  }

  enhanceAll();
  observe();
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
}

const Icon = { initAll: enhanceAll };

export { Icon, factory, autoInit };

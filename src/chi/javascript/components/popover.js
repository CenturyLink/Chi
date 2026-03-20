import { Util } from '../core/util.js';
import { Component } from '../core/component';
import { chi } from '../core/chi';
import { createFloating } from '../core/floating.js';

const COMPONENT_SELECTOR = '[data-popover-content]';
const COMPONENT_TYPE = 'popover';
const CLASS_POPOVER = 'chi-popover';
const ANIMATION_DURATION = 200;
const ANIMATION_TIMEOUT = ANIMATION_DURATION + 50;
const EVENTS = {
  SHOW_DEPRECATED: 'chi.popover.show',
  HIDE_DEPRECATED: 'chi.popover.hide',
  SHOW: 'chiPopoverShow',
  HIDE: 'chiPopoverHide',
  SHOWN: 'chiPopoverShown',
  HIDDEN: 'chiPopoverHidden'
};
const DEFAULT_CONFIG = {
  animate: true,
  arrow: true,
  classes: [],
  content: null,
  delayBetweenInteractions: 50,
  parent: null,
  portal: false,
  position: 'top',
  trigger: 'click',
  preventAutoHide: false
};

const PLACEMENT_CLASSES = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
];

class Popover extends Component {
  constructor(elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));

    this._popoverElem = null;
    this._floating = null;
    this._cleanupAutoUpdate = null;
    this._animationAbortController = null;
    this._animationTimeout = null;
    this._shown = false;
    this._config.parent = this._config.parent || this._elem;
    this._config.position =
      (config && config.position) ||
      (this._elem && this._elem.dataset && this._elem.dataset.position) ||
      (this._config.parent &&
        this._config.parent.dataset &&
        this._config.parent.dataset.position) ||
      this._config.position;

    this._configurePopover();
    this._initDefaultEventListeners();
  }

  _initDefaultEventListeners() {
    let self = this;

    this._mouseClickOnPopover = function() {
      self._closeOnClickOnDocument = false;
    };

    this._addEventHandler(
      this._popoverElem,
      'click',
      this._mouseClickOnPopover
    );

    if (!this._config.preventAutoHide) {
      this._mouseClickOnDocument = function() {
        if (self._closeOnClickOnDocument) {
          self.hide();
        } else {
          self._closeOnClickOnDocument = true;
        }
      };

      this._addEventHandler(document, 'click', this._mouseClickOnDocument);
    }

    if (this._config.trigger === 'click') {
      this._mouseClickEventHandler = function() {
        self._closeOnClickOnDocument = false;
        self.toggle();
      };

      this._addEventHandler(this._elem, 'click', this._mouseClickEventHandler);
    }
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  static get componentSelector() {
    return COMPONENT_SELECTOR;
  }

  show(force) {
    if (!this._popoverElem) return;
    if (this._shown || (!this.allowConsecutiveActions() && !force)) {
      return;
    }

    this._shown = true;
    this._elem.dispatchEvent(Util.createEvent(EVENTS.SHOW_DEPRECATED)); // To be removed in Chi 4.0
    this._elem.dispatchEvent(Util.createEvent(EVENTS.SHOW));

    if (this._animationAbortController) {
      this._animationAbortController.abort();
      this._animationAbortController = null;
    }
    if (this._animationTimeout) {
      clearTimeout(this._animationTimeout);
      this._animationTimeout = null;
    }

    this._popoverElem.removeAttribute('data-state');
    this._popoverElem.style.left = '0';
    this._popoverElem.style.top = '0';
    this._popoverElem.style.display = 'block';
    this._popoverElem.style.visibility = 'hidden';

    if (!this._config.animate) {
      Util.addClass(this._popoverElem, chi.classes.ACTIVE);
      this._popoverElem.setAttribute('aria-hidden', 'false');
      this._popoverElem.style.display = '';
      this._popoverElem.style.visibility = '';
      this._enableAutoUpdate();
      return;
    }

    const self = this;

    self._updatePosition().then(function() {
      if (!self._shown) return;

      self._popoverElem.style.display = '';
      self._popoverElem.style.visibility = '';
      self._popoverElem.setAttribute('data-state', 'open');
      Util.addClass(self._popoverElem, chi.classes.ACTIVE);

      const controller = new AbortController();
      self._animationAbortController = controller;

      self._popoverElem.addEventListener(
        'animationend',
        function(e) {
          if (e.target !== self._popoverElem) return;
          if (!controller.signal.aborted) {
            self._popoverElem.setAttribute('aria-hidden', 'false');
            self._enableAutoUpdate();
            self._popoverElem.dispatchEvent(
              Util.createEvent(EVENTS.SHOWN)
            );
          }
        },
        { once: true, signal: controller.signal }
      );

      self._animationTimeout = setTimeout(function() {
        self._animationTimeout = null;
        if (!controller.signal.aborted) {
          controller.abort();
          self._popoverElem.setAttribute('aria-hidden', 'false');
          self._enableAutoUpdate();
          self._popoverElem.dispatchEvent(
            Util.createEvent(EVENTS.SHOWN)
          );
        }
      }, ANIMATION_TIMEOUT);
    });
  }

  hide(force) {
    if (!this._shown || (!this.allowConsecutiveActions() && !force)) {
      return;
    }

    this._shown = false;
    this._disableAutoUpdate();
    this._elem.dispatchEvent(Util.createEvent(EVENTS.HIDE_DEPRECATED)); // To be removed in Chi 4.0
    this._elem.dispatchEvent(Util.createEvent(EVENTS.HIDE));

    if (this._animationAbortController) {
      this._animationAbortController.abort();
      this._animationAbortController = null;
    }
    if (this._animationTimeout) {
      clearTimeout(this._animationTimeout);
      this._animationTimeout = null;
    }

    if (!this._config.animate) {
      Util.removeClass(this._popoverElem, chi.classes.ACTIVE);
      this._popoverElem.setAttribute('aria-hidden', 'true');
      this._popoverElem.style.display = 'none';
      return;
    }

    const self = this;

    self._popoverElem.setAttribute('data-state', 'closed');

    const controller = new AbortController();
    self._animationAbortController = controller;

    self._popoverElem.addEventListener(
      'animationend',
      function(e) {
        if (e.target !== self._popoverElem) return;
        if (!controller.signal.aborted) {
          Util.removeClass(self._popoverElem, chi.classes.ACTIVE);
          self._popoverElem.setAttribute('aria-hidden', 'true');
          self._popoverElem.style.display = 'none';
          self._popoverElem.dispatchEvent(
            Util.createEvent(EVENTS.HIDDEN)
          );
        }
      },
      { once: true, signal: controller.signal }
    );

    self._animationTimeout = setTimeout(function() {
      self._animationTimeout = null;
      if (!controller.signal.aborted) {
        controller.abort();
        Util.removeClass(self._popoverElem, chi.classes.ACTIVE);
        self._popoverElem.setAttribute('aria-hidden', 'true');
        self._popoverElem.style.display = 'none';
        self._popoverElem.dispatchEvent(
          Util.createEvent(EVENTS.HIDDEN)
        );
      }
    }, ANIMATION_TIMEOUT);
  }

  allowConsecutiveActions() {
    const now = new Date();
    const nowInMillis = now.getTime();
    if (!this.lastActioned) {
      this.lastActioned = nowInMillis;
      return true;
    } else if (
      nowInMillis - this.lastActioned >
      this._config.delayBetweenInteractions
    ) {
      this.lastActioned = nowInMillis;
      return true;
    } else {
      return false;
    }
  }

  toggle() {
    if (this._shown) {
      this.hide();
    } else {
      this.show();
    }
  }

  resetPosition() {
    this._updatePosition();
  }

  _configurePopover() {
    this._configurePopoverElement();
    this._configurePopoverClasses();
    this._configurePopoverContent();
    this._configurePopoverIdAria();
    this._configurePopoverFloating();
  }

  _configurePopoverElement() {
    const target =
      (this._elem.dataset && this._elem.dataset.target) || this._config.target;

    if (target) {
      if (target instanceof Element) {
        this._popoverElem = target;
      } else {
        this._popoverElem = document.querySelector(target);
      }
      this._isPortaled = false;
    } else {
      this._popoverElem = document.createElement('section');

      if (this._config.portal) {
        // Portal handled by createFloating; element appended during
        // _configurePopoverFloating via portalElement.
        this._isPortaled = true;
      } else {
        this._config.parent.parentNode.appendChild(this._popoverElem);
        this._isPortaled = false;
      }
    }
  }

  _configurePopoverClasses() {
    const self = this;
    Util.addClass(this._popoverElem, CLASS_POPOVER);
    this._config.classes.forEach(function(className) {
      Util.addClass(self._popoverElem, className);
    });

    if (!this._config.arrow) {
      Util.addClass(self._popoverElem, '-no-arrow');
    }

    if (this._config.animate) {
      Util.addClass(this._popoverElem, chi.classes.ANIMATED);
    }
  }

  _configurePopoverContent() {
    const content = this._config.content || this._elem.dataset.popoverContent;
    if (content) {
      this.setContent(content);
    }
    if (this._config.arrow) {
      const arrow = document.createElement('div');
      arrow.className = 'chi-popover__arrow';
      this._popoverElem.appendChild(arrow);
    }
  }

  _configurePopoverIdAria() {
    this._popoverElem.id =
      this._popoverElem.id ||
      'chi-' + COMPONENT_TYPE + '-' + this.componentCounterNo;
    this._config.parent.setAttribute('aria-describedby', this._popoverElem.id);
    this._popoverElem.setAttribute('aria-hidden', 'true');
    this._popoverElem.setAttribute('role', 'dialog');
    if (this._popoverElem.querySelector('.chi-popover__title')) {
      this._popoverElem.setAttribute(
        'aria-label',
        this._popoverElem.querySelector('.chi-popover__title').innerHTML
      );
    }
    this._popoverElem.setAttribute('aria-modal', 'true');
  }

  _configurePopoverFloating() {
    const self = this;
    const arrowEl = this._config.arrow
      ? this._popoverElem.querySelector('.chi-popover__arrow')
      : null;

    const portalId = this._isPortaled
      ? 'chi-popover-portal-' + this.componentCounterNo
      : undefined;

    if (portalId) {
      this._elem.setAttribute('data-chi-portal-id', portalId);
    }

    this._floating = createFloating(this._config.parent, this._popoverElem, {
      placement: this._config.position,
      portal: this._isPortaled,
      ownerId: portalId,
      offset: this._config.arrow ? 12 : 0,
      flip: true,
      shift: true,
      arrowElement: arrowEl,
      arrowPadding: 0,
      autoUpdate: false,
      hideWhenDetached: !this._isPortaled,
      initialUpdate: false,
      onCompute: function (data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];

        PLACEMENT_CLASSES.forEach(function (side) {
          Util.removeClass(self._popoverElem, 'chi-popover--' + side);
        });
        Util.addClass(self._popoverElem, 'chi-popover--' + basePlacement);
        Util.addClass(self._popoverElem, 'chi-popover--' + placement);
        self._popoverElem.setAttribute('x-placement', placement);
      },
    });

    this._updatePosition = function () {
      return self._floating.update();
    };
  }

  _enableAutoUpdate() {
    this._disableAutoUpdate();
    if (this._floating) {
      this._cleanupAutoUpdate = this._floating.enableAutoUpdate();
    }
  }

  _disableAutoUpdate() {
    if (this._cleanupAutoUpdate) {
      this._cleanupAutoUpdate();
      this._cleanupAutoUpdate = null;
    }
  }

  setContent(content) {
    Util.empty(this._popoverElem);
    if (content instanceof Element) {
      this._popoverElem.appendChild(content);
    } else {
      this._popoverElem.innerHTML = content;
    }
  }

  dispose() {
    this._disableAutoUpdate();
    if (this._animationAbortController) {
      this._animationAbortController.abort();
      this._animationAbortController = null;
    }
    if (this._animationTimeout) {
      clearTimeout(this._animationTimeout);
      this._animationTimeout = null;
    }
    this._removeEventHandlers();
    if (this._floating) {
      this._floating.destroy();
      this._floating = null;
    } else if (this._popoverElem && this._popoverElem.parentNode) {
      this._popoverElem.parentNode.removeChild(this._popoverElem);
    }
    this._popoverElem = null;
    this._cleanupAutoUpdate = null;
    this._isPortaled = false;
    this._config = null;

    this._mouseClickOnDocument = null;
    this._mouseClickOnPopover = null;
    this._mouseClickEventHandler = null;

    if (this._elem) {
      this._elem.removeAttribute('data-chi-portal-id');
    }
    this._elem = null;
  }
}

const factory = Component.factory.bind(Popover);
export { Popover, factory };

import {Component} from "../core/component";
import {Util} from "../core/util.js";
import {KEYS} from  '../constants/constants';
import {createFloating} from '../core/floating.js';

const CLASS_ACTIVE = "-active";
const COMPONENT_SELECTOR = '[data-tooltip]';
const COMPONENT_TYPE = "tooltip";
const DEFAULT_CONFIG = {
  position: 'top',
  parent: null,
  portal: false,
  autoUpdate: true,
  hideWhenDetached: true
};
const CLASS_LIGHT = '-light';
const TOOLTIP_COLOR_ATTRIBUTE = 'data-tooltip-color';
const EVENTS = {
  show: 'chiTooltipShow',
  hide: 'chiTooltipHide'
};

class Tooltip extends Component {

  constructor (elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._tooltipElem = null;
    this._tooltipContent = null;
    this._floating = null;
    this._cleanupAutoUpdate = null;
    this._hovered = false;
    this._focused = false;
    this._shown = false;

    this._config.parent = this._config.parent || this._elem;
    this._config.position = config && config.position ||
      this._elem.dataset.position ||
      this._config.position;

    let self = this;
    this._createTooltip();

    this._addEventHandler(this._elem, 'mouseenter', () => {
      self._hovered = true;
      if (!self._shown) {
        self.show();
      }
    });
    this._addEventHandler(this._elem, 'mouseleave', () => {
      self._hovered = false;
      if (self._shown && !self._focused) {
        self.hide();
      }
    });
    this._addEventHandler(this._elem, 'keyup', function(e) {
      if (!self._focused) return;
      let code = (e.keyCode ? e.keyCode : e.which);
      if (code === KEYS.TAB && !self._shown) {
        self.show();
      }
    });
    this._addEventHandler(this._elem, 'focus', function() {
      self._focused = true;
    });
    this._addEventHandler(this._elem, 'blur', function() {
      self._focused = false;
      if (self._shown && !self._hovered) {
        self.hide();
      }
    });
  }

  show() {
    this._shown = true;
    this._updatePosition().then(() => {
      if (!this._shown) return;

      Util.addClass(this._tooltipElem, CLASS_ACTIVE);
      this._tooltipElem.setAttribute('aria-hidden', 'false');
      this._elem.setAttribute('aria-describedby', this._tooltipElem.id);
      if (this._config.autoUpdate) {
        this._enableAutoUpdate();
      }
      this._preventOverflow();
    });
    this._elem.dispatchEvent(
      Util.createEvent(EVENTS.show)
    );
  }

  hide() {
    this._shown = false;
    this._disableAutoUpdate();
    Util.removeClass(this._tooltipElem, CLASS_ACTIVE);
    this._tooltipElem.setAttribute('aria-hidden', 'true');
    this._elem.removeAttribute('aria-describedby');
    this._elem.dispatchEvent(
      Util.createEvent(EVENTS.hide)
    );
  }

  _createTooltip () {
    this._tooltipElem = document.createElement('div');
    this._tooltipElem.setAttribute('class', 'chi-tooltip');
    this._tooltipElem.setAttribute('role', 'tooltip');
    if (this._elem.getAttribute(TOOLTIP_COLOR_ATTRIBUTE) === 'light') {
      this._tooltipElem.classList.add(CLASS_LIGHT);
    }
    this._tooltipElem.id = `chi-${COMPONENT_TYPE}-${this.componentCounterNo}`;
    this._tooltipContent = document.createElement('span');
    this._tooltipContent.innerText = this._elem.dataset.tooltip;
    this._tooltipElem.appendChild(this._tooltipContent);

    let self = this;
    const portalId = this._config.portal
      ? 'chi-tooltip-portal-' + this.componentCounterNo
      : undefined;

    if (portalId) {
      this._elem.setAttribute('data-chi-portal-id', portalId);
    }

    // Apply positioning and hide before the element enters the DOM so it is
    // never in normal document flow and never flashes at position 0,0 on the
    // first show() call.
    Object.assign(this._tooltipElem.style, {
      position: this._config.portal ? 'fixed' : 'absolute',
      left: '0px',
      top: '0px',
      visibility: 'hidden',
    });

    if (!this._config.portal) {
      // Non-portal: insert as sibling of trigger so tooltip participates
      // in the same stacking context. Matches CE behavior where non-portal
      // tooltips can be clipped by overflow containers (use portal to escape).
      this._config.parent.parentNode.appendChild(this._tooltipElem);
    }

    this._tooltipElem.setAttribute('aria-hidden', 'true');

    this._floating = createFloating(this._config.parent, this._tooltipElem, {
      placement: this._config.position,
      offset: 8,
      portal: this._config.portal,
      ownerId: portalId,
      hideWhenDetached: this._config.hideWhenDetached,
      autoUpdate: false,
      initialUpdate: false,
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

  _preventOverflow() {
    if (Util.checkOverflow(this._tooltipElem)) {
      const text = this._elem.dataset.tooltip;
      Util.binarySearchClosest(
        text.length,
        function(length){
          this._tooltipContent.innerText = text.substr(0, length) + '...';
          if(Util.checkOverflow(this._tooltipElem)) {
            return 1;
          } else {
            return -1;
          }
        }.bind(this));
    }
  }

  dispose() {
    this._disableAutoUpdate();
    if (this._floating) {
      this._floating.destroy();
      this._floating = null;
    } else if (this._tooltipElem && this._tooltipElem.parentNode) {
      this._tooltipElem.parentNode.removeChild(this._tooltipElem);
    }
    this._tooltipElem = null;
    this._tooltipContent = null;
    this._cleanupAutoUpdate = null;
    this._config = null;
    this._removeEventHandlers();
    if (this._elem) {
      this._elem.removeAttribute('data-chi-portal-id');
    }
    this._elem = null;
  }

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(Tooltip);
export {Tooltip, factory, CLASS_ACTIVE};

import {computePosition, autoUpdate as floatingAutoUpdate, flip, shift, offset, hide as hideMiddleware} from '@floating-ui/dom';
import {Component} from "../core/component";
import {Util} from "../core/util.js";
import {KEYS} from  '../constants/constants';

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
    this._floatingCleanup = null;
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
      if (self._shown) {
        self.hide();
      }
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
    this._tooltipElem.style.visibility = '';
    this._updatePosition().then(() => {
      if (!this._shown) return;

      Util.addClass(this._tooltipElem, CLASS_ACTIVE);
      this._tooltipElem.setAttribute('aria-hidden', 'false');
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
    this._elem.dispatchEvent(
      Util.createEvent(EVENTS.hide)
    );
  }

  _createTooltip () {
    this._tooltipElem = document.createElement('div');
    this._tooltipElem.setAttribute('class', 'chi-tooltip');
    if (this._elem.getAttribute(TOOLTIP_COLOR_ATTRIBUTE) === 'light') {
      this._tooltipElem.classList.add(CLASS_LIGHT);
    }
    this._tooltipElem.id = `chi-${COMPONENT_TYPE}-${this.componentCounterNo}`;
    this._tooltipContent = document.createElement('span');
    this._tooltipContent.innerText = this._elem.dataset.tooltip;
    this._tooltipElem.appendChild(this._tooltipContent);
    // Original Popper.js always appended tooltip to body.
    // Default strategy is 'absolute' (matching original + CE default).
    // When portal: true, use 'fixed' (matching CE portal behavior).
    document.querySelector('body').appendChild(this._tooltipElem);
    this._elem.setAttribute('aria-describedby', this._tooltipElem.id);
    this._tooltipElem.setAttribute('aria-hidden', 'true');

    let self = this;
    const strategy = self._config.portal ? 'fixed' : 'absolute';

    this._updatePosition = function () {
      const middleware = [offset(8), flip(), shift()];
      if (self._config.hideWhenDetached) {
        middleware.push(hideMiddleware({ strategy: 'referenceHidden' }));
      }

      return computePosition(self._config.parent, self._tooltipElem, {
        placement: self._config.position,
        strategy: strategy,
        middleware,
      }).then(({x, y, middlewareData}) => {
        Object.assign(self._tooltipElem.style, {
          position: strategy,
          left: `${Util.roundByDPR(x)}px`,
          top: `${Util.roundByDPR(y)}px`,
        });

        if (self._config.hideWhenDetached && middlewareData.hide) {
          self._tooltipElem.style.visibility = middlewareData.hide.referenceHidden ? 'hidden' : '';
        }
      });
    };
  }

  _enableAutoUpdate() {
    this._disableAutoUpdate();
    this._floatingCleanup = floatingAutoUpdate(
      this._config.parent,
      this._tooltipElem,
      () => this._updatePosition()
    );
  }

  _disableAutoUpdate() {
    if (this._floatingCleanup) {
      this._floatingCleanup();
      this._floatingCleanup = null;
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
    if (this._tooltipElem && this._tooltipElem.parentNode) {
      this._tooltipElem.parentNode.removeChild(this._tooltipElem);
    }
    this._tooltipElem = null;
    this._tooltipContent = null;
    this._floatingCleanup = null;
    this._config = null;
    this._removeEventHandlers();
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

import Popper from 'popper.js';
import {Component} from "../core/component";
import {Util} from "../core/util.js";
import {KEYS} from  '../constants/constants';

const CLASS_ACTIVE = "-active";
const COMPONENT_SELECTOR = '[data-tooltip]';
const COMPONENT_TYPE = "tooltip";
const ANIMATION_DELAY = 300;
const DEFAULT_CONFIG = {position: 'top', parent: null};
const CLASS_LIGHT = '-light';
const TOOLTIP_COLOR_ATTRIBUTE = 'data-tooltip-color';
const TOOLTIP_SWITCH_TIMEOUT = 50;

class Tooltip extends Component {

  constructor (elem, config) {

    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._tooltipElem = null;
    this._tooltipContent = null;
    this._popper = null;
    this._popperData = null;
    this._preAnimationTransformStyle = null;
    this._postAnimationTransformStyle = null;
    this._hovered = false;
    this._focused = false;
    this._shown = false;
    this._animationTimeout;

    this._config.parent = this._config.parent || this._elem;
    this._config.position = config && config.position ||
      this._elem.dataset.position ||
      this._config.position;

    let self = this;
    this._createTooltip();

    this._addEventHandler(this._elem, 'mouseenter', () => {
      self._hovered = true;
      this._animationTimeout = window.setTimeout(() => {
        if (!self._shown) {
          self.show();
          window.tooltipOpen = true;
          clearTimeout(window.tooltipOpenTimeout);
        }
      }, window.tooltipOpen ? 0 : ANIMATION_DELAY);
    });
    this._addEventHandler(this._elem, 'mouseleave', () => {
      window.clearTimeout(this._animationTimeout);
      this._animationTimeout = null;
      self._hovered = false;
      if (self._shown && !self._focused) {
        self.hide();
        window.tooltipOpenTimeout = setTimeout(() => {
          if (window.tooltipOpen) {
            window.tooltipOpen = false;
          }
        }, TOOLTIP_SWITCH_TIMEOUT);
      }
    });
    this._addEventHandler(this._elem, 'focus', function() {
      self._focused = true;
      self._addEventHandler(self._elem, 'keyup', function(e) {
        let code = (e.keyCode ? e.keyCode : e.which);

        if (code === KEYS.TAB) {
          if (!self._shown) {
            self.show();
          }
        }
      });
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
    Util.addClass(this._tooltipElem, CLASS_ACTIVE);
    const transition = this._tooltipElem.style.transition;
    this._tooltipElem.style.transition = 'none';
    this._tooltipElem.style.transform = this._preAnimationTransformStyle;
    this._tooltipElem.style.opacity = '0';
    let self = this;
    window.requestAnimationFrame(function(){
      self._tooltipElem.style.transition = transition;
      self._tooltipElem.style.transform = self._postAnimationTransformStyle;
      self._tooltipElem.style.opacity = '1';
      self._tooltipElem.setAttribute('aria-hidden', 'false');
      self._preventOverflow();
    });
  }

  hide() {
    this._shown = false;
    Util.removeClass(this._tooltipElem, CLASS_ACTIVE);
    let self = this;
    window.setTimeout(function(){
      self._tooltipElem.style.transform = self._preAnimationTransformStyle;
      self._tooltipElem.style.opacity = '0';
      self._tooltipElem.setAttribute('aria-hidden', 'true');
    },0);
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
    document.querySelector('body').appendChild(this._tooltipElem);
    this._elem.setAttribute('aria-describedby', this._tooltipElem.id);
    this._tooltipElem.setAttribute('aria-hidden', 'true');

    let self = this;

    this._savePopperData = function (data) {
      self._popperData = data;
      self._preAnimationTransformStyle = null;
      self._postAnimationTransformStyle = data.styles.transform;
      if (data.placement.indexOf("top") === 0) {
        self._preAnimationTransformStyle = `translate3d(${data.popper.left}px, ${data.popper.top}px, 0px)`;
      } else if (data.placement.indexOf("right") === 0) {
        self._preAnimationTransformStyle = `translate3d(${data.popper.left}px, ${data.popper.top}px, 0px)`;
      } else if (data.placement.indexOf("bottom") === 0) {
        self._preAnimationTransformStyle = `translate3d(${data.popper.left}px, ${data.popper.top}px, 0px)`;
      } else if (data.placement.indexOf("left") === 0) {
        self._preAnimationTransformStyle = `translate3d(${data.popper.left}px, ${data.popper.top}px, 0px)`;
      } else {
        self._preAnimationTransformStyle = data.styles.transform;
      }
      return data;
    };

    this._popper = new Popper (this._config.parent, this._tooltipElem, {
      modifiers: {
        applyStyle: {enabled: true},
        offset: {offset: '0px,8px'},
        applyChiStyle: {
          enabled: true,
          fn: this._savePopperData,
          order: 875 // to run after popper applyStyle modifier. We need data.styles to be filled.
        },
      },
      removeOnDestroy: true,
      placement: this._config.position
    });
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
    this._tooltipElem = null;
    this._tooltipContent = null;
    this._popper.destroy();
    this._config = null;
    this._popperData = null;
    this._preAnimationTransformStyle = null;
    this._postAnimationTransformStyle = null;
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

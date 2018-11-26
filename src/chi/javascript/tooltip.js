import {Util} from "./util.js";
import {chi} from "./chi.js";
import Popper from 'popper.js';

const COMPONENT_SELECTOR = '[data-tooltip]';
const CLASS_ACTIVE = "-active";
const COMPONENT_TYPE = "tooltip";

class Tooltip {

  constructor (elem, config) {
    this._elem = elem;
    this._tooltipElem = null;
    this._popper = null;
    this._popperData = null;
    this._preAnimationTransformStyle = null;
    this._postAnimationTransformStyle = null;

    this._config = {
      parent: this._elem,
      position: "top"
    };

    this._config = Util.extend(this._config, config);
    this._config.position = config && config.position ||
      this._elem.dataset.position ||
      this._config.position;

    let self = this;
    Util.registerComponent(COMPONENT_TYPE, this._elem, this);

    this._createTooltip();

    this._mouseOverEventHandler = function() {
      Util.addClass(self._tooltipElem, CLASS_ACTIVE);
      const transition = self._tooltipElem.style.transition;
      self._tooltipElem.style.transition = 'none';
      self._tooltipElem.style.transform = self._preAnimationTransformStyle;
      self._tooltipElem.style.opacity = '0';
      window.setTimeout(function(){
        self._tooltipElem.style.transition = transition;
        self._tooltipElem.style.transform = self._postAnimationTransformStyle;
        self._tooltipElem.style.opacity = '1';
      },0);
    };
    this._mouseOutEventHandler = function() {
      Util.removeClass(self._tooltipElem, CLASS_ACTIVE);
      window.setTimeout(function(){
        self._tooltipElem.style.transform = self._preAnimationTransformStyle;
        self._tooltipElem.style.opacity = '0';
      },0);
    };
    this._elem.addEventListener("mouseover",this._mouseOverEventHandler,false);
    this._elem.addEventListener("mouseout", this._mouseOutEventHandler, false);

  }

  _createTooltip () {
    this._tooltipElem = document.createElement('div');
    this._tooltipElem.setAttribute('class', 'a-tooltip');
    this._tooltipElem.innerText = this._elem.dataset.tooltip;
    this._elem.parentNode.appendChild(this._tooltipElem);
    let self = this;

    this._savePopperData = function (data) {
      self._popperData = data;
      self._preAnimationTransformStyle = null;
      self._postAnimationTransformStyle = data.styles.transform;
      if (data.placement.indexOf("top") === 0) {
        self._preAnimationTransformStyle = `translate3d(${data.popper.left}px, ${data.popper.top + 20}px, 0px)`;
      } else if (data.placement.indexOf("right") === 0) {
        self._preAnimationTransformStyle = `translate3d(${data.popper.left + 20}px, ${data.popper.top}px, 0px)`;
      } else if (data.placement.indexOf("bottom") === 0) {
        self._preAnimationTransformStyle = `translate3d(${data.popper.left}px, ${data.popper.top - 20}px, 0px)`;
      } else if (data.placement.indexOf("left") === 0) {
        self._preAnimationTransformStyle = `translate3d(${data.popper.left - 20}px, ${data.popper.top+20}px, 0px)`;
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

  dispose() {
    this._elem = null;
    this._tooltipElem = null;
    this._popper.destroy();
    this._config = null;
    this._popperData = null;
    this._preAnimationTransformStyle = null;
    this._postAnimationTransformStyle = null;
    this._elem.removeEventListener("mouseover",this._mouseOverEventHandler,false);
    this._elem.removeEventListener("mouseout", this._mouseOutEventHandler, false);
  }

  static factory(elem, config) {
    return Util.getRegisteredComponent(COMPONENT_TYPE, elem) ||
      new Tooltip(elem, config);
  }

  static initAll(config) {
    Array.prototype.forEach.call(
      document.querySelectorAll(COMPONENT_SELECTOR), function (elem) {
        Tooltip.factory(elem, config);
      }
    );
  }
}

let chiTooltip = Util.addArraySupportToFactory(Tooltip.factory);

chi.tooltip = chiTooltip;
export {Tooltip, chiTooltip};

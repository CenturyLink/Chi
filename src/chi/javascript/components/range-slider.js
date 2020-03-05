import {Component} from "../core/component";
import {Util} from "../core/util.js";

const COMPONENT_TYPE = 'rangeSlider';
const COMPONENT_SELECTOR = '.m-input__wrapper > input[type="range"]';
const COMPONENT_OWN_THUMB_CLASS = 'a-rangeSlider__thumbOverwritten';

const DEFAULT_CONFIG = {};

class RangeSlider extends Component {

  constructor(elem, config) {

    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._thumbElem = null;
    this._progressElem = null;
    this._minValue = 0;
    this._maxValue = 100;
    this._currentValue = 50;

    if (this._config.thumb) {
      this._thumbElem = thumb;
      Util.addClass(this._elem, COMPONENT_OWN_THUMB_CLASS);
    } else {
      const thumbs = this._elem.parentElement.getElementsByClassName(
        'chi-input__thumb'
      );
      if (thumbs.length) {
        this._thumbElem = thumbs[0];
        Util.addClass(this._elem, COMPONENT_OWN_THUMB_CLASS);
      }
    }

    if (this._config.progress) {
      this._progressElem = this._config.progress;
    } else {
      const progress = this._elem.parentElement.getElementsByClassName(
        'chi-input__progress'
      );
      if (progress.length) {
        this._progressElem = progress[0];
      }
    }

    this._minValue = this._elem.getAttribute('min') || this._minValue;
    this._maxValue = this._elem.getAttribute('max') || this._maxValue;

    this._updateValues = function() {
      if (this._elem.value !== this._currentValue) {
        this._currentValue = parseInt(this._elem.value);
        this.updateView();
      }
    }.bind(this);

    this._elem.addEventListener('change', this._updateValues);
    this._elem.addEventListener('input', this._updateValues);
    this._updateValues();
  }

  updateView () {
    const x =
      (this._currentValue - this._minValue) / (this._maxValue - this._minValue);
    if (this._progressElem) {
      this._progressElem.style.width =
        'calc(' + x*100 + '% - ' + (x-0.5)*1.25 + 'rem)';
    }
    if (this._thumbElem) {
      this._thumbElem.style.left =
        'calc(' + x*100 + '% - ' + (x-0.5)*1.25 + 'rem)';
    }
  }

  dispose() {
    this._config = null;
    this._thumbElem.removeEventListener('click', this._updateValues);
    this._progressElem.removeEventListener('click', this._updateValues);
    this._updateValues = null;
    this._thumbElem = null;
    this._progressElem = null;
    Util.removeClass(this._elem, COMPONENT_OWN_THUMB_CLASS);
    this._elem = null;
  }

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(RangeSlider);
export {RangeSlider, factory};

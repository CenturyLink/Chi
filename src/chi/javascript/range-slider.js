import {Util} from "./util.js";
import {chi} from "./chi.js";

const COMPONENT_TYPE = "rangeSlider";
const COMPONENT_OWN_THUMB_CLASS = 'a-rangeSlider__thumbOverwritten';

class RangeSlider {

  constructor(elem, config) {

    this._config = Util.extend({}, config);
    this._elem = elem;
    this._thumbElem = null;
    this._progressElem = null;
    this._minValue = 0;
    this._maxValue = 100;
    this._currentValue = 50;

    Util.registerComponent(COMPONENT_TYPE, this._elem, this);


    if (this._config.thumb) {
      this._thumbElem = thumb;
      Util.addClass(this._elem, COMPONENT_OWN_THUMB_CLASS);
    } else {
      const thumbs = this._elem.parentElement.getElementsByClassName(
        'a-input__thumb'
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
        'a-input__progress'
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
    Util.unregisterComponent(COMPONENT_TYPE, this._elem);
    Util.removeClass(this._elem, COMPONENT_OWN_THUMB_CLASS);
    this._elem = null;
  }

  static factory(elem, config) {
    return Util.getRegisteredComponent(COMPONENT_TYPE, elem) ||
      new RangeSlider(elem, config);
  }
}

let chiRangeSlider = Util.addArraySupportToFactory(RangeSlider.factory);

chi.rangeSlider = chiRangeSlider;
export {RangeSlider, chiRangeSlider};

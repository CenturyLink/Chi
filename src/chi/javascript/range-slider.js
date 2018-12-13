import {Util} from "./util.js";
import {chi} from "./chi.js";

const COMPONENT_TYPE = "rangeSlider";

class RangeSlider {

  constructor(elem, config) {

    this._config = Util.extend({}, config);
    this._elem = elem;
    this._thumbElem = null;
    this._progressElem = null;
    this._minValue = 0;
    this._maxValue = 100;
    this._currentValue = 50;

    const thumbs = this._elem.parentElement.getElementsByClassName(
      'a-input__thumb'
    );
    const progress = this._elem.parentElement.getElementsByClassName(
      'a-input__progress'
    );
    if (thumbs.length) {
      this._thumbElem = thumbs[0];
    }
    if (progress.length) {
      this._progressElem = progress[0];
    }

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
    this._progressElem.style.width =
      'calc(' + x*100 + '% - ' + (x-0.5)*1.25 + 'rem)';
    this._thumbElem.style.left =
      'calc(' + x*100 + '% - ' + (x-0.5)*1.25 + 'rem)';
  }

  dispose() {
    this._config = null;
    this._elem = null;
    this._thumbElem.removeEventListener('click', this._updateValues);
    this._progressElem.removeEventListener('click', this._updateValues);
    this._updateValues = null;
    this._thumbElem = null;
    this._progressElem = null;
  }

  static factory(elem, config) {
    return Util.getRegisteredComponent(COMPONENT_TYPE, elem) ||
      new RangeSlider(elem, config);
  }
}

let chiRangeSlider = Util.addArraySupportToFactory(RangeSlider.factory);

chi.rangeSlider = chiRangeSlider;
export {RangeSlider, chiRangeSlider};

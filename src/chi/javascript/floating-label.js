import {Util} from "./util.js";
import {chi} from "./chi.js";
import {Dropdown} from "./dropdown";

const CLASS_COMPONENT = '-floatingLabel';
const CLASS_ACTIVE = "-active";
const COMPONENT_TYPE = "floatingLabel";

class FloatingLabel {

  constructor (elem, config) {
    this._elem = elem;
    this._label = elem.getElementsByTagName("label")[0];
    this._input = elem.getElementsByTagName("input")[0];
    this._config = Util.extend({}, config);
    let self = this;

    Util.registerComponent(COMPONENT_TYPE, this._elem, this);

    if (!this._input.value && !this._input.value.trim()) {
      Util.removeClass(this._label, CLASS_ACTIVE);
    }

    this._onFocusEventListener = function(e) {
      self._onFocus(e);
    };
    this._onBlurEventListener = function(e) {
      self._onBlur(e);
    };

    this._input.addEventListener('focus', this._onFocusEventListener);
    this._input.addEventListener('blur', this._onBlurEventListener);

  }

  _onFocus() {
    Util.addClass(this._label, CLASS_ACTIVE);
  }

  _onBlur() {
    if (!this._input.value && !this._input.value.trim()) {
      Util.removeClass(this._label, CLASS_ACTIVE);
    }
  }

  dispose() {
    this._elem = null;
    this._label = null;
    this._input = null;
    this._config = null;

    this._input.removeEventListener('focus', this._onFocusEventListener);
    this._input.removeEventListener('blur', this._onBlurEventListener);

  }

  static factory(elem, config) {
    return Util.getRegisteredComponent(COMPONENT_TYPE, elem) ||
      new FloatingLabel(elem, config);
  }

  static initAll(config) {
    Array.prototype.forEach.call(
      document.getElementsByClassName(CLASS_COMPONENT), function (elem) {
        FloatingLabel.factory(elem, config);
      }
    );
  }

}

let chiFloatingLabel = Util.addArraySupportToFactory(FloatingLabel.factory);

chi.floatingLabel = chiFloatingLabel;
export {FloatingLabel, chiFloatingLabel};

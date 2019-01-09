import {Component} from "../core/component";
import {Util} from "../core/util.js";

const CLASS_ACTIVE = "-active";
const COMPONENT_SELECTOR = '.-floatingLabel';
const COMPONENT_TYPE = "floatingLabel";
const DEFAULT_CONFIG = {};

class FloatingLabel extends Component {

  constructor (elem, config) {

    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._label = elem.getElementsByTagName("label")[0];
    this._input = elem.getElementsByTagName("input")[0];
    let self = this;

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
    this._label = null;
    this._input = null;
    this._config = null;
    Util.unregisterComponent(COMPONENT_TYPE, this._elem);
    this._elem = null;

    this._input.removeEventListener('focus', this._onFocusEventListener);
    this._input.removeEventListener('blur', this._onBlurEventListener);

  }

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(FloatingLabel);
export {FloatingLabel, factory};


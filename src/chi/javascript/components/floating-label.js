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
    this._input = elem.getElementsByTagName("input")[0] ||
      elem.getElementsByTagName("select")[0];
    let self = this;

    if (!this._getDisplayedValue()) {
      Util.removeClass(this._label, CLASS_ACTIVE);
    } else {
      Util.addClass(this._label, CLASS_ACTIVE);
    }

    if (this._input.tagName === 'INPUT') {
      this._onFocusEventListener = function(e) {
        self._onInputFocus(e);
      };
      this._onBlurEventListener = function(e) {
        self._onInputBlur(e);
      };
      this._input.addEventListener('focus', this._onFocusEventListener);
      this._input.addEventListener('blur', this._onBlurEventListener);
    } else if (this._input.tagName === 'SELECT') {
      this._onChangeEventListener = function(e) {
        self._onSelectChange(e);
      };
      this._input.addEventListener('change', this._onChangeEventListener);
    }
  }

  _onInputFocus() {
    Util.addClass(this._label, CLASS_ACTIVE);
  }

  _onSelectChange() {
    if (!this._getDisplayedValue()) {
      Util.removeClass(this._label, CLASS_ACTIVE);
    } else {
      Util.addClass(this._label, CLASS_ACTIVE);
    }
  }

  _onInputBlur() {
    if (!this._getDisplayedValue()) {
      Util.removeClass(this._label, CLASS_ACTIVE);
    }
  }

  _getDisplayedValue() {
    if (this._input.tagName === 'INPUT') {
      return this._input.value && this._input.value.trim();
    } else {
      return this._input.options[this._input.selectedIndex].innerText.trim();
    }
  }

  dispose() {
    this._label = null;
    this._input = null;
    this._config = null;
    this._elem = null;

    if (this._input.tagName === 'INPUT') {
      this._input.removeEventListener('focus', this._onFocusEventListener);
      this._input.removeEventListener('blur', this._onBlurEventListener);
      this._onFocusEventListener = null;
      this._onBlurEventListener = null;
    } else if (this._input.tagName === 'SELECT') {
      this._input.removeEventListener('change', this._onChangeEventListener);
      this._onChangeEventListener = null;
    }
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


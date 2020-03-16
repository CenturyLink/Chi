import {Component} from "../core/component";
import {Util} from "../core/util.js";

const COMPONENT_SELECTOR =
  '.chi-input__wrapper > input.chi-input[type="number"], ' +
  '.m-inputNumber > input.chi-input[type="number"]';
const COMPONENT_TYPE = "numberInput";
const DEFAULT_CONFIG = {autofix: true};

class NumberInput extends Component {

  constructor (elem, config) {

    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._elemWrapper = this._elem.parentElement;
    this._initialValue = Util.isNumeric(this._elem.value) ?
      Number(this._elem.value) : 0;
    this._stepped = {};

    let buttons = this._elemWrapper.getElementsByTagName('button');
    if (buttons.length !== 2) {
      throw new Error('Could not found buttons for the number input component. ');
    }
    this._incrementButton = buttons[1];
    this._decrementButton = buttons[0];

    let self = this;
    this._increment = function() {
      self._stepUp();
      self.checkMinMax();
    };

    this._decrement = function() {
      self._stepDown();
      self.checkMinMax();
    };

    this._check = function(e) {
      self.checkMinMax();
      if (e && e.type === 'change' && self._config.autofix) {
        self.autofix();
      }
    };

    this._incrementButton.addEventListener('click', this._increment);
    this._decrementButton.addEventListener('click', this._decrement);
    this._elem.addEventListener('keyup', this._check);
    this._elem.addEventListener('change', this._check);

    this._check();
  }

  dispose() {
    this._config = null;
    this._elemWrapper = null;
    this._incrementButton.removeEventListener('click', this._increment);
    this._decrementButton.removeEventListener('click', this._decrement);
    this._elem.removeEventListener('keyup', this._check);
    this._elem.removeEventListener('change', this._check);
    this._incrementButton = null;
    this._decrementButton = null;
    this._increment = null;
    this._decrement = null;
    this._stepped = null;
    this._elem = null;
  }

  _updateSteppedValues() {
    this.step = Util.isNumeric(this._elem.step) ? Number(this._elem.step) : 1;
    this._stepped.current = this._value2step(this._elem.value);
    this._stepped.max = Util.isNumeric(this._elem.max) ?
      this._value2step(Number(this._elem.max), Math.floor):
      Number.POSITIVE_INFINITY;
    this._stepped.min = Util.isNumeric(this._elem.min) ?
      this._value2step(Number(this._elem.min), Math.ceil):
      Number.NEGATIVE_INFINITY;
  }

  _value2step (value, roundFunction) {
    if (typeof roundFunction !== 'function') {
      roundFunction = value => value;
    }
    return Math.round(10000*roundFunction((value-this._initialValue)/this.step))/10000;
  }

  _step2value (step) {
    return Math.round(10000*(step * this.step + this._initialValue))/10000;
  }

  checkMinMax() {
    this._updateSteppedValues();
    if (this._stepped.current <= this._stepped.min) {
      this._decrementButton.setAttribute('disabled', true);
    } else {
      this._decrementButton.removeAttribute('disabled');
    }
    if (this._stepped.current >= this._stepped.max) {
      this._incrementButton.setAttribute('disabled', true);
    } else {
      this._incrementButton.removeAttribute('disabled');
    }
  }

  autofix() {
    this._updateSteppedValues();
    const previousValue = this._stepped.current;
    if (!Util.isInteger(this._stepped.current)) {
      this._stepped.current = Math.round(this._stepped.current);
    }
    this._stepped.current = Math.min(this._stepped.current, this._stepped.max);
    this._stepped.current = Math.max(this._stepped.current, this._stepped.min);
    if (
      this._stepped.current !== previousValue ||
      this._elem.value !== this._step2value(this._stepped.current).toString()
    ) {
      this._elem.value = this._step2value(this._stepped.current);
      this._elem.dispatchEvent(Util.createEvent('change'));
    }
  }

  _stepUp() {
    this._updateSteppedValues();
    if (this._stepped.current >= this._stepped.max) {
      return;
    }
    if (Util.isInteger(this._stepped.current)) {
      this._stepped.current++;
    } else {
      this._stepped.current = Math.ceil(this._stepped.current);
    }
    this._elem.value = this._step2value(this._stepped.current);
    this._elem.dispatchEvent(Util.createEvent('change'));
  }

  _stepDown() {
    this._updateSteppedValues();
    if (this._stepped.current <= this._stepped.min) {
      return;
    }
    if (Util.isInteger(this._stepped.current)) {
      this._stepped.current--;
    } else {
      this._stepped.current = Math.floor(this._stepped.current);
    }
    this._elem.value = this._step2value(this._stepped.current);
    this._elem.dispatchEvent(Util.createEvent('change'));
  }

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(NumberInput);
export {NumberInput, factory};

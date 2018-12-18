import {Util} from "./util.js";
import {chi} from "./chi.js";

const COMPONENT_TYPE = "numberInput";

class NumberInput {

  constructor (elem, config) {

    this._config = {
      autofix: true
    };
    this._config = Util.extend(this._config, config);
    this._elemInput = elem;
    this._elemWrapper = this._elemInput.parentElement;
    this._initialValue = Util.isNumeric(this._elemInput.value) ?
      Number(this._elemInput.value) : 0;
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
    this._elemInput.addEventListener('keyup', this._check);
    this._elemInput.addEventListener('change', this._check);

    this._check();

    Util.registerComponent(COMPONENT_TYPE, this._elemInput, this);

  }

  dispose() {
    this._config = null;
    this._elemWrapper = null;
    this._incrementButton.removeEventListener('click', this._increment);
    this._decrementButton.removeEventListener('click', this._decrement);
    this._elemInput.removeEventListener('keyup', this._check);
    this._elemInput.removeEventListener('change', this._check);
    this._incrementButton = null;
    this._decrementButton = null;
    this._increment = null;
    this._decrement = null;
    this._stepped = null;
    Util.unregisterComponent(COMPONENT_TYPE, this._elemInput);
    this._elemInput = null;
  }

  _updateSteppedValues() {
    this.step = Util.isNumeric(this._elemInput.step) ? Number(this._elemInput.step) : 1;
    this._stepped.current = this._value2step(this._elemInput.value);
    this._stepped.max = Util.isNumeric(this._elemInput.max) ?
      this._value2step(Number(this._elemInput.max), Math.floor):
      Number.POSITIVE_INFINITY;
    this._stepped.min = Util.isNumeric(this._elemInput.min) ?
      this._value2step(Number(this._elemInput.min), Math.ceil):
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
      this._elemInput.value !== this._step2value(this._stepped.current).toString()
    ) {
      this._elemInput.value = this._step2value(this._stepped.current);
      this._elemInput.dispatchEvent(Util.createEvent('change'));
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
    this._elemInput.value = this._step2value(this._stepped.current);
    this._elemInput.dispatchEvent(Util.createEvent('change'));
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
    this._elemInput.value = this._step2value(this._stepped.current);
    this._elemInput.dispatchEvent(Util.createEvent('change'));
  }

  static factory(elem, config) {
    return Util.getRegisteredComponent(COMPONENT_TYPE, elem) ||
      new NumberInput(elem, config);
  }

}

let chiNumberInput = Util.addArraySupportToFactory(NumberInput.factory);

chi.numberInput = chiNumberInput;
export {NumberInput, chiNumberInput};

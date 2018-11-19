import {Util} from "./util.js";
import {chi} from "./chi.js";

const COMPONENT_TYPE = "numberInput";

class NumberInput {

  constructor (elem, config) {
    this._config = config;
    this._elemInput = elem;
    this._elemWrapper = this._elemInput.parentElement;

    let buttons = this._elemWrapper.getElementsByTagName('button');
    if (buttons.length !== 2) {
      throw new Error('Could not found buttons for the number input component. ');
    }
    this._incrementButton = buttons[1];
    this._decrementButton = buttons[0];

    let self = this;
    this._increment = function() {
      self._elemInput.stepUp();
    };

    this._decrement = function() {
      self._elemInput.stepDown();
    };

    this._incrementButton.addEventListener('click', this._increment);
    this._decrementButton.addEventListener('click', this._decrement);

    Util.registerComponent(COMPONENT_TYPE, this._elemInput, this);

  }

  dispose() {
    this._config = null;
    this._elemInput = null;
    this._elemWrapper = null;
    this._incrementButton.removeEventListener('click', this._increment);
    this._decrementButton.removeEventListener('click', this._decrement);
    this._incrementButton = null;
    this._decrementButton = null;
    this._increment = null;
    this._decrement = null;
  }

  static factory(elem, config) {
    return Util.getRegisteredComponent(COMPONENT_TYPE, elem) ||
      new NumberInput(elem, config);
  }

}

let chiNumberInput = NumberInput.factory;

chi.numberInput = chiNumberInput;
export {NumberInput, chiNumberInput};

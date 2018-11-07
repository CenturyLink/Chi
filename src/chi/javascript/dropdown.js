import {Util} from "./util.js";
import {chi} from "./chi.js";
import Popper from 'popper.js';

const CLASS_MOLECULE = "m-dropdown";
const CLASS_COMPONENT = 'm-dropdown__trigger';
const CLASS_DROPDOWN = 'm-dropdown__menu';
const CLASS_ACTIVE = "-active";
const COMPONENT_TYPE = "dropdown";
const DEFAULT_POSITION = "bottom-start";

class Dropdown {

  constructor (elem, config) {
    this._elem = elem;
    this._config = config;
    this._eventCaptured = false;
    this._shown = Util.hasClass(elem, CLASS_ACTIVE);
    this._locateDropdown();
    let that = this;
    let dropdownPosition = false;

    Util.registerComponent(COMPONENT_TYPE, this._elem, this);

    if (this._elem.dataset.position) {
      if (this._elem.dataset.position === 'default') {
        dropdownPosition = DEFAULT_POSITION;
      } else if (this._elem.dataset.position !== "initial") {
        dropdownPosition = this._elem.dataset.position;
      }
    } else if (this._molecule) {
      dropdownPosition = DEFAULT_POSITION;
    }

    if (dropdownPosition && typeof Popper !== 'undefined') {
      this._popper = new Popper (this._elem, this._dropdownElem, {
        modifiers: {
          applyStyle: {enabled: true}
        },
        placement: dropdownPosition
      });
    }

    this._triggerClickEventListener = function() {
      that._clickOnTrigger();
    };
    this._elem.addEventListener('click', this._triggerClickEventListener);

    this._documentClickEventListener = function() {
      that._clickOnDocument();
    };
    document.addEventListener('click', this._documentClickEventListener);

  }

  _clickOnTrigger() {
    this.toggle();
    this._eventCaptured = true;
  }

  _clickOnDocument() {
    if (this._eventCaptured) {
      this._eventCaptured = false;
    } else {
      this.hide();
    }
  }

  _locateDropdown () {
    this._dropdownElem = Util.getTarget(this._elem);
    if (!this._dropdownElem) {
      if (!this._molecule) {
        if (Util.hasClass(this._elem.parentNode, CLASS_MOLECULE)) {
          this._molecule = this._elem.parentNode;
        }
      }
      if (this._molecule) {
        let dropdown = this._molecule.getElementsByClassName(CLASS_DROPDOWN);
        if (dropdown && dropdown.length) {
          this._dropdownElem = dropdown[0];
        }
      }
    }
    if (!this._dropdownElem) {
      throw new Error ("Could not find dropdown conent for dropdown trigger. ");
    }
  }

  show() {
    if (!this._shown) {
      Util.addClass(this._elem, CLASS_ACTIVE);
      Util.addClass(this._dropdownElem, CLASS_ACTIVE);
      if (this._popper) {
        this._popper.update();
      }
      this._shown = true;
    }
  }

  hide() {
    if (this._shown) {
      Util.removeClass(this._elem, CLASS_ACTIVE);
      Util.removeClass(this._dropdownElem, CLASS_ACTIVE);
      this._shown = false;
    }
  }

  toggle () {
    if (this._shown) {
      this.hide();
    } else {
      this.show();
    }
  }

  dispose() {
    this._config = null;
    this._dropdownElem = null;
    this._molecule = null;
    this._shown = null;
    this._eventCaptured = null;
    this._elem.removeEventListener('click', this._triggerClickEventListener);
    this._triggerClickEventListener = null;
    document.removeEventListener('click', this._documentClickEventListener);
    this._documentClickEventListener = null;
    Util.unregisterComponent(COMPONENT_TYPE, this._elem);
    this._elem = null;
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
  }

  static factory(elem, config) {

    return Util.getRegisteredComponent(COMPONENT_TYPE, elem) ||
      new Dropdown(elem, config);

  }

  static initAll(config) {
    Array.prototype.forEach.call(
      document.getElementsByClassName(CLASS_COMPONENT), function (elem) {
        Dropdown.factory(elem, config);
      }
    );
  }

}

let chiDropdown = Dropdown.factory;

chi.dropdown = chiDropdown;
export {Dropdown, chiDropdown};

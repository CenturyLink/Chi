import {Util} from "./util.js";
import {chi} from "./chi.js";
import Popper from 'popper.js';

const CLASS_ACTIVE = "-active";
const CLASS_COMPONENT = 'm-dropdown__trigger';
const CLASS_DROPDOWN = 'm-dropdown__menu';
const CLASS_DROPDOWN_ITEM = 'm-dropdown__menu-item';
const CLASS_MOLECULE = "m-dropdown";
const COMPONENT_TYPE = "dropdown";
const DEFAULT_POSITION = "bottom-start";

class Dropdown {

  constructor (elem, config) {
    this._elem = elem;
    this._config = Util.extend({
      popper: true,
      dropdownElem: null
    }, config);
    this._eventCaptured = false;
    this._shown = Util.hasClass(elem, CLASS_ACTIVE);
    this._childrenDropdowns = [];
    this._dropdownElem = null;
    this._parentDropdown = null;
    this._activedDescendants = [];
    this._locateMolecule();
    this._locateDropdown();
    let self = this;

    if (this._config.popper) {
      this.enablePopper();
    }

    this._triggerClickEventListener = function(e) {
      self._clickOnTrigger();
      e.preventDefault();
      self._eventCaptured = true;
    };
    this._triggerFocusEventListener = function() {
      self._triggerOnFocus();
    };
    this._triggerBlurEventListener = function() {
      self._triggerOnBlur();
    };
    this._elem.addEventListener('click', this._triggerClickEventListener);
    //this._elem.addEventListener('focus', this._triggerFocusEventListener);
    //this._elem.addEventListener('blur', this._triggerBlurEventListener);

    this._documentClickEventListener = function() {
      if (self._eventCaptured === true) {
        self._eventCaptured = false;
      } else {
        self._clickOnDocument();
      }
    };

    this._dropdownElemClickEventListener = function(e) {
      self._dropdownClickedEventManager(e);
    };
    document.addEventListener(
      'click',
      this._documentClickEventListener
    );
    this._dropdownElem.addEventListener(
      'click',
      this._dropdownElemClickEventListener
    );
    this._initInnerDropdowns();
  }

  _dropdownClickedEventManager (e) {
    this._eventCaptured = true;
  }

  _initInnerDropdowns () {
    const self = this;
    Array.prototype.forEach.call(
      this._dropdownElem.getElementsByClassName(CLASS_COMPONENT),
      function (elem) {
        const dropdownElem = elem.nextSibling;
        const config = Util.copyObject(self._config);
        config.popper = false;
        if (dropdownElem && Util.hasClass(dropdownElem, CLASS_DROPDOWN)) {
          config.dropdownElem = dropdownElem;
        }
        const dd = Dropdown.factory(elem, config);
        if (!dd._parentDropdown) {
          dd._parentDropdown = self;
          self._childrenDropdowns.push(dd);
        }
      }
    );
  }

  _calculateDropdownPosition() {
    let dropdownPosition = null;

    if (this._elem.dataset.position) {
      if (this._elem.dataset.position === 'default') {
        dropdownPosition = DEFAULT_POSITION;
      } else if (this._elem.dataset.position !== "initial") {
        dropdownPosition = this._elem.dataset.position;
      }
    } else if (this._molecule) {
      dropdownPosition = DEFAULT_POSITION;
    }
    return dropdownPosition;
  }

  enablePopper () {
    if (this._popper) {
      return;
    }

    let dropdownPosition = this._calculateDropdownPosition();

    if (dropdownPosition && typeof Popper !== 'undefined') {
      this._popper = new Popper (this._elem, this._dropdownElem, {
        modifiers: {
          applyStyle: {enabled: true},
          applyChiStyle: {
            enabled: true,
            fn: this._popperPatchForBottomLeftPropperLocation,
            order: 890
          },
        },
        placement: dropdownPosition
      });
    }
  }

  _popperPatchForBottomLeftPropperLocation (data) {
    data.styles.left = data.styles.left || 'initial';
    data.styles.right = data.styles.right || 'initial';
    return data;
  }

  disablePopper () {
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
  }

  _clickOnTrigger() {
    if (!this.focused) {
      this.toggle();
    }
  }

  _triggerOnFocus () {
    this.focused = true;
    if (!this._shown) {
      this.show();
    }
  }

  _triggerOnBlur () {
    this.focused = false;
    if (this._shown) {
      this.hide();
    }
  }

  _clickOnDocument() {
    this.hide();
  }

  _locateMolecule (elem) {
    if (typeof elem === 'undefined') {
      elem = this._elem.parentNode;
    }

    if (elem === null) {
      return;
    } else if (Util.hasClass(elem, CLASS_MOLECULE)) {
      this._molecule = elem;
      return;
    } else if (elem.nodeName === 'body' || elem.nodeName === 'document') {
      return;
    } else {
      this._locateMolecule(elem.parentNode);
    }
  }

  _locateDropdown () {

    if (this._config.dropdownElem) {
      this._dropdownElem = this._config.dropdownElem;
    } else {
      this._dropdownElem = Util.getTarget(this._elem);
    }

    if (this._molecule && !this._dropdownElem) {
      let dropdown = this._molecule.getElementsByClassName(CLASS_DROPDOWN);
      if (dropdown && dropdown.length) {
        this._dropdownElem = dropdown[0];
      }
    }

    if (!this._dropdownElem) {
      throw new Error (
        "Could not find dropdown content for dropdown trigger. "
      );
    }
  }

  show() {
    if (this._parentDropdown) {
      this._parentDropdown._setActiveDescendants(
        [
          this,
          this._activedDescendants
        ]
      );
    }
    if (!this._shown) {
      Util.addClass(this._elem, CLASS_ACTIVE);
      Util.addClass(this._dropdownElem, CLASS_ACTIVE);
      if (this._popper) {
        this._popper.update();
      }
      if (this._parentDropdown) {
        this._parentDropdown.show();
      }
      this._shown = true;
    }
  }

  hide() {
    if (this._shown) {
      if (this._parentDropdown) {
        this._parentDropdown._setActiveDescendants();
      }
      this._setActiveDescendants();
      Util.removeClass(this._elem, CLASS_ACTIVE);
      Util.removeClass(this._dropdownElem, CLASS_ACTIVE);
      this._shown = false;
      this._childrenDropdowns.forEach(function(dd) {
        dd.hide();
      });
    }
  }

  _setActiveDescendants (descendants) {
    this._activedDescendants = [];
    const self = this;
    if (typeof descendants === 'undefined') {
      return;
    }
    descendants.forEach(function(descendant) {
      if (Array.isArray(descendant)) {
        descendant.forEach(function(subDescendant) {
          self._activedDescendants.push(subDescendant);
        });
      } else {
        self._activedDescendants.push(descendant);
      }
    });
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
    this._elem.removeEventListener('focus', this._triggerFocusEventListener);
    this._triggerFocusEventListener = null;
    this._elem.removeEventListener('blur', this._triggerBlurEventListener);
    this._triggerBlurEventListener = null;

    this._childrenDropdowns.forEach(function(dropdown) {
      dropdown.dispose();
    });
    this._childrenDropdowns = null;
    this._parentDropdown = null;
    this._activedDescendants = null;

    document.removeEventListener('click', this._documentClickEventListener);
    this._documentClickEventListener = null;
    this._elem = null;
    this.disablePopper();
  }

  static factory(elem, config) {
    return Util.cachedComponentFactory(
      elem,
      config,
      COMPONENT_TYPE,
      function() {
        return new Dropdown(elem, config);
      }
    );
  }

  static initAll(config) {
    Array.prototype.forEach.call(
      document.getElementsByClassName(CLASS_COMPONENT), function (elem) {
        Dropdown.factory(elem, config);
      }
    );
  }

}

let chiDropdown = Util.addArraySupportToFactory(Dropdown.factory);

chi.dropdown = chiDropdown;
export {
  Dropdown,
  chiDropdown,

  CLASS_ACTIVE,
  CLASS_COMPONENT,
  CLASS_DROPDOWN,
  CLASS_DROPDOWN_ITEM,
  CLASS_MOLECULE,
  COMPONENT_TYPE,
  DEFAULT_POSITION
};

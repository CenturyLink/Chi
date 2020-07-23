import {Component} from "../core/component";
import {Util} from "../core/util.js";
import Popper from 'popper.js';
import {CLASS_HAS_ACTIVE} from "./tab";

const CLASS_ACTIVE = "-active";
const CLASS_DROPDOWN = 'chi-dropdown__menu';
const CLASS_DROPDOWN_ITEM = 'chi-dropdown__menu-item';
const CLASS_MOLECULE = "chi-dropdown";
const CLASS_COMPONENT = 'chi-dropdown__trigger';
const COMPONENT_SELECTOR = '.chi-dropdown__trigger';
const COMPONENT_TYPE = "dropdown";
const DEFAULT_CONFIG = {
  popper: true,
  dropdownElem: null
};
const DEFAULT_POSITION = "bottom-start";

class Dropdown extends Component {

  constructor (elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
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

    this._documentClickEventListener = function() {
      if (self._eventCaptured === true) {
        self._eventCaptured = false;
      } else {
        self._clickOnDocument();
      }
    };
    document.addEventListener(
      'click',
      this._documentClickEventListener
    );

    this._dropdownElemClickEventListener = function(e) {
      self._dropdownClickedEventManager(e);
    };
    this._dropdownElem.addEventListener(
      'click',
      this._dropdownElemClickEventListener
    );

    this._initInnerDropdowns();
  }

  _dropdownClickedEventManager (e) {
    this._eventCaptured = true;
    if (e.target.nodeName === 'A' ||
      e.target.nodeName === 'BUTTON' ||
      e.target.getAttribute('type') === 'button' ||
      e.target.getAttribute('type') === 'submit' ||
      e.target.getAttribute('type') === 'reset') {
      this._clickDropdownElemItem();
    }
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

    this._popper = 'loading';
    const self = this;
    window.requestAnimationFrame(function() {
      let dropdownPosition = self._calculateDropdownPosition();

      if (dropdownPosition && typeof Popper !== 'undefined') {
        self._popper = new Popper (self._elem, self._dropdownElem, {
          modifiers: {
            applyStyle: {enabled: true},
            applyChiStyle: {
              enabled: true,
              fn: self._popperPatchForBottomLeftPropperLocation,
              order: 890
            },
          },
          placement: dropdownPosition
        });
      }
    });
  }

  _popperPatchForBottomLeftPropperLocation (data) {
    data.styles.left = data.styles.left || 'initial';
    data.styles.right = data.styles.right || 'initial';
    return data;
  }

  disablePopper () {
    if (this._popper && typeof this._popper === 'function') {
      this._popper.destroy();
    }
    this._popper = null;
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

  _clickDropdownElemItem() {
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
      Util.addClass(this._elem, CLASS_HAS_ACTIVE);
      Util.addClass(this._dropdownElem, CLASS_ACTIVE);
      if (this._popper && typeof this._popper.update === "function") {
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
    this._molecule = null;
    this._shown = null;
    this._eventCaptured = null;
    this._elem.removeEventListener('click', this._triggerClickEventListener);
    this._triggerClickEventListener = null;
    this._elem.removeEventListener('focus', this._triggerFocusEventListener);
    this._triggerFocusEventListener = null;
    this._elem.removeEventListener('blur', this._triggerBlurEventListener);
    this._triggerBlurEventListener = null;
    this._dropdownElem.removeEventListener(
      'click',
      this._dropdownElemClickEventListener
    );
    this._dropdownElemClickEventListener = null;

    this._childrenDropdowns.forEach(function(dropdown) {
      dropdown.dispose();
    });
    this._childrenDropdowns = null;
    this._parentDropdown = null;
    this._activedDescendants = null;
    this._dropdownElem = null;

    document.removeEventListener('click', this._documentClickEventListener);
    this._documentClickEventListener = null;
    this._elem = null;
    this.disablePopper();
  }


  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(Dropdown);
export {
  Dropdown,
  factory,
  CLASS_ACTIVE,
  CLASS_COMPONENT,
  CLASS_DROPDOWN,
  CLASS_DROPDOWN_ITEM,
  CLASS_MOLECULE,
  COMPONENT_TYPE,
  DEFAULT_POSITION
};

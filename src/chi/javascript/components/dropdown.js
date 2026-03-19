import {Component} from "../core/component";
import {Util} from "../core/util.js";
import {computePosition, autoUpdate as floatingAutoUpdate, flip, shift, hide as hideMiddleware} from '@floating-ui/dom';
import {CLASS_HAS_ACTIVE} from "./tab";

const CLASS_ACTIVE = "-active";
const CLASS_DROPDOWN = 'chi-dropdown__menu';
const CLASS_DROPDOWN_ITEM = 'chi-dropdown__menu-item';
const CLASS_MOLECULE = "chi-dropdown";
const CLASS_COMPONENT = 'chi-dropdown__trigger';
const COMPONENT_SELECTOR = '.chi-dropdown__trigger';
const COMPONENT_TYPE = "dropdown";
const DEFAULT_CONFIG = {
  floating: true,
  popper: undefined,
  portal: false,
  dropdownElem: null
};
const DEFAULT_POSITION = "bottom-start";
const EVENTS = {
  SHOW: 'chiDropdownShow',
  HIDE: 'chiDropdownHide'
};

class Dropdown extends Component {

  constructor (elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._floating = null;
    this._portalOriginalParent = null;
    this._portalOriginalNextSibling = null;
    Object.defineProperty(this, '_popper', {
      configurable: true,
      enumerable: false,
      get: () => this._floating,
      set: (value) => {
        this._floating = value;
      }
    });

    if (typeof this._config.floating === 'undefined') {
      this._config.floating = typeof this._config.popper === 'boolean' ? this._config.popper : true;
    }
    this._config.popper = this._config.floating;

    this._eventCaptured = false;
    this._shown = Util.hasClass(elem, CLASS_ACTIVE);
    this._childrenDropdowns = [];
    this._dropdownElem = null;
    this._parentDropdown = null;
    this._activedDescendants = [];
    this._locateMolecule();
    this._locateDropdown();
    let self = this;

    if (this._config.floating) {
      this.enableFloating();
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
        config.floating = false;
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

  _portalDropdownMenu() {
    if (!this._config.portal || !this._dropdownElem) {
      return;
    }
    this._portalOriginalParent = this._dropdownElem.parentElement;
    this._portalOriginalNextSibling = this._dropdownElem.nextSibling;

    this._dropdownElem.style.zIndex = '10';

    document.body.appendChild(this._dropdownElem);

    this._syncMenuMinWidth();
  }

  _syncMenuMinWidth() {
    if (!this._config.portal || !this._elem || !this._dropdownElem) {
      return;
    }
    const refWidth = this._elem.getBoundingClientRect().width;
    if (refWidth > 0) {
      this._dropdownElem.style.minWidth = `${refWidth}px`;
    }
  }

  _restoreDropdownMenu() {
    if (!this._portalOriginalParent || !this._dropdownElem) {
      return;
    }
    this._dropdownElem.style.zIndex = '';
    this._dropdownElem.style.minWidth = '';

    if (this._portalOriginalParent.isConnected) {
      this._portalOriginalParent.insertBefore(
        this._dropdownElem,
        this._portalOriginalNextSibling
      );
    }
    this._portalOriginalParent = null;
    this._portalOriginalNextSibling = null;
  }

  enableFloating () {
    if (this._floating) {
      return;
    }

    this._floating = 'loading';
    const self = this;
    window.requestAnimationFrame(function() {
      let dropdownPosition = self._calculateDropdownPosition();

      if (dropdownPosition) {
        self._portalDropdownMenu();

        const strategy = self._config.portal ? 'fixed' : 'absolute';
        self._floating = {
          _placement: dropdownPosition,
          _reference: self._elem,
          _floating: self._dropdownElem,
          _autoUpdateCleanup: null,
          update() {
            return computePosition(this._reference, this._floating, {
              placement: this._placement,
              strategy: strategy,
              middleware: [flip(), shift(), hideMiddleware({ strategy: 'referenceHidden' })],
            }).then(({x, y, middlewareData}) => {
              Object.assign(this._floating.style, {
                position: strategy,
                left: `${Util.roundByDPR(x)}px`,
                top: `${Util.roundByDPR(y)}px`,
                transform: 'none',
                willChange: '',
                right: '',
              });
              if (middlewareData.hide) {
                this._floating.style.visibility = middlewareData.hide.referenceHidden ? 'hidden' : '';
              }
            });
          },
          enableAutoUpdate() {
            this.disableAutoUpdate();
            const ref = this._reference;
            const floating = this._floating;
            const floatingInstance = this;
            this._autoUpdateCleanup = floatingAutoUpdate(
              ref, floating, function() { floatingInstance.update(); }
            );
          },
          disableAutoUpdate() {
            if (this._autoUpdateCleanup) {
              this._autoUpdateCleanup();
              this._autoUpdateCleanup = null;
            }
          },
          destroy() {
            this.disableAutoUpdate();
            this._floating.style.position = '';
            this._floating.style.left = '';
            this._floating.style.top = '';
            this._floating.style.transform = '';
            this._floating.style.willChange = '';
            this._floating.style.visibility = '';
          }
        };
        self._floating.update();
      }
    });
  }

  enablePopper () {
    this.enableFloating();
  }

  disableFloating () {
    if (this._floating && typeof this._floating === 'object' && this._floating.destroy) {
      this._floating.destroy();
    }
    this._floating = null;
    this._restoreDropdownMenu();
  }

  disablePopper () {
    this.disableFloating();
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
      this._dropdownElem.style.visibility = '';
      this._syncMenuMinWidth();
      if (this._floating && typeof this._floating.update === "function") {
        const floatingRef = this._floating;
        const self2 = this;
        this._floating.update().then(function() {
          if (self2._floating !== floatingRef) return;
          floatingRef.enableAutoUpdate();
        });
      }
      if (this._parentDropdown) {
        this._parentDropdown.show();
      }
      this._shown = true;
      this._elem.dispatchEvent(
        Util.createEvent(EVENTS.SHOW)
      );
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
      if (this._floating && typeof this._floating.disableAutoUpdate === "function") {
        this._floating.disableAutoUpdate();
      }
      this._shown = false;
      this._childrenDropdowns.forEach(function(dd) {
        dd.hide();
      });
      this._elem.dispatchEvent(
        Util.createEvent(EVENTS.HIDE)
      );
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

    document.removeEventListener('click', this._documentClickEventListener);
    this._documentClickEventListener = null;
    this.disableFloating();
    this._dropdownElem = null;
    this._elem = null;
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

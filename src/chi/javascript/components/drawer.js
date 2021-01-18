import { Component } from '../core/component';
import { Util } from '../core/util.js';
import { chi } from '../core/chi';

const ANIMATION_DURATION = 500;
const CLASS_DRAWER = 'chi-drawer';
const CLOSE_TRIGGER_SELECTOR = `.${CLASS_DRAWER} > .-close, .${CLASS_DRAWER} > .chi-drawer__header > .-close`;
const COMPONENT_SELECTOR = '.chi-drawer__trigger';
const COMPONENT_TYPE = 'drawer';
const DISABLE_SCROLL = '-disable-scroll';
const EVENTS = {
  SHOW_DEPRECATED: 'chi.drawer.show',
  HIDE_DEPRECATED: 'chi.drawer.hide',
  SHOW: 'chiDrawerShow',
  HIDE: 'chiDrawerHide',
  SHOWN: 'chiDrawerShown',
  HIDDEN: 'chiDrawerHidden'
};
const DEFAULT_CONFIG = {
  target: null,
  animated: true,
  preventAutoHide: false,
  persistOnClick: false
};

class Drawer extends Component {

  constructor(elem, config) {

    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._shown = Util.hasClass(elem, chi.classes.ACTIVE);
    this._transitioning = false;
    if (this._config.target) {
      if (this._config.target instanceof Element) {
        this._drawerElem = this._config.target;
      } else {
        this._drawerElem = document.querySelector(this._config.target);
      }
    } else {
      this._drawerElem = this._locateDrawer();
    }
    this._closeButton = this._locateCloseButton();
    this._backdrop = this._locateBackdrop();
    this._currentThreeStepsAnimation = null;
    let self = this;

    if (this._config.animated) {
      Util.addClass(this._drawerElem, chi.classes.ANIMATED);
      if (this._backdrop) {
        Util.addClass(this._backdrop, chi.classes.ANIMATED);
      }
    }

    this._triggerClickEventListener = function(e) {
      e.preventDefault();
      if (self._config.persistOnClick) {
        if (!self._shown) {
          self.show();
        }
      } else {
        self.toggle();
      }
    };

    this._closeClickEventListener = function() {
      self.hide();
    };

    this._mouseClickOnDrawer = function() {
      self._closeOnClickOnDocument = false;
    };

    this._addEventHandler(
      this._drawerElem, 'click', this._mouseClickOnDrawer
    );

    if (!this._config.preventAutoHide) {

      this._mouseClickOnDocument = function() {
        if (self._closeOnClickOnDocument) {
          self.hide();
        } else {
          self._closeOnClickOnDocument = true;
        }
      };

      this._addEventHandler(
        document, 'click', this._mouseClickOnDocument
      );
    }

    this._elem.addEventListener('click', this._triggerClickEventListener);
    this._closeButton.addEventListener('click', this._closeClickEventListener);
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  static get componentSelector() {
    return COMPONENT_SELECTOR;
  }

  _locateDrawer() {
    const drawerElem = Util.getTarget(this._elem);
    if (!drawerElem) {
      throw new Error('Could not find drawer content for drawer trigger. ');
    }
    return drawerElem;
  }

  _locateCloseButton() {
    const closeButtons = this._drawerElem.querySelectorAll(CLOSE_TRIGGER_SELECTOR);
    if (closeButtons) {
      return closeButtons[0];
    } else {
      return null;
    }
  }

  _locateBackdrop() {
    const parent = this._drawerElem.parentNode.parentNode;
    if (Util.hasClass(parent, 'chi-backdrop')) {
      return parent;
    } else {
      return null;
    }
  }

  show() {
    if (!this._shown) {
      // if (this._backdrop) {
      //   Util.addClass(document.body, DISABLE_SCROLL);
      // }
      if (this._transitioning) {
        Util.stopThreeStepsAnimation(this._currentThreeStepsAnimation, false);
      }
      this._transitioning = true;
      const self = this;
      if (this._config.animated) {
        this._currentThreeStepsAnimation = Util.threeStepsAnimation(
          function() {
            Util.addClass(self._drawerElem, chi.classes.TRANSITIONING);
            if (self._backdrop) {
              Util.addClass(self._backdrop, chi.classes.TRANSITIONING);
            }
          },
          function() {
            Util.addClass(self._drawerElem, chi.classes.ACTIVE);
            Util.addClass(self._elem, chi.classes.ACTIVE);
            if (self._backdrop) {
              Util.removeClass(self._backdrop, chi.classes.CLOSED);
            }
            self._shown = true;
            self._drawerElem.dispatchEvent(
              Util.createEvent(EVENTS.SHOW)
            );
            self._drawerElem.dispatchEvent(
              Util.createEvent(EVENTS.SHOW_DEPRECATED)
            );
          },
          function() {
            Util.removeClass(self._drawerElem, chi.classes.TRANSITIONING);
            if (self._backdrop) {
              Util.removeClass(self._backdrop, chi.classes.TRANSITIONING);
            }
            self._transitioning = false;
            self._drawerElem.dispatchEvent(
              Util.createEvent(EVENTS.SHOWN)
            );
          },
          ANIMATION_DURATION
        );
      } else {
        Util.addClass(self._drawerElem, chi.classes.ACTIVE);
        Util.addClass(self._elem, chi.classes.ACTIVE);
        if (self._backdrop) {
          Util.removeClass(self._backdrop, chi.classes.CLOSED);
        }
        self._transitioning = false;
        self._shown = true;
        self._drawerElem.dispatchEvent(
          Util.createEvent(EVENTS.show)
        );
        self._closeOnClickOnDocument = false;
      }
    }
  }

  hide() {
    if (this._shown) {
      Util.removeClass(document.body, DISABLE_SCROLL);
      if (this._transitioning) {
        Util.stopThreeStepsAnimation(this._currentThreeStepsAnimation, false);
      }
      this._transitioning = true;
      const self = this;
      if (this._config.animated) {
        this._currentThreeStepsAnimation = Util.threeStepsAnimation(
          function() {
            Util.addClass(self._drawerElem, chi.classes.TRANSITIONING);
            if (self._backdrop) {
              Util.addClass(self._backdrop, chi.classes.TRANSITIONING);
            }
          },
          function() {
            Util.removeClass(self._drawerElem, chi.classes.ACTIVE);
            Util.removeClass(self._elem, chi.classes.ACTIVE);
            if (self._backdrop) {
              Util.addClass(self._backdrop, chi.classes.CLOSED);
            }
            self._shown = false;
            self._drawerElem.dispatchEvent(
              Util.createEvent(EVENTS.HIDE)
            );
            self._drawerElem.dispatchEvent(
              Util.createEvent(EVENTS.HIDE_DEPRECATED)
            );
          },
          function() {
            Util.removeClass(self._drawerElem, chi.classes.TRANSITIONING);
            if (self._backdrop) {
              Util.removeClass(self._backdrop, chi.classes.TRANSITIONING);
            }
            self._transitioning = false;
            self._drawerElem.dispatchEvent(
              Util.createEvent(EVENTS.HIDDEN)
            );
          },
          ANIMATION_DURATION
        );
      } else {
        Util.removeClass(self._drawerElem, chi.classes.ACTIVE);
        Util.removeClass(self._elem, chi.classes.ACTIVE);
        if (self._backdrop) {
          Util.addClass(self._backdrop, chi.classes.CLOSED);
        }
        self._transitioning = false;
        self._shown = false;
        self._drawerElem.dispatchEvent(
          Util.createEvent(EVENTS.hide)
        );
      }
    }
  }

  toggle() {
    if (this._shown) {
      this.hide();
    } else {
      this.show();
    }
  }

  dispose() {
    this._config = null;
    this._drawerElem = null;
    this._shown = null;
    this._transitioning = null;
    this._elem.removeEventListener('click', this._triggerClickEventListener);
    this._closeButton.removeEventListener('click', this._closeClickEventListener);
    this._closeButton = null;
    this._currentThreeStepsAnimation = null;
    this._elem = null;
  }
}

const factory = Component.factory.bind(Drawer);
export {Drawer, factory, EVENTS, ANIMATION_DURATION as DRAWER_ANIMATION_DURATION};

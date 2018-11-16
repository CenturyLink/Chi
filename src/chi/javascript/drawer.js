import {Util} from "./util.js";
import {chi} from "./chi.js";

const ANIMATION_DURATION = 500;
const CLASS_ACTIVE = "-active";
const CLASS_ANIMATED = "-animated";
const CLASS_COMPONENT = 'm-drawer__trigger';
const CLASS_DRAWER = 'm-drawer';
const CLASS_TRANSITIONING = "-transitioning";
const CLOSE_TRIGGER_SELECTOR = `.${CLASS_DRAWER} > .-close, .${CLASS_DRAWER} > .m-drawer__header > .-close`;
const COMPONENT_TYPE = "drawer";

class Drawer {

  constructor (elem, config) {
    this._elem = elem;
    this._config = config;
    this._shown = Util.hasClass(elem, CLASS_ACTIVE);
    this._transitioning = false;
    this._locateDrawer();
    this._locateCloseButton();
    let self = this;

    Util.registerComponent(COMPONENT_TYPE, this._elem, this);

    this._triggerClickEventListener = function() {
      self.toggle();
    };
    this._closeClickEventListener = function() {
      self.hide();
    };

    this._elem.addEventListener('click', this._triggerClickEventListener);
    this._closeButton.addEventListener('click', this._closeClickEventListener);
  }

  _locateDrawer () {
    this._drawerElem = Util.getTarget(this._elem);
    if (!this._drawerElem) {
      throw new Error ("Could not find drawer content for drawer trigger. ");
    }
  }
  _locateCloseButton() {
    let closeButtons = this._drawerElem.querySelectorAll(CLOSE_TRIGGER_SELECTOR);
    if (closeButtons) {
      this._closeButton = closeButtons[0];
    }
  }

  show() {
    if (!this._shown && !this._transitioning) {
      this._transitioning = true;
      const self = this;
      const animated = Util.hasClass(this._drawerElem, CLASS_ANIMATED);
      if (animated) {
        Util.addClass(this._drawerElem, CLASS_TRANSITIONING);
        window.setTimeout(function(){
          Util.addClass(self._drawerElem, CLASS_ACTIVE);
        }, 0);
        Util.emulateTransitionEnd(ANIMATION_DURATION, function() {
          Util.removeClass(self._drawerElem, CLASS_TRANSITIONING);
          Util.addClass(self._elem, CLASS_ACTIVE);
          self._shown = true;
          self._transitioning = false;
        });
      } else {
        Util.addClass(self._drawerElem, CLASS_ACTIVE);
        Util.addClass(self._elem, CLASS_ACTIVE);
        self._transitioning = false;
        self._shown = true;
      }
    }
  }

  hide() {
    if (this._shown && !this._transitioning) {
      this._transitioning = true;
      const self = this;
      const animated = Util.hasClass(this._drawerElem, CLASS_ANIMATED);
      if (animated) {
        Util.addClass(this._drawerElem, CLASS_TRANSITIONING);
        window.setTimeout(function(){
          Util.removeClass(self._drawerElem, CLASS_ACTIVE);
        }, 0);
        Util.emulateTransitionEnd(ANIMATION_DURATION, function() {
          Util.removeClass(self._drawerElem, CLASS_TRANSITIONING);
          Util.removeClass(self._elem, CLASS_ACTIVE);
          self._shown = false;
          self._transitioning = false;
        });
      } else {
        Util.removeClass(self._drawerElem, CLASS_ACTIVE);
        Util.removeClass(self._elem, CLASS_ACTIVE);
        self._transitioning = false;
        self._shown = false;
      }
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
    this._drawerElem = null;
    this._shown = null;
    this._transitioning = null;
    this._elem.removeEventListener('click', this._triggerClickEventListener);
    this._closeButton.removeEventListener('click', this._closeClickEventListener);
    this._closeButton = null;
    Util.unregisterComponent(COMPONENT_TYPE, this._elem);
    this._elem = null;
  }

  static factory(elem, config) {
    return Util.getRegisteredComponent(COMPONENT_TYPE, elem) ||
      new Drawer(elem, config);
  }

  static initAll(config) {
    Array.prototype.forEach.call(
      document.getElementsByClassName(CLASS_COMPONENT), function (elem) {
        Drawer.factory(elem, config);
      }
    );
  }
}

let chiDrawer = Drawer.factory;

chi.drawer = chiDrawer;
export {Drawer, chiDrawer};

import {Util} from "./util.js";
import {chi} from "./chi.js";
import {FloatingLabel} from "./floating-label";

const ANIMATION_DURATION = 500;
const CLASS_ACTIVE = "-active";
const CLASS_ANIMATED = "-animated";
const CLASS_BACKDROP_CLOSED = "-closed";
const CLASS_COMPONENT = 'm-drawer__trigger';
const CLASS_DRAWER = 'm-drawer';
const CLASS_TRANSITIONING = "-transitioning";
const CLOSE_TRIGGER_SELECTOR = `.${CLASS_DRAWER} > .-close, .${CLASS_DRAWER} > .m-drawer__header > .-close`;
const COMPONENT_TYPE = "drawer";

class Drawer {

  constructor (elem, config) {
    this._elem = elem;
    this._config = Util.extend({}, config);
    this._shown = Util.hasClass(elem, CLASS_ACTIVE);
    this._transitioning = false;
    this._drawerElem = this._locateDrawer();
    this._closeButton = this._locateCloseButton();
    this._backdrop = this._locateBackdrop();
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
    const drawerElem = Util.getTarget(this._elem);
    if (!drawerElem) {
      throw new Error ("Could not find drawer content for drawer trigger. ");
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
    const parent = this._drawerElem.parentNode;
    if (Util.hasClass(parent, 'a-backdrop')) {
      return parent;
    } else {
      return null;
    }
  }

  show() {
    if (!this._shown && !this._transitioning) {
      this._transitioning = true;
      const self = this;
      const animated = Util.hasClass(this._drawerElem, CLASS_ANIMATED);
      if (animated) {
        window.requestAnimationFrame(function () {
          Util.addClass(self._drawerElem, CLASS_TRANSITIONING);
          if (self._backdrop) { Util.addClass(self._backdrop, CLASS_TRANSITIONING); }
          window.requestAnimationFrame(function(){
            Util.addClass(self._drawerElem, CLASS_ACTIVE);
            if (self._backdrop) { Util.removeClass(self._backdrop, CLASS_BACKDROP_CLOSED); }
          });
        });
        Util.emulateTransitionEnd(ANIMATION_DURATION, function() {
          Util.addClass(self._elem, CLASS_ACTIVE);
          Util.removeClass(self._drawerElem, CLASS_TRANSITIONING);
          if (self._backdrop) { Util.removeClass(self._backdrop, CLASS_TRANSITIONING); }
          self._shown = true;
          self._transitioning = false;
        });
      } else {
        Util.addClass(self._drawerElem, CLASS_ACTIVE);
        Util.addClass(self._elem, CLASS_ACTIVE);
        if (self._backdrop) { Util.removeClass(self._backdrop, CLASS_BACKDROP_CLOSED); }
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
        window.requestAnimationFrame(function() {
          Util.addClass(self._drawerElem, CLASS_TRANSITIONING);
          if (self._backdrop) { Util.addClass(self._backdrop, CLASS_TRANSITIONING); }
          window.requestAnimationFrame(function(){
            Util.removeClass(self._drawerElem, CLASS_ACTIVE);
            if (self._backdrop) { Util.addClass(self._backdrop, CLASS_BACKDROP_CLOSED); }
          });
        });
        Util.emulateTransitionEnd(ANIMATION_DURATION, function() {
          Util.removeClass(self._drawerElem, CLASS_TRANSITIONING);
          Util.removeClass(self._elem, CLASS_ACTIVE);
          if (self._backdrop) { Util.removeClass(self._backdrop, CLASS_TRANSITIONING); }
          self._shown = false;
          self._transitioning = false;
        });
      } else {
        Util.removeClass(self._drawerElem, CLASS_ACTIVE);
        Util.removeClass(self._elem, CLASS_ACTIVE);
        if (self._backdrop) { Util.addClass(self._backdrop, CLASS_BACKDROP_CLOSED); }
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

let chiDrawer = Util.addArraySupportToFactory(Drawer.factory);

chi.drawer = chiDrawer;
export {Drawer, chiDrawer};

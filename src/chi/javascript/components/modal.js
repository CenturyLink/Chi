import {Component} from "../core/component";
import {Util} from "../core/util.js";
import {chi} from "../core/chi";

const ANIMATION_DURATION = 500;
const CLOSE_TRIGGER_SELECTOR = '[data-dismiss="modal"]';
const COMPONENT_SELECTOR = '.a-modal__trigger';
const COMPONENT_TYPE = "modal";
const DISABLE_SCROLL = '-disableScroll';
const ESCAPE_KEYCODE = 27;
const EVENTS = {
  show: 'chi.modal.show',
  hide: 'chi.modal.hide'
};
const DEFAULT_CONFIG = {
  target: null,
  animated: true
};

class Modal extends Component {

  constructor (elem, config) {

    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._shown = Util.hasClass(elem, chi.classes.ACTIVE);
    this._transitioning = false;
    if (this._config.target) {
      if (this._config.target instanceof Element) {
        this._modalElem = this._config.target;
      } else {
        this._modalElem = document.querySelector(this._config.target);
      }
    } else {
      this._modalElem = this._locateModal();
    }
    this._closeButtons = this._locateCloseButtons();
    this._backdrop = this._locateBackdrop();
    this._currentThreeStepsAnimation = null;
    let self = this;

    if (this._config.animated){
      Util.addClass(this._modalElem, chi.classes.ANIMATED);
      if (this._backdrop) {
        Util.addClass(this._backdrop, chi.classes.ANIMATED);
      }
    }

    this._triggerClickEventListener = function(e) {
      e.preventDefault();
      self.toggle();
    };

    this._closeClickEventListener = function() {
      self.hide();
    };

    this._closeEscapeEventListener = function(evt) {
      evt = evt || window.event;
      let isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === 'Escape' || evt.key === 'Esc' || evt.key === ESCAPE_KEYCODE;
      }
      if (isEscape) {
        self.hide();
      }
    };

    this._initDefaultEventListeners();
  }

  _initDefaultEventListeners () {

    let self = this;

    Array.prototype.forEach.call(this._closeButtons, function(value) {
        value.addEventListener('click', self._closeClickEventListener);
    });

    this._addEventHandler(
      this._elem, 'click', this._triggerClickEventListener
    );

    this._addEventHandler(
      document.body, 'keyup', this._closeEscapeEventListener
    );
  }

  _locateModal() {
    const modalElem = Util.getTarget(this._elem);
    if (!modalElem) {
      throw new Error ("Could not find modal content for modal trigger. ");
    }
    return modalElem;
  }

  _locateCloseButtons() {
    const closeButtons = this._modalElem.querySelectorAll(CLOSE_TRIGGER_SELECTOR);
    if (closeButtons) {
      return closeButtons;
    } else {
      return null;
    }
  }

  _locateBackdrop() {
    const parent = this._modalElem.parentNode;
    if (Util.hasClass(parent, 'a-backdrop')) {
      return parent;
    } else {
      return null;
    }
  }

  show() {
    Util.addClass(document.body, DISABLE_SCROLL);
    if (!this._shown) {
      if (this._transitioning) {
        Util.stopThreeStepsAnimation(this._currentThreeStepsAnimation, false);
      }
      this._transitioning = true;
      const self = this;
      if (this._config.animated){
        this._currentThreeStepsAnimation = Util.threeStepsAnimation(
          function () {
            Util.addClass(self._modalElem, chi.classes.TRANSITIONING);
            if (self._backdrop) {
              Util.addClass(self._backdrop, chi.classes.TRANSITIONING);
            }
          },
          function(){
            Util.addClass(self._modalElem, chi.classes.ACTIVE);
            Util.addClass(self._elem, chi.classes.ACTIVE);
            if (self._backdrop) {
              Util.removeClass(self._backdrop, chi.classes.CLOSED);
            }
            self._shown = true;
            self._modalElem.dispatchEvent(
              Util.createEvent(EVENTS.show)
            );
          },
          function() {
            Util.removeClass(self._modalElem, chi.classes.TRANSITIONING);
            if (self._backdrop) {
              Util.removeClass(self._backdrop, chi.classes.TRANSITIONING);
            }
            self._transitioning = false;
          },
          ANIMATION_DURATION
        );
      } else {
        Util.addClass(self._modalElem, chi.classes.ACTIVE);
        Util.addClass(self._elem, chi.classes.ACTIVE);
        if (self._backdrop) { Util.removeClass(self._backdrop, chi.classes.CLOSED); }
        self._transitioning = false;
        self._shown = true;
        self._modalElem.dispatchEvent(
          Util.createEvent(EVENTS.show)
        );
      }
    }
  }

  hide() {
    Util.removeClass(document.body, DISABLE_SCROLL);
    if (this._shown) {
      if (this._transitioning) {
        Util.stopThreeStepsAnimation(this._currentThreeStepsAnimation, false);
      }
      this._transitioning = true;
      const self = this;
      if (this._config.animated){
        this._currentThreeStepsAnimation = Util.threeStepsAnimation(
          function() {
            Util.addClass(self._modalElem, chi.classes.TRANSITIONING);
            if (self._backdrop) {
              Util.addClass(self._backdrop, chi.classes.TRANSITIONING);
            }
          },
          function(){
            Util.removeClass(self._modalElem, chi.classes.ACTIVE);
            Util.removeClass(self._elem, chi.classes.ACTIVE);
            if (self._backdrop) {
              Util.addClass(self._backdrop, chi.classes.CLOSED);
            }
            self._shown = false;
            self._modalElem.dispatchEvent(
              Util.createEvent(EVENTS.hide)
            );
          },
          function() {
            Util.removeClass(self._modalElem, chi.classes.TRANSITIONING);
            if (self._backdrop) {
              Util.removeClass(self._backdrop, chi.classes.TRANSITIONING);
            }
            self._transitioning = false;
          },
          ANIMATION_DURATION
        );
      } else {
        Util.removeClass(self._modalElem, chi.classes.ACTIVE);
        Util.removeClass(self._elem, chi.classes.ACTIVE);
        if (self._backdrop) { Util.addClass(self._backdrop, chi.classes.CLOSED); }
        self._transitioning = false;
        self._shown = false;
        self._modalElem.dispatchEvent(
          Util.createEvent(EVENTS.hide)
        );
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
    this._removeEventHandlers();
    this._config = null;
    this._modalElem = null;
    this._shown = null;
    this._transitioning = null;
    this._closeButtons = null;
    this._currentThreeStepsAnimation = null;
    this._elem = null;
  }

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(Modal);
export {Modal, factory, EVENTS};

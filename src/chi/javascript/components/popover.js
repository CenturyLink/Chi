import {Util} from "../core/util.js";
import {Component} from "../core/component";
import Popper from 'popper.js';
import {chi} from "../core/chi";

const COMPONENT_SELECTOR = '[data-popover-content]';
const COMPONENT_TYPE = "popover";
const CLASS_POPOVER = 'm-popover';
const TRANSITION_DURATION = 200;
const EVENTS = {
  SHOW: 'chi.popover.show',
  HIDE: 'chi.popover.hide'
};
const DEFAULT_CONFIG = {
  animate: true,
  arrow: true,
  classes: [],
  content: null,
  delayBetweenInteractions: 50,
  parent: null,
  position: 'top',
  trigger: 'click',
  preventAutoHide: false
};

class Popover extends Component{

  constructor (elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));

    this._popoverElem = null;
    this._popper = null;
    this._popperData = null;
    this._preAnimationTransformStyle = null;
    this._postAnimationTransformStyle = null;
    this._shown = false;
    this._config.parent = this._config.parent || this._elem;
    this._config.position = config && config.position ||
      this._elem && this._elem.dataset && this._elem.dataset.position ||
      this._config.parent && this._config.parent.dataset && this._config.parent.dataset.position ||
      this._config.position;

    this._configurePopover();
    this._initDefaultEventListeners();
  }

  _initDefaultEventListeners () {

    let self = this;

    this._mouseClickOnPopover = function () {
      self._closeOnClickOnDocument = false;
    };

    this._addEventHandler(
      this._popoverElem, 'click', this._mouseClickOnPopover
    );

    if (!this._config.preventAutoHide) {

      this._mouseClickOnDocument = function () {
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

    if(this._config.trigger === 'click') {
      this._mouseClickEventHandler = function () {
        self._closeOnClickOnDocument = false;
        self.toggle();
      };

      this._addEventHandler(
        this._elem, 'click', this._mouseClickEventHandler
      );
    }
  }

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }

  show(force) {
    if (this._shown || !this.allowConsecutiveActions() && !force) {
      return;
    }

    this._shown = true;
    this._elem.dispatchEvent(Util.createEvent(EVENTS.SHOW));

    if (!this._config.animate) {
      Util.addClass(this._popoverElem, chi.classes.ACTIVE);
      this._popoverElem.setAttribute('aria-hidden', 'false');
      return;
    }

    const self = this;
    const transition = this._popoverElem.style.transition;
    self._popoverElem.style.transition = 'none';
    Util.addClass(self._popoverElem, chi.classes.TRANSITIONING);
    //Because this popper method is asynchronous, cannot be done in step 1 of
    // animation, as it will be executed between step 1 and step 2.
    self.resetPosition();

    Util.threeStepsAnimation(
      function(){
        self._popoverElem.style.transform = self._preAnimationTransformStyle;
      },
      function(){
        Util.addClass(self._popoverElem, chi.classes.ACTIVE);
        self._popoverElem.style.transition = transition;
        self._popoverElem.style.transform = self._postAnimationTransformStyle;
      },
      function(){
        Util.removeClass(self._popoverElem, chi.classes.TRANSITIONING);
        self._popoverElem.setAttribute('aria-hidden', 'false');
      }, TRANSITION_DURATION
    );
  }

  hide(force) {
    if (!this._shown || !this.allowConsecutiveActions() && !force) {
      return;
    }

    this._shown = false;
    this._elem.dispatchEvent(Util.createEvent(EVENTS.HIDE));

    if (!this._config.animate) {
      Util.removeClass(this._popoverElem, chi.classes.ACTIVE);
      this._popoverElem.setAttribute('aria-hidden', 'true');
      return;
    }

    let self = this;
    Util.threeStepsAnimation(
      function(){
        Util.addClass(self._popoverElem, chi.classes.TRANSITIONING);
      },
      function(){
        self._popoverElem.style.transform = self._preAnimationTransformStyle;
        Util.removeClass(self._popoverElem, chi.classes.ACTIVE);
      },
      function(){
        Util.removeClass(self._popoverElem, chi.classes.TRANSITIONING);
        self._popoverElem.setAttribute('aria-hidden', 'true');
      }, TRANSITION_DURATION
    );
  }

  allowConsecutiveActions () {
    const now = new Date();
    const nowInMillis = now.getTime();
    if (!this.lastActioned) {
      this.lastActioned = nowInMillis;
      return true;
    } else if (nowInMillis - this.lastActioned > this._config.delayBetweenInteractions) {this.lastActioned = nowInMillis;
      return true;
    } else {
      return false;
    }
  }

  toggle(){
    if (this._shown) {
      this.hide();
    } else {
      this.show();
    }
  }

  resetPosition() {
    this._popper.update();
  }

  _configurePopover () {
    this._configurePopoverElement();
    this._configurePopoverClasses();
    this._configurePopoverContent();
    this._configurePopoverIdAria();
    this._configurePopoverPopper();
  }

  _configurePopoverElement() {
    const target = this._elem.dataset && this._elem.dataset.target ||
      this._config.target;

    if (target) {
      if (target instanceof Element) {
        this._popoverElem = target;
      } else {
        this._popoverElem = document.querySelector(target);
      }
    } else {
      this._popoverElem = document.createElement('div');
      this._config.parent.parentNode.appendChild(this._popoverElem);
    }
  }

  _configurePopoverClasses() {
    const self = this;
    Util.addClass(this._popoverElem, CLASS_POPOVER);
    this._config.classes.forEach(function (className) {
      Util.addClass(self._popoverElem, className);
    });

    if (!this._config.arrow) {
      Util.addClass(self._popoverElem, '-no-arrow');
    }

    if (this._config.animate) {
      Util.addClass(this._popoverElem, chi.classes.ANIMATED);
    }
  }

  _configurePopoverContent() {
    const content = this._config.content ||
      this._elem.dataset.popoverContent;
    if (content) {
      this.setContent(content);
    }
    if (this._config.arrow) {
      const arrow = document.createElement('div');
      arrow.className = 'm-popover__arrow';
      this._popoverElem.appendChild(arrow);
    }
  }

  _configurePopoverIdAria() {
    this._popoverElem.id =
      this._popoverElem.id ||
      'chi-' + COMPONENT_TYPE + '-' + this.componentCounterNo;
    this._config.parent.setAttribute('aria-describedby', this._popoverElem.id);
    this._popoverElem.setAttribute('aria-hidden', 'true');
  }

  _configurePopoverPopper() {
    const self = this;
    this._savePopperData = function (data) {
      self._popperData = data;
      self._preAnimationTransformStyle = null;
      self._postAnimationTransformStyle = data.styles.transform;
      if (data.placement.indexOf("top") === 0) {
        self._preAnimationTransformStyle =
          `translate3d(${data.popper.left}px, ${data.popper.top + 20}px, 0px)`;
      } else if (data.placement.indexOf("right") === 0) {
        self._preAnimationTransformStyle =
          `translate3d(${data.popper.left - 20}px, ${data.popper.top}px, 0px)`;
      } else if (data.placement.indexOf("bottom") === 0) {
        self._preAnimationTransformStyle =
          `translate3d(${data.popper.left}px, ${data.popper.top - 20}px, 0px)`;
      } else if (data.placement.indexOf("left") === 0) {
        self._preAnimationTransformStyle =
          `translate3d(${data.popper.left + 20}px, ${data.popper.top}px, 0px)`;
      } else {
        self._preAnimationTransformStyle = data.styles.transform;
      }
      return data;
    };

    this._popper = new Popper(this._config.parent, this._popoverElem, {
      modifiers: {
        applyStyle: {enabled: true},
        applyChiStyle: {
          enabled: true,
          fn: this._savePopperData,
          // Set order to run after popper applyStyle modifier
          // as we need data.styles to be filled.
          order: 875
        },
        arrow: {
          element: '.m-popover__arrow',
          enabled: this._config.arrow
        }
      },
      removeOnDestroy: true,
      placement: this._config.position
    });
  }

  setContent (content) {
    Util.empty(this._popoverElem);
    if (content instanceof Element) {
      this._popoverElem.appendChild(content);
    } else {
      this._popoverElem.innerHTML = content;
    }
  }

  dispose() {
    this._removeEventHandlers();
    this._popoverElem = null;
    this._popper.destroy();
    this._config = null;
    this._popperData = null;
    this._preAnimationTransformStyle = null;
    this._postAnimationTransformStyle = null;

    this._mouseClickOnDocument = null;
    this._mouseClickOnPopover = null;
    this._mouseClickEventHandler = null;

    this._elem = null;
  }
}

const factory = Component.factory.bind(Popover);
export {Popover, factory};

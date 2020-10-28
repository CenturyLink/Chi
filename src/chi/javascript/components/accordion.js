import { Component } from '../core/component';
import { chi } from '../core/chi';
import { Util } from '../core/util.js';

const COMPONENT_TYPE = 'accordion';
const COMPONENT_CLASS = 'chi-accordion';
const TRIGGER_CLASS = 'chi-accordion__trigger';
const CONTENT_CLASS = 'chi-accordion__content';
const CHILD_ACCORDION_CLASS = 'chi-accordion__child';
const DEFAULT_CONFIG = {};
const EVENTS = {
  SHOW: 'chi.accordion.show',
  HIDE: 'chi.accordion.hide'
};
const EXPAND_ANIMATION_DURATION = 200;

class Accordion extends Component {
  constructor(elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));

    this._trigger = elem.querySelector(`.${TRIGGER_CLASS}`);
    this._content = elem.querySelector(`.${CONTENT_CLASS}`);
    this._expanded = Util.hasClass(elem, chi.classes.EXPANDED);
    this._childAccordions = [];

    this._initAccordion();
    this._initInnerAccordions();
  }

  _initAccordion() {
    this._addEventHandler(this._trigger, 'click', () => {
      this.toggle();
    });
  }

  _resizeParentAccordions(elem, action) {
    const resizedAccordionContent = elem.querySelector(`.${CONTENT_CLASS}`);
    const resizedAccordionContentHeight = parseInt(Util.calculateHiddenElementHeight(resizedAccordionContent));

    for (let current = elem.parentNode;
      current && current.nodeName !== 'BODY';
      current = current.parentNode) {
        if (current.classList.contains(COMPONENT_CLASS)) {
          const content = current.querySelector(`.${CONTENT_CLASS}`);
          const contentHeight = parseInt(content.style.height);
          let newHeight;

          if (action === 'show') {
            newHeight = contentHeight + resizedAccordionContentHeight;
          } else if (action === 'hide') {
            newHeight = contentHeight - resizedAccordionContentHeight;
          }

          content.style.height = `${newHeight}px`;
      }
      if (current.classList.contains(COMPONENT_CLASS) &&
        !current.classList.contains(CHILD_ACCORDION_CLASS)) {
          break;
      }
    }
  }

  _initInnerAccordions() {
    const childAccordions = this._content.getElementsByClassName(COMPONENT_CLASS);

    if (childAccordions) {
      Array.prototype.forEach.call(
        childAccordions,
        elem => {
          const trigger = elem.querySelector(`.${TRIGGER_CLASS}`);
          const content = elem.querySelector(`.${CONTENT_CLASS}`);
  
          if (trigger && content) {
            const newAccordion = Accordion.factory(elem, DEFAULT_CONFIG);
  
            this._childAccordions.push(newAccordion);
            Util.addClass(elem, CHILD_ACCORDION_CLASS);
          }
        }
      );
    }
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  show() {
    const contentElem = this._content;
    let contentHeight = Util.calculateHiddenElementHeight(contentElem);

    if (!this._expanded) {
      this._resizeParentAccordions(this._elem, 'show');
      this._elem.dispatchEvent(
        Util.createEvent(EVENTS.SHOW)
      );

      Util.threeStepsAnimation(
        () => {
          Util.addClass(contentElem, chi.classes.TRANSITIONING);
          contentElem.style.height = '0px';
          contentElem.style.opacity = '0.5';
        }, () => {
          Util.addClass(this._elem, chi.classes.EXPANDED);
          contentElem.style.height = contentHeight;
          contentElem.style.opacity = '1';
        }, () => {
          Util.removeClass(contentElem, chi.classes.TRANSITIONING);
          contentElem.style.removeProperty('height');
        }, EXPAND_ANIMATION_DURATION
      );

      this._expanded = true;
    }
  }

  hide() {
    const contentElem = this._content;
    let contentHeight = Util.calculateHiddenElementHeight(contentElem);

    if (this._expanded) {
      this._resizeParentAccordions(this._elem, 'hide');
      this._elem.dispatchEvent(
        Util.createEvent(EVENTS.HIDE)
      );
      Util.threeStepsAnimation(
        () => {
          Util.checkAddClass(contentElem, chi.classes.TRANSITIONING);
          contentElem.style.opacity = '1';
          contentElem.style.height = contentHeight;
        }, () => {
          contentElem.style.height = '0px';
          contentElem.style.opacity = '0.5';
          Util.checkRemoveClass(this._elem, chi.classes.EXPANDED);
        }, () => {
          contentElem.style.removeProperty('height');
          contentElem.style.removeProperty('opacity');
          Util.checkRemoveClass(contentElem, chi.classes.TRANSITIONING);
        }, EXPAND_ANIMATION_DURATION
      );

      this._expanded = false;
    }
  }

  toggle () {
    if (this._expanded) {
      this.hide();
    } else {
      this.show();
    }
  }

  dispose() {
    this._trigger = null;
    this._content = null;
    this._expanded = null;
    this._removeEventHandlers();
  }
}

const factory = Component.factory.bind(Accordion);
export { Accordion, factory };

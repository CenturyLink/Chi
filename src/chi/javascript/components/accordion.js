import { Component } from '../core/component';
import { chi } from '../core/chi';
import { Util } from '../core/util.js';

const COMPONENT_TYPE = 'accordion';
const COMPONENT_CLASS = 'chi-accordion';
const TRIGGER_CLASS = 'chi-accordion__trigger';
const CONTENT_CLASS = 'chi-accordion__content';
const DEFAULT_CONFIG = {};
const EVENTS = {
  SHOW: 'chi.accordion.show',
  HIDE: 'chi.accordion.hide'
};

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

  _resizeParentAccordions(e, action) {
    const resizedAccordionContent = e.querySelector(`.${CONTENT_CLASS}`);
    const resizedAccordionContentHeight = parseInt(Util.calculateHiddenElementHeight(resizedAccordionContent));

    for (let cur = e.parentNode;
      cur && cur.nodeName !== 'BODY';
      cur = cur.parentNode) {
        if (cur.classList.contains(COMPONENT_CLASS)) {
          const content = cur.querySelector(`.${CONTENT_CLASS}`);
          const contentHeight = parseInt(content.style.height);
          let newHeight;

          if (action === 'show') {
            newHeight = contentHeight + resizedAccordionContentHeight;
          } else if (action === 'hide') {
            newHeight = contentHeight - resizedAccordionContentHeight;
          }

          content.style.height = `${newHeight}px`;
      }
    }
  }

  _initInnerAccordions() {
    const self = this;
    const childAccordions = self._content.getElementsByClassName(COMPONENT_CLASS);

    if (childAccordions) {
      Array.prototype.forEach.call(
        childAccordions,
        elem => {
          const trigger = elem.querySelector(`.${TRIGGER_CLASS}`);
          const content = elem.querySelector(`.${CONTENT_CLASS}`);
  
          if (trigger && content) {
            const newAccordion = Accordion.factory(elem, DEFAULT_CONFIG);
  
            this._childAccordions.push(newAccordion);
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
        }, () => {
          Util.addClass(this._elem, chi.classes.EXPANDED);
          contentElem.style.height = contentHeight;
        }, () => {
          Util.removeClass(contentElem, chi.classes.TRANSITIONING);
        }, 75
      );

      this._expanded = true;
    }
  }

  hide() {
    const contentElem = this._content;

    if (this._expanded) {
      this._resizeParentAccordions(this._elem, 'hide');
      this._elem.dispatchEvent(
        Util.createEvent(EVENTS.HIDE)
      );
      Util.threeStepsAnimation(
        () => {
          Util.checkAddClass(contentElem, chi.classes.TRANSITIONING);
        }, () => {
          contentElem.style.removeProperty('height');
          Util.checkRemoveClass(this._elem, chi.classes.EXPANDED);
        }, () => {
          Util.checkRemoveClass(contentElem, chi.classes.TRANSITIONING);
        }, 75
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

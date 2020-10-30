import { Component } from '../core/component';
import { chi } from '../core/chi';
import { Util } from '../core/util.js';

const COMPONENT_TYPE = 'accordion';
const COMPONENT_CLASS = 'chi-accordion';
const COMPONENT_ITEM_CLASS = 'chi-accordion__item';
const TRIGGER_CLASS = 'chi-accordion__trigger';
const CONTENT_CLASS = 'chi-accordion__content';
const CHILD_ACCORDION_CLASS = 'chi-accordion__child';
const DEFAULT_CONFIG = {};
const EVENTS = {
  SHOW: 'chi.accordion.show',
  HIDE: 'chi.accordion.hide'
};
const EXPAND_ANIMATION_DURATION = 75;

class Accordion extends Component {
  constructor(elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));

    this._item = elem.querySelector(`.${COMPONENT_ITEM_CLASS}`);
    this._trigger = elem.querySelector(`.${TRIGGER_CLASS}`);
    this._triggers = elem.querySelectorAll(`.${TRIGGER_CLASS}`);
    this._expanded = Util.hasClass(elem, chi.classes.EXPANDED);
    this._childAccordions = [];
    this._accordionAnimation = null;

    this._initAccordion();
  }

  _initAccordion() {
    const self = this;

    Array.prototype.forEach.call(
      this._triggers,
      function(trigger) {
        self._addEventHandler(trigger, 'click', () => {
          let accortionItem;
          for (let current = trigger; current && !current.classList.contains(COMPONENT_ITEM_CLASS); current = current.parentNode) {
            if (current.parentNode.classList.contains(COMPONENT_ITEM_CLASS)) {
              accortionItem = current.parentNode;
            }
          }
          self.toggle(accortionItem);
        });
      }
    );
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
      if (current.classList.contains(COMPONENT_CLASS)) {
          break;
      }
    }
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  show(accordionItem) {
    const contentElem = accordionItem.querySelector(`.${CONTENT_CLASS}`);
    let contentHeight = Util.calculateHiddenElementHeight(contentElem);

    if (!accordionItem.classList.contains(chi.classes.EXPANDED)) {
      this._resizeParentAccordions(accordionItem, 'show');
      accordionItem.dispatchEvent(
        Util.createEvent(EVENTS.SHOW)
      );

      Util.threeStepsAnimation(
        () => {
          Util.addClass(contentElem, chi.classes.TRANSITIONING);
          contentElem.style.height = '0px';
          contentElem.style.opacity = '0.5';
        }, () => {
          Util.addClass(accordionItem, chi.classes.EXPANDED);
          contentElem.style.height = contentHeight;
          contentElem.style.opacity = '1';
        }, () => {
          Util.removeClass(contentElem, chi.classes.TRANSITIONING);
          contentElem.style.removeProperty('height');
          contentElem.style.removeProperty('opacity');
        }, EXPAND_ANIMATION_DURATION
      );
    }
  }

  hide(accordionItem) {
    const contentElem = accordionItem.querySelector(`.${CONTENT_CLASS}`);
    let contentHeight = Util.calculateHiddenElementHeight(contentElem);

    if (accordionItem.classList.contains(chi.classes.EXPANDED)) {
      this._resizeParentAccordions(accordionItem, 'hide');
      accordionItem.dispatchEvent(
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
          Util.checkRemoveClass(accordionItem, chi.classes.EXPANDED);
        }, () => {
          contentElem.style.removeProperty('height');
          contentElem.style.removeProperty('opacity');
          Util.checkRemoveClass(contentElem, chi.classes.TRANSITIONING);
        }, EXPAND_ANIMATION_DURATION
      );
    }
  }

  toggle (accordionItem) {
    let accordionToToggle;

    if (accordionItem) {
      accordionToToggle = accordionItem;
    } else {
      accordionToToggle = this._item;
    }

    if (accordionToToggle.classList.contains(chi.classes.EXPANDED)) {
      this.hide(accordionToToggle);
    } else {
      this.show(accordionToToggle);
    }
  }

  expandAll() {
    const self = this;

    Array.prototype.forEach.call(
      this._triggers,
      function(trigger) {
        let accortionItem;

        for (let current = trigger; current && !current.classList.contains(COMPONENT_ITEM_CLASS); current = current.parentNode) {
          if (current.parentNode.classList.contains(COMPONENT_ITEM_CLASS)) {
            accortionItem = current.parentNode;
          }
        }

        self.show(accortionItem);
      }
    );
  }

  collapseAll() {
    const self = this;

    Array.prototype.forEach.call(
      this._triggers,
      function(trigger) {
        let accortionItem;

        for (let current = trigger; current && !current.classList.contains(COMPONENT_ITEM_CLASS); current = current.parentNode) {
          if (current.parentNode.classList.contains(COMPONENT_ITEM_CLASS)) {
            accortionItem = current.parentNode;
          }
        }

        self.hide(accortionItem);
      }
    );
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

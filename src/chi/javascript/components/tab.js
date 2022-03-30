import {chi} from "../core/chi";
import {Component} from "../core/component";
import {SlidingBorder, ANIMATION_DURATION as BORDER_ANIMATION_DURATION} from "./auxiliary/sliding-border";
import {Util} from "../core/util.js";

const CLASS_ACTIVE = "-active";
const CLASS_HAS_ACTIVE = "-has-active";
const CLASS_ANIMATED = "-animated";
const CLASS_RESPONSIVE = "-responsive";
const CLASS_VERTICAL = "-vertical";
const COMPONENT_SELECTOR = '.chi-tabs';
const COMPONENT_TYPE = "tab";
const SUBTAB_SELECTORS = 'ul.chi-tabs__subtabs';
const TABS_PANEL_CLASS = "chi-tabs-panel";

const DEFAULT_CONFIG = {
  animated: true,
  waitForAnimations: true
};

const keys = {
  tab: 9,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46
};

class Tab extends Component {
  constructor (elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
    let self = this;
    this._slidingBorder = null;

    this._clickEventHandler = function(e) {
      self.clickEventHandler(e);
    };

    this._elem.addEventListener('click', this._clickEventHandler);
    this._tabs = this._elem.querySelectorAll(`li`);
    this._tabAnchor = this._elem.querySelectorAll(`li a`);

    if (this._config.animated) {
      Util.addClass(this._elem, CLASS_ANIMATED);

      this._slidingBorder = new SlidingBorder(
        this._elem,
        this.isVertical(),
        'li');
    }
    Array.prototype.forEach.call(
      this._tabs,
      (tab, index) => {
        tab.addEventListener('keyup', (e) => this.keyupEventListener(e, index));
      }
    );
  }

  keyupEventListener(event, index) {
    const key = event.keyCode;
    const vertical = this._elem.classList.contains(CLASS_VERTICAL);
    const activeTabIndex = [].slice.call(this._tabs).indexOf(this.getActiveTab());

    event.preventDefault();
    event.stopPropagation();

    const focusAnchor = (element) => {
      element.querySelector('a').focus();
    };

    const previousTab = () => {
      let tabToActivate;

      if (index === 0) {
        tabToActivate = this._tabs[this._tabs.length - 1];
      } else {
        tabToActivate = this._tabs[activeTabIndex - 1];
      }

      if (!tabToActivate.classList.contains(chi.classes.DISABLED)) {
        this.showTab(tabToActivate);
        focusAnchor(tabToActivate);
      }
    };

    const nextTab = () => {
      let tabToActivate;

      if (activeTabIndex === this._tabs.length - 1) {
        tabToActivate = this._tabs[0];
      } else {
        tabToActivate = this._tabs[activeTabIndex + 1];
      }

      if (!tabToActivate.classList.contains(chi.classes.DISABLED)) {
        this.showTab(tabToActivate);
        focusAnchor(tabToActivate);
      }
    };

    if ((vertical && key === keys.up) ||
      (!vertical && key === keys.left)) {
      previousTab();
    } else if ((vertical && key === keys.down) ||
      (!vertical && key === keys.right)) {
      nextTab();
    }

    return;
  }

  getActiveTab () {
    return this._elem.querySelector(
      COMPONENT_SELECTOR + ' > .' + CLASS_ACTIVE +
      ':NOT(.' + CLASS_HAS_ACTIVE + '), ' +
      SUBTAB_SELECTORS + ' > .' + CLASS_ACTIVE +
      ':NOT(.' + CLASS_HAS_ACTIVE + ')'
    );
  }

  getAssociatedTabPanel (tab) {
    if (!tab.hasChildNodes()) {
      return null;
    }
    for (let i = 0 ; i < tab.childNodes.length ; i++) {
      if (tab.childNodes[i].nodeName === 'A') {
        const target = Util.getTarget(tab.childNodes[i]);
        if (target && Util.hasClass(target, TABS_PANEL_CLASS)) {
          return target;
        }
      }
    }
  }

  showTabPanel (tab) {
    let tabPanel = this.getAssociatedTabPanel(tab);
    if (tabPanel) {
      Util.addClass(tabPanel, CLASS_ACTIVE);
    }
  }

  hideTabPanel (tab) {
    let tabPanel = this.getAssociatedTabPanel(tab);
    if (tabPanel) {
      Util.removeClass(tabPanel, CLASS_ACTIVE);
    }
  }

  isVertical () {

    let isVertical = Util.hasClass(this._elem, CLASS_VERTICAL) ||
      Util.hasClass(this._elem, CLASS_RESPONSIVE) &&
      Util.getMediaWidth() < chi.responsiveBreakpoints.md
    ;

    if (this._slidingBorder) {
      const newValue = isVertical;
      if (newValue !== this.previousVerticalValue) {
        this.previousVerticalValue = newValue;
        this._slidingBorder.setVertical(newValue);
      }
      return newValue;
    } else {
      return isVertical;
    }
  }

  showTab (tab, parentTab) {
    const self = this;
    const currentlyActiveTab = this.getActiveTab();
    if (tab === currentlyActiveTab) {
      return;
    }

    if (this._config.animated) {
      if (currentlyActiveTab) {
        this._slidingBorder.hide();
        this._slidingBorder.moveSlidingBorderToChild(
          this._getElementToMoveTo(currentlyActiveTab)
        );
      }
      this._slidingBorder.show();
    }

    const currentlyActiveParentTab = this._elem.querySelector(
      COMPONENT_SELECTOR + ' > .' + CLASS_ACTIVE + '.' + CLASS_HAS_ACTIVE
    );

    this._handleActiveClassOnTabs(tab, parentTab, currentlyActiveTab, currentlyActiveParentTab);

    if (currentlyActiveTab) {
      self.hideTabPanel(currentlyActiveTab);
    }
    self.showTabPanel(tab);

    if (this._config.animated) {
      if (parentTab && !this.isVertical()) {
        this._slidingBorder.moveSlidingBorderToChild(
          this._getElementToMoveTo(parentTab)
        );
      } else {
        this._slidingBorder.moveSlidingBorderToChild(
          this._getElementToMoveTo(tab)
        );
      }
    }

  Array.prototype.forEach.call(
    this._tabAnchor,
    (anchor) => {
      if (tab.contains(anchor)) {
        anchor.setAttribute('aria-selected', true);
        if (anchor.getAttribute('tabindex')) {
          anchor.removeAttribute('tabindex');
        }
      } else {
        anchor.setAttribute('aria-selected', false);
        anchor.setAttribute('tabindex', '-1');
      }
    });
  }

  _handleActiveClassOnTabs (newTab, newParentTab, oldTab, oldParentTab) {
    if (newTab === oldTab) {
      return;
    }
    if (oldTab && oldTab !== newParentTab) {
      Util.removeClass(oldTab, CLASS_ACTIVE);
    }
    if (oldParentTab) {
      Util.removeClass(oldParentTab, CLASS_HAS_ACTIVE);
      if (oldParentTab !== newTab) {
        Util.removeClass(oldParentTab, CLASS_ACTIVE);
      }
    }
    if (newParentTab) {
      Util.addClass(newParentTab, CLASS_HAS_ACTIVE);
      Util.addClass(newParentTab, CLASS_ACTIVE);
    }
    Util.addClass(newTab, CLASS_ACTIVE);
  }

  hideTabs () {
    const self = this;
    Array.prototype.forEach.call(
      this._elem.getElementsByTagName('LI'),
      function (tabElement) {
        Util.removeClass(tabElement, CLASS_ACTIVE);
        self.hideTabPanel(tabElement);
      }
    );

    if (this._config.animated) {
      this.moveSlidingBorderToTab();
    }
  }

  _isLinkATabActivator (anchorElem) {
    return Util.getTarget(anchorElem) ? true : false;
  }

  _clickedOnAnchor (anchorElem, event) {
    if (this._isLinkATabActivator(anchorElem)) {
      event.preventDefault();
    } else {
      if (this._config.animated && this._config.waitForAnimations) {
        event.preventDefault();
        window.setTimeout(
          function(){
            window.location.href = anchorElem.getAttribute('href');
          },
          BORDER_ANIMATION_DURATION
        );
      }
    }
  }

  clickEventHandler (e) {
    let tab, parentTab;

    for (let cur = e.target; cur && cur !== this._elem; cur = cur.parentNode) {
      if (cur.nodeName === 'A') {
        this._clickedOnAnchor(cur, e);
      } else if (
        cur.nodeName === 'LI'
      ) {
        if (tab) {
          parentTab = cur;
        } else {
          tab = cur;
        }
      }
    }
    if (tab) {
      this.showTab(tab, parentTab);
    }
  }

  _getElementToMoveTo (tab) {
    if (!tab) {
      return tab;
    }
    let found = false;
    let child = null;
    for (let i = 0 ; i < tab.childNodes.length && !found; i++) {
      if (tab.childNodes[i].nodeName === 'A') {
        child = tab.childNodes[i];
        found = true;
      } else if (tab.childNodes[i].nodeName !== 'UL') {
        child = tab.childNodes[i];
      }
    }
    return child || tab;
  }

  moveSlidingBorderToTab(tab) {
    const elementToMoveTo = this._getElementToMoveTo(tab);
    this._slidingBorder.moveSlidingBorderToChild(elementToMoveTo);
  }

  dispose () {
    this._config = null;
    this._elem && this._elem.removeEventListener('click', this._clickEventHandler);
    this._clickEventHandler = null;
    this._elem = null;
    if (this._slidingBorder) {
      this._slidingBorder.dispose();
      this.previousVerticalValue = null;
    }
  }

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(Tab);
export {Tab, factory, COMPONENT_TYPE, CLASS_ACTIVE, CLASS_HAS_ACTIVE};

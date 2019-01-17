import {CLASS_ACTIVE as TAB_CLASS_ACTIVE, CLASS_HAS_ACTIVE, COMPONENT_TYPE as TAB_COMPONENT_TYPE, Tab} from "../tab";
import {Util} from "../..";
import {
  CLASS_ACTIVE as DROPDOWN_CLASS_ACTIVE,
  CLASS_COMPONENT as DROPDOWN_CLASS_COMPONENT,
  CLASS_DROPDOWN,
  CLASS_DROPDOWN_ITEM
} from "../dropdown";

class NavigationTab extends Tab {

  constructor (elem, config) {
    super(elem, config);
    this._navigationComponent = config.navigationComponent;
    this.resetSlidingBorder();
  }

  resetSlidingBorder() {
    const deepestActiveMenuItem = this.getDeepestActiveMenuItem();
    const activeTab = this.getActiveTab();
    if (deepestActiveMenuItem) {
      this._slidingBorder.moveSlidingBorderToChild(deepestActiveMenuItem);
    } else if (activeTab) {
      this._slidingBorder.moveSlidingBorderToChild(activeTab.childNodes[0]);
    }
  }

  clickEventHandler(e) {

    let ddTrigger = null;
    let ddMenuItem = null;
    let tab = null;
    let tabLink = null;
    let moveSlidingTo = null;

    for (
      let elem = e.target ;
      elem && elem !== this._elem;
      elem = elem.parentNode
    ) {
      if (Util.hasClass(elem, DROPDOWN_CLASS_COMPONENT)) {
        ddTrigger = elem;
      } else if (Util.hasClass(elem, CLASS_DROPDOWN_ITEM)) {
        ddMenuItem = ddMenuItem || elem;
      } else if (elem.nodeName === 'A' && elem.parentNode.nodeName === 'LI') {
        tabLink = elem;
      } else if (elem.nodeName === 'LI') {
        tab = elem;
      }
    }

    if (!ddTrigger) {
      this._slidingBorder.moveToLastChild();
      this._slidingBorder.show();
      moveSlidingTo = tabLink || tab.childNodes[0] || tab;

      if (this.getActiveTab() !== tab) {
        this._handleActiveClassOnTabs(tab, null, this.getActiveTab(), null);
      }

      if (tabLink) {
        this._navigationComponent.manageClickOnCommonLinks(e);
      } else if (ddMenuItem && this.isVertical()) {
        moveSlidingTo = ddMenuItem;
      }
      this._slidingBorder.moveSlidingBorderToChild(moveSlidingTo);
      this.manageActiveClass(moveSlidingTo);
    }
  }

  manageActiveClass (clickedElem) {
    const shouldHaveHasActiveClass = [];
    const shouldHaveActiveClass = [clickedElem];

    for (
      let elem = clickedElem.parentNode ;
      elem && elem !== this._elem ;
      elem = elem.parentNode
    ) {

      if (elem.nodeName === 'LI') {
        shouldHaveActiveClass.push(elem);
        if (clickedElem.parentNode !== elem) {
          shouldHaveHasActiveClass.push(elem);
        }
      }
      if (Util.hasClass(elem, CLASS_DROPDOWN)) {
        shouldHaveActiveClass.push(elem);
        const siblings = elem.parentNode.childNodes;
        Array.prototype.forEach.call(siblings, function (sibling) {
          if (
            sibling !== elem &&
            Util.hasClass(sibling, DROPDOWN_CLASS_COMPONENT)
          ) {
            shouldHaveHasActiveClass.push(sibling);
            shouldHaveActiveClass.push(sibling);
          }
        });
      }
    }

    Array.prototype.forEach.call(
      this._elem.querySelectorAll('.' + TAB_CLASS_ACTIVE),
      function (activeElem) {
        if (shouldHaveActiveClass.indexOf(activeElem) < 0) {
          Util.removeClass(activeElem, TAB_CLASS_ACTIVE);
        }
      }
    );
    shouldHaveActiveClass.forEach(function(elem) {
      Util.addClass(elem, TAB_CLASS_ACTIVE);
    });

    Array.prototype.forEach.call(
      this._elem.querySelectorAll('.' + CLASS_HAS_ACTIVE),
      function (hasActiveElem) {
        if (shouldHaveHasActiveClass.indexOf(hasActiveElem) < 0) {
          Util.removeClass(hasActiveElem, CLASS_HAS_ACTIVE);
        }
      }
    );
    shouldHaveHasActiveClass.forEach(function(elem) {
      Util.addClass(elem, CLASS_HAS_ACTIVE);
    });
  }

  getDeepestActiveMenuItem () {
    const activeMenuItems = this._elem.querySelectorAll(
      '.' + CLASS_DROPDOWN_ITEM + '.' + DROPDOWN_CLASS_ACTIVE
    );
    if (activeMenuItems.length) {
      return activeMenuItems[activeMenuItems.length -1];
    }
    return null;
  }

  static factory(elem, config) {
    return Util.cachedComponentFactory(
      elem,
      config,
      TAB_COMPONENT_TYPE,
      function() {
        return new NavigationTab(elem, config);
      }
    );
  }
}

export {NavigationTab, TAB_CLASS_ACTIVE};

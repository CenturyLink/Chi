import {Util} from "../../core/util.js";
import {CLASS_SLIDING_BORDER} from "./sliding-border";
import {NavigationDropdown} from "../navigation";
import {EventManager} from "./event-manager";
import {CLASS_ACTIVE, CLASS_HAS_ACTIVE} from "../tab";

const EVENT = {
  MOVE_TAB_INTO_OVERFLOW_MENU: 'addTabToMenu',
  RELEASE_TAB_FROM_OVERFLOW_MENU: 'removeTabFromMenu'
};

class OverflowMenu {

  constructor (navigation, config) {
    this._config = Util.extend(
      {
        tabComponent: null,
        overflowMenuLabel: 'See more...'
      }, config
    );
    this._navigationComponent = navigation;
    this._elem = navigation._elem;
    this._tabComponent = this._config.tabComponent;
    this._overflowTabWidth = 0;
    this._totalTabElementsWidth = 0;
    this._eventManager = new EventManager();
  }

  _removeAndSaveSlidingBorders () {
    this.slidingBorders = [];
    for (let i = 0 ; i < this._elem.childNodes.length ; i++) {
      if (Util.hasClass(this._elem.childNodes[i], CLASS_SLIDING_BORDER)) {
        this.slidingBorders.push(this._elem.childNodes[i]);
        this._elem.removeChild(this._elem.childNodes[i]);
      }
    }
  }

  _restoreSlidingBorders () {
    this.slidingBorders.forEach(function (slidingBorder) {
      this._elem.appendChild(slidingBorder);
    }.bind(this));
    this.slidingBorders.length = 0;
  }

  _encloseProtrudingTabs() {
    while (
      this._totalTabElementsWidth + this._overflowTabWidth >
      this._tabsContainerWidth &&
      this._elem.childNodes.length > 2
      ) {
      const lastChild = this._elem.childNodes[this._elem.childNodes.length-2];
      const lastChildWidth = Util.calculateExternalWidth(lastChild, true);
      this._totalTabElementsWidth = this._totalTabElementsWidth-lastChildWidth;
      this._moveTabToMoreContainer(lastChild, lastChildWidth);
    }
  }

  _releaseNonProtrudingTabs() {
    while (
      this._overflowTabMenu &&
      this._overflowTabMenu.children.length &&
      this._totalTabElementsWidth +
      Util.getData(this._overflowTabMenu.children[0], 'navigationTabWidth') <=
      this._tabsContainerWidth - this._overflowTabWidth
    ) {
      this._totalTabElementsWidth +=
        Util.getData(this._overflowTabMenu.children[0], 'navigationTabWidth');
      this._moveTabFromMoreContainer(this._overflowTabMenu.children[0]);
    }

    if (
      this._totalTabElementsWidth +
      Array.prototype.reduce.call(
        this._overflowTabMenu.children,
        function(prev, curr) {
          return prev + Util.getData(curr, 'navigationTabWidth');
        },
        0
      ) <= this._tabsContainerWidth
    ) {
      this.resetOverflow();
    } else if (this._overflowTabMenu.children.length === 0) {
      this.resetOverflow();
    }
  }

  manageOverflow () {
    if (this._tabComponent.isVertical()) {
      if (this._overflowTab) {
        this.resetOverflow();
      }
      return;
    }
    this._removeAndSaveSlidingBorders();
    this._tabsContainerWidth = Util.calculateInternalWidth(this._elem, true);
    this._updateTabsWidthInfo();
    if (
      this._totalTabElementsWidth >=
      this._tabsContainerWidth - this._overflowTabWidth
    ) {
      if (!this._overflowTab) {
        this._createOverflowTab();
      }
      this._encloseProtrudingTabs();
    } else if (this._overflowTab) {
      this._releaseNonProtrudingTabs();
    }
    this._restoreSlidingBorders();
  }

  _createOverflowTab () {
    this._overflowTab = document.createElement('LI');
    Util.addClass(this._overflowTab, 'chi-dropdown');
    this._overflowTab.innerHTML =
      '<a href="#" class="chi-dropdown__trigger" data-position="bottom-end"> ' +
      this._config.overflowMenuLabel + '</a>' +
      '<div class="chi-dropdown__menu"></div>';
    this._overflowTabMenu =
      this._overflowTab.getElementsByClassName('chi-dropdown__menu')[0];
    this._overflowTabTrigger =
      this._overflowTab.getElementsByClassName('chi-dropdown__trigger')[0];
    this._overflowTabDropdown = NavigationDropdown.factory(
      this._overflowTabTrigger,
      {
        tabComponent: this._tabComponent,
        navigationComponent: this._navigationComponent
      }
    );

    this._elem.appendChild(this._overflowTab);
    this._overflowTabWidth =
      Util.calculateExternalWidth(this._overflowTab, true);
  }

  _updateTabsWidthInfo () {

    this._totalTabElementsWidth = 0;
    this._overflowTabWidth = 0;

    Array.prototype.forEach.call(this._elem.childNodes, function(tab) {
      if (!this._overflowTab || tab !== this._overflowTab) {
        this._totalTabElementsWidth += Util.calculateExternalWidth(tab, true);
      } else if (this._overflowTab && tab === this._overflowTab) {
        this._overflowTabWidth =
          Util.calculateExternalWidth(this._overflowTab, true);
      }
    }.bind(this));
  }

  _moveTabToMoreContainer (tab, width) {
    tab.parentNode.removeChild(tab);
    const newElem = document.createElement('DIV');
    newElem.className = tab.className;
    Util.setData(newElem, 'navigationTab', tab);
    Util.setData(newElem, 'navigationTabWidth', width);
    while (tab.childNodes.length) {
      const child = tab.childNodes[0];
      if (child.nodeName === 'A') {
        Util.addClass(child, 'chi-dropdown__menu-item');
      }
      if (Util.hasClass(child,'chi-dropdown__trigger')) {
        NavigationDropdown.factory(child).disablePopper();
      }
      newElem.appendChild(child);
    }
    this._overflowTabMenu.prepend(newElem);
    this._eventManager.dispatchEvent(
      EVENT.MOVE_TAB_INTO_OVERFLOW_MENU,
      this,
      newElem,
      this._overflowTab
    );
  }

  _moveTabFromMoreContainer (tab) {
    const oldTab = Util.getData(tab, 'navigationTab');
    Util.removeClass(oldTab, CLASS_ACTIVE);
    Util.removeClass(oldTab, CLASS_HAS_ACTIVE);
    while (tab.childNodes.length) {
      const child = tab.childNodes[0];
      if (child.nodeName === 'A') {
        Util.removeClass(child, 'chi-dropdown__menu-item');
      }
      if (Util.hasClass(child,'chi-dropdown__trigger')) {
        NavigationDropdown.factory(child).enablePopper();
        if (Util.hasClass(child, CLASS_HAS_ACTIVE)) {
          Util.addClass(oldTab, CLASS_ACTIVE);
        }
      } else if (child.nodeName === 'A') {
        if (Util.hasClass(child, CLASS_ACTIVE)) {
          Util.addClass(oldTab, CLASS_ACTIVE);
        }
      }
      oldTab.appendChild(child);
    }
    tab.parentNode.removeChild(tab);
    this._elem.insertBefore(oldTab, this._overflowTab);
    this._eventManager.dispatchEvent(
      EVENT.RELEASE_TAB_FROM_OVERFLOW_MENU,
      this,
      oldTab,
      this._overflowTab
    );
  }

  addEventListener (eventName, listener) {
    this._eventManager.addEventListener(eventName, listener);
  }
  removeEventListener (eventName, listener) {
    this._eventManager.removeEventListener(eventName, listener);
  }

  resetOverflow () {
    while (this._overflowTabMenu && this._overflowTabMenu.children.length) {
      this._moveTabFromMoreContainer(this._overflowTabMenu.children[0]);
    }
    this._overflowTab.parentNode.removeChild(this._overflowTab);
    this._overflowTabDropdown.dispose();
    this._overflowTabDropdown = null;
    this._overflowTab = null;
    this._overflowTabWidth = 0;
  }

  hide () {
    if (this._overflowTabDropdown) {
      this._overflowTabDropdown.hide();
    }
  }

  dispose() {
    if (this._overflowTab) {
      this.resetOverflow();
    }
    this._eventManager.dispose();
  }
}

export {OverflowMenu, EVENT};

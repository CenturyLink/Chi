import {Util} from "./util.js";
import {chi} from "./chi.js";
import {Tab} from "./tab";
import {
  Dropdown,
  CLASS_COMPONENT as DROPDOWN_CLASS_COMPONENT,
  COMPONENT_TYPE as DROPDOWN_COMPONENT_TYPE
} from "./dropdown";

const COMPONENT_TYPE = "navigation";

const calculateExternalWidth = function (elem) {
  const style = window.getComputedStyle(elem);
  return Math.ceil(parseFloat(style.width)) +
    Math.ceil(parseFloat(style.marginLeft)) +
    Math.ceil(parseFloat(style.marginRight));
};
const calculateInternalWidth = function (elem) {
  const style = window.getComputedStyle(elem);
  return Math.floor(parseFloat(style.width)) +
    Math.ceil(parseFloat(style.paddingLeft)) +
    Math.ceil(parseFloat(style.paddingRight));
};

class NavigationTab extends Tab {

  clickEventHandler(e) {

    if (
      e.target.nodeName === 'A' &&
      Util.hasClass(e.target, DROPDOWN_CLASS_COMPONENT)
    ) {
      e.preventDefault();
    } else {
      super.clickEventHandler(e);
    }
  }
}

class NavigationDropdown extends Dropdown {

  constructor (elem, tabComponent) {
    super(
      elem,
      { popper: true }
    );
    this._tab = tabComponent;
    this._removedPopper = false;
  }

  show() {
    if (this._tab.vertical && this._popper) {
      this._removedPopper = true;
      this._popper.destroy();
    } else if (this._removedPopper) {
      this.enablePopper();
    }
    super.show();
  }

  static factory(elem, tabComponent) {
    return Util.cachedComponentFactory(
      elem,
      tabComponent,
      DROPDOWN_COMPONENT_TYPE,
      function() {
        return new NavigationDropdown(elem, tabComponent);
      }
    );
  }
}

class Navigation {

  constructor (elem, config) {
    this._config = Util.extend(
      {
        confineOverflow: true
      }, config);
    this._elem = elem;
    this._tab = new NavigationTab(elem);
    this._dropdowns = [];
    this._overflowTabWidth = 0;
    this._totalTabElementsWidth = 0;
    const self = this;
    Array.prototype.forEach.call(
      this._elem.querySelectorAll('a.' + DROPDOWN_CLASS_COMPONENT),
      function (dropdownElem) {
        self._dropdowns.push(
          NavigationDropdown.factory(dropdownElem, self._tab)
        );
      }
    );

    window.requestAnimationFrame(function() {
      self.checkOverflow();
    });

    this._onWindowResize = function() {
      if (self.checkOverflowTimeout) {
        window.clearTimeout(self.checkOverflowTimeout);
      }
      self.checkOverflowTimeout = window.setTimeout(function() {
        self.checkOverflow();
      }, 200);
    };
    window.addEventListener('resize', this._onWindowResize);
  }

  checkOverflow() {

    if (Util.hasClass(this._elem, '-vertical')) {
      if (this._overflowTab) {
        this.resetOverflow();
      }
      return;
    }

    const slidingBorders = [];
    for (let i = 0 ; i < this._elem.childNodes.length ; i++) {
      if (Util.hasClass(this._elem.childNodes[i], 'a-tabs__sliding-border')) {
        slidingBorders.push(this._elem.childNodes[i]);
        this._elem.removeChild(this._elem.childNodes[i]);
      }
    }

    this._tabsContainerWidth = calculateInternalWidth(this._elem);
    this.updateTabsWidthInfo();

    if (this._totalTabElementsWidth >= this._tabsContainerWidth - this._overflowTabWidth) {
      if (!this._overflowTab) {
        this.createOverflowTab();
      }

      while (
        this._totalTabElementsWidth+this._overflowTabWidth > this._tabsContainerWidth &&
        this._elem.childNodes.length > 2
      ) {
        const lastChild = this._elem.childNodes[this._elem.childNodes.length-2];
        const lastChildWidth = calculateExternalWidth(lastChild);
        this._totalTabElementsWidth = this._totalTabElementsWidth - lastChildWidth;
        this.moveTabToMoreContainer(lastChild, lastChildWidth);
      }

    } else if (this._overflowTab) {
      while (
        this._overflowTabMenu &&
        this._overflowTabMenu.children.length &&
        this._totalTabElementsWidth + Util.getData(this._overflowTabMenu.children[0], 'navigationTabWidth') <=
        this._tabsContainerWidth - this._overflowTabWidth
      ) {
        this._totalTabElementsWidth += Util.getData(this._overflowTabMenu.children[0], 'navigationTabWidth');
        this.moveTabFromMoreContainer(this._overflowTabMenu.children[0]);
      }

      if (
        this._totalTabElementsWidth +
        Array.prototype.reduce.call(this._overflowTabMenu.children, function(prev, curr) {
          return prev + Util.getData(curr, 'navigationTabWidth');
        }, 0) <= this._tabsContainerWidth
      ) {
        this.resetOverflow();
      } else if (this._overflowTabMenu.children.length === 0) {
        this.resetOverflow();
      }
    }

    slidingBorders.forEach(function (slidingBorder) {
      if (this._overflowTab) {
        this._elem.insertBefore(slidingBorder, this._overflowTab);
      } else {
        this._elem.appendChild(slidingBorder);
      }
    }.bind(this));
  }

  createOverflowTab () {
    this._overflowTab = document.createElement('LI');
    Util.addClass(this._overflowTab, 'm-dropdown');
    this._overflowTab.innerHTML =
      '<a href="#" class="m-dropdown__trigger"> More&hellip;</a>' +
      '<div class="m-dropdown__menu"></div>';
    this._overflowTabMenu = this._overflowTab.getElementsByClassName('m-dropdown__menu')[0];
    this._overflowTabTrigger = this._overflowTab.getElementsByClassName('m-dropdown__trigger')[0];
    this._overflowTabDropdown = NavigationDropdown.factory(
      this._overflowTabTrigger,
      this._tab
    );

    this._elem.appendChild(this._overflowTab);
    this._overflowTab.setAttribute('title', calculateExternalWidth(this._overflowTab));
    this._overflowTabWidth = calculateExternalWidth(this._overflowTab);
  }

  updateTabsWidthInfo () {

    this._totalTabElementsWidth = 0;
    this._overflowTabWidth = 0;

    Array.prototype.forEach.call(this._elem.childNodes, function(tab) {
      if (!this._overflowTab || tab !== this._overflowTab) {
        this._totalTabElementsWidth += calculateExternalWidth(tab);
        tab.setAttribute('title', calculateExternalWidth(tab));
      } else if (this._overflowTab && tab === this._overflowTab) {
        this._overflowTabWidth = calculateExternalWidth(this._overflowTab);
      }
    }.bind(this));
  }

  moveTabToMoreContainer (tab, width) {
    tab.parentNode.removeChild(tab);
    const newElem = document.createElement('DIV');
    newElem.className = tab.className;
    Util.setData(newElem, 'navigationTab', tab);
    Util.setData(newElem, 'navigationTabWidth', width);
    while (tab.childNodes.length) {
      const child = tab.childNodes[0];
      if (child.nodeName === 'A') {
        Util.addClass(child, 'm-dropdown__menu-item');
      }
      if (Util.hasClass(child,'m-dropdown__trigger')) {
        NavigationDropdown.factory(child).disablePopper();
      }
      newElem.appendChild(child);
    }
    this._overflowTabMenu.prepend(newElem);
  }

  moveTabFromMoreContainer (tab) {
    const oldTab = Util.getData(tab, 'navigationTab');
    while (tab.childNodes.length) {
      const child = tab.childNodes[0];
      if (child.nodeName === 'A') {
        Util.removeClass(child, 'm-dropdown__menu-item');
      }
      if (Util.hasClass(child,'m-dropdown__trigger')) {
        NavigationDropdown.factory(child).enablePopper();
      }
      oldTab.appendChild(child);
    }
    tab.parentNode.removeChild(tab);
    this._elem.insertBefore(oldTab, this._overflowTab);
  }

  resetOverflow () {
    while (this._overflowTabMenu && this._overflowTabMenu.children.length) {
      this.moveTabFromMoreContainer(this._overflowTabMenu.children[0]);
    }
    this._overflowTab.parentNode.removeChild(this._overflowTab);
    this._overflowTabDropdown.dispose();
    this._overflowTabDropdown = null;
    this._overflowTab = null;
    this._overflowTabWidth = 0;
  }

  dispose () {
    this._tab.dispose();
    this._dropdowns.forEach(function(dropdown) {
      dropdown.dispose();
    });
    if (this._overflowTab) {
      this.resetOverflow();
    }
    this._tab = null;
    this._dropdowns = null;
    this._config = null;
    this._elem = null;
  }

  static factory(elem, config) {
    return Util.cachedComponentFactory(elem, config, COMPONENT_TYPE,
      function() {
        return new Navigation(elem, config);
      }
    );
  }
}


let chiNavigation = Util.addArraySupportToFactory(Navigation.factory);

chi.navigation = chiNavigation;
export {Navigation, chiNavigation};

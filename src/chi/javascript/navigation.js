import {Util} from "./util.js";
import {chi} from "./chi.js";
import {OverflowMenu} from "./AuxiliaryComponents/OverflowMenu";
import {
  Tab,
  COMPONENT_TYPE as TAB_COMPONENT_TYPE
} from "./tab";
import {
  Dropdown,
  CLASS_ACTIVE as DROPDOWN_CLASS_ACTIVE,
  CLASS_COMPONENT as DROPDOWN_CLASS_COMPONENT,
  CLASS_DROPDOWN_ITEM,
  CLASS_MOLECULE,
  COMPONENT_TYPE as DROPDOWN_COMPONENT_TYPE
} from "./dropdown";
import {ANIMATION_DURATION as SLIDING_BORDER_ANIMATION_DURATION} from "./AuxiliaryComponents/SlidingBorder";

const COMPONENT_TYPE = "navigation";

class NavigationTab extends Tab {

  constructor (elem, config) {
    super(elem, config);
    this.resetSlidingBorder();
  }

  resetSlidingBorder() {
    const deepestActiveMenuItem = this.getDeepestActiveMenuItem();
    const activeTab = this.getActiveTab();
    if (deepestActiveMenuItem) {
      this.moveSlidingBorderToDropdownMenuItem(deepestActiveMenuItem);
    } else if (activeTab) {
      this.moveSlidingBorderToTab(activeTab);
    }
  }

  clickEventHandler(e) {
    if (
      e.target.nodeName === 'A' &&
      Util.hasClass(e.target, DROPDOWN_CLASS_COMPONENT)
    ) {
      e.preventDefault();
      if (
        this._isATabWithDropdown(e.target.parentNode)
      ) {
        this.moveSlidingBorderToTab(e.target.parentNode);
      }
    } else {
      super.clickEventHandler(e);
    }
    if (Util.hasClass(e.target, CLASS_DROPDOWN_ITEM)) {
      this.moveSlidingBorderToDropdownMenuItem(e.target);
    }
  }

  _isATabWithDropdown (elem) {
    return elem.nodeName === 'LI' && Util.hasClass(elem, CLASS_MOLECULE);
  }

  moveSlidingBorderToDropdownMenuItem (dropdownMenuItem) {
    if (this.isVertical()) {
      window.requestAnimationFrame(function() {
        const style = {
          top: 0,
          left: '',
          height: Util.calculateExternalHeight(dropdownMenuItem, false) + 'px',
          width: ''
        };
        style.top += Util.calculateDistance(
          this._elem, dropdownMenuItem, 'y', true
        );
        style.top = style.top + 'px';
        this.moveSlidingBorder(style);
      }.bind(this));
    }
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

  // static getTabHeight (tab) {
  //   if (Util.hasClass(tab, CLASS_MOLECULE)) {
  //     const dropdownTrigger =
  //       tab.getElementsByClassName(DROPDOWN_CLASS_COMPONENT)[0];
  //     return Util.calculateExternalHeight(dropdownTrigger, false);
  //   } else {
  //     return Util.calculateExternalHeight(tab, false);
  //   }
  // }
}

class NavigationDropdown extends Dropdown {
  constructor (elem, config) {
    super(
      elem,
      Util.extend(
        { popper: !config.tabComponent.isVertical()},
        config.dropdown
      )
    );
    this._tab = config.tabComponent;
    this._removedPopper = this._tab.isVertical();
    this._navigationComponent = config.navigationComponent;
  }

  show() {
    if (this._tab.isVertical() && this._popper) {
      this._removedPopper = true;
      this._popper.destroy();
    } else if (this._removedPopper && !this._tab.isVertical()) {
      this.enablePopper();
    }
    super.show();
  }

  static factory(elem, config) {
    return Util.cachedComponentFactory(
      elem,
      config,
      DROPDOWN_COMPONENT_TYPE,
      function() {
        return new NavigationDropdown(elem, config);
      }
    );
  }

  _dropdownClickedEventManager (e) {
    super._dropdownClickedEventManager(e);

    if (
      Util.hasClass(e.target, CLASS_DROPDOWN_ITEM) &&
      !Util.hasClass(e.target, DROPDOWN_CLASS_COMPONENT)
    ) {
      this._navigationComponent.activateMenuItem(e.target);
      this._navigationComponent.manageClickOnCommonLinks(e);
    }
  }
}

class Navigation {

  constructor (elem, config) {
    this._config = Util.extend(
      {
        confineOverflow: true,
        waitForAnimations: true
      }, config);
    this._elem = elem;
    this._tabComponent = NavigationTab.factory(elem);
    this._dropdowns = [];
    const self = this;
    Array.prototype.forEach.call(
      this._elem.querySelectorAll('a.' + DROPDOWN_CLASS_COMPONENT),
      function (dropdownElem) {
        self._dropdowns.push(
          NavigationDropdown.factory(
            dropdownElem,
            {
              tabComponent: self._tabComponent,
              navigationComponent: self
            }
          )
        );
      }
    );

    if (this._config.confineOverflow) {
      this._overflowMenu = new OverflowMenu(this, this._tabComponent);
      window.requestAnimationFrame(function() {
        self._overflowMenu.manageOverflow();
      });
      this._onWindowResize = function() {
        if (self.checkOverflowTimeout) {
          window.clearTimeout(self.checkOverflowTimeout);
        }
        self.checkOverflowTimeout = window.setTimeout(function() {
          window.requestAnimationFrame(function() {
            self._overflowMenu.manageOverflow();
          });
        }, 200);
      };
      window.addEventListener('resize', this._onWindowResize);

      this._clickOnComponentHandler = function() {
        this._clickedOnComponent = true;
      }.bind(this);
      this._clickOnDocumentHandler = function () {
        if (this._clickedOnComponent) {
          this._clickedOnComponent = false;
        } else {
          this.restoreState();
        }
      }.bind(this);

      this._elem.addEventListener('click', this._clickOnComponentHandler);
      document.addEventListener('click', this._clickOnDocumentHandler);

      // TODO: when an active element falls into the overflow menu,
      //  the overflow menu should be rendered as active.
    }
    this.saveState();
  }

  saveState () {
    this._initialState = {};
    this._initialState.activeTab = this._tabComponent.getActiveTab();
    this._initialState.activeDropdowns =
      Util.addArraySupportToFactory(Dropdown.factory)(
        this._elem.querySelectorAll(
          '.' + DROPDOWN_CLASS_COMPONENT + '.' + DROPDOWN_CLASS_ACTIVE
        )
      );
    this._initialState.activeMenuItems =
      this._elem.querySelectorAll(
        '.' + CLASS_DROPDOWN_ITEM + '.' + DROPDOWN_CLASS_ACTIVE
      );
  }

  restoreState () {
    if (this._initialState.activeTab) {
      this._tabComponent.showTab(this._initialState.activeTab);
    }
    this._initialState.activeDropdowns.forEach (function (dropdown) {
      dropdown.show();
    });

    if (this._initialState.activeMenuItems.length) {
      this.activateMenuItem(
        this._initialState.activeMenuItems[
        this._initialState.activeMenuItems.length -1
          ]
      );
    } else {
      this.deactivateAllMenuItems();
    }
    this._tabComponent.resetSlidingBorder();
  }

  isVertical () {
    return this._tabComponent.isVertical();
  }

  activateMenuItem (menuItem) {
    this.deactivateAllMenuItems(menuItem);
    Util.addClass(menuItem, DROPDOWN_CLASS_ACTIVE);
  }

  deactivateAllMenuItems (exceptThis) {
    Array.prototype.forEach.call(
      this._tabComponent._elem.querySelectorAll(
        '.' + CLASS_DROPDOWN_ITEM + '.' + DROPDOWN_CLASS_ACTIVE
      ),
      function(dropdownItem) {
        if (typeof exceptThis === 'undefined' ||
          dropdownItem !== exceptThis &&
          !Util.hasClass(dropdownItem, DROPDOWN_CLASS_COMPONENT)
        ) {
          Util.removeClass(dropdownItem, DROPDOWN_CLASS_ACTIVE);
        }
      }
    );
  }

  _checkIfCommonLink (elem) {
    return elem.nodeName === 'A' &&
      elem.getAttribute('href') &&
      !Util.getTarget(elem);
  }

  manageClickOnCommonLinks (clickEvent) {
    if (
      this._checkIfCommonLink(clickEvent.target) &&
      this._config.waitForAnimations
    ) {
      clickEvent.preventDefault();
      const link = clickEvent.target.getAttribute('href');
      window.setTimeout(
        function() {
          window.location.href = link;
        }, SLIDING_BORDER_ANIMATION_DURATION
      );
    }
  }

  dispose () {
    this._tabComponent.dispose();
    this._dropdowns.forEach(function(dropdown) {
      dropdown.dispose();
    });
    if (this._overflowMenu) {
      this._overflowMenu.dispose();
    }
    window.removeEventListener('resize', this._onWindowResize);
    this._elem.removeEventListener('click', this._clickOnComponentHandler);
    document.removeEventListener('click', this._clickOnDocumentHandler);

    this._tabComponent = null;
    this._dropdowns = null;
    this._config = null;
    this._elem = null;
    this._initialState = null;
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
export {Navigation, chiNavigation, NavigationDropdown};

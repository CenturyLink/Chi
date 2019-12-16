import {EVENT as OverflowMenuEvents, OverflowMenu} from "./auxiliary/overflow-menu";
import {Util} from "../core/util.js";
import {NavigationDropdown} from "./navigation/navigation-dropdown";
import {NavigationTab, TAB_CLASS_ACTIVE} from "./navigation/navigation-tab";

import {
  CLASS_ACTIVE as DROPDOWN_CLASS_ACTIVE,
  CLASS_COMPONENT as DROPDOWN_CLASS_COMPONENT,
  CLASS_DROPDOWN_ITEM,
} from "./dropdown";

import {ANIMATION_DURATION as SLIDING_BORDER_ANIMATION_DURATION} from
    "./auxiliary/sliding-border";
import {Component} from "../core/component";

const COMPONENT_TYPE = "navigation";
const DEFAULT_CONFIG = {
  overflowMenu: true,
  overflowMenuLabel: 'See more...',
  waitForAnimations: false,
};

class Navigation extends Component {

  constructor (elem, config) {

    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._tabComponent = NavigationTab.factory(
      elem,
      {
        waitForAnimations: this._config.waitForAnimations,
        navigationComponent: this
      }
    );
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

    if (this._config.overflowMenu) {
      this._initOverflowMenu();
    }
  }

  _initOverflowMenu () {
    if (this._overflowMenu) {
      return;
    }
    const self = this;
    this._overflowMenu = new OverflowMenu(this, {
      tabComponent: this._tabComponent,
      overflowMenuLabel: this._config.overflowMenuLabel
    });
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

    this._onOverflowMenuAddElement = function (newElem, overflowTab) {
      if (Util.hasClass(newElem, TAB_CLASS_ACTIVE)) {
        self._tabComponent.showTab(overflowTab);
      }
    };

    this._onOverflowMenuRemoveElement = function (extractedTab) {
      if (Util.hasClass(extractedTab, TAB_CLASS_ACTIVE)) {
        Util.removeClass(extractedTab, TAB_CLASS_ACTIVE);
        self._tabComponent.showTab(extractedTab);
      }
    };

    this._overflowMenu.addEventListener(
      OverflowMenuEvents.MOVE_TAB_INTO_OVERFLOW_MENU,
      this._onOverflowMenuAddElement
    );

    this._overflowMenu.addEventListener(
      OverflowMenuEvents.RELEASE_TAB_FROM_OVERFLOW_MENU,
      this._onOverflowMenuRemoveElement
    );

    this._clickOnComponentHandler = function() {
      this._clickedOnComponent = true;
    }.bind(this);
    this._clickOnDocumentHandler = function () {
      if (this._clickedOnComponent) {
        this._clickedOnComponent = false;
      }
    }.bind(this);

    this._elem.addEventListener('click', this._clickOnComponentHandler);
    document.addEventListener('click', this._clickOnDocumentHandler);
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
      (
        !Util.getTarget(elem) ||
        !Util.hasClass(Util.getTarget(elem), 'a-tabs-panel')
      );
  }

  manageClickOnCommonLinks (clickEvent) {
    if (this._checkIfCommonLink(clickEvent.target)) {
      const self = this;

      if (this._config.waitForAnimations) {
        clickEvent.preventDefault();
        const link = clickEvent.target.getAttribute('href');
        window.setTimeout(
          function() {
            window.location.href = link;
          }, SLIDING_BORDER_ANIMATION_DURATION
        );
      }

      window.requestAnimationFrame(function(){
        self._dropdowns.forEach(function (dd) {
          dd.hide();
        });
        self._overflowMenu.hide();
      });
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

  static get componentType () {
    return COMPONENT_TYPE;
  }

}

const factory = Component.factory.bind(Navigation);
export {Navigation, factory, NavigationDropdown};

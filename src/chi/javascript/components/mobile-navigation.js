import { Component } from '../core/component';
import { Util } from '../core/util.js';
import { chi } from '../core/chi';
import { Drawer } from './drawer';
import { Dropdown } from './dropdown';

const CHI_TABS_CLASS = 'chi-tabs';
const COMPONENT_TYPE = 'mobilenav';
const DRAWER_CLASS = 'chi-drawer';
const DRAWER_CONTENT_CLASS = 'chi-drawer__content';
const DRAWER_HEADER_CLASS = 'chi-drawer__header';
const DRAWER_ITEM_LIST_CLASS = 'chi-mobile-nav__list-item-list';
const DRAWER_ITEM_TAB_CLASS = 'chi-mobile-nav-item-tab';
const DRAWER_ITEM_LIST_EXPANDED = '-expanded';
const DRAWER_NAV_LIST = 'chi-mobile-nav__list';
const DRAWER_SUBITEM_LIST_TRIGGER_CLASS = 'chi-drawer__subitem-list-trigger';
const FIRST_LEVEL_DRAWER_CLASS = 'chi-mobile-nav__first-level';
const FIRST_LEVEL_DRAWER_CONTENT_CLASS = 'chi-mobile-nav__first-level-content';
const MOBILENAV_DRAWERS_CLASS = 'chi-mobile-nav__drawers';
const SECOND_LEVEL_SHOWN_CLASS = '-second-level-shown';

class MobileNavigation extends Component {
  constructor(elem) {
    super(elem);
    let self = this;
    this._drawersContainer = document.querySelector('.' + MOBILENAV_DRAWERS_CLASS);
    this._firstLevelDrawer = null;
    this._drawers = [];
    this._menuItemAnimation = null;

    this._initFirstLevelDrawer();
    this._addEventHandler(
      this._drawersContainer,
      'click',
      (e) => {
        e.stopPropagation();
        this._handleClickOnSecondLevelDrawer(e);
      });
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  _initFirstLevelDrawer() {
    this._mobileNavElement = this._locateMobileNav();
    const firstLevelDrawer = this._mobileNavElement.querySelector(`.${FIRST_LEVEL_DRAWER_CLASS}`);
    const firstLevelMenuItems = this._mobileNavElement.querySelectorAll(`.${DRAWER_CLASS}.${FIRST_LEVEL_DRAWER_CLASS} .${FIRST_LEVEL_DRAWER_CONTENT_CLASS} .${DRAWER_CONTENT_CLASS} .${CHI_TABS_CLASS} li a`);
    const firstLevelDropdownTriggers = this._mobileNavElement.querySelectorAll(`.${DRAWER_CLASS}.${FIRST_LEVEL_DRAWER_CLASS} .chi-dropdown__trigger`);
    const self = this;

    if (firstLevelDrawer) {
      const firstLevelCloseButton = firstLevelDrawer.querySelector('.-close');

      this._firstLevelDrawer = Drawer.factory(this._elem, {
        animated: true,
        target: firstLevelDrawer
      });
      this._addEventHandler(
        firstLevelCloseButton,
        'click',
        () => {
          self._hideMobileNav()
        }
      );
    }

    Array.prototype.forEach.call(
      firstLevelMenuItems,
      (menuItem) => {
        const drawerId = menuItem.getAttribute('href');
        const drawer = document.querySelector(`.chi-drawer${drawerId}`);

        if (drawer) {
          const returnBackButton = drawer.querySelector(`.${DRAWER_HEADER_CLASS} button.-back`);
          const firstLevelContent = self._mobileNavElement.querySelector('.chi-mobile-nav__first-level-content');

          this._addEventHandler(
            menuItem,
            'click',
            function(e) {
              e.preventDefault();
              Util.addClass(drawer, chi.classes.ACTIVE);
              Util.addClass(firstLevelContent, '-second-level-shown');
            });

          this._addEventHandler(
            returnBackButton,
            'click',
            function(e) {
              e.stopPropagation();
              Util.removeClass(drawer, chi.classes.ACTIVE);
              self.resetActiveDrawerMenuItem();
              Util.removeClass(firstLevelContent, SECOND_LEVEL_SHOWN_CLASS);
            });
          Util.addClass(menuItem, DRAWER_SUBITEM_LIST_TRIGGER_CLASS);
          this._drawers.push(drawer);
        } else {
          this._addEventHandler(
            menuItem,
            'click',
            () => self._activateFirstLevelMenuItem(menuItem)
          );
        }
      }
    );
    Array.prototype.forEach.call(
      firstLevelDropdownTriggers,
      (dropdown) => {
        const dropdownElemId = dropdown.getAttribute('data-target');

        Dropdown.factory(dropdown, { dropdownElem: document.querySelector(`#${dropdownElemId}`) });
      }
    );
    this._initSecondLevelDrawers();
    this._addEventHandler(
      this._firstLevelDrawer._drawerElem,
      'chi.drawer.hide',
      function() {
        const firstLevelDrawerContent = self._mobileNavElement.querySelector('.chi-mobile-nav__first-level-content');
        const activeSecondLevelDrawer = self._mobileNavElement.querySelector(`.${MOBILENAV_DRAWERS_CLASS} .${DRAWER_CLASS}.${chi.classes.ACTIVE}`);

        if (activeSecondLevelDrawer) {
          Util.removeClass(activeSecondLevelDrawer, chi.classes.ACTIVE);
          Util.removeClass(firstLevelDrawerContent, '-second-level-shown');
        }
        self.resetActiveDrawerMenuItem();
      });
  }

  _initSecondLevelDrawers() {
    Array.prototype.forEach.call(
      this._drawers,
      (drawer) => {
        const drawerMenuItems = drawer.querySelectorAll(`.${DRAWER_CONTENT_CLASS} .chi-mobile-nav__list > li > a`);

        Array.prototype.forEach.call(
          drawerMenuItems,
          (menuItem) => {
            const itemList = menuItem.parentNode.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);

            if (itemList) {
              Util.addClass(menuItem, DRAWER_SUBITEM_LIST_TRIGGER_CLASS);
            }
          }
        );
      }
    );
  }

  _getActiveFirstLevelItem() {
    return this._mobileNavElement.querySelector(`.${FIRST_LEVEL_DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} .${CHI_TABS_CLASS} li.${chi.classes.ACTIVE}`);
  }

  _getActiveSecondLevelItem() {
    return this._mobileNavElement.querySelector(`.${MOBILENAV_DRAWERS_CLASS} .${DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} .${DRAWER_NAV_LIST} li.${chi.classes.ACTIVE}`);
  }

  _getActiveSecondLevelItemSubtab() {
    return this._mobileNavElement.querySelector(`.${MOBILENAV_DRAWERS_CLASS} .${DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} .${DRAWER_NAV_LIST} li.${chi.classes.ACTIVE} .${DRAWER_ITEM_LIST_CLASS} li a.${chi.classes.ACTIVE}`);
  }

  _getExpandedSecondLevelItem() {
    return this._mobileNavElement.querySelector(`.${MOBILENAV_DRAWERS_CLASS} .${DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} .${DRAWER_NAV_LIST} li.${chi.classes.EXPANDED}`);
  }

  _activateFirstLevelMenuItem(menuItem) {
    const currentlyActiveMenuItem = this._getActiveFirstLevelItem();
    const menuItemToActivate = menuItem.parentNode;
    const menuItemDrawer = this._drawersContainer.querySelector(`.${DRAWER_CLASS}${menuItem.getAttribute('href')}`);

    if (menuItem === currentlyActiveMenuItem) {
      return;
    }

    if (menuItemToActivate.nodeName === 'LI') {
      if (currentlyActiveMenuItem) {
        Util.removeClass(currentlyActiveMenuItem, chi.classes.ACTIVE);
      }
      Util.addClass(menuItemToActivate, chi.classes.ACTIVE);
      this.hide();
    }

    if (!menuItemDrawer) {
      const menuItemToClose = this._drawersContainer.querySelector(`.${DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} .${DRAWER_NAV_LIST} li.${chi.classes.ACTIVE}`);

      if (menuItemToClose) {
        const menuItemList = menuItemToClose.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);
        const menuItemSubItemToClose = menuItemToClose.querySelector(`.${DRAWER_ITEM_LIST_CLASS} li a.${chi.classes.ACTIVE}`);

        Util.removeClass(menuItemToClose, chi.classes.ACTIVE);

        if (menuItemList) {
          Util.removeClass(menuItemList, chi.classes.TRANSITIONING);
          Util.removeClass(menuItemToClose, chi.classes.EXPANDED);
          menuItemList.style.removeProperty('height');

          if (menuItemSubItemToClose) {
            Util.removeClass(menuItemSubItemToClose, chi.classes.ACTIVE);
          }
        }
      }
    }
  }

  _closeTabsList(menuItem) {
    const menuItemTabs = menuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);

    if (Util.hasClass(menuItem, chi.classes.EXPANDED)) {
      Util.removeClass(menuItem, chi.classes.EXPANDED);
    }

    if (menuItemTabs) {
      const activeSubtab = menuItemTabs.querySelector(`a.${chi.classes.ACTIVE}`);

      Util.removeClass(activeSubtab, chi.classes.ACTIVE);
      menuItemTabs.style.removeProperty('height');
    }
  }

  _activateSecondLevelMenuItem(menuItemActivator, drawerMenuItem = null, drawerId = '') {
    const firstLevelItemToDeactive = this._mobileNavElement.querySelector(`.${FIRST_LEVEL_DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} ul.${CHI_TABS_CLASS} > li.${chi.classes.ACTIVE}`);
    const _removeSecondLevelActive = () => {
      const activeSecondLevel = this._getActiveSecondLevelItem();

      if (activeSecondLevel) {
        this._closeTabsList(activeSecondLevel);
        Util.removeClass(activeSecondLevel, chi.classes.ACTIVE);
      }
    };

    if (firstLevelItemToDeactive) {
      if (drawerId !== firstLevelItemToDeactive.getAttribute('href')) {
        const firstLevelItemToActive = this._mobileNavElement.querySelector(`.${FIRST_LEVEL_DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} ul.${CHI_TABS_CLASS} > li a[href='#${drawerId}']`);

        Util.removeClass(firstLevelItemToDeactive, chi.classes.ACTIVE);
        Util.addClass(firstLevelItemToActive.parentNode, chi.classes.ACTIVE);
      }
    }

    if (Util.hasClass(menuItemActivator, DRAWER_ITEM_TAB_CLASS)) {
      const currentlyActiveSecondLevelItemSubtab = this._getActiveSecondLevelItemSubtab();
      const activeSecondLevelItem = this._getActiveSecondLevelItem();

      this.drawerMenuItemRemoveUnselected();
      if (activeSecondLevelItem && !activeSecondLevelItem.contains(menuItemActivator)) {
        Util.removeClass(this._getActiveSecondLevelItem(), chi.classes.ACTIVE);
      }
      Util.addClass(menuItemActivator, chi.classes.ACTIVE);
      Util.addClass(drawerMenuItem, chi.classes.ACTIVE);
      if (currentlyActiveSecondLevelItemSubtab && currentlyActiveSecondLevelItemSubtab !== menuItemActivator) {
        Util.checkRemoveClass(currentlyActiveSecondLevelItemSubtab, chi.classes.ACTIVE);
      }
    } else {
      const menuItem = menuItemActivator.parentNode;

      _removeSecondLevelActive();
      Util.addClass(menuItem, chi.classes.ACTIVE);
    }
  }

  _handleClickOnSecondLevelDrawer(e) {
    let drawer, activator, drawerMenuItem;

    if (Util.checkHasClass(e.target, '-close') ||
      Util.checkHasClass(e.target.parentNode, '-close') ||
      Util.checkHasClass(e.target.parentNode.parentNode, '-close')) {
      this._hideMobileNav();
    }

    for (let cur = e.target; cur && cur !== this._drawersContainer; cur = cur.parentNode) {
      if (Util.checkHasClass(cur, DRAWER_CLASS)) {
        drawer = cur;
      } else if (
        (cur.nodeName === 'A' || cur.nodeName === 'BUTTON') &&
        !Util.checkHasClass(cur, '-close')
      ) {
        activator = cur;
      } else if (cur.nodeName === 'LI') {
        drawerMenuItem = cur;
      }
    }

    if (drawerMenuItem) {
      const drawerMenuItemList = drawerMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);

      if (activator) {
        if (drawerMenuItemList) {
          if (Util.checkHasClass(activator, 'chi-mobile-nav__list-title') ||
            activator.parentNode.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`)) {
            e.preventDefault();
          }

          if (Util.checkHasClass(activator, DRAWER_ITEM_TAB_CLASS)) {
            this._activateSecondLevelMenuItem(activator, drawerMenuItem, drawer.getAttribute('id'));
            this.hide();
          } else {
            e.preventDefault();
            this._toggleDrawerItemList(drawerMenuItem);
          }
        } else {
          this._activateSecondLevelMenuItem(activator, drawerMenuItem, drawer.getAttribute('id'));
          this.hide();
        }
      }
    }
  }

  hide() {
    const firstLevelDrawer = this._firstLevelDrawer;
    const secondLevelDrawer = this._drawers.find(drawer => Util.hasClass(drawer, chi.classes.ACTIVE));

    if (firstLevelDrawer) {
      firstLevelDrawer.hide();
    }
    if (secondLevelDrawer) {
      const firstLevelDrawerContent = this._mobileNavElement.querySelector('.chi-mobile-nav__first-level-content');

      Util.removeClass(secondLevelDrawer, chi.classes.ACTIVE);
      Util.removeClass(firstLevelDrawerContent, '-second-level-shown');
    }
  }

  drawerMenuItemRemoveUnselected() {
    const drawerActiveMenuItem = this._getActiveSecondLevelItem();

    if (drawerActiveMenuItem && Util.checkHasClass(drawerActiveMenuItem, chi.classes.UNSELECTED)) {
      Util.checkRemoveClass(drawerActiveMenuItem, chi.classes.UNSELECTED);
    }
  }

  _toggleDrawerItemList(drawerMenuItem) {
    const activeDrawerMenuItem = this._mobileNavElement.querySelector(`.${MOBILENAV_DRAWERS_CLASS} .${DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} .chi-mobile-nav__list li.${chi.classes.ACTIVE}`);
    const drawerMenuItemList = drawerMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);
    const expandedItem = drawerMenuItem.parentNode.querySelector(`.${DRAWER_ITEM_LIST_EXPANDED}`);
    let drawerMenuItemListHeight;

    if (this._menuItemAnimation) {
      Util.stopThreeStepsAnimation(this._menuItemAnimation, false);
    }

    if (expandedItem && expandedItem !== drawerMenuItem) {
      Util.removeClass(expandedItem, DRAWER_ITEM_LIST_EXPANDED);
      expandedItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`).style.removeProperty('height');
    }

    if (drawerMenuItem !== activeDrawerMenuItem &&
      !Util.hasClass(drawerMenuItem, chi.classes.EXPANDED)) {
      Util.checkAddClass(activeDrawerMenuItem, chi.classes.UNSELECTED);
    } else {
      this.drawerMenuItemRemoveUnselected();
    }

    function calculateHeight() {
      drawerMenuItemList.style.position = 'absolute';
      drawerMenuItemList.style.visibility = 'hidden';
      drawerMenuItemList.style.display = 'block';
      drawerMenuItemListHeight = window.getComputedStyle(drawerMenuItemList).height;
      drawerMenuItemList.style.removeProperty('display');
      drawerMenuItemList.style.removeProperty('visibility');
      drawerMenuItemList.style.removeProperty('position');
    }

    if (!Util.checkHasClass(drawerMenuItem, DRAWER_ITEM_LIST_EXPANDED)) {
      this._menuItemAnimation = Util.threeStepsAnimation(
        function() {
          calculateHeight();
          Util.checkAddClass(drawerMenuItemList, chi.classes.TRANSITIONING);
          drawerMenuItemList.style.height = '0px';
        }, function() {
          drawerMenuItemList.style.height = drawerMenuItemListHeight;
          Util.checkAddClass(drawerMenuItem, DRAWER_ITEM_LIST_EXPANDED);
        }, function() {
          Util.checkRemoveClass(drawerMenuItemList, chi.classes.TRANSITIONING);
        }, 75
      );
    } else {
      this._menuItemAnimation = Util.threeStepsAnimation(
        function() {
          calculateHeight();
          Util.checkAddClass(drawerMenuItemList, chi.classes.TRANSITIONING);
          drawerMenuItemList.style.height = drawerMenuItemListHeight;
        }, function() {
          drawerMenuItemList.style.height = '0px';
          Util.checkRemoveClass(drawerMenuItem, DRAWER_ITEM_LIST_EXPANDED);
        }, function() {
          Util.checkRemoveClass(drawerMenuItemList, chi.classes.TRANSITIONING);
          drawerMenuItemList.style.removeProperty('height');
        }, 75
      );
    }
  }

  resetActiveDrawerMenuItem() {
    const drawerExpandedMenuItem = this._getExpandedSecondLevelItem();
    const currentlyActiveDrawerItemSubtab = this._getActiveSecondLevelItemSubtab();

    this.drawerMenuItemRemoveUnselected();
    if (drawerExpandedMenuItem) {
      const drawerExpandedMenuItemList = drawerExpandedMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);

      if (drawerExpandedMenuItemList &&
        !drawerExpandedMenuItemList.querySelector(`ul li a.${chi.classes.ACTIVE}`)) {
        drawerExpandedMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`).style.removeProperty('height');
        Util.checkRemoveClass(drawerExpandedMenuItem, chi.classes.EXPANDED);
      }
    }

    if (currentlyActiveDrawerItemSubtab) {
      let drawerMenuItemToActivate;

      for (let cur = currentlyActiveDrawerItemSubtab;
           cur && !Util.checkHasClass(cur, DRAWER_NAV_LIST);
           cur = cur.parentNode) {
        drawerMenuItemToActivate = cur;
      }

      Util.checkAddClass(drawerMenuItemToActivate, chi.classes.ACTIVE);
      Util.checkAddClass(drawerMenuItemToActivate, chi.classes.EXPANDED);
    }
  }

  _locateMobileNav() {
    const mobileNavElem = Util.getTarget(this._elem);
    if (!mobileNavElem) {
      throw new Error('Could not find Mobile Navigation content for trigger. ');
    }
    return mobileNavElem;
  }

  dispose() {
    this._config = null;
    this._elem = null;
    this._firstLevelDrawer = null;
    this._drawersContainer = null;
    this._removeEventHandlers();
    this._drawers = [];
  }

  _hideMobileNav() {
    this._firstLevelDrawer.hide();
  }
}

const factory = Component.factory.bind(MobileNavigation);
export { MobileNavigation, factory };

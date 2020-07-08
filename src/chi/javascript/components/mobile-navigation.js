import { Component } from '../core/component';
import { Util } from '../core/util.js';
import { chi } from '../core/chi';
import { Drawer } from './drawer';

const COMPONENT_TYPE = 'mobile-navigation';
const MOBILENAV_DRAWERS_CLASS = 'chi-mobile-nav__drawers';
const DRAWER_CLASS = 'chi-drawer';
const DRAWER_CONTENT_CLASS = 'chi-drawer__content';
const FIRST_LEVEL_DRAWER_CLASS = 'chi-mobile-nav__first-level';
const CHI_TABS_CLASS = 'chi-tabs';
const DRAWER_ITEM_LIST_CLASS = 'chi-mobile-nav__list-item-list';
const DRAWER_ITEM_TAB_CLASS = 'chi-mobile-nav-item-tab';
const DRAWER_ITEM_LIST_EXPANDED = '-expanded';
const DEFAULT_CONFIG = {
  target: null,
  animated: true,
  preventAutoHide: false
};

class MobileNavigation extends Component {

  constructor(elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
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
        this._handleClickOnSecondLevelDrawer(e);
      });
  }

  _initFirstLevelDrawer() {
    this._mobileNavElement = this._locateMobileNav();
    const firstLevelDrawer = this._mobileNavElement.querySelector(`.${FIRST_LEVEL_DRAWER_CLASS}`);

    if (firstLevelDrawer) {
      this._firstLevelDrawer = Drawer.factory(this._elem, {
        animated: true,
        target: firstLevelDrawer
      });
    }

    this._initSecondLevelDrawers();
  }

  _initSecondLevelDrawers() {
    const firstLevelDrawerAnchors = this._mobileNavElement.querySelectorAll(`.${DRAWER_CLASS}.${FIRST_LEVEL_DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} .${CHI_TABS_CLASS} li a`);

    Array.prototype.forEach.call(
      firstLevelDrawerAnchors,
      (drawerTrigger) => {
        const drawerId = drawerTrigger.getAttribute('href');
        const drawer = document.querySelector(`.chi-drawer${drawerId}`);

        if (drawer) {
          const returnBackButton = drawer.querySelector(`.chi-drawer__header button.-back`);
          const drawerToCreate = Drawer.factory(drawerTrigger, {
            animated: true
          });

          returnBackButton.addEventListener('click', function(e) {
            e.stopPropagation();
            drawerToCreate.hide();
          });
          this._drawers.push(drawerToCreate);
        }
      }
    );
  }

  _handleClickOnSecondLevelDrawer(e) {
    let drawer, activator, drawerMenuItem;

    e.stopPropagation();
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

      if (drawerMenuItemList) {
        e.preventDefault();

        this._toggleDrawerItemList(drawerMenuItem);
      }
    }
  }

  _toggleDrawerItemList(drawerMenuItem) {
    const drawerMenuItemList = drawerMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);
    const expandedItem = drawerMenuItem.parentNode.querySelector(`.${DRAWER_ITEM_LIST_EXPANDED}`);
    let drawerMenuItemListHeight;

    if (this._menuItemAnimation) {
      Util.stopThreeStepsAnimation(this._menuItemAnimation, false);
    }

    if (expandedItem && expandedItem !== drawerMenuItem) {
      Util.checkRemoveClass(expandedItem, DRAWER_ITEM_LIST_EXPANDED);
      expandedItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`).style.removeProperty('height');
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

  _locateMobileNav() {
    const mobileNavElem = Util.getTarget(this._elem);
    if (!mobileNavElem) {
      throw new Error('Could not find Mobile Navigation content for trigger. ');
    }
    return mobileNavElem;
  }

  dispose() {
  }

  _hideMobileNav() {
    this._firstLevelDrawer.hide();
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }
}

const factory = Component.factory.bind(MobileNavigation);
export { MobileNavigation, factory };

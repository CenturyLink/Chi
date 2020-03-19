import { Component } from "../core/component";
import { SlidingBorder, ANIMATION_DURATION as BORDER_ANIMATION_DURATION } from "./auxiliary/sliding-border";
import { Util } from "../core/util.js";
import { chi } from "../core/chi";
import { Drawer, EVENTS as DRAWER_EVENTS } from "./drawer";

const COMPONENT_SELECTOR = '.chi-sidenav';
const COMPONENT_TYPE = "sidenav";
const DRAWER_CLASS = "chi-drawer";
const LINKLIST_CLASS = 'chi-sidenav__list';
const SIDENAV_CONTENT_CLASS = 'chi-sidenav__content';
const SIDENAV_DRAWERS_CLASS = 'chi-sidenav__drawers';
const SIDENAV_TITLE_CLASS = 'chi-sidenav__title';
const DRAWER_LINKLIST_CLASS = "chi-sidenav__drawer-list";
const DRAWER_ITEM_LIST_CLASS = "chi-sidenav__drawer-item-list";
const DRAWER_ITEM_TAB_CLASS = "chi-sidenav__drawer-item-tab";
const MENU_ITEM_UNSELECTED_CLASS = "-unselected";
const DRAWER_ITEM_LIST_EXPANDED = "-expanded";

const DEFAULT_CONFIG = {
  animated: true,
  autoClose: false
};

class Sidenav extends Component {

  constructor(elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
    let self = this;
    this._slidingBorder = null;
    this._drawersContainer = this._elem.querySelector('.' + SIDENAV_DRAWERS_CLASS);
    this._drawers = [];
    this._clickOnComponent = false;
    this._autocloseTimeoutId = null;
    this._menuItemAnimation = null;

    this._addEventHandler(
      this._drawersContainer,
      'click',
      function (e) {
        self._handlerClickOnDrawer(e);
      }
    );

    this._addEventHandler(
      this._drawersContainer,
      DRAWER_EVENTS.show,
      function (e) {
        self._handlerDrawerShown(e);
      }
    );

    this._addEventHandler(
      this._drawersContainer,
      DRAWER_EVENTS.hide,
      function (e) {
        self._handlerDrawerHide(e);
      }
    );

    if (this._config.animated) {
      Util.checkAddClass(this._elem, chi.classes.ANIMATED);

      this._slidingBorder = new SlidingBorder(
        this._elem,
        true,
        'div');
    }

    this.syncDrawers();
    this._configureAutoClose();
  }

  syncDrawers() {
    const previousDrawers = this._drawers.slice(0);
    const self = this;

    Array.prototype.forEach.call(
      this._elem.querySelectorAll('.' + LINKLIST_CLASS + '>li>a'),
      function (menuItemLink) {
        const drawerElem = Util.getTarget(menuItemLink);
        if (Util.checkHasClass(drawerElem, DRAWER_CLASS)) {
          const drawer = Drawer.factory(menuItemLink);
          const index = previousDrawers.indexOf(drawer);
          if (index === -1) {
            self._drawers.push(drawer);
          } else {
            previousDrawers.splice(index, 1);
          }
        }
      }
    );

    previousDrawers.forEach(function (drawer) {
      drawer.dispose();
    });
  }

  getActiveMenuItem() {
    return this._elem.querySelector(
      'ul.' + LINKLIST_CLASS + '>li.' + chi.classes.ACTIVE
    );
  }

  getActiveDrawerItemSubtab() {
    return this._elem
    .querySelector(`.chi-drawer .${DRAWER_ITEM_LIST_CLASS} ul li a.${chi.classes.ACTIVE}`);
  }

  getDrawerActiveMenuItem() {
    return this._elem.querySelector(
      'ul.' + DRAWER_LINKLIST_CLASS + '>li.' + chi.classes.ACTIVE
    );
  }

  getDrawerExpandedMenuItem() {
    return this._elem.querySelector(
      'ul.' + DRAWER_LINKLIST_CLASS + '>li.' + DRAWER_ITEM_LIST_EXPANDED
    );
  }

  getAssociatedDrawer(menuItemLink) {
    const drawerElem = Util.getTarget(menuItemLink);
    if (Util.checkHasClass(drawerElem, DRAWER_CLASS)) {
      const drawer = this._createDrawer(menuItemLink);
      if (this._drawers.indexOf(drawer) === -1) {
        this._drawers.push(drawer);
      }
      return drawer;
    }
    return null;
  }

  close(menuItemLink) {
    let drawer = this.getAssociatedDrawer(menuItemLink);
    if (drawer) {
      drawer.hide();
    }
  }

  _createDrawer(drawerTrigger) {
    return Drawer.factory(drawerTrigger, {
      animated: this._config.animated
    });
  }

  activateMenuItem(menuItem) {
    const currentlyActiveMenuItem = this.getActiveMenuItem();
    const currentlySelectedMenuItem = menuItem.parentNode.querySelector(`li a.${MENU_ITEM_UNSELECTED_CLASS}`);

    if (menuItem === currentlyActiveMenuItem) {
      return;
    }

    if (this._config.animated) {
      if (currentlyActiveMenuItem) {
        this._slidingBorder.hide();
        this._slidingBorder.moveSlidingBorderToChild(
          this._getElementToMoveTo(currentlyActiveMenuItem)
        );
      }
      this._slidingBorder.show();
    }

    Util.checkAddClass(menuItem, chi.classes.ACTIVE);
    Util.checkRemoveClass(currentlySelectedMenuItem, MENU_ITEM_UNSELECTED_CLASS);
    Util.checkRemoveClass(currentlyActiveMenuItem, chi.classes.ACTIVE);

    if (this._config.animated) {
      this._slidingBorder.moveSlidingBorderToChild(
        this._getElementToMoveTo(menuItem)
      );
    }
  }

  activateDrawerMenuItem(menuItem) {
    const currentlyActiveDrawerMenuItem = this.getDrawerActiveMenuItem();

    if (menuItem === currentlyActiveDrawerMenuItem) {
      return;
    }

    if (!menuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`)) {
      Util.checkAddClass(menuItem, chi.classes.ACTIVE);
      this.drawerMenuItemRemoveUnselected();
    }

    if (currentlyActiveDrawerMenuItem) {
      const currentlyActiveItemList = currentlyActiveDrawerMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);
      const currentlyActiveDrawerItemSubtab = this.getActiveDrawerItemSubtab();

      if (!menuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`)) {
        Util.checkRemoveClass(currentlyActiveDrawerItemSubtab, chi.classes.ACTIVE);
        Util.checkRemoveClass(currentlyActiveDrawerMenuItem, chi.classes.ACTIVE);
      }

      if (currentlyActiveItemList) {
        Util.checkRemoveClass(currentlyActiveDrawerMenuItem, DRAWER_ITEM_LIST_EXPANDED);
        Util.checkRemoveClass(currentlyActiveItemList, chi.classes.TRANSITIONING);
        currentlyActiveItemList.style.removeProperty('height');
      }
    }
  }

  menuItemRemoveUnselected() {
    const currentlyActiveMenuItem = this.getActiveMenuItem();

    if (currentlyActiveMenuItem) {
      const unselectedMenuItem = currentlyActiveMenuItem.querySelector(`a.${MENU_ITEM_UNSELECTED_CLASS}`);

      Util.checkRemoveClass(unselectedMenuItem, MENU_ITEM_UNSELECTED_CLASS);
    }
  }

  drawerMenuItemRemoveUnselected() {
    const drawerActiveMenuItem = this.getDrawerActiveMenuItem();

    if (drawerActiveMenuItem && Util.checkHasClass(drawerActiveMenuItem, MENU_ITEM_UNSELECTED_CLASS)) {
      Util.checkRemoveClass(drawerActiveMenuItem, MENU_ITEM_UNSELECTED_CLASS);
    }
  }

  resetActiveDrawerMenuItem() {
    const drawerExpandedMenuItem = this.getDrawerExpandedMenuItem();
    const currentlyActiveDrawerItemSubtab = this.getActiveDrawerItemSubtab();

    this.drawerMenuItemRemoveUnselected();

    if (drawerExpandedMenuItem) {
      const drawerExpandedMenuItemList = drawerExpandedMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);

      if (drawerExpandedMenuItemList &&
        !drawerExpandedMenuItemList.querySelector(`ul li a.${chi.classes.ACTIVE}`)) {
          drawerExpandedMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`).style.removeProperty('height');
          Util.checkRemoveClass(drawerExpandedMenuItem, DRAWER_ITEM_LIST_EXPANDED);
      }
    }

    if (currentlyActiveDrawerItemSubtab) {
      let drawerMenuItemToActivate;

      for (let cur = currentlyActiveDrawerItemSubtab;
        cur && !Util.checkHasClass(cur, DRAWER_LINKLIST_CLASS);
        cur = cur.parentNode) {
        drawerMenuItemToActivate = cur;
      }

      Util.checkAddClass(drawerMenuItemToActivate, chi.classes.ACTIVE);
      Util.checkAddClass(drawerMenuItemToActivate, DRAWER_ITEM_LIST_EXPANDED);
    }
  }

  toggleDrawerItemList(drawerMenuItem) {
    const activeDrawerMenuItem = this.getDrawerActiveMenuItem();
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

    if (drawerMenuItem !== activeDrawerMenuItem &&
        !Util.checkHasClass(drawerMenuItem, DRAWER_ITEM_LIST_EXPANDED)) {
      Util.checkAddClass(activeDrawerMenuItem, MENU_ITEM_UNSELECTED_CLASS);
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

  hideAll() {
    this._drawers.forEach(function (drawer) {
      drawer.hide();
    });
    this.menuItemRemoveUnselected();
    this.resetActiveDrawerMenuItem();
  }

  _isLinkAMenuItemActivator(anchorElem) {
    return !!Util.getTarget(anchorElem);
  }

  _handlerClickOnDrawer(e) {
    let drawer, activator, menuItem, menuItemLink, drawerMenuItem;

    if (Util.checkHasClass(e.target, '-close') ||
      Util.checkHasClass(e.target.parentNode, '-close') ||
      Util.checkHasClass(e.target.parentNode.parentNode, '-close')) {
      this.menuItemRemoveUnselected();
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

    if (activator && drawer.id) {
      menuItemLink = this._getMenuItemLink(drawer);
      menuItem = menuItemLink.parentNode;
      if (drawerMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`) === null ||
        Util.checkHasClass(activator, DRAWER_ITEM_TAB_CLASS)) {
        this.close(menuItemLink);
      }

      if (drawerMenuItem) {
        const drawerMenuItemList = drawerMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);

        if (drawerMenuItemList) {
          if (Util.checkHasClass(activator, SIDENAV_TITLE_CLASS) ||
            activator.parentNode.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`)) {
            e.preventDefault();
          }

          if (Util.checkHasClass(activator, DRAWER_ITEM_TAB_CLASS)) {
            const currentlyActiveDrawerItemSubtab = this.getActiveDrawerItemSubtab();

            this.drawerMenuItemRemoveUnselected();
            Util.checkRemoveClass(this.getDrawerActiveMenuItem(), chi.classes.ACTIVE);
            Util.checkAddClass(activator, chi.classes.ACTIVE);

            if (currentlyActiveDrawerItemSubtab && currentlyActiveDrawerItemSubtab !== activator) {
              Util.checkRemoveClass(currentlyActiveDrawerItemSubtab, chi.classes.ACTIVE);
            }
          } else {
            this.toggleDrawerItemList(drawerMenuItem);
          }
        }

        if (!drawerMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`) ||
          Util.checkHasClass(activator, DRAWER_ITEM_TAB_CLASS)) {
          this.activateMenuItem(menuItem);
        }
        this.activateDrawerMenuItem(drawerMenuItem);
      }
    }
  }

  _handlerDrawerShown(e) {
    const menuItemLink = this._getMenuItemLink(e.target);

    if (menuItemLink) {
      const drawer = this._createDrawer(menuItemLink);
      this._drawers.forEach(function (otherDrawer) {
        if (otherDrawer !== drawer) {
          otherDrawer.hide();
        }
      });

      if (Util.checkHasClass(this._elem, '-global-nav')) {
        const activeItemLink = menuItemLink.parentNode.parentNode.querySelector(`li.${chi.classes.ACTIVE} a`);

        if (activeItemLink) {
          if (!Util.checkHasClass(menuItemLink.parentNode, chi.classes.ACTIVE)) {
            Util.checkAddClass(activeItemLink, MENU_ITEM_UNSELECTED_CLASS);
          } else if (Util.checkHasClass(activeItemLink, MENU_ITEM_UNSELECTED_CLASS)) {
            Util.checkRemoveClass(activeItemLink, MENU_ITEM_UNSELECTED_CLASS);
          }
        }
      }
    }
  }

  _handlerDrawerHide() {
    const allDrawersClosed = this._drawers.every(drawer => !Util.checkHasClass(drawer._elem, chi.classes.ACTIVE));

    if (allDrawersClosed) {
      this.menuItemRemoveUnselected();
    }
    this.resetActiveDrawerMenuItem();
  }

  _getMenuItemLink(drawerElem) {
    if (drawerElem.id) {
      return this._elem.querySelector('a[href="#' + drawerElem.id + '"]');
    }
    return null;
  }

  _getElementToMoveTo(menuItem) {
    if (!menuItem) {
      return menuItem;
    }
    let found = false;
    let child = null;
    for (let i = 0; i < menuItem.childNodes.length && !found; i++) {
      if (menuItem.childNodes[i].nodeName === 'A') {
        child = menuItem.childNodes[i];
        found = true;
      } else if (menuItem.childNodes[i].nodeName !== 'UL') {
        child = menuItem.childNodes[i];
      }
    }
    return child || menuItem;
  }

  dispose() {
    this._config = null;

    this._elem = null;
    this._drawersContainer = null;
    this._clickOnComponent = null;
    this._autocloseTimeoutId = null;
    if (this._slidingBorder) {
      this._slidingBorder.dispose();
    }
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  static get componentSelector() {
    return COMPONENT_SELECTOR;
  }

  _configureAutoClose() {

    const self = this;

    this._addEventHandler(
      this._elem,
      'click',
      function () {
        self._clickOnComponent = true;
      }
    );

    this._addEventHandler(
      document,
      'click',
      function () {
        if (self._clickOnComponent) {
          self._clickOnComponent = false;
        } else {
          self.hideAll();
        }
      }
    );

    this._addEventHandler(
      this._elem,
      'mouseleave',
      function (e) {
        if (
          self._config.autoClose !== false &&
          e.target === self._elem &&
          self._config.autoClose >= 0
        ) {
          self._autocloseTimeoutId = window.setTimeout(function () {
            self.hideAll();
          }, self._config.autoClose);
        }
      }
    );

    this._addEventHandler(
      this._elem,
      'mouseenter',
      function (e) {
        if (e.target === self._elem) {
          window.clearTimeout(self._autocloseTimeoutId);
        }
      }
    );
  }
}

const factory = Component.factory.bind(Sidenav);
export { Sidenav, factory, COMPONENT_TYPE, COMPONENT_SELECTOR as SIDENAV_COMPONENT_SELECTOR };

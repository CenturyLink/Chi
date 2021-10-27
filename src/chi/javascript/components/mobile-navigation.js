import { Component } from '../core/component';
import { Util } from '../core/util.js';
import { chi } from '../core/chi';
import { Drawer, DRAWER_ANIMATION_DURATION } from './drawer';
import { Dropdown } from './dropdown';
import { Accordion } from './accordion';

const CHI_TABS_CLASS = 'chi-tabs';
const COMPONENT_TYPE = 'mobilenav';
const DRAWER_CLASS = 'chi-drawer';
const DRAWER_CONTENT_CLASS = 'chi-drawer__content';
const DRAWER_HEADER_CLASS = 'chi-drawer__header';
const DRAWER_ITEM_LIST_ANIMATION_DURATION = 75;
const DRAWER_ITEM_LIST_CLASS = 'chi-mobile-nav__list-item-list';
const DRAWER_ITEM_TAB_CLASS = 'chi-mobile-nav-item-tab';
const DRAWER_ITEM_LIST_EXPANDED = '-expanded';
const DRAWER_NAV_LIST = 'chi-mobile-nav__list';
const MOBILE_NAV_CONTENT = 'chi-mobile-nav__content';
const DRAWER_SUBITEM_LIST_TRIGGER_CLASS = 'chi-drawer__subitem-list-trigger';
const DROPDOWN_TRIGGER = 'chi-dropdown__trigger';
const FIRST_LEVEL_DRAWER_CLASS = 'chi-mobile-nav__first-level';
const FIRST_LEVEL_DRAWER_CONTENT_CLASS = 'chi-mobile-nav__first-level-content';
const MOBILENAV_DRAWERS_CLASS = 'chi-mobile-nav__drawers';
const MOBILENAV_LIST_TITLE = 'chi-mobile-nav__list-title';
const SECOND_LEVEL_SHOWN_CLASS = '-second-level-shown';
const ACCORDION_CLASS = 'chi-accordion';
const ACCORDION_ITEM_CLASS = "chi-accordion__item";

class MobileNav extends Component {
  constructor(elem) {
    super(elem);
    this._drawersContainer = document.querySelector('.' + MOBILENAV_DRAWERS_CLASS);
    this._firstLevelDrawer = null;
    this._drawers = [];
    this._dropdowns = [];
    this._accordions = [];
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
    const firstLevelDropdownTriggers = this._mobileNavElement.querySelectorAll(`.${DRAWER_CLASS}.${FIRST_LEVEL_DRAWER_CLASS} .${DROPDOWN_TRIGGER}`);
    const self = this;

    if (firstLevelDrawer) {
      const firstLevelCloseButton = firstLevelDrawer.querySelector(`.${chi.classes.CLOSE}`);

      this._firstLevelDrawer = Drawer.factory(this._elem, {
        animated: true,
        target: firstLevelDrawer
      });
      this._addEventHandler(
        firstLevelCloseButton,
        'click',
        () => {
          self._hideMobileNav();
        }
      );
    }

    Array.prototype.forEach.call(
      firstLevelMenuItems,
      (menuItem) => {
        const drawerId = menuItem.getAttribute('href');
        const drawer = drawerId[0] === '#' ?
            document.querySelector(`.chi-drawer${drawerId}`) :
            null;

        if (drawer) {
          const returnBackButton = drawer.querySelector(`.${DRAWER_HEADER_CLASS} button.${chi.classes.BACK}`);
          const firstLevelContent = self._mobileNavElement.querySelector(`.${FIRST_LEVEL_DRAWER_CONTENT_CLASS}`);

          this._addEventHandler(
            menuItem,
            'click',
            function(e) {
              e.preventDefault();
              Util.addClass(drawer, chi.classes.ACTIVE);
              Util.addClass(firstLevelContent, SECOND_LEVEL_SHOWN_CLASS);
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
        const dropdownInstant = Dropdown.factory(dropdown, { dropdownElem: document.querySelector(`#${dropdownElemId}`) });

        this._dropdowns.push(dropdownInstant);
      }
    );
    this._initSecondLevelDrawers();
    this._addEventHandler(
      this._firstLevelDrawer._drawerElem,
      'chi.drawer.hide',
      function() {
        const firstLevelDrawerContent = self._mobileNavElement.querySelector(`.${FIRST_LEVEL_DRAWER_CONTENT_CLASS}`);
        const activeSecondLevelDrawer = self._mobileNavElement.querySelector(`.${MOBILENAV_DRAWERS_CLASS} .${DRAWER_CLASS}.${chi.classes.ACTIVE}`);

        if (activeSecondLevelDrawer) {
          setTimeout(
            function() {
              Util.removeClass(activeSecondLevelDrawer, chi.classes.ACTIVE);
              Util.removeClass(firstLevelDrawerContent, SECOND_LEVEL_SHOWN_CLASS);
            },
            DRAWER_ANIMATION_DURATION
          );
        }
        self.resetActiveDrawerMenuItem();
      });
  }

  _initSecondLevelDrawers() {
    Array.prototype.forEach.call(
      this._drawers,
      (drawer) => {
        const drawerMenuItems = drawer.querySelectorAll(`.${DRAWER_CONTENT_CLASS} .${DRAWER_NAV_LIST} > li > a`);
        const drawerAccordionElem = drawer
          .querySelector(`.${DRAWER_CONTENT_CLASS} .${ACCORDION_CLASS}`);

        if (drawerAccordionElem) {
          const accordion = Accordion.factory(drawerAccordionElem, { expansionMode: 'single' });

          this._accordions.push(accordion);
          this._initAccordionActivators(accordion);
        }

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

  _initAccordionActivators(accordion) {
    const accordionElem = accordion._elem;

    if (accordionElem) {
      const activators = accordionElem.querySelectorAll('a');
  
      Array.prototype.forEach.call(
        activators,
        (anchor) => {
          anchor.addEventListener('click', () => {
            this._activateAccordionAnchor(anchor, accordion);
          });
        }
      );
    }
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
    const drawerId = menuItem.getAttribute('href');

    const menuItemDrawer = drawerId[0] === '#' ?
      this._drawersContainer.querySelector(`.${DRAWER_CLASS}${menuItem.getAttribute('href')}`) :
      null;

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
      // legacy
      const menuItemToClose = this._drawersContainer.querySelector(`.${DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} .${DRAWER_NAV_LIST} li.${chi.classes.ACTIVE}`);
      const accordionMenuItemToClose = this._getActiveAccordionAnchor();

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

      if (accordionMenuItemToClose) {
        this._deactivateAccordionItemAncestors(accordionMenuItemToClose);
      }
    }
  }

  _deactivateAccordionItemAncestors(anchor) {
    for (
      let cur = anchor;
      cur && !Util.hasClass(cur, MOBILENAV_DRAWERS_CLASS);
      cur = cur.parentNode
    ) {
      if (Util.hasClass(cur, ACCORDION_ITEM_CLASS)) {
        Util.removeClass(cur, chi.classes.ACTIVE);
        Util.removeClass(cur, chi.classes.EXPANDED);
      }
    }

    Util.removeClass(anchor, chi.classes.ACTIVE);
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

  _getActiveAccordionItems() {
    const activeAccordionItems = this._drawersContainer
      .querySelectorAll(`.${DRAWER_CLASS} .${ACCORDION_CLASS} .${ACCORDION_ITEM_CLASS}.${chi.classes.ACTIVE}`);

    return activeAccordionItems || null;
  }

  _getActiveAccordionAnchor() {
    const activeItem = this._drawersContainer.querySelector(`.${DRAWER_CLASS} .${ACCORDION_CLASS} a.${chi.classes.ACTIVE}`);

    return activeItem || null;
  }

  _getAssociatedMenuItem(drawerId) {
    return this._firstLevelDrawer._drawerElem.querySelector(
      'ul > li a[href="#' + drawerId + '"'
    );
  }

  _deactivatePreviousAccordionAnchor(anchor, accordion) {
    const ancestorAccordionItems = [];

    if (anchor) {
      const activeAccordionItems = this._getActiveAccordionItems();

      Util.addClass(anchor, chi.classes.ACTIVE);
      this._hideMobileNav();

      for (
        let cur = anchor;
        cur && !Util.hasClass(cur, MOBILENAV_DRAWERS_CLASS);
        cur = cur.parentNode
      ) {
        if (Util.hasClass(cur, ACCORDION_ITEM_CLASS)) {
          const activeSiblings = cur.parentNode.querySelector(`.${ACCORDION_ITEM_CLASS}.${chi.classes.ACTIVE}`);

          ancestorAccordionItems.push(cur);
          if (activeSiblings) {
            Array.prototype.forEach.call(
              activeSiblings,
              activeItem => {
                Util.removeClass(activeItem, chi.classes.ACTIVE);
              }
            );
          }
          Util.addClass(cur, chi.classes.ACTIVE);
        } else if (Util.hasClass(cur, DRAWER_CLASS)) {
          const associatedMenuItem = this._getAssociatedMenuItem(cur.getAttribute('id'));

          this._activateFirstLevelMenuItem(associatedMenuItem);
        }
      }

      if (activeAccordionItems) {
        Array.prototype.forEach.call(
          activeAccordionItems,
          (item) => {
            if (!ancestorAccordionItems.includes(item)) {
              Util.removeClass(item, chi.classes.ACTIVE);
              accordion.hide(item);
            }
          }
        );
      }

      Array.prototype.forEach.call(
        this._accordions,
        (accordionInstance) => {
          if (accordionInstance !== accordion) {
            accordionInstance.collapseAll();
          }
        }
      );
    }
  }

  _activateAccordionAnchor(anchor, accordion) {
    const activeItem = this._getActiveAccordionAnchor();

    if (activeItem) {
      Util.removeClass(activeItem, chi.classes.ACTIVE);
    }

    this._deactivatePreviousAccordionAnchor(anchor, accordion);
  }

  _handleClickOnSecondLevelDrawer(e) {
    let drawer;
    let activator;
    let drawerMenuItem;

    if (Util.checkHasClass(e.target, chi.classes.CLOSE) ||
      Util.checkHasClass(e.target.parentNode, chi.classes.CLOSE) ||
      Util.checkHasClass(e.target.parentNode.parentNode, chi.classes.CLOSE)) {
      this._hideMobileNav();
    }

    for (let currentNode = e.target; currentNode && currentNode !== this._drawersContainer; currentNode = currentNode.parentNode) {
      if (Util.checkHasClass(currentNode, DRAWER_CLASS)) {
        drawer = currentNode;
      } else if (
        (currentNode.nodeName === 'A' || currentNode.nodeName === 'BUTTON') &&
        !Util.checkHasClass(currentNode, chi.classes.CLOSE)
      ) {
        activator = currentNode;
      } else if (currentNode.nodeName === 'LI') {
        drawerMenuItem = currentNode;
      }
    }

    if (drawerMenuItem) {
      const drawerMenuItemList = drawerMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);

      if (activator) {
        if (drawerMenuItemList) {
          if (Util.checkHasClass(activator, MOBILENAV_LIST_TITLE) ||
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
    const secondLevelDrawer = this._drawers.filter(drawer => Util.hasClass(drawer, chi.classes.ACTIVE))[0];

    if (firstLevelDrawer) {
      firstLevelDrawer.hide();
    }
    if (secondLevelDrawer) {
      const firstLevelDrawerContent = this._mobileNavElement.querySelector(`.${FIRST_LEVEL_DRAWER_CONTENT_CLASS}`);

      setTimeout(
        function() {
          Util.removeClass(secondLevelDrawer, chi.classes.ACTIVE);
          Util.removeClass(firstLevelDrawerContent, SECOND_LEVEL_SHOWN_CLASS);
        },
        DRAWER_ANIMATION_DURATION
      );
    }
  }

  drawerMenuItemRemoveUnselected() {
    const drawerActiveMenuItem = this._getActiveSecondLevelItem();

    if (drawerActiveMenuItem && Util.checkHasClass(drawerActiveMenuItem, chi.classes.UNSELECTED)) {
      Util.checkRemoveClass(drawerActiveMenuItem, chi.classes.UNSELECTED);
    }
  }

  _toggleDrawerItemList(drawerMenuItem) {
    const activeDrawerMenuItem = this._mobileNavElement.querySelector(`.${MOBILENAV_DRAWERS_CLASS} .${DRAWER_CLASS} .${DRAWER_CONTENT_CLASS} .${DRAWER_NAV_LIST} li.${chi.classes.ACTIVE}`);
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
          drawerMenuItemList.style.height = '0';
        }, function() {
          drawerMenuItemList.style.height = drawerMenuItemListHeight;
          Util.checkAddClass(drawerMenuItem, DRAWER_ITEM_LIST_EXPANDED);
        }, function() {
          Util.checkRemoveClass(drawerMenuItemList, chi.classes.TRANSITIONING);
        }, DRAWER_ITEM_LIST_ANIMATION_DURATION
      );
    } else {
      this._menuItemAnimation = Util.threeStepsAnimation(
        function() {
          calculateHeight();
          Util.checkAddClass(drawerMenuItemList, chi.classes.TRANSITIONING);
          drawerMenuItemList.style.height = drawerMenuItemListHeight;
        }, function() {
          drawerMenuItemList.style.height = '0';
          Util.checkRemoveClass(drawerMenuItem, DRAWER_ITEM_LIST_EXPANDED);
        }, function() {
          Util.checkRemoveClass(drawerMenuItemList, chi.classes.TRANSITIONING);
          drawerMenuItemList.style.removeProperty('height');
        }, DRAWER_ITEM_LIST_ANIMATION_DURATION
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
    this._firstLevelDrawer.dispose();
    this._config = null;
    this._elem = null;
    this._drawersContainer = null;
    this._mobileNavElement = null;
    this._firstLevelDrawer = null;
    this._drawers.length = 0;
    this._dropdowns.forEach(dropdown => dropdown.dispose());
    this._dropdowns.length = 0;
    this._removeEventHandlers();
  }

  _hideMobileNav() {
    this._firstLevelDrawer.hide();
  }
}

const factory = Component.factory.bind(MobileNav);
export { MobileNav, factory };

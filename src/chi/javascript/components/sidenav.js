import { Component } from "../core/component";
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
const CHI_DRAWER_CONTENT = 'chi-drawer__content';
const DRAWER_LINKLIST_CLASS = "chi-sidenav__drawer-list";
const DRAWER_ITEM_LIST_CLASS = "chi-sidenav__drawer-item-list";
const DRAWER_ITEM_TAB_CLASS = "chi-sidenav__drawer-item-tab";
const DRAWER_SUBITEM_TRIGGER_CLASS = "chi-drawer__subitem-list-trigger";

const DEFAULT_CONFIG = {
  animated: true,
  autoClose: false,
  openOnHover: false
};

class Sidenav extends Component {

  constructor(elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
    let self = this;
    this._drawersContainer = this._elem.querySelector('.' + SIDENAV_DRAWERS_CLASS);
    this._drawers = [];
    this._clickOnComponent = false;
    this._autocloseTimeoutId = null;
    this._menuItemAnimation = null;
    this._preventCloseOnClick = function(e) {
      e.stopPropagation();
    };

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
    }

    this.singleLevelMenuItems();
    this.syncDrawers();
    this._configureAutoClose();
    this._initDrawersOnHover();
    this._initSubtabTriggers();
  }

  syncDrawers() {
    const previousDrawers = this._drawers.slice(0);
    const self = this;

    Array.prototype.forEach.call(
      this._elem.querySelectorAll('.' + LINKLIST_CLASS + '>li>a'),
      function (menuItemLink) {
        const drawerElem = Util.getTarget(menuItemLink);
        if (Util.checkHasClass(drawerElem, DRAWER_CLASS)) {
          const drawer = Drawer.factory(menuItemLink, {
            persistOnClick: true
          });
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

  _resetDrawerAnimation() {
    if (this._config.animated) {
      this._drawers.forEach(function(drawer) {
        drawer._drawerElem.classList.add(chi.classes.ANIMATED);
      });
    }
  }

  _initDrawersOnHover() {
    const sidenavContent = this._elem.querySelector(`.${SIDENAV_CONTENT_CLASS}`);

    if (this._config.openOnHover) {
      const disableAnimation = (drawer) => {
        this._drawers.forEach((otherDrawer) => {
          if (otherDrawer !== drawer) {
            otherDrawer._drawerElem.classList.remove(chi.classes.ANIMATED);
          }
        });
      };
      const _openDrawerOnMouseEnter = (drawer) => {
        drawer.show();
        this._elem.addEventListener(
          'click',
          this._preventCloseOnClick
        );
        disableAnimation(drawer);
      };

      this._drawers.forEach((drawer) => {
        this._addEventHandler(
          drawer._elem,
          'mouseenter',
          () => {
            const selectedMenuItem = this.getSelectedMenuItem();

            if (selectedMenuItem) {
              Util.removeClass(selectedMenuItem, chi.classes.ACTIVE);
            }
            _openDrawerOnMouseEnter(drawer)
          });
      });

      sidenavContent.addEventListener('mouseover', () => {
        if (!sidenavContent.querySelector(':hover')) {
          this.hideAll();
        }
      });
    }
  }

  _initSubtabTriggers() {
    const secondLevelItems = this._elem.querySelectorAll(`.${DRAWER_CLASS} .${CHI_DRAWER_CONTENT} ul.${DRAWER_LINKLIST_CLASS} li`);

    Array.prototype.forEach.call(
      secondLevelItems,
      (secondLevelItem) => {
        if (secondLevelItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`)) {
          Util.addClass(secondLevelItem.querySelector('a'), DRAWER_SUBITEM_TRIGGER_CLASS);
        }
      }
    )
  }

  singleLevelMenuItems() {
    Array.prototype.forEach.call(
      this._elem.querySelectorAll(`nav > ul.${LINKLIST_CLASS} > li`),
      (singleLevelMenuItem) => {
        const menuElementLink = singleLevelMenuItem.querySelector('a').getAttribute('href');
        const menuElementDrawer =
        menuElementLink[0] === '#' ?
        this._elem.querySelector(`.chi-drawer${menuElementLink}`) :
        null;

        if (!menuElementDrawer) {
          let menuItemToActivate;

          if (this._config.openOnHover) {
            this._addEventHandler(
              singleLevelMenuItem,
              'mouseenter',
              (e) => {
                const activeMenuItem = this.getActiveMenuItem();
                const menuItemAnchorToSelect = singleLevelMenuItem.querySelector('a');

                this.hideAll();
                if (menuItemAnchorToSelect) {
                  Util.addClass(menuItemAnchorToSelect, chi.classes.ACTIVE);
                }
                if (activeMenuItem !== e.target) {
                  Util.addClass(activeMenuItem.querySelector('a'), chi.classes.UNSELECTED);
                }
            });
          }

          this._addEventHandler(
            singleLevelMenuItem,
            'click',
            (e) => {
            const activeMenuItem = this.getActiveMenuItem();

            for (
              let cur = e.target;
              cur && !Util.hasClass(cur, LINKLIST_CLASS);
              cur = cur.parentNode
            ) {
              menuItemToActivate = cur;
            }

            if (activeMenuItem) {
              Util.removeClass(activeMenuItem, chi.classes.ACTIVE);
              Array.prototype.forEach.call(
                this._elem
                .querySelectorAll(
                  `.chi-drawer .${CHI_DRAWER_CONTENT} .${DRAWER_LINKLIST_CLASS} li.${chi.classes.ACTIVE},
                  .chi-drawer .${CHI_DRAWER_CONTENT} .${DRAWER_LINKLIST_CLASS} li a.${DRAWER_ITEM_TAB_CLASS}.${chi.classes.ACTIVE}`
                ),
                (activeDrawerElement) => {
                  Util.removeClass(activeDrawerElement, chi.classes.ACTIVE);
                  if (Util.hasClass(activeDrawerElement, chi.classes.EXPANDED)) {
                    Util.removeClass(activeDrawerElement, chi.classes.EXPANDED);
                  }
                });
              this.hideAll();
            }
            Util.addClass(menuItemToActivate, chi.classes.ACTIVE);
          });
        }
      }
    );
  }

  getActiveMenuItem() {
    return this._elem.querySelector(
      'ul.' + LINKLIST_CLASS + '>li.' + chi.classes.ACTIVE
    );
  }

  getSelectedMenuItem() {
    return this._elem.querySelector(
      'ul.' + LINKLIST_CLASS + '>li a.' + chi.classes.ACTIVE
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
      'ul.' + DRAWER_LINKLIST_CLASS + '>li.' + chi.classes.EXPANDED
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
    const currentlySelectedMenuItem = menuItem.parentNode.querySelector(`li a.${chi.classes.UNSELECTED}`);

    if (menuItem === currentlyActiveMenuItem) {
      return;
    }

    Util.checkAddClass(menuItem, chi.classes.ACTIVE);
    Util.checkRemoveClass(currentlySelectedMenuItem, chi.classes.UNSELECTED);
    Util.checkRemoveClass(currentlyActiveMenuItem, chi.classes.ACTIVE);
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
        Util.checkRemoveClass(currentlyActiveDrawerMenuItem, chi.classes.EXPANDED);
        Util.checkRemoveClass(currentlyActiveItemList, chi.classes.TRANSITIONING);
        currentlyActiveItemList.style.removeProperty('height');
      }
    }
  }

  menuItemRemoveUnselected() {
    const currentlyActiveMenuItem = this.getActiveMenuItem();

    if (currentlyActiveMenuItem) {
      const unselectedMenuItem = currentlyActiveMenuItem.querySelector(`a.${chi.classes.UNSELECTED}`);

      Util.checkRemoveClass(unselectedMenuItem, chi.classes.UNSELECTED);
    }
  }

  drawerMenuItemRemoveUnselected() {
    const drawerActiveMenuItem = this.getDrawerActiveMenuItem();

    if (drawerActiveMenuItem && Util.checkHasClass(drawerActiveMenuItem, chi.classes.UNSELECTED)) {
      Util.checkRemoveClass(drawerActiveMenuItem, chi.classes.UNSELECTED);
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
          Util.checkRemoveClass(drawerExpandedMenuItem, chi.classes.EXPANDED);
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
      Util.checkAddClass(drawerMenuItemToActivate, chi.classes.EXPANDED);
    }
  }

  toggleDrawerItemList(drawerMenuItem) {
    const activeDrawerMenuItem = this.getDrawerActiveMenuItem();
    const drawerMenuItemList = drawerMenuItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`);
    const expandedItem = drawerMenuItem.parentNode.querySelector(`.${chi.classes.EXPANDED}`);
    let drawerMenuItemListHeight;

    if (this._menuItemAnimation) {
      Util.stopThreeStepsAnimation(this._menuItemAnimation, false);
    }

    if (expandedItem && expandedItem !== drawerMenuItem) {
      Util.checkRemoveClass(expandedItem, chi.classes.EXPANDED);
      expandedItem.querySelector(`.${DRAWER_ITEM_LIST_CLASS}`).style.removeProperty('height');
    }

    if (drawerMenuItem !== activeDrawerMenuItem &&
        !Util.checkHasClass(drawerMenuItem, chi.classes.EXPANDED)) {
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

    if (!Util.checkHasClass(drawerMenuItem, chi.classes.EXPANDED)) {
      this._menuItemAnimation = Util.threeStepsAnimation(
        function() {
          calculateHeight();
          Util.checkAddClass(drawerMenuItemList, chi.classes.TRANSITIONING);
          drawerMenuItemList.style.height = '0px';
        }, function() {
          drawerMenuItemList.style.height = drawerMenuItemListHeight;
          Util.checkAddClass(drawerMenuItem, chi.classes.EXPANDED);
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
          Util.checkRemoveClass(drawerMenuItem, chi.classes.EXPANDED);
        }, function() {
          Util.checkRemoveClass(drawerMenuItemList, chi.classes.TRANSITIONING);
          drawerMenuItemList.style.removeProperty('height');
        }, 75
      );
    }
  }

  hideAll() {
    const selectedMenuItem = this.getSelectedMenuItem();

    if (selectedMenuItem) {
      selectedMenuItem.removeEventListener(
        'click',
        this._preventCloseOnClick
      );
    }
    this._drawers.forEach((drawer) => {
      drawer.hide();
    });
    this._resetDrawerAnimation();
    this.menuItemRemoveUnselected();
    this.resetActiveDrawerMenuItem();
    if (this._config.openOnHover) {
      Util.checkRemoveClass(selectedMenuItem, chi.classes.ACTIVE);
    }
  }

  _isLinkAMenuItemActivator(anchorElem) {
    return !!Util.getTarget(anchorElem);
  }

  _handlerClickOnDrawer(e) {
    let drawer, activator, menuItem, menuItemLink, drawerMenuItem;

    if (Util.checkHasClass(e.target, chi.classes.CLOSE) ||
      Util.checkHasClass(e.target.parentNode, chi.classes.CLOSE) ||
      Util.checkHasClass(e.target.parentNode.parentNode, chi.classes.CLOSE)) {
      const selectedMenuItem = this.getSelectedMenuItem();

      if (selectedMenuItem) {
        selectedMenuItem.removeEventListener(
          'click',
          this._preventCloseOnClick
        );
      }

      this.menuItemRemoveUnselected();
      this._resetDrawerAnimation();
    }

    for (let cur = e.target; cur && cur !== this._drawersContainer; cur = cur.parentNode) {
      if (Util.checkHasClass(cur, DRAWER_CLASS)) {
        drawer = cur;
      } else if (
        (cur.nodeName === 'A' || cur.nodeName === 'BUTTON') &&
        !Util.checkHasClass(cur, chi.classes.CLOSE)
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

      menuItemLink.addEventListener(
        'click',
        this._preventCloseOnClick
      );
      this._drawers.forEach(function (otherDrawer) {
        if (otherDrawer !== drawer) {
          otherDrawer.hide();
        }
      });

      const activeItemLink = menuItemLink.parentNode.parentNode.querySelector(`li.${chi.classes.ACTIVE} a`);

      if (activeItemLink) {
        if (!Util.checkHasClass(menuItemLink.parentNode, chi.classes.ACTIVE)) {
          Util.checkAddClass(activeItemLink, chi.classes.UNSELECTED);
        } else if (Util.checkHasClass(activeItemLink, chi.classes.UNSELECTED)) {
          Util.checkRemoveClass(activeItemLink, chi.classes.UNSELECTED);
        }
      }
    }
  }

  _handlerDrawerHide() {
    const selectedSingleLevel = this._elem.querySelector(`nav ul li a.${chi.classes.ACTIVE}`);
    const allDrawersClosed = this._drawers.every(drawer => !Util.checkHasClass(drawer._elem, chi.classes.ACTIVE)) && !selectedSingleLevel;

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

  dispose() {
    this._config = null;

    this._elem = null;
    this._drawersContainer = null;
    this._clickOnComponent = null;
    this._autocloseTimeoutId = null;
    this._removeEventHandlers();
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
      function (e) {
        if (self._clickOnComponent) {
          self._clickOnComponent = false;
          if (self._config.openOnHover) {
            if (self._elem.querySelector('nav').contains(e.target)) {
              for (let cur = e.target; cur.nodeName !== 'LI'; cur = cur.parentNode) {
                if (cur.nodeName === 'A') {
                  const idDrawerToCheck = cur.getAttribute('href');
                  const drawerToCheck = self._elem.querySelector(`.${SIDENAV_DRAWERS_CLASS} ${idDrawerToCheck}`);

                  if (drawerToCheck) {
                    if (!drawerToCheck.classList.contains(chi.classes.ANIMATED)) {
                      self._resetDrawerAnimation();
                    }
                  }
                }
              }
            } else {
              self._resetDrawerAnimation();
            }
          }
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

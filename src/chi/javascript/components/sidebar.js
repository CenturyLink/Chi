import {Component} from "../core/component";
import {SlidingBorder, ANIMATION_DURATION as BORDER_ANIMATION_DURATION} from "./auxiliary/sliding-border";
import {Util} from "../core/util.js";
import {Drawer, EVENTS as DRAWER_EVENTS} from "./drawer";

const CLASS_ACTIVE = "-active";
const CLASS_ANIMATED = "-animated";
const COMPONENT_SELECTOR = '.m-sidebar';
const COMPONENT_TYPE = "sidebar";
const DRAWER_CLASS = "m-drawer";
const LINKLIST_CLASS = 'm-sidebar__link-list';
const SIDEBAR_CONTENT_CLASS = 'm-sidebar__content';
const SIDEBAR_DRAWERS_CLASS = 'm-sidebar__drawers';
const DRAWER_LINKLIST_CLASS = "m-sidebar__drawer-link-list";

const DEFAULT_CONFIG = {
  animated: true,
  waitForAnimations: false
};

class Sidebar extends Component {

  constructor (elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
    let self = this;
    this._slidingBorder = null;
    this._drawersContainer = this._elem.querySelector('.' + SIDEBAR_DRAWERS_CLASS);
    this._drawers = [];

    this._addEventHandler(
      this._drawersContainer,
      'click',
      function(e) {
        self._handlerClickOnDrawer(e);
      }
    );

    this._addEventHandler(
      this._drawersContainer,
      DRAWER_EVENTS.show,
      function(e){
        self._handlerDrawerShown(e);
      }
    );

    if (this._config.animated) {
      Util.addClass(this._elem, CLASS_ANIMATED);

      this._slidingBorder = new SlidingBorder(
        this._elem,
        true,
        'div');
    }

    this.syncDrawers();
  }

  syncDrawers() {
    const previousDrawers = this._drawers.slice(0);
    const self = this;

    Array.prototype.forEach.call(
      this._elem.querySelectorAll('.' + LINKLIST_CLASS + '>li>a'),
      function(menuItemLink) {
        const drawerElem = Util.getTarget(menuItemLink);
        if (drawerElem && Util.hasClass(drawerElem, DRAWER_CLASS)) {
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

    previousDrawers.forEach(function(drawer){
      drawer.dispose();
    });
  }

  getActiveMenuItem () {
    return this._elem.querySelector(
      'ul.' + LINKLIST_CLASS + '>li.' + CLASS_ACTIVE
    );
  }

  getDrawerActiveMenuItem () {
    return this._elem.querySelector(
      'ul.' + DRAWER_LINKLIST_CLASS + '>li.' + CLASS_ACTIVE
    );
  }

  getAssociatedDrawer (menuItemLink) {
    const drawerElem = Util.getTarget(menuItemLink);
    if (drawerElem && Util.hasClass(drawerElem, DRAWER_CLASS)) {
      const drawer = Drawer.factory(menuItemLink);
      if (this._drawers.indexOf(drawer) === -1) {
        self._drawers.push(drawer);
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

  activateMenuItem(menuItem) {

    const currentlyActiveMenuItem = this.getActiveMenuItem();
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

    Util.addClass(menuItem, CLASS_ACTIVE);

    if (currentlyActiveMenuItem) {
      Util.removeClass(currentlyActiveMenuItem, CLASS_ACTIVE);
    }

    if (this._config.animated) {
      this._slidingBorder.moveSlidingBorderToChild(
        this._getElementToMoveTo(menuItem)
      );
    }
  }

  activateDrawerMenuItem(menuItem){
    const currentlyActiveMenuItem = this.getDrawerActiveMenuItem();
    if (menuItem === currentlyActiveMenuItem) {
      return;
    }
    Util.addClass(menuItem, CLASS_ACTIVE);

    if (currentlyActiveMenuItem) {
      Util.removeClass(currentlyActiveMenuItem, CLASS_ACTIVE);
    }
  }

  hideAll () {
    this._drawers.forEach(function(drawer){
      drawer.hide();
    });
  }

  _isLinkAMenuItemActivator (anchorElem) {
    return Util.getTarget(anchorElem) ? true : false;
  }

  _clickedOnAnchor (anchorElem, event) {
    if (this._isLinkAMenuItemActivator(anchorElem)) {
      event.preventDefault();
    } else {
      if (this._config.animated && this._config.waitForAnimations) {
        event.preventDefault();
        window.setTimeout(
          function(){
            window.location.href = anchorElem.getAttribute('href');
          },
          BORDER_ANIMATION_DURATION
        );
      }
    }
  }

  _handlerClickOnDrawer (e) {

    let drawer, activator, menuItem, menuItemLink, drawerMenuItem;

    for (let cur = e.target ; cur && cur !== this._drawersContainer; cur = cur.parentNode) {
      if (Util.hasClass(cur, DRAWER_CLASS)) {
        drawer = cur;
      } else if (
        (cur.nodeName === 'A' || cur.nodeName === 'BUTTON') &&
        !Util.hasClass(cur, '-close')
      ) {
        activator = cur;
      } else if (cur.nodeName === 'LI') {
        drawerMenuItem = cur;
      }
    }

    if (activator && drawer.id) {
      menuItemLink = this._getMenuItemLink(drawer);
      menuItem = menuItemLink.parentNode;
      this.close(menuItemLink);

      if (drawerMenuItem) {
        this.activateMenuItem(menuItem);
        this.activateDrawerMenuItem(drawerMenuItem);
      }
    }
  }


  _handlerDrawerShown(e) {
    const menuItemLink = this._getMenuItemLink(e.target);
    if (menuItemLink) {
      const drawer = Drawer.factory(menuItemLink);
      this._drawers.forEach(function(otherDrawer){
        if (otherDrawer !== drawer) {
          otherDrawer.hide();
        }
      });
    }
  }

  _getMenuItemLink(drawerElem) {
    if (drawerElem.id) {
      return this._elem.querySelector('a[href="#' + drawerElem.id + '"]');
    }
    return null;
  }

  _getElementToMoveTo (menuItem) {
    if (!menuItem) {
      return menuItem;
    }
    let found = false;
    let child = null;
    for (let i = 0 ; i < menuItem.childNodes.length && !found; i++) {
      if (menuItem.childNodes[i].nodeName === 'A') {
        child = menuItem.childNodes[i];
        found = true;
      } else if (menuItem.childNodes[i].nodeName !== 'UL') {
        child = menuItem.childNodes[i];
      }
    }
    return child || menuItem;
  }

  moveSlidingBorderToMenuItem(menuItem) {
    const elementToMoveTo = this._getElementToMoveTo(menuItem);
    this._slidingBorder.moveSlidingBorderToChild(elementToMoveTo);
  }

  dispose () {
    this._config = null;

    this._elem = null;
    this._drawersContainer = null;
    if (this._slidingBorder) {
      this._slidingBorder.dispose();
    }
  }

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(Sidebar);
export {Sidebar, factory, COMPONENT_TYPE};

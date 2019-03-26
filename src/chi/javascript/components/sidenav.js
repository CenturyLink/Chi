import {Component} from "../core/component";
import {SlidingBorder, ANIMATION_DURATION as BORDER_ANIMATION_DURATION} from "./auxiliary/sliding-border";
import {Util} from "../core/util.js";
import {Drawer, EVENTS as DRAWER_EVENTS} from "./drawer";

const CLASS_ACTIVE = "-active";
const CLASS_ANIMATED = "-animated";
const COMPONENT_SELECTOR = '.m-sidenav';
const COMPONENT_TYPE = "sidenav";
const DRAWER_CLASS = "m-drawer";
const LINKLIST_CLASS = 'm-sidenav__list';
const SIDENAV_CONTENT_CLASS = 'm-sidenav__content';
const SIDENAV_DRAWERS_CLASS = 'm-sidenav__drawers';
const DRAWER_LINKLIST_CLASS = "m-sidenav__drawer-list";

const DEFAULT_CONFIG = {
  animated: true,
  autoClose: false
};

class Sidenav extends Component {

  constructor (elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
    let self = this;
    this._slidingBorder = null;
    this._drawersContainer = this._elem.querySelector('.' + SIDENAV_DRAWERS_CLASS);
    this._drawers = [];
    this._clickOnComponent = false;
    this._autocloseTimeoutId = null;

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
    this._configureAutoClose();
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

  _createDrawer (drawerTrigger) {
    return Drawer.factory(drawerTrigger, {
      animated: this._config.animated
    });
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
      const drawer = this._createDrawer(menuItemLink);
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

  dispose () {
    this._config = null;

    this._elem = null;
    this._drawersContainer = null;
    this._clickOnComponent = null;
    this._autocloseTimeoutId = null;
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

  _configureAutoClose() {

    const self = this;

    this._addEventHandler(
      this._elem,
      'click',
      function(){
        self._clickOnComponent = true;
      }
    );

    this._addEventHandler(
      document,
      'click',
      function(){
        if (self._clickOnComponent) {
          self._clickOnComponent=false;
        } else {
          self.hideAll();
        }
      }
    );

    this._addEventHandler(
      this._elem,
      'mouseleave',
      function(e){
        if (
          self._config.autoClose !== false &&
          e.target === self._elem &&
          self._config.autoClose >= 0
        ){
          self._autocloseTimeoutId = window.setTimeout(function(){
            self.hideAll();
          }, self._config.autoClose);
        }
      }
    );

    this._addEventHandler(
      this._elem,
      'mouseenter',
      function(e){
        if (e.target === self._elem){
          window.clearTimeout(self._autocloseTimeoutId);
        }
      }
    );
  }
}

const factory = Component.factory.bind(Sidenav);
export {Sidenav, factory, COMPONENT_TYPE};

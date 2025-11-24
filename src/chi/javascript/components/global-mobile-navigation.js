import { Component } from '../core/component.js';
import { chi } from '../core/chi.js';

const COMPONENT_TYPE = 'globalMobileNav';

class GlobalMobileNav extends Component {
  constructor(elem, trigger, drawer, dropdown) {
    super(elem);

    this._elem = elem;
    this._drawer = drawer;
    this._trigger = trigger;
    this._enterpriseDropdown = dropdown;
    this._navigationStack = [];
    this._boundHandlers = new Map();

    this._handleBackClick = this._handleBackClick.bind(this);
    this._handleTriggerClick = this._handleTriggerClick.bind(this);
    this._handleDropdownClick = this._handleDropdownClick.bind(this);

    this._init();
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  _init() {
    if (!this._drawer || !this._trigger) return;

    this._drawer.setAttribute('position', 'left');
    this._drawer.setAttribute('backdrop', '');
    this._drawer.setAttribute('non-closable', '');
    this._drawer.addEventListener('chiBacklinkClick', this._handleBackClick);
    this._trigger.addEventListener('click', this._handleTriggerClick);

    if (this._enterpriseDropdown) {
      this._enterpriseDropdown.addEventListener('click', this._handleDropdownClick);
    }

    const allViews = this._getAllViews();

    allViews.forEach((view) => view.classList.add(chi.classes.DISPLAY.NONE));
    this._attachLinkHandlers();
  }

  _handleDropdownClick(e) {
    e.stopPropagation();
  }

  _getAllViews() {
    const views = Array.from(this._drawer.querySelectorAll('div[id]'));

    if (views.length === 0) {
      return Array.from(this._drawer.children).filter((child) => child.tagName === 'DIV' && child.id);
    }

    return views;
  }

  _getViewById(id) {
    return this._drawer.querySelector(`#${id}`);
  }

  _getRootView() {
    const views = this._getAllViews();

    return views[0] ?? null;
  }

  _attachLinkHandlers() {
    const links = Array.from(this._drawer.querySelectorAll('chi-link'));

    links.forEach((link) => {
      const handler = (e) => this._handleLinkClick(e, link);

      link.addEventListener('click', handler);
      this._boundHandlers.set(link, handler);
    });
  }

  _handleTriggerClick() {
    if (this._drawer.active) {
      this._drawer.active = false;
      return;
    }

    this._navigationStack = [];
    const rootView = this._getRootView();

    if (!rootView) return;

    this._getAllViews().forEach((view) => view.classList.add(chi.classes.DISPLAY.NONE));
    rootView.classList.remove(chi.classes.DISPLAY.NONE);

    const header = this._drawer.querySelector('.chi-drawer__header');

    header?.classList.add(chi.classes.DISPLAY.NONE);
    this._drawer.active = true;
  }

  _handleLinkClick(event, link) {
    const href = link.getAttribute('href');

    if (!href || href === '#' || !href.startsWith('#')) {
      event.preventDefault();
      event.stopPropagation();

      if (!href || href === '#') {
        this._setActiveLinkWithParents(link);
        this._drawer.active = false;
      }

      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const targetId = href.slice(1);
    const targetView = this._getViewById(targetId);

    if (!targetView) {
      this._setActiveLinkWithParents(link);
      this._drawer.active = false;

      return;
    }

    const allViews = this._getAllViews();
    const currentView = allViews.find((view) => !view.classList.contains(chi.classes.DISPLAY.NONE));
    const backlinkTitle =
      this._navigationStack.length === 0 ? 'All' : this._navigationStack[this._navigationStack.length - 1].targetTitle;

    if (currentView) {
      this._navigationStack.push({
        view: currentView,
        targetTitle: link.textContent.trim(),
        backlinkTitle,
        activeLink: link,
      });

      currentView.classList.add(chi.classes.DISPLAY.NONE);
    }

    targetView.classList.remove(chi.classes.DISPLAY.NONE);
    this._updateDrawerHeader(link.textContent.trim(), backlinkTitle);
  }

  _handleBackClick(event) {
    event.stopPropagation();

    this._drawer.setAttribute('prevent-auto-hide', '');

    if (this._navigationStack.length === 0) {
      this._drawer.active = false;
      return;
    }

    const currentView = this._getAllViews().find((view) => !view.classList.contains(chi.classes.DISPLAY.NONE));
    const previousState = this._navigationStack.pop();

    currentView?.classList.add(chi.classes.DISPLAY.NONE);
    previousState.view.classList.remove(chi.classes.DISPLAY.NONE);

    if (this._navigationStack.length === 0) {
      const header = this._drawer.querySelector('.chi-drawer__header');

      header?.classList.add(chi.classes.DISPLAY.NONE);
      this._drawer.removeAttribute('backlink');
      this._drawer.removeAttribute('title');
    } else {
      const currentState = this._navigationStack[this._navigationStack.length - 1];

      this._updateDrawerHeader(currentState.targetTitle, currentState.backlinkTitle);
    }

    setTimeout(() => this._drawer.removeAttribute('prevent-auto-hide'), 100);
  }

  _updateDrawerHeader(title, backlink = 'All') {
    const header = this._drawer.querySelector('.chi-drawer__header');

    if (header) {
      this._drawer.setAttribute('title', title);
      this._drawer.setAttribute('backlink', backlink);
      header.classList.remove(chi.classes.DISPLAY.NONE);
    }
  }

  _setActiveLinkWithParents(link) {
    this._drawer.querySelectorAll('chi-link.-active').forEach((activeLink) => {
      activeLink.classList.remove(chi.classes.ACTIVE);
    });

    link.classList.add(chi.classes.ACTIVE);
    this._navigationStack.forEach((state) => {
      state.activeLink?.classList.add(chi.classes.ACTIVE);
    });
  }

  dispose() {
    this._boundHandlers.forEach((handler, link) => {
      link.removeEventListener('click', handler);
    });

    this._drawer?.removeEventListener('chiBacklinkClick', this._handleBackClick);
    this._trigger?.removeEventListener('click', this._handleTriggerClick);
    this._enterpriseDropdown?.removeEventListener('click', this._handleDropdownClick);

    this._boundHandlers.clear();
    this._navigationStack = [];
    this._elem = null;
    this._drawer = null;
    this._trigger = null;
    this._enterpriseDropdown = null;
  }
}

const factory = (elem, trigger, drawer, dropdown) => new GlobalMobileNav(elem, trigger, drawer, dropdown);
export { GlobalMobileNav, factory };

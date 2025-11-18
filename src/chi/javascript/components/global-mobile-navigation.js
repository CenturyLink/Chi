import { Component } from '../core/component.js';
import { chi } from '../core/chi.js';

const COMPONENT_TYPE = 'globalMobileNav';

class GlobalMobileNav extends Component {
  constructor(elem, trigger, drawer, dropdown) {
    super(elem);

    this._elem = elem;
    this._drawer = drawer;
    this._views = [];
    this._viewItems = [];
    this._trigger = trigger;
    this._enterpriseDropdown = dropdown;
    this._linkHandlers = [];
    this._currentViewId = null;

    this._initDrawer();
    this._initViews();
    this._initLinks();
    this._initTrigger();
    this._initDropdown();
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  _getViewLevel(viewId) {
    return viewId.match(/content-(.+)$/)?.[1] ?? '0';
  }

  _getParentLevel(level) {
    const parts = level.split('-');
    
    return parts.length <= 1 ? null : parts.slice(0, -1).join('-');
  }

  _getDepth(level) {
    return level.split('-').length - 1;
  }

  _getRootView() {
    if (this._views.length === 0) return null;

    return this._views.reduce((root, view) => {
      const rootDepth = this._getDepth(this._getViewLevel(root.id));
      const viewDepth = this._getDepth(this._getViewLevel(view.id));

      return viewDepth < rootDepth ? view : root;
    }, this._views[0]);
  }

  _getRootLevel() {
    return this._getViewLevel(this._getRootView()?.id) ?? '0';
  }

  _initDrawer() {
    this._drawer.setAttribute('position', 'left');
    this._drawer.setAttribute('backdrop', '');
    this._drawer.setAttribute('non-closable', '');
    this._drawer.addEventListener('chiBacklinkClick', this._handleChiBacklinkClick.bind(this));
  }

  _initViews() {
    this._views = Array.from(this._drawer.querySelectorAll('div[id*="-content"]'));

    this._views.forEach((view) => {
      view.classList.add(chi.classes.DISPLAY.NONE);
    });
  }

  _initLinks() {
    if (!this._drawer) return;

    const links = Array.from(this._drawer.querySelectorAll('chi-link'));

    links.forEach((link) => {
      const handler = (event) => this._handleLinkClick(event, link);

      link.addEventListener('click', handler);
      this._linkHandlers.push({ link, handler });
    });
  }

  _initTrigger() {
    if (!this._trigger) return;

    this._trigger.addEventListener('click', this._handlerTriggerClick.bind(this));
  }

  _initDropdown() {
    this._enterpriseDropdown.addEventListener('click', (event) => event.stopPropagation());
  }

  _handlerTriggerClick() {
    if (this._drawer.active) {
      this._drawer.active = false;
      return;
    }

    const header = this._drawer.querySelector('.chi-drawer__header');

    this._initViews();

    const rootView = this._getRootView();

    if (!rootView) return;

    this._currentViewId = rootView.id;
    this._viewItems = this._viewItems.filter((item) => item.state !== 'pending');
    rootView.classList.remove(chi.classes.DISPLAY.NONE);
    header.classList.add(chi.classes.DISPLAY.NONE);
    this._drawer.active = true;

    if (this._viewItems.length) return;

    this._views.forEach((view) => {
      const activeLink = view.querySelector('chi-link.-active');
      const level = this._getViewLevel(view.id);

      this._viewItems.push({
        view,
        state: 'active',
        link: activeLink,
        level,
        viewId: view.id,
      });
    });
  }

  _handleLinkClick(event, link) {
    event.stopPropagation();

    const href = link.getAttribute('href');
    
    if (!href?.startsWith('#')) return;

    const currentView = this._views.find((view) => view.id === this._currentViewId);
    const targetId = href.slice(1);
    const nextView = this._views.find((view) => view.id === targetId) ?? currentView;
    const currentLevel = this._getViewLevel(this._currentViewId);

    if (nextView !== currentView) {
      this._viewItems.push({
        view: currentView,
        state: 'pending',
        link,
        level: currentLevel,
        viewId: this._currentViewId,
      });
      
      this._setBacklink(currentLevel, link.innerText, true);
      currentView.classList.add(chi.classes.DISPLAY.NONE);
      nextView.classList.remove(chi.classes.DISPLAY.NONE);
      this._currentViewId = nextView.id;
    } else {
      this._clearAllActiveLinks();
      
      this._viewItems.push({
        view: currentView,
        state: 'active',
        link,
        level: currentLevel,
        viewId: this._currentViewId,
      });
      
      link.classList.add(chi.classes.ACTIVE);
      this._activatePendingParents(currentLevel);
      this._drawer.active = false;
    }
  }

  _activatePendingParents(currentLevel) {
    const activateLevel = (level) => {
      if (level === null) return;

      this._viewItems
        .filter((item) => item.level === level && item.state === 'pending')
        .forEach((item) => {
          item.state = 'active';
          item.link?.classList.add(chi.classes.ACTIVE);
        });

      activateLevel(this._getParentLevel(level));
    };

    activateLevel(this._getParentLevel(currentLevel));
  }

  _setBacklink(level, title, isNextView) {
    if (!isNextView) return;

    const header = this._drawer.querySelector('.chi-drawer__header');
    const parentLevel = this._getParentLevel(level);
    
    const parentItems = this._viewItems.filter((item) => {
      const itemLevel = this._getViewLevel(item.view.id);
      
      return itemLevel === parentLevel && item.link && (item.state === 'pending' || item.state === 'active');
    });

    const backlink = parentItems.at(-1)?.link.innerText ?? 'All';

    this._drawer.setAttribute('backlink', backlink);
    this._drawer.setAttribute('title', title);
    header.classList.remove(chi.classes.DISPLAY.NONE);
  }

  _handleBack(event) {
    event.stopPropagation();

    const currentView = this._views.find((view) => view.id === this._currentViewId);
    
    currentView?.classList.add(chi.classes.DISPLAY.NONE);

    const currentLevel = this._getViewLevel(this._currentViewId);
    const parentLevel = this._getParentLevel(currentLevel);

    this._viewItems = this._viewItems.filter(
      (item) => !(item.level === currentLevel && item.state === 'pending')
    );

    const parentView = this._views.find((view) => this._getViewLevel(view.id) === parentLevel);
    
    if (parentView) {
      parentView.classList.remove(chi.classes.DISPLAY.NONE);
      this._currentViewId = parentView.id;
    }

    const header = this._drawer.querySelector('.chi-drawer__header');
    const rootLevel = this._getRootLevel();

    if (parentLevel === rootLevel || parentLevel === null) {
      this._drawer.removeAttribute('backlink');
      header.classList.add(chi.classes.DISPLAY.NONE);
    } else {
      const grandparentLevel = this._getParentLevel(parentLevel);
      const grandparentItem = this._viewItems.find((item) => {
        const itemLevel = this._getViewLevel(item.view.id);
        
        return itemLevel === grandparentLevel && item.link;
      });

      if (grandparentItem) {
        this._setBacklink(grandparentItem.level, grandparentItem.link.innerText, true);
      }
    }
  }

  _clearAllActiveLinks() {
    this._viewItems
      .filter((item) => item.state === 'active')
      .forEach((item) => item.link?.classList.remove(chi.classes.ACTIVE));
    this._viewItems = this._viewItems.filter((item) => item.state === 'pending');
  }

  _handleChiBacklinkClick(event) {
    this._drawer.setAttribute('prevent-auto-hide', '');
    this._handleBack(event);

    setTimeout(() => {
      this._drawer.removeAttribute('prevent-auto-hide');
    }, 100);
  }

  dispose() {
    this._linkHandlers.forEach(({ link, handler }) => link.removeEventListener('click', handler));
    this._trigger?.removeEventListener('click', this._handlerTriggerClick.bind(this));
    this._drawer?.removeEventListener('chiBacklinkClick', this._handleChiBacklinkClick.bind(this));

    Object.assign(this, {
      _elem: null,
      _drawer: null,
      _enterpriseDropdown: null,
      _trigger: null,
      _views: [],
      _viewItems: [],
      _linkHandlers: [],
      _currentViewId: null,
    });
  }
}

const factory = (elem, trigger, drawer, dropdown) => new GlobalMobileNav(elem, trigger, drawer, dropdown);
export { GlobalMobileNav, factory };

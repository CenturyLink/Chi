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
    this._viewLevel = 0;

    this._initDrawer();
    this._initViews();
    this._initLinks();
    this._initTrigger();
    this._initDropdown();
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  _initDrawer() {
    this._drawer.setAttribute('position', 'left');
    this._drawer.setAttribute('backdrop', '');
    this._drawer.setAttribute('non-closable', '');
    this._drawer.addEventListener('chiBacklinkClick', (event) => this._handleChiBacklinkClick(event));
  }

  _initViews() {
    this._views = Array.from(this._drawer.querySelectorAll('div[id*="-content"]'));

    this._views.forEach((view) => {
      view.classList.add(chi.classes.DISPLAY.NONE);
    });
  }

  _initLinks() {
    const allLinks = [];

    if (this._drawer) {
      const links = this._drawer.querySelectorAll('chi-link');

      links.forEach((link) => {
        allLinks.push(link);
      });
    }

    allLinks.forEach((link) => {
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
    this._enterpriseDropdown.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }

  _handlerTriggerClick() {
    if (!this._drawer) return;
    if (this._drawer.active) {
      this._drawer.active = false;
      return;
    }

    const header = this._drawer.querySelector('.chi-drawer__header');

    this._initViews();

    this._viewLevel = 0;
    this._viewItems = this._viewItems.filter((item) => item.state !== 'pending');
    this._views[0].classList.remove(chi.classes.DISPLAY.NONE);
    header.classList.add(chi.classes.DISPLAY.NONE);
    this._drawer.active = true;

    if (this._viewItems.length) return;

    this._views.forEach((view) => {
      const activeLink = view.querySelector('chi-link.-active');
      const level = Number(view.id.split('_')[1]);

      const viewItem = {
        view,
        state: 'active',
        link: activeLink,
        level,
      };

      this._viewItems.push(viewItem);
    });
  }

  _handleLinkClick(event, link) {
    const href = link.getAttribute('href');
    const opensView = href && href.startsWith('#');
    const targetId = opensView ? href.slice(1) : null;

    event.stopPropagation();

    if (!opensView) {
      return;
    }

    const currentView = this._views[this._viewLevel];
    let nextView = currentView;

    if (targetId) {
      nextView = this._views.find((view) => view.id === targetId);
    }

    const viewItem = { view: currentView, state: '', link: link, level: this._viewLevel };

    this._addToViewItems(viewItem, nextView !== currentView);
    this._setBacklink(viewItem.level, link.innerText, nextView !== currentView);

    if (nextView !== currentView) {
      currentView.classList.add(chi.classes.DISPLAY.NONE);
      nextView.classList.remove(chi.classes.DISPLAY.NONE);

      this._viewLevel++;
    } else {
      this._drawer.active = false;
    }
  }

  _setBacklink(level, title, isNextView) {
    if (!isNextView) return;

    const header = this._drawer.querySelector('.chi-drawer__header');
    const backlink = level === 0 ? 'All' : this._viewItems[this._viewLevel].link.innerText;

    this._drawer.setAttribute('backlink', backlink);
    this._drawer.setAttribute('title', title);
    header.classList.remove(chi.classes.DISPLAY.NONE);
  }

  _handleBack(event) {
    event.stopPropagation();

    const currentView = this._views[this._viewLevel];
    currentView.classList.add(chi.classes.DISPLAY.NONE);

    let filteredViewItems = [];

    this._viewLevel--;
    this._viewItems.forEach((item) => {
      if (!(item.level === this._viewLevel && item.state === 'pending')) {
        filteredViewItems.push(item);
      }
    });

    this._viewItems = filteredViewItems;

    const previousView = this._views[this._viewLevel];
    previousView.classList.remove(chi.classes.DISPLAY.NONE);

    if (this._viewLevel === 0) {
      const header = this._drawer.querySelector('.chi-drawer__header');

      this._drawer.removeAttribute('backlink');
      header.classList.add(chi.classes.DISPLAY.NONE);
    } else {
      const viewItem = this._viewItems.find((item) => item.level === this._viewLevel - 1);

      this._setBacklink(viewItem.level, viewItem.link.innerText, true);
    }
  }

  _addToViewItems(viewItem, isNextView) {
    viewItem.state = isNextView ? 'pending' : 'active';

    if (viewItem.state === 'active') {
      viewItem.link.classList.add(chi.classes.ACTIVE);
    }

    this._viewItems.push(viewItem);
    this._clearActiveLinks(viewItem, isNextView);
    for (let i = 0; i < this._views.length - 1; i++) {
      this._manageViewItemState(i);
    }
  }

  _clearActiveLinks(currentViewItem) {
    const filteredViewItems = [];

    this._viewItems.forEach((item) => {
      const diffLink = item.link !== currentViewItem.link;
      const sameState = item.state === currentViewItem.state;
      const isHigherOrSameLevel = item.level >= this._viewLevel;

      if (diffLink && sameState && isHigherOrSameLevel) {
        item.link?.classList.remove(chi.classes.ACTIVE);
      } else {
        filteredViewItems.push(item);
      }
    });

    this._viewItems = filteredViewItems;
  }

  _manageViewItemState(level) {
    const hasActiveItemInHigherLevel = this._viewItems.some((item) => item.level > level && item.state === 'active');
    const hasPendingItemInMyLevel = this._viewItems.some((item) => item.level === level && item.state === 'pending');
    let mappedViewItems = [];

    if (hasActiveItemInHigherLevel && hasPendingItemInMyLevel) {
      mappedViewItems = this._viewItems.map((item) => {
        if (item.level === level) {
          let state = item.state;

          if (state === 'active') {
            item.link?.classList.remove(chi.classes.ACTIVE);
            state = '';
          } else if (state === 'pending') {
            item.link.classList.add(chi.classes.ACTIVE);
            state = 'active';
          }

          return { ...item, state };
        } else {
          return item;
        }
      });

      this._viewItems = mappedViewItems.filter((item) => item.state);
    }
  }

  _handleChiBacklinkClick(event) {
    this._drawer.setAttribute('prevent-auto-hide', '');
    this._handleBack(event);

    setTimeout(() => {
      this._drawer.removeAttribute('prevent-auto-hide');
    }, 100);
  }

  dispose() {
    this._linkHandlers.forEach(({ link, handler }) => {
      link.removeEventListener('click', handler);
    });
    this._trigger.removeEventListener('click', this._handlerTriggerClick.bind(this));
    this._drawer.removeEventListener('chiBacklinkClick', (event) => this._handleChiBacklinkClick(event));

    this._elem = null;
    this._drawer = null;
    this._enterpriseDropdown = null;
    this._trigger = null;
    this._views = [];
    this._viewItems = [];
    this._linkHandlers = [];
    this._viewLevel = 0;
  }
}

const factory = (elem, trigger, drawer, dropdown) => new GlobalMobileNav(elem, trigger, drawer, dropdown);
export { GlobalMobileNav, factory };

import { Component } from '../core/component';
import { Util } from '../core/util';
import { chi } from '../core/chi';

const COMPONENT_SELECTOR = '.chi-sidenav';
const COMPONENT_TYPE = 'globalNav';
const LINK_SELECTOR = 'chi-link';
const LIST_SELECTOR = '.chi-sidenav__list';

const DEFAULT_CONFIG = {
  expanded: true,
  openOnHover: true,
  autoCollapse: true,
  collapsedBreakpoint: 1440,
};

class GlobalNav extends Component {
  constructor(elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._expanded = this._config.expanded;
    this._blockExpandedState = false;
    this.autoCollapse = this._config.autoCollapse;
    this._openOnHover = this._config.openOnHover;
    this._list = this._elem.querySelector(LIST_SELECTOR);
    this._links = this._elem.querySelectorAll(LINK_SELECTOR);
    this._accordionStates = new Map();
    this._wasExpandedBeforeHover = false;
    this._resizeHandler = null;
    this._stateBeforeSmallViewport = null;

    this._init();
  }

  _init() {
    this._checkViewportAndUpdate();

    if (this.autoCollapse) {
      this._setupResizeListener();
    }

    this._links.forEach((link) => {
      link.addEventListener('click', () => {
        this._setActiveLink(link);
      });
    });

    if (this._list && this._openOnHover) {
      this._list.addEventListener('mouseenter', () => {
        if (this._blockExpandedState) {
          return;
        }

        this._wasExpandedBeforeHover = this._expanded;

        if (!this._expanded) {
          this._expanded = true;
          this._elem.classList.add(chi.classes.OPEN_ON_HOVER);
          this._updateExpandedState();
        }
      });

      this._list.addEventListener('mouseleave', () => {
        if (this._blockExpandedState) {
          return;
        }

        this._elem.classList.remove(chi.classes.OPEN_ON_HOVER);

        if (this._isViewportSmall()) {
          this._expanded = false;
          this._updateExpandedState();
        } else {
          if (!this._wasExpandedBeforeHover) {
            this._expanded = false;
            this._updateExpandedState();
          }
        }
      });
    }
  }

  _setActiveLink(activeLink) {
    this._links?.forEach((link) => {
      link.classList.remove(chi.classes.ACTIVE);
    });

    activeLink.classList.add(chi.classes.ACTIVE);
  }

  _isViewportSmall() {
    return window.innerWidth <= this._config.collapsedBreakpoint;
  }

  _checkViewportAndUpdate() {
    if (this._isViewportSmall()) {
      this._stateBeforeSmallViewport = this._expanded;
      this._expanded = false;
    }

    this._updateExpandedState();
  }

  _setupResizeListener() {
    this._resizeHandler = () => {
      const wasSmallViewport = this._stateBeforeSmallViewport !== null;
      const isSmallViewport = this._isViewportSmall();

      if (isSmallViewport && !wasSmallViewport && !this._blockExpandedState) {
        this._stateBeforeSmallViewport = this._expanded;
        this._expanded = false;
        this._updateExpandedState();
      } else if (!isSmallViewport && wasSmallViewport) {
        this._expanded = this._stateBeforeSmallViewport;
        this._stateBeforeSmallViewport = null;
        this._updateExpandedState();
      }
    };

    window.addEventListener('resize', this._resizeHandler);
  }

  _updateExpandedState() {
    if (!this._elem) return;
    if (this._expanded) {
      this._elem.classList.remove(chi.classes.COLLAPSED);
      this._elem.classList.add(chi.classes.EXPANDED);
      this._toggleAccordions('show');
    } else {
      this._elem.classList.remove(chi.classes.EXPANDED);
      this._elem.classList.add(chi.classes.COLLAPSED);
      this._toggleAccordions('hide');
    }
  }

  _toggleAccordions(action) {
    const accordions = this._list.querySelectorAll('chi-accordion');

    accordions.forEach((accordion, index) => {
      const item = accordion.querySelector('.chi-accordion__item');

      if (action === 'hide') {
        const isExpanded = item && item.classList.contains('-expanded');

        this._accordionStates.set(index, isExpanded);

        if (typeof accordion.hide === 'function') {
          accordion.hide();
        }
      } else if (action === 'show') {
        const wasActive = this._accordionStates.get(index);

        if (wasActive && typeof accordion.show === 'function') {
          accordion.show();
        }
      }
    });

    if (action === 'show') {
      this._accordionStates.clear();
    }
  }

  set expanded(value) {
    this._expanded = value;
    this._blockExpandedState = value;

    this._updateExpandedState();
  }

  get expanded() {
    return this._expanded;
  }

  dispose() {
    this._links.forEach((link) => {
      link.removeEventListener('click', this._setActiveLink);
    });
    this._list.removeEventListener('mouseenter', this._expandOnHover);
    this._list.removeEventListener('mouseleave', this._collapseOnLeave);

    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
    }

    this._elem = null;
    this._openOnHover = null;
    this._links = null;
    this._list = null;
    this._accordionStates = null;
    this._wasExpandedBeforeHover = null;
    this._resizeHandler = null;
    this._stateBeforeSmallViewport = null;
  }

  static get componentType() {
    return COMPONENT_TYPE;
  }

  static get componentSelector() {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(GlobalNav);
export { GlobalNav, factory, COMPONENT_TYPE, COMPONENT_SELECTOR as GLOBAL_NAV_COMPONENT_SELECTOR };

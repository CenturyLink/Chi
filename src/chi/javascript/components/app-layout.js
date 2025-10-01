import { Component } from "../core/component";
import { Util } from '../core/util.js';

const COMPONENT_SELECTOR = '.chi-main';
const COMPONENT_TYPE = "appLayout";

const WIDGETS = {
  ALERTS: '.widget-alerts',
  NETWORK_VISIBILITY: '.widget-network-visibility'
}

const DEFAULT_CONFIG = {
  threshold: 100,
  widgets: {
    alerts: WIDGETS.ALERTS,
    networkVisibility: WIDGETS.NETWORK_VISIBILITY
  }
};

class AppLayout extends Component {
  constructor(elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));

    this._alertWidget = elem.querySelector(`${this._config.widgets.alerts}`);
    this._networkVisibilityWidget = elem.querySelector(`${this._config.widgets.networkVisibility}`);

    this._initResize();
  }

  _initResize() {
    const resizeObserver = new ResizeObserver(() => this._calculateMargin());

    resizeObserver.observe(this._alertWidget);
  }

  _calculateMargin() {
     if (this._alertWidget && this._networkVisibilityWidget) {
      const alertWidgetHeight = this._alertWidget.offsetHeight;
      const calculatedMargin = alertWidgetHeight - this._config.threshold;

      this._networkVisibilityWidget.style.marginTop = `-${calculatedMargin}px`;
    }
  }

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }

  dispose () {
    this._alertWidget = null;
    this._networkVisibilityWidget = null;
  }
}

const factory = Component.factory.bind(AppLayout);

export { AppLayout, factory, COMPONENT_TYPE, COMPONENT_SELECTOR as APP_LAYOUT_COMPONENT_SELECTOR };
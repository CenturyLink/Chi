import {Util} from "./util.js";
import {chi} from "./chi.js";

const CLASS_COMPONENT = '-m-epanel';
const COMPONENT_TYPE = "expansionPanel";
const ANIMATION_DURATION = 200;
const CLASS_CONTENT_WRAPPER = 'm-epanel__content-wrapper';
const CLASS_CONTENT_VIEW = 'm-epanel__content-view';

const STATE = {
  ACTIVE: {
    NAME: 'active',
    CLASS: '-active',
    CLASS_TARGET: '-active--only',
    CLASS_TRANSITIONING: '-active--transitioning'
  },
  DONE: {
    NAME: 'done',
    CLASS: '-done',
    CLASS_TARGET: '-done--only',
    CLASS_TRANSITIONING: '-done--transitioning'
  },
  PENDING: {
    NAME: 'pending',
    CLASS: '',
    CLASS_TARGET: '',
    CLASS_TRANSITIONING: '-pending--transitioning'
  }
};

const getStateFromName = function (stateName) {
  let state = null;
  Object.keys(STATE).forEach(function (key) {
    if (STATE[key].NAME === stateName) {
      state = STATE[key];
    }
  });
  return state;
};

const epGroups = {};

class ExpansionPanelGroup {

  constructor () {
    this.lastAccessedIndex = -1;
    this.expansion_panels = [];
    this.epChangedListener = function (){};
  }

  push (ep) {
    this.expansion_panels.push(ep);
    ep.addStateChangeListener(this.epChangedListener);
  }

  delete (ep) {
    const index = this.getIndex(ep);
    if (index > -1) {
      this.expansion_panels.splice(index, 1);
      ep.removeStateChangeListener(this.epChangedListener);
    }
  }

  getIndex (ep) {
    return this.expansion_panels.indexOf(ep);
  }

  next () {
    const next = this.expansion_panels[this.lastAccessedIndex+1];
    if (next) {
      this.lastAccessedIndex++;
      return next;
    }
  }
  previous () {
    const prev = this.expansion_panels[this.lastAccessedIndex-1];
    if (prev) {
      this.lastAccessedIndex--;
      return prev;
    }
  }
  reset (ep) {
    this.lastAccessedIndex = this.getIndex(ep);
  }

}

class ExpansionPanelSteppedGroup extends ExpansionPanelGroup {

  constructor () {
    super();
    const self = this;
    this.epChangedListener = function (newState, oldState, ep){
      self.epChangedHandler(newState, oldState, ep);
    };
  }

  epChangedHandler (newState, oldState, ep){
    if (newState === STATE.ACTIVE) {
      this.reset();
      this.reset(ep);
      let prev = this.previous();
      while (prev) {
        prev.setState(STATE.DONE.NAME);
        prev = this.previous();
      }
      this.reset(ep);
      let next = this.next();
      while (next) {
        next.setState(STATE.PENDING.NAME);
        next = this.next();
      }
    }
  }
}

class ExpansionPanelAccordionGroup extends ExpansionPanelGroup {

  constructor () {
    super();
    const self = this;
    this.epChangedListener = function (newState, oldState, ep){
      self.epChangedHandler(newState, oldState, ep);
    };
  }

  epChangedHandler (newState, oldState, ep){
    if (newState === STATE.ACTIVE) {
      this.expansion_panels.forEach(function (expasion_panel) {
        if (expasion_panel !== ep) {
          expasion_panel.setState(STATE.PENDING.NAME);
        }
      });
    }
  }
}

class ExpansionPanelFreeGroup extends ExpansionPanelGroup {

}

class ExpansionPanelCustomGroup extends ExpansionPanelGroup {

  constructor (changeHandler) {
    super();
    const self = this;
    this.epChangedListener = function (newState, oldState, ep){
      changeHandler(newState, oldState, ep, self);
    };
  }
}


class ExpansionPanel {

  constructor (elem, config) {
    this._elem = elem;
    this._config = Util.extend({
      animated: true,
      mode: 'stepped',
      changeHandler: Util.noOp
    }, config);

    this._epGroup = null;
    this._state = STATE.PENDING;
    this._stateChangeListeners = [];
    const self = this;

    Util.registerComponent(COMPONENT_TYPE, this._elem, this);

    if (Util.hasClass(this._elem, STATE.ACTIVE.CLASS)) {
      this._state = STATE.ACTIVE;
    } else if (Util.hasClass(this._elem, STATE.DONE.CLASS)) {
      this._state = STATE.DONE;
    }

    this._initGroup();
    this._initDefaultActions();

    this._onClickEventListener = function (e) {
      self._clickHandler(e);
    };
    this._elem.addEventListener('click', this._onClickEventListener);
  }

  _initGroup () {
    const groupName = this._elem.dataset.chiEpGroup;
    if (!groupName) {
      return;
    }

    if (!epGroups[groupName]) {
      switch (this._config.mode) {
        case 'accordion':
          epGroups[groupName] = new ExpansionPanelAccordionGroup();
          break;
        case 'free':
          epGroups[groupName] = new ExpansionPanelFreeGroup();
          break;
        case 'custom':
          epGroups[groupName] = new ExpansionPanelCustomGroup(this._config.changeHandler);
          break;
        default:
          epGroups[groupName] = new ExpansionPanelSteppedGroup();
          break;
      }
    }
    this._epGroup = epGroups[groupName];
    this._epGroup.push(this);
  }

  _initDefaultActions () {
    this._actions = {
      active: () => this.setState(STATE.ACTIVE.NAME),
      done: () => this.setState(STATE.DONE.NAME),
      pending: () => this.setState(STATE.PENDING.NAME),
      toggle: () => {
        if (this._state === STATE.ACTIVE) {
          this.setState(STATE.PENDING.NAME);
        } else {
          this.setState(STATE.ACTIVE.NAME);
        }
      },
      next: () => {
        this._epGroup.reset(this);
        this._epGroup.next().setState(STATE.ACTIVE.NAME);
      },
      previous: () => {
        this._epGroup.reset(this);
        this._epGroup.previous().setState(STATE.ACTIVE.NAME);
      }
    };
    this._actions.inactive = this._actions.pending;
  }

  _clickHandler (e) {
    if (!e.target || !e.target.dataset || !e.target.dataset.chiEpAction) {
      return;
    }
    this.execute(e.target.dataset.chiEpAction);
  }

  execute (action) {
    if (this._actions[action]) {
      this._actions[action]();
    }
  }

  setState (stateName) {
    const newState = getStateFromName(stateName);
    if (newState && newState !== this._state) {
      const oldState = this._state;
      this._state = newState;
      if (this._config.animated) {
        this.animateStateChange(oldState, newState);
      } else {
        Util.addClass(this._elem, newState.CLASS);
        Util.removeClass(this._elem, oldState.CLASS);
      }
      this._stateChangeListeners.forEach(
        listener => listener(newState, oldState, this)
      );
    }
  }

  addStateChangeListener (listener) {
    this._stateChangeListeners.push(listener);
  }

  removeStateChangeListener (listener) {
    const index = this._stateChangeListeners.indexOf(listener);
    if (index > -1) {
      this._stateChangeListeners.splice(index, 1);
    }
  }

  animateStateChange (oldState, newState) {

    if (this._transitioning) {
      window.clearTimeout(this.animationEndTimeoutId);
      this.animationEnd();
    }

    this._transitioning = true;

    const
      viewIn = {found: false, elem: null, height: 0, oldStyle: {}},
      viewOut = {found: false, elem: null, height: 0, oldStyle: {}},
      wrapper = {found: false, elem: null, height: 0, oldStyle: {}};

    const updateStyle = function (elem, property, value, writeOnlyIfNotEmpty) {
      elem.oldStyle[property] = elem.elem.style[property];
      if (writeOnlyIfNotEmpty && !elem.elem.style[property]) {
        elem.elem.style[property] = value;
      } else if (!writeOnlyIfNotEmpty) {
        elem.elem.style[property] = value;
      }
    };
    const restoreStyle = function (elem) {
      Object.getOwnPropertyNames(elem.oldStyle).forEach(function (key) {
        elem.elem.style[key] = elem.oldStyle[key];
      });
    };

    const prepare = function () {

      Util.findAndApply(this._elem, CLASS_CONTENT_VIEW, function (elem) {
        if (Util.hasClass(elem, oldState.CLASS_TARGET)) {
          viewOut.found = true;
          viewOut.elem = elem;
          updateStyle(viewOut, 'opacity', '1', true);

          viewOut.height = window.getComputedStyle(elem).height;
        } else if (Util.hasClass(elem, newState.CLASS_TARGET)) {
          viewIn.found = true;
          viewIn.elem = elem;
          updateStyle(viewIn, 'opacity', '0');
          updateStyle(viewIn, 'position', 'absolute');
          updateStyle(viewIn, 'top', '0');
          updateStyle(viewIn, 'left', '0');
          updateStyle(viewIn, 'right', '0');
          updateStyle(viewIn, 'background-color', 'white');
          updateStyle(viewIn, 'z-index', '1');

        }
      });

      Util.findAndApply(this._elem, CLASS_CONTENT_WRAPPER, function (elem) {
        if (!wrapper.found) {
          wrapper.elem = elem;
          updateStyle(wrapper, 'position', 'relative');
          updateStyle(wrapper, 'overflow', 'hidden');

          if (viewOut.found) {
            updateStyle(wrapper, 'height', viewOut.height);
          } else {
            updateStyle(wrapper, 'height', '0');
          }
        }
      });

      Util.addClass(this._elem, oldState.CLASS_TRANSITIONING);
      Util.addClass(this._elem, newState.CLASS_TRANSITIONING);

    }.bind(this);

    const animationStart = function () {
      Util.addClass(this._elem, newState.CLASS);
      Util.removeClass(this._elem, oldState.CLASS);
      if (viewIn.found) {
        viewIn.height = window.getComputedStyle(viewIn.elem).height;
        wrapper.elem.style.height = viewIn.height;
        viewIn.elem.style.opacity = '1';
      } else {
        wrapper.elem.style.height = '0px';
        viewOut.elem.style.opacity = '0';
      }

    }.bind(this);

    this.animationEnd = function () {
      Util.removeClass(this._elem, oldState.CLASS_TRANSITIONING);
      Util.removeClass(this._elem, newState.CLASS_TRANSITIONING);
      restoreStyle(viewIn);
      restoreStyle(viewOut);
      restoreStyle(wrapper);
      this._transitioning = false;
      this.animationEnd = null;
    }.bind(this);

    prepare();
    this.animationEndTimeoutId = window.setTimeout(animationStart, 0);
    Util.emulateTransitionEnd(ANIMATION_DURATION, this.animationEnd);

  }

  dispose () {
    this._elem = null;
    this._config = null;
    this._epGroup.delete(this);
    this._epGroup = null;
    this._stateChangeListeners = null;
    this._state=null;
    this._onClickEventListener = null;
  }

  static factory (elem, config) {
    return Util.getRegisteredComponent(COMPONENT_TYPE, elem) ||
      new ExpansionPanel(elem, config);
  }

  static initAll (config) {
    Array.prototype.forEach.call(
      document.getElementsByClassName(CLASS_COMPONENT), function (elem) {
        ExpansionPanel.factory(elem, config);
      }
    );
  }

}

const chiExpansionPanel = Util.addArraySupportToFactory(ExpansionPanel.factory);

chi.expansionPanel = chiExpansionPanel;
export {ExpansionPanel, chiExpansionPanel, STATE as EXPANSION_PANEL_STATES};

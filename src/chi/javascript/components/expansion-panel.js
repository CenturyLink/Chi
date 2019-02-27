import {Component} from "../core/component";
import {Util} from "../core/util.js";

const ANIMATION_DURATION = 200;
const CLASS_COLLAPSE_WRAPPER = 'm-epanel__collapse';
const COMPONENT_SELECTOR = '.-m-epanel';
const COMPONENT_TYPE = "expansionPanel";
const DEFAULT_CONFIG = {
  animated: true,
  mode: 'stepped',
  changeHandler: Util.noOp,
  customActions: {}
};
const EPANEL_EVENT_CHANGE = 'chi.epanel.change';

const STATE = {
  ACTIVE: {
    NAME: 'active',
    CLASS: '-active',
    CLASS_TARGET: '-active--only',
    CLASS_TRANSITIONING: '-active--transitioning'
  },
  DISABLED: {
    NAME: 'disabled',
    CLASS: '-disabled',
    CLASS_TARGET: '',
    CLASS_TRANSITIONING: '-disabled--transitioning'
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
    }
    return next;
  }

  previous () {
    const prev = this.expansion_panels[this.lastAccessedIndex-1];
    if (prev) {
      this.lastAccessedIndex--;
    }
    return prev;
  }

  reset (ep) {
    this.lastAccessedIndex = this.getIndex(ep);
  }
}

class ExpansionPanelSteppedGroup extends ExpansionPanelGroup {

  constructor () {
    super();
    this.epChangedListener = (newState, oldState, ep) => {
      this.epChangedHandler(newState, oldState, ep);
    };
    this.completedPanels = new Set();
  }

  epChangedHandler (newState, oldState, ep){
    if (newState === STATE.ACTIVE) {
      this.expansion_panels.map(otherEp => {
         if (otherEp !== ep && otherEp.getState() === STATE.ACTIVE) {
           if (this.completedPanels.has(otherEp)) {
             otherEp.setState(STATE.DONE.NAME);
           } else {
             otherEp.setState(STATE.PENDING.NAME);
           }
         }
      });
    }
  }

  push(ep) {
    super.push(ep);
    ep._actions.next = (expansionPanel, epGroup) => {
      this.completedPanels.add(expansionPanel);
      let firstPendingPanel = (function(){
        epGroup.reset(expansionPanel);
        for (let nextPanel=epGroup.next(); nextPanel; nextPanel=epGroup.next()){
          if (nextPanel.getState() !== STATE.DONE) {
            return nextPanel;
          }
        }
      })();

      if (firstPendingPanel) {
        firstPendingPanel.setState(STATE.ACTIVE.NAME);
      } else {
        expansionPanel.setState(STATE.DONE.NAME);
      }
    };
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

class ExpansionPanel extends Component {

  constructor (elem, config) {
    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this._epGroup = null;
    this._state = STATE.PENDING;
    this._stateChangeListeners = [];
    const self = this;

    if (Util.hasClass(this._elem, STATE.ACTIVE.CLASS)) {
      this._state = STATE.ACTIVE;
    } else if (Util.hasClass(this._elem, STATE.DONE.CLASS)) {
      this._state = STATE.DONE;
    } else if (Util.hasClass(this._elem, STATE.DISABLED.CLASS)) {
      this._state = STATE.DISABLED;
    }

    this._initDefaultActions();
    this._initGroup();

    this._onClickEventListener = function (e) {
      self._clickHandler(e);
    };
    this._elem.addEventListener('click', this._onClickEventListener);

    this._initEventDispatcher();
  }

  _initGroup () {
    const groupName = this._elem.dataset.chiEpanelGroup;
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
          epGroups[groupName] =
            new ExpansionPanelCustomGroup(this._config.changeHandler);
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
    this._actions = Util.extend(
      {
        active: (expansionPanel) =>
          expansionPanel.setState(STATE.ACTIVE.NAME),
        done: (expansionPanel) =>
          expansionPanel.setState(STATE.DONE.NAME),
        pending: (expansionPanel) =>
          expansionPanel.setState(STATE.PENDING.NAME),
        toggle: (expansionPanel) => {
          if (expansionPanel._state === STATE.ACTIVE) {
            expansionPanel.setState(STATE.PENDING.NAME);
          } else {
            expansionPanel.setState(STATE.ACTIVE.NAME);
          }
        },
        next: (expansionPanel, epGroup) => {
          epGroup.reset(expansionPanel);
          epGroup.next().setState(STATE.ACTIVE.NAME);
        },
        previous: (expansionPanel, epGroup) => {
          epGroup.reset(expansionPanel);
          epGroup.previous().setState(STATE.ACTIVE.NAME);
        },
        disabled: (expansionPanel) =>
          expansionPanel.setState(STATE.DISABLED.NAME)
      },
      this._config.customActions
    );
    this._actions.inactive = this._actions.pending;
  }

  _clickHandler (e) {
    const epanelAction = this._findEpanelAction(e.target);
    if (!epanelAction) {
      return;
    }
    this.execute(epanelAction);
  }

  _findEpanelAction (elem) {
    if (elem.dataset && elem.dataset.chiEpanelAction) {
      return elem.dataset.chiEpanelAction;
    } else if (
      elem.parentNode &&
      elem.parentNode !== this._elem &&
      elem.parentNode !== document
    ) {
      return this._findEpanelAction(elem.parentNode);
    } else {
      return null;
    }
  }

  execute (action) {
    if (this._actions[action]) {
      this._actions[action](this, this._epGroup);
    } else {
      throw `Action ${action} not supported `;
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

  getState () {
    return this._state;
  }

  getStateName () {
    return this._state.NAME;
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
      Util.stopThreeStepsAnimation(this.animation);
    }

    this._transitioning = true;
    const epElement = this._elem;

    class Collapsible {
      constructor(elem) {
        this.elem = elem;
        this.oldStyle = {};
      }

      updateStyle(property, value, writeOnlyIfNotEmpty) {
        if (typeof this.oldStyle[property] === 'undefined') {
          this.oldStyle[property] = this.elem.style[property];
        }
        if (writeOnlyIfNotEmpty && !this.elem.style[property]) {
          this.elem.style[property] = value;
        } else if (!writeOnlyIfNotEmpty) {
          this.elem.style[property] = value;
        }
      }

      restoreStyle() {
        Object.getOwnPropertyNames(this.oldStyle).forEach(function (key) {
          this.elem.style[key] = this.oldStyle[key];
        }.bind(this));
        this.oldStyle = {};
      }
    }

    class CollapsiblesWrapper extends Collapsible {
      constructor(elem) {
        super(elem);
        this.inElements = [];
        this.outElements = [];
      }

      restoreStyle() {
        super.restoreStyle();
        this.inElements.forEach(function (collapsible) {
          collapsible.restoreStyle();
        });
        this.outElements.forEach(function (collapsible) {
          collapsible.restoreStyle();
        });

      }
    }

    const wrappers = [];
    const wrappersElemsIndexes = [];
    const wrapperlessElements = {
      inElements: [],
      outElements: []
    };

    const constructElements = function () {
      Util.findAndApply(epElement, newState.CLASS_TARGET, function (elem) {
        const collapsible = new Collapsible(elem);
        const wrapperElem = Util.getClosest(elem, CLASS_COLLAPSE_WRAPPER, epElement);
        if (wrapperElem) {
          const index = wrappersElemsIndexes.indexOf(wrapperElem);
          if (index === -1) {
            const wrapper = new CollapsiblesWrapper(wrapperElem);
            wrapper.inElements.push(collapsible);
            wrappers.push(wrapper);
            wrappersElemsIndexes.push(wrapperElem);
          } else {
            wrappers[index].inElements.push(collapsible);
          }
        } else {
          wrapperlessElements.inElements.push(collapsible);
        }
      });
      Util.findAndApply(epElement, oldState.CLASS_TARGET, function (elem) {
        const collapsible = new Collapsible(elem);
        const wrapperElem = Util.getClosest(elem, CLASS_COLLAPSE_WRAPPER, epElement);
        if (wrapperElem) {
          const index = wrappersElemsIndexes.indexOf(wrapperElem);
          if (index === -1) {
            const wrapper = new CollapsiblesWrapper(wrapperElem);
            wrapper.outElements.push(collapsible);
            wrappers.push(wrapper);
            wrappersElemsIndexes.push(wrapperElem);
          } else {
            wrappers[index].outElements.push(collapsible);
          }
        } else {
          wrapperlessElements.outElements.push(collapsible);
        }
      });
    };

    const animationPrepare = function () {
      Util.addClass(epElement, oldState.CLASS_TRANSITIONING);
      Util.addClass(epElement, newState.CLASS_TRANSITIONING);

      wrappers.forEach(function(wrapper) {
        wrapper.inElements.forEach(function (collapsible) {
          collapsible.updateStyle('willChange', 'opacity');
          collapsible.updateStyle('opacity', '0');
          collapsible.updateStyle('position', 'absolute');
          collapsible.updateStyle('top', '0');
          collapsible.updateStyle('left', '0');
          collapsible.updateStyle('right', '0');
          collapsible.updateStyle('zIndex', '1');
        });
        let outHeight = window.getComputedStyle(wrapper.elem).height;
        wrapper.outElements.forEach(function (collapsible) {
          collapsible.updateStyle('willChange', 'opacity');
          collapsible.updateStyle('opacity', '1', true);
          collapsible.updateStyle(
            'height',
            window.getComputedStyle(collapsible.elem).height
          );
        });
        wrapper.updateStyle('height', outHeight);
        wrapper.updateStyle('position', 'relative');
        wrapper.updateStyle('overflow', 'hidden');
        wrapper.updateStyle('willChange', 'height');
      });
    };

    const animationStart = function () {
      Util.addClass(epElement, newState.CLASS);
      Util.removeClass(epElement, oldState.CLASS);
      wrappers.forEach(function (wrapper) {
        let outHeight = wrapper.inElements.reduce(function(prev, curr) {
          return prev + parseInt(window.getComputedStyle(curr.elem).height);
        }, 0);
        wrapper.elem.style.height = outHeight + 'px';
        wrapper.inElements.forEach(function(collapsible){
          collapsible.elem.style.opacity = '1';
        });
        wrapper.outElements.forEach(function(collapsible){
          collapsible.elem.style.opacity = '0';
        });
      });
    };

    this.animationEnd = function () {
      Util.removeClass(epElement, oldState.CLASS_TRANSITIONING);
      Util.removeClass(epElement, newState.CLASS_TRANSITIONING);
      wrappers.forEach(function(wrapper) {
        wrapper.restoreStyle();
      });
      this._transitioning = false;
      this.animationEnd = null;
    }.bind(this);

    constructElements();
    this.animation = Util.threeStepsAnimation(
      animationPrepare,
      animationStart,
      this.animationEnd,
      ANIMATION_DURATION
    );
  }

  _initEventDispatcher () {
    const self = this;
    const eventDispatcher = function () {
      self._elem.dispatchEvent(Util.createEvent(EPANEL_EVENT_CHANGE));
    };
    this.addStateChangeListener(eventDispatcher);
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

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(ExpansionPanel);
export {ExpansionPanel, factory, STATE as EXPANSION_PANEL_STATES};

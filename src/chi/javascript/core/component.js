import {Util} from "./util";

let componentCounter = 0;

class Component {

  constructor(elem, config) {
    this._elem = elem;
    this._config = config;
    this._eventHandlers = [];
    this._componentCounterNo = componentCounter++;
  }

  static get componentType () {
    throw "componentType is intended to be an abstract method, " +
    "please implement it in your component. ";
  }

  static get componentSelector () {
    throw "There is no defined selector for this component. ";
  }

  get componentCounterNo () {
    return this._componentCounterNo;
  }

  static factory(elem, config) {

    const selfClass = this;

    const factoryMethod = function(elem, config) {
      return new selfClass(elem, config);
    };

    const cachedFactoryMethod = function(elem, config) {
      return Util.cachedComponentFactory(
        elem,
        config,
        selfClass.componentType,
        factoryMethod
      );
    };

    const arraySupportCachedFactoryMethod = Util.addArraySupportToFactory(cachedFactoryMethod);

    return arraySupportCachedFactoryMethod (elem, config);
  }

  _addEventHandler (elem, type, handler, useCapture) {
    elem.addEventListener(type, handler, useCapture || false);
    const eventHandler = {
      elem: elem,
      type: type,
      handler: handler,
      useCapture: useCapture
    };
    this._eventHandlers.push(eventHandler);
  }

  _removeEventHandlers () {
    this._eventHandlers.forEach(function (eh) {
      eh.elem.removeEventListener(eh.type, eh.handler);
    });
    this._eventHandlers.length = 0;
  }

  static initAll(config) {
    const selfClass = this;
    Array.prototype.forEach.call(
      document.querySelectorAll(selfClass.componentSelector), function (elem) {
        selfClass.factory(elem, config);
      }
    );
  }

  _addEventHandler (elem, type, handler, useCapture) {
    elem.addEventListener(type, handler, useCapture || false);
    const eventHandler = {
      elem: elem,
      type: type,
      handler: handler,
      useCapture: useCapture
    };
    this._eventHandlers.push(eventHandler);
  }

  _removeEventHandlers () {
    this._eventHandlers.forEach(function (eh) {
      eh.elem.removeEventListener(eh.type, eh.handler);
    });
    this._eventHandlers.length = 0;
  }

}

export {Component};

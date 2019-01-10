import {Util} from "./util";

class Component {

  constructor(elem, config) {
    this._elem = elem;
    this._config = config;
  }

  static get componentType () {
    throw "componentType is intended to be an abstract method, " +
    "please implement it in your component. ";
  }

  static get componentSelector () {
    throw "There is no defined selector for this component. ";
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

  static initAll(config) {
    const selfClass = this;
    Array.prototype.forEach.call(
      document.querySelectorAll(selfClass.componentSelector), function (elem) {
        selfClass.factory(elem, config);
      }
    );
  }
}

export {Component};

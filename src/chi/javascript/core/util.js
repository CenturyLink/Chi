import {chi} from './chi.js';

export class Util {

  static removeClass (elem, className) {
    elem.className = elem.className.split(' ').filter(function (v) {
      return v !== className;
    }).join(' ');
  }

  static addClass (elem, className) {
    if (!Util.hasClass(elem, className)) {
      elem.className += ' ' + className;
    }
  }

  static hasClass (elem, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(elem.className);
  }

  static toggleClass (elem, className) {
    if (Util.hasClass(elem, className)) {
      Util.removeClass(elem, className);
    } else {
      Util.addClass(elem, className);
    }
  }

  /**
   * Tests if an element has a target and returns it.
   * Target can be described by an xpath selector in href or in data-target
   * attributes. If an element has a target attribute, cancels the target
   * normal finding. data-target takes prevalence over href.
   * @param {Element} element Element which has the target associated.
   * @returns {Element|null} First target element found or null if none.
   */
  static getTarget (element) {
    let selector = element.dataset && element.dataset.target ?
      element.dataset.target.trim() :
      '';
    if (!selector && !element.getAttribute('target')) {
      const hrefTarget = element.getAttribute('href');
      selector =
        hrefTarget && hrefTarget.length > 1 && hrefTarget.charAt(0) === '#' ?
        hrefTarget.trim() :
        '';
    }
    if (selector) {
      const target = document.querySelector(selector);
      if (target) {
        return target;
      }
    }
    return null;
  }

  static findAndApply (ancestor, className, callback) {
    if (Util.hasClass(ancestor, className)) {
      callback(ancestor);
    } else if (ancestor.getElementsByClassName) {
      Array.prototype.forEach.call(
        ancestor.getElementsByClassName(className), function (elem) {
          callback(elem);
        }
      );
    }
  }

  static emulateTransitionEnd (transitionDuration, eventHandler) {
    return window.setTimeout(eventHandler, transitionDuration);
  }

  static getData (elem, key) {
    return elem[chi.expando] && elem[chi.expando][key];
  }

  static isSetData (elem, key) {
    return elem[chi.expando] && elem[chi.expando].hasOwnProperty(key);
  }

  static removeData (elem, key) {
    delete elem[chi.expando][key];
    if (Object.getOwnPropertyNames(elem[chi.expando]).length === 0) {
      Util.removeDataStructure(elem);
    }
  }

  static setData (elem, key, value) {
    Util.prepareDataStructure(elem);
    elem[chi.expando][key] = value;
  }

  static prepareDataStructure (elem) {
    if (!elem[chi.expando]) {
      elem[chi.expando] = {};
    }
  }

  static removeDataStructure (elem) {
    delete elem[chi.expando];
  }


  static registerComponent (type, elem, obj) {
    let index = Util._getNewRegistrationIndex();
    Util.setData(elem, type, index);
    if (!chi.registeredComponents[type]) {
      chi.registeredComponents[type] = {};
    }
    chi.registeredComponents[type][index] = obj;
  }

  static unregisterComponent (type, elem) {
    let index = Util.getData(elem, type);
    if (chi.registeredComponents[type]) {
      delete chi.registeredComponents[type][index];
    }
    Util.removeData(elem, type);
  }

  static getRegisteredComponent (type, elem) {
    let index = Util.getData(elem, type);
    if (index || index === 0) {
      return chi.registeredComponents[type] &&
        chi.registeredComponents[type][index];
    } else {
      return false;
    }
  }

  static cachedComponentFactory (elem, config, componentType, objectGenerator) {
    let object = Util.getRegisteredComponent(componentType, elem);
    if (!object) {
      object = objectGenerator(elem, config);
      const objectDispose = object.dispose;
      object.dispose = function() {
        objectDispose.call(object);
        Util.unregisterComponent(componentType, elem);
      };
      Util.registerComponent(componentType, elem, object);
    }
    return object;
  }

  static _getNewRegistrationIndex () {
    return chi.componentIndex++;
  }

  static extend (originArray, extensorArray) {
    const resultArray = Util.copyObject(originArray);
    if (!extensorArray) {
      return resultArray;
    }
    for (let key in extensorArray) {
      if (extensorArray[key] === undefined) {
        delete resultArray[key];
      } else {
        resultArray[key] = extensorArray[key];
      }
    }
    return resultArray;
  }

  static addArraySupportToFactory (factoryMethod) {
    return function(elem, config) {
      if (
        Array.isArray(elem) ||
        NodeList.prototype.isPrototypeOf(elem) ||
        HTMLCollection.prototype.isPrototypeOf(elem)
      ) {
        const returnV = [];
        Array.prototype.forEach.call(elem, function(e) {
          returnV.push(factoryMethod(e, config));
        });
        return returnV;
      } else {
        return factoryMethod(elem, config);
      }
    };
  }

  static isNumeric (n) {
    return ( typeof n === "number" || typeof n === "string" ) &&
      !isNaN( n - parseFloat( n ) );
  }

  static isInteger (n) {
    return typeof n === 'number' &&
      isFinite(n) &&
      Math.floor(n) === n;
  }

  static createEvent (eventType) {
    let event;
    if(typeof Event  === 'function') {
      event = new Event(eventType);
    } else {
      event = document.createEvent('Event');
      event.initEvent(eventType, true, true);
    }
    return event;
  }

  static threeStepsAnimation (
    prepareAnimation, startAnimation, emulateTransitionEnd, transitionDuration
  ) {
    const animation = {};
    animation.stopped = false;
    animation.status = '';
    animation.prepare = prepareAnimation;
    animation.start = startAnimation;
    animation.end = emulateTransitionEnd;
    animation.duration = transitionDuration;

    animation.prepareAnimationFrame = window.requestAnimationFrame(function() {
      if (animation.stopped) {
        return;
      }
      animation.status = 'preparing';
      animation.prepare();
      animation.status = 'prepared';
      animation.startAnimationFrame = window.requestAnimationFrame(function () {
        if (animation.stopped) {
          return;
        }
        animation.status = 'starting';
        animation.start();
        animation.status = 'started';
        animation.endTimeOut =
          Util.emulateTransitionEnd(transitionDuration, function() {
            if (animation.stopped) {
              return;
            }
            animation.status = 'ending';
            animation.end();
            animation.stuatus = 'ended';
          });
      });
    });
    return animation;
  }

  static stopThreeStepsAnimation (animation, endAnimation) {
    if (typeof endAnimation === 'undefined') {
      endAnimation = true;
    }
    animation.stopped = true;
    if (animation.prepareAnimationFrame) {
      window.cancelAnimationFrame(animation.prepareAnimationFrame);
    }
    if (animation.startAnimationFrame) {
      window.cancelAnimationFrame(animation.startAnimationFrame);
    }
    if (animation.endTimeOut) {
      window.clearTimeout(animation.endTimeOut);
    }

    const shouldEndAnimationStatus = [
      'preparing',
      'prepared',
      'starting',
      'started'
    ];

    if (
      endAnimation &&
      shouldEndAnimationStatus.indexOf(animation.status) > -1
    ) {
      animation.end();
      animation.status = 'force stopped';
    }

  }

  static calculateExternalWidth (elem, safe) {
    const style = window.getComputedStyle(elem);
    if (typeof safe === 'undefined') {
      safe = false;
    }
    if (safe) {
      if (style.boxSizing === 'border-box') {
        return Math.ceil(parseFloat(style.width)) +
          Math.ceil(parseFloat(style.marginLeft)) +
          Math.ceil(parseFloat(style.marginRight));
      } else {
        return Math.ceil(parseFloat(style.width)) +
          Math.ceil(parseFloat(style.marginLeft)) +
          Math.ceil(parseFloat(style.marginRight)) +
          Math.ceil(parseFloat(style.paddingLeft)) +
          Math.ceil(parseFloat(style.paddingRight)) +
          Math.ceil(parseFloat(style.borderLeftWidth)) +
          Math.ceil(parseFloat(style.borderRightWidth));
      }
    } else {
      if (style.boxSizing === 'border-box') {
        return parseFloat(style.width) +
          parseFloat(style.marginLeft) +
          parseFloat(style.marginRight);
      } else {
        return parseFloat(style.width) +
          parseFloat(style.marginLeft) +
          parseFloat(style.marginRight) +
          parseFloat(style.paddingLeft) +
          parseFloat(style.paddingRight) +
          parseFloat(style.borderLeftWidth) +
          parseFloat(style.borderRightWidth);
      }
    }
  }

  static calculateInternalWidth (elem, safe) {
    const style = window.getComputedStyle(elem);
    if (typeof safe === 'undefined') {
      safe = false;
    }
    if (safe) {
      if (style.boxSizing === 'border-box') {
        return Math.floor(parseFloat(style.width)) -
          Math.ceil(parseFloat(style.paddingLeft)) -
          Math.ceil(parseFloat(style.paddingRight)) -
          Math.ceil(parseFloat(style.borderLeftWidth)) -
          Math.ceil(parseFloat(style.borderRightWidth));
      } else {
        return Math.floor(parseFloat(style.width));
      }
    } else {
      if (style.boxSizing === 'border-box') {
        return parseFloat(style.width) -
          parseFloat(style.paddingLeft) -
          parseFloat(style.paddingRight) -
          parseFloat(style.borderLeftWidth) -
          parseFloat(style.borderRightWidth);
      } else {
        return parseFloat(style.width);
      }
    }
  }

  static calculateExternalHeight (elem, safe) {
    const style = window.getComputedStyle(elem);
    if (typeof safe === 'undefined') {
      safe = false;
    }
    if (safe) {
      if (style.boxSizing === 'border-box') {
        return Math.ceil(parseFloat(style.height)) +
          Math.ceil(parseFloat(style.marginBottom)) +
          Math.ceil(parseFloat(style.marginTop));
      } else {
        return Math.ceil(parseFloat(style.height)) +
          Math.ceil(parseFloat(style.marginBottom)) +
          Math.ceil(parseFloat(style.marginTop)) +
          Math.ceil(parseFloat(style.paddingBottom)) +
          Math.ceil(parseFloat(style.paddingTop)) +
          Math.ceil(parseFloat(style.borderLeftWidth)) +
          Math.ceil(parseFloat(style.borderRightWidth));
      }
    } else {
      if (style.boxSizing === 'border-box') {
        return parseFloat(style.height) +
          parseFloat(style.marginBottom) +
          parseFloat(style.marginTop);
      } else {
        return parseFloat(style.height) +
          parseFloat(style.marginBottom) +
          parseFloat(style.marginTop) +
          parseFloat(style.paddingBottom) +
          parseFloat(style.paddingTop) +
          parseFloat(style.borderLeftWidth) +
          parseFloat(style.borderRightWidth);
      }
    }
  }

  static calculateInternalHeight (elem, safe) {
    const style = window.getComputedStyle(elem);
    if (typeof safe === 'undefined') {
      safe = false;
    }
    if (safe) {
      if (style.boxSizing === 'border-box') {
        return Math.floor(parseFloat(style.height)) -
          Math.ceil(parseFloat(style.paddingBottom)) -
          Math.ceil(parseFloat(style.paddingTop)) -
          Math.ceil(parseFloat(style.borderLeftWidth)) -
          Math.ceil(parseFloat(style.borderRightWidth));
      } else {
        return Math.floor(parseFloat(style.height));
      }
    } else {
      if (style.boxSizing === 'border-box') {
        return parseFloat(style.height) -
          parseFloat(style.paddingBottom) -
          parseFloat(style.paddingTop) -
          parseFloat(style.borderLeftWidth) -
          parseFloat(style.borderRightWidth);
      } else {
        return parseFloat(style.height);
      }
    }
  }

  static calculateDistance (elem1, elem2, xy, fromOrigin) {
    const bcr1 = elem1.getBoundingClientRect();
    const bcr2 = elem2.getBoundingClientRect();
    if (typeof fromOrigin === 'undefined') {
      fromOrigin = true;
    }
    if (xy ==='x') {
      if (fromOrigin) {
        return bcr2.left - bcr1.left;
      } else {
        return bcr2.left - bcr1.left - bcr1.width;
      }
    } else {
      if (fromOrigin) {
        return bcr2.top - bcr1.top;
      } else {
        return bcr2.top - bcr1.top - bcr1.height;
      }
    }
  }

  static getMediaWidth () {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }

  static getMediaHeight () {
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
  }

  static getClosest (elem, className, stopElement) {
    if (typeof stopElement === 'undefined') {
      stopElement = document;
    }
    if (elem.parentNode === stopElement || elem.parentNode === null) {
      return null;
    } else if (Util.hasClass(elem.parentNode, className)) {
      return elem.parentNode;
    } else {
      return Util.getClosest(elem.parentNode, className, stopElement);
    }
  }

  static copyObject (src) {
    let target = {};
    for (let prop in src) {
      if (src.hasOwnProperty(prop)) {
        target[prop] = src[prop];
      }
    }
    return target;
  }

  static noOp () {}

}

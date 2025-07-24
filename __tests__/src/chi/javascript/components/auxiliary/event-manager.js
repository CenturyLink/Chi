
class EventManager {

  constructor () {
    this.eventListeners = {};
  }

  addEventListener (eventName, listener) {
    if (typeof this.eventListeners[eventName] === 'undefined') {
      this.eventListeners[eventName] = [];
    }
    this.eventListeners[eventName].push(listener);
  }

  removeEventListener (eventName, listener) {
    if (typeof this.eventListeners[eventName] === 'undefined') {
      return;
    }
    const index = this.eventListeners[eventName].indexOf(listener);
    if (index > -1) {
      this.eventListeners[eventName].splice(index, 1);
    }
  }

  dispatchEvent (eventName, trigger) {
    if (typeof this.eventListeners[eventName] === 'undefined') {
      return;
    }
    const args = [];
    for (let i = 2 ; i < arguments.length ; i++) {
      args.push(arguments[i]);
    }
    this.eventListeners[eventName].forEach(function(listener) {
      listener.apply(trigger, args);
    });
  }

  dispose () {
    this.eventListeners = null;
  }
}

export {EventManager};

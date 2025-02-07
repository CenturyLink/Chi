'use strict';

const index = require('./index-1c2d46a0.js');

/**
 * Generates a mutation handler that executes the provided custom handler and forces render
 * @param handler custom function to execute on mutation
 * @param forceRender forces re-rendering of the element
 * @param element element to re-render
 * @returns Function
 */
const getMutationHandler = (handler, forceRender, element) => (mutations, observer) => {
    if (handler) {
        handler(mutations, observer);
    }
    if (forceRender) {
        index.forceUpdate(element);
    }
};
/**
 * Adds the mutation observer disconnect to the element's disconnected callback method
 * @param disconnectedCallback
 * @param mutationObserver
 * @returns
 */
const addMutationObserverDisconnect = (disconnectedCallback = () => { }, mutationObserver) => () => {
    disconnectedCallback();
    mutationObserver.disconnect();
};
/**
 * Adds a mutation observer to the context of where the function is called from.
 * By default, reacts to child-list and forces re-rendering of the element. The function accepts:
 * @param customMutationHandler function to execute when there is a mutation
 * @param config defaults to react to childList
 * @param forceRender forces re-rendering of the element when there is a mutation
 * @example connectedCallback() {
 *  customMutationHandler.call(this, () => doSomething()), config, true);
 * }
 */
function addMutationObserver(customMutationHandler = () => { }, config = { childList: true }, forceRender = true) {
    var _a;
    if (!(this.el instanceof HTMLElement)) {
        throw new Error('Mutation observer needs this.el to be defined as the HTMLElement. ' +
            `To resolve this issue, add '@Element() el: HTMLElement;' in the component.`);
    }
    const disconnectedCallback = (_a = this.disconnectedCallback) === null || _a === void 0 ? void 0 : _a.bind(this);
    const mutationObserver = new MutationObserver(getMutationHandler(customMutationHandler.bind(this), forceRender, this.el));
    mutationObserver.observe(this.el, config);
    this.disconnectedCallback = addMutationObserverDisconnect(disconnectedCallback, mutationObserver);
}

exports.addMutationObserver = addMutationObserver;

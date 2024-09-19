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
export declare function addMutationObserver(customMutationHandler?: MutationCallback, config?: MutationObserverInit, forceRender?: boolean): void;

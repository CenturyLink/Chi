import { h } from "@stencil/core";
import { CARDINAL_EXTENDED_POSITIONS } from "../../constants/positions";
import { ThreeStepsAnimation } from "../../utils/ThreeStepsAnimation";
import { Drag } from "../../utils/Drag";
import { ANIMATION_DURATION, CLASSES, ESCAPE_KEYCODE } from "../../constants/constants";
import Popper from "popper.js";
import { POPOVER_CLASSES } from "../../constants/classes";
import { addMutationObserver } from "../../utils/mutationObserver";
export class Popover {
    constructor() {
        this._componentLoaded = false;
        this._didUpdateCallBackOnceQueue = [];
        this._closePrevented = false;
        this.position = 'top';
        this.arrow = undefined;
        this.closable = false;
        this.drag = false;
        this.active = undefined;
        this.reference = undefined;
        this.portal = undefined;
        this.modal = undefined;
        this.preventAutoHide = undefined;
        this.variant = undefined;
        this._animationClasses = '';
        this.popoverTitle = undefined;
        this.popoverFooter = undefined;
    }
    positionValidation(newValue) {
        if (newValue && !CARDINAL_EXTENDED_POSITIONS.includes(newValue)) {
            throw new Error(`Not valid position ${newValue} for popover. Valid values are top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start and left-end. `);
        }
        if (this._componentLoaded) {
            this._configurePopoverPopper();
        }
    }
    referenceElementChanged(newValue) {
        Popover.referenceElementValidation(newValue);
        this._reference = newValue ? document.querySelector(newValue) : null;
        if (this._componentLoaded) {
            this._configurePopoverPopper();
        }
    }
    static referenceElementValidation(newValue) {
        if (newValue) {
            const referenceCandidates = document.querySelectorAll(newValue);
            if (referenceCandidates.length === 0) {
                throw new Error('Reference element could not be found.');
            }
            if (referenceCandidates.length > 1) {
                throw new Error(`Found ${referenceCandidates.length} reference candidates matching ${newValue}. Not able to discern which one is the preferred.`);
            }
        }
    }
    arrowChanged(newValue, oldValue) {
        if (!!newValue !== !!oldValue && this._componentLoaded) {
            this._configurePopoverPopper();
        }
    }
    statusChanged(newValue, oldValue) {
        if (!!newValue !== !!oldValue) {
            if (newValue) {
                this.preventAutoClose();
                this._show();
            }
            else {
                this._hide();
            }
        }
    }
    dragUpdated(newVal) {
        if (newVal && !this._drag) {
            this._drag = new Drag(this._popoverHeader, this._popoverElement, this);
        }
        else if (!newVal && this._drag) {
            this._drag.dispose();
            this._drag = undefined;
            // To-do Recover Popper with auto-hide functionality
        }
    }
    /**
     * Toggles active state (show/hide)
     */
    async toggle() {
        if (this.active) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * Shows the popover.
     */
    async show() {
        this.active = true;
    }
    /**
     * Hides the popover
     */
    async hide() {
        this.active = false;
    }
    _resetPopperPosition() {
        this._popper.update();
    }
    _show() {
        if (!this._popper)
            this._initializePopper();
        if (this.currentAnimation && !this.currentAnimation.isStopped()) {
            this.currentAnimation.stop();
        }
        this._animationClasses = CLASSES.TRANSITIONING;
        // We need to run this code before _animationClasses have been updated in the DOM,
        // so we wait for the componentDidUpdate hook to run _resetPopperPosition.
        this._didUpdateCallBackOnceQueue.push(() => {
            const transition = this._popoverElement.style.transition;
            this._popoverElement.style.transition = 'none';
            // Because this popper method is asynchronous, cannot be done in step 1 of
            // animation, as it will be executed between step 1 and step 2.
            this._resetPopperPosition();
            this.currentAnimation = ThreeStepsAnimation.animationFactory(() => {
                this._popoverElement.style.transform = this._preAnimationTransformStyle;
            }, () => {
                this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
                this._popoverElement.style.transition = transition;
                this._popoverElement.style.transform = this._postAnimationTransformStyle;
            }, () => {
                this._animationClasses = CLASSES.ACTIVE;
                this.eventShown.emit();
            }, ANIMATION_DURATION.SHORT);
        });
        this.eventShow.emit();
    }
    _hide() {
        if (this.currentAnimation && !this.currentAnimation.isStopped()) {
            this.currentAnimation.stop();
        }
        this.currentAnimation = ThreeStepsAnimation.animationFactory(() => {
            this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
        }, () => {
            this._animationClasses = CLASSES.TRANSITIONING;
            this._popoverElement.style.transform = this._preAnimationTransformStyle;
        }, () => {
            this._animationClasses = '';
            if (!this._popper) {
                this._initializePopper();
            }
            this.eventHidden.emit();
        }, ANIMATION_DURATION.SHORT);
        this.eventHide.emit();
    }
    _configurePopoverPopper() {
        if (!this._reference) {
            if (this._popper) {
                this._popper.destroy();
                this._popper = null;
            }
            return;
        }
        this._initializePopper();
        this._popper.update();
    }
    _initializePopper() {
        const savePopperData = (data) => {
            this._preAnimationTransformStyle = null;
            this._postAnimationTransformStyle = data.styles.transform;
            if (data.placement.indexOf('top') === 0) {
                this._preAnimationTransformStyle = `translate3d(${data.popper.left}px, ${data.popper.top + 20}px, 0)`;
            }
            else if (data.placement.indexOf('right') === 0) {
                this._preAnimationTransformStyle = `translate3d(${data.popper.left - 20}px, ${data.popper.top}px, 0)`;
            }
            else if (data.placement.indexOf('bottom') === 0) {
                this._preAnimationTransformStyle = `translate3d(${data.popper.left}px, ${data.popper.top - 20}px, 0)`;
            }
            else if (data.placement.indexOf('left') === 0) {
                this._preAnimationTransformStyle = `translate3d(${data.popper.left + 20}px, ${data.popper.top}px, 0)`;
            }
            else {
                this._preAnimationTransformStyle = data.styles.transform;
            }
            return data;
        };
        this._popper = new Popper(this._reference, this._popoverElement, {
            modifiers: {
                applyStyle: { enabled: true },
                applyChiStyle: {
                    enabled: true,
                    fn: savePopperData,
                    // Set order to run after popper applyStyle modifier
                    // as we need data.styles to be filled.
                    order: 875,
                },
                arrow: {
                    element: `.${POPOVER_CLASSES.ARROW}`,
                    enabled: this.arrow,
                },
                preventOverflow: {
                    boundariesElement: 'window',
                },
            },
            removeOnDestroy: false,
            placement: this.position,
        });
    }
    _destroyPopper() {
        this._preAnimationTransformStyle = null;
        this._postAnimationTransformStyle = null;
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
    }
    connectedCallback() {
        addMutationObserver.call(this, undefined, { childList: true, subtree: true });
    }
    componentWillLoad() {
        this.positionValidation(this.position);
        this.referenceElementChanged(this.reference);
        if (this.active) {
            this._animationClasses = CLASSES.ACTIVE;
        }
        if (Array.from(this.el.querySelectorAll(`[slot=${POPOVER_CLASSES.FOOTER}]`)).length > 0) {
            this.popoverFooter = true;
        }
    }
    componentDidLoad() {
        this._documentClickHandler = () => {
            if (!this._closePrevented && !this.preventAutoHide) {
                this.hide();
            }
        };
        this._documentKeyHandler = (e) => {
            if (!this.preventAutoHide && 'key' in e && (e.key === 'Escape' || e.key === 'Esc' || e.key === ESCAPE_KEYCODE)) {
                this.hide();
            }
        };
        this._configurePopoverPopper();
        this._componentLoaded = true;
        if (this.drag) {
            this.dragUpdated(this.drag);
        }
        else {
            document.addEventListener('click', this._documentClickHandler);
            document.addEventListener('keyup', this._documentKeyHandler);
        }
    }
    disconnectedCallback() {
        this._destroyPopper();
        if (this.currentAnimation && !this.currentAnimation.isStopped()) {
            this.currentAnimation.stop();
        }
        if (this._drag) {
            this._drag.dispose();
            this._drag = undefined;
        }
        this.currentAnimation = null;
        this._componentLoaded = false;
        document.removeEventListener('click', this._documentClickHandler);
        document.removeEventListener('keyup', this._documentKeyHandler);
    }
    componentDidUpdate() {
        while (this._didUpdateCallBackOnceQueue.length) {
            const cb = this._didUpdateCallBackOnceQueue.shift();
            cb();
        }
    }
    preventAutoClose() {
        this._closePrevented = true;
        window.clearTimeout(this._closePreventedTimeout);
        this._closePreventedTimeout = window.setTimeout(() => {
            this._closePrevented = false;
        }, 100);
    }
    hostData() {
        return {
            'aria-hidden': this.active ? 'false' : 'true',
        };
    }
    render() {
        const closeButton = this.closable ? h("chi-button", { size: "xs", onClick: () => this.hide(), type: "close" }) : null;
        const popoverHeader = this.popoverTitle && (h("header", { key: '9158ac9b4c0d5872c4254995c845e6692098f8e8', ref: (el) => (this._popoverHeader = el), class: POPOVER_CLASSES.HEADER }, h("h2", { key: 'b9af7c3017c4642cce168e246f458870f1cb825b', class: POPOVER_CLASSES.TITLE }, this.popoverTitle)));
        const slot = this.variant && this.variant === 'text' ? (h("p", { class: POPOVER_CLASSES.TEXT }, h("slot", null))) : (h("slot", null));
        const chiFooter = this.popoverFooter && (h("div", { key: '2fe6751fc5e6b08b5a4c1c76ba773327dc128a30', class: POPOVER_CLASSES.FOOTER }, h("slot", { key: '3e64edf72465e30eb4353838b9360ef62ff4b56e', name: POPOVER_CLASSES.FOOTER })));
        return (h("section", { key: '716a0d013fd9a5fce44de8c9cff894483151ee28', class: `
          ${POPOVER_CLASSES.POPOVER}
          ${CLASSES.ANIMATED}
          ${this.position ? `chi-popover--${this.position}` : ''}
          ${this.arrow ? '' : POPOVER_CLASSES.NO_ARROW}
          ${this._animationClasses}
          ${this._reference && this._reference.classList.contains('chi-input') ? POPOVER_CLASSES.INPUT : ''}
          ${this.closable ? POPOVER_CLASSES.CLOSABLE : ''}
          ${this.drag ? POPOVER_CLASSES.DRAGGABLE : ''}
          ${this.portal ? '-portal' : ''}
          ${this.modal ? POPOVER_CLASSES.MODAL : ''}
        `, ref: (el) => (this._popoverElement = el), onClick: () => this.preventAutoClose(), role: "dialog", "aria-modal": "true", "aria-label": this.popoverTitle, "aria-hidden": !this.active }, closeButton, popoverHeader, h("div", { key: '5e6f944710ee6a926ee3b8ae2ff2ef0857b00236', class: POPOVER_CLASSES.CONTENT }, slot), chiFooter, this.arrow && h("div", { key: 'dc27668c563154151bdaec58410b8c73086f61fd', class: POPOVER_CLASSES.ARROW })));
    }
    static get is() { return "chi-popover"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["popover.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["popover.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "import",
                            "path": "popper.js",
                            "id": "node_modules::Placement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set position of the popover { top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end }"
                },
                "attribute": "position",
                "reflect": true,
                "defaultValue": "'top'"
            },
            "arrow": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to add an arrow between the popover and the reference element"
                },
                "attribute": "arrow",
                "reflect": true
            },
            "closable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to add a close button to the popover"
                },
                "attribute": "closable",
                "reflect": true,
                "defaultValue": "false"
            },
            "drag": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to allow the user to manually change the position of the popover"
                },
                "attribute": "drag",
                "reflect": true,
                "defaultValue": "false"
            },
            "active": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to open or close the popover"
                },
                "attribute": "active",
                "reflect": true
            },
            "reference": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "CSS Selector to the reference Element. I.e. #id > p"
                },
                "attribute": "reference",
                "reflect": true
            },
            "portal": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define portal style of the Popover"
                },
                "attribute": "portal",
                "reflect": true
            },
            "modal": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define modal style of the Popover"
                },
                "attribute": "modal",
                "reflect": true
            },
            "preventAutoHide": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Prevents closing the popover when clicking out of its bounds"
                },
                "attribute": "prevent-auto-hide",
                "reflect": true
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define popover variant { text, custom }"
                },
                "attribute": "variant",
                "reflect": true
            },
            "popoverTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define popover title"
                },
                "attribute": "title",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "_animationClasses": {},
            "popoverFooter": {}
        };
    }
    static get events() {
        return [{
                "method": "eventShow",
                "name": "chiPopoverShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Popover show method has executed, but the showing animation has not started yet"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventHide",
                "name": "chiPopoverHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Popover hide method has executed, but the closing animation has not started yet"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventShown",
                "name": "chiPopoverShown",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Popover has been shown to the user and is fully visible. The animation has completed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventHidden",
                "name": "chiPopoverHidden",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Popover has been hidden to the user. The animation has completed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggle": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggles active state (show/hide)",
                    "tags": []
                }
            },
            "show": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Shows the popover.",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Hides the popover",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "position",
                "methodName": "positionValidation"
            }, {
                "propName": "reference",
                "methodName": "referenceElementChanged"
            }, {
                "propName": "arrow",
                "methodName": "arrowChanged"
            }, {
                "propName": "active",
                "methodName": "statusChanged"
            }, {
                "propName": "drag",
                "methodName": "dragUpdated"
            }];
    }
}

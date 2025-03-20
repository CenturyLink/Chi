import { h } from "@stencil/core";
import { MODAL_CLASSES, BACKDROP_CLASSES, CLOSED_CLASS, ACTIVE_CLASS, CENTER_CLASS, INVERSE_CLASS, ANIMATED_CLASS, TRANSITIONING_CLASS, UTILITY_CLASSES, NO_BORDER_CLASS, } from "../../constants/classes";
import { v4 as uuid4 } from "uuid";
import { joinArrayValues } from "../../utils/utils";
import { ThreeStepsAnimation } from "../../utils/ThreeStepsAnimation";
import { ANIMATION_DURATION, MODAL_BACKDROP_HEIGHT, MODAL_CONTENT_HEIGHT } from "../../constants/constants";
const { TYPOGRAPHY } = UTILITY_CLASSES;
export class Modal {
    constructor() {
        /**
         *  To set Modal subtitle
         */
        this.subtitle = '';
        /**
         *  To set trigger active state
         */
        this.active = false;
        /**
         *  To set trigger button text
         */
        this.button = '';
        /**
         *  To set centered layout
         */
        this.center = false;
        /**
         *  To add close button
         */
        this.closable = true;
        /**
         *  To set inverse layout
         */
        this.inverse = false;
        /**
         *  To set animated layout
         */
        this.animated = true;
        /**
         *  To set no-bordered layout
         */
        this.noBorder = false;
        /**
         *  To delete header and footer from the Modal
         */
        this.simple = false;
        this.isActive = this.active;
        this._uuid4 = uuid4();
        this.getUpdateAnimationClasses = (prepareClasses, startClasses) => {
            const prepareAnimationClasses = [`${TRANSITIONING_CLASS} ${prepareClasses}`, TRANSITIONING_CLASS];
            const startAnimationClasses = [TRANSITIONING_CLASS, `${TRANSITIONING_CLASS} ${startClasses}`];
            if (!this.isActive) {
                prepareAnimationClasses.reverse();
                startAnimationClasses.reverse();
            }
            return [prepareAnimationClasses, startAnimationClasses];
        };
        this.getCloseButton = () => (h("chi-button", { type: "close", class: UTILITY_CLASSES.DISPLAY.FLEX, "data-dismiss": "modal", "aria-label": "Close", onClick: () => this.cancel() }));
        this.cancel = () => {
            this.hide();
            this.chiModalCancel.emit();
        };
        this.accept = () => {
            this.hide();
            this.chiModalAccept.emit();
        };
        this.getFooter = () => (h("footer", { class: `${MODAL_CLASSES.FOOTER} ${this.noBorder ? NO_BORDER_CLASS : ''}` }, h("slot", { name: "footer" }, h("chi-button", { "data-dismiss": "modal", onClick: () => this.cancel() }, "Cancel"), h("chi-button", { color: "primary", onClick: () => this.accept() }, "Save"))));
    }
    sectionAnimationClassesChanged() {
        this.isActive = this.sectionAnimationClasses.includes(ACTIVE_CLASS);
    }
    contentHeightValidation(newValue) {
        this.validateScrollValue(newValue, 'content-height');
    }
    backdropHeightValidation(newValue) {
        this.validateScrollValue(newValue, 'backdrop-height');
    }
    triggerValidation() {
        const triggers = [this.button, this.reference, this.el.querySelector('[slot="trigger"]')].filter(Boolean);
        const triggersCount = triggers.length;
        if (triggersCount === 0) {
            throw new Error(`No trigger detected. Please provide one trigger. Modal ID is ${this._uuid4}.`);
        }
        else if (triggersCount > 1) {
            throw new Error(`Multiple triggers detected. Please provide only one trigger. Modal ID is ${this._uuid4}.`);
        }
    }
    validateScrollValue(value, propertyName) {
        if (value !== undefined && value % 8 !== 0) {
            this.el.removeAttribute(propertyName);
            throw new Error(`${value} is not a valid value for ${propertyName}. Values must be multiples of 8.`);
        }
    }
    connectedCallback() {
        if (this.el.hasAttribute('content-height')) {
            this.contentHeight = this.contentHeight || MODAL_CONTENT_HEIGHT;
        }
        if (this.el.hasAttribute('backdrop-height')) {
            this.backdropHeight = this.backdropHeight || MODAL_BACKDROP_HEIGHT;
        }
    }
    componentDidLoad() {
        this._referenceElement = this.reference && document.getElementById(this.reference);
        const triggerElement = this._referenceElement || this.el.querySelector('[slot="trigger"]');
        if (triggerElement) {
            triggerElement.addEventListener('click', () => this.toggle());
        }
    }
    componentWillLoad() {
        this.triggerValidation();
        this.contentHeightValidation(this.contentHeight);
        this.backdropHeightValidation(this.backdropHeight);
        this.sectionAnimationClasses = this.isActive ? ACTIVE_CLASS : '';
        this.backdropAnimationClasses = this.isActive ? '' : CLOSED_CLASS;
    }
    /**
     * Utility to handle animations for show and hide methods
     */
    updateAnimationClasses(sectionClasses, backdropClasses) {
        this.sectionAnimationClasses = sectionClasses;
        this.backdropAnimationClasses = backdropClasses;
    }
    handleAnimation(prepareClasses, startClasses, endAnimation) {
        if (this._animation && !this._animation.isStopped()) {
            this._animation.stop();
        }
        if (this.animated) {
            const [prepareAnimationClasses, startAnimationClasses] = this.getUpdateAnimationClasses(prepareClasses, startClasses);
            this._animation = ThreeStepsAnimation.animationFactory(() => this.updateAnimationClasses(prepareAnimationClasses[0], prepareAnimationClasses[1]), () => this.updateAnimationClasses(startAnimationClasses[0], startAnimationClasses[1]), endAnimation, ANIMATION_DURATION.MEDIUM);
        }
        else {
            endAnimation();
        }
    }
    /**
     * Shows Modal
     */
    async show() {
        const openModal = () => {
            this.updateAnimationClasses(ACTIVE_CLASS, '');
            this.chiModalShown.emit();
        };
        this.chiModalShow.emit();
        this.handleAnimation(CLOSED_CLASS, ACTIVE_CLASS, openModal);
    }
    /**
     * Hides Modal
     */
    async hide() {
        const hideModal = () => {
            this.updateAnimationClasses('', CLOSED_CLASS);
            this.chiModalHidden.emit();
        };
        this.chiModalHide.emit();
        this.handleAnimation(ACTIVE_CLASS, CLOSED_CLASS, hideModal);
    }
    /**
     * Toggles Modal
     */
    async toggle() {
        this.isActive ? await this.hide() : await this.show();
    }
    getContent() {
        const classes = joinArrayValues([
            MODAL_CLASSES.CONTENT,
            this.simple && `${TYPOGRAPHY.TEXT_CENTER} ${UTILITY_CLASSES.PADDING[6]}`,
        ]);
        const contentStyle = this.contentHeight ? { maxHeight: `${this.contentHeight}px` } : undefined;
        return (h("div", { class: classes, style: contentStyle }, h("slot", null)));
    }
    getHeader() {
        const isHeaderVisible = !this.simple && Boolean(this.modalTitle || this.subtitle || this.closable);
        if (!isHeaderVisible)
            return;
        return (h("header", { class: `${MODAL_CLASSES.HEADER} ${this.noBorder ? NO_BORDER_CLASS : ''}` }, h("h2", { class: MODAL_CLASSES.TITLE }, this.modalTitle), this.subtitle && h("h3", { class: MODAL_CLASSES.SUBTITLE }, this.subtitle), this.closable && this.getCloseButton()));
    }
    getTrigger() {
        return (h("slot", { name: "trigger" }, h("chi-button", { id: `modal-trigger-${this._uuid4}`, class: MODAL_CLASSES.TRIGGER, "data-target": `#${this._uuid4}`, onClick: () => this.toggle() }, this.button)));
    }
    getBackdropClasses() {
        return joinArrayValues([
            BACKDROP_CLASSES.BACKDROP,
            this.backdropAnimationClasses,
            this.center && CENTER_CLASS,
            this.inverse && INVERSE_CLASS,
            this.animated && ANIMATED_CLASS,
        ]);
    }
    getSectionClasses() {
        return joinArrayValues([MODAL_CLASSES.MODAL, this.sectionAnimationClasses, this.animated && ANIMATED_CLASS]);
    }
    getModal() {
        const sectionAttributes = {
            id: this._uuid4,
            class: this.getSectionClasses(),
            role: 'dialog',
            'aria-label': 'Modal description',
            'aria-modal': 'true',
        };
        const backdropStyle = this.backdropHeight ? { maxHeight: `${this.backdropHeight}px` } : undefined;
        return (h("div", { class: this.getBackdropClasses(), style: backdropStyle }, h("div", { class: BACKDROP_CLASSES.WRAPPER }, h("section", Object.assign({}, sectionAttributes), this.simple && this.closable && this.getCloseButton(), this.getHeader(), this.getContent(), !this.simple && this.getFooter()))));
    }
    render() {
        return this.reference ? (this.getModal()) : (h("div", null, this.getTrigger(), this.getModal()));
    }
    static get is() { return "chi-modal"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "modalTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To define alert title"
                },
                "getter": false,
                "setter": false,
                "attribute": "title",
                "reflect": false
            },
            "subtitle": {
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
                    "text": "To set Modal subtitle"
                },
                "getter": false,
                "setter": false,
                "attribute": "subtitle",
                "reflect": true,
                "defaultValue": "''"
            },
            "active": {
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
                    "text": "To set trigger active state"
                },
                "getter": false,
                "setter": false,
                "attribute": "active",
                "reflect": true,
                "defaultValue": "false"
            },
            "button": {
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
                    "text": "To set trigger button text"
                },
                "getter": false,
                "setter": false,
                "attribute": "button",
                "reflect": true,
                "defaultValue": "''"
            },
            "center": {
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
                    "text": "To set centered layout"
                },
                "getter": false,
                "setter": false,
                "attribute": "center",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "To add close button"
                },
                "getter": false,
                "setter": false,
                "attribute": "closable",
                "reflect": true,
                "defaultValue": "true"
            },
            "contentHeight": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set scrollable content"
                },
                "getter": false,
                "setter": false,
                "attribute": "content-height",
                "reflect": true
            },
            "backdropHeight": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set scrollable modal"
                },
                "getter": false,
                "setter": false,
                "attribute": "backdrop-height",
                "reflect": true
            },
            "inverse": {
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
                    "text": "To set inverse layout"
                },
                "getter": false,
                "setter": false,
                "attribute": "inverse",
                "reflect": true,
                "defaultValue": "false"
            },
            "animated": {
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
                    "text": "To set animated layout"
                },
                "getter": false,
                "setter": false,
                "attribute": "animated",
                "reflect": true,
                "defaultValue": "true"
            },
            "noBorder": {
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
                    "text": "To set no-bordered layout"
                },
                "getter": false,
                "setter": false,
                "attribute": "no-border",
                "reflect": true,
                "defaultValue": "false"
            },
            "simple": {
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
                    "text": "To delete header and footer from the Modal"
                },
                "getter": false,
                "setter": false,
                "attribute": "simple",
                "reflect": true,
                "defaultValue": "false"
            },
            "reference": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To provide id of an external reference element"
                },
                "getter": false,
                "setter": false,
                "attribute": "reference",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "sectionAnimationClasses": {},
            "backdropAnimationClasses": {}
        };
    }
    static get events() {
        return [{
                "method": "chiModalShow",
                "name": "chiModalShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when Modal show method has been executed, but the showing animation has not started yet."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "chiModalShown",
                "name": "chiModalShown",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when Modal has been shown to the user and is fully visible. The animation has completed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "chiModalHide",
                "name": "chiModalHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when Modal hide method has been executed, but the closing animation has not started yet."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "chiModalHidden",
                "name": "chiModalHidden",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when Modal has been hidden to the user. The animation has completed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "chiModalAccept",
                "name": "chiModalAccept",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when user exists the Modal using Save or Action buttons."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "chiModalCancel",
                "name": "chiModalCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when user exits the modal using Cancel or Close buttons."
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
                    "text": "Shows Modal",
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
                    "text": "Hides Modal",
                    "tags": []
                }
            },
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
                    "text": "Toggles Modal",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sectionAnimationClasses",
                "methodName": "sectionAnimationClassesChanged"
            }, {
                "propName": "contentHeight",
                "methodName": "contentHeightValidation"
            }, {
                "propName": "backdropHeight",
                "methodName": "backdropHeightValidation"
            }];
    }
}

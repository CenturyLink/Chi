import { h } from "@stencil/core";
import { MODAL_CLASSES, BACKDROP_CLASSES, CLOSED_CLASS, ACTIVE_CLASS, CENTER_CLASS, CENTERED_CLASS, INVERSE_CLASS, ANIMATED_CLASS, TRANSITIONING_CLASS, UTILITY_CLASSES, NO_BORDER_CLASS, } from "../../constants/classes";
import { v4 as uuid4 } from "uuid";
import { joinArrayValues } from "../../utils/utils";
import { ThreeStepsAnimation } from "../../utils/ThreeStepsAnimation";
import { ANIMATION_DURATION } from "../../constants/constants";
const { MARGIN, TYPOGRAPHY } = UTILITY_CLASSES;
export class Modal {
    constructor() {
        /**
         *  To set Modal title
         */
        this.modalTitle = 'Modal title';
        /**
         *  To set Modal subtitle
         */
        this.subtitle = '';
        /**
         *  To set trigger button text
         */
        this.button = '';
        /**
         *  To set cenetered layout
         */
        this.center = false;
        /**
         *  To set inverse layout
         */
        this.inverse = false;
        /**
         *  To add back button in header
         */
        this.multiStep = false;
        /**
         *  To set animated layout
         */
        this.animated = false;
        /**
         *  To set no-bordered layout
         */
        this.noBorder = false;
        /**
         *  To delete header and footer from the Modal
         */
        this.simple = false;
        this.isActive = false;
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
    scrollableValidation(newValue) {
        if (newValue && !['400', '480', 'long-content'].includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for scrollable. Valid values are 400, 480 and long-content`);
        }
    }
    triggerValidation() {
        const triggersNumber = [this.button, this.target, this.el.querySelector('[slot="trigger"]')].filter(Boolean).length;
        if (triggersNumber === 0) {
            throw new Error(`No trigger detected. Please provide one trigger. Modal ID is ${this._uuid4}.`);
        }
        else if (triggersNumber > 1) {
            throw new Error(`Multiple triggers detected. Please provide only one trigger. Modal ID is ${this._uuid4}.`);
        }
    }
    componentDidLoad() {
        const triggerElement = this.target || this.el.querySelector('[slot="trigger"]');
        if (triggerElement) {
            triggerElement.addEventListener('click', () => this.toggle());
        }
    }
    componentWillLoad() {
        this.triggerValidation();
        this.scrollableValidation(this.scrollable);
        this.sectionAnimationClasses = '';
        this.backdropAnimationClasses = CLOSED_CLASS;
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
            ['400', '480'].includes(this.scrollable) && UTILITY_CLASSES.SIZING[`MAX_H${this.scrollable}`],
        ]);
        return (h("div", { class: classes }, h("slot", { name: "content" }, h("p", { class: `${TYPOGRAPHY.TEXT} ${MARGIN[0]}` }, h("slot", null)))));
    }
    getHeader() {
        const backButton = h("button", { onClick: () => this.chiModalBack.emit(), class: MODAL_CLASSES.BACK, "aria-label": "Back" });
        return (h("header", { class: `${MODAL_CLASSES.HEADER} ${this.noBorder ? NO_BORDER_CLASS : ''}` }, h("h2", { class: `${MODAL_CLASSES.TITLE} ${this.multiStep ? CENTERED_CLASS : ''}` }, this.modalTitle), this.subtitle && h("h3", { class: MODAL_CLASSES.SUBTITLE }, this.subtitle), this.multiStep && backButton, this.getCloseButton()));
    }
    getTrigger() {
        return (h("slot", { name: "trigger" }, h("chi-button", { id: `modal-trigger-${this._uuid4}`, class: MODAL_CLASSES.TRIGGER, "data-target": `#${this._uuid4}`, onClick: () => this.toggle() }, this.button)));
    }
    getBackdropClasses() {
        return joinArrayValues([
            BACKDROP_CLASSES.BACKDROP,
            this.backdropAnimationClasses,
            this.scrollable === 'long-content' && UTILITY_CLASSES.SIZING.MAX_H480,
            this.center && CENTER_CLASS,
            this.inverse && INVERSE_CLASS,
            this.animated && ANIMATED_CLASS,
        ]);
    }
    getSectionClasses() {
        return joinArrayValues([MODAL_CLASSES.MODAL, this.sectionAnimationClasses, this.animated && ANIMATED_CLASS]);
    }
    render() {
        const sectionAttributes = {
            id: this._uuid4,
            class: this.getSectionClasses(),
            role: 'dialog',
            'aria-label': 'Modal description',
            'aria-modal': 'true',
        };
        return (h("div", { key: '9c657d10d5323ada0200b32ffd9f67f559318808' }, !this.target && this.getTrigger(), h("div", { key: '5da143e2d17ed037d79660432410f08a4064abb8', class: this.getBackdropClasses() }, h("div", { key: '09ef547d12ec7a289bc14a6e39c35fbd8d778ae1', class: BACKDROP_CLASSES.WRAPPER }, h("section", Object.assign({ key: '9ad1466701de1700535c0c063485706c5f7e79da' }, sectionAttributes), !this.simple && this.getHeader(), this.getContent(), !this.simple && this.getFooter())))));
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set Modal title"
                },
                "getter": false,
                "setter": false,
                "attribute": "modal-title",
                "reflect": false,
                "defaultValue": "'Modal title'"
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
                "reflect": false,
                "defaultValue": "''"
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
                "reflect": false,
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
                    "text": "To set cenetered layout"
                },
                "getter": false,
                "setter": false,
                "attribute": "center",
                "reflect": false,
                "defaultValue": "false"
            },
            "scrollable": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ModalScrollableTypes",
                    "resolved": "\"400\" | \"480\" | \"long-content\"",
                    "references": {
                        "ModalScrollableTypes": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::ModalScrollableTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set scrollable layout"
                },
                "getter": false,
                "setter": false,
                "attribute": "scrollable",
                "reflect": false
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
                "reflect": false,
                "defaultValue": "false"
            },
            "multiStep": {
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
                    "text": "To add back button in header"
                },
                "getter": false,
                "setter": false,
                "attribute": "multi-step",
                "reflect": false,
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
                "reflect": false,
                "defaultValue": "false"
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
                "reflect": false,
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
                "reflect": false,
                "defaultValue": "false"
            },
            "target": {
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
                    "text": "To set target to serve as Modal trigger"
                },
                "getter": false,
                "setter": false,
                "attribute": "target",
                "reflect": false
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
                "method": "chiModalBack",
                "name": "chiModalBack",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when user click Back button on multi-step mode."
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
                "propName": "scrollable",
                "methodName": "scrollableValidation"
            }];
    }
}

import { h } from "@stencil/core";
import { CHI_STATES } from "../../constants/states";
import { addMutationObserver } from "../../utils/mutationObserver";
export class NumberInput {
    constructor() {
        this.initialValue = undefined;
        this.value = undefined;
        this.step = 1;
        this.max = undefined;
        this.min = undefined;
        this.disabled = undefined;
        this.required = undefined;
        this.size = undefined;
        this.expanded = undefined;
        this.inputstyle = undefined;
        this.preventValueMutation = undefined;
        this.state = undefined;
        this.helperMessage = undefined;
    }
    inputStyleValidation(newValue) {
        if (newValue && !CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid inputstyle for number input. If provided, valid values are: ${CHI_STATES.join(', ')}. `);
        }
    }
    connectedCallback() {
        addMutationObserver.call(this);
        this.initialValue = this.value;
    }
    handleChange(ev) {
        ev.stopPropagation();
        this.chiChange.emit(this.value);
    }
    handleInput(ev) {
        const input = ev.target;
        ev.stopPropagation();
        this.value = input.value;
        this.chiInput.emit(this.value);
        if (!input.validity.valid)
            this.chiNumberInvalid.emit();
    }
    handleBlur(ev) {
        const target = ev.relatedTarget;
        if (target && target.offsetParent === this._numberInput.offsetParent) {
            return;
        }
        this.chiBlur.emit(ev);
    }
    emitEventsOnClick(ev) {
        this.chiInput.emit(this.value);
        this.chiChange.emit(this.value);
        this.chiClick.emit(ev);
    }
    increment(clickEv) {
        this.el.querySelector('input').focus();
        this._numberInput.stepUp();
        this.value = this._numberInput.value;
        this.emitEventsOnClick(clickEv);
    }
    decrement(clickEv) {
        this.el.querySelector('input').focus();
        this._numberInput.stepDown();
        this.value = this._numberInput.value;
        this.emitEventsOnClick(clickEv);
    }
    /**
     * Generates and returns input element
     */
    getInput() {
        return (h("input", { type: "number", ref: (el) => (this._numberInput = el), class: `chi-input ${this.inputstyle ? `-${this.inputstyle}` : ''} ${this.state ? `-${this.state}` : ''}`, disabled: this.disabled, required: this.required, step: this.step, max: this.max, min: this.min, value: this.value, onClick: (ev) => this.chiClick.emit(ev), onChange: (ev) => this.handleChange(ev), onInput: (ev) => this.handleInput(ev), onFocus: () => this.chiFocus.emit(), onBlur: (ev) => this.handleBlur(ev), id: this.el.id ? `${this.el.id}-control` : null }));
    }
    getBaseNumberInput() {
        return (h("div", { class: `chi-number-input ${this.size ? `-${this.size}` : ''}` }, this.getInput(), h("button", { disabled: this.isDecreaseDisabled(), onClick: (ev) => this.decrement(ev), "aria-label": "Decrease" }), h("button", { disabled: this.isIncreaseDisabled(), onClick: (ev) => this.increment(ev), "aria-label": "Increase" })));
    }
    getExpandedNumberInput() {
        return (h("div", { class: `chi-number-input -expanded ${this.size ? `-${this.size}` : ''}` }, this.getInput(), h("button", { class: "chi-button -icon", disabled: this.isDecreaseDisabled(), onClick: (ev) => this.decrement(ev), "aria-label": "Decrease" }, h("div", { class: "chi-button__content" }, h("chi-icon", { icon: "minus" }))), h("button", { class: "chi-button -icon", disabled: this.isIncreaseDisabled(), onClick: (ev) => this.increment(ev), "aria-label": "Increase" }, h("div", { class: "chi-button__content" }, h("chi-icon", { icon: "plus" })))));
    }
    isDecreaseDisabled() {
        return !!(this.min && Number(this.value) <= this.min);
    }
    isIncreaseDisabled() {
        return !!(this.max && (Number(this.value) + this.step > this.max || Number(this.value) >= this.max));
    }
    getHelperMessage() {
        return h("chi-helper-message", { state: this.inputstyle }, this.helperMessage);
    }
    render() {
        let input = this.expanded ? this.getExpandedNumberInput() : this.getBaseNumberInput();
        if (this.helperMessage) {
            input = (h("div", { key: '8fbf2f4c2b4fd5cd102dc5ca56a6928ce9e0a4d0', class: "chi-input__wrapper" }, input, this.getHelperMessage()));
        }
        return input;
    }
    static get is() { return "chi-number-input"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["number-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["number-input.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "used to hold the value of the number input"
                },
                "attribute": "value",
                "reflect": true
            },
            "step": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "used to set a step to indicate the expected granularity"
                },
                "attribute": "step",
                "reflect": true,
                "defaultValue": "1"
            },
            "max": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "used to set a maximum allowed value"
                },
                "attribute": "max",
                "reflect": true
            },
            "min": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "used to set a minimum allowed value"
                },
                "attribute": "min",
                "reflect": true
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "used to determine if component is disabled or not"
                },
                "attribute": "disabled",
                "reflect": true
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "used to determine if component is required or not"
                },
                "attribute": "required",
                "reflect": true
            },
            "size": {
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
                    "text": "used to determine component's size"
                },
                "attribute": "size",
                "reflect": true
            },
            "expanded": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "used to set component's expanded mode"
                },
                "attribute": "expanded",
                "reflect": true
            },
            "inputstyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ChiStates",
                    "resolved": "\"danger\" | \"success\" | \"warning\"",
                    "references": {
                        "ChiStates": {
                            "location": "import",
                            "path": "../../constants/states",
                            "id": "src/constants/states.ts::ChiStates"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "used to provide an input style like 'danger'. Mostly used for testing purposes"
                },
                "attribute": "inputstyle",
                "reflect": false
            },
            "preventValueMutation": {
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
                    "text": "If set, component value won't be updated by itself."
                },
                "attribute": "prevent-value-mutation",
                "reflect": true
            },
            "state": {
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
                    "text": "used to provide an input state like 'hover' or 'focus'. Mostly used for testing purposes"
                },
                "attribute": "state",
                "reflect": false
            },
            "helperMessage": {
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
                    "text": "To display an additional helper text message below the Number Input"
                },
                "attribute": "helper-message",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "initialValue": {}
        };
    }
    static get events() {
        return [{
                "method": "chiChange",
                "name": "chiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when an alteration to the element's value is committed by the user"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "chiInput",
                "name": "chiInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user changed the element's value but did not commit the change yet"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "chiNumberInvalid",
                "name": "chiNumberInvalid",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the element's value committed by the user is an invalid number"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "chiFocus",
                "name": "chiFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user sets focus on the element."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "chiBlur",
                "name": "chiBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the element has lost focus."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "chiClick",
                "name": "chiClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user clicks on increment/decrement button."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "inputstyle",
                "methodName": "inputStyleValidation"
            }];
    }
}

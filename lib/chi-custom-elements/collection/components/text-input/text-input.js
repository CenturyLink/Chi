import { Fragment, h } from "@stencil/core";
import { CHI_STATES } from "../../constants/states";
import { ICON_COLORS } from "../../constants/color";
import { TEXT_INPUT_SIZES } from "../../constants/size";
import { TEXT_INPUT_TYPES, CLASSES } from "../../constants/constants";
import { addMutationObserver } from "../../utils/mutationObserver";
export class TextInput {
    constructor() {
        this.type = 'text';
        this.state = undefined;
        this.iconLeft = undefined;
        this.iconRight = undefined;
        this.iconLeftColor = undefined;
        this.iconRightColor = undefined;
        this.size = 'md';
        this.placeholder = undefined;
        this.helperMessage = undefined;
        this.value = '';
        this.name = undefined;
        this.disabled = false;
        this.readonly = false;
        this.preventValueMutation = false;
        this.spinner = false;
        this.copyText = false;
        this._status = undefined;
        this.extraClass = undefined;
    }
    el;
    /**
     * Triggered when an alteration to the element's value is committed by the user
     */
    eventChange;
    /**
     * Triggered when the user changed the element's value but did not commit the change yet
     */
    eventInput;
    /**
     * Triggered when the user sets focus on the element.
     */
    eventFocus;
    /**
     * Triggered when the element has lost focus.
     */
    eventBlur;
    stateValidation(newValue) {
        const validValues = CHI_STATES.join(', ');
        if (newValue && !CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for input. If provided, valid values are: ${validValues}. `);
        }
    }
    sizeValidation(newValue) {
        const validValues = TEXT_INPUT_SIZES.join(', ');
        if (newValue && !TEXT_INPUT_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for input. If provided, valid values are: ${validValues}. `);
        }
    }
    colorValidation(newValue) {
        const validValues = ICON_COLORS.join(', ');
        if (newValue && !ICON_COLORS.includes(newValue)) {
            throw new Error(`${newValue} is not a valid color for icon. If provided, valid values are: ${validValues}. `);
        }
    }
    iconLeftColorValidation(newValue) {
        this.colorValidation(newValue);
    }
    iconRightColorValidation(newValue) {
        this.colorValidation(newValue);
    }
    typeValidation(newValue) {
        const validValues = TEXT_INPUT_TYPES.join(', ');
        if (newValue && !TEXT_INPUT_TYPES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid type for input. If provided, valid values are: ${validValues}. `);
        }
    }
    _handleValueInput(valueChange) {
        const newValue = valueChange.target.value;
        if (!this.preventValueMutation) {
            this.value = newValue;
        }
        this.eventInput.emit(newValue);
    }
    _handleValueChange(valueChange) {
        const newValue = valueChange.target.value;
        this.eventChange.emit(newValue);
    }
    componentWillLoad() {
        this.stateValidation(this.state);
        this.iconLeftColorValidation(this.iconLeftColor);
        this.iconRightColorValidation(this.iconRightColor);
        this.sizeValidation(this.size);
        this.typeValidation(this.type);
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    getInput() {
        return (h("input", { type: this.type, class: `chi-input
          ${this.state ? `-${this.state}` : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this._status ? `-${this._status}` : ''}
          ${this.extraClass ? this.extraClass : ''}
        `, placeholder: this.placeholder || '', value: this.value, name: this.name || '', disabled: this.disabled, readonly: this.readonly, id: this.el.id ? `${this.el.id}-control` : null, onFocus: () => this.eventFocus.emit(), onBlur: () => this.eventBlur.emit(), onInput: (ev) => this._handleValueInput(ev), onChange: (ev) => this._handleValueChange(ev) }));
    }
    _getIconLeft() {
        return this.iconLeft && h("chi-icon", { color: this.iconLeftColor || null, icon: this.iconLeft });
    }
    _getIconRight() {
        return this.iconRight && !this.spinner && h("chi-icon", { color: this.iconRightColor || null, icon: this.iconRight });
    }
    _getSpinner() {
        const spinnerSizeMapping = {
            sm: 'xs',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--3',
        };
        return this.spinner && h("chi-spinner", { size: spinnerSizeMapping[this.size] ?? 'sm' });
    }
    _getHelperMessage() {
        return this.helperMessage && h("chi-helper-message", { state: this.state }, this.helperMessage);
    }
    _shouldWrapInput() {
        return Boolean(this.iconLeft || this.iconRight || this.spinner || this.helperMessage || this.copyText);
    }
    _addCopyText(input) {
        const copySizeMapping = {
            xs: 'xs',
            sm: 'xs',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--3',
        };
        return (h("div", { class: `${CLASSES.FLEX} ${CLASSES.ALIGN_ITEMS_CENTER}` }, input, h("chi-copy-text", { text: this.value, disabled: this.disabled, size: copySizeMapping[this.size] })));
    }
    _addHelperMessage(input) {
        return (h(Fragment, null, input, this._getHelperMessage()));
    }
    _getWrappedInput(input) {
        const inputClasses = [
            'chi-input__wrapper',
            this.iconLeft && '-icon--left',
            this.iconRight && '-icon--right',
            this.copyText && '-flex--grow1',
        ]
            .filter(Boolean)
            .join(' ');
        input = (h("div", { class: inputClasses }, input, this._getIconLeft(), this._getIconRight(), this._getSpinner()));
        if (this.copyText) {
            input = this._addCopyText(input);
        }
        if (this.helperMessage) {
            input = this._addHelperMessage(input);
        }
        return input;
    }
    render() {
        let input = this.getInput();
        if (this._shouldWrapInput()) {
            input = this._getWrappedInput(input);
        }
        return input;
    }
    static get is() { return "chi-text-input"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["text-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["text-input.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TextInputTypes",
                    "resolved": "\"date\" | \"datetime\" | \"datetime-local\" | \"email\" | \"month\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"url\" | \"week\"",
                    "references": {
                        "TextInputTypes": {
                            "location": "import",
                            "path": "../../constants/constants",
                            "id": "src/constants/constants.ts::TextInputTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define type of Text input"
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'text'"
            },
            "state": {
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define state color of Text input"
                },
                "attribute": "state",
                "reflect": true
            },
            "iconLeft": {
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
                    "text": "To add a left positioned icon"
                },
                "attribute": "icon-left",
                "reflect": true
            },
            "iconRight": {
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
                    "text": "To add a right positioned icon"
                },
                "attribute": "icon-right",
                "reflect": true
            },
            "iconLeftColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconColors",
                    "resolved": "\"danger\" | \"dark\" | \"grey\" | \"info\" | \"light\" | \"muted\" | \"navy\" | \"orange\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {
                        "IconColors": {
                            "location": "import",
                            "path": "../../constants/color",
                            "id": "src/constants/color.ts::IconColors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define color of left icon"
                },
                "attribute": "icon-left-color",
                "reflect": true
            },
            "iconRightColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "IconColors",
                    "resolved": "\"danger\" | \"dark\" | \"grey\" | \"info\" | \"light\" | \"muted\" | \"navy\" | \"orange\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {
                        "IconColors": {
                            "location": "import",
                            "path": "../../constants/color",
                            "id": "src/constants/color.ts::IconColors"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define color of right icon"
                },
                "attribute": "icon-right-color",
                "reflect": true
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TextInputSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\"",
                    "references": {
                        "TextInputSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::TextInputSizes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To define size of Text input"
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'md'"
            },
            "placeholder": {
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
                    "text": "To define placeholder of Text input"
                },
                "attribute": "placeholder",
                "reflect": true
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To display an additional helper text message below the Text input"
                },
                "attribute": "helper-message",
                "reflect": true
            },
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
                    "text": "To define value of Text input"
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "''"
            },
            "name": {
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
                    "text": "To define name of Text input"
                },
                "attribute": "name",
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To disable Text input"
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "readonly": {
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
                    "text": "To prevent the Text input value from being changed"
                },
                "attribute": "readonly",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "To disable Value attribute mutation"
                },
                "attribute": "prevent-value-mutation",
                "reflect": true,
                "defaultValue": "false"
            },
            "spinner": {
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
                    "text": "To render Text Input with Spinner"
                },
                "attribute": "spinner",
                "reflect": true,
                "defaultValue": "false"
            },
            "copyText": {
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
                    "text": "To show copy text icon"
                },
                "attribute": "copy-text",
                "reflect": true,
                "defaultValue": "false"
            },
            "_status": {
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
                    "text": "To define -hover, -focus statuses"
                },
                "attribute": "_status",
                "reflect": false
            },
            "extraClass": {
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
                    "text": "Extra classes to apply to input"
                },
                "attribute": "extra-class",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "eventChange",
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
                "method": "eventInput",
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
                "method": "eventFocus",
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
                "method": "eventBlur",
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
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "state",
                "methodName": "stateValidation"
            }, {
                "propName": "size",
                "methodName": "sizeValidation"
            }, {
                "propName": "iconLeftColor",
                "methodName": "iconLeftColorValidation"
            }, {
                "propName": "iconRightColor",
                "methodName": "iconRightColorValidation"
            }, {
                "propName": "type",
                "methodName": "typeValidation"
            }];
    }
}

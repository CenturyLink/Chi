import { h } from "@stencil/core";
import { CHI_STATES } from "../../constants/states";
import { ICON_COLORS } from "../../constants/color";
import { TEXT_INPUT_SIZES } from "../../constants/size";
import { addMutationObserver } from "../../utils/mutationObserver";
import { UTILITY_CLASSES } from "../../constants/classes";
export class Textarea {
    constructor() {
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
        this.copyText = false;
        this._status = undefined;
    }
    stateValidation(newValue) {
        const validValues = CHI_STATES.join(', ');
        if (newValue && !CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for textarea. If provided, valid values are: ${validValues}. `);
        }
    }
    sizeValidation(newValue) {
        const validValues = TEXT_INPUT_SIZES.join(', ');
        if (newValue && !TEXT_INPUT_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for textarea. If provided, valid values are: ${validValues}. `);
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
    _handleValueInput(valueChange) {
        this.value = valueChange.target.value;
        this.eventInput.emit(this.value);
    }
    _handleValueChange() {
        this.eventChange.emit(this.value);
    }
    componentWillLoad() {
        this.value = this.el.textContent;
        this.stateValidation(this.state);
        this.iconLeftColorValidation(this.iconLeftColor);
        this.iconRightColorValidation(this.iconRightColor);
        this.sizeValidation(this.size);
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    _getTextAreaElement() {
        const classes = [
            'chi-input',
            this.state && `-${this.state}`,
            this.size && `-${this.size}`,
            this._status && `-${this._status}`,
        ]
            .filter(Boolean)
            .join(' ');
        return (h("textarea", { class: classes, placeholder: this.placeholder || '', name: this.name || '', disabled: this.disabled, readonly: this.readonly, id: this.el.id ? `${this.el.id}-control` : null, onFocus: () => this.eventFocus.emit(), onBlur: () => this.eventBlur.emit(), onInput: (ev) => this._handleValueInput(ev), onChange: () => this._handleValueChange() }, h("slot", null)));
    }
    _getHelperMessage() {
        return this.helperMessage && h("chi-helper-message", { state: this.state }, this.helperMessage);
    }
    _getIconsData() {
        const data = { classes: '', iconRight: null, iconLeft: null };
        const classes = [];
        if (this.iconRight) {
            data.iconRight = h("chi-icon", { color: this.iconRightColor || null, icon: this.iconRight });
            classes.push('-icon--right');
        }
        if (this.iconLeft) {
            data.iconLeft = h("chi-icon", { color: this.iconLeftColor || null, icon: this.iconLeft });
            classes.push('-icon--left');
        }
        data.classes = classes.join(' ');
        return data;
    }
    _shouldWrapTextarea() {
        return Boolean(this.iconLeft || this.iconRight || this.helperMessage || this.copyText);
    }
    _getWrappedTextarea(textareaElement) {
        const iconsData = this._getIconsData();
        const helperMessage = this._getHelperMessage();
        textareaElement = (h("div", { class: `chi-input__wrapper ${iconsData.classes}${this.copyText ? ' -flex--grow1' : ''}` }, textareaElement, iconsData.iconLeft, iconsData.iconRight, helperMessage));
        if (this.copyText) {
            textareaElement = this._addCopyText(textareaElement);
        }
        return textareaElement;
    }
    _addCopyText(textareaElement) {
        const copySizeMapping = {
            xs: 'xs',
            sm: 'xs',
            md: 'sm',
            lg: 'sm--2',
            xl: 'sm--3',
        };
        return (h("div", { class: `${UTILITY_CLASSES.DISPLAY.FLEX} ${UTILITY_CLASSES.ALIGN_ITEMS.START}` }, textareaElement, h("chi-copy-text", { text: this.value, disabled: this.disabled, size: copySizeMapping[this.size] })));
    }
    render() {
        let textareaElement = this._getTextAreaElement();
        if (this._shouldWrapTextarea()) {
            textareaElement = this._getWrappedTextarea(textareaElement);
        }
        return textareaElement;
    }
    static get is() { return "chi-textarea"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["textarea.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["textarea.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "To define state color of Textarea"
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
                    "text": "To define size of Textarea"
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
                    "text": "To define placeholder of Textarea"
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
                    "text": "To display an additional helper text message below the Textarea"
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
                    "text": "To read value of Textarea"
                },
                "attribute": "value",
                "reflect": false,
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
                    "text": "To define name of Textarea"
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
                    "text": "To disable Textarea"
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
                    "text": "To prevent Textarea value from being changed"
                },
                "attribute": "readonly",
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
                    "original": "'-hover' | '-focus'",
                    "resolved": "\"-focus\" | \"-hover\"",
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
            }];
    }
}

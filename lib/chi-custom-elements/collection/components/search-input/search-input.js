import { Fragment, h } from "@stencil/core";
import { TEXT_INPUT_SIZES } from "../../constants/size";
import { CHI_STATES } from "../../constants/states";
import { DROPDOWN_CLASSES } from "../../constants/classes";
import { cleanUndefinedProps } from "../../utils/utils";
import { v4 as uuid4 } from "uuid";
export class SearchInput {
    constructor() {
        /**
         * To define size of Search input
         */
        this.size = 'md';
        /**
         * To define value of Search input
         */
        this.value = '';
        /**
         * To disable Search input
         */
        this.disabled = false;
        /**
         * To disable Value attribute mutation
         */
        this.preventValueMutation = false;
        /**
         * To render Search Input in readonly mode
         */
        this.readonly = false;
        this._cleanButtonVisible = this.value && !this.disabled ? true : false;
        this.menuItemsFiltered = [];
        this._handleSelectItem = (ev, item) => {
            ev.preventDefault();
            const dropdown = this._getAutocompleteDropdown();
            const title = ev.target.innerText;
            const { href, id } = item !== null && item !== void 0 ? item : {};
            this.selectedItem = cleanUndefinedProps({ title, href, id });
            this.value = title;
            dropdown.hide();
            this._clearFilterMenuItems();
            this.eventItemSelected.emit(this.selectedItem);
        };
        this._clearInputField = () => {
            if (!this.readonly) {
                this._cleanInput();
            }
        };
    }
    sizeValidation(newValue) {
        const validValues = TEXT_INPUT_SIZES.join(', ');
        if (newValue && !TEXT_INPUT_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for input. If provided, valid values are: ${validValues}. `);
        }
    }
    updateValue(newValue, oldValue) {
        this._cleanButtonVisible = !!newValue;
        if (newValue !== oldValue) {
            this.value = newValue;
        }
    }
    stateValidation(newValue) {
        const validValues = CHI_STATES.join(', ');
        if (newValue && !CHI_STATES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid state for input. If provided, valid values are: ${validValues}. `);
        }
    }
    /**
     * Show the autocomplete menu list
     */
    async showList() {
        const dropdown = this._getAutocompleteDropdown();
        const input = this.el.querySelector('input[type=search]');
        dropdown === null || dropdown === void 0 ? void 0 : dropdown.show();
        input === null || input === void 0 ? void 0 : input.focus();
    }
    /**
     * Hide the autocomplete menu list
     */
    async hideList() {
        const dropdown = this._getAutocompleteDropdown();
        dropdown === null || dropdown === void 0 ? void 0 : dropdown.hide();
    }
    //#region Lifecycle hooks
    connectedCallback() {
        this.menuItemsFiltered = this.menuItems;
    }
    componentWillLoad() {
        this.sizeValidation(this.size);
        this.stateValidation(this.state);
    }
    //#endregion
    _handleValueInput(valueChange) {
        const newValue = valueChange.target.value;
        const isAutocomplete = this._isAutocomplete();
        if (!newValue) {
            this._resetSelection();
        }
        if (!this.preventValueMutation) {
            this.value = newValue;
        }
        this._cleanButtonVisible = !!newValue;
        this.eventInput.emit(newValue);
        if (!isAutocomplete) {
            return;
        }
        this._handleFilter(newValue);
    }
    _setHighlightedValue(list, text) {
        if (!text) {
            return list;
        }
        return list.map((item) => {
            const regex = new RegExp(text, 'gi');
            const newValue = item.title.replace(regex, (match) => `<span class="-text--normal">${match}</span>`);
            return Object.assign(Object.assign({}, item), { title: `<strong>${newValue}</strong>` });
        });
    }
    _clearFilterMenuItems() {
        const isAutocomplete = this._isAutocomplete();
        if (isAutocomplete) {
            this.menuItemsFiltered = this.menuItems;
        }
    }
    _getAutocompleteDropdown() {
        return this.el.querySelector('#dropdown-autocomplete');
    }
    _handleFilter(text) {
        var _a;
        const dropdown = this._getAutocompleteDropdown();
        const list = (_a = this.menuItems) === null || _a === void 0 ? void 0 : _a.filter((item) => {
            return item.title.toLowerCase().includes(text.toLowerCase());
        });
        if (!(list === null || list === void 0 ? void 0 : list.length)) {
            dropdown.hide();
            return;
        }
        const highlightedMenuItems = this._setHighlightedValue(list, text);
        this.menuItemsFiltered = highlightedMenuItems;
        dropdown.show();
    }
    _handleValueChange(valueChange) {
        const newValue = valueChange.target.value;
        this.eventChange.emit(newValue);
    }
    _handleFocus(ev) {
        const isAutocomplete = this._isAutocomplete();
        if (isAutocomplete) {
            const currentItem = ev.target.value;
            this._handleFilter(currentItem);
        }
        this.eventFocus.emit();
    }
    _isAutocomplete() {
        return this.mode === 'autocomplete';
    }
    _cleanInput() {
        const input = this.el.querySelector('input[type=search]');
        this.value = '';
        input.value = this.value;
        this._clearFilterMenuItems();
        input.focus();
        this._cleanButtonVisible = false;
        this.eventClean.emit();
        this._resetSelection();
    }
    _resetSelection() {
        if (!this._isAutocomplete()) {
            return;
        }
        const dropdown = this._getAutocompleteDropdown();
        this.selectedItem = undefined;
        dropdown.resetSelection();
    }
    _dropdownAutocomplete(trigger) {
        var _a, _b;
        const visibleItems = (_a = this.visibleItems) !== null && _a !== void 0 ? _a : null;
        return (h("chi-dropdown", { id: "dropdown-autocomplete", position: "bottom", preventItemSelected: true, fluid: true, visibleItems: visibleItems }, trigger, (_b = this.menuItemsFiltered) === null || _b === void 0 ? void 0 :
            _b.map((item) => {
                const uuid = uuid4();
                return (h("a", { key: `menu-item-${uuid}`, class: DROPDOWN_CLASSES.MENU_ITEM, href: item.href, slot: "menu", innerHTML: item.title, onClick: (ev) => this._handleSelectItem(ev, item) }));
            })));
    }
    _getHelperMessage() {
        return this.helperMessage && h("chi-helper-message", { state: this.state }, this.helperMessage);
    }
    _addHelperMessage(input) {
        return (h(Fragment, null, input, this._getHelperMessage()));
    }
    render() {
        const isAutocomplete = this._isAutocomplete();
        const searchInputElement = (h("input", { key: '3d563e22ada6ec28dfa35ca1ee534f9278e57a92', type: "search", class: `
          chi-input chi-search__input
          ${this.size ? `-${this.size}` : ''}
          ${this.state ? `-${this.state}` : ''}
          ${this._status ? `-${this._status}` : ''}
        `, placeholder: this.placeholder || '', value: this.value, name: this.name || '', disabled: this.disabled, id: this.el.id ? `${this.el.id}-control` : null, onFocus: (ev) => this._handleFocus(ev), onBlur: () => this.eventBlur.emit(), onInput: (ev) => this._handleValueInput(ev), onChange: (ev) => this._handleValueChange(ev), autocomplete: "off", "aria-label": "search input", readonly: this.readonly }));
        const searchXIcon = this._cleanButtonVisible ? (h("button", { class: "chi-button -icon -close -xs", onClick: this._clearInputField, onMouseDown: (e) => e.preventDefault(), "aria-label": "Clear" }, h("div", { class: "chi-button__content" }, h("i", { class: "chi-icon icon-x", "aria-hidden": "true" })))) : null;
        const searchIcon = (h("button", { key: 'ca32fd42c45c464cbe9e7b36e9767ee5409f8e29', class: `
        chi-button -icon -flat -bg--none
        ${this.size ? `-${this.size}` : ''}
        `, onClick: () => this.eventSearch.emit(this.value), "aria-label": "Search" }, h("div", { key: 'e764043830f209fff82d13642ac87ce03fc4341f', class: "chi-button__content" }, h("i", { key: '39a46fb2ad8cdde82103405eff134901e1ed49af', class: 'chi-icon icon-search', "aria-hidden": "true" }))));
        const input = (h("div", { key: '97378aa4a655c7fc9469fc6f8ede6b1aede79c5c', class: "chi-input__wrapper -icon--right", slot: "trigger" }, searchInputElement, searchXIcon, searchIcon));
        let searchInput = isAutocomplete ? this._dropdownAutocomplete(input) : input;
        if (this.helperMessage) {
            searchInput = this._addHelperMessage(searchInput);
        }
        return searchInput;
    }
    static get is() { return "chi-search-input"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["search-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["search-input.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "To define size of Search input"
                },
                "getter": false,
                "setter": false,
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
                    "text": "To define placeholder of Search input"
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
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
                    "text": "To define value of Search input"
                },
                "getter": false,
                "setter": false,
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
                    "text": "To define name of Search input"
                },
                "getter": false,
                "setter": false,
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
                    "text": "To disable Search input"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
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
                "getter": false,
                "setter": false,
                "attribute": "prevent-value-mutation",
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
                    "text": "To render Search Input in readonly mode"
                },
                "getter": false,
                "setter": false,
                "attribute": "readonly",
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
                "getter": false,
                "setter": false,
                "attribute": "_status",
                "reflect": false
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "SearchInputModes",
                    "resolved": "\"autocomplete\"",
                    "references": {
                        "SearchInputModes": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::SearchInputModes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To set the mode to search input"
                },
                "getter": false,
                "setter": false,
                "attribute": "mode",
                "reflect": true
            },
            "visibleItems": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To provide number of items in the dropdown to be displayed, and apply scroll if needed"
                },
                "getter": false,
                "setter": false,
                "attribute": "visible-items",
                "reflect": true
            },
            "menuItems": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "DropdownMenuItem[]",
                    "resolved": "DropdownMenuItem[]",
                    "references": {
                        "DropdownMenuItem": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::DropdownMenuItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To set the list of items to be used in the dropdown menu in autocomplete mode"
                },
                "getter": false,
                "setter": false
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
                    "text": "To define state color of Search input"
                },
                "getter": false,
                "setter": false,
                "attribute": "state",
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
                "getter": false,
                "setter": false,
                "attribute": "helper-message",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "_cleanButtonVisible": {},
            "menuItemsFiltered": {},
            "selectedItem": {}
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
            }, {
                "method": "eventClean",
                "name": "chiClean",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user clicked the X button."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "eventSearch",
                "name": "chiSearch",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user clicked the Search button."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "eventItemSelected",
                "name": "chiSearchInputItemSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user clicked in one of the autocomplete elements"
                },
                "complexType": {
                    "original": "DropdownMenuItem",
                    "resolved": "DropdownMenuItem",
                    "references": {
                        "DropdownMenuItem": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::DropdownMenuItem"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "showList": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLInputElement": {
                            "location": "global",
                            "id": "global::HTMLInputElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Show the autocomplete menu list",
                    "tags": []
                }
            },
            "hideList": {
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
                    "text": "Hide the autocomplete menu list",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "sizeValidation"
            }, {
                "propName": "value",
                "methodName": "updateValue"
            }, {
                "propName": "state",
                "methodName": "stateValidation"
            }];
    }
}

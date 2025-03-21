import { h } from "@stencil/core";
import { ACCORDION_CLASSES, CARD_CLASS, DISABLED_CLASS, EXPANDED_CLASS, ICON_CLASS, LINK_CLASSES, TRUNCATED_CLASS, } from "../../constants/classes";
import { ACCORDION_SIZES } from "../../constants/size";
import { joinArrayValues } from "../../utils/utils";
import { addMutationObserver } from "../../utils/mutationObserver";
export class Accordion {
    constructor() {
        /**
         *  to set accordion size { sm, md, lg, xl }. Size sm is not supported in Card
         */
        this.size = 'md';
        /**
         *  to set card layout
         */
        this.card = false;
        /**
         *  to set portal layout (temporary)
         */
        this.portal = false;
        /**
         *  to truncate long accordion titles
         */
        this.truncated = false;
        /**
         * To provide data for accordions
         */
        this.accordions = [];
        /**
         * to set accordion type
         */
        this.type = 'base';
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    /**
     * To show one accordion (index), more than one (array of indexes) or all (no argument)
     */
    async show(accordions) {
        this.updateItems(accordions, true);
    }
    /**
     * To hide one accordion (index), more than one (array of indexes) or all (no argument)
     */
    async hide(accordions) {
        this.updateItems(accordions, false);
    }
    /**
     * To toggle one accordion (index), more than one (array of indexes) or all (no argument)
     */
    async toggle(accordions) {
        this.updateItems(accordions, null, true);
    }
    sizeValidation(newValue) {
        const validValues = ACCORDION_SIZES.join(', ');
        if (!ACCORDION_SIZES.includes(newValue)) {
            throw new Error(`${newValue} is not a valid size for accordion. If provided, valid values are: ${validValues}. `);
        }
        else if (newValue === 'sm' && this.card) {
            throw new Error('sm is not a valid size for card accordion');
        }
    }
    updateItems(accordions, show = true, toggle = false) {
        const newItems = this.accordions.map((accordion) => (Object.assign({}, accordion)));
        if (accordions === undefined) {
            accordions = newItems.map((_, index) => index);
        }
        else if (!Array.isArray(accordions)) {
            accordions = [accordions];
        }
        accordions.forEach((index) => (newItems[index].expanded = toggle ? !newItems[index].expanded : show));
        if (JSON.stringify(newItems) !== JSON.stringify(this.accordions)) {
            this.accordions = newItems;
            this.chiAccordionsChanged.emit(this.accordions);
        }
    }
    _isLink() {
        return this.type === 'link';
    }
    /**
     * Toggles an accordion and emits event
     */
    toggleAccordion(index) {
        this.toggle(index);
        (this.accordions[index].expanded ? this.chiAccordionShow : this.chiAccordionHide).emit(this.accordions[index]);
    }
    getAccordionClasses() {
        return joinArrayValues([
            ACCORDION_CLASSES.ACCORDION,
            `-${this.size}`,
            this.card && CARD_CLASS,
            this.truncated && TRUNCATED_CLASS,
            this._isLink() && ACCORDION_CLASSES.LINK,
        ]);
    }
    /**
     * TODO: chi-icon cannot be used because styles apply only to .chi-icon.icon-chevron-down
     */
    getChevronIcon() {
        return h("i", { class: `${ICON_CLASS} icon-chevron-down`, "aria-hidden": "true" });
    }
    getAccordionTrigger(accordion, index) {
        const triggerClasses = joinArrayValues([ACCORDION_CLASSES.TRIGGER, accordion.disabled && DISABLED_CLASS]);
        return (h("button", { class: triggerClasses, onClick: () => this.toggleAccordion(index) }, this.getAccordionTriggerContent(accordion)));
    }
    getAccordionTriggerContent(accordion) {
        const isLink = this._isLink();
        const title = (h("div", { class: isLink ? `${LINK_CLASSES.LINK} ${LINK_CLASSES.NO_UNDERLINE}` : ACCORDION_CLASSES.TITLE }, accordion.title));
        const iconLeft = !this.portal || this.card;
        const content = [this.getChevronIcon(), title];
        if (!iconLeft || isLink)
            content.reverse();
        return content;
    }
    getAccordionContent(accordion) {
        const content = accordion.template ? (h("slot", { name: accordion.template })) : (h("p", { class: ACCORDION_CLASSES.TEXT }, accordion.text));
        return h("div", { class: ACCORDION_CLASSES.CONTENT }, content);
    }
    getAccordionItem(accordion, index) {
        const accordionClasses = joinArrayValues([
            ACCORDION_CLASSES.ITEM,
            accordion.expanded && !accordion.disabled && EXPANDED_CLASS,
        ]);
        const trigger = this.getAccordionTrigger(accordion, index);
        return (h("div", { class: accordionClasses }, trigger, this.getAccordionContent(accordion)));
    }
    render() {
        var _a;
        return (h("div", { key: 'f6d0866189c5d03037aee2420f82c2fe7d7f2ad6', class: this.getAccordionClasses() }, ...(_a = this.accordions) === null || _a === void 0 ? void 0 : _a.map((accordion, index) => this.getAccordionItem(accordion, index))));
    }
    static get is() { return "chi-accordion"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AccordionSizes",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\"",
                    "references": {
                        "AccordionSizes": {
                            "location": "import",
                            "path": "../../constants/size",
                            "id": "src/constants/size.ts::AccordionSizes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set accordion size { sm, md, lg, xl }. Size sm is not supported in Card"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'md'"
            },
            "card": {
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
                    "text": "to set card layout"
                },
                "getter": false,
                "setter": false,
                "attribute": "card",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "to set portal layout (temporary)"
                },
                "getter": false,
                "setter": false,
                "attribute": "portal",
                "reflect": false,
                "defaultValue": "false"
            },
            "truncated": {
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
                    "text": "to truncate long accordion titles"
                },
                "getter": false,
                "setter": false,
                "attribute": "truncated",
                "reflect": false,
                "defaultValue": "false"
            },
            "accordions": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "AccordionItem[]",
                    "resolved": "AccordionItem[]",
                    "references": {
                        "AccordionItem": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::AccordionItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To provide data for accordions"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AccordionTypes",
                    "resolved": "string",
                    "references": {
                        "AccordionTypes": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::AccordionTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "to set accordion type"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'base'"
            }
        };
    }
    static get events() {
        return [{
                "method": "chiAccordionShow",
                "name": "chiAccordionShow",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Custom event when accordion is shown from accordion trigger"
                },
                "complexType": {
                    "original": "AccordionItem",
                    "resolved": "AccordionItem",
                    "references": {
                        "AccordionItem": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::AccordionItem"
                        }
                    }
                }
            }, {
                "method": "chiAccordionHide",
                "name": "chiAccordionHide",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Custom event when accordion is hidden from accordion trigger"
                },
                "complexType": {
                    "original": "AccordionItem",
                    "resolved": "AccordionItem",
                    "references": {
                        "AccordionItem": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::AccordionItem"
                        }
                    }
                }
            }, {
                "method": "chiAccordionsChanged",
                "name": "chiAccordionsChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Custom event when accordions change. Emits all accordions in accordion."
                },
                "complexType": {
                    "original": "AccordionItem[]",
                    "resolved": "AccordionItem[]",
                    "references": {
                        "AccordionItem": {
                            "location": "import",
                            "path": "../../constants/types",
                            "id": "src/constants/types.ts::AccordionItem"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "show": {
                "complexType": {
                    "signature": "(accordions?: number | number[]) => Promise<void>",
                    "parameters": [{
                            "name": "accordions",
                            "type": "number | number[]",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "To show one accordion (index), more than one (array of indexes) or all (no argument)",
                    "tags": []
                }
            },
            "hide": {
                "complexType": {
                    "signature": "(accordions?: number | number[]) => Promise<void>",
                    "parameters": [{
                            "name": "accordions",
                            "type": "number | number[]",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "To hide one accordion (index), more than one (array of indexes) or all (no argument)",
                    "tags": []
                }
            },
            "toggle": {
                "complexType": {
                    "signature": "(accordions?: number | number[]) => Promise<void>",
                    "parameters": [{
                            "name": "accordions",
                            "type": "number | number[]",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "To toggle one accordion (index), more than one (array of indexes) or all (no argument)",
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
            }];
    }
}

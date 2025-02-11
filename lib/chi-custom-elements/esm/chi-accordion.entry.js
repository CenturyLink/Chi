import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { A as ACCORDION_CLASSES, C as CARD_CLASS, T as TRUNCATED_CLASS, D as DISABLED_CLASS, U as UTILITY_CLASSES, E as EXPANDED_CLASS, I as ICON_CLASS } from './classes-51f800b6.js';
import { A as ACCORDION_SIZES } from './size-9d0c9884.js';
import { j as joinArrayValues } from './utils-48628cb4.js';
import { a as addMutationObserver } from './mutationObserver-46245962.js';

const Accordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiAccordionShow = createEvent(this, "chiAccordionShow", 7);
        this.chiAccordionHide = createEvent(this, "chiAccordionHide", 7);
        this.chiAccordionsChanged = createEvent(this, "chiAccordionsChanged", 7);
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
    getBaseTrigger(accordion, index) {
        const triggerClasses = joinArrayValues([ACCORDION_CLASSES.TRIGGER, accordion.disabled && DISABLED_CLASS]);
        const title = h("div", { class: ACCORDION_CLASSES.TITLE }, accordion.title);
        const iconLeft = !this.portal || this.card;
        const content = [this.getChevronIcon(), title];
        if (!iconLeft)
            content.reverse();
        return (h("div", { class: triggerClasses, onClick: () => this.toggleAccordion(index) }, content));
    }
    getLinkTrigger(accordion, index) {
        const triggerClasses = joinArrayValues([accordion.disabled && DISABLED_CLASS, ACCORDION_CLASSES.TRIGGER_LINK]);
        const content = [h("span", null, accordion.title), this.getChevronIcon()];
        return (h("div", { class: triggerClasses, onClick: () => this.toggleAccordion(index) }, h("chi-link", { disabled: accordion.disabled, "no-underline": true }, content)));
    }
    getAccordionContent(accordion) {
        const content = accordion.template ? (h("slot", { name: accordion.template })) : (h("p", { class: ACCORDION_CLASSES.TEXT }, accordion.text));
        return (h("div", { class: joinArrayValues([ACCORDION_CLASSES.CONTENT, this._isLink() && UTILITY_CLASSES.PADDING.X[0]]) }, content));
    }
    getAccordionItem(accordion, index) {
        const accordionClasses = joinArrayValues([
            ACCORDION_CLASSES.ITEM,
            accordion.expanded && !accordion.disabled && EXPANDED_CLASS,
        ]);
        const trigger = (this._isLink() ? this.getLinkTrigger : this.getBaseTrigger).call(this, accordion, index);
        return (h("div", { class: accordionClasses }, trigger, this.getAccordionContent(accordion)));
    }
    render() {
        var _a;
        return (h("div", { key: '3326d596ea1318b408575ce3d5ba6a336672c0c5', class: this.getAccordionClasses() }, ...(_a = this.accordions) === null || _a === void 0 ? void 0 : _a.map((accordion, index) => this.getAccordionItem(accordion, index))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};

export { Accordion as chi_accordion };

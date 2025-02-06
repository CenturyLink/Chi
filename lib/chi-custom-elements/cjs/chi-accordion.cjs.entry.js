'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f5b45aca.js');
const classes = require('./classes-b81f8b66.js');
const size = require('./size-19ce557b.js');
const utils = require('./utils-7f208c7f.js');
const mutationObserver = require('./mutationObserver-53b34fb8.js');

const Accordion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiAccordionShow = index.createEvent(this, "chiAccordionShow", 7);
        this.chiAccordionHide = index.createEvent(this, "chiAccordionHide", 7);
        this.chiAccordionsChanged = index.createEvent(this, "chiAccordionsChanged", 7);
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
        mutationObserver.addMutationObserver.call(this);
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
        const validValues = size.ACCORDION_SIZES.join(', ');
        if (!size.ACCORDION_SIZES.includes(newValue)) {
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
        return utils.joinArrayValues([
            classes.ACCORDION_CLASSES.ACCORDION,
            `-${this.size}`,
            this.card && classes.CARD_CLASS,
            this.truncated && classes.TRUNCATED_CLASS,
        ]);
    }
    /**
     * TODO: chi-icon cannot be used because styles apply only to .chi-icon.icon-chevron-down
     */
    getChevronIcon() {
        return index.h("i", { class: `${classes.ICON_CLASS} icon-chevron-down`, "aria-hidden": "true" });
    }
    getBaseTrigger(accordion, index$1) {
        const triggerClasses = utils.joinArrayValues([classes.ACCORDION_CLASSES.TRIGGER, accordion.disabled && classes.DISABLED_CLASS]);
        const title = index.h("div", { class: classes.ACCORDION_CLASSES.TITLE }, accordion.title);
        const iconLeft = !this.portal || this.card;
        const content = [this.getChevronIcon(), title];
        if (!iconLeft)
            content.reverse();
        return (index.h("div", { class: triggerClasses, onClick: () => this.toggleAccordion(index$1) }, content));
    }
    getLinkTrigger(accordion, index$1) {
        const triggerClasses = utils.joinArrayValues([accordion.disabled && classes.DISABLED_CLASS]);
        const content = [this.getChevronIcon(), index.h("span", null, accordion.title)];
        const iconLeft = !this.portal || this.card;
        if (!iconLeft)
            content.reverse();
        return (index.h("div", { class: triggerClasses, onClick: () => this.toggleAccordion(index$1) }, index.h("chi-link", { disabled: accordion.disabled }, content)));
    }
    getAccordionContent(accordion) {
        const content = accordion.template ? (index.h("slot", { name: accordion.template })) : (index.h("p", { class: classes.ACCORDION_CLASSES.TEXT }, accordion.text));
        return (index.h("div", { class: utils.joinArrayValues([classes.ACCORDION_CLASSES.CONTENT, this._isLink() && classes.UTILITY_CLASSES.PADDING.X[0]]) }, content));
    }
    getAccordionItem(accordion, index$1) {
        const accordionClasses = utils.joinArrayValues([
            classes.ACCORDION_CLASSES.ITEM,
            accordion.expanded && !accordion.disabled && classes.EXPANDED_CLASS,
        ]);
        const trigger = (this._isLink() ? this.getLinkTrigger : this.getBaseTrigger).call(this, accordion, index$1);
        return (index.h("div", { class: accordionClasses }, trigger, this.getAccordionContent(accordion)));
    }
    render() {
        var _a;
        return (index.h("div", { key: 'e3425fed8ad3fa8d17078f84612bfc48793e90d3', class: this.getAccordionClasses() }, ...(_a = this.accordions) === null || _a === void 0 ? void 0 : _a.map((accordion, index) => this.getAccordionItem(accordion, index))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "size": ["sizeValidation"]
    }; }
};

exports.chi_accordion = Accordion;

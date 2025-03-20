'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b63483b1.js');
const classes = require('./classes-ee649937.js');
const utils = require('./utils-7f208c7f.js');
const ThreeStepsAnimation = require('./ThreeStepsAnimation-c06a6723.js');
const constants = require('./constants-cbe8b4bf.js');
const v4 = require('./v4-daefbed8.js');

const { TYPOGRAPHY } = classes.UTILITY_CLASSES;
const Modal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiModalShow = index.createEvent(this, "chiModalShow", 7);
        this.chiModalShown = index.createEvent(this, "chiModalShown", 7);
        this.chiModalHide = index.createEvent(this, "chiModalHide", 7);
        this.chiModalHidden = index.createEvent(this, "chiModalHidden", 7);
        this.chiModalAccept = index.createEvent(this, "chiModalAccept", 7);
        this.chiModalCancel = index.createEvent(this, "chiModalCancel", 7);
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
        this._uuid4 = v4.v4();
        this.getUpdateAnimationClasses = (prepareClasses, startClasses) => {
            const prepareAnimationClasses = [`${classes.TRANSITIONING_CLASS} ${prepareClasses}`, classes.TRANSITIONING_CLASS];
            const startAnimationClasses = [classes.TRANSITIONING_CLASS, `${classes.TRANSITIONING_CLASS} ${startClasses}`];
            if (!this.isActive) {
                prepareAnimationClasses.reverse();
                startAnimationClasses.reverse();
            }
            return [prepareAnimationClasses, startAnimationClasses];
        };
        this.getCloseButton = () => (index.h("chi-button", { type: "close", class: classes.UTILITY_CLASSES.DISPLAY.FLEX, "data-dismiss": "modal", "aria-label": "Close", onClick: () => this.cancel() }));
        this.cancel = () => {
            this.hide();
            this.chiModalCancel.emit();
        };
        this.accept = () => {
            this.hide();
            this.chiModalAccept.emit();
        };
        this.getFooter = () => (index.h("footer", { class: `${classes.MODAL_CLASSES.FOOTER} ${this.noBorder ? classes.NO_BORDER_CLASS : ''}` }, index.h("slot", { name: "footer" }, index.h("chi-button", { "data-dismiss": "modal", onClick: () => this.cancel() }, "Cancel"), index.h("chi-button", { color: "primary", onClick: () => this.accept() }, "Save"))));
    }
    sectionAnimationClassesChanged() {
        this.isActive = this.sectionAnimationClasses.includes(classes.ACTIVE_CLASS);
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
            this.contentHeight = this.contentHeight || constants.MODAL_CONTENT_HEIGHT;
        }
        if (this.el.hasAttribute('backdrop-height')) {
            this.backdropHeight = this.backdropHeight || constants.MODAL_BACKDROP_HEIGHT;
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
        this.sectionAnimationClasses = this.isActive ? classes.ACTIVE_CLASS : '';
        this.backdropAnimationClasses = this.isActive ? '' : classes.CLOSED_CLASS;
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
            this._animation = ThreeStepsAnimation.ThreeStepsAnimation.animationFactory(() => this.updateAnimationClasses(prepareAnimationClasses[0], prepareAnimationClasses[1]), () => this.updateAnimationClasses(startAnimationClasses[0], startAnimationClasses[1]), endAnimation, constants.ANIMATION_DURATION.MEDIUM);
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
            this.updateAnimationClasses(classes.ACTIVE_CLASS, '');
            this.chiModalShown.emit();
        };
        this.chiModalShow.emit();
        this.handleAnimation(classes.CLOSED_CLASS, classes.ACTIVE_CLASS, openModal);
    }
    /**
     * Hides Modal
     */
    async hide() {
        const hideModal = () => {
            this.updateAnimationClasses('', classes.CLOSED_CLASS);
            this.chiModalHidden.emit();
        };
        this.chiModalHide.emit();
        this.handleAnimation(classes.ACTIVE_CLASS, classes.CLOSED_CLASS, hideModal);
    }
    /**
     * Toggles Modal
     */
    async toggle() {
        this.isActive ? await this.hide() : await this.show();
    }
    getContent() {
        const classes$1 = utils.joinArrayValues([
            classes.MODAL_CLASSES.CONTENT,
            this.simple && `${TYPOGRAPHY.TEXT_CENTER} ${classes.UTILITY_CLASSES.PADDING[6]}`,
        ]);
        const contentStyle = this.contentHeight ? { maxHeight: `${this.contentHeight}px` } : undefined;
        return (index.h("div", { class: classes$1, style: contentStyle }, index.h("slot", null)));
    }
    getHeader() {
        const isHeaderVisible = !this.simple && Boolean(this.modalTitle || this.subtitle || this.closable);
        if (!isHeaderVisible)
            return;
        return (index.h("header", { class: `${classes.MODAL_CLASSES.HEADER} ${this.noBorder ? classes.NO_BORDER_CLASS : ''}` }, index.h("h2", { class: classes.MODAL_CLASSES.TITLE }, this.modalTitle), this.subtitle && index.h("h3", { class: classes.MODAL_CLASSES.SUBTITLE }, this.subtitle), this.closable && this.getCloseButton()));
    }
    getTrigger() {
        return (index.h("slot", { name: "trigger" }, index.h("chi-button", { id: `modal-trigger-${this._uuid4}`, class: classes.MODAL_CLASSES.TRIGGER, "data-target": `#${this._uuid4}`, onClick: () => this.toggle() }, this.button)));
    }
    getBackdropClasses() {
        return utils.joinArrayValues([
            classes.BACKDROP_CLASSES.BACKDROP,
            this.backdropAnimationClasses,
            this.center && classes.CENTER_CLASS,
            this.inverse && classes.INVERSE_CLASS,
            this.animated && classes.ANIMATED_CLASS,
        ]);
    }
    getSectionClasses() {
        return utils.joinArrayValues([classes.MODAL_CLASSES.MODAL, this.sectionAnimationClasses, this.animated && classes.ANIMATED_CLASS]);
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
        return (index.h("div", { class: this.getBackdropClasses(), style: backdropStyle }, index.h("div", { class: classes.BACKDROP_CLASSES.WRAPPER }, index.h("section", Object.assign({}, sectionAttributes), this.simple && this.closable && this.getCloseButton(), this.getHeader(), this.getContent(), !this.simple && this.getFooter()))));
    }
    render() {
        return this.reference ? (this.getModal()) : (index.h("div", null, this.getTrigger(), this.getModal()));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "sectionAnimationClasses": ["sectionAnimationClassesChanged"],
        "contentHeight": ["contentHeightValidation"],
        "backdropHeight": ["backdropHeightValidation"]
    }; }
};

exports.chi_modal = Modal;

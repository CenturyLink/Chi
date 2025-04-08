import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { M as MODAL_CLASSES, N as NO_BORDER_CLASS, b as ACTIVE_CLASS, l as CLOSED_CLASS, U as UTILITY_CLASSES, B as BACKDROP_CLASSES, m as CENTER_CLASS, n as INVERSE_CLASS, o as ANIMATED_CLASS, d as TRANSITIONING_CLASS } from './classes-26189a5f.js';
import { j as joinArrayValues } from './utils-48628cb4.js';
import { T as ThreeStepsAnimation } from './ThreeStepsAnimation-a718d5b8.js';
import { M as MODAL_CONTENT_HEIGHT, g as MODAL_BACKDROP_HEIGHT, A as ANIMATION_DURATION } from './constants-e61c7d0c.js';
import { v as v4 } from './v4-a4ec28c0.js';

const { TYPOGRAPHY } = UTILITY_CLASSES;
const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiModalShow = createEvent(this, "chiModalShow", 7);
        this.chiModalShown = createEvent(this, "chiModalShown", 7);
        this.chiModalHide = createEvent(this, "chiModalHide", 7);
        this.chiModalHidden = createEvent(this, "chiModalHidden", 7);
        this.chiModalAccept = createEvent(this, "chiModalAccept", 7);
        this.chiModalCancel = createEvent(this, "chiModalCancel", 7);
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
        this._uuid4 = v4();
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "sectionAnimationClasses": ["sectionAnimationClassesChanged"],
        "contentHeight": ["contentHeightValidation"],
        "backdropHeight": ["backdropHeightValidation"]
    }; }
};

export { Modal as chi_modal };

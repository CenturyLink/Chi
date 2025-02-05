import { r as registerInstance, c as createEvent, h, g as getElement } from './index-ef94cfce.js';
import { M as MODAL_CLASSES, N as NO_BORDER_CLASS, c as ACTIVE_CLASS, i as CLOSED_CLASS, U as UTILITY_CLASSES, j as CENTERED_CLASS, B as BACKDROP_CLASSES, k as CENTER_CLASS, l as INVERSE_CLASS, m as ANIMATED_CLASS, a as TRANSITIONING_CLASS } from './classes-6227bd8c.js';
import { j as joinArrayValues } from './utils-48628cb4.js';
import { T as ThreeStepsAnimation } from './ThreeStepsAnimation-a718d5b8.js';
import { A as ANIMATION_DURATION } from './constants-0e68989c.js';
import { v as v4 } from './v4-08967a5a.js';

const { MARGIN, TYPOGRAPHY } = UTILITY_CLASSES;
const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiModalShow = createEvent(this, "chiModalShow", 7);
        this.chiModalShown = createEvent(this, "chiModalShown", 7);
        this.chiModalHide = createEvent(this, "chiModalHide", 7);
        this.chiModalHidden = createEvent(this, "chiModalHidden", 7);
        this.chiModalBack = createEvent(this, "chiModalBack", 7);
        this.chiModalAccept = createEvent(this, "chiModalAccept", 7);
        this.chiModalCancel = createEvent(this, "chiModalCancel", 7);
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
        return (h("div", { key: '175d1a1eeef7289236ac4ab2327dcade9363722f' }, !this.target && this.getTrigger(), h("div", { key: 'c69affe8a1007efa83fc6d04917cffddbdb4cb93', class: this.getBackdropClasses() }, h("div", { key: '975a10ccac58ba17c7f7e8de493253966645bca8', class: BACKDROP_CLASSES.WRAPPER }, h("section", Object.assign({ key: '45031c817b62f918f03f004265c182da523c8bb4' }, sectionAttributes), !this.simple && this.getHeader(), this.getContent(), !this.simple && this.getFooter())))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "sectionAnimationClasses": ["sectionAnimationClassesChanged"],
        "scrollable": ["scrollableValidation"]
    }; }
};

export { Modal as chi_modal };

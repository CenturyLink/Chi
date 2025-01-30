import { r as registerInstance, c as createEvent, h, g as getElement } from './index-cde0ed0d.js';
import { U as UTILITY_CLASSES, M as MODAL_CLASSES, N as NO_BORDER_CLASS, c as ACTIVE_CLASS, i as CLOSED_CLASS, j as CENTERED_CLASS, B as BACKDROP_CLASSES, k as CENTER_CLASS, l as INVERSE_CLASS, m as ANIMATED_CLASS, a as TRANSITIONING_CLASS } from './classes-fca9c660.js';
import { j as joinArrayValues } from './utils-416d6cef.js';
import { T as ThreeStepsAnimation } from './ThreeStepsAnimation-a718d5b8.js';
import { M as MODAL_CONTENT_DEFAULT_MESSAGE, A as ANIMATION_DURATION } from './constants-76e3b213.js';
import { v as v4 } from './v4-4e9fbb64.js';

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
        this.getAlertContent = () => (h("div", { class: UTILITY_CLASSES.DISPLAY.FLEX }, h("chi-icon", { icon: "circle-x", size: "sm--3", color: "danger", class: MARGIN.RIGHT[2] }), h("div", { class: UTILITY_CLASSES.SIZING.W100 }, h("p", { class: `${TYPOGRAPHY.TEXT_BOLD} ${MARGIN[0]}` }, h("slot", { name: "alert-subhead" }, "Subhead")), h("slot", { name: "content" }, h("p", { class: `${MARGIN.TOP[1]} ${MARGIN.BOTTOM[0]}` }, MODAL_CONTENT_DEFAULT_MESSAGE)))));
        this.getSimpleContent = () => (h("div", null, h("h2", { class: `${TYPOGRAPHY.TEXT_H3} ${TYPOGRAPHY.TEXT_BOLDER} ${MARGIN[0]}` }, this.modalTitle), h("slot", { name: "content" }, h("p", { class: `${TYPOGRAPHY.TEXT} ${UTILITY_CLASSES.PADDING.Y[1]} ${UTILITY_CLASSES.PADDING.X[3]}` }, MODAL_CONTENT_DEFAULT_MESSAGE)), h("slot", { name: "footer" }, h("chi-button", { color: "primary", size: "lg", class: MARGIN.TOP[1], onClick: () => this.accept() }, "Action"))));
        this.getDefaultContent = () => (h("slot", { name: "content" }, h("p", { class: `${TYPOGRAPHY.TEXT} ${MARGIN[0]}` }, MODAL_CONTENT_DEFAULT_MESSAGE)));
        this.getFooter = () => (h("footer", { class: `${MODAL_CLASSES.FOOTER} ${this.noBorder ? NO_BORDER_CLASS : ''}` }, h("slot", { name: "footer" }, h("chi-button", { "data-dismiss": "modal", onClick: () => this.cancel() }, "Cancel"), h("chi-button", { color: "primary", onClick: () => this.accept() }, "Save"))));
        this.modalTitle = 'Modal title';
        this.subtitle = '';
        this.button = '';
        this.center = false;
        this.scrollable = undefined;
        this.inverse = false;
        this.multiStep = false;
        this.animated = false;
        this.noBorder = false;
        this.simple = false;
        this.target = undefined;
        this.alert = false;
        this.sectionAnimationClasses = undefined;
        this.backdropAnimationClasses = undefined;
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
        return (h("div", { class: classes }, this.alert && this.getAlertContent(), this.simple && this.getSimpleContent(), !this.simple && !this.alert && this.getDefaultContent()));
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
        return (h("div", { key: 'e9278dcde5332d2f0b91816599736a78fb397d2e' }, !this.target && this.getTrigger(), h("div", { key: '36d0be566c4c447cae6746d17d0c1db04ccb7885', class: this.getBackdropClasses() }, h("div", { key: 'd622920538fee029429f13227cac45277d4757e9', class: BACKDROP_CLASSES.WRAPPER }, h("section", Object.assign({ key: '9221796ccb0f4f84932160d13fc0251c42adb858' }, sectionAttributes), !this.simple && this.getHeader(), this.simple && this.getCloseButton(), this.getContent(), !this.simple && this.getFooter())))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "sectionAnimationClasses": ["sectionAnimationClassesChanged"],
        "scrollable": ["scrollableValidation"]
    }; }
};

export { Modal as chi_modal };

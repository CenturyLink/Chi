'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1c2d46a0.js');
const classes = require('./classes-b81f8b66.js');
const utils = require('./utils-7f208c7f.js');
const ThreeStepsAnimation = require('./ThreeStepsAnimation-c06a6723.js');
const constants = require('./constants-8a881329.js');
const v4 = require('./v4-daefbed8.js');

const { MARGIN, TYPOGRAPHY } = classes.UTILITY_CLASSES;
const Modal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiModalShow = index.createEvent(this, "chiModalShow", 7);
        this.chiModalShown = index.createEvent(this, "chiModalShown", 7);
        this.chiModalHide = index.createEvent(this, "chiModalHide", 7);
        this.chiModalHidden = index.createEvent(this, "chiModalHidden", 7);
        this.chiModalBack = index.createEvent(this, "chiModalBack", 7);
        this.chiModalAccept = index.createEvent(this, "chiModalAccept", 7);
        this.chiModalCancel = index.createEvent(this, "chiModalCancel", 7);
        this.isActive = false;
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
        this.sectionAnimationClasses = undefined;
        this.backdropAnimationClasses = undefined;
    }
    sectionAnimationClassesChanged() {
        this.isActive = this.sectionAnimationClasses.includes(classes.ACTIVE_CLASS);
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
        this.backdropAnimationClasses = classes.CLOSED_CLASS;
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
            ['400', '480'].includes(this.scrollable) && classes.UTILITY_CLASSES.SIZING[`MAX_H${this.scrollable}`],
        ]);
        return (index.h("div", { class: classes$1 }, index.h("slot", { name: "content" }, index.h("p", { class: `${TYPOGRAPHY.TEXT} ${MARGIN[0]}` }, index.h("slot", null)))));
    }
    getHeader() {
        const backButton = index.h("button", { onClick: () => this.chiModalBack.emit(), class: classes.MODAL_CLASSES.BACK, "aria-label": "Back" });
        return (index.h("header", { class: `${classes.MODAL_CLASSES.HEADER} ${this.noBorder ? classes.NO_BORDER_CLASS : ''}` }, index.h("h2", { class: `${classes.MODAL_CLASSES.TITLE} ${this.multiStep ? classes.CENTERED_CLASS : ''}` }, this.modalTitle), this.subtitle && index.h("h3", { class: classes.MODAL_CLASSES.SUBTITLE }, this.subtitle), this.multiStep && backButton, this.getCloseButton()));
    }
    getTrigger() {
        return (index.h("slot", { name: "trigger" }, index.h("chi-button", { id: `modal-trigger-${this._uuid4}`, class: classes.MODAL_CLASSES.TRIGGER, "data-target": `#${this._uuid4}`, onClick: () => this.toggle() }, this.button)));
    }
    getBackdropClasses() {
        return utils.joinArrayValues([
            classes.BACKDROP_CLASSES.BACKDROP,
            this.backdropAnimationClasses,
            this.scrollable === 'long-content' && classes.UTILITY_CLASSES.SIZING.MAX_H480,
            this.center && classes.CENTER_CLASS,
            this.inverse && classes.INVERSE_CLASS,
            this.animated && classes.ANIMATED_CLASS,
        ]);
    }
    getSectionClasses() {
        return utils.joinArrayValues([classes.MODAL_CLASSES.MODAL, this.sectionAnimationClasses, this.animated && classes.ANIMATED_CLASS]);
    }
    render() {
        const sectionAttributes = {
            id: this._uuid4,
            class: this.getSectionClasses(),
            role: 'dialog',
            'aria-label': 'Modal description',
            'aria-modal': 'true',
        };
        return (index.h("div", { key: '175d1a1eeef7289236ac4ab2327dcade9363722f' }, !this.target && this.getTrigger(), index.h("div", { key: 'c69affe8a1007efa83fc6d04917cffddbdb4cb93', class: this.getBackdropClasses() }, index.h("div", { key: '975a10ccac58ba17c7f7e8de493253966645bca8', class: classes.BACKDROP_CLASSES.WRAPPER }, index.h("section", Object.assign({ key: '45031c817b62f918f03f004265c182da523c8bb4' }, sectionAttributes), !this.simple && this.getHeader(), this.getContent(), !this.simple && this.getFooter())))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "sectionAnimationClasses": ["sectionAnimationClassesChanged"],
        "scrollable": ["scrollableValidation"]
    }; }
};

exports.chi_modal = Modal;

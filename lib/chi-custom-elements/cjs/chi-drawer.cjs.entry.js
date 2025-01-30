'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2c09257f.js');
const positions = require('./positions-97fc6bdc.js');
const ThreeStepsAnimation = require('./ThreeStepsAnimation-c06a6723.js');
const constants = require('./constants-be8ca4ba.js');
const utils = require('./utils-7f208c7f.js');
const mutationObserver = require('./mutationObserver-7cc6af59.js');

const drawerCss = "chi-drawer.sc-chi-drawer-h{display:block}";
const ChiDrawerStyle0 = drawerCss;

const Drawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.eventShow = index.createEvent(this, "chiDrawerShow", 7);
        this.eventHide = index.createEvent(this, "chiDrawerHide", 7);
        this.eventShown = index.createEvent(this, "chiDrawerShown", 7);
        this.eventHidden = index.createEvent(this, "chiDrawerHidden", 7);
        this._documentClickHandler = (ev) => {
            const drawerElement = this.el.querySelector('.chi-drawer');
            const drawerCloseButton = this.nonClosable ? null : drawerElement.querySelector('button.-close');
            const clickTarget = ev.target;
            if (!this.preventAutoHide) {
                if (drawerElement.classList.contains('-active')) {
                    const clickOnCloseButton = (drawerCloseButton && clickTarget === drawerCloseButton) || utils.contains(drawerCloseButton, clickTarget);
                    this.active = utils.contains(drawerElement, clickTarget) && !clickOnCloseButton;
                }
            }
        };
        this.position = undefined;
        this.backdrop = undefined;
        this.active = undefined;
        this.nonClosable = false;
        this.noHeader = undefined;
        this.preventAutoHide = false;
        this.portal = false;
        this._animationClasses = undefined;
        this._backdropAnimationClasses = undefined;
        this.drawerTitle = undefined;
    }
    positionValidation(newValue) {
        if (newValue && !positions.CARDINAL_POSITIONS.includes(newValue)) {
            throw new Error(`Not valid position ${newValue} for drawer. Valid values are top, right, bottom or left. `);
        }
    }
    backdropValidation(newValue) {
        if (newValue && newValue !== 'inverse' && newValue !== 'backdrop') {
            throw new Error(`Not valid backdrop ${newValue} for drawer. Valid values are inverse, backdrop, empty or true. `);
        }
    }
    statusChanged(newValue, oldValue) {
        // This weird double negation check is because of a stencil bug: https://github.com/ionic-team/stencil/issues/1238
        if (!!newValue !== !!oldValue) {
            if (newValue) {
                this._show();
            }
            else {
                this._hide();
            }
        }
    }
    /**
     * Toggles active state (show/hide)
     */
    async toggle() {
        if (this.active) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * Shows the drawer.
     */
    async show() {
        this.active = true;
    }
    /**
     * Hides the drawer
     */
    async hide() {
        this.active = false;
    }
    _show() {
        if (this.animation && !this.animation.isStopped()) {
            this.animation.stop();
        }
        if (this._backdropAnimationClasses !== '' || this._animationClasses !== constants.CLASSES.ACTIVE) {
            this.animation = ThreeStepsAnimation.ThreeStepsAnimation.animationFactory(() => {
                this._animationClasses = constants.CLASSES.TRANSITIONING;
                this._backdropAnimationClasses = `${constants.CLASSES.TRANSITIONING} ${constants.CLASSES.CLOSED}`;
            }, () => {
                this._animationClasses = `${constants.CLASSES.TRANSITIONING} ${constants.CLASSES.ACTIVE}`;
                this._backdropAnimationClasses = constants.CLASSES.TRANSITIONING;
            }, () => {
                this._animationClasses = constants.CLASSES.ACTIVE;
                this._backdropAnimationClasses = '';
                this.eventShown.emit();
            }, constants.ANIMATION_DURATION.MEDIUM);
        }
        this.eventShow.emit();
    }
    _hide() {
        if (this.animation && !this.animation.isStopped()) {
            this.animation.stop();
        }
        if (this._backdropAnimationClasses !== constants.CLASSES.CLOSED || this._animationClasses !== '') {
            this.animation = ThreeStepsAnimation.ThreeStepsAnimation.animationFactory(() => {
                this._animationClasses = `${constants.CLASSES.TRANSITIONING} ${constants.CLASSES.ACTIVE}`;
                this._backdropAnimationClasses = constants.CLASSES.TRANSITIONING;
            }, () => {
                this._animationClasses = constants.CLASSES.TRANSITIONING;
                this._backdropAnimationClasses = `${constants.CLASSES.TRANSITIONING} ${constants.CLASSES.CLOSED}`;
            }, () => {
                this._animationClasses = '';
                this._backdropAnimationClasses = constants.CLASSES.CLOSED;
                this.eventHidden.emit();
            }, constants.ANIMATION_DURATION.MEDIUM);
        }
        this.eventHide.emit();
    }
    connectedCallback() {
        mutationObserver.addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.positionValidation(this.position);
        this._animationClasses = this.active ? constants.CLASSES.ACTIVE : '';
        this._backdropAnimationClasses = this.active ? '' : constants.CLASSES.CLOSED;
    }
    componentDidLoad() {
        document.addEventListener('click', this._documentClickHandler);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this._documentClickHandler);
    }
    render() {
        // TODO: change this into <chi-button/> element.
        const xIconProperties = { icon: 'x' };
        const closeButton = (index.h("button", { class: "chi-button -icon -close", onClick: () => this.hide(), "aria-label": "Close" }, index.h("div", { class: "chi-button__content" }, index.h("chi-icon", Object.assign({}, xIconProperties)))));
        const drawer = (index.h("div", { class: `chi-drawer -animated
        ${this.position ? `-${this.position}` : ''}
        ${this._animationClasses}
        ${this.portal ? '-portal' : ''}
      ` }, this.noHeader ? (!this.nonClosable ? ([closeButton, index.h("slot", null)]) : (index.h("slot", null))) : !this.nonClosable ? ([
            index.h("div", { class: "chi-drawer__header" }, index.h("span", { class: "chi-drawer__title" }, this.drawerTitle), closeButton),
            index.h("div", { class: "chi-drawer__content" }, index.h("slot", null)),
        ]) : ([
            index.h("div", { class: "chi-drawer__header" }, index.h("span", { class: "chi-drawer__title" }, this.drawerTitle)),
            index.h("div", { class: "chi-drawer__content" }, index.h("slot", null)),
        ])));
        if (this.backdrop || this.backdrop === '') {
            return (index.h("div", { class: `chi-backdrop -animated
          ${this.backdrop === 'inverse' ? '-inverse' : ''}
          ${this._backdropAnimationClasses}
        ` }, index.h("div", { class: "chi-backdrop__wrapper" }, drawer)));
        }
        else {
            return drawer;
        }
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "position": ["positionValidation"],
        "backdrop": ["backdropValidation"],
        "active": ["statusChanged"]
    }; }
};
Drawer.style = ChiDrawerStyle0;

exports.chi_drawer = Drawer;

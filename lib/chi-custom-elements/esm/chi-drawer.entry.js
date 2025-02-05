import { r as registerInstance, c as createEvent, h, g as getElement } from './index-93bc7bbf.js';
import { C as CARDINAL_POSITIONS } from './positions-82cba14e.js';
import { T as ThreeStepsAnimation } from './ThreeStepsAnimation-a718d5b8.js';
import { c as CLASSES, A as ANIMATION_DURATION } from './constants-0e68989c.js';
import { c as contains } from './utils-48628cb4.js';
import { a as addMutationObserver } from './mutationObserver-b386bd11.js';

const drawerCss = "chi-drawer.sc-chi-drawer-h{display:block}";
const ChiDrawerStyle0 = drawerCss;

const Drawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.eventShow = createEvent(this, "chiDrawerShow", 7);
        this.eventHide = createEvent(this, "chiDrawerHide", 7);
        this.eventShown = createEvent(this, "chiDrawerShown", 7);
        this.eventHidden = createEvent(this, "chiDrawerHidden", 7);
        /**
         * To render Drawer without a close button
         */
        this.nonClosable = false;
        /**
         * to prevent closing when the user clicked outside the Drawer
         */
        this.preventAutoHide = false;
        /**
         * to define portal style of the Drawer header
         */
        this.portal = false;
        this._documentClickHandler = (ev) => {
            const drawerElement = this.el.querySelector('.chi-drawer');
            const drawerCloseButton = this.nonClosable ? null : drawerElement.querySelector('button.-close');
            const clickTarget = ev.target;
            if (!this.preventAutoHide) {
                if (drawerElement.classList.contains('-active')) {
                    const clickOnCloseButton = (drawerCloseButton && clickTarget === drawerCloseButton) || contains(drawerCloseButton, clickTarget);
                    this.active = contains(drawerElement, clickTarget) && !clickOnCloseButton;
                }
            }
        };
    }
    positionValidation(newValue) {
        if (newValue && !CARDINAL_POSITIONS.includes(newValue)) {
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
        if (this._backdropAnimationClasses !== '' || this._animationClasses !== CLASSES.ACTIVE) {
            this.animation = ThreeStepsAnimation.animationFactory(() => {
                this._animationClasses = CLASSES.TRANSITIONING;
                this._backdropAnimationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.CLOSED}`;
            }, () => {
                this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
                this._backdropAnimationClasses = CLASSES.TRANSITIONING;
            }, () => {
                this._animationClasses = CLASSES.ACTIVE;
                this._backdropAnimationClasses = '';
                this.eventShown.emit();
            }, ANIMATION_DURATION.MEDIUM);
        }
        this.eventShow.emit();
    }
    _hide() {
        if (this.animation && !this.animation.isStopped()) {
            this.animation.stop();
        }
        if (this._backdropAnimationClasses !== CLASSES.CLOSED || this._animationClasses !== '') {
            this.animation = ThreeStepsAnimation.animationFactory(() => {
                this._animationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.ACTIVE}`;
                this._backdropAnimationClasses = CLASSES.TRANSITIONING;
            }, () => {
                this._animationClasses = CLASSES.TRANSITIONING;
                this._backdropAnimationClasses = `${CLASSES.TRANSITIONING} ${CLASSES.CLOSED}`;
            }, () => {
                this._animationClasses = '';
                this._backdropAnimationClasses = CLASSES.CLOSED;
                this.eventHidden.emit();
            }, ANIMATION_DURATION.MEDIUM);
        }
        this.eventHide.emit();
    }
    connectedCallback() {
        addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.positionValidation(this.position);
        this._animationClasses = this.active ? CLASSES.ACTIVE : '';
        this._backdropAnimationClasses = this.active ? '' : CLASSES.CLOSED;
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
        const closeButton = (h("button", { class: "chi-button -icon -close", onClick: () => this.hide(), "aria-label": "Close" }, h("div", { class: "chi-button__content" }, h("chi-icon", Object.assign({}, xIconProperties)))));
        const drawer = (h("div", { class: `chi-drawer -animated
        ${this.position ? `-${this.position}` : ''}
        ${this._animationClasses}
        ${this.portal ? '-portal' : ''}
      ` }, this.noHeader ? (!this.nonClosable ? ([closeButton, h("slot", null)]) : (h("slot", null))) : !this.nonClosable ? ([
            h("div", { class: "chi-drawer__header" }, h("span", { class: "chi-drawer__title" }, this.drawerTitle), closeButton),
            h("div", { class: "chi-drawer__content" }, h("slot", null)),
        ]) : ([
            h("div", { class: "chi-drawer__header" }, h("span", { class: "chi-drawer__title" }, this.drawerTitle)),
            h("div", { class: "chi-drawer__content" }, h("slot", null)),
        ])));
        if (this.backdrop || this.backdrop === '') {
            return (h("div", { class: `chi-backdrop -animated
          ${this.backdrop === 'inverse' ? '-inverse' : ''}
          ${this._backdropAnimationClasses}
        ` }, h("div", { class: "chi-backdrop__wrapper" }, drawer)));
        }
        else {
            return drawer;
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "position": ["positionValidation"],
        "backdrop": ["backdropValidation"],
        "active": ["statusChanged"]
    }; }
};
Drawer.style = ChiDrawerStyle0;

export { Drawer as chi_drawer };

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1c2d46a0.js');
const positions = require('./positions-97fc6bdc.js');
const ThreeStepsAnimation = require('./ThreeStepsAnimation-c06a6723.js');
const constants = require('./constants-8a881329.js');
const popper = require('./popper-56272c33.js');
const classes = require('./classes-b81f8b66.js');
const mutationObserver = require('./mutationObserver-9c7c8fdd.js');

class Drag {
    setScreenWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    setScreenHeight() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
    constructor(trigger, elementToMove, component) {
        this.positionInitial = {
            x: 0,
            y: 0,
        };
        this.positionEnd = {
            x: 0,
            y: 0,
        };
        this.screenWidth = this.setScreenWidth();
        this.screenHeight = this.setScreenHeight();
        this.auxClientCoord = Number.MAX_SAFE_INTEGER;
        this.auxClientCoord2 = Number.MIN_SAFE_INTEGER;
        this.dragMouseDownHandler = (e) => {
            e.preventDefault();
            this.positionInitial.x = e.clientX;
            this.positionInitial.y = e.clientY;
            this.initialTransformStyling = window.getComputedStyle(this.elementToMove)['transform'];
            document.addEventListener('mouseup', this.closeDragElement);
            document.addEventListener('mousemove', this.elementDragHandler);
        };
        this.dragTouchHandler = (e) => {
            e.preventDefault();
            this.positionInitial.x = e.touches[0].clientX;
            this.positionInitial.y = e.touches[0].clientY;
            this.initialTransformStyling = window.getComputedStyle(this.elementToMove)['transform'];
            this.trigger.addEventListener('touchmove', this.elementDragOnTouchHandler);
        };
        this.setPosition = (clientX, clientY, rect) => {
            this.positionEnd.x = this.positionInitial.x - clientX;
            this.positionEnd.y = this.positionInitial.y - clientY;
            this.positionInitial.x = clientX;
            this.positionInitial.y = clientY;
            this.elementToMove.style.transform = this.initialTransformStyling;
            if (rect.top < 0 && this.auxClientCoord > clientY) {
                this.auxClientCoord = clientY;
            }
            else if (rect.left < 0 && this.auxClientCoord > clientX) {
                this.auxClientCoord = clientX;
            }
            else if (rect.right > this.screenWidth && this.auxClientCoord2 < clientX) {
                this.auxClientCoord2 = clientX;
            }
            else if (rect.bottom > this.screenHeight && this.auxClientCoord2 < clientY) {
                this.auxClientCoord2 = clientY;
            }
            else {
                this.elementToMove.style.top = this.elementToMove.offsetTop - this.positionEnd.y + 'px';
                this.elementToMove.style.left = this.elementToMove.offsetLeft - this.positionEnd.x + 'px';
                this.auxClientCoord = Number.MAX_SAFE_INTEGER;
                this.auxClientCoord2 = Number.MIN_SAFE_INTEGER;
            }
        };
        this.elementDragHandler = (e) => {
            e.preventDefault();
            if (this.component._popper) {
                this.component._popper.destroy();
                this.component._popper = null;
            }
            if (!this.elementToMove) {
                return;
            }
            const rect = this.elementToMove.getBoundingClientRect();
            this.setPosition(e.clientX, e.clientY, rect);
        };
        this.elementDragOnTouchHandler = (e) => {
            e.preventDefault();
            const touch = e.targetTouches[0];
            if (this.component._popper) {
                this.component._popper.destroy();
                this.component._popper = null;
            }
            if (!this.elementToMove) {
                return;
            }
            const rect = this.elementToMove.getBoundingClientRect();
            this.setPosition(touch.clientX, touch.clientY, rect);
        };
        this.closeDragElement = () => {
            document.removeEventListener('mouseup', this.closeDragElement);
            document.removeEventListener('mousemove', this.elementDragHandler);
        };
        this.handlerResize = () => {
            if (!this.elementToMove) {
                return;
            }
            const rect = this.elementToMove.getBoundingClientRect();
            this.screenWidth = this.setScreenWidth();
            this.screenHeight = this.setScreenHeight();
            if (rect.right >= this.screenWidth) {
                this.elementToMove.style.left = Math.abs(rect.width + rect.width / 2 - this.screenWidth) + 'px';
            }
            else if (rect.bottom >= this.screenHeight) {
                this.elementToMove.style.top = Math.abs(rect.height * 2 - this.screenHeight) + 'px';
            }
        };
        this.trigger = trigger;
        this.elementToMove = elementToMove;
        this.component = component;
        this.trigger.addEventListener('mousedown', this.dragMouseDownHandler);
        this.trigger.addEventListener('touchstart', this.dragTouchHandler);
        window.addEventListener('resize', this.handlerResize);
    }
    dispose() {
        document.removeEventListener('mouseup', this.closeDragElement);
        document.removeEventListener('mousemove', this.elementDragHandler);
        window.removeEventListener('resize', this.handlerResize);
        this.trigger = null;
        this.elementToMove = null;
        this.initialTransformStyling = null;
        this.positionEnd = null;
        this.positionInitial = null;
    }
}

const popoverCss = "chi-popover.sc-chi-popover-h{display:inline-block}";
const ChiPopoverStyle0 = popoverCss;

const Popover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.eventShow = index.createEvent(this, "chiPopoverShow", 7);
        this.eventHide = index.createEvent(this, "chiPopoverHide", 7);
        this.eventShown = index.createEvent(this, "chiPopoverShown", 7);
        this.eventHidden = index.createEvent(this, "chiPopoverHidden", 7);
        this._componentLoaded = false;
        this._didUpdateCallBackOnceQueue = [];
        this._closePrevented = false;
        this.position = 'top';
        this.arrow = undefined;
        this.closable = false;
        this.drag = false;
        this.active = undefined;
        this.reference = undefined;
        this.portal = undefined;
        this.modal = undefined;
        this.preventAutoHide = undefined;
        this.variant = undefined;
        this._animationClasses = '';
        this.popoverTitle = undefined;
        this.popoverFooter = undefined;
    }
    positionValidation(newValue) {
        if (newValue && !positions.CARDINAL_EXTENDED_POSITIONS.includes(newValue)) {
            throw new Error(`Not valid position ${newValue} for popover. Valid values are top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start and left-end. `);
        }
        if (this._componentLoaded) {
            this._configurePopoverPopper();
        }
    }
    referenceElementChanged(newValue) {
        Popover.referenceElementValidation(newValue);
        this._reference = newValue ? document.querySelector(newValue) : null;
        if (this._componentLoaded) {
            this._configurePopoverPopper();
        }
    }
    static referenceElementValidation(newValue) {
        if (newValue) {
            const referenceCandidates = document.querySelectorAll(newValue);
            if (referenceCandidates.length === 0) {
                throw new Error('Reference element could not be found.');
            }
            if (referenceCandidates.length > 1) {
                throw new Error(`Found ${referenceCandidates.length} reference candidates matching ${newValue}. Not able to discern which one is the preferred.`);
            }
        }
    }
    arrowChanged(newValue, oldValue) {
        if (!!newValue !== !!oldValue && this._componentLoaded) {
            this._configurePopoverPopper();
        }
    }
    statusChanged(newValue, oldValue) {
        if (!!newValue !== !!oldValue) {
            if (newValue) {
                this.preventAutoClose();
                this._show();
            }
            else {
                this._hide();
            }
        }
    }
    dragUpdated(newVal) {
        if (newVal && !this._drag) {
            this._drag = new Drag(this._popoverHeader, this._popoverElement, this);
        }
        else if (!newVal && this._drag) {
            this._drag.dispose();
            this._drag = undefined;
            // To-do Recover Popper with auto-hide functionality
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
     * Shows the popover.
     */
    async show() {
        this.active = true;
    }
    /**
     * Hides the popover
     */
    async hide() {
        this.active = false;
    }
    _resetPopperPosition() {
        this._popper.update();
    }
    _show() {
        if (!this._popper)
            this._initializePopper();
        if (this.currentAnimation && !this.currentAnimation.isStopped()) {
            this.currentAnimation.stop();
        }
        this._animationClasses = constants.CLASSES.TRANSITIONING;
        // We need to run this code before _animationClasses have been updated in the DOM,
        // so we wait for the componentDidUpdate hook to run _resetPopperPosition.
        this._didUpdateCallBackOnceQueue.push(() => {
            const transition = this._popoverElement.style.transition;
            this._popoverElement.style.transition = 'none';
            // Because this popper method is asynchronous, cannot be done in step 1 of
            // animation, as it will be executed between step 1 and step 2.
            this._resetPopperPosition();
            this.currentAnimation = ThreeStepsAnimation.ThreeStepsAnimation.animationFactory(() => {
                this._popoverElement.style.transform = this._preAnimationTransformStyle;
            }, () => {
                this._animationClasses = `${constants.CLASSES.TRANSITIONING} ${constants.CLASSES.ACTIVE}`;
                this._popoverElement.style.transition = transition;
                this._popoverElement.style.transform = this._postAnimationTransformStyle;
            }, () => {
                this._animationClasses = constants.CLASSES.ACTIVE;
                this.eventShown.emit();
            }, constants.ANIMATION_DURATION.SHORT);
        });
        this.eventShow.emit();
    }
    _hide() {
        if (this.currentAnimation && !this.currentAnimation.isStopped()) {
            this.currentAnimation.stop();
        }
        this.currentAnimation = ThreeStepsAnimation.ThreeStepsAnimation.animationFactory(() => {
            this._animationClasses = `${constants.CLASSES.TRANSITIONING} ${constants.CLASSES.ACTIVE}`;
        }, () => {
            this._animationClasses = constants.CLASSES.TRANSITIONING;
            this._popoverElement.style.transform = this._preAnimationTransformStyle;
        }, () => {
            this._animationClasses = '';
            if (!this._popper) {
                this._initializePopper();
            }
            this.eventHidden.emit();
        }, constants.ANIMATION_DURATION.SHORT);
        this.eventHide.emit();
    }
    _configurePopoverPopper() {
        if (!this._reference) {
            if (this._popper) {
                this._popper.destroy();
                this._popper = null;
            }
            return;
        }
        this._initializePopper();
        this._popper.update();
    }
    _initializePopper() {
        const savePopperData = (data) => {
            this._preAnimationTransformStyle = null;
            this._postAnimationTransformStyle = data.styles.transform;
            if (data.placement.indexOf('top') === 0) {
                this._preAnimationTransformStyle = `translate3d(${data.popper.left}px, ${data.popper.top + 20}px, 0)`;
            }
            else if (data.placement.indexOf('right') === 0) {
                this._preAnimationTransformStyle = `translate3d(${data.popper.left - 20}px, ${data.popper.top}px, 0)`;
            }
            else if (data.placement.indexOf('bottom') === 0) {
                this._preAnimationTransformStyle = `translate3d(${data.popper.left}px, ${data.popper.top - 20}px, 0)`;
            }
            else if (data.placement.indexOf('left') === 0) {
                this._preAnimationTransformStyle = `translate3d(${data.popper.left + 20}px, ${data.popper.top}px, 0)`;
            }
            else {
                this._preAnimationTransformStyle = data.styles.transform;
            }
            return data;
        };
        this._popper = new popper.Popper(this._reference, this._popoverElement, {
            modifiers: {
                applyStyle: { enabled: true },
                applyChiStyle: {
                    enabled: true,
                    fn: savePopperData,
                    // Set order to run after popper applyStyle modifier
                    // as we need data.styles to be filled.
                    order: 875,
                },
                arrow: {
                    element: `.${classes.POPOVER_CLASSES.ARROW}`,
                    enabled: this.arrow,
                },
                preventOverflow: {
                    boundariesElement: 'window',
                },
            },
            removeOnDestroy: false,
            placement: this.position,
        });
    }
    _destroyPopper() {
        this._preAnimationTransformStyle = null;
        this._postAnimationTransformStyle = null;
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
    }
    connectedCallback() {
        mutationObserver.addMutationObserver.call(this, undefined, { childList: true, subtree: true });
    }
    componentWillLoad() {
        this.positionValidation(this.position);
        this.referenceElementChanged(this.reference);
        if (this.active) {
            this._animationClasses = constants.CLASSES.ACTIVE;
        }
        if (Array.from(this.el.querySelectorAll(`[slot=${classes.POPOVER_CLASSES.FOOTER}]`)).length > 0) {
            this.popoverFooter = true;
        }
    }
    componentDidLoad() {
        this._documentClickHandler = () => {
            if (!this._closePrevented && !this.preventAutoHide) {
                this.hide();
            }
        };
        this._documentKeyHandler = (e) => {
            if (!this.preventAutoHide && 'key' in e && (e.key === 'Escape' || e.key === 'Esc' || e.key === constants.ESCAPE_KEYCODE)) {
                this.hide();
            }
        };
        this._configurePopoverPopper();
        this._componentLoaded = true;
        if (this.drag) {
            this.dragUpdated(this.drag);
        }
        else {
            document.addEventListener('click', this._documentClickHandler);
            document.addEventListener('keyup', this._documentKeyHandler);
        }
    }
    disconnectedCallback() {
        this._destroyPopper();
        if (this.currentAnimation && !this.currentAnimation.isStopped()) {
            this.currentAnimation.stop();
        }
        if (this._drag) {
            this._drag.dispose();
            this._drag = undefined;
        }
        this.currentAnimation = null;
        this._componentLoaded = false;
        document.removeEventListener('click', this._documentClickHandler);
        document.removeEventListener('keyup', this._documentKeyHandler);
    }
    componentDidUpdate() {
        while (this._didUpdateCallBackOnceQueue.length) {
            const cb = this._didUpdateCallBackOnceQueue.shift();
            cb();
        }
    }
    preventAutoClose() {
        this._closePrevented = true;
        window.clearTimeout(this._closePreventedTimeout);
        this._closePreventedTimeout = window.setTimeout(() => {
            this._closePrevented = false;
        }, 100);
    }
    hostData() {
        return {
            'aria-hidden': this.active ? 'false' : 'true',
        };
    }
    __stencil_render() {
        const closeButton = this.closable ? index.h("chi-button", { size: "xs", onClick: () => this.hide(), type: "close" }) : null;
        const popoverHeader = this.popoverTitle && (index.h("header", { key: 'b4e54de6de673eae8b612fd01ec05bba0ff4c30a', ref: (el) => (this._popoverHeader = el), class: classes.POPOVER_CLASSES.HEADER }, index.h("h2", { key: '9e75650c32d2b36ee33e74301c4a0404cf7d13e4', class: classes.POPOVER_CLASSES.TITLE }, this.popoverTitle)));
        const slot = this.variant && this.variant === 'text' ? (index.h("p", { class: classes.POPOVER_CLASSES.TEXT }, index.h("slot", null))) : (index.h("slot", null));
        const chiFooter = this.popoverFooter && (index.h("div", { key: '279e1ccc8cbdda238a2e1155771762639430149d', class: classes.POPOVER_CLASSES.FOOTER }, index.h("slot", { key: '2a54e27d0f6738ce02003f8af0c251b20f125fe2', name: classes.POPOVER_CLASSES.FOOTER })));
        return (index.h("section", { key: '462f631c4989bf4e9e9399bf0f52bcdacdfc3ba8', class: `
          ${classes.POPOVER_CLASSES.POPOVER}
          ${constants.CLASSES.ANIMATED}
          ${this.position ? `chi-popover--${this.position}` : ''}
          ${this.arrow ? '' : classes.POPOVER_CLASSES.NO_ARROW}
          ${this._animationClasses}
          ${this._reference && this._reference.classList.contains('chi-input') ? classes.POPOVER_CLASSES.INPUT : ''}
          ${this.closable ? classes.POPOVER_CLASSES.CLOSABLE : ''}
          ${this.drag ? classes.POPOVER_CLASSES.DRAGGABLE : ''}
          ${this.portal ? '-portal' : ''}
          ${this.modal ? classes.POPOVER_CLASSES.MODAL : ''}
        `, ref: (el) => (this._popoverElement = el), onClick: () => this.preventAutoClose(), role: "dialog", "aria-modal": "true", "aria-label": this.popoverTitle, "aria-hidden": !this.active }, closeButton, popoverHeader, index.h("div", { key: '60839afcea245b61577621d94d0aa6bcbecb0a5a', class: classes.POPOVER_CLASSES.CONTENT }, slot), chiFooter, this.arrow && index.h("div", { key: 'facb86734a8a0c1e285c3a129ace7e5db0b74108', class: classes.POPOVER_CLASSES.ARROW })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "position": ["positionValidation"],
        "reference": ["referenceElementChanged"],
        "arrow": ["arrowChanged"],
        "active": ["statusChanged"],
        "drag": ["dragUpdated"]
    }; }
    render() { return index.h(index.Host, this.hostData(), this.__stencil_render()); }
};
Popover.style = ChiPopoverStyle0;

exports.chi_popover = Popover;

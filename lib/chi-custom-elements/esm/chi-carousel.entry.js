import { r as registerInstance, c as createEvent, h, g as getElement } from './index-422a57bb.js';
import { d as TRANSITIONING_CLASS, S as STAT_CLASSES, e as CAROUSEL_CLASSES, b as ACTIVE_CLASS, U as UTILITY_CLASSES } from './classes-26189a5f.js';
import { C as CAROUSEL_SWIPE_DELTA, a as CAROUSEL_DIRECTION, A as ANIMATION_DURATION } from './constants-e61c7d0c.js';
import { T as ThreeStepsAnimation } from './ThreeStepsAnimation-a718d5b8.js';

const carouselCss = "chi-carousel.sc-chi-carousel-h{display:block;width:100%}";
const ChiCarouselStyle0 = carouselCss;

const CAROUSEL_BOUNCE_DISTANCE = 25;
const CAROUSEL_BOUNCE_TIME = 200;
const MAX_ITEMS_THRESHOLD = 0.95;
const Carousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chiViewChange = createEvent(this, "chiViewChange", 7);
        /**
         * To set the interval for the autoplay
         */
        this.interval = 5;
        /**
         * To render Carousel without Button Controllers
         */
        this.noButtonControllers = false;
        /**
         *  View
         */
        this.view = 0;
        /**
         *  Number of views
         */
        this.numberOfViews = 0;
        this.transformX = 0;
        this.scrollBreakpoints = {
            0: CAROUSEL_BOUNCE_DISTANCE,
        };
        this.isDragging = false;
        this.currentStep = 0;
        this.remainingSpace = 0;
        this.isLastView = false;
        this.isLastStep = false;
        this.restItemsShown = 0;
        this.resizeHandler = () => {
            this._calculateCarouselWidth();
        };
        this.touchEnd = () => {
            if (this.isDragging) {
                this.isDragging = false;
                this.wrapper.style.transform = this.getWrapperTransform();
            }
        };
        this.touchMove = (e) => {
            if (this.isDragging) {
                const currentPosition = this.getPositionX(e);
                const previousPosition = this.scrollBreakpoints[this.view + 1];
                const delta = this.getMoveDelta();
                const newPosition = this.isMoveToNext() ? previousPosition - delta : previousPosition + delta;
                this.moveEndPosition = currentPosition;
                this.wrapper.style.transform = `translateX(${newPosition}px)`;
                if (delta > CAROUSEL_SWIPE_DELTA) {
                    if (this.isMoveToNext()) {
                        this.nextView();
                    }
                    else {
                        this.prevView();
                    }
                    this.isDragging = false;
                }
            }
        };
        this.touchStart = (e) => {
            this.moveStartPosition = this.getPositionX(e);
            this.isDragging = true;
        };
        this.getPositionX = (event) => {
            return event.touches[0].clientX;
        };
    }
    _calculateCarouselWidth() {
        const carouselItems = this._getCarouselItems();
        this.fullScrollLength = this.el.offsetWidth || this.fullScrollLength;
        if (this.single) {
            this._applySizeToItems();
            this.transformX = -(this.currentStep * carouselItems[0].offsetWidth);
        }
        const itemsShown = this.fullScrollLength / carouselItems[0].offsetWidth;
        this.maxItemsShown = itemsShown % 1 > MAX_ITEMS_THRESHOLD ? Math.ceil(itemsShown) : Math.floor(itemsShown);
        this.numberOfViews = Math.ceil(carouselItems.length / this.maxItemsShown);
        this.restItemsShown = carouselItems.length % this.maxItemsShown;
        if (this.isLastView) {
            this._calculateView(CAROUSEL_DIRECTION.NEXT, this.currentStep);
        }
    }
    connectedCallback() {
        this.customPrevButton = !!this.el.querySelector('[slot="previous"]');
        this.customNextButton = !!this.el.querySelector('[slot="next"]');
    }
    componentDidLoad() {
        this._calculateCarouselWidth();
        this._autoPlay(false);
        window.addEventListener('resize', this.resizeHandler);
    }
    componentWillOnload() {
        window.removeEventListener('resize', this.resizeHandler);
    }
    _autoPlay(isPaused) {
        if (this.autoplay && !this.autoplayInterval && !isPaused) {
            this.autoplayInterval = window.setInterval(() => {
                if (this.view === this.numberOfViews - 1) {
                    this._goToView(-1);
                }
                this._goToView(++this.view);
            }, this.interval * 1000);
        }
        else {
            window.clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    _calculateView(direction, customNextStep) {
        const carouselItems = this._getCarouselItems();
        const itemWidth = carouselItems[0].offsetWidth;
        let nextStep = customNextStep !== undefined ? customNextStep : this.maxItemsShown * -direction + this.currentStep;
        const remainingItems = carouselItems.length - nextStep;
        const isCurrentLastView = this.isLastView;
        this.isLastView = remainingItems <= this.maxItemsShown;
        this.isLastStep = remainingItems <= 0;
        if (nextStep < 0)
            nextStep = 0;
        if (this.isLastStep && direction === CAROUSEL_DIRECTION.NEXT)
            return;
        if (this.isLastView) {
            this._moveLastView(customNextStep, remainingItems, itemWidth);
        }
        else if (nextStep === 0) {
            this.transformX = 0;
        }
        else {
            this._moveView(customNextStep, itemWidth, nextStep, direction, isCurrentLastView);
        }
        if (nextStep >= 0) {
            this.currentStep = Math.abs(nextStep);
        }
    }
    _moveView(customNextStep, itemWidth, nextStep, direction, currentLastView) {
        if (customNextStep) {
            this.transformX = customNextStep * itemWidth * -1;
        }
        else {
            const gap = this._getGap();
            this.transformX += currentLastView
                ? this.remainingSpace
                : (Math.abs(nextStep - this.currentStep) * itemWidth + gap * this.maxItemsShown) * direction;
        }
    }
    _moveLastView(customNextStep, remainingItems, itemWidth) {
        const gap = this._getGap();
        const itemsShown = this.maxItemsShown + remainingItems;
        this.remainingSpace = Math.abs(this.fullScrollLength - itemsShown * itemWidth - gap * itemsShown - gap / 3);
        if (customNextStep) {
            this.transformX = this.fullScrollLength - (customNextStep + remainingItems) * itemWidth;
        }
        else {
            this.transformX -= this.remainingSpace;
        }
    }
    _bounceView(direction) {
        if (this.isLastStep) {
            this.transformX += CAROUSEL_BOUNCE_DISTANCE * direction;
        }
        else {
            this.transformX = CAROUSEL_BOUNCE_DISTANCE * direction;
        }
        setTimeout(() => {
            this.transformX -= CAROUSEL_BOUNCE_DISTANCE * direction;
        }, CAROUSEL_BOUNCE_TIME);
    }
    prevView() {
        this._calculateView(CAROUSEL_DIRECTION.PREVIOUS);
        if (this.animation && !this.animation.isStopped()) {
            this.animation.stop();
        }
        if (this.view >= -1) {
            this.animation = ThreeStepsAnimation.animationFactory(() => {
                this._animationClasses = `${TRANSITIONING_CLASS}`;
            }, () => {
                if (this.view >= 0) {
                    this.view = this.view - 1;
                }
            }, () => {
                if (this.view === -1) {
                    this.view = 0;
                }
                else {
                    this._animationClasses = '';
                    this.chiViewChange.emit(this.view);
                }
            }, ANIMATION_DURATION.SHORT);
        }
        if (this.currentStep === 0 || this.isLastStep) {
            this._bounceView(CAROUSEL_DIRECTION.PREVIOUS);
        }
    }
    nextView() {
        this._calculateView(CAROUSEL_DIRECTION.NEXT);
        if (this.animation && !this.animation.isStopped()) {
            this.animation.stop();
        }
        this.animation = ThreeStepsAnimation.animationFactory(() => {
            this._animationClasses = `${TRANSITIONING_CLASS}`;
        }, () => {
            if (this.view < this.numberOfViews) {
                this.view = this.view + 1;
            }
        }, () => {
            if (this.view === this.numberOfViews) {
                this.view = this.numberOfViews - 1;
            }
            else {
                this.chiViewChange.emit(this.view);
                this._animationClasses = '';
            }
        }, ANIMATION_DURATION.SHORT);
        if (this.currentStep === 0 || this.isLastStep) {
            this._bounceView(CAROUSEL_DIRECTION.NEXT);
        }
    }
    isMoveToNext() {
        return this.moveStartPosition > this.moveEndPosition;
    }
    getMoveDelta() {
        return Math.abs(this.moveEndPosition - this.moveStartPosition);
    }
    getWrapperTransform() {
        return `translateX(${this.transformX}px)`;
    }
    _applySizeToItems() {
        const carouselItems = this._getCarouselItems();
        if (carouselItems) {
            carouselItems.forEach((item) => {
                item.style.width = `${this.fullScrollLength}px`;
            });
        }
    }
    _goToView(view) {
        const nextStep = this.maxItemsShown * view;
        const direction = nextStep > this.currentStep ? CAROUSEL_DIRECTION.NEXT : CAROUSEL_DIRECTION.PREVIOUS;
        this._calculateView(direction, nextStep);
        this.view = view;
        this.chiViewChange.emit(view);
    }
    _getCarouselItems() {
        const carouselItemClasses = [CAROUSEL_CLASSES.ITEM, STAT_CLASSES.ITEM];
        return this.el.querySelectorAll(carouselItemClasses.map((itemClass) => `.${itemClass}`).join(', '));
    }
    _areThereMultipleItems() {
        const carouselItems = this._getCarouselItems();
        return carouselItems.length > 1;
    }
    _getItemVisibility(index) {
        let minVisibleItem = this.view * this.maxItemsShown;
        const maxVisibleItem = minVisibleItem + this.maxItemsShown;
        if (this.isLastView && this.restItemsShown > 0) {
            minVisibleItem = minVisibleItem - (this.maxItemsShown - this.restItemsShown);
        }
        return index >= minVisibleItem && index < maxVisibleItem;
    }
    setVisibleClass() {
        const carouselItems = this._getCarouselItems();
        carouselItems.forEach((item, index) => {
            const isVisible = this._getItemVisibility(index);
            item.classList.toggle('-visible', isVisible);
        });
    }
    _getStatComponent() {
        return this.el.querySelector(`.${STAT_CLASSES.STAT}`);
    }
    _getGap() {
        const statComponent = this._getStatComponent();
        if (statComponent) {
            const statComputedStyle = window.getComputedStyle(statComponent);
            return parseInt(statComputedStyle.gap, 10);
        }
        return 0;
    }
    render() {
        this.setVisibleClass();
        const prevButton = this._areThereMultipleItems() && !this.noButtonControllers && (h("div", { class: `${CAROUSEL_CLASSES.CONTROL} ${CAROUSEL_CLASSES.PREVIOUS}`, onClick: () => this.prevView() }, this.customPrevButton ? (h("slot", { name: "previous" })) : (h("chi-button", { size: "sm", type: "float", "alternative-text": "Carousel previous", disabled: this.currentStep <= 0 }, h("chi-icon", { icon: "chevron-left" })))));
        const nextButton = this._areThereMultipleItems() && !this.noButtonControllers && (h("div", { class: `${CAROUSEL_CLASSES.CONTROL} ${CAROUSEL_CLASSES.NEXT}`, onClick: () => this.nextView() }, this.customNextButton ? (h("slot", { name: "next" })) : (h("chi-button", { size: "sm", type: "float", "alternative-text": "Carousel next", disabled: this.isLastView }, h("chi-icon", { icon: "chevron-right" })))));
        const items = h("slot", { name: "items" });
        const dotControllers = this.dots ? (h("div", { class: CAROUSEL_CLASSES.DOTS }, Array(this.numberOfViews)
            .fill(0)
            .map((_, i) => {
            return (h("span", { onClick: () => {
                    this._goToView(i);
                }, class: `
              ${CAROUSEL_CLASSES.DOT}
              ${this.view === i ||
                    (this.view === -1 && i === 0) ||
                    (this.view === this.numberOfViews && i === this.numberOfViews - 1)
                    ? ACTIVE_CLASS
                    : ''}` }));
        }))) : null;
        const pagination = this.pagination ? (h("div", { class: CAROUSEL_CLASSES.PAGINATION }, this.view === 0 || this.view === -1
            ? 1
            : this.view + 1 > this.numberOfViews
                ? this.numberOfViews
                : this.view + 1, ' ', "of ", this.numberOfViews)) : null;
        return (h("div", { onTouchStart: this.touchStart, onTouchEnd: this.touchEnd, onTouchMove: this.touchMove, onMouseEnter: () => this._autoPlay(true), onMouseLeave: () => this._autoPlay(false), class: `
        ${CAROUSEL_CLASSES.CAROUSEL}
        ${this.dots ? CAROUSEL_CLASSES.DOTS_ADDITION : ''}
        ${this.pagination ? CAROUSEL_CLASSES.PAGINATION_ADDITION : ''}` }, h("div", { class: CAROUSEL_CLASSES.CONTENT }, h("div", { class: `
            ${CAROUSEL_CLASSES.WRAPPER}
            ${this._animationClasses}
            ${this.single ? UTILITY_CLASSES.DISPLAY.FLEX : ''}
          `, style: { transform: this.getWrapperTransform() }, ref: (el) => (this.wrapper = el) }, items)), prevButton, nextButton, dotControllers, pagination));
    }
    get el() { return getElement(this); }
};
Carousel.style = ChiCarouselStyle0;

export { Carousel as chi_carousel };

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bd6e5613.js');
const classes = require('./classes-b81f8b66.js');
const constants = require('./constants-8a881329.js');
const ThreeStepsAnimation = require('./ThreeStepsAnimation-c06a6723.js');

const carouselCss = "chi-carousel.sc-chi-carousel-h{display:block;width:100%}";
const ChiCarouselStyle0 = carouselCss;

const CAROUSEL_BOUNCE_DISTANCE = 25;
const CAROUSEL_BOUNCE_TIME = 200;
const MAX_ITEMS_THRESHOLD = 0.95;
const Carousel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiViewChange = index.createEvent(this, "chiViewChange", 7);
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
                if (delta > constants.CAROUSEL_SWIPE_DELTA) {
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
            this._calculateView(constants.CAROUSEL_DIRECTION.NEXT, this.currentStep);
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
        if (this.isLastStep && direction === constants.CAROUSEL_DIRECTION.NEXT)
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
        this._calculateView(constants.CAROUSEL_DIRECTION.PREVIOUS);
        if (this.animation && !this.animation.isStopped()) {
            this.animation.stop();
        }
        if (this.view >= -1) {
            this.animation = ThreeStepsAnimation.ThreeStepsAnimation.animationFactory(() => {
                this._animationClasses = `${classes.TRANSITIONING_CLASS}`;
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
            }, constants.ANIMATION_DURATION.SHORT);
        }
        if (this.currentStep === 0 || this.isLastStep) {
            this._bounceView(constants.CAROUSEL_DIRECTION.PREVIOUS);
        }
    }
    nextView() {
        this._calculateView(constants.CAROUSEL_DIRECTION.NEXT);
        if (this.animation && !this.animation.isStopped()) {
            this.animation.stop();
        }
        this.animation = ThreeStepsAnimation.ThreeStepsAnimation.animationFactory(() => {
            this._animationClasses = `${classes.TRANSITIONING_CLASS}`;
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
        }, constants.ANIMATION_DURATION.SHORT);
        if (this.currentStep === 0 || this.isLastStep) {
            this._bounceView(constants.CAROUSEL_DIRECTION.NEXT);
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
        const direction = nextStep > this.currentStep ? constants.CAROUSEL_DIRECTION.NEXT : constants.CAROUSEL_DIRECTION.PREVIOUS;
        this._calculateView(direction, nextStep);
        this.view = view;
        this.chiViewChange.emit(view);
    }
    _getCarouselItems() {
        const carouselItemClasses = [classes.CAROUSEL_CLASSES.ITEM, classes.STAT_CLASSES.ITEM];
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
        return this.el.querySelector(`.${classes.STAT_CLASSES.STAT}`);
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
        const prevButton = this._areThereMultipleItems() && !this.noButtonControllers && (index.h("div", { class: `${classes.CAROUSEL_CLASSES.CONTROL} ${classes.CAROUSEL_CLASSES.PREVIOUS}`, onClick: () => this.prevView() }, this.customPrevButton ? (index.h("slot", { name: "previous" })) : (index.h("chi-button", { size: "sm", type: "float", "alternative-text": "Carousel previous", disabled: this.currentStep <= 0 }, index.h("chi-icon", { icon: "chevron-left" })))));
        const nextButton = this._areThereMultipleItems() && !this.noButtonControllers && (index.h("div", { class: `${classes.CAROUSEL_CLASSES.CONTROL} ${classes.CAROUSEL_CLASSES.NEXT}`, onClick: () => this.nextView() }, this.customNextButton ? (index.h("slot", { name: "next" })) : (index.h("chi-button", { size: "sm", type: "float", "alternative-text": "Carousel next", disabled: this.isLastView }, index.h("chi-icon", { icon: "chevron-right" })))));
        const items = index.h("slot", { name: "items" });
        const dotControllers = this.dots ? (index.h("div", { class: classes.CAROUSEL_CLASSES.DOTS }, Array(this.numberOfViews)
            .fill(0)
            .map((_, i) => {
            return (index.h("span", { onClick: () => {
                    this._goToView(i);
                }, class: `
              ${classes.CAROUSEL_CLASSES.DOT}
              ${this.view === i ||
                    (this.view === -1 && i === 0) ||
                    (this.view === this.numberOfViews && i === this.numberOfViews - 1)
                    ? classes.ACTIVE_CLASS
                    : ''}` }));
        }))) : null;
        const pagination = this.pagination ? (index.h("div", { class: classes.CAROUSEL_CLASSES.PAGINATION }, this.view === 0 || this.view === -1
            ? 1
            : this.view + 1 > this.numberOfViews
                ? this.numberOfViews
                : this.view + 1, ' ', "of ", this.numberOfViews)) : null;
        return (index.h("div", { onTouchStart: this.touchStart, onTouchEnd: this.touchEnd, onTouchMove: this.touchMove, onMouseEnter: () => this._autoPlay(true), onMouseLeave: () => this._autoPlay(false), class: `
        ${classes.CAROUSEL_CLASSES.CAROUSEL}
        ${this.dots ? classes.CAROUSEL_CLASSES.DOTS_ADDITION : ''}
        ${this.pagination ? classes.CAROUSEL_CLASSES.PAGINATION_ADDITION : ''}` }, index.h("div", { class: classes.CAROUSEL_CLASSES.CONTENT }, index.h("div", { class: `
            ${classes.CAROUSEL_CLASSES.WRAPPER}
            ${this._animationClasses}
            ${this.single ? classes.UTILITY_CLASSES.DISPLAY.FLEX : ''}
          `, style: { transform: this.getWrapperTransform() }, ref: (el) => (this.wrapper = el) }, items)), prevButton, nextButton, dotControllers, pagination));
    }
    get el() { return index.getElement(this); }
};
Carousel.style = ChiCarouselStyle0;

exports.chi_carousel = Carousel;

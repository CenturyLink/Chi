import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  State,
  h
} from '@stencil/core';
import {
  ACTIVE_CLASS,
  CAROUSEL_CLASSES,
  STAT_CLASSES,
  TRANSITIONING_CLASS,
  UTILITY_CLASSES
} from '../../constants/classes';
import {
  ANIMATION_DURATION,
  CAROUSEL_DIRECTION,
  CAROUSEL_SWIPE_DELTA
} from '../../constants/constants';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';

const CAROUSEL_BOUNCE_DISTANCE = 25;
const CAROUSEL_BOUNCE_TIME = 200;
const MAX_ITEMS_THRESHOLD = 0.95;

@Component({
  tag: 'chi-carousel',
  styleUrl: 'carousel.scss',
  scoped: true
})
export class Carousel {
  @Element() el: HTMLElement;
  /**
   * To render Carousel with dot controllers
   */
  @Prop() dots: boolean;
  /**
   * To set the autoplay for the carousel
   */
  @Prop() autoplay: boolean;
  /**
   * To set the interval for the autoplay
   */
  @Prop() interval: number = 5;
  /**
   * To render Carousel with pagination indicators
   */
  @Prop() pagination: boolean;
  /**
   * To render Carousel without Button Controllers
   */
  @Prop() noButtonControllers = false;
  /**
   * To render Carousel with a single item per view
   */
  @Prop() single: boolean;
  /**
   *  View
   */
  @State() view = 0;
  /**
   *  Number of views
   */
  @State() numberOfViews = 0;
  /**
   *  Max number of items shown in a view
   */
  @State() maxItemsShown: number;
  @State() customPrevButton: boolean;
  @State() customNextButton: boolean;
  @State() autoplayInterval: number;
  @State() transformX: number = 0;
  /**
   * Triggered when the user navigates to another view
   */
  @Event() chiViewChange: EventEmitter<number>;

  private wrapper?: HTMLElement;
  private scrollBreakpoints = {
    0: CAROUSEL_BOUNCE_DISTANCE
  };
  private fullScrollLength: number;
  private animation: ThreeStepsAnimation;
  private _animationClasses: string;
  private moveEndPosition: number;
  private moveStartPosition: number;
  private isDragging = false;
  private currentStep: number = 0;
  private remainingSpace: number = 0;
  private isLastView: boolean = false;
  private isLastStep: boolean = false;

  private resizeHandler = () => {
    this._calculateCarouselWidth();
  };

  _calculateCarouselWidth() {
    const carouselItems = this._getCarouselItems();

    this.fullScrollLength = this.el.offsetWidth || this.fullScrollLength;
    if (this.single) {
      this._applySizeToItems();
      this.transformX = -(this.currentStep * carouselItems[0].clientWidth);
    }

    const itemsShown = this.fullScrollLength / carouselItems[0].clientWidth;

    this.maxItemsShown =
      itemsShown % 1 > MAX_ITEMS_THRESHOLD
        ? Math.ceil(itemsShown)
        : Math.floor(itemsShown);
    this.numberOfViews = Math.ceil(carouselItems.length / this.maxItemsShown);

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

  _autoPlay(isPaused: boolean) {
    if (this.autoplay && !this.autoplayInterval && !isPaused) {
      this.autoplayInterval = window.setInterval(() => {
        if (this.view === this.numberOfViews - 1) {
          this._goToView(-1);
        }

        this._goToView(++this.view);
      }, this.interval * 1000);
    } else {
      window.clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  _calculateView(direction: CAROUSEL_DIRECTION, customNextStep?: number) {
    const carouselItems = this._getCarouselItems();
    const itemWidth = carouselItems[0].clientWidth;
    let nextStep =
      customNextStep !== undefined
        ? customNextStep
        : this.maxItemsShown * -direction + this.currentStep;
    const remainingItems = carouselItems.length - nextStep;
    const isCurrentLastView = this.isLastView;

    this.isLastView = remainingItems <= this.maxItemsShown;
    this.isLastStep = remainingItems <= 0;

    if (nextStep < 0) nextStep = 0;
    if (this.isLastStep && direction === CAROUSEL_DIRECTION.NEXT) return;

    if (this.isLastView) {
      this._moveLastView(customNextStep, remainingItems, itemWidth);
    } else if (nextStep === 0) {
      this.transformX = 0;
    } else {
      this._moveView(
        customNextStep,
        itemWidth,
        nextStep,
        direction,
        isCurrentLastView
      );
    }

    if (nextStep >= 0) {
      this.currentStep = Math.abs(nextStep);
    }
  }

  _moveView(
    customNextStep: number,
    itemWidth: number,
    nextStep: number,
    direction: CAROUSEL_DIRECTION,
    currentLastView: boolean
  ) {
    if (customNextStep) {
      this.transformX = customNextStep * itemWidth * -1;
    } else {
      this.transformX += currentLastView
        ? this.remainingSpace
        : Math.abs(nextStep - this.currentStep) * itemWidth * direction;
    }
  }

  _moveLastView(
    customNextStep: number,
    remainingItems: number,
    itemWidth: number
  ) {
    this.remainingSpace = Math.abs(
      this.fullScrollLength - (this.maxItemsShown + remainingItems) * itemWidth
    );

    if (customNextStep) {
      this.transformX =
        this.fullScrollLength - (customNextStep + remainingItems) * itemWidth;
    } else {
      this.transformX -= this.remainingSpace;
    }
  }

  _bounceView(direction: CAROUSEL_DIRECTION) {
    if (this.isLastStep) {
      this.transformX += CAROUSEL_BOUNCE_DISTANCE * direction;
    } else {
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
      this.animation = ThreeStepsAnimation.animationFactory(
        () => {
          this._animationClasses = `${TRANSITIONING_CLASS}`;
        },
        () => {
          if (this.view >= 0) {
            this.view = this.view - 1;
          }
        },
        () => {
          if (this.view === -1) {
            this.view = 0;
          } else {
            this._animationClasses = '';
            this.chiViewChange.emit(this.view);
          }
        },
        ANIMATION_DURATION.SHORT
      );
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

    this.animation = ThreeStepsAnimation.animationFactory(
      () => {
        this._animationClasses = `${TRANSITIONING_CLASS}`;
      },
      () => {
        if (this.view < this.numberOfViews) {
          this.view = this.view + 1;
        }
      },
      () => {
        if (this.view === this.numberOfViews) {
          this.view = this.numberOfViews - 1;
        } else {
          this.chiViewChange.emit(this.view);
          this._animationClasses = '';
        }
      },
      ANIMATION_DURATION.SHORT
    );

    if (this.currentStep === 0 || this.isLastStep) {
      this._bounceView(CAROUSEL_DIRECTION.NEXT);
    }
  }

  touchEnd = () => {
    if (this.isDragging) {
      this.isDragging = false;
      this.wrapper.style.transform = this.getWrapperTransform();
    }
  };

  touchMove = (e: TouchEvent) => {
    if (this.isDragging) {
      const currentPosition = this.getPositionX(e);
      const previousPosition = this.scrollBreakpoints[this.view + 1];
      const delta = this.getMoveDelta();
      const newPosition = this.isMoveToNext()
        ? previousPosition - delta
        : previousPosition + delta;

      this.moveEndPosition = currentPosition;
      this.wrapper.style.transform = `translateX(${newPosition}px)`;

      if (delta > CAROUSEL_SWIPE_DELTA) {
        if (this.isMoveToNext()) {
          this.nextView();
        } else {
          this.prevView();
        }
        this.isDragging = false;
      }
    }
  };

  isMoveToNext() {
    return this.moveStartPosition > this.moveEndPosition;
  }

  getMoveDelta() {
    return Math.abs(this.moveEndPosition - this.moveStartPosition);
  }

  getWrapperTransform() {
    return `translateX(${this.transformX}px)`;
  }

  touchStart = (e: TouchEvent) => {
    this.moveStartPosition = this.getPositionX(e);
    this.isDragging = true;
  };

  getPositionX = (event: TouchEvent) => {
    return event.touches[0].clientX;
  };

  _applySizeToItems() {
    const carouselItems = this._getCarouselItems();

    if (carouselItems) {
      carouselItems.forEach((item: HTMLElement) => {
        item.style.width = `${this.fullScrollLength}px`;
      });
    }
  }

  _goToView(view: number) {
    const nextStep = this.maxItemsShown * view;
    const direction =
      nextStep > this.currentStep
        ? CAROUSEL_DIRECTION.NEXT
        : CAROUSEL_DIRECTION.PREVIOUS;

    this._calculateView(direction, nextStep);
    this.view = view;
    this.chiViewChange.emit(view);
  }

  _getCarouselItems(): NodeListOf<Element> {
    const carouselItemClasses = [CAROUSEL_CLASSES.ITEM, STAT_CLASSES.ITEM];

    return this.el.querySelectorAll(
      carouselItemClasses.map(itemClass => `.${itemClass}`).join(', ')
    );
  }

  _areThereMultipleItems() {
    const carouselItems = this._getCarouselItems();

    return carouselItems.length > 1;
  }

  render() {
    const prevButton = this._areThereMultipleItems() &&
      !this.noButtonControllers && (
        <div
          class={`${CAROUSEL_CLASSES.CONTROL} ${CAROUSEL_CLASSES.PREVIOUS}`}
          onClick={() => this.prevView()}
        >
          {this.customPrevButton ? (
            <slot name="previous"></slot>
          ) : (
            <chi-button
              size="sm"
              type="float"
              alternative-text="Carousel previous"
              disabled={this.currentStep <= 0}
            >
              <chi-icon icon="chevron-left"></chi-icon>
            </chi-button>
          )}
        </div>
      );
    const nextButton = this._areThereMultipleItems() &&
      !this.noButtonControllers && (
        <div
          class={`${CAROUSEL_CLASSES.CONTROL} ${CAROUSEL_CLASSES.NEXT}`}
          onClick={() => this.nextView()}
        >
          {this.customNextButton ? (
            <slot name="next"></slot>
          ) : (
            <chi-button
              size="sm"
              type="float"
              alternative-text="Carousel next"
              disabled={this.isLastView}
            >
              <chi-icon icon="chevron-right"></chi-icon>
            </chi-button>
          )}
        </div>
      );
    const items = <slot name="items"></slot>;
    const dotControllers = this.dots ? (
      <div class={CAROUSEL_CLASSES.DOTS}>
        {Array(this.numberOfViews)
          .fill(0)
          .map((_, i) => {
            return (
              <span
                onClick={() => {
                  this._goToView(i);
                }}
                class={`
              ${CAROUSEL_CLASSES.DOT}
              ${
                this.view === i ||
                (this.view === -1 && i === 0) ||
                (this.view === this.numberOfViews &&
                  i === this.numberOfViews - 1)
                  ? ACTIVE_CLASS
                  : ''
              }`}
              ></span>
            );
          })}
      </div>
    ) : null;
    const pagination = this.pagination ? (
      <div class={CAROUSEL_CLASSES.PAGINATION}>
        {this.view === 0 || this.view === -1
          ? 1
          : this.view + 1 > this.numberOfViews
          ? this.numberOfViews
          : this.view + 1}{' '}
        of {this.numberOfViews}
      </div>
    ) : null;

    return (
      <div
        onTouchStart={this.touchStart}
        onTouchEnd={this.touchEnd}
        onTouchMove={this.touchMove}
        onMouseEnter={() => this._autoPlay(true)}
        onMouseLeave={() => this._autoPlay(false)}
        class={`
        ${CAROUSEL_CLASSES.CAROUSEL}
        ${this.dots ? CAROUSEL_CLASSES.DOTS_ADDITION : ''}
        ${this.pagination ? CAROUSEL_CLASSES.PAGINATION_ADDITION : ''}`}
      >
        <div class={CAROUSEL_CLASSES.CONTENT}>
          <div
            class={`
            ${CAROUSEL_CLASSES.WRAPPER}
            ${this._animationClasses}
            ${this.single ? UTILITY_CLASSES.DISPLAY.FLEX : ''}
          `}
            style={{ transform: this.getWrapperTransform() }}
            ref={el => (this.wrapper = el)}
          >
            {items}
          </div>
        </div>
        {prevButton}
        {nextButton}
        {dotControllers}
        {pagination}
      </div>
    );
  }
}

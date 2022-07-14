import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { ACTIVE_CLASS, CAROUSEL_CLASSES, TRANSITIONING_CLASS, UTILITY_CLASSES } from '../../constants/classes';
import { ANIMATION_DURATION, CAROUSEL_SWIPE_DELTA } from '../../constants/constants';
import { ThreeStepsAnimation } from '../../utils/ThreeStepsAnimation';

const CAROUSEL_BOUNCE_DISTANCE = 25;

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
   * To render Carousel with pagination indicators
   */
  @Prop() pagination: boolean;
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
  @State() customPrevButton: boolean;
  @State() customNextButton: boolean;
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

  private resizeHandler = () => {
    this.fullScrollLength = this.calculateWidth(this.el);

    const wrapperWidth = this.calculateWidth(this.wrapper);

    this.numberOfViews = Math.ceil(wrapperWidth / this.fullScrollLength);

    const remainder = wrapperWidth - (this.fullScrollLength * this.numberOfViews);

    if (this.single) {
      this._applySizeToItems();
    }
    this.calculateScrollBreakpoints(this.fullScrollLength, wrapperWidth, remainder);
  };

  calculateWidth(element: HTMLElement) {
    return element.offsetWidth;
  }

  calculateScrollBreakpoints(fullScrollLength: number, wrapperWidth: number, remainder: number) {
    for (let view = 0; view < this.numberOfViews; view++) {
      this.scrollBreakpoints[view + 1] =
        (view + 1) * fullScrollLength > wrapperWidth ?
          (view * fullScrollLength * -1) - remainder :
          view * fullScrollLength * -1;

      if (view === this.numberOfViews - 1) {
        this.scrollBreakpoints[this.numberOfViews + 1] = (view * fullScrollLength * -1) - remainder - CAROUSEL_BOUNCE_DISTANCE;
      }
    }
  }

  connectedCallback() {
    this.customPrevButton = !!this.el.querySelector('[slot="previous"]');
    this.customNextButton = !!this.el.querySelector('[slot="next"]');
  }

  componentDidLoad() {
    const fullScrollLength = this.calculateWidth(this.el);

    this.fullScrollLength = fullScrollLength;
    if (this.single) {
      this._applySizeToItems();
    }

    const wrapperWidth = this.calculateWidth(this.wrapper);

    this.numberOfViews = Math.ceil(wrapperWidth / fullScrollLength);

    const remainder = wrapperWidth - (fullScrollLength * this.numberOfViews);

    this.calculateScrollBreakpoints(this.fullScrollLength, wrapperWidth, remainder);
    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillOnload() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  prevView() {
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
  }

  nextView() {
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
  }

  touchEnd = () => {
    if (this.isDragging) {
      this.isDragging = false;
      this.wrapper.style.transform = this.getWrapperTransform();
    }
  }

  touchMove = (e: TouchEvent) => {
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
        } else {
          this.prevView();
        }
        this.isDragging = false;
      }
    }
  }

  isMoveToNext() {
    return this.moveStartPosition > this.moveEndPosition;
  }

  getMoveDelta() {
    return Math.abs(this.moveEndPosition - this.moveStartPosition);
  }

  getWrapperTransform() {
    return `translateX(${this.scrollBreakpoints[this.view + 1]}px)`;
  }

  touchStart = (e: TouchEvent) => {
    this.moveStartPosition = this.getPositionX(e);
    this.isDragging = true;
  }

  getPositionX = (event: TouchEvent) => {
    return event.touches[0].clientX;
  }

  _applySizeToItems() {
    const carouselItems = this.el.querySelectorAll(`.${CAROUSEL_CLASSES.ITEM}`);

    carouselItems?.forEach((item: HTMLElement) => {
      item.style.width = `${this.fullScrollLength}px`;
    });
  }

  _goToView(view: number) {
    this.view = view;
    this.chiViewChange.emit(view);
  }

  render() {
    const prevButton = <div class={`${CAROUSEL_CLASSES.CONTROL} ${CAROUSEL_CLASSES.PREVIOUS}`} onClick={() => this.prevView()}>
      {
        this.customPrevButton ?
          <slot name="previous"></slot> :
          <chi-button size="sm" type="float" alternative-text="Carousel previous" disabled={this.view === 0 || this.view === -1}>
            <chi-icon icon="chevron-left"></chi-icon>
          </chi-button>
      }
    </div>;
    const nextButton = <div class={`${CAROUSEL_CLASSES.CONTROL} ${CAROUSEL_CLASSES.NEXT}`} onClick={() => this.nextView()}>
      {
        this.customNextButton ?
          <slot name="next"></slot> :
          <chi-button size="sm" type="float" alternative-text="Carousel next" disabled={this.view === this.numberOfViews || this.view + 1 === this.numberOfViews}>
            <chi-icon icon="chevron-right"></chi-icon>
          </chi-button>
      }
    </div>;
    const items = <slot name="items"></slot>;
    const dotControllers = this.dots ?
      <div class={CAROUSEL_CLASSES.DOTS}>
        {Array(this.numberOfViews).fill(0).map((_, i) => {
          return <span
            onClick={() => {
              this._goToView(i);
            }}
            class={`
              ${CAROUSEL_CLASSES.DOT}
              ${this.view === i ||
                (this.view === -1 && i === 0) ||
                (this.view === this.numberOfViews && i === this.numberOfViews - 1) ? ACTIVE_CLASS : ''}`}
          ></span>;
        })}
      </div> : null;
    const pagination = this.pagination ?
      <div class={CAROUSEL_CLASSES.PAGINATION}>
        {
          this.view === 0 || this.view === -1 ? 1 :
            this.view + 1 > this.numberOfViews ? this.numberOfViews :
              this.view + 1
        } of {this.numberOfViews}
      </div> : null;

    return <div
      onTouchStart={this.touchStart}
      onTouchEnd={this.touchEnd}
      onTouchMove={this.touchMove}
      class={`
        ${CAROUSEL_CLASSES.CAROUSEL}
        ${this.dots ? CAROUSEL_CLASSES.DOTS_ADDITION : ''}
        ${this.pagination ? CAROUSEL_CLASSES.PAGINATION_ADDITION : ''}`}>
      <div class={CAROUSEL_CLASSES.CONTENT}>
        <div
          class={`
            ${CAROUSEL_CLASSES.WRAPPER}
            ${this._animationClasses}
            ${this.single ? UTILITY_CLASSES.DISPLAY.FLEX : ''}
          `}
          style={{ transform: this.getWrapperTransform() }}
          ref={el => this.wrapper = el}>
          {items}
        </div>
      </div>
      {prevButton}
      {nextButton}
      {dotControllers}
      {pagination}
    </div>;
  }
}

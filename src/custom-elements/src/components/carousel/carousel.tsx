import { Component, Element, Prop, State, h } from '@stencil/core';
import { ACTIVE_CLASS, CAROUSEL_CLASSES } from '../../constants/classes';

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
   *  Page
   */
  @State() page = 0;
  /**
   *  Number of pages
   */
  @State() numberOfPages = 0;

  private scrollLength?: number;
  private wrapper?: HTMLElement;
  private wrapperWidth?: number;
  private scrollBreakpoints = {};

  calculateWidth(element: HTMLElement) {
    return element.offsetWidth;
  }

  connectedCallback() {
    this.scrollLength = this.calculateWidth(this.el);
  }

  componentDidLoad() {
    const wrapperWidth = this.calculateWidth(this.wrapper);
    const fullScrollLength = this.calculateWidth(this.el);

    this.wrapperWidth = wrapperWidth;
    this.numberOfPages = Math.ceil(wrapperWidth / fullScrollLength);

    const remainder = wrapperWidth - (fullScrollLength * this.numberOfPages)

    for (let page = 0; page < this.numberOfPages; page++) {
      this.scrollBreakpoints[page] =
        (page + 1) * fullScrollLength > wrapperWidth ?
          (page * fullScrollLength * -1) - remainder :
          page * fullScrollLength * -1;
    }
  }

  componentWillLoad() {}

  componentWillUpdate() {}

  prevPage() {
    // const fullScrollLength = this.calculateWidth(this.el);

    // this.scrollLength = fullScrollLength;
    this.page -= 1;
  }

  nextPage() {
    // const fullScrollLength = this.calculateWidth(this.el);
    // const currentScroll = this.page * this.scrollLength;

    // this.wrapperWidth = this.calculateWidth(this.wrapper);

    // const remainingScroll = this.wrapperWidth - (currentScroll) - fullScrollLength;

    // this.scrollLength = remainingScroll > fullScrollLength ? fullScrollLength : remainingScroll;
    this.page += 1;
  }

  goToPage(page: number) {
    // const fullScrollLength = this.calculateWidth(this.el);
    // const currentScroll = this.page * this.scrollLength;
    // const remainingScroll = currentScroll === 0 ? fullScrollLength : this.wrapperWidth % (currentScroll + fullScrollLength); // Wrong condition

    // this.wrapperWidth = this.calculateWidth(this.wrapper);
    // this.scrollLength = remainingScroll > fullScrollLength ? fullScrollLength : remainingScroll;
    this.page = page;
  }

  render() {
    const prevButton = <div class={`${CAROUSEL_CLASSES.CONTROL} -previous -z--10`}>
        <chi-button type="float" alternative-text="Carousel next" onChiClick={() => this.prevPage()} disabled={this.page === 0}>
          <chi-icon icon="chevron-left"></chi-icon>
        </chi-button>
      </div>;
    const nextButton = <div class={`${CAROUSEL_CLASSES.CONTROL} -next -z--10`}>
        <chi-button class="chi-carousel__control -next -z--10" type="float" alternative-text="Carousel next" onClick={() => this.nextPage()} disabled={(this.page) === this.numberOfPages - 1}>
          <chi-icon icon="chevron-right"></chi-icon>
        </chi-button>
      </div>;
    const items = <slot name="items"></slot>;
    const dotControllers = this.dots ?
      <div class="chi-carousel__dots">
        {Array(this.numberOfPages).fill(0).map((_, i) => {
          return <span
            onClick={() => {
              this.goToPage(i);
            }}
            class={`chi-carousel__dot ${(this.page) === i ? ACTIVE_CLASS : ''}`}
            ></span>;
        })}
      </div> : null;

    return <div class={`${CAROUSEL_CLASSES.CAROUSEL} -z--0`}>
      <div
        class={CAROUSEL_CLASSES.WRAPPER}
        style={{transform: `translateX(${this.scrollBreakpoints[this.page]}px)`}}
        ref={el => this.wrapper = el}>
        {items}
      </div>
      {prevButton}
      {nextButton}
      {dotControllers}
    </div>;
  }
}

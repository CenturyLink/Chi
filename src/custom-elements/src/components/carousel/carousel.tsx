import { Component, Element, Prop, State, h } from '@stencil/core';
import { CAROUSEL_CLASSES } from '../../constants/classes';

@Component({
  tag: 'chi-carousel',
  styleUrl: 'carousel.scss',
  scoped: true
})

export class Carousel {
  @Element() el: HTMLElement;
  /**
   * To define number of pages to render
   */
  @Prop() pages: number;
  /**
   * To render Carousel with dot controllers
   */
  @Prop() dots: boolean;
  /**
   *  Page
   */
  @State() page = 0;

  private scrollLength?: number;
  private wrapper?: HTMLElement;
  private numberOfPages?: number;
  private elementWidth?: number;
  private wrapperWidth?: number;

  calculateWidth(element: HTMLElement) {
    return element.offsetWidth;
  }

  componentWillLoad() {
    this.elementWidth = this.calculateWidth(this.el);
    this.wrapperWidth = this.calculateWidth(this.wrapper);
    this.numberOfPages = Math.floor(this.elementWidth / this.wrapperWidth);
    console.log(this.numberOfPages);
  }

  componentWillUpdate() {}

  prevPage() {
    this.scrollLength = this.calculateWidth(this.el);
    this.page += 1;
  }

  nextPage() {
    this.scrollLength = this.calculateWidth(this.el);
    this.page -= 1;
  }

  render() {
    const prevButton = <div class={`${CAROUSEL_CLASSES.CONTROL} -previous -z--10`}>
        <chi-button type="float" alternative-text="Carousel next" onChiClick={() => this.prevPage()} disabled={this.page === 0}>
          <chi-icon icon="chevron-left"></chi-icon>
        </chi-button>
      </div>;
    const nextButton = <div class={`${CAROUSEL_CLASSES.CONTROL} -next -z--10`}>
        <chi-button type="float" alternative-text="Carousel next" onClick={() => this.nextPage()}>
          <chi-icon icon="chevron-right"></chi-icon>
        </chi-button>
      </div>;
    const items = <slot name="items"></slot>;
    const dotControllers = this.dots ?
      <div class="chi-carousel__dots">
        {Array(this.numberOfPages).fill(0).map(() => <div>o</div>)}
      </div> : null;

    console.log(this.wrapperWidth);
    return <div class={`${CAROUSEL_CLASSES.CAROUSEL} -z--0`}>
      <div
        class={CAROUSEL_CLASSES.WRAPPER}
        style={{transform: `translateX(${this.page*this.scrollLength}px)`}}
        ref={el => this.wrapper = el}>
        {items}
      </div>
      {prevButton}
      {nextButton}
      {dotControllers}
    </div>;
  }
}

import { Component, Element, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'chi-link',
  styleUrl: 'link.scss',
  scoped: true
})
export class Link {
  @State() slotLinkContent = true;

  @Element() el: HTMLElement;

  /**
   *  to set a link's destination url.
   */
  @Prop({ reflect: true }) href: string = '#';

  /**
   *  to set the language of a link's destination url.
   */
  @Prop({ reflect: true }) hreflang: string;

  /**
   *  to provide alternative text in case of icon links.
   */
  @Prop({ reflect: true }) alternativeText: string;

  /**
   *  to render a link as a prominent call to action.
   */
  @Prop({ reflect: true }) cta = false;

  /**
   *  to disable a link.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   *  to prompt users to save a page or document instead of navigating to it.
   */
  @Prop({ reflect: true }) download: string;

  /**
   *  to remove a link's underline on hover.
   */
  @Prop({ reflect: true }) noHoverUnderline = false;

  /**
   *  to set the relationship between the current page and the linked page.
   */
  @Prop({ reflect: true }) rel: string;

  /**
   *  to set size of a link { xs, sm, md, lg, xl }.
   */
  @Prop({ reflect: true }) size: string;

  /**
   *  to set target of a link.
   */
  @Prop({ reflect: true }) target: string;

  @Watch('size')
  sizeValidation(newValue: string) {
    if (!!newValue && !['xs', 'sm', 'md', 'lg', 'xl'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for link. If provided, valid values are xs, sm, md, lg, or xl. `);
    }
  }

  componentWillLoad() {
    this.sizeValidation(this.size);
    if (!this.el.querySelector('chi-icon')) {
      this.slotLinkContent = false;
    }
  }

  render() {
    return (
      <a class={`chi-link
          ${this.cta ? '-cta' : ''}
          ${this.disabled ? '-disabled' : ''}
          ${this.size ? `-${this.size}` : ''}
          ${this.noHoverUnderline ? `-no-hover-underline` : ''}`}
          href={this.href}
          hreflang={this.hreflang}
          target={this.target}
          rel={this.rel}
          download={this.download}
          {...(this.alternativeText && {'aria-label': this.alternativeText})}
      >
        {this.slotLinkContent ?
          <div class="chi-link__content">
            <slot></slot>
          </div> :
          <slot></slot>
        }
      </a>
    );
  }
}

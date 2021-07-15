import { Component, Element, Prop, Watch, h, State } from '@stencil/core';
import { AppLayoutFormats, APP_LAYOUT_FORMATS } from '../../constants/constants';

@Component({
  tag: 'chi-main',
  styleUrl: 'app-layout.scss',
  scoped: true
})
export class AppLayout {
  @Element() el;

  /**
   *  to set app layout format
   */
  @Prop({ reflect: true }) format: AppLayoutFormats = 'base';

  /**
   *  To define app layout back link
   */
  @Prop({ reflect: true }) backlink: string;

  /**
   *  to set a links destination url
   */
  @Prop({ reflect: true }) backlinkHref: string = '#';

  /**
   *  To define app layout subtitle
   */
   @Prop({ reflect: true }) subtitle: string;

  /**
   *  To define app layout title
   */
  @State() appLayoutTitle: string;

  @State() appLayoutHeaderActions: boolean;

  @State() appLayoutPageLevelActions: boolean;

  @State() appLayoutFooter: boolean;

  private mutationObserver;

  @Watch('format')
  typeValidation(newValue: string) {
    if (newValue && !APP_LAYOUT_FORMATS.includes(newValue)) {
      throw new Error(`${newValue} is not a valid type for app layout. Valid values are base or no-margin.`);
    }
  }

  connectedCallback() {
    const observerTarget = this.el;
    const mutationObserverConfig = {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['title']
    };

    if (!this.mutationObserver) {
      const subscriberCallback = (mutations) => {
        mutations.forEach((mutation) => {
          this.appLayoutTitle = mutation.target.title;
        });
      };

      this.mutationObserver = new MutationObserver(subscriberCallback);
    }

    this.mutationObserver.observe(observerTarget, mutationObserverConfig);
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }

  componentWillLoad() {
    this.typeValidation(this.format);

    if (this.el.getAttribute('title')) {
      this.appLayoutTitle = this.el.getAttribute('title');
    }

    if (this.el.querySelector("[slot=header-actions]")) {
      this.appLayoutHeaderActions = true;
    }

    if (this.el.querySelector("[slot=page-level__actions]")) {
      this.appLayoutPageLevelActions = true;
    }

    if (this.el.querySelector("[slot=footer]")) {
      this.appLayoutFooter = true;
    }
  }

  render() {
    const applayoutBackLink = this.backlink && <a class="chi-link" href={this.backlinkHref}><div class="chi-link__content"><i class="chi-icon icon-chevron-left -xs"></i><span class="-text--md">{this.backlink}</span></div></a>;
    const appLayoutTitle = this.appLayoutTitle && <div class="-text--h3 -text--boldest -text--navy -m--0 -pr--2">{this.appLayoutTitle}</div>;
    const applayoutSubTitle = this.subtitle && <div class="-text--md -pl--2 -bl--1">{this.subtitle}</div>;
    const appLayoutHeaderActions = this.appLayoutHeaderActions && <div class="chi-main__header-end"><slot name="header-actions"></slot></div>;
    const appLayoutPageLevelActions = this.appLayoutPageLevelActions && <div class="-d--flex -align-items--center -justify-content--end -py--3 -my--2 -bt--1"><slot name="page-level__actions"></slot></div>;
    const appLayoutFooter = this.appLayoutFooter && <slot name="footer"></slot>;

    return (
      <div class={`chi-main
        ${this.format ? `-${this.format}` : ''}`}
      >
        <div class="chi-main__header">
          <div class="chi-main__header-start">
            {applayoutBackLink}
            <div class="chi-main__title">
              {appLayoutTitle}
              {applayoutSubTitle}
            </div>
          </div>
          {appLayoutHeaderActions}
        </div>
        <div class="chi-main__content">
          <slot></slot>
          {appLayoutPageLevelActions}
        </div>
        {appLayoutFooter}
      </div>
    );
  }
}

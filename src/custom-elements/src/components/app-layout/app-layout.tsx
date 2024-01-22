import { Component, Element, Prop, Watch, h, State, Event, EventEmitter } from '@stencil/core';
import { AppLayoutFormats, APP_LAYOUT_FORMATS } from '../../constants/constants';

@Component({
  tag: 'chi-main',
  styleUrl: 'app-layout.scss',
  scoped: true,
})
export class AppLayout {
  @Element() el;

  /**
   *  to set app layout format { base, no-margin, fixed-width }.
   */
  @Prop({ reflect: true }) format: AppLayoutFormats = 'base';

  /**
   *  To define app layout back link
   */
  @Prop({ reflect: true }) backlink: string;

  /**
   *  to set a links destination url
   */
  @Prop({ reflect: true }) backlinkHref: string;

  /**
   *  To define app layout subtitle
   */
  @Prop({ reflect: true }) subtitle: string;

  /**
   *  To define app layout header background
   */
  @Prop({ reflect: true }) headerBackground: boolean;

  /**
   *  To define app layout title
   */
  @State() appLayoutTitle: string;

  @State() appLayoutHeaderActions: boolean;

  @State() appLayoutHelpIcon: boolean;

  @State() appLayoutPageLevelActions: boolean;

  @State() appLayoutFooter: boolean;

  @State() appLayoutPageLevelAlert: boolean;

  /**
   * The user has clicked the backlink
   */
  @Event({ eventName: 'chiBacklinkClick' }) eventBacklinkClick: EventEmitter;

  private mutationObserver;

  @Watch('format')
  typeValidation(newValue: string) {
    if (newValue && !APP_LAYOUT_FORMATS.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid type for app layout. Valid values are base, no-margin, or fixed-width.`
      );
    }
  }

  connectedCallback() {
    const observerTarget = this.el;
    const mutationObserverConfig = {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['title'],
    };

    if (!this.mutationObserver) {
      const subscriberCallback = (mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.target.title) {
            this.appLayoutTitle = mutation.target.title;
            this.el.removeAttribute('title');
          }
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
      this.el.removeAttribute('title');
    }

    if (this.el.querySelector('[slot=help-icon]')) {
      this.appLayoutHelpIcon = true;
    }

    if (this.el.querySelector('[slot=header-actions]')) {
      this.appLayoutHeaderActions = true;
    }

    if (this.el.querySelector('[slot=page-level__actions]')) {
      this.appLayoutPageLevelActions = true;
    }

    if (this.el.querySelector('[slot=footer]')) {
      this.appLayoutFooter = true;
    }

    if (this.el.querySelector('[slot=page-alert]')) {
      this.appLayoutPageLevelAlert = true;
    }
  }

  _handlerBacklinkClick() {
    this.eventBacklinkClick.emit();
  }

  render() {
    const appLayoutBackLink = this.backlink && (
      <a class="chi-link" onClick={() => this._handlerBacklinkClick()} href={this.backlinkHref}>
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs"></i>
          <span class="-text--md">{this.backlink}</span>
        </div>
      </a>
    );
    const appLayoutHelpIcon = this.appLayoutHelpIcon && <slot name="help-icon"></slot>;
    const appLayoutTitle = this.appLayoutTitle && (
      <div class="chi-main__title-heading">
        {this.appLayoutTitle}
        {appLayoutHelpIcon}
      </div>
    );
    const appLayoutSubTitle = this.subtitle && <div class="chi-main__title-subheading">{this.subtitle}</div>;
    const appLayoutHeaderActions = this.appLayoutHeaderActions && (
      <div class="chi-main__header-end">
        <slot name="header-actions"></slot>
      </div>
    );
    const appLayoutPageLevelActions = this.appLayoutPageLevelActions && (
      <div class="-d--flex -align-items--center -justify-content--end -py--3 -my--2 -bt--1">
        <slot name="page-level__actions"></slot>
      </div>
    );
    const appLayoutBackground = this.headerBackground && (
      <div class="chi-main__background">
        <div class="chi-main__background-image"></div>
      </div>
    );
    const appLayoutFooter = this.appLayoutFooter && <slot name="footer"></slot>;
    const appLayoutPageLevelAlert = this.appLayoutPageLevelAlert && (
      <div class="chi-main__alert">
        <slot name="page-alert"></slot>
      </div>
    );

    return (
      <div
        class={`chi-main
        ${this.format ? `-${this.format}` : ''}
        ${this.headerBackground ? '-header-background' : ''}`}
      >
        {appLayoutBackground}
        {appLayoutPageLevelAlert}
        <div class="chi-main__header">
          <div class="chi-main__header-start">
            {appLayoutBackLink}
            <div class="chi-main__title">
              {appLayoutTitle}
              {appLayoutSubTitle}
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

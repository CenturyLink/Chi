import { Component, Element, Event, EventEmitter, Prop, Watch, h, State } from '@stencil/core';

const ALERT_COLORS = ['success', 'danger', 'warning', 'info', 'muted'];

@Component({
  tag: 'chi-alert',
  styleUrl: 'alert.scss',
  scoped: true
})
export class Alert {
  @Element() el;

  /**
   *  to set alert type { bubble, banner, toast }.
   */
  @Prop({ reflect: true }) type = 'bubble';

  /**
   *  to hide the alert when dismissed.
   */
  @Prop({ reflect: true }) mutable = false;

  /**
   *  to set alert state { success, danger, warning, info, muted }.
   */
  @Prop({ reflect: true }) color: string;

  /**
   *  to avoid necessity of adding <chi-icon> to alert markup.
   */
  @Prop({ reflect: true }) icon: string;

  /**
   *  to set alert size { sm, md, lg }.
   */
  @Prop({ reflect: true }) size = 'md';

  /**
   *  to center the alert content.
   */
  @Prop({ reflect: true }) center = false;

  /**
   *  to make the alert dismissible.
   */
  @Prop({ reflect: true }) closable = false;

  /**
   *  custom event when trying to dismiss an alert.
   */
  @Event() dismissAlert: EventEmitter<void>;

  /**
   *  To define alert title
   */
  @State() alertTitle: string;

  @State() alertActions: boolean;

  private mutationObserver;

  @Watch('type')
  typeValidation(newValue: string) {
    if (newValue && !['bubble', 'banner', 'toast'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid type for alert. Valid values are bubble, banner or toast.`);
    }
  }

  @Watch('color')
  colorValidation(newValue: string) {
    if (newValue && !ALERT_COLORS.includes(newValue)) {
      throw new Error(`${newValue} is not a valid color for alert. Valid values are${ALERT_COLORS.map(s => ` ${s}`)}.`);
    }
  }

  @Watch('size')
  sizeValidation(newValue: string) {
    if (newValue && !['sm', 'md', 'lg'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for an alert. Alerts only support sm, md (default), and lg sizes.`);
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
          this.alertTitle = mutation.target.title;
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
    this.typeValidation(this.type);
    this.colorValidation(this.color);
    this.sizeValidation(this.size);

    if (this.el.getAttribute('title')) {
      this.alertTitle = this.el.getAttribute('title');
    }

    if (Array.from(this.el.querySelectorAll("[slot=chi-alert__actions]")).length > 0) {
      this.alertActions = true;
    }
  }

  _dismissAlert() {
    if (this.mutable) {
      this.el.parentNode.removeChild(this.el);
    }
    this.dismissAlert.emit();
  }

  render() {
    const chiIcon = <chi-icon icon={this.icon} color={this.color} extraClass="chi-alert__icon"></chi-icon>;
    const alertTitle = this.alertTitle && <p class="chi-alert__title">{this.alertTitle}</p>;
    const chiActions = this.alertActions && <div class="chi-alert__actions"><slot name="chi-alert__actions"></slot></div>;

    return (
      <div class={`chi-alert
        ${this.type ? `-${this.type}` : ''}
        ${this.color ? `-${this.color}` : ''}
        ${this.center ? '-center' : ''}
        ${this.closable ? '-close' : ''}
        ${this.size ? `-${this.size}` : ''}`}
        role="alert"
      >
        {this.icon && chiIcon}
        <div class="chi-alert__content">
          {alertTitle}
          <p class="chi-alert__text"><slot></slot></p>
          {chiActions}
        </div>
        {(this.closable || this.type === 'toast') && <chi-button extraClass="chi-alert__close-button" type="close" onChiClick={() => this._dismissAlert()} />}
      </div>
    );
  }
}

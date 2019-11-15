import { Component, Element, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';

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
   *  to get rid of the border-bottom of Banner alerts.
   */
  @Prop({ reflect: true }) borderless = false;

  /**
   *  to make Banner alert corners rounded.
   */
  @Prop({ reflect: true }) rounded = false;

  /**
   *  to center the alert content.
   */
  @Prop({ reflect: true }) center = false;

  /**
   *  to make the alert dismissible.
   */
  @Prop({ reflect: true }) dismissible = false;

  /**
   *  to define alert text.
   */
  @Prop({ reflect: true }) text: string;

  /**
   *  custom event when trying to dismiss an alert.
   */
  @Event() dismissAlert: EventEmitter<void>;

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

  componentWillLoad() {
    const target = this.el;
    const config = {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['title']
    };

    function subscriberCallback(mutations) {
      mutations.forEach((mutation) => {
        target.querySelector('.m-alert__title').innerText = mutation.target.title;
      });
    }

    const observer = new MutationObserver(subscriberCallback);
    observer.observe(target, config);

    this.typeValidation(this.type);
    this.colorValidation(this.color);
    this.sizeValidation(this.size);
  }

  _dismissAlert() {
    if (this.mutable) {
      this.el.parentNode.removeChild(this.el);
    }
    this.dismissAlert.emit();
  }

  render() {
    const chiIcon = <chi-icon icon={this.icon} color={this.color} extraClass="m-alert__icon"></chi-icon>;
    const alertTitle = this.el.getAttribute('title') && <p class="m-alert__title">{this.el.getAttribute('title')}</p>;

    return (
      <div class={`m-alert
        ${this.type ? `-${this.type}` : ''}
        ${this.color ? `-${this.color}` : ''}
        ${this.center ? '-center' : ''}
        ${this.dismissible ? '-dismiss' : ''}
        ${this.size ? `-${this.size}` : ''}
        ${this.type === 'banner' && this.borderless ? `-borderless` : ''}
        ${this.type === 'banner' && this.rounded ? `-rounded` : ''}`}
        role="alert"
      >
        {this.icon && chiIcon}
        <div class="m-alert__content">
          {this.el.getAttribute('title') && alertTitle}
          {this.text && <p class="m-alert__text">{this.text}</p>}
          <slot></slot>
        </div>
        {(this.dismissible || this.type === 'toast') && <chi-button extraClass="m-alert__dismiss-button" type="close" onChiClick={() => this._dismissAlert()} />}
      </div>
    );
  }
}

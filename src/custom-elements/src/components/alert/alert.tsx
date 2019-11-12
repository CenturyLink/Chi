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
  @Prop({ reflectToAttr: true }) type = 'bubble';

  /**
   *  to hide the alert when dismissed.
   */
  @Prop({ reflectToAttr: true }) mutable = false;

  /**
   *  to set alert state { success, danger, warning, info, muted }.
   */
  @Prop({ reflectToAttr: true }) color: string;

  /**
   *  to avoid necessity of adding <chi-icon> to alert markup.
   */
  @Prop({ reflectToAttr: true }) icon: string;

  /**
   *  to set alert size { sm, md, lg }.
   */
  @Prop({ reflectToAttr: true }) size = '';

  /**
   *  to get rid of the border-bottom of BANNER alerts.
   */
  @Prop({ reflectToAttr: true }) borderless = false;

  /**
   *  to make BANNER alert corners rounded.
   */
  @Prop({ reflectToAttr: true }) rounded = false;

  /**
   *  to center the alert content.
   */
  @Prop({ reflectToAttr: true }) center = false;

  /**
   *  to make the alert dismissible.
   */
  @Prop({ reflectToAttr: true }) dismissible = false;

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
        <slot></slot>
        {(this.dismissible || this.type === 'toast') && <chi-button extraClass="m-alert__dismiss-button" type="close" onChiClick={() => this._dismissAlert()}/>}
      </div>
    );
  }
}

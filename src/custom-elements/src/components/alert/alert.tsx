import { Component, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';

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
  @Prop({ reflectToAttr: true }) color!: string;

  /**
   *  to set size of an alert, lg is the only size available.
   */
  @Prop({ reflectToAttr: true }) size = 'md';

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

  @Watch('color')
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
    if (newValue && !['md', 'lg'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for alert. Alert only supports lg and md (default) sizes.`);
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
    return (
      <div class={`m-alert
        ${this.type ? `-${this.type}` : ''}
        ${this.color ? `-${this.color}` : ''}
        ${this.center ? '-center' : ''}
        ${this.dismissible ? '-dismiss' : ''}
        ${this.size ? `-${this.size}` : ''}`}
        role="alert"
      >
        {(this.dismissible || this.type === 'toast' || this.size === 'lg') ?
          <div class="m-alert__content">
            <slot></slot>
          </div>
          :
          <slot></slot>
        }
        {(this.dismissible || this.type === 'toast') && <chi-button type="close" onChiClick={() => this._dismissAlert()} size={'sm'} />}
      </div>
    );
  }
}

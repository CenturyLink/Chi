import { Component, Element, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';
import { ALERT_COLORS as VALID_COLORS, AlertColors } from '../../constants/color';
import { addMutationObserver } from '../../utils/mutationObserver';

@Component({
  tag: 'chi-alert',
  styleUrl: 'alert.scss',
  scoped: true,
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
  @Prop({ reflect: true }) mutable = true;

  /**
   *  to set alert state.
   */
  @Prop({ reflect: true }) color: AlertColors;

  /**
   *  to avoid the necessity of adding <chi-icon> to alert markup.
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
   *  to set the alert expiration time (seconds).
   */
  @Prop({ reflect: true }) expirationTime: number;

  /**
   * To render alert with Spinner
   */
  @Prop({ reflect: true }) spinner = false;

  /**
   *  custom event when trying to dismiss an alert.
   */
  @Event() dismissAlert: EventEmitter<void>;
  
  /**
   *  To define alert title
   */
  @Prop({ attribute: 'title' }) alertTitle?: string;

  timeoutReference: any;

  @Watch('type')
  typeValidation(newValue: string) {
    if (newValue && !['bubble', 'banner', 'toast'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid type for alert. Valid values are bubble, banner or toast.`);
    }
  }

  @Watch('color')
  colorValidation(newValue: AlertColors) {
    const validValues = VALID_COLORS.join(', ');

    if (newValue && !VALID_COLORS.includes(newValue)) {
      throw new Error(`${newValue} is not a valid color for alert. Valid values are ${validValues}.`);
    }
  }

  @Watch('size')
  sizeValidation(newValue: string) {
    if (newValue && !['sm', 'md', 'lg'].includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid size for an alert. Alerts only support sm, md (default), and lg sizes.`
      );
    }
  }

  componentWillLoad() {
    this.typeValidation(this.type);
    this.colorValidation(this.color);
    this.sizeValidation(this.size);

    this.timeoutReference = setTimeout(() => {
      if (this.el && this.el.parentNode) {
          this._dismissAlert();
      }
  }, this.expirationTime * 1000);
  }

  connectedCallback() {
    addMutationObserver.call(this);
  }

  _hasAlertActions() {
    return Array.from(this.el.querySelectorAll('[slot=chi-alert__actions]')).length > 0
  }

  _hasClickableIcon() {
    return Array.from(this.el.querySelectorAll('[slot=chi-alert__clickable-icon]')).length > 0
  }

  _dismissAlert() {
    if (this.mutable) {
      this.el.parentNode.removeChild(this.el);
    }
    this.dismissAlert.emit();
    
    if (this.timeoutReference) {
      clearTimeout(this.timeoutReference);
      this.timeoutReference = null;
    }
  }

  render() {
    const spinnerSizeMapping = {
      sm: 'sm',
      md: 'sm',
      lg: 'sm--2',
      xl: 'sm--2',
    };

    const chiIcon = !this.spinner && this.icon && (
      <chi-icon icon={this.icon} color={this.color || null} extraClass="chi-alert__icon"></chi-icon>
    );
    const alertTitle = this.alertTitle && <p class="chi-alert__title">{this.alertTitle}</p>;
    const chiActions = this._hasAlertActions() && (
      <div class="chi-alert__actions">
        <slot name="chi-alert__actions"></slot>
      </div>
    );
    const chiSpinner = this.spinner && (
      <chi-spinner class="chi-alert__spinner" size={spinnerSizeMapping[this.size] || 'sm'} />
    );
    const chiClickableIcon = this._hasClickableIcon() && (
      <div class="chi-alert__clickable-icon">
        <slot name="chi-alert__clickable-icon"></slot>
      </div>
    );
    const chiButton = (this.closable || this.type === 'toast') && (
      <chi-button extraClass="chi-alert__close-button" type="close" onChiClick={() => this._dismissAlert()} />
    );

    return (
      <div
        class={`chi-alert
        ${this.type ? `-${this.type}` : ''}
        ${this.color ? `-${this.color}` : ''}
        ${this.center ? '-center' : ''}
        ${this.closable ? '-close' : ''}
        ${this.size ? `-${this.size}` : ''}`}
        role="alert"
      >
        {chiIcon}
        {chiSpinner}
        <div class="chi-alert__content">
          {alertTitle}
          <p class="chi-alert__text">
            <slot></slot>
          </p>
          {chiActions}
        </div>
        {chiButton}
        {chiClickableIcon}
      </div>
    );
  }
}

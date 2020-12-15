import { Component, Element, Listen, Method, Prop, h } from '@stencil/core';
import { contains, uuid4 } from '../../utils/utils';
import { ESCAPE_KEYCODE } from '../../constants/constants';

@Component({
  tag: 'chi-time-picker',
  scoped: true
})
export class TimePicker {
  /**
   * Selected time of Time Picker
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * Minimum eligible time
   */
  @Prop({ reflect: true }) min: string;

  /**
   * Maximum eligible time
   */
  @Prop({ reflect: true }) max: string;

  /**
   *  To disable chi-time-picker.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   *  To specify excluded hours.
   */
  @Prop({ reflect: true }) excludedHours: string;

  /**
   * Indicates whether the time picker dropdown is open or closed
   */
  @Prop({ reflect: true, mutable: true }) active = false;

  @Element() el: HTMLElement;

  private _input: HTMLInputElement;
  private _uuid: string;

  _onFocusIn(e) {
    if (e.target !== document.body && e.target !== null) {
      this.active = contains(this.el, e.target);
    }
  }

  _onClick(e) {
    if (
      e.target !== document.body &&
      e.target !== null
    ) {
      this.active = contains(this.el, e.target);
    }
  }

  _onKeyUp(e) {
    if (
      'key' in e &&
      (e.key === 'Escape' || e.key === 'Esc' || e.key === ESCAPE_KEYCODE)
    ) {
      this.active = false;
      this._input.blur();
    }
  }

  /**
   * Sets time
   */
  @Method()
  async setTime(time: string) {
    this.value = time;
  }

  /**
   * Gets time
   */
  @Method()
  getTime() {
    return Promise.resolve(this.value);
  }

  @Listen('chiTimeChange')
  handleTimeChange(ev) {
    ev.stopPropagation();
    this._input.value = ev.detail;
    this.value = ev.detail;
    this.active = false;
    this._input.blur();
  }

  componentWillLoad(): void {
    this._onFocusIn = this._onFocusIn.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._uuid = this.el.id ? this.el.id : `tp-${uuid4()}`;
  }

  componentDidLoad(): void {
    document.body.addEventListener('focusin', this._onFocusIn);
    document.body.addEventListener('click', this._onClick);
    document.body.addEventListener('keyup', this._onKeyUp);
  }

  componentDidUnload(): void {
    document.body.removeEventListener('focusin', this._onFocusIn);
    document.body.removeEventListener('click', this._onClick);
    document.body.removeEventListener('keyup', this._onKeyUp);
  }

  render() {
    const chiPopover = (
      <chi-popover
        id={`popover-${this._uuid}`}
        position="bottom"
        reference={`#${this._uuid}-control`}
        prevent-auto-hide
        active={this.active}
      >
        <chi-time
          excluded-hours={this.excludedHours}
          min={this.min}
          max={this.max}
          value={this.value}
        />
      </chi-popover>
    );

    return (
      <div class={this.disabled ? '-disabled' : ''}>
        <div
          class="chi-input__wrapper -icon--right"
        >
          <input
            id={`${this._uuid}-control`}
            class={`chi-input
              ${this.active ? '-focus' : ''}`}
            type={`text`}
            placeholder={`00:00:00`}
            ref={el => (this._input = el as HTMLInputElement)}
            value={this.value}
            disabled={this.disabled}
          />
          <chi-icon icon="circle-clock-outline" color="muted"></chi-icon>
        </div>
        {!this.disabled && chiPopover}
      </div>
    );
  }
}

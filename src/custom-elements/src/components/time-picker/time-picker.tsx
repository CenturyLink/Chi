import { Component, Element, Listen, Method, Prop, h } from '@stencil/core';
import { contains, uuid4 } from '../../utils/utils';
import { ESCAPE_KEYCODE } from '../../constants/constants';
import { TIME_CLASSES } from '../../constants/classes';

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
   *  To disable chi-time-picker.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Displaying seconds column
   */
  @Prop({ reflect: true }) displaySeconds = false;

  /**
   *  To specify excluded hours.
   */
  @Prop({ reflect: true }) excludedHours: string;

  /**
   *  To specify excluded minutes.
   */
  @Prop({ reflect: true }) excludedMinutes: string;

  /**
   *  To specify excluded seconds.
   */
  @Prop({ reflect: true }) excludedSeconds: string;

  /**
   *  To render Time Picker in 24 hour format.
   */
  @Prop({ reflect: true }) extended: boolean;

  /**
   * Indicates whether the time picker popover is open or closed
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

  @Listen('chiPopoverShow')
  handlePopoverOpen(ev) {
    ev.stopPropagation();
    const hoursColumn = this.el.querySelector(`.${TIME_CLASSES.HOURS}`) as HTMLElement;
    const minutesColumn = this.el.querySelector(`.${TIME_CLASSES.MINUTES}`) as HTMLElement;
    const secondsColumn = this.el.querySelector(`.${TIME_CLASSES.SECONDS}`) as HTMLElement;

    setTimeout(() => {
      if (hoursColumn) {
        const activeHour = hoursColumn.querySelector(`.${TIME_CLASSES.HOUR}.-active`) as HTMLElement;

        if (activeHour) {
          hoursColumn.scrollTop = activeHour.offsetTop - 4;
        }
      }
      if (minutesColumn) {
        const activeMinute = minutesColumn.querySelector(`.${TIME_CLASSES.MINUTE}.-active`) as HTMLElement;

        if (activeMinute) {
          minutesColumn.scrollTop = activeMinute.offsetTop - 4;
        }
      }
      if (secondsColumn) {
        const activeSecond = secondsColumn.querySelector(`.${TIME_CLASSES.SECOND}.-active`) as HTMLElement;

        if (activeSecond) {
          secondsColumn.scrollTop = activeSecond.offsetTop - 4;
        }
      }
    }, 50);
  }

  @Listen('chiTimeChange')
  handleTimeChange(ev) {
    const timePickerInput = document.getElementById(this._uuid) as HTMLInputElement;
    const formatTimePeriod = (period: number) => {
      return period.toString().length > 1 ? period.toString() : `0${period}`;
    };
    const hour = !this.extended && ev.detail.hour > 12 ? ev.detail.hour - 12 : ev.detail.hour;

    timePickerInput.value = `${formatTimePeriod(hour)}:${formatTimePeriod(ev.detail.minute)}:${formatTimePeriod(ev.detail.second)} ${formatTimePeriod(ev.detail.period)}`;
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
          display-seconds={this.displaySeconds}
          excluded-hours={this.excludedHours}
          excluded-minutes={this.excludedMinutes}
          excluded-seconds={this.excludedSeconds}
          extended={this.extended}
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
            placeholder={`--:-- --`}
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

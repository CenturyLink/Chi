import { Component, Element, Listen, Method, Prop, h, Watch } from '@stencil/core';
import { contains, uuid4 } from '../../utils/utils';
import { CHI_TIME_AUTO_SCROLL_DELAY,
  ESCAPE_KEYCODE,
  TimePickerFormats} from '../../constants/constants';
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
  @Prop({ reflect: true }) _excludedHours: string;

  /**
   *  To specify excluded minutes.
   */
  @Prop({ reflect: true }) _excludedMinutes: string;

  /**
   *  To specify excluded seconds.
   */
  @Prop({ reflect: true }) _excludedSeconds: string;

  /**
   *  To define format of Time Picker.
   */
  @Prop({ reflect: true }) format: TimePickerFormats = '12hr';

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

  @Watch('value')
  timeChanged(newValue: string, oldValue: string) {
    if (!!newValue !== !!oldValue) {
      this.value = newValue;
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
    }, CHI_TIME_AUTO_SCROLL_DELAY);
  }

  @Listen('chiTimeChange')
  handleTimeChange(ev) {
    const timePickerInput = document.getElementById(this._uuid) as HTMLInputElement;
    const formatTimePeriod = (period: number) => {
      return String(period).length > 1 ? String(period) : `0${period}`;
    };
    const hour = !(this.format === '24hr') && ev.detail.hour > 12 ? ev.detail.hour - 12 : ev.detail.hour;
    const seconds = this.displaySeconds ? `:${formatTimePeriod(ev.detail.second)}` : '';
    const timePeriod = this.format === '12hr' ? formatTimePeriod(ev.detail.period) : '';
    
    timePickerInput.value = `${formatTimePeriod(hour)}:${formatTimePeriod(ev.detail.minute)}${seconds} ${timePeriod}`
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
          excluded-hours={this._excludedHours}
          excluded-minutes={this._excludedMinutes}
          excluded-seconds={this._excludedSeconds}
          format={this.format}
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
            placeholder={this.format === '12hr' ? '--:-- --' : '--:--'}
            ref={el => (this._input = el as HTMLInputElement)}
            value={this.value}
            disabled={this.disabled}
          />
          <chi-icon icon="circle-clock-outline"></chi-icon>
        </div>
        {!this.disabled && chiPopover}
      </div>
    );
  }
}

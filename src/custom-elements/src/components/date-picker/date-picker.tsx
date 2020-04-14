import { Component, Element, Listen, Method, Prop, Watch, h } from '@stencil/core';
import { contains, uuid4 } from '../../utils/utils';
import { ESCAPE_KEYCODE } from '../../constants/constants';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  tag: 'chi-date-picker',
  scoped: true
})
export class DatePicker {
  /**
   * Selected date in the date picker
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * Locale to use in date picker
   */
  @Prop({ reflect: true }) locale = 'en';

  /**
   * Minimum eligible date
   */
  @Prop({ reflect: true }) min = '01/01/1900';

  /**
   * Maximum eligible date
   */
  @Prop({ reflect: true }) max = '12/31/2099';

  /**
   * Date format used in the attributes and how it will be shown to the user.
   */
  @Prop({ reflect: true }) format = 'MM/DD/YYYY';

  /**
   *  to disable chi-date-picker.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Indicates whether the dropdown calendar is open or closed
   */
  @Prop({ reflect: true, mutable: true }) active = false;

  /**
   * To specify which days of week to disable
   */
  @Prop({ reflect: true }) excludedWeekdays: string;

  /**
   * To specify which dates to disable
   */
  @Prop({ reflect: true }) excludedDates: string;

  @Element() el: HTMLElement;

  private _input: HTMLInputElement;
  private _uuid: string;

  excludedWeekdaysArray = [];
  excludedDatesArray = [];

  @Watch('excludedDates')
  updateExcludedDates() {
    this.excludedDatesArray = this.excludedDates
    ? this.excludedDates.split(',').map(date => date.trim())
    : [];
  }

  @Watch('excludedWeekdays')
  updateExcludedWeekdays() {
    this.excludedWeekdaysArray = this.excludedWeekdays
    ? this.excludedWeekdays.split(',').map(weekDay => parseInt(weekDay))
    : [];
  }

  _onFocusIn(e) {
    if (e.target !== document.body && e.target !== null) {
      this.active = contains(this.el, e.target);
    }
  }

  _onClick(e) {
    if (
      e.target !== document.body &&
      e.target !== null &&
      !(new RegExp('(\\s|^)' + 'chi-datepicker__day' + '(\\s|$)').test(e.target.getAttribute('class')))
      // This hack is necessary because currently IE11 doesn't support .classList on SVG elements
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

  checkIfExcluded(day: Dayjs) {
    if (this.excludedDates) {
      for (let i = 0; i < this.excludedDatesArray.length; i++) {
        if (dayjs(this.excludedDatesArray[i]).startOf('day').isSame(day.startOf('day'))) {
          return true;
        }
      }
    }
    if (this.excludedWeekdays) {
      if (this.excludedWeekdaysArray.includes(day.day())) {
        return true;
      }
    }
    return false;
  }

  _checkDate() {
    const inputDate = dayjs(this._input.value);
    const minDate = dayjs(this.min);
    const maxDate = dayjs(this.max);

    if (dayjs(this._input.value).isValid() && !this.checkIfExcluded(inputDate)) {
      if (
        dayjs(inputDate)
          .startOf('day')
          .isBefore(dayjs(minDate).startOf('day'))
      ) {
        this.value = this.min;
        this._input.value = this.min;
      } else if (
        dayjs(inputDate)
          .startOf('day')
          .isAfter(dayjs(maxDate).startOf('day'))
      ) {
        this.value = this.max;
        this._input.value = this.max;
      } else {
        this.value = this._input.value;
      }
    } else {
      this.value = dayjs().format('MM/DD/YYYY');
      this._input.value = this.value;
    }
  }

  /**
   * Sets date
   */
  @Method()
  async setDate(date) {
    this.value = date;
  }

  /**
   * Gets date
   */
  @Method()
  getDate() {
    return Promise.resolve(this.value);
  }

  @Listen('chiDateChange')
  handleDateChange(ev) {
    ev.stopPropagation();
    this._input.value = ev.detail;
    this.value = ev.detail;
    this.active = false;
    this._input.blur();
  }

  componentWillLoad(): void {
    this.updateExcludedDates();
    this.updateExcludedWeekdays();
    this._onFocusIn = this._onFocusIn.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._uuid = this.el.id ? this.el.id : `dp-${uuid4()}`;
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
        id="example-4-be-popover"
        position="bottom"
        reference={`#${this._uuid}-control`}
        prevent-auto-hide
        active={this.active}
      >
        <chi-date
          min={this.min}
          max={this.max}
          locale={this.locale}
          value={this.value}
          format={this.format}
          excluded-weekdays={this.excludedWeekdays}
          excluded-dates={this.excludedDates}
        />
      </chi-popover>
    );

    return [
      // TODO: This input should be chi-input in the future and will pass through
      // some of its configuration attributes.
      <div
        class={`${
          this.disabled ? '-disabled' : ''
          } chi-input__wrapper -icon--right`}
      >
        <input
          id={`${this._uuid}-control`}
          class={`chi-input
            ${this.active ? '-focus' : ''}`}
          type={`text`}
          placeholder={`MM/DD/YYYY`}
          ref={el => (this._input = el as HTMLInputElement)}
          value={this.value}
          onChange={() => {
            this._checkDate();
          }}
          disabled={this.disabled}
        />
        <chi-icon icon="date" color="muted"></chi-icon>
        {!this.disabled && chiPopover}
      </div>
    ];
  }
}

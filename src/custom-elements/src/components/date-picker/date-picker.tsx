import { Component, Element, Listen, Method, Prop, Watch, h, Event, EventEmitter } from '@stencil/core';
import { contains, uuid4 } from '../../utils/utils';
import {
  CHI_TIME_AUTO_SCROLL_DELAY,
  DataLocales,
  DatePickerModes,
  DateFormats,
  TimePickerFormats,
} from '../../constants/constants';
import dayjs, { Dayjs } from 'dayjs';
import { TIME_CLASSES } from '../../constants/classes';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { ChiStates, CHI_STATES } from '../../constants/states';
import { ESCAPE_KEYCODE } from '../../constants/constants';

@Component({
  tag: 'chi-date-picker',
  scoped: true,
})
export class DatePicker {
  /**
   * Selected date in the date picker
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * Locale to use in date picker
   */
  @Prop({ reflect: true }) locale: DataLocales = 'en';

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
  @Prop({ reflect: true }) format: DateFormats = 'MM/DD/YYYY';

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

  /**
   * To render Date Picker with Time Picker
   */
  @Prop({ reflect: true }) mode: DatePickerModes = 'date';

  /**
   * To allow the user to select multiple dates
   */
  @Prop({ reflect: true }) multiple = false;
  /**
   * To define state color of Date Picker
   */
  @Prop({ reflect: true }) state?: ChiStates;
  /**
   * To specify format for the Time Picker. Applicable only if mode is equal to 'datetime'
   */
  @Prop({ reflect: true }) timeFormat?: TimePickerFormats;

  /**
   * Date change value event
   */
  @Event({ eventName: 'chiDateChange' }) eventChange: EventEmitter;

  /**
   * Triggered if the date value introduced by the user is invalid
   */
  @Event({ eventName: 'chiDateInvalid' }) eventInvalid: EventEmitter;

  @Element() el: HTMLElement;

  private _input: HTMLInputElement;
  private _uuid: string;

  excludedWeekdaysArray = [];
  excludedDatesArray = [];

  @Watch('state')
  stateValidation(newValue: ChiStates) {
    const validValues = CHI_STATES.join(', ');

    if (newValue && !CHI_STATES.includes(newValue)) {
      throw new Error(
        `${newValue} is not a valid state for date picker. If provided, valid values are: ${validValues}. `
      );
    }
  }

  @Watch('excludedDates')
  updateExcludedDates() {
    this.excludedDatesArray = this.excludedDates ? this.excludedDates.split(',').map((date) => date.trim()) : [];
  }

  @Watch('excludedWeekdays')
  updateExcludedWeekdays() {
    this.excludedWeekdaysArray = this.excludedWeekdays
      ? this.excludedWeekdays.split(',').map((weekDay) => parseInt(weekDay))
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
      !(
        this.mode !== 'datetime' &&
        !this.multiple &&
        new RegExp('(\\s|^)' + 'chi-datepicker__day' + '(\\s|$)').test(e.target.getAttribute('class'))
      )
      // This hack is necessary because currently IE11 doesn't support .classList on SVG elements
    ) {
      this.active = contains(this.el, e.target);
    }
  }

  _isEscapeKey(e: KeyboardEvent): boolean {
    return 'key' in e && (e.key === 'Escape' || e.key === 'Esc' || e.key === ESCAPE_KEYCODE);
  }

  _onKeyUp(e: KeyboardEvent) {
    if (!this.active) return;

    if (this._isEscapeKey(e)) {
      this.active = false;
      this._input.blur();
    }
  }

  checkIfExcluded(day: Dayjs) {
    return (
      (this.excludedDates &&
        this.excludedDatesArray.some((date) => dayjs(date).startOf('day').isSame(day.startOf('day')))) ||
      (this.excludedWeekdays && this.excludedWeekdaysArray.includes(day.day()))
    );
  }

  _checkValidDate(date, minDate, maxDate) {
    const inputDate = dayjs(date, this.format);

    return (
      inputDate.isValid() &&
      !this.checkIfExcluded(inputDate) &&
      !inputDate.startOf('day').isBefore(dayjs(minDate).startOf('day')) &&
      !inputDate.startOf('day').isAfter(dayjs(maxDate).startOf('day'))
    );
  }

  _checkMultipleDates(minDate, maxDate) {
    const inputDates = this._input.value.replace(/ /g, '').split(',');
    const validatedDates = [];

    inputDates.forEach((date) => {
      if (this._checkValidDate(date, minDate, maxDate) && !validatedDates.includes(date)) {
        validatedDates.push(date);
      }
    });
    this.value = validatedDates.join(',');
    this._input.value = this.value;
    this.eventChange.emit(this.value);
  }

  _checkSingleDate(minDate, maxDate) {
    const inputDate = dayjs(this._input.value, this.format);

    if (dayjs(this._input.value, this.format, true).isValid() && !this.checkIfExcluded(inputDate)) {
      if (dayjs(inputDate).startOf('day').isBefore(dayjs(minDate).startOf('day'))) {
        this.value = this.min;
        this._input.value = this.min;
        this.eventChange.emit(this.value);
      } else if (dayjs(inputDate).startOf('day').isAfter(dayjs(maxDate).startOf('day'))) {
        this.value = this.max;
        this._input.value = this.max;
        this.eventChange.emit(this.value);
      } else {
        this.value = this._input.value;
        this.eventChange.emit(this.value);
      }
    } else {
      this.eventInvalid.emit(this._input.value);
      this.value = '';
      this._input.value = '';
    }
  }

  _checkDate() {
    dayjs.locale(this.locale);
    dayjs.extend(customParseFormat);

    const minDate = dayjs(this.min, this.format);
    const maxDate = dayjs(this.max, this.format);

    if (this._input.value === this.value) {
      return;
    }

    if (this.multiple) {
      this._checkMultipleDates(minDate, maxDate);
    } else {
      this._checkSingleDate(minDate, maxDate);
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
   * Resets date
   */
  @Method()
  async resetDate() {
    this.value = null;
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
    if (ev.target.nodeName === 'CHI-DATE') {
      ev.preventDefault();
      ev.stopImmediatePropagation();
      this.eventChange.emit(ev.detail);
    }
    ev.stopPropagation();
    this._input.value = ev.detail;
    if (this.mode === 'datetime') {
      this.handleDateTimeChange(ev);
    } else {
      this.value = ev.detail;
    }

    if (!this.multiple) {
      this.active = false;
      this._input.blur();
    }
  }

  _getTimePeriod(is24h, hours) {
    let period = '';

    if (!is24h) {
      period = parseInt(hours) >= 12 ? 'pm' : 'am';
    }

    return period;
  }

  handleDateTimeChange(ev) {
    const chiTime = this.el.querySelector('.chi-popover__content chi-time');
    const valueTime = chiTime.getAttribute('value');
    const timeFormat = chiTime.getAttribute('format');
    const is24hrTimeFormat = timeFormat === '24hr';

    if (!valueTime) {
      return;
    }

    const time = valueTime.split(':');
    const period = this._getTimePeriod(is24hrTimeFormat, time[0]);
    const hours = !is24hrTimeFormat && parseInt(time[0]) > 12 ? parseInt(time[0]) - 12 : parseInt(time[0]);
    const hoursCalculated = this.formatTimePeriod(hours);
    const minutes = this.formatTimePeriod(parseInt(time[1]));

    this.value = `${ev.detail}, ${hoursCalculated}:${minutes} ${period}`;
  }

  @Listen('chiPopoverShow')
  handlePopoverOpen(ev) {
    ev.stopPropagation();
    const hoursColumn = this.el.querySelector(`.${TIME_CLASSES.HOURS}`);
    const minutesColumn = this.el.querySelector(`.${TIME_CLASSES.MINUTES}`);

    setTimeout(() => {
      if (hoursColumn) {
        const activeHour = hoursColumn.querySelector(`.${TIME_CLASSES.HOUR}.-active`) as HTMLElement;

        if (activeHour) {
          hoursColumn.scrollTop = activeHour.offsetTop - 12;
        }
      }
      if (minutesColumn) {
        const activeMinute = minutesColumn.querySelector(`.${TIME_CLASSES.MINUTE}.-active`) as HTMLElement;

        if (activeMinute) {
          minutesColumn.scrollTop = activeMinute.offsetTop - 12;
        }
      }
    }, CHI_TIME_AUTO_SCROLL_DELAY);
  }

  @Listen('chiTimeChange')
  handleTimeChange(ev) {
    const chiDate = this.el.querySelector('.chi-popover__content chi-date');
    let activeDate = chiDate.getAttribute('value');

    if (!activeDate) {
      const currentTime = new Date();

      activeDate = `${currentTime.getMonth() + 1}/${currentTime.getDate()}/${currentTime.getFullYear()}`;
    }

    chiDate.setAttribute('value', activeDate);
    if (this.timeFormat === '24hr') {
      this.value = `${activeDate}, ${this.formatTimePeriod(ev.detail.hour)}:${this.formatTimePeriod(ev.detail.minute)}`;
    } else {
      const hour = ev.detail.hour > 12 ? ev.detail.hour - 12 : ev.detail.hour;

      this.value = `${activeDate}, ${this.formatTimePeriod(hour)}:${this.formatTimePeriod(
        ev.detail.minute
      )} ${this.formatTimePeriod(ev.detail.period)}`;
    }
  }

  formatTimePeriod(period: number): string {
    return period.toString().length > 1 ? period.toString() : `0${period}`;
  }

  componentWillLoad(): void {
    this.stateValidation(this.state);
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

  disconnectedCallback(): void {
    document.body.removeEventListener('focusin', this._onFocusIn);
    document.body.removeEventListener('click', this._onClick);
    document.body.removeEventListener('keyup', this._onKeyUp);
  }

  _getChiDateValue() {
    let value = this.value;

    if (this.mode === 'datetime') {
      value = this.value ? this.value.split(',')[0] : null;
    }

    return value;
  }

  render() {
    const chiDateValue = this._getChiDateValue();

    const date = (
      <chi-date
        min={this.min}
        max={this.max}
        locale={this.locale}
        value={chiDateValue}
        format={this.format}
        excluded-weekdays={this.excludedWeekdays}
        excluded-dates={this.excludedDates}
        multiple={this.multiple}
      />
    );
    const timeValue = (this.value?.split(', ') || [])[1];
    const time = this.mode === 'datetime' ? <chi-time format={this.timeFormat} value={timeValue} /> : null;
    const popoverContent =
      this.mode === 'datetime' ? (
        <div class="-d--flex">
          {date}
          {time}
        </div>
      ) : (
        date
      );
    const chiPopover = (
      <chi-popover
        id="example-4-be-popover"
        position={this.mode === 'datetime' ? 'bottom-start' : 'bottom'}
        reference={`#${this._uuid}-control`}
        prevent-auto-hide
        active={this.active}
      >
        {popoverContent}
      </chi-popover>
    );

    const inputClasses = `chi-input
      ${this.active ? '-focus' : ''}
      ${this.state ? '-' + this.state : ''}
    `;

    return [
      // TODO: This input should be chi-input in the future and will pass through
      // some of its configuration attributes.
      <div
        class={`
        ${this.disabled ? '-disabled' : ''}
        ${this.mode === 'datetime' ? '-time' : ''}`}
        key={this._uuid}
      >
        <div class="chi-input__wrapper -icon--right">
          <input
            id={`${this._uuid}-control`}
            class={inputClasses}
            type="text"
            placeholder={this.mode === 'datetime' ? `${this.format}, --:-- --` : this.format}
            ref={(el) => (this._input = el as HTMLInputElement)}
            value={this.value && this.multiple ? String(this.value).replace(/,/g, ', ') : this.value}
            onChange={() => {
              this._checkDate();
            }}
            disabled={this.disabled}
          />
          <chi-icon icon="date"></chi-icon>
        </div>
        {!this.disabled && chiPopover}
      </div>,
    ];
  }
}

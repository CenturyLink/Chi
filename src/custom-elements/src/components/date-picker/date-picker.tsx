import { Component, Element, Listen, Method, Prop, Watch, h } from '@stencil/core';
import { contains, uuid4 } from '../../utils/utils';
import { ESCAPE_KEYCODE, CHI_TIME_AUTO_SCROLL_DELAY, DataLocales, DatePickerModes, DateFormats } from '../../constants/constants';
import dayjs, { Dayjs } from 'dayjs';
import { TIME_CLASSES } from '../../constants/classes';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { ChiStates, CHI_STATES } from '../../constants/states';

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
  @Prop({ reflect: true }) state: ChiStates;

  @Element() el: HTMLElement;

  private _input: HTMLInputElement;
  private _uuid: string;

  excludedWeekdaysArray = [];
  excludedDatesArray = [];

  @Watch('state')
  stateValidation(newValue: ChiStates) {
    const validValues = CHI_STATES.join(', ');

    if (newValue && !CHI_STATES.includes(newValue)) {
      throw new Error(`${newValue} is not a valid state for date picker. If provided, valid values are: ${validValues}. `);
    }
  }

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
      !(!(this.mode === 'datetime') && !this.multiple && new RegExp('(\\s|^)' + 'chi-datepicker__day' + '(\\s|$)').test(e.target.getAttribute('class')))
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
    dayjs.locale(this.locale);
    dayjs.extend(customParseFormat);

    const minDate = dayjs(this.min, this.format);
    const maxDate = dayjs(this.max, this.format);

    const dateValid = (date) => {
      const inputDate = dayjs(date, this.format);

      return inputDate.isValid() &&
        !this.checkIfExcluded(inputDate) &&
        !inputDate.startOf('day').isBefore(dayjs(minDate).startOf('day')) &&
        !inputDate.startOf('day').isAfter(dayjs(maxDate).startOf('day'));
    };

    if (this.multiple) {
      const inputDates = this._input.value.replace(/ /g, '')
        .split(',');
      const validatedDates = [];

      inputDates.forEach(date => {
        if (dateValid(date) && !validatedDates.includes(date)) {
          validatedDates.push(date);
        }
      });
      this.value = validatedDates.join(',');
      this._input.value = this.value;
    } else {
      const inputDate = dayjs(this._input.value, this.format);

      if (dayjs(this._input.value, this.format, true).isValid() && !this.checkIfExcluded(inputDate)) {
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
        this.value = dayjs().format(this.format);
        this._input.value = this.value;
      }
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
    ev.stopPropagation();
    this._input.value = ev.detail;
    if (this.mode === 'datetime') {
      const chiTime = this.el.querySelector('.chi-popover__content chi-time') as HTMLElement;
      const valueTime = chiTime.getAttribute('value');

      if (valueTime) {
        const time = valueTime.split(':');
        const period = parseInt(time[0]) >= 12 ? 'pm' : 'am';
        const hours = parseInt(time[0]) > 12 ? parseInt(time[0]) - 12 : parseInt(time[0]);
        const hoursCalculated = this.formatTimePeriod(hours);
        const minutes = this.formatTimePeriod(parseInt(time[1]));

        this.value = `${ev.detail}, ${hoursCalculated}:${minutes} ${period}`;
      }
    } else {
      this.value = ev.detail;
    }
    this.active = false;
    this._input.blur();
  }

  @Listen('chiPopoverShow')
  handlePopoverOpen(ev) {
    ev.stopPropagation();
    const hoursColumn = this.el.querySelector(`.${TIME_CLASSES.HOURS}`) as HTMLElement;
    const minutesColumn = this.el.querySelector(`.${TIME_CLASSES.MINUTES}`) as HTMLElement;

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
    const currentTime = new Date();
    const chiDate = this.el.querySelector('.chi-popover__content chi-date') as HTMLElement;
    const valueDate = chiDate.getAttribute('value');
    const hour = ev.detail.hour > 12 ? ev.detail.hour - 12 : ev.detail.hour;
    let activeDate: string;

    if (valueDate) {
      activeDate = valueDate;
    } else {
      activeDate = `${currentTime.getMonth() + 1}/${currentTime.getDate()}/${currentTime.getFullYear()}`;
    }

    chiDate.setAttribute('value', activeDate);
    this.value = `${activeDate}, ${this.formatTimePeriod(hour)}:${this.formatTimePeriod(ev.detail.minute)} ${this.formatTimePeriod(ev.detail.period)}`;
  }

  formatTimePeriod(period: number): string {
    return period.toString().length > 1 ? period.toString() : `0${period}`;
  };

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

  componentDidUnload(): void {
    document.body.removeEventListener('focusin', this._onFocusIn);
    document.body.removeEventListener('click', this._onClick);
    document.body.removeEventListener('keyup', this._onKeyUp);
  }

  render() {
    const chiDateValue = this.mode === 'datetime' ?
      this.value ? this.value.split(',')[0] : null
      : this.value;

    const date = <chi-date
      min={this.min}
      max={this.max}
      locale={this.locale}
      value={chiDateValue}
      format={this.format}
      excluded-weekdays={this.excludedWeekdays}
      excluded-dates={this.excludedDates}
      multiple={this.multiple}
    />;
    const time = this.mode === 'datetime' ? <chi-time /> : null;
    const popoverContent = this.mode === 'datetime' ?
      <div class="-d--flex">
        {date}
        {time}
      </div> : date;
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

    return [
      // TODO: This input should be chi-input in the future and will pass through
      // some of its configuration attributes.
      <div class={`
        ${this.disabled ? '-disabled' : ''}
        ${this.mode === 'datetime' ? '-time' : ''}`}>
        <div
          class="chi-input__wrapper -icon--right"
        >
          <input
            id={`${this._uuid}-control`}
            class={`chi-input
              ${this.active ? '-focus' : ''}
              ${this.state ? `-${this.state}` : ''}`
            }
            type={`text`}
            placeholder={this.mode === 'datetime' ? `${this.format}, --:-- --` : this.format}
            ref={el => (this._input = el as HTMLInputElement)}
            value={(this.value && this.multiple) ?
                String(this.value).replace(/,/g, ', ') :
                this.value}
            onChange={() => {
              this._checkDate();
            }}
            disabled={this.disabled}
          />
          <chi-icon icon="date"></chi-icon>
        </div>
        {!this.disabled && chiPopover}
      </div>
    ];
  }
}

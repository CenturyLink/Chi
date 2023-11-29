import { Component, Element, Listen, Method, Prop, Watch, h, Event, EventEmitter } from '@stencil/core';
import { contains, uuid4 } from '../../utils/utils';
import {
  CHI_TIME_AUTO_SCROLL_DELAY,
  DataLocales,
  DatePickerModes,
  DateFormats,
  TimePickerFormats
} from '../../constants/constants';
import { isEscapeKey } from '../../utils/utils';
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
  @Prop({ reflect: true }) state?: ChiStates;
  /**
   * To specify format for the Time Picker. Applicable only if mode is equal to 'datetime'
   */
  @Prop({ reflect: true }) timeFormat?: TimePickerFormats;
  /**
   * To enable keyboard navigation through the component via tabs and arrow keys.
   */
  @Prop() keyboardNavigation = false;

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
  private _keyboardFocusedDate: string;

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

  /**
   * Sets keyboardFocusedDate with today or (if not selectable), the first available
   * day of the month.
   */
  @Watch('active')
  _setKeyboardFocusedDate() {
    if (!this.active || this._keyboardFocusedDate) {
      return
    }

    const today = dayjs().format(this.format);
    this._keyboardFocusedDate = this._getValidDayElement(today) 
      ? today 
      : this._getFocusableDays()[0]?.getAttribute('data-date');
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

  _onKeyUp(e: KeyboardEvent) {
    if (!this.active) return;

    if (isEscapeKey(e)) {
      this.active = false;
      this._input.blur();
    }
  }

  /**
  * Handles key down event
  */
 _onKeyDown(e: KeyboardEvent) {
   // TODO: enter key event
   // TODO: check if calendar is focused in to enable arrows
   const keyHandler = {
    "ArrowLeft": this._focusPrevDay.bind(this),
    "ArrowRight": this._focusNextDay.bind(this),
    "ArrowUp": this._focusPrevWeek.bind(this, e),
    "ArrowDown": this._focusNextWeek.bind(this, e),
    "Tab": this._handleTab.bind(this, e),
    "Enter": this._handleEnter.bind(this, e)
   }[e.key];

    if (!this.active || !keyHandler) {
      return;
    }
    e.stopPropagation();

    keyHandler();
  }

  // TODO: create a function to check if there are available days after or before N days

  _focusNextWeek(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    // day + 1 week, if available -> focus, else, find next one
    // control if month is the same
    const currentDate = dayjs(this._keyboardFocusedDate)
    const nextDate = currentDate.add(1, 'week');

    if (nextDate.isAfter(this.max)) {
      return
    }

    if (this._getValidDayElement(nextDate.format(this.format))) {
      return this._focusCalendarDay(nextDate.format(this.format))
    }

    const chiDate = this.el.querySelector('chi-date');

    const handler = () => {
      if (this._getValidDayElement(nextDate.format(this.format))) {
        return this._focusCalendarDay(nextDate.format(this.format))
      }
    }

    chiDate.addEventListener('chiDateRendered', handler.bind(this));
    chiDate.nextMonth().then(() => chiDate.removeEventListener(
      'chiDateRendered', handler
    ))

  }

  _focusPrevWeek(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    // day + 1 week, if available -> focus, else, find next one
    // control if month is the same
    const currentDate = dayjs(this._keyboardFocusedDate)
    const nextDate = currentDate.subtract(1, 'week');

    if (nextDate.isBefore(this.min)) {
      return
    }

    if (this._getValidDayElement(nextDate.format(this.format))) {
      return this._focusCalendarDay(nextDate.format(this.format))
    }


    const chiDate = this.el.querySelector('chi-date');

    const handler = () => {
      if (this._getValidDayElement(nextDate.format(this.format))) {
        return this._focusCalendarDay(nextDate.format(this.format))
      }
    }

    chiDate.addEventListener('chiDateRendered', handler.bind(this));
    chiDate.prevMonth().then(() => chiDate.removeEventListener(
      'chiDateRendered', handler
    ))
  }

  // ? if max date is an invalid day, and we try to focus --> next month is enabled
  // ? e.g. max = 1 dec 23, and excluded-weekdays="0,3,5" -> 1 dec is friday (5)

  _focusNextDay() {
    const dayToFocus = this._getAvailableSiblingDay(1);

    if (dayToFocus) {
      this._focusCalendarDay(dayToFocus);
    }

    if (!dayToFocus && 
        dayjs(this.max).isAfter(dayjs(this._keyboardFocusedDate).add(1, 'day'))
    ) {
      const chiDate = this.el.querySelector('chi-date');

      chiDate.addEventListener('chiDateRendered', this._focusFirstAvailableDay.bind(this));
      chiDate.nextMonth().then(() => chiDate.removeEventListener(
        'chiDateRendered', this._focusFirstAvailableDay.bind(this)
      ))
    }
  }
  _focusPrevDay() {
    const dayToFocus = this._getAvailableSiblingDay(-1);

    if (dayToFocus) {
      this._focusCalendarDay(dayToFocus);
    }

    if (!dayToFocus && 
        dayjs(this.min).isBefore(dayjs(this._keyboardFocusedDate).subtract(1, 'day'))
    ) {
      const chiDate = this.el.querySelector('chi-date');

      chiDate.addEventListener('chiDateRendered', this._focusLastAvailableDay.bind(this));
      chiDate.prevMonth().then(() => chiDate.removeEventListener(
        'chiDateRendered', this._focusLastAvailableDay.bind(this)
      ))
    }
  }

  _focusLastAvailableDay() {
    console.log('focusing last day')
    this._focusCalendarDay(
      this._getFocusableDays().pop()?.getAttribute('data-date')
    )
  }

  _focusFirstAvailableDay() {
    console.log('focusing first day')
    this._focusCalendarDay(
      this._getFocusableDays()[0]?.getAttribute('data-date')
    )
  }

  _getAvailableSiblingDay(dayDiff: number) {
    const availableDays = this._getFocusableDays().map(i => i.getAttribute('data-date'));
    const currentFocusIndex = availableDays.indexOf(this._keyboardFocusedDate);

    return availableDays[currentFocusIndex + dayDiff];
  }

  _getValidDayElement(date: string) {
    return this.el.querySelector(`.chi-datepicker__day[data-date="${date}"]:not(.-inactive)`) as HTMLElement;
  }
  
  _focusCalendarDay(date: string = this._keyboardFocusedDate) {
    const element = this._getValidDayElement(date);

    if (element) {
      element.focus();
      this._keyboardFocusedDate = date;
    }
  }

  _getFocusableDays() {
    const availableDays = this.el.querySelectorAll('.chi-datepicker__day:not(.-inactive)');
    return Array.from(availableDays);
  }


  /**
   * Handles tab key to keep focus on the enabled elements of date picker: 
   * prev month, next month and calendar day.
   */
  _handleTab(e: KeyboardEvent) {
    // TODO: will probably need to change if keyboard navigation is also wanted in time picker
    e.preventDefault();
    e.stopPropagation();

    let tabElements = [
      this.el.querySelector('chi-date .chi-datepicker__month-row .prev:not(.-disabled)'),
      this.el.querySelector('chi-date .chi-datepicker__month-row .next:not(.-disabled)'),
      this._getValidDayElement(this._keyboardFocusedDate)
    ]
    
    tabElements = [...tabElements, ...tabElements].filter(Boolean);

    const nextElement = tabElements[
      tabElements.indexOf(e.target as Element) + 1
    ] as HTMLElement;

    nextElement.focus();
  }

  _handleEnter(e: KeyboardEvent) {
    const target = e.target as HTMLElement;
    const isPrevMonth = target === this.el.querySelector('chi-date .chi-datepicker__month-row .prev');
    const isNextMonth = target === this.el.querySelector('chi-date .chi-datepicker__month-row .next');
    const isDay = target === this._getValidDayElement(this._keyboardFocusedDate);

    // TODO: prone to errors if fousing more than max or invalid date ---> chirender handler
    if (isPrevMonth) {
      this.el.querySelector('chi-date').prevMonth();
      this._keyboardFocusedDate = dayjs(this._keyboardFocusedDate)
        .subtract(1, "month")
        .format(this.format);
      } else if (isNextMonth) {
        this.el.querySelector('chi-date').nextMonth();
        this._keyboardFocusedDate = dayjs(this._keyboardFocusedDate)
          .add(1, "month")
          .format(this.format);
    } else if (isDay) {
      this.el.querySelector('chi-date').selectDate(
        dayjs(this._keyboardFocusedDate)
      ); 
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

    if (this._input.value === this.value) {
      return;
    }

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
      this.eventChange.emit(this.value);
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
          this.eventChange.emit(this.value);
        } else if (
          dayjs(inputDate)
            .startOf('day')
            .isAfter(dayjs(maxDate).startOf('day'))
        ) {
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
      const chiTime = this.el.querySelector('.chi-popover__content chi-time') as HTMLElement;
      const valueTime = chiTime.getAttribute('value');
      const timeFormat = chiTime.getAttribute('format');
      const is24hrTimeFormat = timeFormat === '24hr';

      if (valueTime) {
        const time = valueTime.split(':');
        const period = is24hrTimeFormat ? '' : parseInt(time[0]) >= 12 ? 'pm' : 'am';
        const hours = !is24hrTimeFormat && parseInt(time[0]) > 12 ? parseInt(time[0]) - 12 : parseInt(time[0]);
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
    const chiDate = this.el.querySelector('.chi-popover__content chi-date') as HTMLElement;
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

      this.value = `${activeDate}, ${this.formatTimePeriod(hour)}:${this.formatTimePeriod(ev.detail.minute)} ${this.formatTimePeriod(ev.detail.period)}`;
    }
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
    document.body.addEventListener('keydown', this._onKeyDown.bind(this));
  }

  componentDidUnload(): void {
    document.body.removeEventListener('focusin', this._onFocusIn);
    document.body.removeEventListener('click', this._onClick);
    document.body.removeEventListener('keyup', this._onKeyUp);
    document.body.removeEventListener('keydown', this._onKeyDown);
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
      keyboard-navigation={this.active && this.keyboardNavigation}
    />;
    const timeValue = (this.value?.split(', ') || [])[1];
    const time = this.mode === 'datetime' ? <chi-time format={this.timeFormat} value={timeValue} /> : null;
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

import { Component, Element, Event, EventEmitter, Method, Prop, State, Watch, h } from '@stencil/core';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { CLASSES, DataLocales, DateFormats } from '../../constants/constants';
import 'dayjs/locale/es';
import 'dayjs/locale/pt';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
import 'dayjs/locale/ja';
import 'dayjs/locale/zh';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { contains } from '../../utils/utils';
import { DATEPICKER_CLASSES, INACTIVE_CLASS, DISABLED_CLASS } from '../../constants/classes';

dayjs.extend(isBetween);

const WEEK_CLASS_PART = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

@Component({
  tag: 'chi-date',
  styleUrl: 'date.scss',
  scoped: true,
})
export class Date {
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
   * To specify which days of week to disable
   */
  @Prop({ reflect: true }) excludedWeekdays: string;

  /**
   * To specify which dates to disable
   */
  @Prop({ reflect: true }) excludedDates: string;

  /**
   * To allow the user to select multiple dates
   */
  @Prop({ reflect: true }) multiple = false;

  @State() viewMonth = dayjs();

  @Element() el: HTMLElement;

  private _keyboardFocusedDate: string;
  private _afterRenderHandler: Function;
  private _enableKeyboardNavigation = true;

  excludedWeekdaysArray = [];
  excludedDatesArray = [];

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

  @Watch('value')
  dateChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue && (newValue || oldValue)) {
      if (newValue) {
        this._handleNewDateValue(newValue);
      } else {
        this._initCalendarViewModel();
        this._initViewMonth();
        this._updateViewMonth();
      }
    }
  }

  _handleNewDateValue(newValue: string) {
    if (this.multiple) {
      this._vm.dates = newValue.split(',').map((valueDay) => this.fromString(valueDay)) || [];
    } else {
      const date = dayjs(newValue).format(this.format);

      this._vm.dates = [this.fromString(date)];
    }

    if (this._vm.dates.length > 0) {
      Array.from(this._vm.dates).forEach((date) => {
        if (!date.isValid()) {
          throw new Error(`Date ${newValue} has an invalid format. `);
        }
      });
    }
    this.viewMonth = this._vm.dates[this._vm.dates.length - 1];
  }

  @Watch('locale')
  localeChanged() {
    this._initCalendarViewModel();
  }

  @Watch('viewMonth')
  viewMonthChanged(newValue: Dayjs, oldValue: Dayjs) {
    if (newValue.month() !== oldValue.month() || newValue.year() !== oldValue.year()) {
      this._updateViewMonth();
    }
  }

  @Watch('min')
  minChanged(newValue: string) {
    const newMinDate = this.fromString(newValue);
    if (!newMinDate.isValid()) {
      throw new Error(`Min date value ${newValue} has an invalid format. `);
    }
    this._vm.min = newMinDate;
  }

  @Watch('max')
  maxChanged(newValue: string) {
    const newMaxDate = this.fromString(newValue);
    if (!newMaxDate.isValid()) {
      throw new Error(`Max date value ${newValue} has an invalid format. `);
    }
    this._vm.max = newMaxDate;
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

  /**
   * Date change value event
   */
  @Event({ eventName: 'chiDateChange', cancelable: true })
  eventChange: EventEmitter;

  _vm: {
    dates: Dayjs[];
    today: Dayjs;
    weekStartClass: string;
    monthStartClass: string;
    weekDays: Dayjs[];
    monthDays: Dayjs[];
    min: Dayjs;
    max: Dayjs;
  };

  private _initViewMonth(): void {
    if (this.multiple && this.value) {
      const valueDates = this.value.replace(/ /g, '').split(',');
      const date = valueDates[valueDates.length - 1];

      this.viewMonth = date ? this.fromString(date) : dayjs();
    } else {
      this.viewMonth = this.value ? this.fromString(this.value) : dayjs();
    }
  }

  private _initDates() {
    let dates = [];

    if (this.value) {
      if (this.multiple) {
        dates = this.value
          .replace(/ /g, '')
          .split(',')
          .map((valueDay) => {
            return this.fromString(valueDay);
          });
      } else {
        dates = [this.fromString(this.value)];
      }
    }

    return dates;
  }

  private _initCalendarViewModel(): void {
    dayjs.locale(this.locale);
    dayjs.extend(customParseFormat);

    const week: Dayjs[] = [];
    const startOfWeek = dayjs().startOf('week');
    for (let i = 0; i < 7; i++) {
      week.push(startOfWeek.add(i, 'day'));
    }

    this._vm = {
      dates: this._initDates(),
      today: dayjs(),
      weekStartClass: dayjs().startOf('week').day() === 1 ? '-week-starts-on-mon' : '-week-starts-on-sun',
      monthStartClass: '',
      weekDays: week,
      monthDays: [],
      min: this.fromString(this.min),
      max: this.fromString(this.max),
    };
  }

  private _updateViewMonth() {
    if (this._vm && this._vm.min && this._vm.min.isAfter(this.viewMonth)) {
      this.viewMonth = this._vm.min;
    }

    if (this._vm && this._vm.max && this._vm.max.isBefore(this.viewMonth)) {
      this.viewMonth = this._vm.max;
    }

    const month: Dayjs[] = [];
    const lastDay = this.viewMonth.endOf('month');
    for (let day = this.viewMonth.startOf('month'); day.isBefore(lastDay); day = day.add(1, 'day')) {
      month.push(day);
    }
    this._vm.monthDays = month;

    this._vm.monthStartClass = `-month-starts-on-${WEEK_CLASS_PART[this.viewMonth.set('date', 1).day()]}`;
  }

  fromString(dateStr: string): Dayjs {
    return this.format ? dayjs(dateStr, this.format) : dayjs(dateStr);
  }

  toDayString(date: Dayjs): string {
    return this.format ? date.format(this.format) : date.format('L');
  }

  nextMonth(): void {
    this.viewMonth = this.viewMonth.add(1, 'month');
  }

  prevMonth(): void {
    this.viewMonth = this.viewMonth.subtract(1, 'month');
  }

  componentWillLoad(): void {
    this.updateExcludedDates();
    this.updateExcludedWeekdays();
    this._initCalendarViewModel();
    this._initViewMonth();
    this._updateViewMonth();
  }

  componentDidRender(): void {
    if (this._afterRenderHandler instanceof Function) {
      this._afterRenderHandler();
      this._afterRenderHandler = null;
      return;
    }

    if (!this._keyboardFocusedDate) {
      const today = dayjs().format(this.format);
      const alternativeFocusedDay = this._getValidDayElement(today) ? today : this._getFirstOrLastAvailableDate(true);

      this._keyboardFocusedDate = this._getValidDayElement(this.value) ? this.value : alternativeFocusedDay;
    }
  }

  componentDidLoad(): void {
    document.body.addEventListener('keydown', this._onKeyDown.bind(this));
    document.body.addEventListener('focusin', this._onFocusIn.bind(this));
  }

  disconnectedCallback(): void {
    document.body.removeEventListener('keydown', this._onKeyDown);
    document.body.removeEventListener('focusin', this._onFocusIn);
  }

  _onFocusIn(e) {
    if (e.target !== document.body && e.target !== null) {
      this._enableKeyboardNavigation = contains(this.el, e.target);
    }
  }

  /**
   * Handles key down event
   */
  _onKeyDown(e: KeyboardEvent) {
    if (!this._enableKeyboardNavigation || !contains(this.el, e.target as HTMLElement)) {
      return;
    }

    const keyHandler = {
      ArrowLeft: this._focusSiblingDay.bind(this, -1),
      ArrowRight: this._focusSiblingDay.bind(this, 1),
      ArrowUp: this._focusSiblingWeek.bind(this, -1),
      ArrowDown: this._focusSiblingWeek.bind(this, 1),
      Tab: this._handleTab.bind(this, e),
      Enter: this._handleEnter.bind(this, e),
      Escape: this._handleEscape.bind(this),
    }[e.key];

    const disableArrowHandler = e.key.startsWith('Arrow') && !this._isTargetCalendarDay(e);
    if (!keyHandler || disableArrowHandler || !contains(this.el, e.target as HTMLElement)) {
      return;
    }

    e.stopPropagation();
    e.preventDefault();
    keyHandler();
  }

  /**
   * Checks wether the keyboard event target belongs to a calendar day
   */
  _isTargetCalendarDay(e: KeyboardEvent) {
    return (e.target as HTMLElement).classList.contains(DATEPICKER_CLASSES.DAY);
  }

  /**
   * Focus a sibling day of the calendar, either +1 or -1
   * Changes month if necessary.
   */
  _focusSiblingDay(dayDiff: number) {
    const dayToFocus = this._getAvailableSiblingDay(dayDiff);

    if (dayToFocus) {
      this._focusCalendarDay(dayToFocus);
      return;
    }

    const shouldMoveMonth = this._isDayInRange(dayjs(this._keyboardFocusedDate).add(dayDiff, 'day'));
    if (shouldMoveMonth) {
      this._afterRenderHandler = () => this._focusCalendarDay(this._getFirstOrLastAvailableDate(dayDiff > 0));

      this._moveMonth(dayDiff > 0);
    }
  }

  /**
   * Checks wether the given date is between min and max
   */
  _isDayInRange(date: Dayjs) {
    return date.isBetween(this.min, this.max, 'day', '[]');
  }

  /**
   * Changes month in chi date component
   */
  _moveMonth(next = false) {
    if (next) {
      this.nextMonth();
    } else {
      this.prevMonth();
    }
  }

  _focusSiblingWeek(weekDif: number) {
    const currentDate = dayjs(this._keyboardFocusedDate);
    const nextDate = currentDate.add(weekDif, 'week');

    if (!this._isDayInRange(nextDate)) {
      return;
    }

    const nextDateFormatted = nextDate.format(this.format);
    const nextAvailableDate = this._getFocusableDays()
      .find((i) => dayjs(i.getAttribute('data-date'))[weekDif > 0 ? 'isAfter' : 'isBefore'](nextDate))
      ?.getAttribute('data-date');

    const dayToFocus = this._getValidDayElement(nextDateFormatted) ? nextDateFormatted : nextAvailableDate;

    if (dayToFocus) {
      this._focusCalendarDay(dayToFocus);
    } else {
      this._afterRenderHandler = () => {
        const validDate = this._getValidDayElement(nextDateFormatted)
          ? nextDateFormatted
          : this._getFirstOrLastAvailableDate(weekDif > 0);

        this._focusCalendarDay(validDate);
      };
      this._moveMonth(weekDif > 0);
    }
  }

  _getFirstOrLastAvailableDate(first) {
    const days = this._getFocusableDays();
    const day = first ? days[0] : days.pop();

    return day?.getAttribute('data-date');
  }

  /**
   * Gets the N previous or N next available day
   */
  _getAvailableSiblingDay(dayDiff: number) {
    const availableDays = this._getFocusableDays().map((i) => i.getAttribute('data-date'));
    const currentFocusIndex = availableDays.indexOf(this._keyboardFocusedDate);

    return availableDays[currentFocusIndex + dayDiff];
  }

  /**
   * Gets the valid day element
   */
  _getValidDayElement(date: string) {
    return this.el.querySelector(
      `.${DATEPICKER_CLASSES.DAY}[data-date="${date}"]:not(.${INACTIVE_CLASS})`
    ) as HTMLElement;
  }

  /**
   * Focuses the given calendar day if available and stores the date in _keyboardFocusedDate.
   *
   */
  _focusCalendarDay(date: string = this._keyboardFocusedDate) {
    const element = this._getValidDayElement(date);
    if (!element) {
      return;
    }

    element.tabIndex = 0;
    element.focus();

    const currentElement = this._getValidDayElement(this._keyboardFocusedDate);
    if (currentElement && currentElement !== element) {
      currentElement.tabIndex = -1;
    }

    this._keyboardFocusedDate = date;
  }

  /**
   * Gets all the day elements of the calendar that are valid date to select
   */
  _getFocusableDays() {
    const availableDays = this.el.querySelectorAll(`.${DATEPICKER_CLASSES.DAY}:not(.${INACTIVE_CLASS})`);
    return Array.from(availableDays);
  }

  /**
   * Handles tab key to keep focus on the enabled elements of date picker:
   * prev month, next month and calendar day.
   */
  _handleTab(e: KeyboardEvent) {
    if (!this._enableKeyboardNavigation) {
      return;
    }

    let tabElements = [
      this.el.querySelector(
        `.${DATEPICKER_CLASSES.MONTH_ROW} .${DATEPICKER_CLASSES.PREV_MONTH}:not(.${DISABLED_CLASS})`
      ),
      this.el.querySelector(
        `.${DATEPICKER_CLASSES.MONTH_ROW} .${DATEPICKER_CLASSES.NEXT_MONTH}:not(.${DISABLED_CLASS})`
      ),
      this._getValidDayElement(this._keyboardFocusedDate) ||
        this._getValidDayElement(this._getFirstOrLastAvailableDate(true)),
    ];
    tabElements = [...tabElements, ...tabElements].filter(Boolean);

    const nextElement = e.shiftKey
      ? tabElements[tabElements.lastIndexOf(e.target as Element) - 1]
      : tabElements[tabElements.indexOf(e.target as Element) + 1];

    if (nextElement.classList.contains(DATEPICKER_CLASSES.DAY)) {
      this._focusCalendarDay(nextElement.getAttribute('data-date'));
    } else {
      (nextElement as HTMLElement).focus();
    }
  }

  _handleEnter(e: KeyboardEvent) {
    const isPrevMonth =
      e.target === this.el.querySelector(`.${DATEPICKER_CLASSES.MONTH_ROW} .${DATEPICKER_CLASSES.PREV_MONTH}`);
    const isNextMonth =
      e.target === this.el.querySelector(`.${DATEPICKER_CLASSES.MONTH_ROW} .${DATEPICKER_CLASSES.NEXT_MONTH}`);
    const isDay = e.target === this._getValidDayElement(this._keyboardFocusedDate);

    if (isDay) {
      this._handleSelectDate(dayjs(this._keyboardFocusedDate));
      return;
    }

    if (isPrevMonth || isNextMonth) {
      const nextFocusedDate = dayjs(this._keyboardFocusedDate)
        .add(isPrevMonth ? -1 : 1, 'month')
        .format(this.format);

      this._afterRenderHandler = () => {
        this._keyboardFocusedDate = this._getValidDayElement(nextFocusedDate)
          ? nextFocusedDate
          : this._getFirstOrLastAvailableDate(isNextMonth);
      };
      this._moveMonth(isNextMonth);
    }
  }

  _handleEscape() {
    this._enableKeyboardNavigation = false;
    this._getValidDayElement(this._keyboardFocusedDate).tabIndex = 0;
  }

  _handleSelectDate(day: Dayjs) {
    if (this.multiple && Array.from(this._vm.dates).some((vmDay) => day.isSame(vmDay, 'day'))) {
      return this.removeDate(day);
    }

    return this.selectDate(day);
  }

  addDate(date) {
    if (this.multiple) this.value = `${this.value ? this.value + ',' : ''}${date}`;
  }

  removeDate(day: Dayjs) {
    const formattedDate = this.toDayString(day);
    const currentValues = Array.from(this.value.split(','));

    this.value = currentValues.filter((value) => value !== formattedDate).join(',');
    this.eventChange.emit(this.value);
  }

  selectDate(day: Dayjs) {
    const formattedDate = this.toDayString(day);

    if (this.multiple) {
      this.addDate(formattedDate);
    } else {
      this.setDate(formattedDate);
    }
    this.eventChange.emit(this.value);
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

  render() {
    const endOfLastMonth = this.viewMonth.subtract(1, 'month').endOf('month');
    const startOfNextMonth = this.viewMonth.add(1, 'month').startOf('month');
    const prevMonthDisabled = this._vm.min && endOfLastMonth.isBefore(this._vm.min);
    const nextMonthDisabled = this._vm.max && startOfNextMonth.isAfter(this._vm.max);

    return (
      <div class={`${DATEPICKER_CLASSES.DATEPICKER} ${this._vm.weekStartClass} ${this._vm.monthStartClass}`}>
        <div class={`${DATEPICKER_CLASSES.MONTH_ROW}`}>
          <div
            class={`${DATEPICKER_CLASSES.PREV_MONTH} ${prevMonthDisabled ? CLASSES.DISABLED : ''}`}
            tabindex="0"
            onClick={() => this.prevMonth()}
          >
            <chi-icon icon="chevron-left" size="sm" />
          </div>
          <div class={`${DATEPICKER_CLASSES.MONTH}`}>
            {`${this.viewMonth.format('MMMM')}
              ${this.viewMonth.format('YYYY')}`}
          </div>
          <div
            class={`${DATEPICKER_CLASSES.NEXT_MONTH} ${nextMonthDisabled ? CLASSES.DISABLED : ''}`}
            tabindex={!nextMonthDisabled ? '0' : ''}
            onClick={() => this.nextMonth()}
          >
            <chi-icon icon="chevron-right" size="sm" />
          </div>
        </div>
        <div class={`${DATEPICKER_CLASSES.DAY_NAMES}`}>
          {this._vm.weekDays.map((weekDay) => (
            <div class={`${DATEPICKER_CLASSES.WEEK_DAY}`} key={weekDay.format('dddd')}>
              {weekDay.format('dddd').substr(0, 1)}
            </div>
          ))}
        </div>
        <div class={`${DATEPICKER_CLASSES.DAYS}`}>
          {this._vm.monthDays.map((day) => {
            const isExcludedDay = this.checkIfExcluded(day);

            return (
              <div
                key={day.format(this.format)}
                class={`${DATEPICKER_CLASSES.DAY}
                ${
                  (this._vm.min && day.isBefore(this._vm.min)) ||
                  (this._vm.max && day.isAfter(this._vm.max)) ||
                  isExcludedDay
                    ? CLASSES.INACTIVE
                    : ''
                }
                ${Array.from(this._vm.dates).some((vmDay) => day.isSame(vmDay, 'day')) ? CLASSES.ACTIVE : ''}
                ${day.isSame(dayjs(), 'day') ? CLASSES.TODAY : ''}
              `}
                data-date={this.toDayString(day)}
                onClick={() => this._handleSelectDate(day)}
              >
                {day.date()}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

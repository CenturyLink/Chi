import {
  Component,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  Watch,
  h
} from '@stencil/core';
import dayjs, { Dayjs } from 'dayjs';
import { CLASSES, DataLocales, DateFormats } from '../../constants/constants';
import 'dayjs/locale/es';
import 'dayjs/locale/pt';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
import 'dayjs/locale/ja';
import 'dayjs/locale/zh';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const WEEK_CLASS_PART = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

@Component({
  tag: 'chi-date',
  styleUrl: 'date.scss',
  scoped: true
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

  @Watch('value')
  dateChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue && (newValue || oldValue)) {
      if (newValue) {
        if (this.multiple) {
          this._vm.dates = this.value ?
            this.value.split(',').map(valueDay => this.fromString(valueDay)) : [];
        } else {
          this._vm.dates = [this.fromString(this.value)];
        }

        if (this._vm.dates.length > 0) {
          Array.from(this._vm.dates).forEach(date => {
            if (!date.isValid()) {
              throw new Error(`Date ${newValue} has an invalid format. `);
            }
          });
        }
        this.viewMonth = this._vm.dates[this._vm.dates.length - 1];
      } else {
        this._initCalendarViewModel();
        this._initViewMonth();
        this._updateViewMonth();
      }
    }
  }

  @Watch('locale')
  localeChanged() {
    this._initCalendarViewModel();
  }

  @Watch('viewMonth')
  viewMonthChanged(newValue: Dayjs, oldValue: Dayjs) {
    if (
      newValue.month() !== oldValue.month() ||
      newValue.year() !== oldValue.year()
    ) {
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
  @Event({ eventName: 'chiDateChange' }) eventChange: EventEmitter;

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

  private _initViewMonth():void {
    if (this.multiple && this.value) {
      const valueDates = this.value.replace(/ /g, '')
        .split(',');
      const date = valueDates[valueDates.length - 1];

      this.viewMonth = date ? this.fromString(date) : dayjs();
    } else {
      this.viewMonth = this.value ? this.fromString(this.value) : dayjs();
    }
  };

  private _initCalendarViewModel(): void {
    dayjs.locale(this.locale);
    dayjs.extend(customParseFormat);

    const week: Dayjs[] = [];
    const startOfWeek = dayjs().startOf('week');
    for (let i = 0; i < 7; i++) {
      week.push(startOfWeek.add(i, 'day'));
    }

    this._vm = {
      dates: this.value ?
        this.multiple ? this.value.replace(/ /g, '')
          .split(',').map(valueDay => {
          return this.fromString(valueDay)
          }) : [this.fromString(this.value)] : [],
      today: dayjs(),
      weekStartClass:
        dayjs()
          .startOf('week')
          .day() === 1
          ? '-week-starts-on-mon'
          : '-week-starts-on-sun',
      monthStartClass: '',
      weekDays: week,
      monthDays: [],
      min: this.fromString(this.min),
      max: this.fromString(this.max)
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
    for (
      let day = this.viewMonth.startOf('month');
      day.isBefore(lastDay);
      day = day.add(1, 'day')
    ) {
      month.push(day);
    }
    this._vm.monthDays = month;

    this._vm.monthStartClass = `-month-starts-on-${
      WEEK_CLASS_PART[this.viewMonth.set('date', 1).day()]
    }`;
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

  addDate(date) {
    if (this.multiple) this.value = `${this.value ? this.value + ',' : ''}${date}`;
  }

  removeDate(day: Dayjs) {
    const formattedDate = this.toDayString(day);
    const currentValues = Array.from(this.value.split(','));

    this.value = currentValues.filter(value => value !== formattedDate).join(',');
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

    return (
      <div
        class={`chi-datepicker ${this._vm.weekStartClass} ${
          this._vm.monthStartClass
        }`}
      >
        <div class="chi-datepicker__month-row">
          <div
            class={`prev ${
              this._vm.min && endOfLastMonth.isBefore(this._vm.min)
                ? CLASSES.DISABLED
                : ''
            }`}
            onClick={() => this.prevMonth()}
          >
            <chi-icon icon="chevron-left" size="sm" />
          </div>
          <div class="chi-datepicker__month">
            {`${this.viewMonth.format('MMMM')}
              ${this.viewMonth.format('YYYY')}`}
          </div>
          <div
            class={`next ${
              this._vm.max && startOfNextMonth.isAfter(this._vm.max)
                ? CLASSES.DISABLED
                : ''
            }`}
            onClick={() => this.nextMonth()}
          >
            <chi-icon icon="chevron-right" size="sm" />
          </div>
        </div>
        <div class="chi-datepicker__day-names">
          {this._vm.weekDays.map(weekDay => (
            <div class="chi-datepicker__week-day">
              {weekDay.format('dddd').substr(0, 1)}
            </div>
          ))}
        </div>
        <div class="chi-datepicker__days">
          {this._vm.monthDays.map(day => (
            <div
              class={`chi-datepicker__day
              ${
                (this._vm.min && day.isBefore(this._vm.min)) ||
                (this._vm.max && day.isAfter(this._vm.max)) ||
                (this.checkIfExcluded(day))
                  ? CLASSES.INACTIVE
                  : ''
              }
              ${Array.from(this._vm.dates).some(vmDay => day.isSame(vmDay, 'day')) ? CLASSES.ACTIVE : ''}
              ${day.isSame(dayjs(), 'day') ? CLASSES.TODAY : ''}
            `}
              data-date={this.toDayString(day)}
              onClick={() => {
                if (this.multiple &&
                  Array.from(this._vm.dates).some(vmDay => day.isSame(vmDay, 'day'))) {
                  return this.removeDate(day);
                }

                return this.selectDate(day)}
              }
            >
              {day.date()}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

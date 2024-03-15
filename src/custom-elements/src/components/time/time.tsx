import { Component, Event, EventEmitter, Prop, h, Element } from '@stencil/core';
import { TIME_CLASSES, ACTIVE_CLASS, DISABLED_CLASS, UTILITY_CLASSES } from '../../constants/classes';
import {
  CHI_TIME_SCROLL_ADJUSTMENT,
  TimePickerFormats,
  TimePickerTimeSteps,
  TIME_PICKER_TIME_STEPS,
} from '../../constants/constants';

@Component({
  tag: 'chi-time',
  styleUrl: 'time.scss',
  scoped: true,
})
export class Time {
  /**
   * Selected time in the time picker
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * Displaying seconds column
   */
  @Prop({ reflect: true }) displaySeconds = false;

  /**
   * To render Time Picker in 24 hours format
   */
  @Prop({ reflect: true }) format: TimePickerFormats = '12hr';

  /**
   * @deprecated Use minutesStep and secondsStep instead.
   * To render Minutes and Seconds columns in 15 min and 10 second steps.
   */
  @Prop({ reflect: true }) stepped?: boolean;

  /**
   * Renders minutes in stepped format. Defaults to 15 min steps if no value
   * is provided (see examples in docs).
   */
  @Prop({ reflect: true }) minutesStep?: TimePickerTimeSteps;

  /**
   * Renders seconds in stepped format. Defaults to 10 seconds if
   * no value is provided (see examples in docs).
   */
  @Prop({ reflect: true }) secondsStep?: TimePickerTimeSteps;

  /**
   *  To disable specific hours
   */
  @Prop({ reflect: true }) _excludedHours?: string;

  /**
   *  To disable specific minutes
   */
  @Prop({ reflect: true }) _excludedMinutes?: string;

  /**
   *  To disable specific seconds
   */
  @Prop({ reflect: true }) _excludedSeconds?: string;

  @Element() el: HTMLElement;

  _hour: string;
  _minute: string;
  _second: string;
  _period: string;

  excludedHoursArray = [];
  excludedMinutesArray = [];
  excludedSecondsArray = [];

  private minutesToDisplay = [];
  private secondsToDisplay = [];

  /**
   * Time change value event
   */
  @Event({ eventName: 'chiTimeChange' }) eventChange: EventEmitter;

  componentWillLoad() {
    this.updateTimeSteps();
    this.validateTimeSteps();
    this.selectTimeAndPeriod();
    this.updateExcluded();

    this.updateValue();
  }

  validateTimeSteps() {
    if (this.minutesStep && !TIME_PICKER_TIME_STEPS.includes(this.minutesStep)) {
      throw new Error(`Property minutes-step is invalid. Must be one of ${TIME_PICKER_TIME_STEPS.join(',')}`);
    }
    if (this.secondsStep && !TIME_PICKER_TIME_STEPS.includes(this.secondsStep)) {
      throw new Error(`Property seconds-step is invalid. Must be one of ${TIME_PICKER_TIME_STEPS.join(',')}`);
    }
  }

  /**
   * @returns array with integers from 0 to 59 in step intervals.
   */
  timeRange(step = 1) {
    return Array.from({ length: 59 / step + 1 }, (_, index) => index * step);
  }

  updateExcluded() {
    const getValues = (list = '') => list.split(',').map((i) => i.trim());

    this.excludedHoursArray = getValues(this._excludedHours);
    this.excludedMinutesArray = getValues(this._excludedMinutes);
    this.excludedSecondsArray = getValues(this._excludedSeconds);
  }

  updateTimeSteps() {
    if (this.stepped || Number.isNaN(this.minutesStep)) {
      this.minutesStep = 15;
    }
    if (this.stepped || Number.isNaN(this.secondsStep)) {
      this.secondsStep = 10;
    }

    this.minutesToDisplay = this.timeRange(this.minutesStep);
    this.secondsToDisplay = this.timeRange(this.secondsStep);
  }

  /**
   * Validates property 'value'
   *
   */
  validateTime(time: string) {
    const isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?\s*([AaPp][Mm])?$/.test(time);

    if (!isValid) {
      throw new Error('Provided "value" is not valid. Provide a value in the form hh:mm:ss');
    }

    return isValid;
  }

  formatTimePeriod(period: number | string) {
    return String(period).padStart(2, '0');
  }

  updateValue() {
    const newValue = [this._hour, this._minute, this._second].join(':');

    if (newValue !== this.value) {
      this.value = newValue;
      this.emitTimeValueEvent();
    }
  }

  /**
   * Selects hour minute and second properties from
   * this.value or current time.
   */
  selectTimeAndPeriod() {
    let time = new Date();

    if (this.value && this.validateTime(this.value)) {
      const [hourMinSec, period] = this.value.trim().split(' ');
      const [hours, minutes, seconds] = hourMinSec.split(':').map((i) => parseInt(i));

      time.setHours(hours, minutes, seconds || 0);
      if (period) {
        this._period = period.toLocaleLowerCase();
      }
    }

    const [hours, minutes, seconds] = this.getRoundedTime(time);

    if (!this._period) {
      this._period = this.format === '12hr' && parseInt(hours) < 12 ? 'am' : 'pm';
    }
    this._hour = hours;
    this._minute = minutes;
    this._second = seconds;
  }

  /**
   * Rounds current time to the defined minutes and second steps.
   */
  getRoundedTime(time: Date) {
    const minutesCoeff = 1000 * 60 * this.minutesStep;
    const secondsCoeff = 1000 * this.secondsStep;

    if (!this.minutesToDisplay.includes(time.getMinutes())) {
      time = new Date(Math.ceil(time.getTime() / minutesCoeff) * minutesCoeff);
    } else if (!this.secondsToDisplay.includes(time.getSeconds())) {
      time = new Date(Math.ceil(time.getTime() / secondsCoeff) * secondsCoeff);
    }

    return [time.getHours(), time.getMinutes(), time.getSeconds()].map(this.formatTimePeriod);
  }

  hours() {
    const hourFormat = this.format === '24hr' ? 24 : 12;
    const startHour = this.format === '24hr' ? '00' : '12';
    let hourToSet: string;
    const setHour = (hour: string) => {
      if (this.format === '24hr') {
        if (hour === '24') {
          hourToSet = '00';
        } else {
          hourToSet = hour;
        }
      } else {
        if (hour === '12') {
          if (this._period === 'am') {
            hourToSet = '12';
          } else {
            hourToSet = hour;
          }
        } else {
          if (this._period === 'pm') {
            hourToSet = String(parseInt(hour) + 12);
          } else {
            hourToSet = hour;
          }
        }
      }

      this._hour = hourToSet;
      this.value = `${hourToSet}:${this._minute}:${this._second}`;
      this.emitTimeValueEvent();
    };
    const hourStatus = (hour: string) => {
      const valueHour = parseInt(this.value.split(':')[0]);
      let hourStatus = '';

      if (
        this._hour === hour ||
        (!(this.format === '24hr') && this._period === 'pm' && parseInt(hour) + 12 === parseInt(this._hour)) ||
        (this._period === 'am' && parseInt(hour) === 12 && valueHour === 0)
      ) {
        hourStatus = ACTIVE_CLASS;
      } else {
        if (
          this.excludedHoursArray.includes(this.formatTimePeriod(parseInt(hour))) ||
          this.excludedHoursArray.includes(this.formatTimePeriod(parseInt(hour) + 12))
        ) {
          hourStatus = DISABLED_CLASS;
        }
      }

      return hourStatus;
    };

    const hoursToDisplay = [
      <div
        data-hour={startHour}
        class={`
        ${TIME_CLASSES.HOUR}
        ${hourStatus(startHour)}
        `}
        onClick={() => setHour(String(hourFormat))}
      >
        {startHour}
      </div>,
    ];

    Array.from(Array(hourFormat), (_, i) => {
      const hour = this.formatTimePeriod(i);

      if (i > 0) {
        hoursToDisplay.push(
          <div
            data-hour={hour}
            class={`
            ${TIME_CLASSES.HOUR}
            ${hourStatus(hour)}
          `}
            onClick={() => setHour(hour)}
          >
            {hour}
          </div>
        );
      }
    });

    return <div class={`${TIME_CLASSES.HOURS} ${UTILITY_CLASSES.POSITION.RELATIVE}`}>{hoursToDisplay}</div>;
  }

  /**
   * Calculates class to apply, active or disabled
   * @param value value to check what class to apply
   * @param activeValue value to apply active class
   * @param excludedValues array of excluded values
   */
  getStateClass(value: string, activeValue: string, excludedValues: string[]) {
    let minuteState = '';

    if (parseInt(activeValue) === parseInt(value)) {
      minuteState = ACTIVE_CLASS;
    } else if (excludedValues.includes(value)) {
      minuteState = DISABLED_CLASS;
    }

    return minuteState;
  }

  /**
   * Generates minute element to show
   * @param minute
   * @returns
   */
  getMinuteElement(minute: string) {
    return (
      <div
        class={`
        ${TIME_CLASSES.MINUTE}
        ${this.getStateClass(minute, this._minute, this.excludedMinutesArray)}
      `}
        onClick={() => {
          this._minute = minute;
          this.updateValue();
        }}
      >
        {minute}
      </div>
    );
  }

  minutes() {
    return (
      <div class={`${TIME_CLASSES.MINUTES} ${UTILITY_CLASSES.POSITION.RELATIVE}`}>
        {this.minutesToDisplay.map((minute) => this.getMinuteElement(this.formatTimePeriod(minute)))}
      </div>
    );
  }

  getSecondsElement(second: string) {
    return (
      <div
        class={`
          ${TIME_CLASSES.SECOND}
          ${this.getStateClass(second, this._second, this.excludedSecondsArray)}
        `}
        onClick={() => {
          this._second = second;
          this.updateValue();
        }}
      >
        {second}
      </div>
    );
  }

  seconds() {
    return this.displaySeconds ? (
      <div class={`${TIME_CLASSES.SECONDS} ${UTILITY_CLASSES.POSITION.RELATIVE}`}>
        {this.secondsToDisplay.map((second) => this.getSecondsElement(this.formatTimePeriod(second)))}
      </div>
    ) : undefined;
  }

  periods() {
    const hour = parseInt(this.value.split(':')[0]);
    if (this.format === '12hr') {
      const periodClasses = (period: 'am' | 'pm') => {
        let periodStatus = TIME_CLASSES.PERIOD;

        if (period === this._period) {
          periodStatus += ` ${ACTIVE_CLASS}`;
        }

        return periodStatus;
      };

      const setPeriod = (period: string) => {
        this._period = period;
        let currentHour = hour;

        if (period === 'am') {
          if (currentHour > 12) {
            currentHour = currentHour - 12;
          }
          if (currentHour === 12) {
            currentHour = 12;
          }
        } else if (period === 'pm') {
          if (currentHour < 12) {
            currentHour = currentHour + 12;
          }
          if (currentHour === 12) {
            currentHour = 12;
          }
        }

        this.value = `${currentHour}:${this._minute}:${this._second}`;
        this._hour = this.formatTimePeriod(currentHour);
        this.emitTimeValueEvent();
      };

      return (
        <div class={TIME_CLASSES.PERIODS}>
          <div class={periodClasses('am')} onClick={() => setPeriod('am')}>
            AM
          </div>
          <div class={periodClasses('pm')} onClick={() => setPeriod('pm')}>
            PM
          </div>
        </div>
      );
    }
    return;
  }

  emitTimeValueEvent() {
    this.eventChange.emit({
      hour: this._hour,
      minute: this._minute,
      second: this._second,
      period: this._period,
      value: this.value,
    });
  }

  componentDidLoad() {
    const hoursColumn = this.el.querySelector(`.${TIME_CLASSES.HOURS}`) as HTMLElement,
      minutesColumn = this.el.querySelector(`.${TIME_CLASSES.MINUTES}`) as HTMLElement,
      secondsColumn = this.el.querySelector(`.${TIME_CLASSES.SECONDS}`) as HTMLElement;

    if (hoursColumn) {
      const activeHour = hoursColumn.querySelector(`.${TIME_CLASSES.HOUR}.${ACTIVE_CLASS}`) as HTMLElement;

      if (activeHour) {
        hoursColumn.scrollTop = activeHour.offsetTop - CHI_TIME_SCROLL_ADJUSTMENT;
      }
    }
    if (minutesColumn) {
      const activeMinute = minutesColumn.querySelector(`.${TIME_CLASSES.MINUTE}.${ACTIVE_CLASS}`) as HTMLElement;

      if (activeMinute) {
        minutesColumn.scrollTop = activeMinute.offsetTop - CHI_TIME_SCROLL_ADJUSTMENT;
      }
    }
    if (secondsColumn) {
      const activeSecond = secondsColumn.querySelector(`.${TIME_CLASSES.SECOND}.${ACTIVE_CLASS}`) as HTMLElement;

      if (activeSecond) {
        secondsColumn.scrollTop = activeSecond.offsetTop - CHI_TIME_SCROLL_ADJUSTMENT;
      }
    }
  }

  render() {
    const hours = this.hours(),
      minutes = this.minutes(),
      seconds = this.seconds(),
      periods = this.periods();

    return (
      <div class={TIME_CLASSES.TIME}>
        <div class={TIME_CLASSES.CONTENT}>
          {hours}
          {minutes}
          {seconds}
          {periods}
        </div>
      </div>
    );
  }
}

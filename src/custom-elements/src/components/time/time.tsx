import {
  Component,
  Event,
  EventEmitter,
  Prop,
  Watch,
  h, Element
} from '@stencil/core';
import { TIME_CLASSES } from '../../constants/classes';

@Component({
  tag: 'chi-time',
  styleUrl: 'time.scss',
  scoped: true
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
  @Prop({ reflect: true }) extended = false;

  /**
   * To render Minutes and Seconds columns in stepped format
   */
  @Prop({ reflect: true }) stepped: boolean;

  /**
   *  To disable specific hours
   */
  @Prop({ reflect: true }) excludedHours: string;

  /**
   *  To disable specific minutes
   */
  @Prop({ reflect: true }) excludedMinutes: string;

  /**
   *  To disable specific seconds
   */
  @Prop({ reflect: true }) excludedSeconds: string;

  @Element() el: HTMLElement;

  _hour: string;
  _minute: string;
  _second: string;
  _period: string;

  excludedHoursArray = [];
  excludedMinutesArray = [];
  excludedSecondsArray = [];

  @Watch('excluded-hours')
  updateExcludedHours() {
    if (this.excludedHours) {
      this.excludedHours.split(',').map(time => {
        this.excludedHoursArray.push(time.trim());
      });
    }
  }

  @Watch('excluded-minutes')
  updateExcludedMinutes() {
    if (this.excludedMinutes) {
      this.excludedMinutes.split(',').map(time => {
        this.excludedMinutesArray.push(time.trim());
      });
    }
  }

  @Watch('excluded-seconds')
  updateExcludedSeconds() {
    if (this.excludedSeconds) {
      this.excludedSeconds.split(',').map(time => {
        this.excludedSecondsArray.push(time.trim());
      });
    }
  }

  @Watch('value')
  timeChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.value = newValue;
    }
  }

  // ToDo Validate Value
  // validateTime(time: string) {
  //   return /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time);
  // }

  /**
   * Time change value event
   */
  @Event({ eventName: 'chiTimeChange' }) eventChange: EventEmitter;

  calculateTimePeriods() {
    const currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds();

    if (!this.value) {
      this.value = `${this.formatTimePeriod(hours)}:${this.formatTimePeriod(minutes)}:${this.formatTimePeriod(seconds)}`;
    }

    const time = this.value.split(':');

    this._hour = time[0];
    this._minute = time[1];
    this._second = time[2] ? time[2] : '00';
    this._period = !this.extended && parseInt(this._hour) < 12 ? 'am' : 'pm';
  }

  connectedCallback() {
    this.calculateTimePeriods();
    this.updateExcludedHours();
    this.updateExcludedMinutes();
    this.updateExcludedSeconds();
  }

  formatTimePeriod(period: number) {
    return period.toString().length > 1 ? period.toString() : `0${period}`;
  };

  hours() {
    const startHour = this.extended ? 24 : 12;
    let hourToSet: string;
    const setHour = (hour: string) => {
      if (this.extended) {
        if (hour === '24') {
          hourToSet = '00';
        } else {
          hourToSet = hour;
        }
      } else {
        if (hour === '12') {
          if (this._period === 'am') {
            hourToSet = '00';
          } else {
            hourToSet = hour;
          }
        } else {
          if (this._period === 'pm') {
            hourToSet = (parseInt(hour) + 12).toString();
          } else {
            hourToSet = hour;
          }
        }
      }

      this._hour = hour;
      this.value = `${hourToSet}:${this._minute}:${this._second}`;
      this.emitTimeValueEvent();
    };
    const hourStatus = (hour: string) => {
      const valueHour = parseInt(this.value.split(':')[0]);
      let hourStatus = '';

      if (this._hour === hour ||
        (!this.extended &&
          this._period === 'pm' &&
          parseInt(hour) + 12 === valueHour
        ) ||
        (parseInt(hour) === 12 && valueHour === 0)
      ) {
        hourStatus = '-active';
      } else {
        if (this.excludedHoursArray.includes(this.formatTimePeriod(parseInt(hour)))) {
          hourStatus += ' -disabled';
        }
      }

      return hourStatus;
    };

    const hoursToDisplay = [
      <div data-hour={startHour} class={`
        ${TIME_CLASSES.HOUR}
        ${hourStatus(startHour.toString())}
        `}
           onClick={() => setHour(startHour.toString())}>{startHour}</div>
    ];

    Array.from(Array(startHour), (_, i) => {
      const hour = this.formatTimePeriod(i);

      if (i > 0) {
        hoursToDisplay.push(
          <div data-hour={hour} class={`
            ${TIME_CLASSES.HOUR}
            ${hourStatus(hour)}
          `}
            onClick={() => setHour(hour)}>
            {hour}
          </div>
        );
      }
    });

    return (
      <div class={TIME_CLASSES.HOURS}>
        {hoursToDisplay}
      </div>
    );
  }

  minutes() {
    const setMinute = (minute: string) => {
      this._minute = minute;
      this.value = `${this._hour}:${this._minute}:${this._second}`;
      this.emitTimeValueEvent();
    };
    const minuteState = (minute: string) => {
      let minuteState = '';

      if (parseInt(this._minute) === parseInt(minute)) {
        minuteState = '-active';
      } else {
        if (this.excludedMinutesArray.includes(minute)) {
          minuteState += ' -disabled';
        }
      }

      return minuteState;
    };
    const minutesToDisplay = [
      <div class={`
      ${TIME_CLASSES.MINUTE}
      ${minuteState('00')}
      `}
       onClick={() => setMinute('00')}>00</div>
    ];

    Array.from(Array(60), (_, i) => {
      const minute = this.formatTimePeriod(i);
      const displayMinute = () => {
        minutesToDisplay.push(<div class={`
        ${TIME_CLASSES.MINUTE}
        ${minuteState(minute)}
        `}
         onClick={() => setMinute(minute)}>{minute}</div>);
      };

      if (i > 0) {
        if (this.stepped) {
          if (i % 15 === 0) {
            displayMinute();
          }
        } else {
          displayMinute();
        }
      }
    });

    return (
      <div class={TIME_CLASSES.MINUTES}>{
        minutesToDisplay
      }</div>
    );
  }

  seconds() {
    const setSecond = (second: string) => {
      this._second = second;
      this.value = `${this._hour}:${this._minute}:${this._second}`;
      this.emitTimeValueEvent();
    };
    const secondsState = (second: string) => {
      let secondState = '';

      if (parseInt(this._second) === parseInt(second)) {
        secondState = '-active';
      } else {
        if (this.excludedMinutesArray.includes(second)) {
          secondState += ' -disabled';
        }
      }

      return secondState;
    };
    const secondsToDisplay = [
      <div class={`
        ${TIME_CLASSES.SECOND}
        ${secondsState('00')}
        `}
       onClick={() => setSecond('00')}>00</div>
    ];

    Array.from(Array(60), (_, i) => {
      const second = this.formatTimePeriod(i);
      const displaySecond = () => {
        secondsToDisplay.push(<div class={`
          ${TIME_CLASSES.SECOND}
          ${secondsState(second)}
          `}
        onClick={() => setSecond(second)}>{second}</div>);
      };

      if (i > 0) {
        if (this.stepped) {
          if (i % 10 === 0) {
            displaySecond();
          }
        } else {
          displaySecond();
        }
      }
    });

    if (this.displaySeconds) {
      return (
        <div class={TIME_CLASSES.SECONDS}>{
          secondsToDisplay
        }</div>
      );
    }
    return;
  }

  periods() {
    const hour = parseInt(this.value.split(':')[0]);
    if (!this.extended) {
      const periodClasses = (period: 'am' | 'pm') => {
        let periodStatus = TIME_CLASSES.PERIOD;

        if (period === this._period) {
          periodStatus += ' -active';
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
            currentHour = 0;
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
        this.emitTimeValueEvent();
      };

      return (
        <div class={TIME_CLASSES.PERIODS}>
          <div
            class={periodClasses('am')}
            onClick={() => setPeriod('am')}>AM
          </div>
          <div
            class={periodClasses('pm')}
            onClick={() => setPeriod('pm')}>PM
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
      value: this.value
    });
  }

  componentDidLoad() {
    const hoursColumn = this.el.querySelector(`.${TIME_CLASSES.HOURS}`) as HTMLElement,
      minutesColumn = this.el.querySelector(`.${TIME_CLASSES.MINUTES}`) as HTMLElement,
      secondsColumn = this.el.querySelector(`.${TIME_CLASSES.SECONDS}`) as HTMLElement;

    if (hoursColumn) {
      const activeHour = hoursColumn.querySelector(`.${TIME_CLASSES.HOUR}.-active`) as HTMLElement;

      if (activeHour) {
        hoursColumn.scrollTop = activeHour.offsetTop - 28;
      }
    }
    if (minutesColumn) {
      const activeMinute = minutesColumn.querySelector(`.${TIME_CLASSES.MINUTE}.-active`) as HTMLElement;

      if (activeMinute) {
        minutesColumn.scrollTop = activeMinute.offsetTop - 28;
      }
    }
    if (secondsColumn) {
      const activeSecond = secondsColumn.querySelector(`.${TIME_CLASSES.SECOND}.-active`) as HTMLElement;

      if (activeSecond) {
        secondsColumn.scrollTop = activeSecond.offsetTop - 28;
      }
    }
  }

  render() {
    const hours = this.hours(),
      minutes = this.minutes(),
      seconds = this.seconds(),
      periods = this.periods();

    return (
      <div
        class={TIME_CLASSES.TIME}
      >
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

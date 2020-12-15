import {
  Component,
  Event,
  EventEmitter,
  Method,
  Prop,
  Watch,
  h
} from '@stencil/core';

const TIME_CLASSES = {
  TIME: 'chi-time-picker',
  CONTENT: 'chi-time-picker__content',
  HOURS: 'chi-time-picker__hours',
  HOUR: 'chi-time-picker__hour',
  MINUTES: 'chi-time-picker__minutes',
  MINUTE: 'chi-time-picker__minute',
  SECONDS: 'chi-time-picker__seconds',
  SECOND: 'chi-time-picker__second',
  PERIODS: 'chi-time-picker__periods',
  PERIOD: 'chi-time-picker__period',
};

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
   * Minimum eligible time
   */
  @Prop({ reflect: true }) min: string;

  /**
   * Maximum eligible time
   */
  @Prop({ reflect: true }) max: string;

  /**
   * Seconds
   */
  @Prop({ reflect: true }) displaySeconds = false;

  /**
   * To specify which days of week to disable
   */
  @Prop({ reflect: true }) excludedWeekdays: string;

  /**
   * To render Time Picker in 24 hours format
   */
  @Prop({ reflect: true }) extended = false;

  /**
   * Steps
   */
  @Prop({ reflect: true }) stepped: boolean;

  _hour: string;
  _minute: string;
  _second: string;
  _period: string;

  excludedTimesArray = [];

  @Watch('excludedDates')
  updateExcludedHours() {
  }

  @Watch('value')
  timeChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.calculateTimePeriods();
      this.value = newValue;
    }
  }

  // @Watch('min')
  // minChanged(newValue: string) {
  // }

  // @Watch('max')
  // maxChanged(newValue: string) {
  // }

  /**
   * Sets date
   */
  @Method()
  async setTime(time: string) {
    this.value = time;
  }

  /**
   * Gets date
   */
  @Method()
  getTime() {
    return Promise.resolve(this.value);
  }

  /**
   * Time change value event
   */
  @Event({ eventName: 'chiTimeChange' }) eventChange: EventEmitter;

  calculateTimePeriods() {
    if (!this.value) {
      if (this.min) {
        this.value = this.min;
        this._period = parseInt(this.min.split(':')[0]) < 12 ? 'am' : 'pm';
      } else {
        this.value = '00:00:00';
      }
    }

    const time = this.value.split(':');

    this._hour = time[0];
    this._minute = time[1];
    this._second = time[2] ? time[2] : '00';
    this._period = !this.extended && parseInt(time[0]) < 12 ? 'am' : 'pm';
  }

  connectedCallback() {
    this.calculateTimePeriods();
  }

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
          } else if (this._period === 'pm') {
            hourToSet = hour;
          } else {
            hourToSet = hour;
          }
        } else {
          if (this._period === 'am') {
            hourToSet = hour;
          } else if (this._period === 'pm') {
            hourToSet = (parseInt(hour) + 12).toString();
          } else {
            hourToSet = hour;
          }
        }
      }

      this._hour = hour;
      this.value = `${hourToSet}:${this._minute}:${this._second}`;
    };
    const hourStatus = (hour: string) => {
      let hourStatus = '';

      if (parseInt(this._hour) === parseInt(hour) ||
        (!this.extended &&
          this._period === 'pm' &&
          parseInt(hour) + 12 === parseInt(this.value.split(':')[0])
        ) ||
        (!this.extended &&
          parseInt(hour) + 12 === 24 && parseInt(this.value.split(':')[0]) === 0
        ) ||
        (this.extended &&
          parseInt(hour) === 24 && parseInt(this.value.split(':')[0]) === 0
        )
      ) {
        hourStatus = '-active';
      } else {
        const hourToCompare = this._period === 'pm' ? parseInt(hour) + 12 : parseInt(hour);

        if (this.min) {
          const minHour = this.min ? parseInt(this.min.split(':')[0]) : null;

          if (hourToCompare < minHour) {
            hourStatus += ' -disabled';
          }
        }

        if (this.max) {
          const maxHour = this.max ? parseInt(this.max.split(':')[0]) : null;

          if (hourToCompare > maxHour) {
            hourStatus += ' -disabled';
          }
        }
      }

      return hourStatus;
    };

    const hoursToDisplay = [
      <div class={`
        ${TIME_CLASSES.HOUR}
        ${hourStatus(startHour.toString())}
        `}
        onClick={() => setHour(startHour.toString())}>{startHour}</div>
    ];

    Array.from(Array(startHour), (_, i) => {
      const hour = (i).toString().length > 1 ? (i).toString() : `0${i}`;

      if (i > 0) {
        hoursToDisplay.push(
          <div class={`
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
    const minutesToDisplay = [
      <div class={`
      ${TIME_CLASSES.MINUTE}
      ${this._minute === '00' ? '-active' : ''}
      `}
        onClick={() => setMinute('00')}>00</div>
    ];
    const setMinute = (minute: string) => {
      this._minute = minute;
      this.value = `${this._hour}:${this._minute}:${this._second}`;
    };

    Array.from(Array(60), (_, i) => {
      const minute = (i).toString().length > 1 ? (i).toString() : `0${i}`;
      const displayminute = () => {
        minutesToDisplay.push(<div class={`
        ${TIME_CLASSES.MINUTE}
        ${this._minute === minute ? '-active' : ''}
        `}
          onClick={() => setMinute(minute)}>{minute}</div>);
      };

      if (i > 0) {
        if (this.stepped) {
          if (i % 15 === 0) {
            displayminute();
          }
        } else {
          displayminute();
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
    const secondsToDisplay = [
      <div class={`
      ${TIME_CLASSES.SECOND}
      ${this._second === '00' ? '-active' : ''}
      `}
        onClick={() => setSecond('00')}>00</div>
    ];
    const setSecond = (second: string) => {
      this._second = second;
      this.value = `${this._hour}:${this._minute}:${this._second}`;
    };

    Array.from(Array(60), (_, i) => {
      const second = (i).toString().length > 1 ? (i).toString() : `0${i}`;
      const displaySecond = () => {
        secondsToDisplay.push(<div class={`
        ${TIME_CLASSES.SECOND}
        ${this._second === second ? '-active' : ''}
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
    } return;
  }

  periods() {
    const hour = parseInt(this.value.split(':')[0]);
    if (!this.extended) {
      const periodlasses = (period: 'am' | 'pm') => {
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

        this._hour = currentHour.toString();
        this.value = `${currentHour}:${this._minute}:${this._second}`;
      };

      return (
        <div class={TIME_CLASSES.PERIODS}>
          <div
            class={periodlasses('am')}
            onClick={() => setPeriod('am')}>AM</div>
          <div
            class={periodlasses('pm')}
            onClick={() => setPeriod('pm')}>PM</div>
        </div>
      );
    } return;
  }

  render() {
    const hours = this.hours();
    const minutes = this.minutes();
    const seconds = this.seconds();
    const periods = this.periods();

    console.log(this._period);
    console.log(this.value);

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

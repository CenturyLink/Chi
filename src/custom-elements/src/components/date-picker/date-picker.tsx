import { Component, Element, Listen, Method, Prop } from '@stencil/core';
import { contains, uuid4 } from '../../utils/utils';
import { ESCAPE_KEYCODE } from '../../constants/constants';
import dayjs from 'dayjs';

@Component({
  tag: 'chi-date-picker',
  scoped: true
})
export class DatePicker {
  /**
   * Selected date in the date picker
   */
  @Prop({ reflectToAttr: true, mutable: true }) value: string;

  /**
   * Locale to use in date picker
   */
  @Prop({ reflectToAttr: true }) locale = 'en';

  /**
   * Minimum eligible date
   */
  @Prop({ reflectToAttr: true }) min = '01/01/1900';

  /**
   * Maximum eligible date
   */
  @Prop({ reflectToAttr: true }) max = '12/31/2099';

  /**
   * Date format used in the attributes and how it will be shown to the user.
   */
  @Prop({ reflectToAttr: true }) format = 'MM/DD/YYYY';

  /**
   * Indicates whether the dropdown calendar is open or closed
   */
  @Prop({ reflectToAttr: true, mutable: true }) active = false;

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
      e.target !== null &&
      !e.target.classList.contains('m-datepicker__day')
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

  _checkDate() {
    const inputDate = dayjs(this._input.value);
    const minDate = dayjs(this.min);
    const maxDate = dayjs(this.max);

    if (dayjs(this._input.value).isValid()) {
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
  setDate(date) {
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
    this._onFocusIn = this._onFocusIn.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._uuid = uuid4();
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
    return [
      // TODO: This input should be chi-input in the future and will pass through
      // some of its configuration attributes. Also will have an icon.
      <div class="a-inputWrapper -icon--right">
        <input
          id={`dp-${this._uuid}`}
          class={`a-input
            ${this.active ? '-focus' : ''}`}
          type={`text`}
          placeholder={`mm/dd/yyyy`}
          ref={el => (this._input = el as HTMLInputElement)}
          value={this.value}
          onChange={() => {
            this._checkDate();
          }}
        />
        <div class="a-icon -text--muted">
          <svg>
            <use xlinkHref="#icon-date"></use>
          </svg>
        </div>
        <chi-popover
          id="example-4-be-popover"
          position="bottom"
          reference={`#dp-${this._uuid}`}
          prevent-auto-hide
          active={this.active}
        >
          <chi-date
            min={this.min}
            max={this.max}
            locale={this.locale}
            value={this.value}
            format={this.format}
          />
        </chi-popover>
      </div>
    ];
  }
}

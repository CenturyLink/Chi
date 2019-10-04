import { Component, Element, Listen, Method, Prop } from '@stencil/core';
import { contains, uuid4 } from '../../utils/utils';
import { ESCAPE_KEYCODE } from '../../constants/constants';

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

  _checkDateValidity(dateString) {
    const parts = dateString.split("/");
    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10);
    const year = parseInt(parts[2], 10);
    const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString) ||
      month < 1 || month > 12) {
      return false;
    }
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      monthLength[1] = 29;
    }

    return day > 0 && day <= monthLength[month - 1];
  }

  _checkDate() {
    const inputDate = new Date(this._input.value);
    const minDate = new Date(this.min);
    const maxDate = new Date(this.max);

    if(this._checkDateValidity(this._input.value)) {
      if(inputDate < minDate){
        this.value = this.min;
        this._input.value = this.min;
      } else if (inputDate > maxDate){
        this.value = this.max;
        this._input.value = this.max;
      }
    } else {
      const dateObject = new Date();
      const monthToReturn = (dateObject.getMonth() + 1).toString().length === 2 ? (dateObject.getMonth() + 1).toString() : '0' + (dateObject.getMonth() + 1).toString();
      const dayToReturn = dateObject.getDate().toString().length === 2 ? dateObject.getDate().toString() : '0' + dateObject.getDate().toString();

      this.value = monthToReturn + '/' + dayToReturn + '/' + dateObject.getFullYear();
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
      />,
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
    ];
  }
}

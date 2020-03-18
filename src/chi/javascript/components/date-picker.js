import {Component} from "../core/component";
import {Util} from "../core/util.js";
import dayjs from 'dayjs';
import {Popover} from "./popover";
import {chi} from "../core/chi";

const COMPONENT_SELECTOR = 'input[type="date"]';
const COMPONENT_TYPE = "datePicker";
const CLASS_TODAY = '-today';
const DEFAULT_CONFIG = {
  date: null,
  locale: 'en',
  min: '01/01/1900',
  max: '12/31/2099',
  format: 'MM/DD/YYYY'
};
const WEEK_CLASS_PART = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

class DatePicker extends Component {

  constructor (elem, config) {

    super(elem, Util.extend(DEFAULT_CONFIG, config));
    this.shown = false;
    this.lastShownMonth = null;
    this.weekDaysHtml = null;
    this._popover = null;
    this._elem.setAttribute('type', 'text');

    dayjs.locale(this._config.locale);

    if (dayjs().startOf('week').day()===1) {
      this._weekStartClass = '-week-starts-on-mon';
    } else {
      this._weekStartClass = '-week-starts-on-sun';
    }

    this.elems = {
      calendar: null,
      container: null,
      dayList: null,
      monthTitle: null,
      nextButton: null,
      prevButton: null
    };

    this._initFromAttributeValues(config);
    this._initEventHandlers();
  }

  _initFromAttributeValues (config) {
    const attrMax = this._elem.getAttribute('max');
    const attrMin = this._elem.getAttribute('min');
    const value = this._elem.value;

    if (
      (!config || typeof config.max === 'undefined') &&
      attrMax
    ) {
      this._config.max = attrMax;
    }
    if (
      (!config || typeof config.min === 'undefined') &&
      attrMin
    ) {
      this._config.min = attrMin;
    }

    this.date = this._config.date && dayjs(this._config.date) ||
      value && dayjs(value) ||
      null;
    this.setDate(this.date ? this.date.format(this._config.format) : '');
  }

  _initEventHandlers () {
    let self = this;
    this._addEventHandler(this._elem, 'focus', function() {
      self.show();
    });

    this._addEventHandler(this._elem.parentNode, 'click', function() {
      self.show();
      self._elem.focus();
    });

    this._addEventHandler(this._elem, 'change', function() {
      self.setDate(self._elem.value);
    });
  }

  _initHidingEventHandlers() {
    const self = this;
    this._addEventHandler(this.elems.container, 'focus', function() {
      self.focusOnContainer = true;
    });
    this._addEventHandler(this.elems.container, 'click', function() {
      self.clickOnContainer = true;
    });
    this._addEventHandler(this._elem, 'focus', function() {
      self.focusOnContainer = true;
    });
    this._addEventHandler(this._elem, 'click', function() {
      self.clickOnContainer = true;
    });
    this._addEventHandler(document, 'focus', function() {
      if (self.focusOnContainer) {
        self.focusOnContainer = false;
      } else {
        self.hide();
      }
    });
    this._addEventHandler(document, 'click', function() {
      if (self.clickOnContainer) {
        self.clickOnContainer = false;
      } else {
        self.hide();
      }
    });
  }

  _dayClickEventHandler (e) {
    const target = e.target;
    if (!target) {
      return;
    }

    if (
      Util.hasClass(target, 'chi-datepicker__day') &&
      !Util.hasClass(target, chi.classes.INACTIVE)
    ) {
      this.setDate(target.dataset.date);
      this.hide();
    }
  }

  show() {
    if (this.shown) {
      return;
    }
    if (!this.elems.container) {
      this._initContainer();
    }
    this.update();
    this.shown = true;
    this._popover.show();
    Util.addClass(this._elem, '-focus');
  }

  hide() {
    if (!this.shown || document.activeElement === this._elem) {
      return;
    }
    this.shown = false;
    this._popover.hide();
    Util.removeClass(this._elem, '-focus');
  }

  toggle() {
    if (this.shown) {
      this.hide();
    } else {
      this.show();
    }
  }

  _initContainer() {
    this.elems.container = document.createElement('div');
    const calendar = this._renderEmptyCalendar();
    this.elems.container.appendChild(calendar);

    const self = this;
    this._addEventHandler(this.elems.prevButton, 'click', function(e){
      if (!Util.hasClass(e.target, chi.classes.DISABLED)) {
        self.loadPrevMonth();
      }
    });
    this._addEventHandler(this.elems.nextButton, 'click', function(e){
      if (!Util.hasClass(e.target, chi.classes.DISABLED)) {
        self.loadNextMonth();
      }
    });
    this._addEventHandler(this.elems.dayList, 'click', function(e) {
      self._dayClickEventHandler(e);
    });

    let parent = this._elem;
    if (
      this._elem.parentElement &&
      Util.hasClass(this._elem.parentElement, 'chi-input__wrapper')
    ) {
      parent = this._elem.parentElement;
    }

    this._popover = Popover.factory(parent, {
      arrow: false,
      classes: ['chi-popover__datepicker'],
      content: this.elems.container,
      position: 'bottom',
      preventAutoHide: true,
      trigger: 'manual'
    });
    this._initHidingEventHandlers();
  }

  loadNextMonth() {
    this.update(this.lastShownMonth.add(1, 'month'));
  }

  loadPrevMonth() {
    this.update(this.lastShownMonth.subtract(1, 'month'));
  }

  update(month) {
    month = month || this.date;
    if (month && !month.isValid()) {
      throw new Error('Invalid date while trying to update view. ');
    }

    if (
      month && !month.isSame(this.lastShownMonth, 'month') ||
      month === null && month !== this.lastDate ||
      this.date && !this.date.isSame(this.lastDate, 'day') ||
      !dayjs().isSame(this.lastToday, 'day')
    ) {
      const self = this;
      window.requestAnimationFrame(function(){
        self._updateCalendarView(month || dayjs());
      });
    }
  }

  setDate (newDateString) {
    let changed = false;

    if (!newDateString && this.date) {
      this.date = null;
      changed = true;
    } else if (newDateString) {
      const newDateObject = dayjs(newDateString);
      if (!this.date || !this.date.isSame(newDateObject, 'day')) {
        this.date = newDateObject;
        changed = true;
      }
    }

    this._updateInputField();

    if (changed) {
      this.update();
    }
  }

  _updateInputField () {
    const dateTxt = this.date ? this.date.format(this._config.format) : '';
    if (this._elem.value !== dateTxt) {
      this._elem.value = dateTxt;
      this._elem.dispatchEvent(Util.createEvent('change'));
    }
  }

  _renderEmptyCalendar() {
    let calendar;

    calendar = document.createElement('div');
    calendar.setAttribute(
      'class', 'chi-datepicker ' + this._weekStartClass
    );

    calendar.innerHTML = `
    <div class="chi-datepicker__month-row">
      <div class="prev">
        <i class="chi-icon icon-chevron-left -sm"></i>
      </div>
      <div class="chi-datepicker__month"></div>
      <div class="next">
        <i class="chi-icon icon-chevron-right -sm"></i>
      </div>
    </div>
    <div class="chi-datepicker__day-names">
      ${this._renderWeekDays()}
    </div>
    <div class="chi-datepicker__days"></div>`;

    this.elems.dayList = calendar.getElementsByClassName('chi-datepicker__days')[0];
    this.elems.monthTitle = calendar.getElementsByClassName('chi-datepicker__month')[0];
    this.elems.prevButton = calendar.getElementsByClassName('prev')[0];
    this.elems.nextButton = calendar.getElementsByClassName('next')[0];
    this.elems.calendar = calendar;

    return calendar;
  }

  _updateCalendarView(month) {
    const startOfNextMonth = month.add(1, 'month').startOf('month');
    const endOfPrevMonth = month.subtract(1, 'month').endOf('month');
    if (endOfPrevMonth.isBefore(dayjs(this._config.min))) {
      Util.addClass(this.elems.prevButton, chi.classes.DISABLED);
    } else {
      Util.removeClass(this.elems.prevButton, chi.classes.DISABLED);
    }
    if (startOfNextMonth.isAfter(dayjs(this._config.max))) {
      Util.addClass(this.elems.nextButton, chi.classes.DISABLED);
    } else {
      Util.removeClass(this.elems.nextButton, chi.classes.DISABLED);
    }

    this.elems.monthTitle.innerText =
      month.format('MMMM') + ' ' + month.format('YYYY');

    const calendarClasses = this.elems.calendar.className
      .replace(/-month-starts-on-.../, '');
    this.elems.calendar.className = calendarClasses + ' ' +
      '-month-starts-on-' + WEEK_CLASS_PART[month.set('date', 1).day()];

    if (!month.isSame(this.lastShownMonth, 'month')) {
      while (this.elems.dayList.firstChild) {
        this.elems.dayList.removeChild(this.elems.dayList.firstChild);
      }
      this.elems.dayList.innerHTML = this._renderMonthDays(month);
      this._popover.resetPosition();
    } else {
      this._updateMonthDays();
    }

    this.lastShownMonth = month;
    this.lastDate = this.date;
    this.lastToday = dayjs();
  }

  _renderMonthDays (month) {
    const firstDayOfMonth = month.startOf('month');
    const lastDayOfMonth = month.endOf('month');
    let daysHtml = '';
    for (
      let i = firstDayOfMonth;
      !i.isAfter(lastDayOfMonth, 'day');
      i = i.add(1, 'day')
    ) {
      daysHtml += this._renderDay(i);
    }
    return daysHtml;
  }

  _updateMonthDays() {
    const self = this;
    Array.prototype.forEach.call(this.elems.dayList.childNodes, function(dayElem) {
      const day = dayjs(dayElem.dataset.date);
      dayElem.className = self._classesForDay(day).join(' ');
    });
  }

  _classesForDay(day) {
    const classes = ['chi-datepicker__day'];
    if (
      day.isBefore(dayjs(this._config.min)) ||
      day.isAfter(dayjs(this._config.max))
    ) {
      classes.push(chi.classes.INACTIVE);
    }
    if (day.isSame(this.date, 'day')) {
      classes.push(chi.classes.ACTIVE);
    }
    if (day.isSame(dayjs(), 'day')) {
      classes.push(CLASS_TODAY);
    }
    return classes;
  }

  _renderDay (day) {
    const classes = this._classesForDay(day).join(' ');
    const date = day.format(this._config.format);
    return `<div class="${classes}" data-date="${date}">${day.date()}</div>`;
  }

  _renderWeekDays () {
    if (!this.weekDaysHtml) {
      this.weekDaysHtml = '';
      const startOfWeek = dayjs().startOf('week');
      const endOfWeek = dayjs().endOf('week');
      for (
        let day = startOfWeek;
        !day.isAfter(endOfWeek);
        day = day.add(1, 'day')
      ) {
        this.weekDaysHtml +=
          '<div class="chi-datepicker__week-day">' +
          day.format('dddd').substr(0,1) +
          '</div>';
      }
    }
    return this.weekDaysHtml;
  }

  dispose() {
    this._config = null;
    this._elem = null;
    if (this._popover) {
      this._popover.dispose();
      this._popover = null;
    }
    this._removeEventHandlers();
  }

  static get componentType () {
    return COMPONENT_TYPE;
  }

  static get componentSelector () {
    return COMPONENT_SELECTOR;
  }
}

const factory = Component.factory.bind(DatePicker);
export {DatePicker, factory};

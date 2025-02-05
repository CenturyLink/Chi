'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bd6e5613.js');
const customParseFormat = require('./customParseFormat-5a219cb8.js');
const constants = require('./constants-8a881329.js');
const utils = require('./utils-7f208c7f.js');
const classes = require('./classes-b81f8b66.js');

var isBetween$1 = {exports: {}};

(function (module, exports) {
!function(e,i){module.exports=i();}(customParseFormat.commonjsGlobal,(function(){return function(e,i,t){i.prototype.isBetween=function(e,i,s,f){var n=t(e),o=t(i),r="("===(f=f||"()")[0],u=")"===f[1];return (r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))};}}));
}(isBetween$1));

const isBetween = isBetween$1.exports;

var es = {exports: {}};

(function (module, exports) {
!function(e,o){module.exports=o(customParseFormat.dayjs_min.exports);}(customParseFormat.commonjsGlobal,(function(e){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(e),d={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return s.default.locale(d,null,!0),d}));
}(es));

var pt = {exports: {}};

(function (module, exports) {
!function(e,a){module.exports=a(customParseFormat.dayjs_min.exports);}(customParseFormat.commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(e),t={name:"pt",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sab".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"º"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"alguns segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return o.default.locale(t,null,!0),t}));
}(pt));

var fr = {exports: {}};

(function (module, exports) {
!function(e,n){module.exports=n(customParseFormat.dayjs_min.exports);}(customParseFormat.commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),i={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(e){return ""+e+(1===e?"er":"")}};return t.default.locale(i,null,!0),i}));
}(fr));

var de = {exports: {}};

(function (module, exports) {
!function(e,n){module.exports=n(customParseFormat.dayjs_min.exports);}(customParseFormat.commonjsGlobal,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e),a={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function i(e,n,t){var i=a[t];return Array.isArray(i)&&(i=i[n?0:1]),i.replace("%d",e)}var r={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};return t.default.locale(r,null,!0),r}));
}(de));

var ja = {exports: {}};

(function (module, exports) {
!function(e,_){module.exports=_(customParseFormat.dayjs_min.exports);}(customParseFormat.commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return t.default.locale(d,null,!0),d}));
}(ja));

var zh = {exports: {}};

(function (module, exports) {
!function(e,_){module.exports=_(customParseFormat.dayjs_min.exports);}(customParseFormat.commonjsGlobal,(function(e){function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"zh",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,_){return "W"===_?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s后",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,_){var t=100*e+_;return t<600?"凌晨":t<900?"早上":t<1100?"上午":t<1300?"中午":t<1800?"下午":"晚上"}};return t.default.locale(d,null,!0),d}));
}(zh));

const dateCss = "chi-datepicker.sc-chi-date-h{display:inline-block}";
const ChiDateStyle0 = dateCss;

customParseFormat.dayjs.extend(isBetween);
const WEEK_CLASS_PART = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const Date = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.eventChange = index.createEvent(this, "chiDateChange", 7);
        /**
         * Locale to use in date picker
         */
        this.locale = 'en';
        /**
         * Minimum eligible date
         */
        this.min = '01/01/1900';
        /**
         * Maximum eligible date
         */
        this.max = '12/31/2099';
        /**
         * Date format used in the attributes and how it will be shown to the user.
         */
        this.format = 'MM/DD/YYYY';
        /**
         * To allow the user to select multiple dates
         */
        this.multiple = false;
        this.viewMonth = customParseFormat.dayjs();
        this._enableKeyboardNavigation = true;
        this.excludedWeekdaysArray = [];
        this.excludedDatesArray = [];
    }
    updateExcludedDates() {
        this.excludedDatesArray = this.excludedDates ? this.excludedDates.split(',').map((date) => date.trim()) : [];
    }
    updateExcludedWeekdays() {
        this.excludedWeekdaysArray = this.excludedWeekdays
            ? this.excludedWeekdays.split(',').map((weekDay) => parseInt(weekDay))
            : [];
    }
    dateChanged(newValue, oldValue) {
        if (newValue !== oldValue && (newValue || oldValue)) {
            if (newValue) {
                this._handleNewDateValue(newValue);
            }
            else {
                this._initCalendarViewModel();
                this._initViewMonth();
                this._updateViewMonth();
            }
        }
    }
    _handleNewDateValue(newValue) {
        customParseFormat.dayjs.extend(customParseFormat.customParseFormat);
        if (this.multiple) {
            this._vm.dates = newValue.split(',').map((valueDay) => this.fromString(valueDay)) || [];
        }
        else {
            const date = customParseFormat.dayjs(newValue, this.format).format(this.format);
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
    localeChanged() {
        this._initCalendarViewModel();
    }
    viewMonthChanged(newValue, oldValue) {
        if (newValue.month() !== oldValue.month() || newValue.year() !== oldValue.year()) {
            this._updateViewMonth();
        }
    }
    minChanged(newValue) {
        const newMinDate = this.fromString(newValue);
        if (!newMinDate.isValid()) {
            throw new Error(`Min date value ${newValue} has an invalid format. `);
        }
        this._vm.min = newMinDate;
    }
    maxChanged(newValue) {
        const newMaxDate = this.fromString(newValue);
        if (!newMaxDate.isValid()) {
            throw new Error(`Max date value ${newValue} has an invalid format. `);
        }
        this._vm.max = newMaxDate;
    }
    /**
     * Sets date
     */
    async setDate(date) {
        this.value = date;
    }
    /**
     * Gets date
     */
    getDate() {
        return Promise.resolve(this.value);
    }
    _initViewMonth() {
        if (this.multiple && this.value) {
            const valueDates = this.value.replace(/ /g, '').split(',');
            const date = valueDates[valueDates.length - 1];
            this.viewMonth = date ? this.fromString(date) : customParseFormat.dayjs();
        }
        else {
            this.viewMonth = this.value ? this.fromString(this.value) : customParseFormat.dayjs();
        }
    }
    _initDates() {
        let dates = [];
        if (this.value) {
            if (this.multiple) {
                dates = this.value
                    .replace(/ /g, '')
                    .split(',')
                    .map((valueDay) => {
                    return this.fromString(valueDay);
                });
            }
            else {
                dates = [this.fromString(this.value)];
            }
        }
        return dates;
    }
    _initCalendarViewModel() {
        customParseFormat.dayjs.locale(this.locale);
        customParseFormat.dayjs.extend(customParseFormat.customParseFormat);
        const week = [];
        const startOfWeek = customParseFormat.dayjs().startOf('week');
        for (let i = 0; i < 7; i++) {
            week.push(startOfWeek.add(i, 'day'));
        }
        this._vm = {
            dates: this._initDates(),
            today: customParseFormat.dayjs(),
            weekStartClass: customParseFormat.dayjs().startOf('week').day() === 1 ? '-week-starts-on-mon' : '-week-starts-on-sun',
            monthStartClass: '',
            weekDays: week,
            monthDays: [],
            min: this.fromString(this.min),
            max: this.fromString(this.max),
        };
    }
    _updateViewMonth() {
        if (this._vm && this._vm.min && this._vm.min.isAfter(this.viewMonth)) {
            this.viewMonth = this._vm.min;
        }
        if (this._vm && this._vm.max && this._vm.max.isBefore(this.viewMonth)) {
            this.viewMonth = this._vm.max;
        }
        const month = [];
        const lastDay = this.viewMonth.endOf('month');
        for (let day = this.viewMonth.startOf('month'); day.isBefore(lastDay); day = day.add(1, 'day')) {
            month.push(day);
        }
        this._vm.monthDays = month;
        this._vm.monthStartClass = `-month-starts-on-${WEEK_CLASS_PART[this.viewMonth.set('date', 1).day()]}`;
    }
    fromString(dateStr) {
        return this.format ? customParseFormat.dayjs(dateStr, this.format) : customParseFormat.dayjs(dateStr);
    }
    toDayString(date) {
        return this.format ? date.format(this.format) : date.format('L');
    }
    nextMonth() {
        this.viewMonth = this.viewMonth.add(1, 'month');
    }
    prevMonth() {
        this.viewMonth = this.viewMonth.subtract(1, 'month');
    }
    componentWillLoad() {
        this.updateExcludedDates();
        this.updateExcludedWeekdays();
        this._initCalendarViewModel();
        this._initViewMonth();
        this._updateViewMonth();
    }
    componentDidRender() {
        if (this._afterRenderHandler instanceof Function) {
            this._afterRenderHandler();
            this._afterRenderHandler = null;
            return;
        }
        if (!this._keyboardFocusedDate) {
            const today = customParseFormat.dayjs().format(this.format);
            const alternativeFocusedDay = this._getValidDayElement(today) ? today : this._getFirstOrLastAvailableDate(true);
            this._keyboardFocusedDate = this._getValidDayElement(this.value) ? this.value : alternativeFocusedDay;
        }
    }
    componentDidLoad() {
        document.body.addEventListener('keydown', this._onKeyDown.bind(this));
        document.body.addEventListener('focusin', this._onFocusIn.bind(this));
    }
    disconnectedCallback() {
        document.body.removeEventListener('keydown', this._onKeyDown);
        document.body.removeEventListener('focusin', this._onFocusIn);
    }
    _onFocusIn(e) {
        if (e.target !== document.body && e.target !== null) {
            this._enableKeyboardNavigation = utils.contains(this.el, e.target);
        }
    }
    /**
     * Handles key down event
     */
    _onKeyDown(e) {
        if (!this._enableKeyboardNavigation || !utils.contains(this.el, e.target)) {
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
        if (!keyHandler || disableArrowHandler || !utils.contains(this.el, e.target)) {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        keyHandler();
    }
    /**
     * Checks wether the keyboard event target belongs to a calendar day
     */
    _isTargetCalendarDay(e) {
        return e.target.classList.contains(classes.DATEPICKER_CLASSES.DAY);
    }
    /**
     * Focus a sibling day of the calendar, either +1 or -1
     * Changes month if necessary.
     */
    _focusSiblingDay(dayDiff) {
        const dayToFocus = this._getAvailableSiblingDay(dayDiff);
        if (dayToFocus) {
            this._focusCalendarDay(dayToFocus);
            return;
        }
        const shouldMoveMonth = this._isDayInRange(customParseFormat.dayjs(this._keyboardFocusedDate).add(dayDiff, 'day'));
        if (shouldMoveMonth) {
            this._afterRenderHandler = () => this._focusCalendarDay(this._getFirstOrLastAvailableDate(dayDiff > 0));
            this._moveMonth(dayDiff > 0);
        }
    }
    /**
     * Checks wether the given date is between min and max
     */
    _isDayInRange(date) {
        return date.isBetween(this.min, this.max, 'day', '[]');
    }
    /**
     * Changes month in chi date component
     */
    _moveMonth(next = false) {
        if (next) {
            this.nextMonth();
        }
        else {
            this.prevMonth();
        }
    }
    _focusSiblingWeek(weekDif) {
        var _a;
        const currentDate = customParseFormat.dayjs(this._keyboardFocusedDate);
        const nextDate = currentDate.add(weekDif, 'week');
        if (!this._isDayInRange(nextDate)) {
            return;
        }
        const nextDateFormatted = nextDate.format(this.format);
        const nextAvailableDate = (_a = this._getFocusableDays()
            .find((i) => customParseFormat.dayjs(i.getAttribute('data-date'))[weekDif > 0 ? 'isAfter' : 'isBefore'](nextDate))) === null || _a === void 0 ? void 0 : _a.getAttribute('data-date');
        const dayToFocus = this._getValidDayElement(nextDateFormatted) ? nextDateFormatted : nextAvailableDate;
        if (dayToFocus) {
            this._focusCalendarDay(dayToFocus);
        }
        else {
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
        return day === null || day === void 0 ? void 0 : day.getAttribute('data-date');
    }
    /**
     * Gets the N previous or N next available day
     */
    _getAvailableSiblingDay(dayDiff) {
        const availableDays = this._getFocusableDays().map((i) => i.getAttribute('data-date'));
        const currentFocusIndex = availableDays.indexOf(this._keyboardFocusedDate);
        return availableDays[currentFocusIndex + dayDiff];
    }
    /**
     * Gets the valid day element
     */
    _getValidDayElement(date) {
        return this.el.querySelector(`.${classes.DATEPICKER_CLASSES.DAY}[data-date="${date}"]:not(.${classes.INACTIVE_CLASS})`);
    }
    /**
     * Focuses the given calendar day if available and stores the date in _keyboardFocusedDate.
     *
     */
    _focusCalendarDay(date = this._keyboardFocusedDate) {
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
        const availableDays = this.el.querySelectorAll(`.${classes.DATEPICKER_CLASSES.DAY}:not(.${classes.INACTIVE_CLASS})`);
        return Array.from(availableDays);
    }
    /**
     * Handles tab key to keep focus on the enabled elements of date picker:
     * prev month, next month and calendar day.
     */
    _handleTab(e) {
        if (!this._enableKeyboardNavigation) {
            return;
        }
        let tabElements = [
            this.el.querySelector(`.${classes.DATEPICKER_CLASSES.MONTH_ROW} .${classes.DATEPICKER_CLASSES.PREV_MONTH}:not(.${classes.DISABLED_CLASS})`),
            this.el.querySelector(`.${classes.DATEPICKER_CLASSES.MONTH_ROW} .${classes.DATEPICKER_CLASSES.NEXT_MONTH}:not(.${classes.DISABLED_CLASS})`),
            this._getValidDayElement(this._keyboardFocusedDate) ||
                this._getValidDayElement(this._getFirstOrLastAvailableDate(true)),
        ];
        tabElements = [...tabElements, ...tabElements].filter(Boolean);
        const nextElement = e.shiftKey
            ? tabElements[tabElements.lastIndexOf(e.target) - 1]
            : tabElements[tabElements.indexOf(e.target) + 1];
        if (nextElement.classList.contains(classes.DATEPICKER_CLASSES.DAY)) {
            this._focusCalendarDay(nextElement.getAttribute('data-date'));
        }
        else {
            nextElement.focus();
        }
    }
    _handleEnter(e) {
        const isPrevMonth = e.target === this.el.querySelector(`.${classes.DATEPICKER_CLASSES.MONTH_ROW} .${classes.DATEPICKER_CLASSES.PREV_MONTH}`);
        const isNextMonth = e.target === this.el.querySelector(`.${classes.DATEPICKER_CLASSES.MONTH_ROW} .${classes.DATEPICKER_CLASSES.NEXT_MONTH}`);
        const isDay = e.target === this._getValidDayElement(this._keyboardFocusedDate);
        if (isDay) {
            this._handleSelectDate(customParseFormat.dayjs(this._keyboardFocusedDate));
            return;
        }
        if (isPrevMonth || isNextMonth) {
            const nextFocusedDate = customParseFormat.dayjs(this._keyboardFocusedDate)
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
    _handleSelectDate(day) {
        if (this.multiple && Array.from(this._vm.dates).some((vmDay) => day.isSame(vmDay, 'day'))) {
            return this.removeDate(day);
        }
        return this.selectDate(day);
    }
    addDate(date) {
        if (this.multiple)
            this.value = `${this.value ? this.value + ',' : ''}${date}`;
    }
    removeDate(day) {
        const formattedDate = this.toDayString(day);
        const currentValues = Array.from(this.value.split(','));
        this.value = currentValues.filter((value) => value !== formattedDate).join(',');
        this.eventChange.emit(this.value);
    }
    selectDate(day) {
        const formattedDate = this.toDayString(day);
        if (this.multiple) {
            this.addDate(formattedDate);
        }
        else {
            this.setDate(formattedDate);
        }
        this.eventChange.emit(this.value);
    }
    checkIfExcluded(day) {
        if (this.excludedDates) {
            for (let i = 0; i < this.excludedDatesArray.length; i++) {
                if (customParseFormat.dayjs(this.excludedDatesArray[i]).startOf('day').isSame(day.startOf('day'))) {
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
        return (index.h("div", { key: '1f49adf299c94758d13ab581ce7e514f5481bee8', class: `${classes.DATEPICKER_CLASSES.DATEPICKER} ${this._vm.weekStartClass} ${this._vm.monthStartClass}` }, index.h("div", { key: 'cf5fdc154e147bc74f1d42e311ddee4c01a629c9', class: `${classes.DATEPICKER_CLASSES.MONTH_ROW}` }, index.h("div", { key: 'e82c3d0ff704a6fe993d10c1b3d9c76acc2fb024', class: `${classes.DATEPICKER_CLASSES.PREV_MONTH} ${prevMonthDisabled ? constants.CLASSES.DISABLED : ''}`, tabindex: "0", onClick: () => this.prevMonth() }, index.h("chi-icon", { key: '2d48ba2a6da73199e73d566434409ffe921a7f9b', icon: "chevron-left", size: "sm" })), index.h("div", { key: 'a19ce41b7bc5b1dc0b07c6ff948bbd782b0602fb', class: `${classes.DATEPICKER_CLASSES.MONTH}` }, `${this.viewMonth.format('MMMM')}
              ${this.viewMonth.format('YYYY')}`), index.h("div", { key: 'c5ccebb4ea348cc75cd306dc389208098b4ebfdd', class: `${classes.DATEPICKER_CLASSES.NEXT_MONTH} ${nextMonthDisabled ? constants.CLASSES.DISABLED : ''}`, tabindex: !nextMonthDisabled ? '0' : '', onClick: () => this.nextMonth() }, index.h("chi-icon", { key: '2de71a6661d4b654534e338ff050cc3e102d4a94', icon: "chevron-right", size: "sm" }))), index.h("div", { key: '56e8335b16501c066bd93ccc68712b3191904fcc', class: `${classes.DATEPICKER_CLASSES.DAY_NAMES}` }, this._vm.weekDays.map((weekDay) => (index.h("div", { class: `${classes.DATEPICKER_CLASSES.WEEK_DAY}`, key: weekDay.format('dddd') }, weekDay.format('dddd').substr(0, 1))))), index.h("div", { key: '59593741c32d50d4486e153d562c0fca7529f082', class: `${classes.DATEPICKER_CLASSES.DAYS}` }, this._vm.monthDays.map((day) => {
            const isExcludedDay = this.checkIfExcluded(day);
            return (index.h("div", { key: day.format(this.format), class: `${classes.DATEPICKER_CLASSES.DAY}
                ${(this._vm.min && day.isBefore(this._vm.min)) ||
                    (this._vm.max && day.isAfter(this._vm.max)) ||
                    isExcludedDay
                    ? constants.CLASSES.INACTIVE
                    : ''}
                ${Array.from(this._vm.dates).some((vmDay) => day.isSame(vmDay, 'day')) ? constants.CLASSES.ACTIVE : ''}
                ${day.isSame(customParseFormat.dayjs(), 'day') ? constants.CLASSES.TODAY : ''}
              `, "data-date": this.toDayString(day), onClick: () => this._handleSelectDate(day) }, day.date()));
        }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "excludedDates": ["updateExcludedDates"],
        "excludedWeekdays": ["updateExcludedWeekdays"],
        "value": ["dateChanged"],
        "locale": ["localeChanged"],
        "viewMonth": ["viewMonthChanged"],
        "min": ["minChanged"],
        "max": ["maxChanged"]
    }; }
};
Date.style = ChiDateStyle0;

exports.chi_date = Date;

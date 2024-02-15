<template lang="pug">
  div
    h2 Examples
    <BaseDatePicker />
    <Disabled />
    <ValueMinMaxOptions />
    <ExcludedWeekDays />
    <ExcludedDates />
    <ExcludedDatesWeekDays />
    <Message />
    <Error />
    <DatePickerDateTime />
    <DatePickerDateTimeStepped />
    <DatePickerMultipleDates />
    h3 Calendar
    p.-text An example of a date picker calendar not attached to any element.
    <BaseCalendar />
    <CalendarActive />
    <CalendarMultipleActiveDates />
    <CalendarMinMax />
    <CalendarDateTime />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ValueMinMaxOptions from './_value-min-max-options.vue';
import BaseCalendar from './_calendar-base.vue';
import CalendarActive from './_calendar-active.vue';
import DatePickerMultipleDates from './_date-picker-multiple-dates.vue';
import ExcludedWeekDays from './_excluded-week-days.vue';
import CalendarMultipleActiveDates from './_calendar-multiple-active-dates.vue';
import ExcludedDatesWeekDays from './_excluded-dates-week-days.vue';
import Message from './_message.vue';
import Error from './_error.vue';
import DatePickerDateTime from './_date-picker-date-time.vue';
import DatePickerDateTimeStepped from './_date-picker-date-time-stepped.vue';
import ExcludedDates from './_excluded-dates.vue';
import BaseDatePicker from './_base-date-picker.vue';
import Disabled from './_disabled.vue';
import CalendarMinMax from './_calendar-min-max.vue';
import CalendarDateTime from './_calendar-date-time.vue';

@Component({
  components: {
    ValueMinMaxOptions,
    BaseCalendar,
    CalendarActive,
    DatePickerMultipleDates,
    ExcludedWeekDays,
    CalendarMultipleActiveDates,
    ExcludedDatesWeekDays,
    Error,
    Message,
    DatePickerDateTime,
    DatePickerDateTimeStepped,
    ExcludedDates,
    BaseDatePicker,
    Disabled,
    CalendarMinMax,
    CalendarDateTime,
  }
})
export default class Examples extends Vue {}
</script>

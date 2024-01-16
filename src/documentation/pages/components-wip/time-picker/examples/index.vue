<template lang="pug">
  div
    h2 Examples
    
    <Base />
    <Disabled />
    <ValueOption />
    <Seconds />
    <TwentyFourHourFormat />
    h3 Time
    p.-text An example of a time picker not attached to any element.
    <TimeBase />
    <TimeActive />
    <TimeSeconds />
    <TimeTwentyFourHourFormat />
    <TimeStep />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import ValueOption from './_value-option.vue';
import TimeTwentyFourHourFormat from './_time-twenty-four-hour-format.vue';
import TimeStep from './_time-step.vue';
import TimeSeconds from './_time-seconds.vue';
import TimeBase from './_time-base.vue';
import TimeActive from './_time-active.vue';
import Seconds from './_seconds.vue';
import TwentyFourHourFormat from './_twenty-four-hour-format.vue';

@Component({
  components: {
    Base,
    Disabled,
    ValueOption,
    Seconds,
    TwentyFourHourFormat,
    TimeBase,
    TimeActive,
    TimeSeconds,
    TimeTwentyFourHourFormat,
    TimeStep
  }
})
export default class Examples extends Vue {}
</script>

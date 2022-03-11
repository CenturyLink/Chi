<template lang="pug">
  div
    h2 Examples
    
    <Base />
    <Disabled />
    <ValueOption />
    h3 Time
    p.-text An example of a time picker not attached to any element.
    <TimeBase />
    <Active />
    <Seconds />
    <TwentyFourHourFormat />
    <Step />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import ValueOption from './_value-option.vue';
import TwentyFourHourFormat from './_twenty-four-hour-format.vue';
import Step from './_step.vue';
import Seconds from './_seconds.vue';
import TimeBase from './_time-base.vue';
import Active from './_active.vue';

@Component({
  components: {
    Base,
    Disabled,
    ValueOption,
    TimeBase,
    Active,
    Seconds,
    TwentyFourHourFormat,
    Step
  }
})
export default class Examples extends Vue {}
</script>

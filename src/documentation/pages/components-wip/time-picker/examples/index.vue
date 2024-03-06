<template lang="pug">
h2 Examples

BaseExample
<Disabled />
<ValueOption />
<Seconds />
<TwentyFourHourFormat />

h3 Step
p.-text
  | Minutes and seconds can be shown in steps of 1, 5, 10, 15, 20, or 30 minutes or seconds.
  | Use the property <code>minutes-step</code> to define the step for the minutes (defaults to 15 minutes)
  | and the property <code>seconds-step</code> to define the step for the minutes (defaults to 10 seconds).
<MinutesStep />
<SecondsStep />

h3 Time
p.-text An example of a time picker not attached to any element.
<TimeBase />
<TimeActive />
<TimeSeconds />
<TimeTwentyFourHourFormat />

h4 Step
p.-text
  | Minutes and seconds can be shown in steps of 1, 5, 10, 15, 20, or 30 minutes or seconds.
  | Use the property <code>minutes-step</code> to define the step for the minutes (defaults to 15 minutes)
  | and the property <code>seconds-step</code> to define the step for the minutes (defaults to 10 seconds).
<TimeMinutesStep />
<TimeSecondsStep />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import ValueOption from './_value-option.vue';
import Seconds from './_seconds.vue';
import TwentyFourHourFormat from './_twenty-four-hour-format.vue';
import MinutesStep from './_minutes-step.vue';
import SecondsStep from './_seconds-step.vue';
import TimeBase from './_time-base.vue';
import TimeActive from './_time-active.vue';
import TimeSeconds from './_time-seconds.vue';
import TimeTwentyFourHourFormat from './_time-twenty-four-hour-format.vue';
import TimeMinutesStep from './_time-minutes-step.vue';
import TimeSecondsStep from './_time-seconds-step.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    Disabled,
    ValueOption,
    Seconds,
    TwentyFourHourFormat,
    MinutesStep,
    SecondsStep,
    TimeBase,
    TimeActive,
    TimeSeconds,
    TimeTwentyFourHourFormat,
    TimeMinutesStep,
    TimeSecondsStep,
  },
})
export default class Examples extends Vue {}
</script>

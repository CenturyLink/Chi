<template lang="pug">
  <Wrapper>
    h2 Examples
    p.-text To render a range slider, apply the class <code>chi-range-slider</code> to an <code>input type="range"</code>. 
      | Range widths are fluid by default.

    <Base />
    <Disabled />
    <MultipleLabels />
    h2 Achieve consistent rendering
    p.-text
      | As webkit browsers don't support an active track bar, we've created our own.
      | You will either need a JavaScript solution for moving the <code>chi-input__thumb</code>
      | element and changing the size of <code>chi-input__progress</code>, or
      | you can use Chi's JavaScript library as it provides this functionality out of the box.
    <BaseConsistent />
    <DisabledConsistent />
    <MultipleConsistent />
    <RadioSlider />
    <RadioDisabled />
    <RadioConsistent />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import BaseConsistent from './_base_consistent.vue';
import Disabled from './_disabled.vue';
import DisabledConsistent from './_disabled_consistent.vue';
import MultipleConsistent from './_multiple_consistent.vue';
import MultipleLabels from './_multiple_labels.vue';
import RadioConsistent from './_radio_consistent.vue';
import RadioDisabled from './_radio_disabled.vue';
import RadioSlider from './_radio_slider.vue';

@Component({
  components: {
    Base,
    Disabled,
    MultipleLabels,
    BaseConsistent,
    DisabledConsistent,
    MultipleConsistent,
    RadioSlider,
    RadioDisabled,
    RadioConsistent,
  }
})
export default class Examples extends Vue {}
</script>

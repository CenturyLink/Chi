<template lang="pug">
  div
    TitleBar(title="Position" description="Use shorthand position utility classes to quickly change an elements position value.")
    .chi-grid__container.-pt--3
      h2(class="-anchor" :id="notationId") Notation
        span
          a(class="-ml--1" :href="'/utilities/position/?theme=' + $store.state.themes.theme + '#' + notationId") #
      p.-text
        | Position utility classes can be defined using the format <code>-position-{viewport}--{value}</code>.
        | Viewports supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

      h2(class="-anchor" :id="targetAllViewPortsId") Target all viewports
        span
          a(class="-ml--1" :href="'/utilities/position/?theme=' + $store.state.themes.theme + '#' + targetAllViewPortsId") #
      p.-text Use to set an elements position on all viewports.

      Base
      AdditionalClasses
      TargetSpecificViewports
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import AdditionalClasses from './_additional-classes.vue';
import TargetSpecificViewports from './_target-specific-viewports.vue';

@Component({
  data: () => {
    return {
      notationId: 'notation',
      targetAllViewPortsId: 'target-all-viewports'
    };
  },
  components: {
    Base,
    AdditionalClasses,
    TargetSpecificViewports
  }
})
export default class Position extends Vue {}
</script>

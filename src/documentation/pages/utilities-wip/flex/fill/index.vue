<template lang="pug">
  div
    h2(class="-anchor" :id="id") Fill
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    
    p.-text Use the <code>-flex--fill</code> class on flexbox items to display as equal widths while taking up all available horizontal space.
    
    FillExamples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FillExamples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'fill',
    };
  },
  components: {
    FillExamples
  }
})
export default class Fill extends Vue {}
</script>

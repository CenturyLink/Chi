<template lang="pug">
  div
    h2(class="-anchor" :id="id") Height
      span
        a(class="-ml--1" :href="'/utilities/sizing/?theme=' + $store.state.themes.theme + '#' + id") #
    
    TargetAllBreakpoints
    TargetSpecificBreakpoints
    Examples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TargetAllBreakpoints from './_target-all-breakpoints.vue';
import TargetSpecificBreakpoints from './_target-specific-breakpoints.vue';
import Examples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'width'
    };
  },
  components: {
    TargetAllBreakpoints,
    TargetSpecificBreakpoints,
    Examples
  }
})
export default class Height extends Vue {}
</script>

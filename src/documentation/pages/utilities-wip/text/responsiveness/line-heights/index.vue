<template lang="pug">
  div
    h3(class="-anchor" :id="id") Line heights
      span
        a(class="-ml--1" :href="'/utilities/text/?theme=' + $store.state.themes.theme + '#' + 'responsiveness-' + id") #
    p.-text Line height sizes can be defined using the format <code>-lh[-{breakpoint}]--{size}</code>.
  
    Breakpoint 
    Size
    Example 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breakpoint from './_breakpoint.vue';
import Size from './_size.vue';
import Example from './_example.vue';

@Component({
  data: () => {
    return {
      id: 'line-heights'
    };
  },
  components: {
    Breakpoint,
    Size,
    Example
  }
})
export default class LineHeights extends Vue {}
</script>

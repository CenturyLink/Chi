<template lang="pug">
  div
    h2(class="-anchor" :id="id") Notation
      span
        a(class="-ml--1" :href="'/utilities/border/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Border utility classes can be defined using the format <code>-b{sides}[-{breakpoint}]--{size}</code>.
    
    Sides
    Breakpoint
    Size
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sides from './_sides.vue';
import Breakpoint from './_breakpoints.vue';
import Size from './_size.vue';

@Component({
  data: () => {
    return {
      id: 'notation'
    };
  },
  components: {
    Sides,
    Breakpoint,
    Size
  }
})
export default class Notation extends Vue {}
</script>

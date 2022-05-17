<template lang="pug">
  div
    h2(class="-anchor" :id="id") Notation
      span
        a(class="-ml--1" :href="'/utilities/spacing/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Spacing utility classes can be defined using the format <code>-{property}{sides}[-{breakpoint}]--{size}</code>.
    
    Property
    Sides
    Breakpoint
    Size
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Property from './_property.vue';
import Sides from './_sides.vue';
import Breakpoint from './_breakpoint.vue';
import Size from './_size.vue';

@Component({
  data: () => {
    return {
      id: 'notation'
    };
  },
  components: {
    Property,
    Sides,
    Breakpoint,
    Size
  }
})
export default class Notation extends Vue {}
</script>

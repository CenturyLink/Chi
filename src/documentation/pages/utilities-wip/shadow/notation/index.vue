<template lang="pug">
  div
    h2(class="-anchor" :id="id") Notation
      span
        a(class="-ml--1" :href="'/utilities/shadow/?theme=' + $store.state.themes.theme + '#' + id") #
    
    p.-text Shadow utility classes can be defined using the format <code>-s[-{breakpoint}]--{size}</code>.
    Size
    Breakpoint
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Size from './_size.vue';
import Breakpoint from './_breakpoint.vue';

@Component({
  data: () => {
    return {
      id: 'notation'
    };
  },
  components: {
    Size,
    Breakpoint
  }
})
export default class Notation extends Vue {}
</script>

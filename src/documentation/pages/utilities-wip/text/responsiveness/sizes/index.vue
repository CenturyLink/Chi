<template lang="pug">
  div
    h3(class="-anchor" :id="id") Sizes
      span
        a(class="-ml--1" :href="'/utilities/text/?theme=' + $store.state.themes.theme + '#'+ 'responsiveness-' + id") #
    p.-text Text utility classes can be defined using the format <code>-text[-{breakpoint}]--{size}</code>.

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
      id: 'sizes'
    };
  },
  components: {
    Breakpoint,
    Size,
    Example
  }
})
export default class Sizes extends Vue {}
</script>

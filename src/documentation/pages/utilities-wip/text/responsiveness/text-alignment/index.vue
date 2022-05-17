<template lang="pug">
  div
    h3(class="-anchor" :id="id") Text alignment
      span
        a(class="-ml--1" :href="'/utilities/text/?theme=' + $store.state.themes.theme + '#' + 'responsiveness-' + id") #
    p.-text Text utility classes can be align using the format <code>-text[-{breakpoint}]--{alignment}</code>.

    Breakpoint
    Alignment
    Example
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breakpoint from './_breakpoint.vue';
import Alignment from './_alignment.vue';
import Example from './_example.vue';

@Component({
  data: () => {
    return {
      id: 'text-alignment'
    };
  },
  components: {
    Breakpoint,
    Alignment,
    Example
  }
})
export default class TextAlignment extends Vue {}
</script>

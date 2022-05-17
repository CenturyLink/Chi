<template lang="pug">
  div
    h2(class="-anchor" :id="id") Wrap
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text(slot="example-description") Use wrap utilities to define how flex items wrap in a flex container.
    
    WrapExamples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WrapExamples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'wrap',
    };
  },
  components: {
    WrapExamples,
  }
})
export default class Wrap extends Vue {}
</script>

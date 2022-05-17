<template lang="pug">
  div
    h2(class="-anchor" :id="id") Align items
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Use align-items utilities to alter the alignment of flex items on the cross axis.
    
    AlignItemExamples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AlignItemExamples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'align-items'
    };
  },
  components: {
    AlignItemExamples
  }
})
export default class AlignItems extends Vue {}
</script>

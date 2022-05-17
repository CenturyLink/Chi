<template lang="pug">
  div
    h2(class="-anchor" :id="id") Align self
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Use align-self utilities to alter the alignment of individual flex items on the cross axis.

    AlignSelfExamples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AlignSelfExamples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'align-self',
    };
  },
  components: {
    AlignSelfExamples
  }
})
export default class AlignSelf extends Vue {}
</script>

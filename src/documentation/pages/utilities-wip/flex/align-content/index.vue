<template lang="pug">
  div
    h2(class="-anchor" :id="id") Align Content
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Use align-content utilities on flexbox containers to alter the alignment of flex items <strong>together</strong> on the cross axis.

    AlignContentExamples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AlignContentExamples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'align-content',
    };
  },
  components: {
    AlignContentExamples
  }
})
export default class AlignContent extends Vue {}
</script>

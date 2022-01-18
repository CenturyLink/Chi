<template lang="pug">
  div
    h2 Examples
    p.-text
      | To display steps, apply the class <code>chi-steps</code> to a unordered list <code>ul</code>
      | and indicate the active link with the class <code>-active</code> in the corresponding li tag.

    <Base />
    <HorizontalLabels />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import HorizontalLabels from './_horizontal-labels.vue';

@Component({
  components: {
    Base,
    HorizontalLabels
  }
})
export default class Examples extends Vue {}
</script>

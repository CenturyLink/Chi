<template lang="pug">
  div
    h2 Examples
    p.-text
      | To display steps, apply the class <code>chi-steps</code> to a unordered list <code>ul</code>
      | and indicate the active link with the class <code>-active</code> in the corresponding li tag.

    <Base />
    <HorizontalLabels />
    <Vertical />

    h2 Additional Size
    h3 Small
    p.-text
      | Use the <code>-sm</code> modifier class to render small steps.
    <SmallHorizontal />
    <SmallVertical />
    <Responsiveness />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import HorizontalLabels from './_horizontal-labels.vue';
import Vertical from './_vertical.vue';
import SmallHorizontal from './_small-horizontal.vue';
import SmallVertical from './_small-vertical.vue';
import Responsiveness from './_responsiveness.vue';

@Component({
  components: {
    Base,
    HorizontalLabels,
    Vertical,
    SmallHorizontal,
    SmallVertical,
    Responsiveness
  }
})
export default class Examples extends Vue {}
</script>

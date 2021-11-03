<template lang="pug">
  div
    h2 Examples
    p.-text To render a divider, apply the class <code>chi-divider</code> to an <code>hr</code> or <code>div</code> tag.

    <Base />
    <Vertical />
    <Inverse />
    <Label />

    div(v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)")
      <AdditionalSizesLumenCenturylink />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Vertical from './_vertical.vue';
import Inverse from './_inverse.vue';
import Label from './_label.vue';
import AdditionalSizesLumenCenturylink from './_additional_sizes_lumen_centurylink.vue';

@Component({
  components: {
    Base,
    Vertical,
    Inverse,
    Label,
    AdditionalSizesLumenCenturylink
  }
})
export default class DividerExamples extends Vue {}
</script>

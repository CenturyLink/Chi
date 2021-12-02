<template lang="pug">
  div
    h2 Examples
    p.-text To render a divider, apply the class <code>chi-divider</code> to an <code>hr</code> or <code>div</code> tag.

    <Base />
    <Vertical />
    <Inverse />
    <Label />

    <SizesLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Vertical from './_vertical.vue';
import Inverse from './_inverse.vue';
import Label from './_label.vue';
import SizesLumenCenturyLink from './_sizes_lumen_centurylink.vue';

@Component({
  components: {
    Base,
    Vertical,
    Inverse,
    Label,
    SizesLumenCenturyLink
  }
})
export default class Examples extends Vue {}
</script>

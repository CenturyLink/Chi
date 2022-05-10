<template lang="pug">
  div
    h2 Examples
    h3 Backdrop
    <Base />
    <Inverse />
    h3 Contextual
    <SpinnerButtonsPortal v-if="$store.state.themes.theme === 'portal'" />
    <SpinnerButtonsLumenCenturyLink v-else />
    <SpinnerTexts />
    <SizesLumenCenturyLink v-if="['lumen', 'centurylink'].includes($store.state.themes.theme)" />
    <SizesPortal v-else />
    h3 Colors
    p.-text
      | By default, spinners are rendered in the same color as the text color defined on their parent container.
      | Easily change a spinners color using the examples below.
    <ColorBrand />
    <ColorSemantic />   
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Inverse from './_inverse.vue';
import SizesLumenCenturyLink from './_sizes-lumen-centurylink.vue';
import SpinnerTexts from './_spinner-texts.vue';
import ColorBrand from './_color-brand.vue';
import SpinnerButtonsPortal from './_spinner-buttons-portal.vue';
import ColorSemantic from './_color-semantic.vue';
import SizesPortal from './_sizes-portal.vue';
import SpinnerButtonsLumenCenturyLink from './_spinner-buttons-lumen-centurylink.vue';

@Component({
  components: {
    Base,
    Inverse,
    SizesLumenCenturyLink,
    SizesPortal,
    SpinnerTexts,
    SpinnerButtonsPortal,
    SpinnerButtonsLumenCenturyLink,
    ColorBrand,
    ColorSemantic,
  }
})
export default class Examples extends Vue {}
</script>

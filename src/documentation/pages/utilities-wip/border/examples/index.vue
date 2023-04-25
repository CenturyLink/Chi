<template lang="pug">
fragment
  <AnchorTitle title="Examples" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#examples`" />

  <BorderSides />
  <Breakpoints />
  <BorderSizes />

  <AnchorTitle title="Border Colors" tag="h3" :anchor="`?theme=${$store.state.themes.theme}#border-colors`" />
  p.-text Use contextual color classes to change a border's color.

  <BorderColorsBrand />
  <BorderColorsSemantic />
  <BorderColorsTransparent />
  <BorderColorsResponsive />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BorderSides from './_border-sides.vue';
import Breakpoints from './_breakpoints.vue';
import BorderSizes from './_border-sizes.vue';
import BorderColorsBrand from './_border-colors-brand.vue';
import BorderColorsSemantic from './_border-colors-semantic.vue';
import BorderColorsTransparent from './_border-colors-transparent.vue';
import BorderColorsResponsive from './_border-colors-responsive.vue';

@Component({
  components: {
    BorderSides,
    Breakpoints,
    BorderSizes,
    BorderColorsBrand,
    BorderColorsSemantic,
    BorderColorsTransparent,
    BorderColorsResponsive
  }
})
export default class Examples extends Vue {}
</script>

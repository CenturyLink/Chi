<template lang="pug">
  .chi-grid__container.-pt--3
    <Notation />
    h2 Examples
    <BorderSides />
    <Breakpoints />
    <Breakpoints />
    <BorderSizes />
    h3 Border Colors
    p.-text
      | Use contextual color classes to change a border's color.
    <BrandBorderColor />
    <SemanticBorderColor />
    <TransparentBorderColor />
    <ResponsiveBorderColor />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Notation from './_notation.vue';
import BorderSides from './_border-sides.vue';
import Breakpoints from './_breakpoints.vue';
import BorderSizes from './_border-sizes.vue';
import BrandBorderColor from './_border-color-brand.vue';
import SemanticBorderColor from './_border-color-semantic.vue';
import TransparentBorderColor from './_border-color-transparent.vue';
import ResponsiveBorderColor from './_border-color-responsive.vue';

@Component({
  components: {
    Notation,
    BorderSides,
    Breakpoints,
    BorderSizes,
    BrandBorderColor,
    SemanticBorderColor,
    TransparentBorderColor,
    ResponsiveBorderColor
  }
})
export default class Examples extends Vue {}
</script>

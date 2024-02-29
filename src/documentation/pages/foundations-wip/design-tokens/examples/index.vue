<template lang="pug">
.chi-grid__container.-pt--3
  <ColorText />
  <ColorIcon />
  <Background />
  <Border />
  <ColorSystem />
  <FontFamily />
  <FontWeight />
  <FontSizeText />
  <FontSizeHeading />
  <FontSizeSystem />
  <BorderRadius />
  <Opacity />
  <ZIndex />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import ColorText from './_color-text.vue';
import ColorIcon from './_color-icon.vue';
import Background from './_background.vue';
import Border from './_border.vue';
import ColorSystem from './_color-system.vue';
import FontFamily from './_font-family.vue';
import FontWeight from './_font-weight.vue';
import FontSizeText from './_font-size-text.vue';
import FontSizeHeading from './_font-size-heading.vue';
import FontSizeSystem from './_font-size-system.vue';
import BorderRadius from './_border-radius.vue';
import Opacity from './_opacity.vue';
import ZIndex from './_z-index.vue';

@NuxtComponent({
  components: {
    ColorText,
    ColorIcon,
    Background,
    Border,
    ColorSystem,
    FontFamily,
    FontWeight,
    FontSizeText,
    FontSizeHeading,
    FontSizeSystem,
    BorderRadius,
    Opacity,
    ZIndex,
  },
})
export default class Examples extends Vue {}
</script>

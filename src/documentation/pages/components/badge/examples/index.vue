<template lang="pug">
  div
    h3 Examples
    p.-text Chi includes three badge variants: Solid, Outline, and Flat. Use <code>solid</code> badges for high emphasis,
      | base or <code>outline</code> badges for medium emphasis, and <code>flat</code> badges for low emphasis.

    div
      <Solid />
      <Outline />
      <Flat />
      <IconBadges />
      <AdditionalSizes />
      <TextTransform />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Solid from './_solid.vue';
import Outline from './_outline.vue';
import Flat from './_flat.vue';
import IconBadges from './_icon_badges.vue';
import AdditionalSizes from './_additional_sizes.vue';
import TextTransform from './_text_transform.vue';

@Component({
  components: {
    Solid,
    Outline,
    Flat,
    IconBadges,
    AdditionalSizes,
    TextTransform
  }
})
export default class Examples extends Vue {}
</script>

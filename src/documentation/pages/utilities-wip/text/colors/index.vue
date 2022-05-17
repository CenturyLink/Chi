<template lang="pug">
  div
    h2(class="-anchor" :id="id") Text colors
      span
        a(class="-ml--1" :href="'/utilities/text/?theme=' + $store.state.themes.theme + '#' + 'colors-' + id") #
    p.-text Change text colors with contextual classes.

    Brand
    Semantic
    BrandComplimentary(v-if="['lumen'].includes($store.state.themes.theme)")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Brand from './_brand.vue';
import Semantic from './_semantic.vue';
import BrandComplimentary from './_brand-complimentary.vue';

@Component({
  data: () => {
    return {
      id: 'text-colors'
    };
  },
  components: {
    Brand,
    Semantic,
    BrandComplimentary
  }
})
export default class TextColors extends Vue {}
</script>

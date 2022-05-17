<template lang="pug">
  div
    h2(class="-anchor" :id="id") Icon color
      span
        a(class="-ml--1" :href="'/utilities/color/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Change icon colors with contextual classes.

    Brand
    Semantic
    BrandComplimentary(v-if="!['centurylink'].includes($store.state.themes.theme)")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Brand from './_brand.vue';
import Semantic from './_semantic.vue';
import BrandComplimentary from './_brand-complimentary.vue';

@Component({
  data: () => {
    return {
      id: 'icon-color'
    };
  },
  components: {
    Brand,
    Semantic,
    BrandComplimentary
  }
})
export default class IconColor extends Vue {}
</script>

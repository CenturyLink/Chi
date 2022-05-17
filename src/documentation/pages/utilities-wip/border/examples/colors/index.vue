<template lang="pug">
  div
    h3(class="-anchor" :id="id") Border colors
      span
        a(class="-ml--1" :href="'?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text Use contextual color classes to change a border's color.

    Brand
    Semantic
    Transparent
    Responsive
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Brand from './_brand.vue'
import Semantic from './_semantic.vue'
import Transparent from './_transparent.vue'
import Responsive from './_responsive.vue'

@Component({
  data: () => {
    return {
      id: 'border-colors'
    };
  },
  components: {
    Brand,
    Semantic,
    Transparent,
    Responsive
  }
})
export default class BorderColors extends Vue {}
</script>

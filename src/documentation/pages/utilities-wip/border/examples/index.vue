<template lang="pug">
  div
    h2(class="-anchor" :id="id") Examples
      span
        a(class="-ml--1" :href="'/utilities/border/?theme=' + $store.state.themes.theme + '#' + id") #
    
    BorderSides
    Breakpoints
    BorderSizes
    BorderColors
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BorderSides from './_border-sides.vue'
import Breakpoints from './_breakpoints.vue'
import BorderSizes from './_border-sizes.vue'
import BorderColors from './colors/index.vue';

@Component({
  data: () => {
    return {
      id: 'examples'
    };
  },
  components: {
    BorderSides,
    Breakpoints,
    BorderSizes,
    BorderColors
  }
})
export default class Examples extends Vue {}
</script>

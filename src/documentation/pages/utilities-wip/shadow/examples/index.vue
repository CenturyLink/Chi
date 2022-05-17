<template lang="pug">
  div
    h2(class="-anchor" :id="id") Examples
      span
        a(class="-ml--1" :href="'/utilities/shadow/?theme=' + $store.state.themes.theme + '#' + id") #
    
    Default
    Responsive
    Sass
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Default from './_default.vue';
import Responsive from './_responsive.vue';
import Sass from './_sass.vue';

@Component({
  data: () => {
    return {
      id: 'examples'
    };
  },
  components: {
    Default,
    Responsive,
    Sass
  }
})
export default class Examples extends Vue {}
</script>

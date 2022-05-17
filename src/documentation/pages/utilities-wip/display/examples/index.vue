<template lang="pug">
  div
    h2(class="-anchor" :id="id") Examples
      span
        a(class="-ml--1" :href="'/utilities/display/?theme=' + $store.state.themes.theme + '#' + id") #

    Displays
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Displays from './_displays.vue'

@Component({
  data: () => {
    return {
      id: 'examples'
    };
  },
  components: {
    Displays
  }
})
export default class Examples extends Vue {}
</script>

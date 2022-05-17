<template lang="pug">
  div
    h2(class="-anchor" :id="id") Examples
      span
        a(class="-ml--1" :href="'/utilities/image/?theme=' + $store.state.themes.theme + '#' + id") #

    ResponsiveImages
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ResponsiveImages from './_responsive-images.vue'

@Component({
  data: () => {
    return {
      id: 'examples'
    };
  },
  components: {
    ResponsiveImages
  }
})
export default class Examples extends Vue {}
</script>

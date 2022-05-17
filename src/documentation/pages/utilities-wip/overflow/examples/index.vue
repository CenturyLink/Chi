<template lang="pug">
  div
    h2(class="-anchor" :id="id") Examples
      span
        a(class="-ml--1" :href="'/utilities/overflow/?theme=' + $store.state.themes.theme + '#' + id") #

    Auto
    Hidden
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Auto from './_auto.vue';
import Hidden from './_hidden.vue';

@Component({
  data: () => {
    return {
      id: 'examples'
    };
  },
  components: {
    Auto,
    Hidden
  }
})
export default class Examples extends Vue {}
</script>

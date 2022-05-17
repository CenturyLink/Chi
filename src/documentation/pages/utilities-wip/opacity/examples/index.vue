<template lang="pug">
  div
    h2(class="-anchor" :id="id") Examples
      span
        a(class="-ml--1" :href="'/utilities/opacity/?theme=' + $store.state.themes.theme + '#' + id") #

    Base
    Hover
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Hover from './_hover.vue';

@Component({
  data: () => {
    return {
      id: 'examples'
    };
  },
  components: {
    Base,
    Hover
  }
})
export default class Examples extends Vue {}
</script>

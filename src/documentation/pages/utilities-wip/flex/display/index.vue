<template lang="pug">
  div
    h2(class="-anchor" :id="id") Display
      span
        a(class="-ml--1" :href="'/utilities/flex/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text
      | To enable flex, apply a flex display utility class. This will transform
      | your element into a flexbox container and its direct children into flex items.

    DisplayExamples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DisplayExamples from './_examples.vue';

@Component({
  data: () => {
    return {
      id: 'display',
    };
  },
  components: { DisplayExamples }
})
export default class Display extends Vue {}
</script>

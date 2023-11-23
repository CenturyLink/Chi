<template lang="pug">
  div 
    h2 Examples

    .-portal--hide
      <Accordion />
    .-portal--show.-brightspeed--show.-colt--show
 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Accordion from './base/_accordion.vue';

@Component({
  components: {
    Accordion
  }
})
export default class Examples extends Vue {}
</script>

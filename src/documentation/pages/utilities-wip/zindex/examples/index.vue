<template lang="pug">
  .chi-grid__container.-pt--3
    <SupportedValues :indexes="indexes" />
    <ZIndexExample :indexes="indexes" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { indexes } from '~/fixtures/fixtures';
import SupportedValues from './_supported-values.vue';
import ZIndexExample from './_z-index-example.vue';

@Component({
  components: {
    SupportedValues,
    ZIndexExample
  },
  data: () => {
    return {
      indexes: indexes
    }
  }
})
export default class Examples extends Vue {}
</script>

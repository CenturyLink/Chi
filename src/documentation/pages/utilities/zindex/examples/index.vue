<template lang="pug">
  .chi-grid__container.-pt--3
    <SupportedValues />
    <ZIndexExample />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SupportedValues from './_supported-values.vue';
import ZIndexExample from './_z-index-example.vue';

@Component({
  components: {
    SupportedValues,
    ZIndexExample
  },
})
export default class Examples extends Vue {}
</script>

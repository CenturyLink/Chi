<template lang="pug">
  .chi-grid__container.-pt--3
    <SupportedValues />
    <ZIndexExample />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import SupportedValues from './_supported-values.vue';
import ZIndexExample from './_z-index-example.vue';

@NuxtComponent({
  components: {
    SupportedValues,
    ZIndexExample,
  },
})
export default class Examples extends Vue {}
</script>

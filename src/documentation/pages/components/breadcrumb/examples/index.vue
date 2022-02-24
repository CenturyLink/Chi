<template lang="pug">
  div
    h2 Examples
    p.-text To render a breadcrumb, use the class <code>chi-breadcrumb</code>.
    <Base />
    <AlternateSeparator />
    <AdditionalSizes />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import AlternateSeparator from './_alternate-separator.vue';
import AdditionalSizes from './_additional-sizes.vue';

@Component({
  components: {
    Base,
    AlternateSeparator,
    AdditionalSizes
  }
})
export default class Examples extends Vue {}
</script>

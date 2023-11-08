<template lang="pug">
  div
    h2 Web Component
    <PropertiesGenerator tag="chi-badge" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    isChiDocsLoaded() {
      return Vue?.prototype?.$chiDocs !== undefined;
    }
  }
})
export default class Properties extends Vue {}
</script>

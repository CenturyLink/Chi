<template lang="pug">
  div
    h2 Web Component
    <client-only placeholder="loading...">
      <PropertiesGenerator tag="chi-alert" />
    </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Properties extends Vue {}
</script>

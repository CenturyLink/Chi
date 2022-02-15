<template lang="pug">
  div
    h2 Web Component
    <PropertiesGenerator tag="chi-icon" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Properties extends Vue {}
</script>

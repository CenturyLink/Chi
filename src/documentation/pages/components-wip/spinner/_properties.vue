<template lang="pug">
  div
    h2 Web Component
    <PropertiesGenerator tag="chi-spinner" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Properties extends Vue {}
</script>

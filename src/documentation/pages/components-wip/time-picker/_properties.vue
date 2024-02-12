<template lang="pug">
    div
      h2 chi-time-picker
      <PropertiesGenerator tag="chi-time-picker" />
      .chi-divider.-my--5
      h2 chi-time
      <PropertiesGenerator tag="chi-time" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Properties extends Vue {}
</script>

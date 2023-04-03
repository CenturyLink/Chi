<template lang="pug">
    div
      h2 chi-time-picker
      <client-only placeholder="loading...">
        <PropertiesGenerator tag="chi-time-picker" />
      </client-only>
      .chi-divider.-my--5
      h2 chi-time
      <client-only placeholder="loading...">
        <PropertiesGenerator tag="chi-time" />
      </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Properties extends Vue {}
</script>

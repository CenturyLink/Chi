<template lang="pug">
  div
    h2 Web Component
    h3 Properties
    .chi-card.-align--center.-empty
      .chi-card__content
        .chi-card__caption
          | Web component coming soon
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Properties extends Vue {}
</script>

<template lang="pug">
  div
    <TitleAnchor title="Alignment" id="alignment" titleSize="h2" />
    <TitleAnchor title="Container-Level Vertical Alignment" id="container-level-vertical-alignment" />
    p.-text
      | Setting alignment on the grid container will apply to all columns 
      | within the container. Use this method if you do not need to change 
      | the vertical alignment for each individual column.
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Alignment extends Vue {}
</script>

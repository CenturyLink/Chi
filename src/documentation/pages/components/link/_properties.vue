<template lang="pug">
  <Wrapper>
    h2 Web Component
    <PropertiesGenerator tag="chi-link" />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Properties extends Vue {}
</script>

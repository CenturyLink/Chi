<template lang="pug">
  div
    <Base />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';

@Component({
  components: {
    Base
  }
})
export default class Examples extends Vue {}
</script>

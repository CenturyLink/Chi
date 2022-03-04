<template lang="pug">
  div
    h2 Examples
    <Base />
    <Single />
    <DotControllers />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Single from './_single.vue';
import DotControllers from './_dot-controllers.vue';

@Component({
  components: {
    Base,
    Single,
    DotControllers
  }
})
export default class Examples extends Vue {}
</script>

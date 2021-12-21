<template lang="pug">
  div
    h2 Examples

    <Base />
    <Disabled />
    <MinMaxStep />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import MinMaxStep from './_min-max-step.vue';

@Component({
  components: {
    Base,
    Disabled,
    MinMaxStep
  }
})
export default class Examples extends Vue {}
</script>

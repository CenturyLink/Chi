<template lang="pug">
  div
    h2 Examples

    <Base />
    <Disabled />
    <Readonly />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Readonly from './_readonly.vue';

@Component({
  components: {
    Base,
    Disabled,
    Readonly
  }
})
export default class Examples extends Vue {}
</script>

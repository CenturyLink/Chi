<template lang="pug">
  div
    h2 Examples
    h3 Multi-select pickers
    p.-text Use multi-select pickers when more than one option can be chosen.

    <Base />
    <Checked />
    <Disabled />
    <Required />
    <Optional />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Checked from './_checked.vue';
import Disabled from './_disabled.vue';
import Required from './_required.vue';
import Optional from './_optional.vue';

@Component({
  components: {
    Base,
    Checked,
    Disabled,
    Required,
    Optional
  }
})
export default class Examples extends Vue {}
</script>

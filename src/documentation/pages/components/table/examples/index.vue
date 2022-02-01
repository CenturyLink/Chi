<template lang="pug">
  div
    h2 Examples

    <Base />
    <NoBorder />
    <Striped />
    <Hover />
    <BasePortal v-if="$store.state.themes.theme === 'portal'" />
    
    h3 Row States
    p.-text Chi offers a wide variety of modifiers to express different row states.
    <Disabled />
    <Success />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import NoBorder from './_no-border.vue';
import Striped from './_striped.vue';
import Hover from './_hover.vue';
import BasePortal from './_portal/_base.vue';
import Disabled from './_disabled.vue';
import Success from './_success.vue';

@Component({
  components: {
    Base,
    NoBorder,
    Striped,
    Hover,
    BasePortal,
    Disabled,
    Success
  }
})
export default class Examples extends Vue {}
</script>

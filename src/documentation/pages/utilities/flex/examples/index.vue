<template lang="pug">
  .chi-grid__container.-pt--3
    <Display />
    <Direction />
    <JustifyContent />
    <AlignItems />
    <AlignSelf />
    <Wrap />
    <AlignContent />
    <Fill />
    <Grow />
    <Shrink />
    <Basis />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Display from './display/index.vue';
import Direction from './direction/index.vue';
import JustifyContent from './justify-content/index.vue';
import AlignItems from "./align-items/index.vue";
import AlignSelf from "./align-self/index.vue";
import Wrap from "./wrap/index.vue";
import AlignContent from "./align-content/index.vue";
import Fill from "./fill/index.vue";
import Grow from "./grow/index.vue";
import Shrink from "./shrink/index.vue";
import Basis from "./basis/index.vue";

@Component({
  components: {
    Display,
    Direction,
    JustifyContent,
    AlignItems,
    AlignSelf,
    Wrap,
    AlignContent,
    Fill,
    Grow,
    Shrink,
    Basis,
  }
})
export default class Examples extends Vue {}
</script>

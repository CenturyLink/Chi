<template lang="pug">
fragment
  <TitleBar title="Flex" description="Use shorthand flex utility classes to manage the layout, alignment, and size of Chi components." />

  section.chi-grid__container.-pt--3
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
import Direction from './examples/direction.vue';
import Display from './examples/display.vue';
import JustifyContent from './examples/justify-content.vue';
import AlignItems from './examples/align-items.vue';
import AlignSelf from './examples/align-self.vue';
import Wrap from './examples/wrap.vue';
import AlignContent from './examples/align-content.vue';
import Fill from './examples/fill.vue';
import Grow from './examples/grow.vue';
import Shrink from './examples/shrink.vue';
import Basis from './examples/basis.vue';

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
    Basis
  }
})
export default class Flex extends Vue {}
</script>

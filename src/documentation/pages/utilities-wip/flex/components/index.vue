<template lang="pug">
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

import AlignContent from './_align-content.vue';
import AlignItems from './_align-items.vue';
import AlignSelf from './_align-self.vue';
import Basis from './_basis.vue';
import Direction from './_direction.vue';
import Display from './_display.vue';
import Fill from './_fill.vue';
import Grow from './_grow.vue';
import JustifyContent from './_justify-content.vue';
import Shrink from './_shrink.vue';
import Wrap from './_wrap.vue';

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
export default class Components extends Vue {}
</script>

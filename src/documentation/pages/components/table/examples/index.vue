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
    <Warning />
    <Danger />
    <Info />
    h3 Column Sorting
    p.-text 
      | To express column sorting, apply the class <code>-sorted</code> with one of the following modifiers: 
      | <code>-ascending</code> or <code>-descending</code>.
    <Ascending />
    <Descending />
    <ContentAlignment />
    h3 Additional Sizes
    p.-text
      | Chi also supports additional table sizes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>,
      |  <code>-lg</code>, <code>-xl</code>.
      | The default size is <code>-md</code>.
    <SizeXs />
    <SizeSm />
    <SizeMd />
    <SizeLg />
    <SizeXl />
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
import Warning from './_warning.vue';
import Danger from './_danger.vue';
import Info from './_info.vue';
import Ascending from './_ascending.vue';
import Descending from './_descending.vue';
import ContentAlignment from './_content-alignment.vue';
import SizeXs from './_size-xs.vue';
import SizeSm from './_size-sm.vue';
import SizeMd from './_size-md.vue';
import SizeLg from './_size-lg.vue';
import SizeXl from './_size-xl.vue';

@Component({
  components: {
    Base,
    NoBorder,
    Striped,
    Hover,
    BasePortal,
    Disabled,
    Success,
    Warning,
    Danger,
    Info,
    Ascending,
    Descending,
    ContentAlignment,
    SizeXs,
    SizeSm,
    SizeMd,
    SizeLg,
    SizeXl
  }
})
export default class Examples extends Vue {}
</script>

<template lang="pug">
  .chi-grid__container.-pt--3
    <Setup />
    <Testing />
    <FileStructure />
    <HtmlTag />
    <ComponentTsClass />
    <Typescript />
    <Properties />
    <Styling />
    <Rules />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Setup from './_setup.vue';
import Testing from './_testing.vue';
import FileStructure from './_file-structure.vue';
import HtmlTag from './_html-tag.vue';
import ComponentTsClass from './_component-ts-class.vue';
import Typescript from './_typescript.vue';
import Properties from './_properties.vue';
import Styling from './_styling.vue';
import Rules from './_rules.vue';

@Component({
  components: {
    Setup,
    Testing,
    FileStructure,
    HtmlTag,
    ComponentTsClass,
    Typescript,
    Properties,
    Styling,
    Rules,
  }
})
export default class Examples extends Vue {}
</script>

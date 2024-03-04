<template lang="pug">
  .chi-grid__container.-pt--3
    <CSS />
    <Favicon />
    <JavaScript />
    <WebComponents />
    <ChiVue />
    <SpecificBoilerplates />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import CSS from './_css.vue';
import Favicon from './_favicon.vue';
import JavaScript from './_javascript.vue';
import WebComponents from './_web_components.vue';
import ChiVue from './_chi_vue.vue';
import SpecificBoilerplates from './_framework_specific_boilerplates.vue';

@NuxtComponent({
  components: {
    CSS,
    Favicon,
    JavaScript,
    WebComponents,
    ChiVue,
    SpecificBoilerplates,
  },
})
export default class Examples extends Vue {}
</script>

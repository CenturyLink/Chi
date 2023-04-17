<template lang="pug">
div
  TitleBar(title="Flex" description="Use shorthand flex utility classes to manage the layout, alignment, and size of Chi components.")
  section.chi-grid__container.-pt--3
    Display
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Fragment } from "vue-fragment";

  import Display from "./examples/_display.vue";

  @Component({
    components: {
      Fragment,
      Display
    },
    data: ()=> {
      return {
        codeSnippet: ``
      }
    }
  })
  export default class Flex extends Vue {}
</script>

<template lang="pug">
  ComponentExample(title="Breakpoints" :padding="'-p--3'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Target specific breakpoints with responsive classes.
    .chi-grid.-no-gutter(slot="example")
      .example-spacing-margin
        .-mx--0.-px--0.-mx-lg--6.-px-lg--6.example-spacing-padding
          .example-spacing-padding__block
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'breakpoints',
      codeSnippets: `<div class="-mx--0 -px--0 -mx-lg--6 -px-lg--6"></div>`
    };
  }
})
export default class Breakpoints extends Vue {}
</script>

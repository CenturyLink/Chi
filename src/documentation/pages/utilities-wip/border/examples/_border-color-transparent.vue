<template lang="pug">
  <ComponentExample title="Transparent" id="transparent" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use the transparent border color as a method to hide an element's border without altering its size.
    .chi-grid.-no-gutter.-text.-text--center(slot="example")
      .chi-col.-w--6.-w-md--3.-w-xl--2
        .-m--1.-p--1.-py--5.-b--1.-b--transparent.-bg--grey-10 Transparent
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-b--1 -b--transparent"></div>`
      }
    };
  }
})
export default class Transparent extends Vue {}
</script>

<template lang="pug">
  <ComponentExample padding="-p--2" title="Middle" id="vertical-align-middle" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use <code>-vertical-align--middle</code> to align the middle of an element with the baseline plus half the x-height of the parent.
    .-d--flex.-flex--wrap.-p--1.-text(slot="example")
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--middle.-mr--1.example-vertical-align__block
        span middle
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
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
          label: 'HTML Blueprint',
        }
      ],
      codeSnippets: {
        htmlblueprint: '<span class="-vertical-align--middle">...</span>'
      }
    };
  },
})
export default class Middle extends Vue {}
</script>

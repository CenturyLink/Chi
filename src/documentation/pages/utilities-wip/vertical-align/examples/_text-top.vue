<template lang="pug">
  <ComponentExample padding="-p--2" title="Text top" id="vertical-align-text-top" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use <code>-vertical-align--text-top</code> to align the top of an element with the top of the parent element's font.
    .-d--flex.-flex--wrap.-p--1.-text(slot="example")
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--text-top.-mr--1.example-vertical-align__block
        span text-top
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
        },
      ],
    };
  },
})
export default class TextTop extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: '<span class="-vertical-align--text-top">...</span>',
    };
  }
}
</script>

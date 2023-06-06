<template lang="pug">
  <ComponentExample padding="-p--2" title="Baseline" id="vertical-align-baseline" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use <code>-vertical-align--baseline</code> to align the baseline of an element with the baseline of its parent.
    .-d--flex.-flex--wrap.-p--1.-text(slot="example")
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--baseline.-mr--1.example-vertical-align__block
        span baseline
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
export default class Baseline extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: '<span class="-vertical-align--baseline">...</span>',
    };
  }
}
</script>

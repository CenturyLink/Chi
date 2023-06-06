<template lang="pug">
  <ComponentExample padding="-p--2" title="Bottom" id="vertical-align-bottom" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use <code>-vertical-align--bottom</code> to align the bottom of an element and its descendants with the bottom of the entire line.
    .-d--flex.-flex--wrap.-p--1.-text(slot="example")
      .-position--relative.-w--100.example-vertical-align
        span.-d--inline-block.-bg--secondary.-vertical-align--bottom.-mr--1.example-vertical-align__block
        span bottom
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
export default class Bottom extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: '<span class="-vertical-align--bottom">...</span>',
    };
  }
}
</script>

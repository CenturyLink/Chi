<template lang="pug">
  <ComponentExample padding="-p--2" title="Base" id="opacity-base" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use <code>-opacity--{value}</code> to change the opacity of an element.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--6.-w-md--4.-w-lg--2.-p--1(v-for="opacity in opacities" :key="opacity")
        .example-opacity.-rounded(style='height: 3rem;')
          .-text.-bg--black.-rounded(:class="`-opacity--${ opacity }`" style='height: 3rem;')
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
      opacities: [0, 20, 40, 60, 80, 100],
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ]
    };
  }
})
export default class Base extends Vue {
    get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.$data.opacities.map((opacity: number) => `<div class="-opacity--${ opacity }">...</div>`).join('\n');
  }
}
</script>

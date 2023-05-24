<template lang="pug">
  <ComponentExample padding="-p--2" title="Base" id="opacity-base" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use <code>-opacity--{value}</code> to change the opacity of an element.
    div
    <Wrapper slot="example">
      .chi-grid.-no-gutter
        .chi-col.-w--6.-w-md--4.-w-lg--2.-p--1(v-for="index in opacities" :key="index")
          .example-opacity.-rounded(style=`height:3rem;`)
            .-text.-bg--black.-rounded(:class="`-opacity--${index}`")(style=`height:3rem;`)
    </Wrapper>
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
          label: 'HTML Blueprint'
        }
      ]
    };
  }
})

export default class OpacityBase extends Vue {
  opacities = [0, 1, 2, 3, 4, 5]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.opacities.map(e => `<div class="-opacity--${20 * e}">...</div>`).join('\n');
  }
}
</script>

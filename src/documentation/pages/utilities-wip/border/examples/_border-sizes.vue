<template lang="pug">
  <ComponentExample title="Border Sizes" id="border-sizes" titleSize="h4" padding="-p--2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Control an element's border size by adjusting the size from <code>0</code> - <code>4</code>.
    .chi-grid.-text.-no-gutter.-text--center(slot="example")
      .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="border in borders")
        .-m--1.-p--1.-py--5.-bg--grey-10(:class="border") {{ border }}
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
export default class BorderSizes extends Vue {
  borders = ['-b--0', '-b--1', '-b--2', '-b--3', '-b--4']

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.borders.map(item => {
      return (
        `<div class="${item}"></div>`
      )
    }).join('\n');
  }
}
</script>

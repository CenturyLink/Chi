<template lang="pug">
  <ComponentExample padding="-p--2" title="Hover" id="opacity-hover" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use <code>-opacity-hover--{value}</code> to change the opacity of an element on hover.
    h4 Use <code>-opacity-hover--{value}</code> to change the opacity of an element on hover.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--6.-w-md--4.-w-lg--2(v-for="index in opacities")
        .-text.-text--center.-b--1.-rounded.-m--1.-p--2(:class="[`-opacity-hover--${index * 20}`, index === 5 ? '-opacity--60' : '']") {{index * 20 + '% on hover'}}
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

export default class OpacityHover extends Vue {
  opacities = [0, 1, 2, 3, 4, 5]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    return this.opacities.slice(0, 5).map(item => `<div class="-opacity-hover--${20 * item}">...</div>\n`).join('') +
  `<div class="-opacity--60 -opacity-hover--100">...</div>`;
  }
}
</script>

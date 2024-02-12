<template lang="pug">
  <ComponentExample title="Hybrid buttons" id="hybrid-buttons" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Button groups support all button types and styles, including icons.
        | Mix and match text and icons to form a hybrid button group.
    template(#example)
      .chi-button-group
        button(class=`chi-button`) Button
        button(class=`chi-button -icon`, aria-label="Button action")
          .chi-button__content
            i.chi-icon.icon-atom(aria-hidden="true")
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class HybridButtons extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-button-group">
  <button class="chi-button">Button</button>
  <button class="chi-button -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>`,
  };
}
</script>

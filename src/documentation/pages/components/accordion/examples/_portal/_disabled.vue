<template lang="pug">
<ComponentExample title="Disabled" id="disabled_portal" :tabs="exampleTabs" padding="-p--3 p-lg--6">
  template(#example-description)
    p.-text Make Accordions appear inactive by adding the class <code>-disabled</code> or the attribute <code>disabled</code> to Accordion trigger
  template(#example)
    .chi-accordion
      .chi-accordion__item
        button.chi-accordion__trigger.-disabled
          .chi-accordion__title
            | Accordion 1
          i.chi-icon.icon-chevron-down(aria-hidden="true")
        .chi-accordion__content
          p.chi-accordion__text Content goes here
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
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
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-accordion">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger -disabled">
      <div class="chi-accordion__title">Accordion 1</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`,
      },
    };
  },
})
export default class DisabledPortal extends Vue {}
</script>

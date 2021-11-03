<template lang="pug">
  <ComponentExample title="Disabled" id="disabled_lumen_centurylink" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
    div(slot="example-description")
      p.-text Make Accordions appear inactive by adding the class <code>-disabled</code> or the attribute <code>disabled</code> to Accordion trigger
    div(slot="example")
      .chi-accordion
        .chi-accordion__item
          button.chi-accordion__trigger.-disabled
            i.chi-icon.icon-chevron-down(aria-hidden="true")
            .chi-accordion__title
              | Accordion 1
          .chi-accordion__content
            p.chi-accordion__text Content goes here
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <JSNeeded slot="tab-description" />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-accordion">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger -disabled">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion 1</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>`,
      }
    }
  }
})
export default class DisabledLumenCenturyLink extends Vue {}
</script>

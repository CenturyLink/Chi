<template lang="pug">
  <ComponentExample title="Disabled" id="disabled_portal" :tabs="exampleTabs" padding="-p--3 p-lg--6">
    p.-text(slot="example-description") Make Accordions appear inactive by adding the class <code>-disabled</code> or the attribute <code>disabled</code> to Accordion trigger
    .chi-accordion(slot="example")
      .chi-accordion__item
        button.chi-accordion__trigger.-disabled
          .chi-accordion__title
            | Accordion 1
          i.chi-icon.icon-chevron-down(aria-hidden="true")
        .chi-accordion__content
          p.chi-accordion__text Content goes here
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `Web component code snippet`,
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
</div>`
      }
    };
  }
})
export default class DisabledPortal extends Vue {}
</script>

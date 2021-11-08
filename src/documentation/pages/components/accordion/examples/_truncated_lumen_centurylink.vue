<template lang="pug">
  <ComponentExample title="Truncated" id="truncated_lumen_centurylink" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
    p.-text(slot="example-description") Truncate long accordion titles by adding the class <code>-truncated</code> to <code>chi-accordion</code>.
    .chi-accordion.-truncated#example-truncated(slot="example")
      .chi-accordion__item
        button.chi-accordion__trigger
          i.chi-icon.icon-chevron-down(aria-hidden="true")
          .chi-accordion__title
            | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex
        .chi-accordion__content
          p.chi-accordion__text Content goes here
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    div(slot="code-htmlblueprint")
      <JSNeeded />
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
        htmlblueprint: `<div class="chi-accordion -truncated" id="example-truncated">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus enim. Nulla facilisi. Donec tortor elit, finibus ut lacus vel, elementum accumsan ex</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<script>
  const accordionTruncated = document.getElementById('example-truncated');

  chi.accordion(accordionTruncated);
<\/script>`
      }
    };
  }
})
export default class TruncatedLumenCenturyLink extends Vue {
  mounted() {
    chi.accordion(document.getElementById('example-truncated'));
  }
}
</script>

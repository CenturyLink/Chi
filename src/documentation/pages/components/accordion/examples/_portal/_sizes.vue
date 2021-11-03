<template lang="pug">
  <ComponentExample title="Sizes" id="sizes_portal" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
    div(slot="example")
      each size in ['sm', 'md']
        p.-text--bold.-pl--2= size
          div(class=`chi-accordion -${size}` id=`portal-example-size-${size}`)
            .chi-accordion__item
              button.chi-accordion__trigger
                .chi-accordion__title
                  | Accordion
                i.chi-icon.icon-chevron-down(aria-hidden="true")
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
        htmlblueprint: `<!-- sm-->
<div class="chi-accordion -sm" id="portal-example-size-sm">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<!-- md-->
<div class="chi-accordion -md" id="portal-example-size-md">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>


<script>
  chi.accordion(document.getElementById('portal-example-size-sm'));
  chi.accordion(document.getElementById('portal-example-size-md'));
<\/script>`
      }
    };
  }
})
export default class SizesPortal extends Vue {
  mounted() {
    chi.accordion(document.getElementById('portal-example-size-sm'));
    chi.accordion(document.getElementById('portal-example-size-md'));
  }
}
</script>

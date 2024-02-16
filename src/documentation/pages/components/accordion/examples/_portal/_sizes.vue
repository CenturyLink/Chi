<template lang="pug">
<ComponentExample title="Sizes" id="sizes_portal" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
  template(#example-description)
    p.-text Accordion supports the following sizes: <code>sm</code>, <code>md</code> (default).
  template(#example)
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

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class SizesPortal extends Vue {
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
<\/script>`,
  };

  mounted() {
    chi.accordion(document.getElementById('portal-example-size-sm'));
    chi.accordion(document.getElementById('portal-example-size-md'));
  }
}
</script>

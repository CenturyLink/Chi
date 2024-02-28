<template lang="pug">
<ComponentExample title="Sizes" id="sizes_lumen_centurylink" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
  template(#example-description)
    p.-text Accordion supports the following sizes: <code>sm</code>, <code>md</code> (default), <code>lg</code>, and <code>xl</code>.
  template(#example)
    each size in ['sm', 'md', 'lg', 'xl']
      p.-text--bold.-pl--2= size
      div(class=`chi-accordion -${size}` id=`example-size-${size}`)
        .chi-accordion__item
          button.chi-accordion__trigger
            i.chi-icon.icon-chevron-down(aria-hidden="true")
            .chi-accordion__title
              | Accordion
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
export default class SizesLumenCenturyLink extends Vue {
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
<div class="chi-accordion -sm" id="example-size-sm">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<!-- md-->
<div class="chi-accordion -md" id="example-size-md">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<!-- lg-->
<div class="chi-accordion -lg" id="example-size-lg">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>

<!-- xl-->
<div class="chi-accordion -xl" id="example-size-xl">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <p class="chi-accordion__text">Content goes here</p>
    </div>
  </div>
</div>


<script>
  chi.accordion(document.getElementById('example-size-sm'));
  chi.accordion(document.getElementById('example-size-md'));
  chi.accordion(document.getElementById('example-size-lg'));
  chi.accordion(document.getElementById('example-size-xl'));
<\/script>`,
  };

  mounted() {
    chi.accordion(document.getElementById('example-size-sm'));
    chi.accordion(document.getElementById('example-size-md'));
    chi.accordion(document.getElementById('example-size-lg'));
    chi.accordion(document.getElementById('example-size-xl'));
  }
}
</script>

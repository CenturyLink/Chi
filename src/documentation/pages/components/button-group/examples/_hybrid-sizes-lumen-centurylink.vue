<template lang="pug">
  <ComponentExample titleSize="h4" title="Hybrid buttons sizes" id="hybrid-buttons-sizes-lumen-centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Hybrid buttons support the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
        |  <code>lg</code>, <code>xl</code>.
        | The default size is <code>md</code>.
    template(#example)
      .-p--0.-d--flex.-flex--column(v-for="size in sizes")
        p.-text--bold.-pl--1.-mb--0 -{{size}}
        .chi-button-group.-m--1
          button(:class="`chi-button -${size}`") Button
          button(:class="`chi-button -${size} -icon`", aria-label="Button action")
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
export default class HybridSizesLumenCenturyLink extends Vue {
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
  sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<!-- xs -->
<div class="chi-button-group">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- sm -->
<div class="chi-button-group">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- md -->
<div class="chi-button-group">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- lg -->
<div class="chi-button-group">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- xl -->
<div class="chi-button-group">
  <button class="chi-button -xl">Button</button>
  <button class="chi-button -xl -icon" aria-label="Button action">
    <div class="chi-button__content">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
    </div>
  </button>
</div>`,
  };
}
</script>

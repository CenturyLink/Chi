<template lang="pug">
  <ComponentExample titleSize="h4" title="Hybrid buttons sizes" padding="-p--0" id="hybrid-buttons-sizes-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Hybrid buttons support the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>, <code>xl</code>.
      | The default size is <code>md</code>.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-w-md--6
        .-p--3.-d--flex(style="justify-content: center;")
          each type, val in {Primary:'primary', Dark:'dark'}
            div.-pr--2
              chi-button(color=type, variant='outline')= val
      .chi-col.-w--12.-w-md--6
        .-p--3.-bg--black.-d--flex(style="justify-content: center;")
          each type, val in {Secondary:'secondary', Light:'light'}
            div.-pr--2
              chi-button(color=type, variant='outline')= val
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
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
      },
    };
  },
})
export default class HybridSizesLumenCenturyLink extends Vue {}
</script>

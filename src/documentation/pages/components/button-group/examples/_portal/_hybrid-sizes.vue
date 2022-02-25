<template lang="pug">
  <ComponentExample titleSize="h4" title="Hybrid buttons sizes" id="hybrid-buttons-sizes-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Hybrid buttons support the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>.
      | The default size is <code>md</code>.
    .-p--0.-d--flex.-flex--column(slot="example" v-for="size in sizes")
      p.-text--bold.-pl--1.-mb--0 -{{size}}
      .chi-button-group.-m--1
        button(:class="`chi-button -${size}`") Button
        button(:class="`chi-button -${size} -icon`", aria-label="Button action")
          .chi-button__content
            i.chi-icon.icon-atom(aria-hidden="true")
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
      sizes: ['xs', 'sm', 'md', 'lg'],
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
</div>`,
      },
    };
  },
})
export default class HybridSizes extends Vue {}
</script>

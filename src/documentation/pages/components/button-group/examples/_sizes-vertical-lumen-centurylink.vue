<template lang="pug">
  <ComponentExample titleSize="h4" title="Vertical" padding="-p--0" id="sizes-vertical-lumen-centurylink" :tabs="exampleTabs">
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-w-md--6
        .-p--3.-d--flex(style="justify-content: center;")
          each type, val in {Base:'', Primary:'primary', Dark:'dark'}
            div.-pr--2
              chi-button(color=type)= val
      .chi-col.-w--12.-w-md--6
        .-p--3.-bg--black.-d--flex(style="justify-content: center;")
          each type, val in {Secondary:'secondary', Light:'light'}
            div.-pr--2
              chi-button(color=type)= val
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      .p--text.chi-tab__description
        | Chi supports button classes on <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> and 
        | <code>&lt;input&gt;</code> elements.
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
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
</div>
<!-- sm -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
</div>
<!-- md -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
</div>
<!-- lg -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
</div>
<!-- xl -->
<div class="chi-button-group -vertical -fluid">
  <button class="chi-button -xl">Button</button>
  <button class="chi-button -xl">Button</button>
  <button class="chi-button -xl">Button</button>
</div>`,
      },
    };
  },
})
export default class SizesVerticalLumenCenturyLink extends Vue {}
</script>

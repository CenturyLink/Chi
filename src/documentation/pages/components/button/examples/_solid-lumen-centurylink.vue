<template lang="pug">
  <ComponentExample titleSize="h4" title="Solid" padding="-p--0" id="solid-lumen-centurylink" :tabs="exampleTabs">
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
          active: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<!-- For light backgrounds -->
<chi-button>Base</chi-button>
<chi-button color="primary">Primary</chi-button>
<chi-button color="dark">Dark</chi-button>

<!-- For dark backgrounds -->
<chi-button color="secondary">Secondary</chi-button>
<chi-button color="light">Light</chi-button>`,
        htmlblueprint: `<!-- For light backgrounds -->
<button class="chi-button">Base</button>
<button class="chi-button -primary">Primary</button>
<button class="chi-button -dark">Dark</button>

<!-- For dark backgrounds -->
<button class="chi-button -secondary">Secondary</button>
<button class="chi-button -light">Light</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary" href="#" role="button">Link button</a>
<input class="chi-button -primary" type="button" value="Input button">
<input class="chi-button -primary" type="submit" value="Submit button">`,
      },
    };
  },
})
export default class SolidLumenCenturyLink extends Vue {}
</script>

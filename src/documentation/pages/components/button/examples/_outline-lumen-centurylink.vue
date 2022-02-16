<template lang="pug">
  <ComponentExample titleSize="h4" title="Outline" padding="-p--0" id="outline-lumen-centurylink" :tabs="exampleTabs">
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
<chi-button color="primary" variant="outline">Primary</chi-button>
<chi-button color="dark" variant="outline">Dark</chi-button>

<!-- For dark backgrounds -->
<chi-button color="secondary" variant="outline">Secondary</chi-button>
<chi-button color="light" variant="outline">Light</chi-button>`,
        htmlblueprint: `<!-- For light backgrounds -->
<button class="chi-button -primary -outline">Primary</button>
<button class="chi-button -dark -outline">Dark</button>

<!-- For dark backgrounds -->
<button class="chi-button -secondary -outline">Secondary</button>
<button class="chi-button -light -outline">Light</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary -outline" href="#" role="button">Link button</a>
<input class="chi-button -primary -outline" type="button" value="Input button">
<input class="chi-button -primary -outline" type="submit" value="Submit button">`,
      },
    };
  },
})
export default class OutlineLumenCenturyLink extends Vue {}
</script>

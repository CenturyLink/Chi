<template lang="pug">
  <ComponentExample titleSize="h3" title="Outline" padding="-p--0" id="outline-lumen-centurylink" :tabs="exampleTabs">
    template(#example)
      .chi-grid.-no-gutter
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
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      .p--text.chi-tab__description
        | Chi supports button classes on <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> and
        | <code>&lt;input&gt;</code> elements.
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
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
export default class OutlineLumenCenturyLink extends Vue { }
</script>

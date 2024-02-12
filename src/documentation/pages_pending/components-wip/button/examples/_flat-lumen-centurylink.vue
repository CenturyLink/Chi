<template lang="pug">
  <ComponentExample titleSize="h3" title="Flat" padding="-p--0" id="flat-lumen-centurylink" :tabs="exampleTabs">
    template(#example)
      .-d--flex
        .chi-grid.-no-gutter
          .chi-col.-w--12.-w-md--6
            .-p--3.-d--flex(style="justify-content: center;")
              each type, val in {Base: '', Primary:'primary', Dark:'dark'}
                div.-pr--2
                  chi-button(color=type, variant='flat')= val
          .chi-col.-w--12.-w-md--6
            .-p--3.-bg--black.-d--flex(style="justify-content: center;")
              each type, val in {Secondary:'secondary', Light:'light'}
                div.-pr--2
                  chi-button(color=type, variant='flat')= val
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
<chi-button variant="flat">Base</chi-button>
<chi-button color="primary" variant="flat">Primary</chi-button>
<chi-button color="dark" variant="flat">Dark</chi-button>

<!-- For dark backgrounds -->
<chi-button color="secondary" variant="flat">Secondary</chi-button>
<chi-button color="light" variant="flat">Light</chi-button>`,
        htmlblueprint: `<!-- For light backgrounds -->
<button class="chi-button -flat">Base</button>
<button class="chi-button -primary -flat">Primary</button>
<button class="chi-button -dark -flat">Dark</button>

<!-- For dark backgrounds -->
<button class="chi-button -secondary -flat">Secondary</button>
<button class="chi-button -light -flat">Light</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary -flat" href="#" role="button">Link button</a>
<input class="chi-button -primary -flat" type="button" value="Input button">
<input class="chi-button -primary -flat" type="submit" value="Submit button">`,
      },
    };
  },
})
export default class FlatLumenCenturyLink extends Vue {}
</script>

<template lang="pug">
  <ComponentExample titleSize="h2" title="Examples" id="examples-portal" :tabs="exampleTabs">
    template(#example-description)
      p.-text(class="-mb--3 -text")
        | Use the primary button example for high emphasis actions, secondary button example for medium
        | emphasis actions, and tertiary button example for low emphasis actions.
    template(#example)
      .chi-form__item
        .-d--flex.-align-items--center
          .-pr--2
            chi-button(color="primary") Primary
          .-pr--2
            chi-button Secondary
          .-pr--2
            chi-button(size="xs") Tertiary
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
        webcomponent: `<!-- Primary -->
<chi-button color="primary">Primary</chi-button>
<!-- Secondary -->
<chi-button>Secondary</chi-button>
<!-- Tertiary -->
<chi-button size="xs">Tertiary</chi-button>`,
        htmlblueprint: `<!-- Primary -->
<button class="chi-button -primary">Primary</button>
<!-- Secondary -->
<button class="chi-button">Secondary</button>
<!-- Tertiary -->
<button class="chi-button -xs">Tertiary</button>

<!-- Button classes can be used on other elements -->
<a class="chi-button -primary" href="#" role="button">Link button</a>
<input class="chi-button -primary" type="button" value="Input button">
<input class="chi-button -primary" type="submit" value="Submit button">`,
      },
    };
  },
})
export default class ExamplesPortal extends Vue { }
</script>

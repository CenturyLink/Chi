<template lang="pug">
<ComponentExample titleSize="h2" title="Disabled" id="disabled-portal" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Make buttons appear inactive by adding the <code>disabled</code> boolean attribute
      | or <code>-disabled</code> class.
  template(#example)
    .-d--flex.-align-items--center
      .-pr--2
        chi-button(color="primary", disabled) Primary
      .-pr--2
        chi-button(disabled) Secondary
      .-pr--2
        chi-button(size="xs", disabled) Tertiary
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
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
<chi-button color="primary" disabled>Primary</chi-button>
<!-- Secondary -->
<chi-button disabled>Secondary</chi-button>
<!-- Tertiary -->
<chi-button size="xs" disabled>Tertiary</chi-button>`,
        htmlblueprint: `<!-- Disabled boolean attribute -->
<button class="chi-button -primary" disabled>Primary</button>
<button class="chi-button" disabled>Secondary</button>
<button class="chi-button -xs" disabled>Tertiary</button>

<!-- Disabled class -->
<button class="chi-button -primary -disabled">Primary</button>
<button class="chi-button -disabled">Secondary</button>
<button class="chi-button -xs -disabled">Tertiary</button>`,
      },
    };
  },
})
export default class DisabledPortal extends Vue {}
</script>

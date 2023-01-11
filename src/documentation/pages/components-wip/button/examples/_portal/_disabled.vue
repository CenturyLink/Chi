<template lang="pug">
  <ComponentExample titleSize="h2" title="Disabled" id="disabled-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Make buttons appear inactive by adding the <code>disabled</code> boolean attribute
      | or <code>-disabled</code> class.
    .-d--flex.-align-items--center(slot="example")
      .-pr--2
        chi-button(color="primary", disabled) Primary
      .-pr--2
        chi-button(disabled) Secondary
      .-pr--2
        chi-button(size="xs", disabled) Tertiary
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

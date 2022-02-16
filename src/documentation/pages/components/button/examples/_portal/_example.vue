<template lang="pug">
  <ComponentExample title="Examples" id="examples-portal" :tabs="exampleTabs">
    p.-text(slot="example-description" class="-mb--3 -text")
      | Use the primary button example for high emphasis actions, secondary button example for medium
      | emphasis actions, and tertiary button example for low emphasis actions.
    .chi-form__item(slot="example")
      .-d--flex.-align-items--center
        .-pr--2
          chi-button(color="primary") Primary
        .-pr--2
          chi-button Secondary
        .-pr--2
          chi-button(size="xs") Tertiary
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
export default class ExamplesPortal extends Vue {}
</script>

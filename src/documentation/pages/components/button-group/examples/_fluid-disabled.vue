<template lang="pug">
  <ComponentExample titleSize="h4" title="Disable Fluidity" id="fluid-disable" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | To disable the fluidity of a specific button in a fluid button group,
      | apply the class <code>-no-fluid</code> to the button.
    div(slot="example")
      chi-button
        chi-icon(icon='atom')
        span Button
      chi-button.-mr--2.-ml--2()
        span Button
        chi-icon(icon='atom')
      chi-button
        chi-icon(icon='atom')
        span Button
        chi-icon(icon='atom')
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
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-button-group -fluid">
  <button class="chi-button">Button</button>
  <button class="chi-button -no-fluid">Button</button>
  <button class="chi-button">Button</button>
</div>`,
      },
    };
  },
})
export default class FluidDisabled extends Vue {}
</script>

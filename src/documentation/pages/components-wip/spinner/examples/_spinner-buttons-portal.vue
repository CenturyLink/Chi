<template lang="pug">
  <ComponentExample title="Spinners in Buttons" titleSize="h4" id="spinner-buttons-portal" :tabs="exampleTabs">
    <Wrapper slot="example">
      chi-button(class='-mr--3' v-for="button in $data.buttonInputs" :key="button.text" :size="button.buttonSize")
        span {{button.text}}
        chi-spinner(color='muted' :size="button.spinnerSize")
    </Wrapper>
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
      buttonInputs: [{text: 'Button', buttonSize: '', spinnerSize: ''}, {text: 'Small', buttonSize: 'sm', spinnerSize: 'xs'}, {text: 'Large', buttonSize: 'lg', spinnerSize: 'sm--2'}],
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-button color="primary" variant="outline">
  <span>Button</span>
  <chi-spinner color="primary"></chi-spinner>
</chi-button>
<chi-button size="sm" color="primary" variant="outline">
  <span>Small</span>
  <chi-spinner color="primary" size="xs"></chi-spinner>
</chi-button>
<chi-button size="lg" color="primary" variant="outline">
  <span>Large</span>
  <chi-spinner color="primary" size="sm--2"></chi-spinner>
</chi-button>`,
        htmlblueprint: `<button class="chi-button -primary -outline">
  <div class="chi-button__content">
    <span>Button</span>
    <svg class="chi-spinner -icon--primary" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</button>
<button class="chi-button -primary -outline">
  <div class="chi-button__content">
    <span>Small</span>
    <svg class="chi-spinner -icon--primary -xs" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</button>
<button class="chi-button -primary -outline">
  <div class="chi-button__content">
    <span>Large</span>
    <svg class="chi-spinner -icon--primary -sm--2" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</button>`
      }
    };
  }
})
export default class SpinnerButtonsPortal extends Vue {}
</script>

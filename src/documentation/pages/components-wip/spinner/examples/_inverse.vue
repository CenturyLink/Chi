<template lang="pug">
  <ComponentExample title="Inverse" titleSize="h4" padding="-p--0" id="inverse" :tabs="exampleTabs">
    div(style="position:relative;height:25rem;" slot="example")
      chi-spinner(color='primary', backdrop='inverse')
    <Wrapper slot="code-webcomponent">
      .chi-tab__description
        | Set the <code>backdrop</code> value to <code>inverse</code> to render spinners on light backgrounds.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        | Apply the class <code>-inverse</code> to render spinners on light backgrounds.
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
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-spinner color="primary" backdrop="inverse"></chi-spinner>`,
        htmlblueprint: `<div class="chi-backdrop -center -inverse">
  <div class="chi-backdrop__wrapper">
    <svg class="chi-spinner -icon--primary" viewBox="0 0 66 66">
      <title>Loading</title>
      <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
    </svg>
  </div>
</div>`
      }
    };
  }
})
export default class Inverse extends Vue {}
</script>

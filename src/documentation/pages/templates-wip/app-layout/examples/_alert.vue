<template lang="pug">
  <ComponentExample title="Base with alert" id="base_with_alert" :tabs="exampleTabs">
    chi-main(title='Page Title' slot="example")
      chi-alert(color='info' icon='circle-info' slot='page-alert' closable) This is a page level info alert
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      div(v-html="footerTemplate" slot="footer")

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
import { generateExampleFooter } from './_base.vue';

declare const chi: any;

@Component({
  data: () => {
    return {
      footerTemplate: generateExampleFooter('alert-language-dropdown-button').htmlblueprint,
      exampleTabs: [
        {
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-main title="Page Title">
  <chi-alert color="info" icon="circle-info" slot="page-alert" closable>This is a page level info alert</chi-alert>
  <!-- Page content goes here -->
  ${generateExampleFooter().webcomponent}
</chi-main>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
<\/script>`,
        htmlblueprint: `<div class="chi-main">
  <div class="chi-main__alert">
    <div class="chi-alert -info -close" role="alert">
      <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
      <div class="chi-alert__content">
        <p class="chi-alert__text">This is a page level info alert</p>
      </div>
      <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
    </div>
  </div>
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">
          Page Title
        </div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${generateExampleFooter().htmlblueprint}
</div>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
<\/script>`
      }
    };
  }
})
export default class Alert extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('alert-language-dropdown-button'));
  }
}
</script>

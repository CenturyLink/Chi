<template lang="pug">
  <ComponentExample title="Base with alert" id="base_with_alert" :tabs="exampleTabs" padding="0">
    chi-main(title='Page Title' slot="example")
      chi-alert(color='info' icon='circle-info' slot='page-alert' closable) This is a page level info alert
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      div(slot="footer")
        div(v-html="footers.lumen" v-if="['lumen', 'portal'].includes($store.state.themes.theme)")
        div(v-html="footers.centurylink" v-if="$store.state.themes.theme === 'centurylink'")
        div(v-html="footers.brightspeed" v-if="$store.state.themes.theme === 'brightspeed'")

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
import {
  generateAllExampleFooters,
  generateExampleFooter
} from '~/pages/templates-wip/app-layout/examples/_footer.vue';

declare const chi: any;

@Component({
  data: () => {
    return {
      footers: generateAllExampleFooters('alert-language-dropdown-button'),
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
        webcomponent: '',
        htmlblueprint: ''
      }
    };
  }
})
export default class Alert extends Vue {
  mounted() {
    const languageDropdown = document.getElementById('alert-language-dropdown-button');

    if (languageDropdown) {
      chi.dropdown(languageDropdown);
    }

    this._setCodeSnippets();
  }

  updated() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    const footerTemplate = generateExampleFooter(this.$store.state.themes.theme);

    this.$data.codeSnippets.webcomponent = `<chi-main title="Page Title">
  <chi-alert color="info" icon="circle-info" slot="page-alert" closable>This is a page level info alert</chi-alert>
  <!-- Page content goes here -->
  ${footerTemplate}
</chi-main>

${this.$store.state.themes.theme === 'centurylink' ? '' : '<script>chi.dropdown(document.getElementById(\'language-dropdown-button\'));<\/script>'}`
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main">
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
  ${footerTemplate}
</div>

${this.$store.state.themes.theme === 'centurylink' ? '' : '<script>chi.dropdown(document.getElementById(\'language-dropdown-button\'));<\/script>'}`;
  }
}
</script>

<template lang="pug">
  <ComponentExample title="Base with alert" id="base_with_alert" :tabs="exampleTabs" padding="0">
    template(#example)
      chi-main(title='Page Title')
        div(slot="page-alert")
          chi-alert(color='info' icon='circle-info' closable) This is a page level info alert
        .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
        div(slot="footer")
          div(v-html="footers.lumen" v-if="['lumen', 'portal'].includes(selectedTheme)")
          div(v-html="footers.centurylink" v-if="selectedTheme === 'centurylink'")
          div(v-html="footers.brightspeed" v-if="selectedTheme === 'brightspeed'")

    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import {
  generateAllExampleFooters,
  generateExampleFooter,
} from '~/pages/templates-wip/app-layout/examples/_footer.vue';

declare const chi: any;

@NuxtComponent({})
export default class Alert extends Vue {
  selectedTheme = useSelectedTheme()
  footers = generateAllExampleFooters('alert-language-dropdown-button');

  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: '',
    htmlblueprint: '',
  };

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
    const footerTemplate = generateExampleFooter(this.selectedTheme);

    this.codeSnippets.webcomponent = `<chi-main title="Page Title">
  <chi-alert color="info" icon="circle-info" slot="page-alert" closable>This is a page level info alert</chi-alert>
  <!-- Page content goes here -->
  ${footerTemplate}
</chi-main>

${this.selectedTheme === 'centurylink'
        ? ''
        : `<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
      }`;
    this.codeSnippets.htmlblueprint = `<div class="chi-main">
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

${this.selectedTheme === 'centurylink'
        ? ''
        : `<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
      }`;
  }
}
</script>

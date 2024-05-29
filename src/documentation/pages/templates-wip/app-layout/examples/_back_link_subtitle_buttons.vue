<template lang="pug">
<ComponentExample title="Base with back link, subtitle and buttons" id="base_with_back_link_subtitle_buttons" :tabs="exampleTabs" padding="0">
  template(#example)
    chi-main(backlink='Back link' title='Page title' subtitle='Page subtitle')
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      div(slot='header-actions')
        button.chi-button.-primary Primary
      div(slot="footer")
        div(v-html="footers.lumen" v-if="['lumen', 'portal', 'lumenrebrand24', 'portalrebrand24'].includes(selectedTheme)")
        div(v-html="footers.centurylink" v-if="selectedTheme === 'centurylink'")
        div(v-html="footers.brightspeed" v-if="selectedTheme === 'brightspeed'")

  template(#code-webcomponent)
    .chi-tab__description
      | Add buttons in the header of the application layout by defining <code>slot="header-actions"</code> on each <code>chi-button</code>.
    Copy(lang="html" :code="codeSnippets.webcomponent")

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
export default class BackLinkSubtitleButtons extends Vue {
  selectedTheme = useSelectedTheme();
  footers = generateAllExampleFooters('back-link-subtitle-buttons-language-dropdown-button');
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
    const languageDropdown = document.getElementById('back-link-subtitle-buttons-language-dropdown-button');

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

    this.codeSnippets.webcomponent = `<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <button class="chi-button -primary" slot="header-actions">Primary</button>
  <!-- Page content goes here -->
  ${footerTemplate}
</chi-main>

${
  this.selectedTheme === 'centurylink'
    ? ''
    : `<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
}`;
    this.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page title</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${footerTemplate}
</div>

${
  this.selectedTheme === 'centurylink'
    ? ''
    : `<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
}`;
  }
}
</script>

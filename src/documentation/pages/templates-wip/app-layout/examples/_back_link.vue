<template lang="pug">
<ComponentExample title="Base with back link" id="base_with_back_link" :tabs="exampleTabs" padding="0">
  template(#example)
    chi-main(backlink='Back link' title='Page title')
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      div(slot="footer")
        template(v-if="['lumen', 'portal'].includes(selectedTheme)")
          div(v-html="footers.lumen")
        template(v-if="selectedTheme === 'centurylink'")
          div(v-html="footers.centurylink")
        template(v-if="selectedTheme === 'brightspeed'")
          div(v-html="footers.brightspeed")

  template(#code-webcomponent)
    .chi-tab__description
      | Use the <code>backlink=""</code> attribute to display a link above the title of the application layout.
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
export default class BackLink extends Vue {
  selectedTheme = useSelectedTheme();
  footers = generateAllExampleFooters('back-link-language-dropdown-button');
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
    const languageDropdown = document.getElementById('back-link-language-dropdown-button');

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

    this.codeSnippets.webcomponent = `<chi-main backlink="Back link" title="Page title">
  <!-- Page content goes here -->
  ${footerTemplate}
</chi-main>

${this.selectedTheme === 'centurylink'
        ? ''
        : `<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
      }`;
    this.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
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

${this.selectedTheme === 'centurylink'
        ? ''
        : `<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
      }`;
  }
}
</script>

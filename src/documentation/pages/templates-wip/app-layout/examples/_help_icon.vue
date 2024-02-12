<template lang="pug">
  <ComponentExample title="Base with help icon" id="base_with_help_icon" :tabs="exampleTabs" padding="0">
  template(#example)
    chi-main(title='Page title')
      template(#help-icon)
        chi-button#help-icon__help-button(type='icon' size='sm' variant='flat' alternative-text='Help' @click="togglePopover")
          chi-icon(icon='circle-question-outline')
      template(#help-icon)
        chi-popover(ref="popover" position='right-start' variant='text' arrow reference='#help-icon__help-button')
          | Popover content.
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
    template(#footer)
      template(v-if="['lumen', 'portal'].includes(selectedTheme)")
        div(v-html="footers.lumen")
      template(v-if="selectedTheme === 'centurylink'")
        div(v-html="footers.centurylink")
      template(v-if="selectedTheme === 'brightspeed'")
        div(v-html="footers.brightspeed")

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
export default class HelpIcon extends Vue {
  selectedTheme = useSelectedTheme();
  footers = generateAllExampleFooters('help-icon-language-dropdown-button');
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
    const languageDropdown = document.getElementById('help-icon-language-dropdown-button');

    if (languageDropdown) {
      chi.dropdown(languageDropdown);
    }

    this._setCodeSnippets();
  }

  updated() {
    this._setCodeSnippets();
  }

  togglePopover() {
    (this.$refs.popover as any).toggle();
  }

  _setCodeSnippets() {
    const footerTemplate = generateExampleFooter(this.selectedTheme);

    this.codeSnippets.webcomponent = `<chi-main title="Page title">
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  <!-- Page content goes here -->
  ${footerTemplate}
</chi-main>

<script>${this.selectedTheme === 'centurylink'
        ? ''
        : `\n  chi.dropdown(document.getElementById('language-dropdown-button'));`
      }
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`;
    this.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">
          Page title
          <div class="chi-button -icon -flat -sm" id="example__help-button"  data-position="right-start" data-target="#example__help-popover" aria-label="Help" slot="help-icon">
            <div class="chi-button__content">
              <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
            </div>
          </div>
          <section class="chi-popover chi-popover--right-start" id="example__help-popover" aria-modal="true" role="dialog">
            <div class="chi-popover__content">
              <p class="chi-popover__text">Popover content.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${footerTemplate}
</div>

<script>${this.selectedTheme === 'centurylink'
        ? ''
        : `\n  chi.dropdown(document.getElementById('language-dropdown-button'));`
      }
  chi.popover(document.getElementById('example__help-button'));
<\/script>`;
  }
}
</script>

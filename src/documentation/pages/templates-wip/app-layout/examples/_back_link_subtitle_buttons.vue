<template lang="pug">
  <ComponentExample title="Base with back link, subtitle and buttons" id="base_with_back_link_subtitle_buttons" :tabs="exampleTabs" padding="0">
    chi-main(backlink='Back link' title='Page title' subtitle='Page subtitle' slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      button.chi-button.-primary(slot='header-actions') Primary
      div(slot="footer")
        div(v-html="footers.lumen" v-if="['lumen', 'portal'].includes($store.state.themes.theme)")
        div(v-html="footers.centurylink" v-if="$store.state.themes.theme === 'centurylink'")
        div(v-html="footers.brightspeed" v-if="$store.state.themes.theme === 'brightspeed'")

    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Add buttons in the header of the application layout by defining <code>slot="header-actions"</code> on each <code>chi-button</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { generateExampleFooter } from '~/pages/templates-wip/app-layout/examples/_footer.vue';

declare const chi: any;

@Component({
  data: () => {
    return {
      footers: {
        lumen: generateExampleFooter('back-link-subtitle-buttons-language-dropdown-button'),
        centurylink: generateExampleFooter('back-link-subtitle-buttons-language-dropdown-button', 'centurylink'),
        brightspeed: generateExampleFooter('back-link-subtitle-buttons-language-dropdown-button', 'brightspeed'),
      },
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
export default class BackLinkSubtitleButtons extends Vue {
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
    const footerTemplate = generateExampleFooter(
      'language-dropdown-button',
      this.$store.state.themes.theme
    );

    this.$data.codeSnippets.webcomponent = `<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <button class="chi-button -primary" slot="header-actions">Primary</button>
  <!-- Page content goes here -->
  ${footerTemplate}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`;
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main">
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

<script>chi.dropdown(document.getElementById('language-dropdown-button'))<\/script>`;
  }
}
</script>

<template lang="pug">
  <ComponentExample title="Base with back link and subtitle" id="base_with_back_link_subtitle" :tabs="exampleTabs">
    chi-main(backlink='Back link' title='Page title' subtitle='Page subtitle' slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      div(v-html="footerTemplate" slot="footer")

    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Use the <code>subtitle=""</code> attribute to display a subtitle next to the title of the application layout.
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
import { generateExampleFooter } from './_base.vue';

declare const chi: any;

@Component({
  data: () => {
    return {
      footerTemplate: generateExampleFooter('back-link-subtitle-language-dropdown-button').htmlblueprint,
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
        webcomponent: `<chi-main backlink="Back link" title="Page title" subtitle="Page subtitle">
  <!-- Page content goes here -->
  ${generateExampleFooter().webcomponent}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`,
        htmlblueprint: `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs" aria-hidden="true"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page title</div>
        <div class="chi-main__title-subheading">Page subtitle</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${generateExampleFooter().htmlblueprint}
</div>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
      }
    };
  }
})
export default class BackLinkSubtitle extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('back-link-subtitle-language-dropdown-button'));
  }
}
</script>

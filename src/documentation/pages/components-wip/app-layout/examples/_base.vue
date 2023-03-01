<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    chi-main(title='Page title' slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      div(v-html="footerTemplate" slot="footer")

    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Use the <code>title=""</code> attribute to display a title above the application layout.
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
import { FOOTER_LANGUAGE_DROPDOWN_ITEMS, FOOTER_LINKS } from '~/fixtures/fixtures';

declare const chi: any;

@Component({
  data: () => {
    return {
      footerTemplate: generateExampleFooter('base-language-dropdown-button').htmlblueprint,
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
        webcomponent: `<chi-main title="Page title">
  <!-- Page content goes here -->
  ${generateExampleFooter().webcomponent}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`,
        htmlblueprint: `<div class="chi-main">
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
  ${generateExampleFooter().htmlblueprint}
</div>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
      }
    };
  }
})
export default class Base extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('base-language-dropdown-button'));
  }
}

export const generateExampleFooter = (id = 'language-dropdown-button') => {
  return {
    webcomponent: `<footer class="chi-footer" slot="footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="${id}" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${FOOTER_LANGUAGE_DROPDOWN_ITEMS.map(({href, name}, index) => `<a class="chi-dropdown__menu-item${ index === 0 ? ' -active' : ''}" href="${href}">${name}</a>`).join('\n              ')}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${FOOTER_LINKS.map(({href, title}) => `<li>
                <a href="${href}">${title}</a>
              </li>`).join('\n              ')}
            </ul>
            <div class="chi-footer__copyright">&copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`,
    htmlblueprint: `<footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="${id}" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${FOOTER_LANGUAGE_DROPDOWN_ITEMS.map(({href, name}, index) => `<a class="chi-dropdown__menu-item${ index === 0 ? ' -active' : ''}" href="${href}">${name}</a>`).join('\n              ')}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${FOOTER_LINKS.map(({href, title}) => `<li>
                <a href="${href}">${title}</a>
              </li>`).join('\n              ')}
            </ul>
            <div class="chi-footer__copyright">&copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>`
  }
};
</script>

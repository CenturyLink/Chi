<template lang="pug">
  <ComponentExample title="Internal" id="internal-lumen-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Show the internal footer for authenticated users.
    footer.chi-footer(slot='example')
      .chi-footer__content
        .chi-footer__internal
          .chi-footer__internal-content.-mw--1200
            .chi-dropdown.chi-footer__language
              a.chi-button.-icon.-flat.-light.-sm.chi-dropdown__trigger(id="language__dropdown_button" ref="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language")
                .chi-button__content
                  i.chi-icon.icon-globe-network(aria-hidden="true")
                  span English
              .chi-dropdown__menu.-w--sm.-text--body
                a.chi-dropdown__menu-item(v-for="(link, index) in languageItems" :key="index" :href="link.href" :class="index === 0 ? '-active' : ''")
                  | {{link.name}}
            .chi-footer__links
              ul
                li(v-for="(item, index) in footerLinks" :key="index")
                  a(:href="item.href" :target="item.target" :class="item.class") {{item.title}}
              .chi-footer__copyright
                | &copy; 2022 Lumen Technologies. All Rights Reserved.
                | Lumen is a registered trademark in the United States, EU and certain other countries.
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ILanguage, ILink } from '../../../../models/models';
import { FOOTER_LANGUAGE_DROPDOWN_ITEMS, FOOTER_LINKS } from '../fixtures';

declare const chi: any;

@Component({
  data: () => {
    return {
      footerLinks: FOOTER_LINKS,
      languageItems: FOOTER_LANGUAGE_DROPDOWN_ITEMS,
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``
      }
    };
  }
})
export default class InternalLumenPortal extends Vue {
  dropdown: any;

  created() {
    this._setCodeSnippets()
  }

  _setCodeSnippets() {
    let languageOptions = '', footerLinks = '';

    this.$data.languageItems.forEach((language: ILanguage, index: number) => {
      languageOptions += `
            <a class="chi-dropdown__menu-item${index === 0 ? ' -active' : ''}" href="${language.href}">${language.name}</a>`;
    });

    this.$data.footerLinks.forEach((footerLink: ILink) => {
      footerLinks += `
            <li>
              <a href="${footerLink.href}"${footerLink.target ? ' target="' + footerLink.target + '"' : ''}${footerLink.class ? ' class="' + footerLink.class + '"' : ''}>${footerLink.title}</a>
            </li>`
    })
    this.$data.codeSnippets.htmlblueprint = `<footer class="chi-footer">
  <div class="chi-footer__content">
    <div class="chi-footer__internal">
      <div class="chi-footer__internal-content -mw--1200">
        <div class="chi-dropdown chi-footer__language">
          <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="example__footer_language_dropdown_button" data-position="top-start" aria-label="Select your preferred language">
            <div class="chi-button__content">
              <i class="chi-icon icon-globe-network" aria-hidden="true"></i>
              <span>English</span>
            </div>
          </a>
          <div class="chi-dropdown__menu -w--sm -text--body">${languageOptions}
          </div>
        </div>
        <div class="chi-footer__links">
          <ul>${footerLinks}
          </ul>
          <div class="chi-footer__copyright">&copy; 2022 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
        </div>
      </div>
    </div>
  </div>
</footer>

<script>chi.dropdown(document.getElementById('example__footer_language_dropdown_button'));<\/script>`
  }

  mounted() {
    this.dropdown = chi.dropdown(this.$refs[`language-dropdown-button`] as HTMLElement);
  }

  beforeDestroy() {
    this.dropdown.dispose();
  }
}
</script>

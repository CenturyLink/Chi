<template lang="pug">
<ComponentExample title="Internal" id="internal-lumen-portal" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Show the internal footer for authenticated users.
  template(#example)
    footer.chi-footer
      .chi-footer__content
        .chi-footer__internal
          .chi-footer__internal-content.-mw--1200
            .chi-dropdown.chi-footer__language
                a.chi-button.-icon.-flat.-light.-sm.chi-dropdown__trigger(ref="languageDropdownTrigger" data-position="top-start" aria-label="Select your preferred location")
                  .chi-button__content
                    i.chi-flag-icon.icon-us(aria-hidden="true")
                .chi-dropdown__menu.-w--sm.-text--body
                  a.chi-dropdown__menu-item(v-for="(link, index) in languageItems" :key="index" :href="link.href" :class="index === 0 ? '-active' : ''")
                    | {{link.name}}
            .chi-footer__links
              ul
                li(v-for="(item, index) in footerLinks" :key="index")
                  a(:href="item.href" :target="item.target" :class="item.class") {{item.title}}
              .chi-footer__copyright
                | &copy; 2024 Lumen Technologies. All Rights Reserved.
                | Lumen is a registered trademark in the United States, EU and certain other countries.
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ILanguage, type ILink } from '../../../../models/models';
import { FOOTER_LANGUAGE_DROPDOWN_ITEMS, FOOTER_LINKS } from '../../../../fixtures/fixtures';

declare const chi: any;

@NuxtComponent({})
export default class InternalLumenPortal extends Vue {
  footerLinks = FOOTER_LINKS;
  languageItems = FOOTER_LANGUAGE_DROPDOWN_ITEMS;
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: ``,
  };
  languageDropdownInstance: any;

  _setCodeSnippets() {
    let languageOptions = '',
      footerLinks = '';

    this.languageItems.forEach((language: ILanguage, index: number) => {
      languageOptions += `
            <a class="chi-dropdown__menu-item${index === 0 ? ' -active' : ''}" href="${language.href}">${
              language.name
            }</a>`;
    });

    this.footerLinks.forEach((footerLink: ILink) => {
      footerLinks += `
            <li>
              <a href="${footerLink.href}"${footerLink.target ? ' target="' + footerLink.target + '"' : ''}${
                footerLink.class ? ' class="' + footerLink.class + '"' : ''
              }>${footerLink.title}</a>
            </li>`;
    });
    this.codeSnippets.htmlblueprint = `<footer class="chi-footer">
  <div class="chi-footer__content">
    <div class="chi-footer__internal">
      <div class="chi-footer__internal-content -mw--1200">
        <div class="chi-dropdown chi-footer__language">
          <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="example__footer_language_dropdown_button" data-position="top-start" aria-label="Select your preferred language">
            <div class="chi-button__content">
              <i class="chi-flag-icon icon-us" aria-hidden="true"></i>
            </div>
          </a>
          <div class="chi-dropdown__menu -w--sm -text--body">${languageOptions}
          </div>
        </div>
        <div class="chi-footer__links">
          <ul>${footerLinks}
          </ul>
          <div class="chi-footer__copyright">&copy; 2024 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
        </div>
      </div>
    </div>
  </div>
</footer>

<script>chi.dropdown(document.getElementById('example__footer_language_dropdown_button'));<\/script>`;
  }

  _initializeDropdown() {
    const dropdownTrigger = this.$refs.languageDropdownTrigger as HTMLElement;

    if (dropdownTrigger) {
      this.languageDropdownInstance = chi.dropdown(dropdownTrigger);
    }
  }

  //#region Lifecycle Hooks
  created() {
    this._setCodeSnippets();
  }

  mounted() {
    this._initializeDropdown();
  }

  updated() {
    if (!this.languageDropdownInstance) {
      this._initializeDropdown();
    }
  }

  beforeDestroy() {
    if (this.languageDropdownInstance) {
      this.languageDropdownInstance.dispose();
    }
  }
  //#endregion
}
</script>

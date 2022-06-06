<template lang="pug">
  footer.chi-footer(slot="footer")
    .chi-footer__content
      .chi-footer__internal
        .chi-footer__internal-content.-mw--1200
          .chi-dropdown.chi-footer__language
            a.chi-button.-icon.-flat.-sm.chi-dropdown__trigger(id="language-dropdown-button3" :class="['centurylink'].includes($store.state.themes.theme) ? '' : '-light'" ref="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language")
              .chi-button__content
                i.chi-icon.icon-globe-network(aria-hidden="true")
                span English
            .chi-dropdown__menu.-w--sm.-text--body
              a.chi-dropdown__menu-item(v-for="(lang, index) in languages" :key="index" href="#" :class="index === 0 ? '-active' : ''")
                | {{lang}}
          .chi-footer__links
            ul
              li(v-for="(footerItem, index) in footerLinks" :key="index")
                a(:href="footerItem.link" :target="footerItem.target" :class="footerItem.class") {{footerItem.label}}
            .chi-footer__copyright
              | &copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BASE_HELP_LANGUAGES, FOOTER_LINKS } from './fixtures';

declare const chi: any;

@Component({
  data: () => {
    return {
      languages: BASE_HELP_LANGUAGES,
      footerLinks: FOOTER_LINKS,
    };
  }
})
export default class AppLayoutFooter extends Vue {
  dropdown: any;

  mounted() {
    this.dropdown = chi.dropdown(this.$refs[`language-dropdown-button`] as HTMLElement);
  }

  beforeDestroy() {
    this.dropdown.dispose();
  }
}
</script>

<template lang="pug">
  header.chi-header.docs-header.-z--20
    #version-check.-w--100
    ClientOnly
      component(is="style" type='text/css').
        .theme-lumen a.theme-trigger-lumen.chi-dropdown__menu-item,
        .theme-centurylink a.theme-trigger-centurylink.chi-dropdown__menu-item,
        .theme-portal a.theme-trigger-portal.chi-dropdown__menu-item {
          background-color: #e6f0ff;
          color: #0047bb;
          font-weight: 600;
        }
        .theme-lumenrebrand24 a.theme-trigger-lumen-rebrand24.chi-dropdown__menu-item {
          background-color: #fef6f0;
          color: #007981;
          font-weight: 600;
        }
        .theme-portalrebrand24 a.theme-trigger-portal-rebrand24.chi-dropdown__menu-item {
          background-color: #fef6f0;
          color: #b35009;
          font-weight: 600;
        }
        .theme-brightspeed a.theme-trigger-brightspeed.chi-dropdown__menu-item {
          background-color: #fff1bf;
          color: #000;
          font-weight: 600;
        }
        .chi-brand {
          margin: 0;
        }
        @media only screen and (min-width: 992px) {
          .chi .docs-header__logo .chi-brand {
            margin: 0 3rem 0 0;
          }
        }
        .chi .docs-header__logo .chi-brand.-centurylink {
          width: 6.09375rem;
        }
        @media only screen and (min-width: 768px) {
          .chi .docs-header__logo .chi-brand.-centurylink {
            margin: 0 3rem 0 0;
            width: 9.75rem;
          }
        }
        .chi .docs-header__logo .chi-brand.-centurylink > img,
        .chi .docs-header__logo .chi-brand.-centurylink > svg {
          height: 1.25rem;
          width: 6.09375rem;
        }
        @media only screen and (min-width: 768px) {
          .chi .docs-header__logo .chi-brand.-centurylink > img,
          .chi .docs-header__logo .chi-brand.-centurylink > svg {
            height: 2rem;
            width: 9.75rem;
          }
        }
        .chi .docs-header__logo .chi-brand.-lumen {
          width: 7.1875rem;
        }
        @media only screen and (min-width: 768px) {
          .chi .docs-header__logo .chi-brand.-lumen {
            margin: 0 1rem 0 0;
            width: 8.75rem;
          }
        }
        @media only screen and (min-width: 992px) {
          .chi .docs-header__logo .chi-brand.-lumen {
            margin: 0 3rem 0 0;
          }
        }
        .chi .docs-header__logo .chi-brand.-lumen > img,
        .chi .docs-header__logo .chi-brand.-lumen > svg {
          height: 1rem;
          width: 7.1875rem;
        }
        @media only screen and (min-width: 768px) {
          .chi .docs-header__logo .chi-brand.-lumen > img,
          .chi .docs-header__logo .chi-brand.-lumen > svg {
            height: 1.25rem;
            width: 8.75rem;
          }
        }
        .chi.theme-portal .docs-header .chi-header__content .chi-header__start .-chi-search .chi-input {
          height: 2.5rem !important;
        }
        .chi.theme-portal .docs-header .chi-header__content .chi-header__start .-chi-search .chi-icon {
          color: #0262b9;
          font-size: 1.25rem;
          height: 1.25rem;
          line-height: 1.25rem;
          top: 0.625rem;
          width: 1.25rem;
        }
        .chi.theme-portal .example .example-tabs .chi-tabs,
        .chi.theme-brightspeed .example .example-tabs .chi-tabs {
          height: 3rem;
        }
        .chi.theme-portal .example .example-tabs .chi-tabs > li > a,
        .chi.theme-brightspeed .example .example-tabs .chi-tabs > li > a {
          line-height: 1.5rem;
          padding: 0.75rem 0;
        }
    nav.chi-header__content
      #header-brand.chi-header__brand
        button#drawer-trigger-1.chi-button.-icon.-flat.-mr-md--2.-d--flex.-d-lg--none.chi-drawer__trigger(
          data-target='#drawer-sidenav',
          aria-label='Toggle documentation navigation'
        )
          .chi-button__content
            i.chi-icon.-sm--2.icon-menu(aria-hidden='true')
        <a class="docs-header__logo" aria-label='Portal' :href="baseUrl">
          chi-brand#header-logo(logo='lumen')
        </a>
        span.chi-header__title.-d--none.-d-lg--flex Chi Design System
      .chi-header__start
        #docsearch.-chi-search
        component(is="script" v-html="algoliaScript")
      .chi-header__end
        .chi-dropdown
          button.chi-button.-flat.-px--1.chi-dropdown__trigger.-animate(
            data-position='bottom-end',
            aria-label='Toggle Chi version'
            ref='versionDropdown'
          ) v{{ACTIVE_CHI_VERSION}}
          .chi-dropdown__menu.-mh--400.-overflow--auto
            a.chi-dropdown__menu-item(
              :class="version === ACTIVE_CHI_VERSION ? '-active' : ''"
              v-for="(version, index) in CHI_VISIBLE_VERSION"
              :key="index"
              :href="`https://lib.lumen.com/chi/${version}`"
            )
              | v{{version}}
        .chi-dropdown
          button#support.chi-button.-flat.-px--1.-ml--1.chi-dropdown__trigger.-animate(
            data-position='bottom-end'
            ref='supportDropdown'
          ) Support
          .chi-dropdown__menu
            a#contact.chi-dropdown__menu-item(
              href='mailto:chi.support@centurylink.com'
            ) Email Support
            a#teams.chi-dropdown__menu-item(
              href='https://teams.microsoft.com/l/channel/19%253aa08fdfde482543ea80f81ce484cea21b%2540thread.skype/CHI?groupId=8631295d-43fc-4e40-93e5-dc8c9ab4d127&tenantId=72b17115-9915-42c0-9f1b-4f98e5a4bcd2',
              target='_blank',
              rel='noopener'
            ) Talk #Chi on Microsoft Teams
        a.chi-button.-icon.-flat.-ml--1(
          href='https://github.com/CenturyLink/Chi',
          rel='noopener',
          aria-label='GitHub',
          data-tooltip='GitHub',
          aria-describedby='chi-tooltip-1'
          ref="githubButtonTooltip"
        )
          .chi-button__content
            i.chi-icon.icon-logo-github(aria-hidden='true')
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { CHI_VISIBLE_VERSION } from '../constants/constants';
import { CHI_VERSION as ACTIVE_CHI_VERSION } from '../constants/configs';
import { algoliaScript } from '../constants/scripts';

declare const chi: any;

@NuxtComponent({})
export default class Header extends Vue {
  CHI_VISIBLE_VERSION = CHI_VISIBLE_VERSION;
  baseUrl = useRuntimeConfig().public.baseUrl;
  ACTIVE_CHI_VERSION = ACTIVE_CHI_VERSION;
  algoliaScript = algoliaScript;
  versionDropdown: any;
  supportDropdown: any;
  githubButtonTooltip: any;

  mounted() {
    const versionDropdown = this.$refs.versionDropdown as HTMLElement;
    const supportDropdown = this.$refs.supportDropdown as HTMLElement;
    const githubButtonTooltip = this.$refs.githubButtonTooltip as HTMLElement;

    if (versionDropdown) {
      this.versionDropdown = chi.dropdown(versionDropdown);
    }

    if (supportDropdown) {
      this.supportDropdown = chi.dropdown(supportDropdown);
    }

    if (githubButtonTooltip) {
      this.githubButtonTooltip = chi.tooltip(githubButtonTooltip);
    }
  }

  beforeDestroy() {
    if (this.versionDropdown) {
      this.versionDropdown.dispose();
    }
    if (this.supportDropdown) {
      this.supportDropdown.dispose();
    }
    if (this.githubButtonTooltip) {
      this.githubButtonTooltip.dispose();
    }
  }
}
</script>
<style scoped lang="scss"></style>

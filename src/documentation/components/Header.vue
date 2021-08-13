<template lang="pug">
  header.chi-header.docs-header.-z--20
    #version-check.-w--100
    style(type='text/css').
      .theme-lumen a.theme-trigger-lumen.chi-dropdown__menu-item,
      .theme-portal a.theme-trigger-portal.chi-dropdown__menu-item,
      .theme-centurylink a.theme-trigger-centurylink.chi-dropdown__menu-item{
      background-color: #e6f0ff;
      color: #0047bb;
      font-weight: 600;
      }
      .-lumen--show,
      .-centurylink--show,
      .-portal--show {
      display: block;
      }
      .-lumen--hide,
      .-centurylink--hide,
      .-portal--hide {
      display: none;
      }
      .theme-centurylink .-lumen--show,
      .theme-centurylink .-portal--show,
      .theme-centurylink .-centurylink--hide {
      display: none;
      }
      .theme-lumen .-portal--show,
      .theme-lumen .-centurylink--show,
      .theme-lumen .-lumen--hide {
      display: none;
      }
      .theme-portal .-lumen--show,
      .theme-portal .-centurylink--show,
      .theme-portal .-portal--hide {
      display: none;
      }
      .theme-portal .-lumen--hide,
      .theme-portal .-centurylink--hide,
      .theme-centurylink .-portal--hide,
      .theme-centurylink .-lumen--hide,
      .theme-lumen .-portal--hide,
      .theme-lumen .-centurylink--hide {
      display: block;
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
      .chi .docs-header__logo .chi-brand.-centurylink > img, .chi .docs-header__logo .chi-brand.-centurylink > svg {
      height: 1.25rem;
      width: 6.09375rem;
      }
      @media only screen and (min-width: 768px) {
      .chi .docs-header__logo .chi-brand.-centurylink > img, .chi .docs-header__logo .chi-brand.-centurylink > svg {
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
      .chi .docs-header__logo .chi-brand.-lumen > img, .chi .docs-header__logo .chi-brand.-lumen > svg {
      height: 1rem;
      width: 7.1875rem;
      }
      @media only screen and (min-width: 768px) {
      .chi .docs-header__logo .chi-brand.-lumen > img, .chi .docs-header__logo .chi-brand.-lumen > svg {
      height: 1.25rem;
      width: 8.75rem;
      }
      }
      .chi.theme-portal .docs-header .chi-header__content .chi-header__start .-chi-search .chi-input {
      height: 2.5rem !important;
      }
      .chi.theme-portal .docs-header .chi-header__content .chi-header__start .-chi-search .chi-icon {
      color: #0262B9;
      font-size: 1.25rem;
      height: 1.25rem;
      line-height: 1.25rem;
      top: 0.625rem;
      width: 1.25rem;
      }
      .chi.theme-portal .example .example-tabs .chi-tabs {
      height: 3rem;
      }
      .chi.theme-portal .example .example-tabs .chi-tabs > li > a {
      line-height: 1.5rem;
      padding: 0.75rem 0;
      }
      .chi.theme-portal .example .example-tabs .chi-tabs > li.-active > a {
      padding-bottom: 0.625rem;
      }
    nav.chi-header__content
      #header-brand.chi-header__brand
        button#drawer-trigger-1.chi-button.-icon.-flat.-mr-md--2.-d--flex.-d-lg--none.chi-drawer__trigger(data-target='#drawer-sidenav', aria-label='Toggle documentation navigation')
          .chi-button__content
            i.chi-icon.-sm--2.icon-menu(aria-hidden='true')
        a.docs-header__logo(href='../', aria-label='Portal')
          chi-brand#header-logo.sc-chi-brand-h.sc-chi-brand-s.hydrated(logo='lumen')
            span.chi-brand.-lumen.sc-chi-brand
              svg.sc-chi-brand(viewbox='0 0 140 20', xmlns='http://www.w3.org/2000/svg', data-brand-type='base', aria-hidden='true')
                path.sc-chi-brand(fill='#000', d='M.27396667 2.00213333V17.8541333c0 .9566667.558 1.395 1.634 1.395H16.8916333c1.0363334 0 1.634-.4383333 1.634-1.395 0-.9163333-.5976666-1.3946666-1.634-1.3946666H4.01996667c-.518 0-.71733334-.239-.71733334-.7173334V2.00213333c0-.797-.59766666-1.39466666-1.51433333-1.39466666-.87666667 0-1.51433333.59766666-1.51433333 1.39466666')
                path.sc-chi-brand(fill='#000', d='M26.0176333 12.2995V2.00216667c0-.797-.5976666-1.395-1.5143333-1.395-.9166667 0-1.5143333.598-1.5143333 1.395V12.5785c0 6.416 3.985 7.1486667 10.8793333 7.1486667 6.894 0 10.8793333-.7326667 10.8793333-7.1486667V2.00216667c0-.797-.598-1.395-1.5143333-1.395-.9166667 0-1.5143333.598-1.5143333 1.395V12.2995c0 5.2203333-2.7896667 4.5186667-7.8506667 4.5186667s-7.8506667.622-7.8506667-4.5186667')
                path.sc-chi-brand(fill='#000', d='M74.2765667 5.2699v12.8236667c0 .8366666.6376666 1.3946666 1.5143333 1.3946666.9166667 0 1.5143333-.558 1.5143333-1.3946666V2.67956667c0-1.15566667-.8126666-2.07233334-1.9126666-2.07233334-1.0423334 0-1.502.59166667-2.5106667 1.51433334l-7.7313333 7.62766666H65.1109l-7.731-7.58766666C56.3882333 1.14123333 55.6362333.60723333 54.7495667.60723333c-.8863334 0-1.9526667.91666667-1.9526667 2.07233334V18.0935667c0 .8366666.6376667 1.3946666 1.5143333 1.3946666.9166667 0 1.5143334-.558 1.5143334-1.3946666V5.2299H55.9849l7.3726667 6.99c.663.6496667 1.1793333 1.1556667 1.7133333 1.1556667.671 0 1.0156667-.5276667 1.754-1.1556667l7.3323333-6.95h.1193334z')
                path.sc-chi-brand(fill='#0C9ED9', d='M103.845933 2.28113333c0-.91666666-.558-1.43466666-1.634-1.43466666H87.0686c-1.076 0-1.6336667.518-1.6336667 1.43466666V3.6698l16.8169997-.03366667c1.036 0 1.594-.47833333 1.594-1.355')
                path.sc-chi-brand(fill='#000', d='M85.4348 8.71616667v9.13800003c0 .9563333.558 1.3946666 1.634 1.3946666h15.303c1.035667 0 1.593667-.4383333 1.593667-1.3946666 0-.9166667-.558-1.3946667-1.593667-1.3946667h-13.191c-.5176667 0-.7173333-.2393333-.7173333-.7173333V11.5425h9.963c1.0756666 0 1.6336663-.4783333 1.6336663-1.395 0-.87666667-.5579997-1.39466667-1.6336663-1.39466667L85.4348 8.71616667z')
                path.sc-chi-brand(fill='#000', d='M132.8176 17.6948667V2.0022c0-.797-.637667-1.395-1.514667-1.395-.916666 0-1.514333.598-1.514333 1.395v12.704L114.804933 2.12153333C113.773267 1.2562 113.1996.6072 112.214267.6072c-1.080667 0-1.792667.71733333-1.792667 2.07233333V18.0935333c0 .797.637333 1.3946667 1.514 1.3946667.916667 0 1.514333-.5976667 1.514333-1.3946667V5.11053333L128.274267 17.8542c.993333.8433333 1.681666 1.634 2.710333 1.634 1.037 0 1.833-.7573333 1.833-1.7933333')
                path.sc-chi-brand(fill='#000', d='M137.447467 3.0801c.316333 0 .495333-.165.495333-.399 0-.26166667-.179-.39933333-.495333-.39933333h-.591667V3.0801h.591667zm-1.06-1.211h1.101333c.536667 0 .936.26133333.936.77066667 0 .399-.234333.64666666-.564667.743l.647.922h-.564333l-.578-.83933334h-.509v.83933334h-.468333V1.8691zm3.055333 1.266v-.01366667c0-1.17-.908-2.133-2.119333-2.133-1.197334 0-2.119334.977-2.119334 2.14666667v.014c0 1.16966667.908 2.133 2.119334 2.133 1.197333 0 2.119333-.97733333 2.119333-2.147zm-4.514.014v-.014c0-1.30733333 1.06-2.40833333 2.394667-2.40833333 1.349 0 2.394666 1.08733333 2.394666 2.39466666V3.1351c0 1.30733333-1.059333 2.40866667-2.394666 2.40866667-1.348667 0-2.394667-1.08766667-2.394667-2.39466667z')
        span.chi-header__title.-d--none.-d-lg--flex Chi Design System
      .chi-header__start
        form.-chi-search
          .chi-input__wrapper.-icon--right.-flex--grow1
            label.chi-label.-d--none(for='chi-docs-search') Search Chi documentation
            span.algolia-autocomplete(style='position: relative; display: inline-block; direction: ltr;')
              input#chi-docs-search.chi-input.searchbox.ds-input(type='text', placeholder='Search', autocomplete='off', spellcheck='false', role='combobox', aria-autocomplete='list', aria-expanded='false', aria-label='search input', aria-owns='algolia-autocomplete-listbox-0', dir='auto', style='position: relative; vertical-align: top;')
              pre(aria-hidden='true', style='position: absolute; visibility: hidden; white-space: pre; font-family: Inter, Arial, Helvetica, Verdana, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;').
                
              span#algolia-autocomplete-listbox-0.ds-dropdown-menu(role='listbox', style='position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;')
                .ds-dataset-1
            i.chi-icon.icon-search(aria-hidden='true')
      .chi-header__end
        .chi-dropdown
          button#version-dropdown.chi-button.-flat.-px--1.chi-dropdown__trigger.-animate(data-position='bottom-end', aria-label='Toggle Chi version') v5.1.0
          #versionDropdown.chi-dropdown__menu(style='width: 10rem; position: absolute; will-change: transform; right: initial; top: 0px; left: initial; transform: translate3d(76px, 40px, 0px);', x-placement='bottom-end')
            a.chi-dropdown__menu-item.-active(href='https://assets.ctl.io/chi/5.1.0') v5.1.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/5.0.0') v5.0.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.4.0') v4.4.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.3.0') v4.3.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.2.0') v4.2.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.1.2') v4.1.2
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.1.1') v4.1.1
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.1.0') v4.1.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/4.0.0') v4.0.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.17.0') v3.17.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.16.0') v3.16.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.15.0') v3.15.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.14.0') v3.14.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.13.0') v3.13.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.12.0') v3.12.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.11.0') v3.11.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.10.0') v3.10.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.9.0') v3.9.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.8.0') v3.8.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.7.0') v3.7.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.6.0') v3.6.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.5.0') v3.5.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.4.0') v3.4.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.3.0') v3.3.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.2.0') v3.2.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.1.1') v3.1.1
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.1.0') v3.1.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/3.0.0') v3.0.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.6.0') v2.6.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.5.1') v2.5.1
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.5.0') v2.5.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.4.1') v2.4.1
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.4.0') v2.4.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.3.0') v2.3.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.2.0') v2.2.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.1.0') v2.1.0
            a.chi-dropdown__menu-item(href='https://assets.ctl.io/chi/2.0.0') v2.0.0
        .chi-dropdown
          button#support.chi-button.-flat.-px--1.-ml--1.chi-dropdown__trigger.-animate(data-position='bottom-end') Support
          .chi-dropdown__menu(style='width: 14rem; position: absolute; will-change: transform; right: initial; top: 0px; left: initial; transform: translate3d(100px, 40px, 0px);', x-placement='bottom-end')
            a#contact.chi-dropdown__menu-item(href='mailto:chi.support@centurylink.com') Email Support
            a#teams.chi-dropdown__menu-item(href='https://teams.microsoft.com/l/channel/19%253aa08fdfde482543ea80f81ce484cea21b%2540thread.skype/CHI?groupId=8631295d-43fc-4e40-93e5-dc8c9ab4d127&tenantId=72b17115-9915-42c0-9f1b-4f98e5a4bcd2', target='_blank', rel='noopener') Talk #Chi on Microsoft Teams
        a#github-button.chi-button.-icon.-flat.-ml--1(href='https://github.com/CenturyLink/Chi', rel='noopener', aria-label='GitHub', data-tooltip='GitHub', aria-describedby='chi-tooltip-1')
          .chi-button__content
            i.chi-icon.icon-logo-github(aria-hidden='true')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare let chi: any;
@Component
export default class Header extends Vue {
  mounted() {
    debugger;
    chi.drawer(document.getElementById('drawer-portal-with-navbar'));
    chi.dropdown(
      document.getElementById('button-site-portal-with-navbar')
    );
    chi.dropdown(
      document.getElementById('button-user-portal-with-navbar')
    );
    chi.dropdown(
      document.getElementById('button-eid-portal-with-navbar')
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

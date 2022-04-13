<template lang="pug">
<ComponentExample title="External" id="external-brightspeed" :tabs="exampleTabs">
  p.-text(slot="example-description")
    | Show the external footer for all public facing webpages.
  <Wrapper slot='example'>
    footer.chi-footer
      .chi-footer__content
        .chi-footer__external
          .chi-footer__external-content.-mw--1200
            .chi-footer__header
              .chi-footer__brand
                a.chi-brand.-brightspeed(href='/' aria-label='Brightspeed')
                  svg(viewBox='0 0 219 32' xmlns='http://www.w3.org/2000/svg' aria-hidden='true')
                    path(fill='#FFC800' d='M6.27 25.27A6.26 6.26 0 0 0 0 19.01v6.26h6.26ZM0 6.26A6.26 6.26 0 0 0 6.28 0H0v6.26ZM19.02 25.27a6.26 6.26 0 0 1 6.26-6.26v6.26h-6.26ZM25.28 6.26A6.26 6.26 0 0 1 19.02 0h6.26v6.26ZM10.44 14.83a14.81 14.81 0 0 0-2.8-2.2A14.77 14.77 0 0 1 0 14.77a10.5 10.5 0 0 1 10.51 10.51c0-2.7.73-5.34 2.12-7.65a14.63 14.63 0 0 0-2.19-2.79Z')
                    path(fill='#FA783C' d='M10.44 10.45c.84-.84 1.58-1.78 2.2-2.8A14.77 14.77 0 0 1 10.5 0 10.5 10.5 0 0 1 .01 10.51c2.69 0 5.33.73 7.64 2.12a14.73 14.73 0 0 0 2.8-2.18Z')
                    path(fill='#FA4628' d='M0 10.51v4.25c2.7 0 5.35-.73 7.65-2.12a14.78 14.78 0 0 0-7.64-2.13Z')
                    path(fill='#FA783C' d='M14.84 14.83a14.7 14.7 0 0 0-2.2 2.8c1.4 2.3 2.13 4.95 2.12 7.64a10.5 10.5 0 0 1 10.52-10.5c-2.7 0-5.34-.74-7.65-2.13a14.76 14.76 0 0 0-2.8 2.19Z')
                    path(fill='#FA4628' d='M10.52 25.27h4.25c0-2.7-.73-5.34-2.12-7.64a14.77 14.77 0 0 0-2.13 7.64Z')
                    path(fill='#FFC800' d='M14.84 10.44c.84.85 1.77 1.58 2.8 2.2 2.3-1.4 4.94-2.13 7.64-2.12A10.5 10.5 0 0 1 14.77 0c0 2.7-.73 5.34-2.12 7.64a14.81 14.81 0 0 0 2.19 2.8Z')
                    path(fill='#FA4628' d='M14.77 0h-4.25c0 2.7.73 5.34 2.12 7.65 1.4-2.3 2.13-4.95 2.13-7.65ZM17.63 12.64c2.3 1.39 4.95 2.12 7.64 2.12V10.5c-2.7 0-5.34.73-7.64 2.13Z')
                    path(fill='#000' d='M71.08 1.19a3.17 3.17 0 0 1 4.07 0 2.66 2.66 0 0 1 .02 3.8c-.53.48-1.21.73-2.05.73-.84 0-1.53-.25-2.05-.74a2.66 2.66 0 0 1 .01-3.79Zm-.4 6.84h4.84v15.22h-4.84V8.03ZM82.04 31.2a5.96 5.96 0 0 1-3.85-5.71c0-.25 0-.5.03-.74h4.66c-.04 1 .24 1.78.84 2.34.6.55 1.49.83 2.64.83 1.03 0 1.86-.23 2.5-.7a2.16 2.16 0 0 0 .95-1.83c0-.78-.3-1.38-.88-1.8a4.26 4.26 0 0 0-2.5-.63A9.69 9.69 0 0 1 82 22a6.96 6.96 0 0 1-2.93-2.7 7.79 7.79 0 0 1-1.03-4.05 7.29 7.29 0 0 1 4.02-6.67 9.38 9.38 0 0 1 7.78-.23l1.8-2.22 3.54 2.56-2.03 2.37a6.15 6.15 0 0 1 1.54 4.2c0 1.09-.27 2.17-.82 3.12a6.64 6.64 0 0 1-2.3 2.36c.97.42 1.8 1.1 2.4 1.96a5 5 0 0 1 .84 2.88c.02 1.2-.34 2.39-1.05 3.37a6.6 6.6 0 0 1-2.95 2.25 11.7 11.7 0 0 1-4.44.79c-1.65 0-3.1-.26-4.33-.8Zm1.76-13.33c.65.66 1.52 1 2.6 1 1.06 0 1.93-.33 2.58-.99.65-.65.98-1.53.99-2.62 0-1.1-.32-1.96-.97-2.61a3.58 3.58 0 0 0-2.62-.98c-1.07 0-1.93.33-2.59.98a3.5 3.5 0 0 0-.98 2.61c0 1.07.33 1.93.99 2.6Zm14.09-16.2h4.84v8a5.88 5.88 0 0 1 4.65-2c1.87 0 3.36.63 4.46 1.88 1.1 1.26 1.64 2.95 1.65 5.09v8.6h-4.84v-8.32a3.4 3.4 0 0 0-.73-2.32 2.54 2.54 0 0 0-2.02-.83c-.94 0-1.7.32-2.3.96a3.54 3.54 0 0 0-.87 2.5v8h-4.84V1.69Zm32 19.94 1.85-3.33c.8.48 1.67.83 2.57 1.05.95.24 1.93.37 2.92.37 1.33 0 2-.36 2-1.08a.89.89 0 0 0-.56-.83c-.37-.19-.98-.3-1.84-.37a8.22 8.22 0 0 1-4.61-1.45 4.05 4.05 0 0 1-1.71-3.39 4.24 4.24 0 0 1 1.84-3.62c1.24-.9 2.9-1.34 5-1.34 1.15 0 2.3.14 3.4.43 1 .25 1.94.65 2.8 1.2l-1.88 3.24a8.18 8.18 0 0 0-4.1-.98c-1.56 0-2.35.37-2.34 1.1a.77.77 0 0 0 .47.72 5 5 0 0 0 1.62.37c2.18.16 3.84.65 4.98 1.48a4 4 0 0 1 1.71 3.45c0 1.56-.63 2.79-1.88 3.68-1.25.9-2.99 1.34-5.2 1.34-2.7 0-5.05-.68-7.04-2.04Zm39.6 1.03a7 7 0 0 1-2.98-2.76 8.23 8.23 0 0 1-1.05-4.22 8.3 8.3 0 0 1 1.03-4.16 7.18 7.18 0 0 1 2.89-2.82c1.23-.67 2.66-1 4.28-1 1.66 0 3.1.31 4.32.94a6.65 6.65 0 0 1 2.79 2.65c.64 1.14.97 2.47.97 4-.01.6-.06 1.2-.16 1.8H170.4a2.88 2.88 0 0 0 1.27 1.9c.7.49 1.59.73 2.68.73.75 0 1.5-.11 2.22-.34.67-.2 1.3-.52 1.85-.95l2.53 2.7a9 9 0 0 1-3.07 1.86c-1.21.44-2.5.66-3.78.65-1.77 0-3.3-.33-4.6-.98Zm7.65-8.33a2.82 2.82 0 0 0-.98-2.07c-.59-.5-1.37-.74-2.35-.74-.97 0-1.76.25-2.36.74-.6.5-.95 1.18-1.04 2.07h6.73Zm10.51 8.33a7 7 0 0 1-2.99-2.76 8.23 8.23 0 0 1-1.04-4.22 8.28 8.28 0 0 1 1.03-4.16 7.18 7.18 0 0 1 2.88-2.82c1.23-.67 2.66-1 4.29-1 1.66 0 3.1.31 4.31.94a6.65 6.65 0 0 1 2.8 2.65c.64 1.14.96 2.47.96 4 0 .6-.06 1.2-.15 1.8h-11.2a2.88 2.88 0 0 0 1.28 1.9c.7.5 1.59.73 2.68.73.75 0 1.5-.11 2.22-.34.67-.2 1.3-.52 1.85-.95l2.52 2.71a8.98 8.98 0 0 1-3.06 1.85c-1.21.44-2.5.66-3.78.65-1.77 0-3.3-.33-4.6-.98Zm7.65-8.33a2.83 2.83 0 0 0-.97-2.07 3.52 3.52 0 0 0-2.36-.74c-.97 0-1.75.25-2.36.74-.6.5-.95 1.18-1.03 2.07h6.72Zm-142.94-2.8a9.6 9.6 0 0 1 0 8.24 6.83 6.83 0 0 1-2.59 2.8 7.21 7.21 0 0 1-3.79 1c-1.92 0-3.5-.61-4.75-1.82v1.52h-4.8V1.68h4.83v7.8a6.7 6.7 0 0 1 4.72-1.76 7.21 7.21 0 0 1 3.8 1 6.83 6.83 0 0 1 2.58 2.8Zm-4.9 6.91a3.86 3.86 0 0 0 1.02-2.79c0-1.15-.34-2.08-1.02-2.79a3.44 3.44 0 0 0-2.62-1.06 3.4 3.4 0 0 0-2.6 1.08c-.67.72-1 1.64-1 2.77 0 1.13.33 2.06 1 2.78a3.4 3.4 0 0 0 2.6 1.08c1.07 0 1.95-.36 2.62-1.07ZM66.85 8.07c.68.25 1.3.64 1.82 1.14l-2.04 3.54a5.72 5.72 0 0 0-1.2-.58 3.65 3.65 0 0 0-1.17-.19 3.1 3.1 0 0 0-2.44.98c-.6.66-.9 1.62-.9 2.9v7.4H56.1V8.03h4.84V9.6a4.57 4.57 0 0 1 3.82-1.91c.72 0 1.43.13 2.1.38Zm59.83 10.96 1.14 3.64a8.91 8.91 0 0 1-4.04.9 5.44 5.44 0 0 1-3.95-1.4c-.96-.94-1.44-2.45-1.44-4.53v-5.76h-2.6V8.03h2.6V3.7h4.8v4.32h3.8v3.85h-3.8v5.76c0 .62.16 1.08.47 1.38a1.75 1.75 0 0 0 1.26.44c.61 0 1.22-.15 1.76-.43Zm35.92-7.5a9.63 9.63 0 0 1 0 8.24 6.84 6.84 0 0 1-2.6 2.8 7.21 7.21 0 0 1-3.79 1 6.6 6.6 0 0 1-4.71-1.8v8.09h-4.84V8.03h4.8v1.48a6.55 6.55 0 0 1 4.75-1.79 7.21 7.21 0 0 1 3.8 1 6.84 6.84 0 0 1 2.59 2.8Zm-4.9 6.9a3.85 3.85 0 0 0 1.02-2.79c0-1.15-.34-2.08-1.02-2.79a3.44 3.44 0 0 0-2.62-1.06 3.4 3.4 0 0 0-2.61 1.08c-.67.72-1 1.64-1 2.77a3.9 3.9 0 0 0 1 2.78 3.4 3.4 0 0 0 2.6 1.08c1.08 0 1.95-.36 2.63-1.07Zm56.06-16.75h4.84v21.57h-4.84V21.7c-.51.52-1.12.94-1.78 1.24-.96.42-1.99.63-3.03.62a6.7 6.7 0 0 1-6.27-3.78 9.04 9.04 0 0 1-.9-4.14c0-1.57.3-2.95.9-4.15a6.7 6.7 0 0 1 6.27-3.77c.92 0 1.84.15 2.7.48.8.29 1.51.75 2.11 1.34V1.68Zm-.95 16.75c.51-.55.85-1.24.95-1.98v-1.61a3.62 3.62 0 0 0-.95-1.99 3.45 3.45 0 0 0-2.62-1.06 3.4 3.4 0 0 0-2.61 1.08c-.67.72-1 1.64-1 2.77 0 1.13.33 2.06 1 2.78a3.4 3.4 0 0 0 2.6 1.08c1.07 0 1.95-.36 2.63-1.07Z')
              .chi-footer__search
                .chi-form__item
                  label.chi-label.-d--none(for="chi-footer-search-input") Search Lumen
                  input.chi-input(type="text" placeholder="Search" id="chi-footer-search-input")
            .chi-footer__links.chi-grid
              .chi-col.-w--12.-w-md--6.-w-lg--3
                ul.-text--bold
                  li
                    a(href="https://www.lumen.com/en-us/contact-us.html") Contact Us
                  li
                    a(href="https://www.centurylink.com/business/login/" target="_blank") Sign in / Pay bill
                  li
                    a(href="https://www.lumen.com/help/en-us/home.html") Support
                .chi-footer__social
                  a(href="https://www.twitter.com/lumentechco" aria-label="Lumen on Twitter" rel="noopener" target="_blank")
                    i.chi-icon.icon-logo-twitter.-md(aria-hidden="true")
                  a(href="https://www.linkedin.com/company/lumen-tech" aria-label="Lumen on LinkedIn" rel="noopener" target="_blank")
                    i.chi-icon.icon-logo-linkedin.-md(aria-hidden="true")
                  a(href="https://www.facebook.com/lumentechnologies" aria-label="Lumen on Facebook" rel="noopener" target="_blank")
                    i.chi-icon.icon-logo-facebook.-md(aria-hidden="true")
                  a(href="https://www.youtube.com/lumentechnologies" aria-label="Lumen on YouTube" rel="noopener" target="_blank")
                    i.chi-icon.icon-logo-youtube.-md(aria-hidden="true")
              .chi-col.-w--12.-w-md--6.-w-lg--3
                ul.-text--bold
                  li
                    a(href="https://www.lumen.com/en-us/about.html") About Us
                  li
                    a(href="https://ir.lumen.com" target="_blank") Investors
                  li
                    a(href="https://news.lumen.com" target="_blank") Newsroom
                  li
                    a(href="https://www.lumen.com/en-us/about/our-platform.html") Our Platform
                  li
                    a(href="https://www.lumen.com/public-sector.html" target="_blank") Public Sector
                  li
                    a(href="https://www.centurylink.com/home/" target="_blank") Residential
                  li
                    a(href="https://www.lumen.com/wholesale.html" target="_blank") Wholesale
              .chi-col.-w--12.-w-md--6.-w-lg--3
                .chi-footer__links-title Solutions
                ul
                  li
                    a(href="https://www.lumen.com/en-us/solutions/adaptive-networking.html") Adaptive Networking
                  li
                    a(href="https://www.lumen.com/en-us/solutions/collaboration.html") Collaboration
                  li
                    a(href="https://www.lumen.com/en-us/solutions/connected-security.html") Connected Security
                  li
                    a(href="https://www.lumen.com/en-us/solutions/edge-computing.html") Edge Computing
                  li
                    a(href="https://www.lumen.com/en-us/solutions/hybrid-cloud.html") Hybrid Cloud
                .chi-footer__links-title Shop
                ul
                  li
                    a(href="https://www.lumen.com/en-us/communications/hosted-voip.html") Lumen Engage
              .chi-col.-w--12.-w-md--6.-w-lg--3
                .chi-footer__links-title Resources
                ul
                  li
                    a(href="https://www.lumen.com/en-us/about/4th-industrial-revolution.html") 4th Industrial Revolution
                  li
                    a(href="https://blog.lumen.com" target="_blank") Blog
                  li
                    a(href="https://www.lumen.com/help/en-us/portals.html" target="_blank") Customer Portals
                  li
                    a(href="https://www.lumen.com/en-us/resources/network-maps.html") Network Maps
                  li
                    a(href="https://www.lumen.com/en-us/partner.html") Partners
                  li
                    a(href="https://www.lumen.com/help/en-us/home.html" target="_blank") Support
        .chi-footer__internal
          .chi-footer__internal-content.-mw--1200
            .chi-dropdown.chi-footer__language
              a.chi-button.-icon.-flat.-light.-sm.chi-dropdown__trigger(id="language-dropdown-button" ref="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language")
                .chi-button__content
                  i.chi-icon.icon-globe-network(aria-hidden="true")
                  span English
              .chi-dropdown__menu.-w--sm.-text--body
                a.chi-dropdown__menu-item.-active(href="#")
                  | English
                a.chi-dropdown__menu-item(href="#")
                  | Español
                a.chi-dropdown__menu-item(href="#")
                  | Português
                a.chi-dropdown__menu-item(href="#")
                  | Français
                a.chi-dropdown__menu-item(href="#")
                  | Deutsch
                a.chi-dropdown__menu-item(href="#")
                  | 简体中文
                a.chi-dropdown__menu-item(href="#")
                  | 日本語 
            .chi-footer__links
              ul
                li
                  a(href="https://www.lumen.com/en-us/about.html") About Us
                li
                  a(href="https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html") Accessibility
                li
                  a(href="https://jobs.lumen.com" target="_blank") Careers
                li
                  a(href="https://www.lumen.com/en-us/contact-us.html") Contact Us
                <!-- OneTrust Cookies Settings button start -->
                li
                  a(href="#" class="optanon-toggle-display") Cookie Settings
                <!-- OneTrust Cookies Settings button end -->
                li
                  a(href="https://www.centurylink.com/aboutus/legal.html" target="_blank") Legal
                li
                  a(href="https://www.lumen.com/en-us/about/legal/acceptable-use-policy.html" target="_blank") Legal Notices
                li
                  a(href="https://www.lumen.com/en-us/about/legal/privacy-notice.html") Privacy
                li
                  a(href="https://www.centurylink.com/aboutus/company-information/public-policy.html" target="_blank") Public Policy
                li
                  a(href="https://www.lumen.com/help/en-us/home.html" target="_blank") Support
                li
                  a(href="https://www.lumen.com/en-us/about/legal/commission-for-complaints-for-telecom-television-services-ccts") Canadian Ombudsman
                li
                  a(href="https://assets.lumen.com/is/content/Lumen/gender-pay-gap-report?Creativeid=b565bf28-6d55-4f86-a245-2f0eb40b91a3" target="_blank") Gender Pay Gap 2020 (UK)
                li
                  a(href="https://www.lumen.com/es-ar/about/legal/latam-tariffs-regulatory.html") Legal (Latin America)
                li
                  a(href="https://www.lumen.com/en-us/about/legal/de-legal-notices.html") Legal Notices (Germany)
                li
                  a(href="https://assets.lumen.com/is/content/Lumen/modern-slavery-statement-1?Creativeid=5dbb9687-e4a8-4a40-ae00-673ce51d6a80" target="_blank") Modern Slavery Statement 2020 (UK)
                li
                  a(href="https://www.lumen.com/en-us/about/legal/uk-tax-strategy.html") UK Tax Strategy
              .chi-footer__copyright
                | &copy; 2022 Lumen Technologies. All Rights Reserved.
                | Lumen is a registered trademark in the United States, EU and certain other countries.
  </Wrapper> 
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

declare const chi: any;

@Component({
  data: () => {
    return {
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
        htmlblueprint: `<footer class="chi-footer">
  <div class="chi-footer__content">
    <div class="chi-footer__external">
      <div class="chi-footer__external-content -mw--1200">
        <div class="chi-footer__header">
          <div class="chi-footer__brand">
            <a class="chi-brand -brightspeed" href="/" aria-label="Brightspeed">
              <svg viewBox="0 0 219 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#FFC800" d="M6.27 25.27A6.26 6.26 0 0 0 0 19.01v6.26h6.26ZM0 6.26A6.26 6.26 0 0 0 6.28 0H0v6.26ZM19.02 25.27a6.26 6.26 0 0 1 6.26-6.26v6.26h-6.26ZM25.28 6.26A6.26 6.26 0 0 1 19.02 0h6.26v6.26ZM10.44 14.83a14.81 14.81 0 0 0-2.8-2.2A14.77 14.77 0 0 1 0 14.77a10.5 10.5 0 0 1 10.51 10.51c0-2.7.73-5.34 2.12-7.65a14.63 14.63 0 0 0-2.19-2.79Z"/><path fill="#FA783C" d="M10.44 10.45c.84-.84 1.58-1.78 2.2-2.8A14.77 14.77 0 0 1 10.5 0 10.5 10.5 0 0 1 .01 10.51c2.69 0 5.33.73 7.64 2.12a14.73 14.73 0 0 0 2.8-2.18Z"/><path fill="#FA4628" d="M0 10.51v4.25c2.7 0 5.35-.73 7.65-2.12a14.78 14.78 0 0 0-7.64-2.13Z"/><path fill="#FA783C" d="M14.84 14.83a14.7 14.7 0 0 0-2.2 2.8c1.4 2.3 2.13 4.95 2.12 7.64a10.5 10.5 0 0 1 10.52-10.5c-2.7 0-5.34-.74-7.65-2.13a14.76 14.76 0 0 0-2.8 2.19Z"/><path fill="#FA4628" d="M10.52 25.27h4.25c0-2.7-.73-5.34-2.12-7.64a14.77 14.77 0 0 0-2.13 7.64Z"/><path fill="#FFC800" d="M14.84 10.44c.84.85 1.77 1.58 2.8 2.2 2.3-1.4 4.94-2.13 7.64-2.12A10.5 10.5 0 0 1 14.77 0c0 2.7-.73 5.34-2.12 7.64a14.81 14.81 0 0 0 2.19 2.8Z"/><path fill="#FA4628" d="M14.77 0h-4.25c0 2.7.73 5.34 2.12 7.65 1.4-2.3 2.13-4.95 2.13-7.65ZM17.63 12.64c2.3 1.39 4.95 2.12 7.64 2.12V10.5c-2.7 0-5.34.73-7.64 2.13Z"/><path fill="#000" d="M71.08 1.19a3.17 3.17 0 0 1 4.07 0 2.66 2.66 0 0 1 .02 3.8c-.53.48-1.21.73-2.05.73-.84 0-1.53-.25-2.05-.74a2.66 2.66 0 0 1 .01-3.79Zm-.4 6.84h4.84v15.22h-4.84V8.03ZM82.04 31.2a5.96 5.96 0 0 1-3.85-5.71c0-.25 0-.5.03-.74h4.66c-.04 1 .24 1.78.84 2.34.6.55 1.49.83 2.64.83 1.03 0 1.86-.23 2.5-.7a2.16 2.16 0 0 0 .95-1.83c0-.78-.3-1.38-.88-1.8a4.26 4.26 0 0 0-2.5-.63A9.69 9.69 0 0 1 82 22a6.96 6.96 0 0 1-2.93-2.7 7.79 7.79 0 0 1-1.03-4.05 7.29 7.29 0 0 1 4.02-6.67 9.38 9.38 0 0 1 7.78-.23l1.8-2.22 3.54 2.56-2.03 2.37a6.15 6.15 0 0 1 1.54 4.2c0 1.09-.27 2.17-.82 3.12a6.64 6.64 0 0 1-2.3 2.36c.97.42 1.8 1.1 2.4 1.96a5 5 0 0 1 .84 2.88c.02 1.2-.34 2.39-1.05 3.37a6.6 6.6 0 0 1-2.95 2.25 11.7 11.7 0 0 1-4.44.79c-1.65 0-3.1-.26-4.33-.8Zm1.76-13.33c.65.66 1.52 1 2.6 1 1.06 0 1.93-.33 2.58-.99.65-.65.98-1.53.99-2.62 0-1.1-.32-1.96-.97-2.61a3.58 3.58 0 0 0-2.62-.98c-1.07 0-1.93.33-2.59.98a3.5 3.5 0 0 0-.98 2.61c0 1.07.33 1.93.99 2.6Zm14.09-16.2h4.84v8a5.88 5.88 0 0 1 4.65-2c1.87 0 3.36.63 4.46 1.88 1.1 1.26 1.64 2.95 1.65 5.09v8.6h-4.84v-8.32a3.4 3.4 0 0 0-.73-2.32 2.54 2.54 0 0 0-2.02-.83c-.94 0-1.7.32-2.3.96a3.54 3.54 0 0 0-.87 2.5v8h-4.84V1.69Zm32 19.94 1.85-3.33c.8.48 1.67.83 2.57 1.05.95.24 1.93.37 2.92.37 1.33 0 2-.36 2-1.08a.89.89 0 0 0-.56-.83c-.37-.19-.98-.3-1.84-.37a8.22 8.22 0 0 1-4.61-1.45 4.05 4.05 0 0 1-1.71-3.39 4.24 4.24 0 0 1 1.84-3.62c1.24-.9 2.9-1.34 5-1.34 1.15 0 2.3.14 3.4.43 1 .25 1.94.65 2.8 1.2l-1.88 3.24a8.18 8.18 0 0 0-4.1-.98c-1.56 0-2.35.37-2.34 1.1a.77.77 0 0 0 .47.72 5 5 0 0 0 1.62.37c2.18.16 3.84.65 4.98 1.48a4 4 0 0 1 1.71 3.45c0 1.56-.63 2.79-1.88 3.68-1.25.9-2.99 1.34-5.2 1.34-2.7 0-5.05-.68-7.04-2.04Zm39.6 1.03a7 7 0 0 1-2.98-2.76 8.23 8.23 0 0 1-1.05-4.22 8.3 8.3 0 0 1 1.03-4.16 7.18 7.18 0 0 1 2.89-2.82c1.23-.67 2.66-1 4.28-1 1.66 0 3.1.31 4.32.94a6.65 6.65 0 0 1 2.79 2.65c.64 1.14.97 2.47.97 4-.01.6-.06 1.2-.16 1.8H170.4a2.88 2.88 0 0 0 1.27 1.9c.7.49 1.59.73 2.68.73.75 0 1.5-.11 2.22-.34.67-.2 1.3-.52 1.85-.95l2.53 2.7a9 9 0 0 1-3.07 1.86c-1.21.44-2.5.66-3.78.65-1.77 0-3.3-.33-4.6-.98Zm7.65-8.33a2.82 2.82 0 0 0-.98-2.07c-.59-.5-1.37-.74-2.35-.74-.97 0-1.76.25-2.36.74-.6.5-.95 1.18-1.04 2.07h6.73Zm10.51 8.33a7 7 0 0 1-2.99-2.76 8.23 8.23 0 0 1-1.04-4.22 8.28 8.28 0 0 1 1.03-4.16 7.18 7.18 0 0 1 2.88-2.82c1.23-.67 2.66-1 4.29-1 1.66 0 3.1.31 4.31.94a6.65 6.65 0 0 1 2.8 2.65c.64 1.14.96 2.47.96 4 0 .6-.06 1.2-.15 1.8h-11.2a2.88 2.88 0 0 0 1.28 1.9c.7.5 1.59.73 2.68.73.75 0 1.5-.11 2.22-.34.67-.2 1.3-.52 1.85-.95l2.52 2.71a8.98 8.98 0 0 1-3.06 1.85c-1.21.44-2.5.66-3.78.65-1.77 0-3.3-.33-4.6-.98Zm7.65-8.33a2.83 2.83 0 0 0-.97-2.07 3.52 3.52 0 0 0-2.36-.74c-.97 0-1.75.25-2.36.74-.6.5-.95 1.18-1.03 2.07h6.72Zm-142.94-2.8a9.6 9.6 0 0 1 0 8.24 6.83 6.83 0 0 1-2.59 2.8 7.21 7.21 0 0 1-3.79 1c-1.92 0-3.5-.61-4.75-1.82v1.52h-4.8V1.68h4.83v7.8a6.7 6.7 0 0 1 4.72-1.76 7.21 7.21 0 0 1 3.8 1 6.83 6.83 0 0 1 2.58 2.8Zm-4.9 6.91a3.86 3.86 0 0 0 1.02-2.79c0-1.15-.34-2.08-1.02-2.79a3.44 3.44 0 0 0-2.62-1.06 3.4 3.4 0 0 0-2.6 1.08c-.67.72-1 1.64-1 2.77 0 1.13.33 2.06 1 2.78a3.4 3.4 0 0 0 2.6 1.08c1.07 0 1.95-.36 2.62-1.07ZM66.85 8.07c.68.25 1.3.64 1.82 1.14l-2.04 3.54a5.72 5.72 0 0 0-1.2-.58 3.65 3.65 0 0 0-1.17-.19 3.1 3.1 0 0 0-2.44.98c-.6.66-.9 1.62-.9 2.9v7.4H56.1V8.03h4.84V9.6a4.57 4.57 0 0 1 3.82-1.91c.72 0 1.43.13 2.1.38Zm59.83 10.96 1.14 3.64a8.91 8.91 0 0 1-4.04.9 5.44 5.44 0 0 1-3.95-1.4c-.96-.94-1.44-2.45-1.44-4.53v-5.76h-2.6V8.03h2.6V3.7h4.8v4.32h3.8v3.85h-3.8v5.76c0 .62.16 1.08.47 1.38a1.75 1.75 0 0 0 1.26.44c.61 0 1.22-.15 1.76-.43Zm35.92-7.5a9.63 9.63 0 0 1 0 8.24 6.84 6.84 0 0 1-2.6 2.8 7.21 7.21 0 0 1-3.79 1 6.6 6.6 0 0 1-4.71-1.8v8.09h-4.84V8.03h4.8v1.48a6.55 6.55 0 0 1 4.75-1.79 7.21 7.21 0 0 1 3.8 1 6.84 6.84 0 0 1 2.59 2.8Zm-4.9 6.9a3.85 3.85 0 0 0 1.02-2.79c0-1.15-.34-2.08-1.02-2.79a3.44 3.44 0 0 0-2.62-1.06 3.4 3.4 0 0 0-2.61 1.08c-.67.72-1 1.64-1 2.77a3.9 3.9 0 0 0 1 2.78 3.4 3.4 0 0 0 2.6 1.08c1.08 0 1.95-.36 2.63-1.07Zm56.06-16.75h4.84v21.57h-4.84V21.7c-.51.52-1.12.94-1.78 1.24-.96.42-1.99.63-3.03.62a6.7 6.7 0 0 1-6.27-3.78 9.04 9.04 0 0 1-.9-4.14c0-1.57.3-2.95.9-4.15a6.7 6.7 0 0 1 6.27-3.77c.92 0 1.84.15 2.7.48.8.29 1.51.75 2.11 1.34V1.68Zm-.95 16.75c.51-.55.85-1.24.95-1.98v-1.61a3.62 3.62 0 0 0-.95-1.99 3.45 3.45 0 0 0-2.62-1.06 3.4 3.4 0 0 0-2.61 1.08c-.67.72-1 1.64-1 2.77 0 1.13.33 2.06 1 2.78a3.4 3.4 0 0 0 2.6 1.08c1.07 0 1.95-.36 2.63-1.07Z"/></svg>
            </a>
          </div>
          <div class="chi-footer__search">
            <div class="chi-form__item">
              <label class="chi-label -d--none" for="chi-footer-search-input">Search Lumen</label>
              <input class="chi-input" type="text" placeholder="Search" id="chi-footer-search-input">
            </div>
          </div>
        </div>
        <div class="chi-footer__links chi-grid">
          <div class="chi-col -w--12 -w-md--6 -w-lg--3">
            <ul class="-text--bold">
              <li>
                <a href="https://www.lumen.com/en-us/contact-us.html">Contact Us</a>
              </li>
              <li>
                <a href="https://www.centurylink.com/business/login/" target="_blank">Sign in / Pay bill</a>
              </li>
              <li>
                <a href="https://www.lumen.com/help/en-us/home.html" target="_blank">Support</a>
              </li>
            </ul>
            <div class="chi-footer__social">
              <a href="https://www.twitter.com/lumentechco" aria-label="Lumen on Twitter" rel="noopener" target="_blank">
                <i class="chi-icon icon-logo-twitter -md" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/company/lumen-tech" aria-label="Lumen on LinkedIn" rel="noopener" target="_blank">
                <i class="chi-icon icon-logo-linkedin -md" aria-hidden="true"></i>
              </a>
              <a href="https://www.facebook.com/lumentechnologies" aria-label="Lumen on Facebook" rel="noopener" target="_blank">
                <i class="chi-icon icon-logo-facebook -md" aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/lumentechnologies" aria-label="Lumen on YouTube" rel="noopener" target="_blank">
                <i class="chi-icon chi-icon icon-logo-youtube -md" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div class="chi-col -w--12 -w-md--6 -w-lg--3">
            <ul class="-text--bold">
              <li>
                <a href="https://www.lumen.com/en-us/about.html">About Us</a>
              </li>
              <li>
                <a href="https://ir.lumen.com" target="_blank">Investors</a>
              </li>
              <li>
                <a href="https://news.lumen.com" target="_blank">Newsroom</a>
              </li>
              <li>
                <a href="https://www.lumen.com/en-us/about/our-platform.html">Our Platform</a>
              </li>
              <li>
                <a href="https://www.lumen.com/public-sector.html" target="_blank">Public Sector</a>
              </li>
              <li>
                <a href="https://www.centurylink.com/home/" target="_blank">Residential</a>
              </li>
              <li>
                <a href="https://www.lumen.com/wholesale.html" target="_blank">Wholesale</a>
              </li>
            </ul>
          </div>
          <div class="chi-col -w--12 -w-md--6 -w-lg--3">
            <div class="chi-footer__links-title">Solutions</div>
            <ul>
              <li>
                <a href="https://www.lumen.com/en-us/solutions/adaptive-networking.html">Adaptive Networking</a>
              </li>
              <li>
                <a href="https://www.lumen.com/en-us/solutions/collaboration.html">Collaboration</a>
              </li>
              <li>
                <a href="https://www.lumen.com/en-us/solutions/connected-security.html">Connected Security</a>
              </li>
              <li>
                <a href="https://www.lumen.com/en-us/solutions/edge-computing.html">Edge Computing</a>
              </li>
              <li>
                <a href="https://www.lumen.com/en-us/solutions/hybrid-cloud.html">Hybrid Cloud</a>
              </li>
            </ul>
            <div class="chi-footer__links-title">Shop</div>
            <ul>
              <li>
                <a href="https://www.lumen.com/en-us/communications/hosted-voip.html">Lumen Engage</a>
              </li>
            </ul>
          </div>
          <div class="chi-col -w--12 -w-md--6 -w-lg--3">
            <div class="chi-footer__links-title">Resources</div>
            <ul>
              <li>
                <a href="https://www.lumen.com/en-us/about/4th-industrial-revolution.html">4th Industrial Revolution</a>
              </li>
              <li>
                <a href="https://blog.lumen.com" target="_blank">Blog</a>
              </li>
              <li>
                <a href="https://www.lumen.com/help/en-us/portals.html" target="_blank">Customer Portals</a>
              </li>
              <li>
                <a href="https://www.lumen.com/en-us/resources/network-maps.html">Network Maps</a>
              </li>
              <li>
                <a href="https://www.lumen.com/en-us/partner.html" target="_blank">Partners</a>
              </li>
              <li>
                <a href="https://www.lumen.com/help/en-us/home.html" target="_blank">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="chi-footer__internal">
      <div class="chi-footer__internal-content -mw--1200">
        <div class="chi-dropdown chi-footer__language">
          <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language">
            <div class="chi-button__content">
              <i class="chi-icon icon-globe-network" aria-hidden="true"></i>
              <span>English</span>
            </div>
          </a>
          <div class="chi-dropdown__menu -w--sm -text--body">
            <a class="chi-dropdown__menu-item -active" href="#">English</a>
            <a class="chi-dropdown__menu-item" href="#">Español</a>
            <a class="chi-dropdown__menu-item" href="#">Português</a>
            <a class="chi-dropdown__menu-item" href="#">Français</a>
            <a class="chi-dropdown__menu-item" href="#">Deutsch</a>
            <a class="chi-dropdown__menu-item" href="#">简体中文</a>
            <a class="chi-dropdown__menu-item" href="#">日本語</a>
          </div>
        </div>
        <div class="chi-footer__links">
          <ul>
            <li>
              <a href="https://www.lumen.com/en-us/about.html">About Us</a>
            </li>
            <li>
              <a href="https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html">Accessibility</a>
            </li>
            <li>
              <a href="https://jobs.lumen.com" target="_blank">Careers</a>
            </li>
            <li>
              <a href="https://www.lumen.com/en-us/contact-us.html">Contact Us</a>
            </li>
            <!-- OneTrust Cookies Settings button start -->
            <li>
              <a href="#" class="optanon-toggle-display">Cookie Settings</a>
            </li>
            <!-- OneTrust Cookies Settings button end -->
            <li>
              <a href="https://www.centurylink.com/aboutus/legal.html" target="_blank">Legal</a>
            </li>
            <li>
              <a href="https://www.lumen.com/en-us/about/legal/acceptable-use-policy.html" target="_blank">Legal Notices</a>
            </li>
            <li>
              <a href="https://www.lumen.com/en-us/about/legal/privacy-notice.html">Privacy</a>
            </li>
            <li>
              <a href="https://www.centurylink.com/aboutus/company-information/public-policy.html" target="_blank">Public Policy</a>
            </li>
            <li>
              <a href="https://www.lumen.com/help/en-us/home.html" target="_blank">Support</a>
            </li>
            <li>
              <a href="https://www.lumen.com/en-us/about/legal/commission-for-complaints-for-telecom-television-services-ccts">Canadian Ombudsman</a>
            </li>
            <li>
              <a href="https://assets.lumen.com/is/content/Lumen/gender-pay-gap-report?Creativeid=b565bf28-6d55-4f86-a245-2f0eb40b91a3" target="_blank">Gender Pay Gap 2020 (UK)</a>
            </li>
            <li>
              <a href="https://www.lumen.com/es-ar/about/legal/latam-tariffs-regulatory.html">Legal (Latin America)</a>
            </li>
            <li>
              <a href="https://www.lumen.com/en-us/about/legal/de-legal-notices.html">Legal Notices (Germany)</a>
            </li>
            <li>
              <a href="https://assets.lumen.com/is/content/Lumen/modern-slavery-statement-1?Creativeid=5dbb9687-e4a8-4a40-ae00-673ce51d6a80" target="_blank">Modern Slavery Statement 2020 (UK)</a>
            </li>
            <li>
              <a href="https://www.lumen.com/en-us/about/legal/uk-tax-strategy.html">UK Tax Strategy</a>
            </li>
          </ul>
          <div class="chi-footer__copyright">&copy; 2022 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
        </div>
      </div>
    </div>
  </div>
</footer>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
      }
    };
  }
})
export default class ExternalBrightspeed extends Vue {
  dropdown: any;

  mounted() {
    this.dropdown = chi.dropdown(this.$refs[`language-dropdown-button`] as HTMLElement);
  }

  beforeDestroy() {
    this.dropdown.dispose();
  }
}
</script>

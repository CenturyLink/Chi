<template lang="pug">
  <ComponentExample title="Base with back link, subtitle and buttons" id="base-back-link-subtitle-buttons" :tabs="exampleTabs">
    p.-text(slot="example-description") Use the <code>-danger</code> state to provide feedback to users when an input fails to validate. 
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
    fieldset(slot="example")
      legend.chi-label Select an option
        abbr.chi-label__required(title="Required field") *
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='example__error', :id="`example__error_${item}`" :required="item === 1")
            label(:for="`example__error_${item}`") Option {{ item }}
      .chi-label.-status.-danger
        | Please select an option.
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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
        webcomponent: `<chi-main backlink="Back link" title="App title" subtitle="App subtitle">
  <button class="chi-button -primary" slot="header-actions">Primary</button>
  <!-- App content goes here -->
  <footer class="chi-footer" slot="footer">
    <div class="chi-footer__content">
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
              <!-- OneTrust Cookies Settings button start-->
              <li>
                <a class="optanon-toggle-display" href="#">Cookie Settings</a>
              </li>
              <!-- OneTrust Cookies Settings button end-->
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
                <a href="https://www.lumen.com/en-us/about/legal/commission-for-complaints-for-telecom-television-services-ccts" target="_blank">Support</a>
              </li>
              <li>
                <a href="https://www.lumen.com/help/en-us/home.html">Canadian Ombudsman</a>
              </li>
              <li>
                <a href="https://assets.lumen.com/is/content/Lumen/gender-pay-gap-report?Creativeid=b565bf28-6d55-4f86-a245-2f0eb40b91a3" target="_blank">Gender Pay Gap 2020 (UK)</a>
              </li>
              <li>
                <a href="https://www.centurylink.com/aboutus/legal/latam/tariffs-and-regulatory-information.html">Legal (Latin America)</a>
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
            <div class="chi-footer__copyright">&copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`,
        htmlblueprint: `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs" aria-hidden="true"></i>
          <span class="-text--md">Back title</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="-text--h3 -text--boldest -text--navy -m--0 -br--1 -pr--2">App title</div>
        <div class="-text--md -pl--2">App subtitle</div>
      </div>
    </div>
    <div class="chi-main__header-end">
      <button class="chi-button -primary">Primary</button>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- App content goes here -->
  </div>
  <footer class="chi-footer">
    <div class="chi-footer__content">
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
              <!-- OneTrust Cookies Settings button start-->
              <li>
                <a class="optanon-toggle-display" href="#">Cookie Settings</a>
              </li>
              <!-- OneTrust Cookies Settings button end-->
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
                <a href="https://www.lumen.com/en-us/about/legal/commission-for-complaints-for-telecom-television-services-ccts" target="_blank">Support</a>
              </li>
              <li>
                <a href="https://www.lumen.com/help/en-us/home.html">Canadian Ombudsman</a>
              </li>
              <li>
                <a href="https://assets.lumen.com/is/content/Lumen/gender-pay-gap-report?Creativeid=b565bf28-6d55-4f86-a245-2f0eb40b91a3" target="_blank">Gender Pay Gap 2020 (UK)</a>
              </li>
              <li>
                <a href="https://www.centurylink.com/aboutus/legal/latam/tariffs-and-regulatory-information.html">Legal (Latin America)</a>
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
            <div class="chi-footer__copyright">&copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
      }
    };
  }
})
export default class BaseSubtitleButtons extends Vue {}
</script>

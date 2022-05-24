<template lang="pug">
  <ComponentExample title="Base with help icon" id="base-help" padding="-p--0" :tabs="exampleTabs">
    chi-main(title="App title" slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style="height:10rem;")
        | App content goes here
      chi-button(id='example__help-button2' type='icon' size='sm' variant='flat' alternative-text="Help" slot="help-icon" class="-ml--1"  @click="$refs.example__help_popover2.toggle()")
        chi-icon(icon='circle-question-outline')
      chi-popover(id='example__help-popover2' ref='example__help_popover2' position='top' variant='text' arrow reference='#example__help-button2')
        | Popover content.
      <AppLayoutFooter />
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
import AppLayoutFooter from './_app-layout-footer.vue';
import { BASE_HELP_LANGUAGES, FOOTER_LINKS } from './fixtures';

declare const chi: any;

@Component({
  components: {
    AppLayoutFooter
  },
  data: () => {
    return {
      languages: BASE_HELP_LANGUAGES,
      footerLinks: FOOTER_LINKS,
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-main title="App title">
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon" class="-ml--1">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="top" variant="text" arrow reference="#example__help-button">
    Popover content.
  </chi-popover>
  <!-- App content goes here -->
  <footer class="chi-footer" slot="footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network"></i>
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

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>
`,
        htmlblueprint: `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="-text--h3 -text--boldest -text--navy -m--0 -pr--2">
          App title
          <div class="chi-button -icon -flat -sm" id="example__help-button" data-target="#example__help-popover" aria-label="Help" slot="help-icon">
            <div class="chi-button__content">
              <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
            </div>
          </div>
          <section class="chi-popover chi-popover--top" id="example__help-popover" aria-modal="true" role="dialog">
            <div class="chi-popover__content">
              <p class="chi-popover__text">Popover content.</p>
            </div>
          </section>
        </div>
      </div>
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
                <i class="chi-icon icon-globe-network"></i>
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

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
  chi.popover(document.getElementById('example__help-button'));
<\/script>`
      }
    };
  }
})
export default class BaseHelp extends Vue {}
</script>

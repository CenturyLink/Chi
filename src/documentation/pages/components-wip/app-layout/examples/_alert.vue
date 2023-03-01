<template lang="pug">
  <ComponentExample title="Base with alert" id="base_with_alert" :tabs="exampleTabs">
  chi-main(title='Page Title' slot="example")
    chi-alert(color='info' icon='circle-info' slot='page-alert' closable) This is a page level info alert
    .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
    footer.chi-footer(slot='footer')
      .chi-footer__content
        .chi-footer__internal
          .chi-footer__internal-content
            .chi-dropdown.chi-footer__language
              a#alert-language-dropdown-button.chi-button.-icon.-flat.-light.-sm.chi-dropdown__trigger(data-position='top-start' aria-label='Select your preferred language')
                .chi-button__content
                  i.chi-icon.icon-globe-network-outline
                  span English
              .chi-dropdown__menu.-w--sm.-text--body
                a.chi-dropdown__menu-item.-active(href='#') English
                a.chi-dropdown__menu-item(href='#') Espa&ntilde;ol
                a.chi-dropdown__menu-item(href='#') Portugu&ecirc;s
                a.chi-dropdown__menu-item(href='#') Fran&ccedil;ais
                a.chi-dropdown__menu-item(href='#') Deutsch
                a.chi-dropdown__menu-item(href='#') &#x7B80;&#x4F53;&#x4E2D;&#x6587;
                a.chi-dropdown__menu-item(href='#') &#x65E5;&#x672C;&#x8A9E;
            .chi-footer__links
              ul
                li
                  a(href='https://www.lumen.com/en-us/about.html') About Us
                li
                  a(href='https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html') Accessibility
                li
                  a(href='https://jobs.lumen.com' target='_blank') Careers
                li
                  a(href='https://www.lumen.com/en-us/contact-us.html') Contact Us
                li
                  a.optanon-toggle-display(href='#') Cookie Settings
                li
                  a(href='https://www.centurylink.com/aboutus/legal.html' target='_blank') Legal
                li
                  a(href='https://www.lumen.com/en-us/about/legal/acceptable-use-policy.html' target='_blank') Legal Notices
                li
                  a(href='https://www.lumen.com/en-us/about/legal/privacy-notice.html') Privacy
                li
                  a(href='https://www.centurylink.com/aboutus/company-information/public-policy.html' target='_blank') Public Policy
                li
                  a(href='https://www.lumen.com/en-us/about/legal/commission-for-complaints-for-telecom-television-services-ccts' target='_blank') Support
                li
                  a(href='https://www.lumen.com/help/en-us/home.html') Canadian Ombudsman
                li
                  a(href='https://assets.lumen.com/is/content/Lumen/gender-pay-gap-report?Creativeid=b565bf28-6d55-4f86-a245-2f0eb40b91a3' target='_blank') Gender Pay Gap 2020 (UK)
                li
                  a(href='https://www.centurylink.com/aboutus/legal/latam/tariffs-and-regulatory-information.html') Legal (Latin America)
                li
                  a(href='https://www.lumen.com/en-us/about/legal/de-legal-notices.html') Legal Notices (Germany)
                li
                  a(href='https://assets.lumen.com/is/content/Lumen/modern-slavery-statement-1?Creativeid=5dbb9687-e4a8-4a40-ae00-673ce51d6a80' target='_blank') Modern Slavery Statement 2020 (UK)
                li
                  a(href='https://www.lumen.com/en-us/about/legal/uk-tax-strategy.html') UK Tax Strategy
              .chi-footer__copyright
                | &copy; 2023 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.

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

declare const chi: any;

@Component({
  data: () => {
    return {
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
        webcomponent: `<chi-main title="Page Title">
  <chi-alert color="info" icon="circle-info" slot="page-alert" closable>This is a page level info alert</chi-alert>
  <!-- Page content goes here -->
  <footer class="chi-footer" slot="footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline"></i>
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
            <div class="chi-footer__copyright">&copy; 2023 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</chi-main>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
<\/script>`,
        htmlblueprint: `<div class="chi-main">
  <div class="chi-main__alert">
    <div class="chi-alert -info -close" role="alert">
      <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
      <div class="chi-alert__content">
        <p class="chi-alert__text">This is a page level info alert</p>
      </div>
      <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
    </div>
  </div>
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">
          Page Title
        </div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  <footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network-outline"></i>
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
            <div class="chi-footer__copyright">&copy; 2023 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
<\/script>`
      }
    };
  }
})
export default class Alert extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('alert-language-dropdown-button'));
  }
}
</script>

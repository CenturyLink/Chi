<template lang="pug">
  <ComponentExample title="Internal" id="internal-lumen-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Show the internal footer for authenticated users.
    footer.chi-footer(slot='example')
      .chi-footer__content
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
            <li><a href="https://www.lumen.com/en-us/about.html">About Us</a></li>
            <li>
              <a href="https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html">Accessibility</a>
            </li>
            <li><a href="https://jobs.lumen.com" target="_blank">Careers</a></li>
            <li><a href="https://www.lumen.com/en-us/contact-us.html">Contact Us</a></li>
            <li><a href="#" class="optanon-toggle-display">Cookie Settings</a></li>
            <li><a href="https://www.centurylink.com/aboutus/legal.html" target="_blank">Legal</a></li>
            <li><a href="https://www.lumen.com/en-us/about/legal/acceptable-use-policy.html" target="_blank">Legal Notices</a>
            </li>
            <li><a href="https://www.lumen.com/en-us/about/legal/privacy-notice.html">Privacy</a></li>
            <li>
              <a href="https://www.centurylink.com/aboutus/company-information/public-policy.html" target="_blank">Public Policy</a>
            </li>
            <li><a href="https://www.lumen.com/help/en-us/home.html" target="_blank">Support</a></li>
            <li>
              <a href="https://www.lumen.com/en-us/about/legal/commission-for-complaints-for-telecom-television-services-ccts">Canadian Ombudsman</a>
            </li>
            <li>
              <a href="https://assets.lumen.com/is/content/Lumen/gender-pay-gap-report?Creativeid=b565bf28-6d55-4f86-a245-2f0eb40b91a3">Gender Pay Gap 2020 (UK)</a>
            </li>
            <li>
              <a href="https://www.lumen.com/es-ar/about/legal/latam-tariffs-regulatory.html">Legal (Latin America)</a>
            </li>
            <li>
              <a href="https://www.lumen.com/en-us/about/legal/de-legal-notices.html">Legal Notices (Germany)</a>
            </li>
            <li>
              <a href="https://assets.lumen.com/is/content/Lumen/modern-slavery-statement-1?Creativeid=5dbb9687-e4a8-4a40-ae00-673ce51d6a80">Modern Slavery Statement 2020 (UK)</a>
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
export default class InternalLumenPortal extends Vue {
  dropdown: any;

  mounted() {
    this.dropdown = chi.dropdown(this.$refs[`language-dropdown-button`] as HTMLElement);
  }

  beforeDestroy() {
    this.dropdown.dispose();
  }
}
</script>

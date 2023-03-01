<template lang="pug">
  <ComponentExample title="Dashboard with header background" id="dashboard" :tabs="exampleTabs">
    chi-main(title='Page title' format='fixed-width' header-background slot="example")
      chi-button#dashboard__help-button(type='icon' size='sm' variant='flat' alternative-text='Help' slot='help-icon' @click="togglePopover")
        chi-icon(icon='circle-question-outline')
      chi-popover(ref="popover" position='right-start' variant='text' arrow reference='#dashboard__help-button' slot='help-icon')
        | Popover content.
      chi-button(color='primary' size='sm' slot='header-actions') Button
      .chi-css-grid.-grid-rows--176
        .chi-css-col.-col-lg--6.-col-xl--4.-row--2
          .chi-card.-highlight.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta='cta') View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta='cta') View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta='cta') View
            .chi-card__content
              ul.chi-css-grid.-gap--05.-no-style.-m--0
                li.chi-css-col.-col-sm--6
                  chi-link(href='#') Widget Link
                li.chi-css-col.-col-sm--6
                  chi-link(href='#') Widget Link
                li.chi-css-col.-col-sm--6
                  chi-link(href='#') Widget Link
                li.chi-css-col.-col-sm--6
                  chi-link(href='#') Widget Link
                li.chi-css-col.-col-sm--6
                  chi-link(href='#') Widget Link
                li.chi-css-col.-col-sm--6
                  chi-link(href='#') Widget Link
                li.chi-css-col.-col-sm--6
                  chi-link(href='#') Widget Link
                li.chi-css-col.-col-sm--6
                  chi-link(href='#') Widget Link
        .chi-css-col.-col-lg--6.-col-xl--4
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta='cta') View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4.-row--2
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta='cta') View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4.-row--2
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta='cta') View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta='cta') View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4.-row--2
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta='cta') View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4.-row--2
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta='cta') View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta='cta') View
            .chi-card__content Content here
      footer.chi-footer(slot='footer')
        .chi-footer__content
          .chi-footer__internal
            .chi-footer__internal-content
              .chi-dropdown.chi-footer__language
                a#dashboard-language-dropdown-button.chi-button.-icon.-flat.-light.-sm.chi-dropdown__trigger(data-position='top-start' aria-label='Select your preferred language')
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
                  | &copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.

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
        webcomponent: `<chi-main title="Page title" format="fixed-width" header-background>
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  <chi-button color="primary" size="sm" slot="header-actions">Button</chi-button>
  <div class="chi-css-grid -grid-rows--176">
    <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
      <div class="chi-card -highlight -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">
          <ul class="chi-css-grid -gap--05 -no-style -m--0">
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
            <li class="chi-css-col -col-sm--6">
              <chi-link href="#">Widget Link</chi-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
    <div class="chi-css-col -col-lg--6 -col-xl--4">
      <div class="chi-card -widget -h--100">
        <div class="chi-card__header">
          <div class="chi-card__title">Widget</div>
          <chi-link size="md" href="#" cta="cta">View</chi-link>
        </div>
        <div class="chi-card__content">Content here</div>
      </div>
    </div>
  </div>
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
<\/script>`,
        htmlblueprint: `<div class="chi-main -fixed-width -header-background">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">
          Page title
          <div class="chi-button -icon -flat -sm" id="example__help-button" data-target="#example__help-popover" aria-label="Help" slot="help-icon">
            <div class="chi-button__content">
              <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
            </div>
          </div>
          <section class="chi-popover chi-popover--right-start" id="example__help-popover" aria-modal="true" role="dialog">
            <div class="chi-popover__content">
              <p class="chi-popover__text">Popover content.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="chi-main__header-end">
      <button class="chi-button -primary -sm">Button</button>
    </div>
  </div>
  <div class="chi-main__content">
    <div class="chi-css-grid -grid-rows--176">
      <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
        <div class="chi-card -highlight -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">
            <ul class="chi-css-grid -gap--05 -no-style -m--0">
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
              <li class="chi-css-col -col-sm--6">
                <a class="chi-link" href="#">Widget Link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4 -row--2">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
      <div class="chi-css-col -col-lg--6 -col-xl--4">
        <div class="chi-card -widget -h--100">
          <div class="chi-card__header">
            <div class="chi-card__title">Widget</div>
            <a class="chi-link -md -cta" href="#">View</a>
          </div>
          <div class="chi-card__content">Content here</div>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-main__background">
    <div class="chi-main__background-image">
    </div>
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
export default class Dashboard extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('dashboard-language-dropdown-button'));
  }

  togglePopover() {
    (this.$refs.popover as any).toggle();
  }
}
</script>

<template lang="pug">
<ComponentExample title="Internal" id="internal-centurylink" :tabs="exampleTabs">
  p.-text(slot="example-description")
    | Show the internal footer for authenticated users.
  <Wrapper slot='example'>
    footer.chi-footer
      .chi-footer__content
        .chi-footer__internal
          .chi-footer__internal-content.-mw--1200
            .chi-footer__links
              ul
                li
                  a(href="https://www.centurylink.com/aboutus.html") About Us
                li
                  a(href="https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html") Accessibility
                li
                  a(href="https://jobs.lumen.com" target="_blank") Careers
                li
                  a(href="https://www.centurylink.com/home/help/contact.html") Contact Us
                <!-- OneTrust Cookies Settings button start -->
                li
                  a(href="#" class="optanon-toggle-display") Cookie Settings
                <!-- OneTrust Cookies Settings button end -->
                li
                  a(href="https://www.centurylink.com/aboutus/legal.html" target="_blank") Legal
                li
                  a(href="https://www.centurylink.com/legal/" target="_blank") Legal Notices
                li
                  a(href="https://www.centurylink.com/aboutus/legal/privacy-policy.html") Privacy Policy
                li
                  a(href="https://www.centurylink.com/aboutus/legal/tariff-library.html" target="_blank") Tariffs
                li
                  a(href="https://www.centurylink.com/sitemap.html" target="_blank") Site Map
              .chi-footer__copyright
                | &copy; 2022 CenturyLink. All Rights Reserved. Third party marks are the property of their respective owners.
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
        <div class="chi-footer__links">
          <ul>
            <li><a href="https://www.centurylink.com/aboutus.html">About Us</a></li>
            <li><a href="https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html">Accessibility</a></li>
            <li><a href="https://jobs.lumen.com" target="_blank">Careers</a></li>
            <li><a href="https://www.centurylink.com/home/help/contact.html">Contact Us</a></li><!-- OneTrust Cookies Settings button start -->
            <li><a class="optanon-toggle-display" href="#">Cookie Settings</a></li><!-- OneTrust Cookies Settings button end -->
            <li><a href="https://www.centurylink.com/aboutus/legal.html" target="_blank">Legal</a></li>
            <li><a href="https://www.centurylink.com/legal/" target="_blank">Legal Notices</a></li>
            <li><a href="https://www.centurylink.com/aboutus/legal/privacy-policy.html">Privacy Policy</a></li>
            <li><a href="https://www.centurylink.com/aboutus/legal/tariff-library.html" target="_blank">Tariffs</a></li>
            <li><a href="https://www.centurylink.com/sitemap.html" target="_blank">Site Map</a></li>
          </ul>
          <div class="chi-footer__copyright">&copy; 2022 CenturyLink. All Rights Reserved. Third party marks are the property of their respective owners.</div>
        </div>
      </div>
    </div>
  </div>
</footer>`
      }
    };
  }
})
export default class InternalCenturylink extends Vue {}
</script>

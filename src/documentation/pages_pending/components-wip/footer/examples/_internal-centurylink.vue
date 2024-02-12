<template lang="pug">
<ComponentExample title="Internal" id="internal-centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Show the internal footer for authenticated users.
  template(#example)
    footer.chi-footer
      .chi-footer__content
        .chi-footer__internal
          .chi-footer__internal-content.-mw--1200
            .chi-footer__links
              ul
                li(v-for="(item, index) in centuryFooterLinks" :key="index")
                  a(:href="item.href" :target="item.target" :class="item.class") {{item.title}}
              .chi-footer__copyright
                | &copy; 2024 CenturyLink. All Rights Reserved. Third party marks are the property of their respective owners.
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ILink } from '../../../../models/models';
import { CENTURY_FOOTER_LINKS } from '../../../../fixtures/fixtures';

@NuxtComponent({})
export default class InternalCenturylink extends Vue {
  centuryFooterLinks = CENTURY_FOOTER_LINKS
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: ``,
  }
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    let centuryFooterLinks = '';

    this.centuryFooterLinks.forEach((footerLink: ILink) => {
      centuryFooterLinks += `
            <li>
              <a href="${footerLink.href}"${footerLink.target ? ' target="' + footerLink.target + '"' : ''}${footerLink.class ? ' class="' + footerLink.class + '"' : ''
        }>${footerLink.title}</a>
            </li>`;
    });

    this.codeSnippets.htmlblueprint = `<footer class="chi-footer">
  <div class="chi-footer__content">
    <div class="chi-footer__internal">
      <div class="chi-footer__internal-content -mw--1200">
        <div class="chi-footer__links">
          <ul>${centuryFooterLinks}
          </ul>
          <div class="chi-footer__copyright">&copy; 2024 CenturyLink. All Rights Reserved. Third party marks are the property of their respective owners.</div>
        </div>
      </div>
    </div>
  </div>
</footer>`;
  }
}
</script>

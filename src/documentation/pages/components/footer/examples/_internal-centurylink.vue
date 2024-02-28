<template lang="pug">
  <ComponentExample title="Internal" id="internal-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Show the internal footer for authenticated users.
    footer.chi-footer(slot='example')
      .chi-footer__content
        .chi-footer__internal
          .chi-footer__internal-content.-mw--1200
            .chi-footer__links
              ul
                li(v-for="(item, index) in centuryFooterLinks" :key="index")
                  a(:href="item.href" :target="item.target" :class="item.class") {{item.title}}
              .chi-footer__copyright
                | &copy; 2024 CenturyLink. All Rights Reserved. Third party marks are the property of their respective owners.
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
import { ILink } from '../../../../models/models';
import { CENTURY_FOOTER_LINKS } from '../../../../fixtures/fixtures';

@Component({
  data: () => {
    return {
      centuryFooterLinks: CENTURY_FOOTER_LINKS,
      exampleTabs: [
        {
          disabled: true,
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
        webcomponent: ``,
        htmlblueprint: ``
      }
    };
  }
})
export default class InternalCenturylink extends Vue {

  created() {
    this._setCodeSnippets()
  }

  _setCodeSnippets() {
    let centuryFooterLinks = '';

    this.$data.centuryFooterLinks.forEach((footerLink: ILink) => {
      centuryFooterLinks += `
            <li>
              <a href="${footerLink.href}"${footerLink.target ? ' target="' + footerLink.target + '"' : ''}${footerLink.class ? ' class="' + footerLink.class + '"' : ''}>${footerLink.title}</a>
            </li>`
    })

    this.$data.codeSnippets.htmlblueprint = `<footer class="chi-footer">
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
</footer>`
  }
}
</script>

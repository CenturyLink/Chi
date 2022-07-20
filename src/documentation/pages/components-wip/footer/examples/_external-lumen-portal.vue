<template lang="pug">
  <ComponentExample title="External" id="external-lumen-portal" :tabs="exampleTabs">
    p.-text(slot='example-description')
      | Show the external footer for all public facing webpages.
    footer.chi-footer(slot='example')
      .chi-footer__content
        .chi-footer__external
          .chi-footer__external-content.-mw--1200
            .chi-footer__header
              .chi-footer__brand
                a.chi-brand(href='/', aria-label='Lumen')
                  svg(
                    viewBox='0 0 140 20',
                    xmlns='http://www.w3.org/2000/svg',
                    aria-hidden='true'
                  )
                    path(
                      fill='#000',
                      d='M.27396667 2.00213333V17.8541333c0 .9566667.558 1.395 1.634 1.395H16.8916333c1.0363334 0 1.634-.4383333 1.634-1.395 0-.9163333-.5976666-1.3946666-1.634-1.3946666H4.01996667c-.518 0-.71733334-.239-.71733334-.7173334V2.00213333c0-.797-.59766666-1.39466666-1.51433333-1.39466666-.87666667 0-1.51433333.59766666-1.51433333 1.39466666'
                    )
                    path(
                      fill='#000',
                      d='M26.0176333 12.2995V2.00216667c0-.797-.5976666-1.395-1.5143333-1.395-.9166667 0-1.5143333.598-1.5143333 1.395V12.5785c0 6.416 3.985 7.1486667 10.8793333 7.1486667 6.894 0 10.8793333-.7326667 10.8793333-7.1486667V2.00216667c0-.797-.598-1.395-1.5143333-1.395-.9166667 0-1.5143333.598-1.5143333 1.395V12.2995c0 5.2203333-2.7896667 4.5186667-7.8506667 4.5186667s-7.8506667.622-7.8506667-4.5186667'
                    )
                    path(
                      fill='#000',
                      d='M74.2765667 5.2699v12.8236667c0 .8366666.6376666 1.3946666 1.5143333 1.3946666.9166667 0 1.5143333-.558 1.5143333-1.3946666V2.67956667c0-1.15566667-.8126666-2.07233334-1.9126666-2.07233334-1.0423334 0-1.502.59166667-2.5106667 1.51433334l-7.7313333 7.62766666H65.1109l-7.731-7.58766666C56.3882333 1.14123333 55.6362333.60723333 54.7495667.60723333c-.8863334 0-1.9526667.91666667-1.9526667 2.07233334V18.0935667c0 .8366666.6376667 1.3946666 1.5143333 1.3946666.9166667 0 1.5143334-.558 1.5143334-1.3946666V5.2299H55.9849l7.3726667 6.99c.663.6496667 1.1793333 1.1556667 1.7133333 1.1556667.671 0 1.0156667-.5276667 1.754-1.1556667l7.3323333-6.95h.1193334z'
                    )
                    path(
                      fill='#0C9ED9',
                      d='M103.845933 2.28113333c0-.91666666-.558-1.43466666-1.634-1.43466666H87.0686c-1.076 0-1.6336667.518-1.6336667 1.43466666V3.6698l16.8169997-.03366667c1.036 0 1.594-.47833333 1.594-1.355'
                    )
                    path(
                      fill='#000',
                      d='M85.4348 8.71616667v9.13800003c0 .9563333.558 1.3946666 1.634 1.3946666h15.303c1.035667 0 1.593667-.4383333 1.593667-1.3946666 0-.9166667-.558-1.3946667-1.593667-1.3946667h-13.191c-.5176667 0-.7173333-.2393333-.7173333-.7173333V11.5425h9.963c1.0756666 0 1.6336663-.4783333 1.6336663-1.395 0-.87666667-.5579997-1.39466667-1.6336663-1.39466667L85.4348 8.71616667z'
                    )
                    path(
                      fill='#000',
                      d='M132.8176 17.6948667V2.0022c0-.797-.637667-1.395-1.514667-1.395-.916666 0-1.514333.598-1.514333 1.395v12.704L114.804933 2.12153333C113.773267 1.2562 113.1996.6072 112.214267.6072c-1.080667 0-1.792667.71733333-1.792667 2.07233333V18.0935333c0 .797.637333 1.3946667 1.514 1.3946667.916667 0 1.514333-.5976667 1.514333-1.3946667V5.11053333L128.274267 17.8542c.993333.8433333 1.681666 1.634 2.710333 1.634 1.037 0 1.833-.7573333 1.833-1.7933333'
                    )
                    path(
                      fill='#000',
                      d='M137.447467 3.0801c.316333 0 .495333-.165.495333-.399 0-.26166667-.179-.39933333-.495333-.39933333h-.591667V3.0801h.591667zm-1.06-1.211h1.101333c.536667 0 .936.26133333.936.77066667 0 .399-.234333.64666666-.564667.743l.647.922h-.564333l-.578-.83933334h-.509v.83933334h-.468333V1.8691zm3.055333 1.266v-.01366667c0-1.17-.908-2.133-2.119333-2.133-1.197334 0-2.119334.977-2.119334 2.14666667v.014c0 1.16966667.908 2.133 2.119334 2.133 1.197333 0 2.119333-.97733333 2.119333-2.147zm-4.514.014v-.014c0-1.30733333 1.06-2.40833333 2.394667-2.40833333 1.349 0 2.394666 1.08733333 2.394666 2.39466666V3.1351c0 1.30733333-1.059333 2.40866667-2.394666 2.40866667-1.348667 0-2.394667-1.08766667-2.394667-2.39466667z'
                    )
              .chi-footer__search
                .chi-form__item
                  label.chi-label.-d--none(for='chi-footer-search-input') Search Lumen
                  input#chi-footer-search-input.chi-input(
                    type='text',
                    placeholder='Search'
                  )
            .chi-footer__links.chi-grid
              .chi-col.-w--12.-w-md--6.-w-lg--3
                ul.-text--bold
                  li(v-for="(contactLink, index) in externalContents.contactLinks" :key="index")
                    a(:href="contactLink.href" :target="contactLink.target" :class="contactLink.class") {{contactLink.title}}
                .chi-footer__social
                  a(v-for="(socialLink, index) in externalContents.socialLinks" :key="index" :href="socialLink.href" :aria-label="socialLink.ariaLabel" rel="noopener" target="_blank")
                    i(:class="`chi-icon icon-logo-${socialLink.iconName} -md`" aria-hidden="true")
              .chi-col.-w--12.-w-md--6.-w-lg--3
                ul.-text--bold
                  li(v-for="(aboutLink, index) in externalContents.aboutLinks" :key="index")
                    a(:href="aboutLink.href" :target="aboutLink.target" :class="aboutLink.class") {{aboutLink.title}}
              .chi-col.-w--12.-w-md--6.-w-lg--3
                .chi-footer__links-title Solutions
                ul
                  li(v-for="(solutionLink, index) in externalContents.solutionLinks" :key="index")
                    a(:href="solutionLink.href" :target="solutionLink.target" :class="solutionLink.class") {{solutionLink.title}}
                .chi-footer__links-title Shop
                ul
                  li(v-for="(shopLink, index) in externalContents.shopLinks" :key="index")
                    a(:href="shopLink.href" :target="shopLink.target" :class="shopLink.class") {{shopLink.title}}
              .chi-col.-w--12.-w-md--6.-w-lg--3
                .chi-footer__links-title Resources
                ul
                  li(v-for="(resourceLink, index) in externalContents.resourceLinks" :key="index")
                    a(:href="resourceLink.href" :target="resourceLink.target" :class="resourceLink.class") {{resourceLink.title}}
        .chi-footer__internal
          .chi-footer__internal-content.-mw--1200
            .chi-dropdown.chi-footer__language
              a.chi-button.-icon.-flat.-light.-sm.chi-dropdown__trigger(id="example__footer_language_dropdown_button" ref="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language")
                .chi-button__content
                  i.chi-icon.icon-globe-network(aria-hidden="true")
                  span English
              .chi-dropdown__menu.-w--sm.-text--body
                a.chi-dropdown__menu-item(v-for="(link, index) in languageItems" :key="index" :href="link.href" :class="index === 0 ? '-active' : ''")
                  | {{link.name}}
            .chi-footer__links
              ul
                li(v-for="(item, index) in footerLinks" :key="index")
                  a(:href="item.href" :target="item.target" :class="item.class") {{item.title}}
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
import { EXTERNAL_CONTENTS, FOOTER_LANGUAGE_DROPDOWN_ITEMS, FOOTER_LINKS, ILanguage, ILink } from '../../.././../models/models';

declare const chi: any;

@Component({
  data: () => {
    return {
      footerLinks: FOOTER_LINKS,
      languageItems: FOOTER_LANGUAGE_DROPDOWN_ITEMS,
      externalContents: EXTERNAL_CONTENTS,
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
        htmlblueprint: ``
      }
    }
  }
})
export default class ExternalLumenPortal extends Vue {
  dropdown: any;

  created() {
    this._setCodeSnippet();
  }

  _setCodeSnippet() {
    let socialLinks = '', languageItemLinks = '', footerItemLinks = '';
    this.$data.footerLinks.forEach((link: ILink) => {
          footerItemLinks += `
            <li>
              <a href="${link.href}"${link.target ? ' target="' + link.target + '"' : ''}${link.class ? ' class="' + link.class + '"' : ''}>${link.title}</a>
            </li>`;
    });
    
    this.$data.externalContents.socialLinks.forEach((link: ILink) => {
        socialLinks += `
              <a href="${link.href}" aria-label="${link.ariaLabel}" rel="noopener" target="_blank">
                <i class="chi-icon icon-logo-${link.iconName} -md" aria-hidden="true"></i>
              </a>`;
    });

    this.$data.languageItems.forEach((languageItem: ILanguage, index: number) => {
      languageItemLinks += `
            <a class="chi-dropdown__menu-item${index === 0 ? ' -active' : ''}" href="${languageItem.href}">${languageItem.name}</a>`
    })

    this.$data.codeSnippets.htmlblueprint = `<footer class="chi-footer">
  <div class="chi-footer__content">
    <div class="chi-footer__external">
      <div class="chi-footer__external-content -mw--1200">
        <div class="chi-footer__header">
          <div class="chi-footer__brand">
            <a href="/" class="chi-brand" aria-label="Lumen">
              <svg viewBox="0 0 140 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="#000" d="M.27396667 2.00213333V17.8541333c0 .9566667.558 1.395 1.634 1.395H16.8916333c1.0363334 0 1.634-.4383333 1.634-1.395 0-.9163333-.5976666-1.3946666-1.634-1.3946666H4.01996667c-.518 0-.71733334-.239-.71733334-.7173334V2.00213333c0-.797-.59766666-1.39466666-1.51433333-1.39466666-.87666667 0-1.51433333.59766666-1.51433333 1.39466666"/>
                <path fill="#000" d="M26.0176333 12.2995V2.00216667c0-.797-.5976666-1.395-1.5143333-1.395-.9166667 0-1.5143333.598-1.5143333 1.395V12.5785c0 6.416 3.985 7.1486667 10.8793333 7.1486667 6.894 0 10.8793333-.7326667 10.8793333-7.1486667V2.00216667c0-.797-.598-1.395-1.5143333-1.395-.9166667 0-1.5143333.598-1.5143333 1.395V12.2995c0 5.2203333-2.7896667 4.5186667-7.8506667 4.5186667s-7.8506667.622-7.8506667-4.5186667"/>
                <path fill="#000" d="M74.2765667 5.2699v12.8236667c0 .8366666.6376666 1.3946666 1.5143333 1.3946666.9166667 0 1.5143333-.558 1.5143333-1.3946666V2.67956667c0-1.15566667-.8126666-2.07233334-1.9126666-2.07233334-1.0423334 0-1.502.59166667-2.5106667 1.51433334l-7.7313333 7.62766666H65.1109l-7.731-7.58766666C56.3882333 1.14123333 55.6362333.60723333 54.7495667.60723333c-.8863334 0-1.9526667.91666667-1.9526667 2.07233334V18.0935667c0 .8366666.6376667 1.3946666 1.5143333 1.3946666.9166667 0 1.5143334-.558 1.5143334-1.3946666V5.2299H55.9849l7.3726667 6.99c.663.6496667 1.1793333 1.1556667 1.7133333 1.1556667.671 0 1.0156667-.5276667 1.754-1.1556667l7.3323333-6.95h.1193334z"/>
                <path fill="#0C9ED9" d="M103.845933 2.28113333c0-.91666666-.558-1.43466666-1.634-1.43466666H87.0686c-1.076 0-1.6336667.518-1.6336667 1.43466666V3.6698l16.8169997-.03366667c1.036 0 1.594-.47833333 1.594-1.355"/>
                <path fill="#000" d="M85.4348 8.71616667v9.13800003c0 .9563333.558 1.3946666 1.634 1.3946666h15.303c1.035667 0 1.593667-.4383333 1.593667-1.3946666 0-.9166667-.558-1.3946667-1.593667-1.3946667h-13.191c-.5176667 0-.7173333-.2393333-.7173333-.7173333V11.5425h9.963c1.0756666 0 1.6336663-.4783333 1.6336663-1.395 0-.87666667-.5579997-1.39466667-1.6336663-1.39466667L85.4348 8.71616667z"/>
                <path fill="#000" d="M132.8176 17.6948667V2.0022c0-.797-.637667-1.395-1.514667-1.395-.916666 0-1.514333.598-1.514333 1.395v12.704L114.804933 2.12153333C113.773267 1.2562 113.1996.6072 112.214267.6072c-1.080667 0-1.792667.71733333-1.792667 2.07233333V18.0935333c0 .797.637333 1.3946667 1.514 1.3946667.916667 0 1.514333-.5976667 1.514333-1.3946667V5.11053333L128.274267 17.8542c.993333.8433333 1.681666 1.634 2.710333 1.634 1.037 0 1.833-.7573333 1.833-1.7933333"/>
                <path fill="#000" d="M137.447467 3.0801c.316333 0 .495333-.165.495333-.399 0-.26166667-.179-.39933333-.495333-.39933333h-.591667V3.0801h.591667zm-1.06-1.211h1.101333c.536667 0 .936.26133333.936.77066667 0 .399-.234333.64666666-.564667.743l.647.922h-.564333l-.578-.83933334h-.509v.83933334h-.468333V1.8691zm3.055333 1.266v-.01366667c0-1.17-.908-2.133-2.119333-2.133-1.197334 0-2.119334.977-2.119334 2.14666667v.014c0 1.16966667.908 2.133 2.119334 2.133 1.197333 0 2.119333-.97733333 2.119333-2.147zm-4.514.014v-.014c0-1.30733333 1.06-2.40833333 2.394667-2.40833333 1.349 0 2.394666 1.08733333 2.394666 2.39466666V3.1351c0 1.30733333-1.059333 2.40866667-2.394666 2.40866667-1.348667 0-2.394667-1.08766667-2.394667-2.39466667z"/>
              </svg>
            </a>
          </div>
          <div class="chi-footer__search">
            <div class="chi-form__item">
              <label class="chi-label -d--none" for="example__footer_search_input">Search Lumen</label>
              <input class="chi-input" type="text" placeholder="Search" id="example__footer_search_input">
            </div>
          </div>
        </div>
        <div class="chi-footer__links chi-grid">
          <div class="chi-col -w--12 -w-md--6 -w-lg--3">
            <ul class="-text--bold">${this.generateLinkCodeSnippet('contactLinks')}
            </ul>
            <div class="chi-footer__social">${socialLinks}
            </div>
          </div>
          <div class="chi-col -w--12 -w-md--6 -w-lg--3">
            <ul class="-text--bold">${this.generateLinkCodeSnippet('aboutLinks')}
            </ul>
          </div>
          <div class="chi-col -w--12 -w-md--6 -w-lg--3">
            <div class="chi-footer__links-title">Solutions</div>
            <ul>${this.generateLinkCodeSnippet('solutionLinks')}
            </ul>
            <div class="chi-footer__links-title">Shop</div>
            <ul>${this.generateLinkCodeSnippet('shopLinks')}
            </ul>
          </div>
          <div class="chi-col -w--12 -w-md--6 -w-lg--3">
            <div class="chi-footer__links-title">Resources</div>
            <ul>${this.generateLinkCodeSnippet('resourceLinks')}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="chi-footer__internal">
      <div class="chi-footer__internal-content -mw--1200">
        <div class="chi-dropdown chi-footer__language">
          <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="example__footer_language_dropdown_button" data-position="top-start" aria-label="Select your preferred language">
            <div class="chi-button__content">
              <i class="chi-icon icon-globe-network" aria-hidden="true"></i>
              <span>English</span>
            </div>
          </a>
          <div class="chi-dropdown__menu -w--sm -text--body">${languageItemLinks}
          </div>
        </div>
        <div class="chi-footer__links">
          <ul>${footerItemLinks}
          </ul>
          <div class="chi-footer__copyright">&copy; 2022 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
        </div>
      </div>
    </div>
  </div>
</footer>

<script>chi.dropdown(document.getElementById('example__footer_language_dropdown_button'));<\/script>`
  }

  generateLinkCodeSnippet(keyName: string) {
    let linkCodeSnippet = '';
    this.$data.externalContents[keyName].forEach((link: ILink) => {
          linkCodeSnippet += `
              <li>
                <a href="${link.href}"${link.target ? ' target="' + link.target + '"' : ''}${link.class ? ' class="' + link.class + '"' : ''}>${link.title}</a>
              </li>`;
    });
    return linkCodeSnippet;
  }

  mounted() {
    this.$nextTick(()=>{
      console.log(typeof chi);
      console.log(this.$refs);
      console.log(typeof this.$refs[`language-dropdown-button`]);
      console.log(this.$refs[`language-dropdown-button`]);
      console.log(document.getElementById('example__footer_language_dropdown_button'));
      this.dropdown = chi.dropdown(document.getElementById('example__footer_language_dropdown_button'));
    });
  }

  beforeDestroy() {
    this.dropdown.dispose();
  }
}
</script>

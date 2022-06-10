<template lang="pug">
  div
    <TitleBar title="Error 404" description="Basic 404 level error page template. Indicates a client error, such as a misspelled URL." />
    .chi-grid__container.-pt--3
      .-centurylink--hide
        .example.-mb--3
          .-p--3.-bg--grey-20
            .chi-app.-bg--grey-10
              header.chi-header
                .chi-header__content.-justify-content--center
                  .chi-header__brand
                    template(v-if="['centurylink'].includes($store.state.themes.theme)")
                      a.chi-brand.-centurylink.-black(href='#', aria-label="CenturyLink")
                        <Logo :viewBox="$data.centuryLinkLogoData.viewBox" :dataBrandType="$data.centuryLinkLogoData.dataBrandType" :svgPathDataList="$data.centuryLinkLogoData.svgPathDataList" />
                    template(v-else)
                      a.chi-brand(href='#', aria-label="Lumen")
                        <Logo :viewBox="$data.lumenLogoData.viewBox" :dataBrandType="$data.lumenLogoData.dataBrandType" :svgPathDataList="$data.lumenLogoData.svgPathDataList" />
              .chi-app__body.-px--2.-py--4.-d--flex.-justify-content--center
                div.-w--100.-mw--480
                  .chi-card.-b--0.-bg--none
                    .chi-card__content.-text--center
                      h1.-m--2 404
                      h2.-text--h3 Page not found
                      p.-text.-pb--2 We're Sorry! The page you requested is currently unavailable.
          <pre class="language-html">
            <code v-highlight="['centurylink'].includes($store.state.themes.theme) ? $data.centuryLinkCodeSnippet : $data.lumenCodeSnippet" ref="error404Code" class="html"></code>
          </pre>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '../error-common/_logo.vue';
import { LUMEN_LOGO_DATA, LUMEN_LOGO_SVG_DATA_LIST, CENTURYLINK_LOGO_DATA, CENTURYLINK_SVG_LOGO_DATA_LIST } from '../error-common/fixtures';
@Component({
  components: {
    Logo
  },
  data: () => {
    return {
      lumenLogoData: LUMEN_LOGO_DATA,
      centuryLinkLogoData: CENTURYLINK_LOGO_DATA,
      lumenCodeSnippet: ``,
      centuryLinkCodeSnippet: ``
    };
  }
})
export default class Error404 extends Vue {
  created(){
    this._createCodeSnippet();
  }
  _createCodeSnippet(){
    this.$data.lumenCodeSnippet = `<div class="chi-app -bg--grey-10">
  <header class="chi-header">
    <div class="chi-header__content -justify-content--center">
      <div class="chi-header__brand">
        <a class="chi-brand" href="#" aria-label="Lumen">
          ${this._getLumenSvgSnippet()}
        </a>
      </div>
    </div>
  </header>
  <div class="chi-app__body -d--flex -justify-content--center -px--2 -py--4">
    <div class="-w--100 -mw--480">
      <div class="chi-card -b--0 -bg--none">
        <div class="chi-card__content -text--center">
          <h1 class="-m--2">404</h1>
          <h2 class="-text--h3">Page not found</h2>
          <p class="-text -pb--2">We're Sorry! The page you requested is currently unavailable.</p>
        </div>
      </div>
    </div>
  </div>
</div>`;
    this.$data.centuryLinkCodeSnippet = `<div class="chi-app -bg--grey-10">
  <header class="chi-header">
    <div class="chi-header__content -justify-content--center">
      <div class="chi-header__brand">
        <a class="chi-brand -centurylink -black" href="/" aria-label="CenturyLink">
          ${this._getCenturyLinkSvgSnippet()}
        </a>
      </div>
    </div>
  </header>
  <div class="chi-app__body -d--flex -justify-content--center -px--2 -py--4">
    <div class="-w--100 -mw--480">
      <div class="chi-card -b--0 -bg--none">
        <div class="chi-card__content -text--center">
          <h1 class="-m--2">404</h1>
          <h2 class="-text--h3">Page not found</h2>
          <p class="-text -pb--2">We're Sorry! The page you requested is currently unavailable.</p>
        </div>
      </div>
    </div>
  </div>
</div>`;
  }
  _getLumenSvgSnippet(){
    return `<svg viewBox="${this.$data.lumenLogoData.viewBox}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${LUMEN_LOGO_SVG_DATA_LIST.map((svgData) =>`<path d="${svgData.path}" fill="${svgData.fill}"/>`).join("")}</svg>`;
  }
  _getCenturyLinkSvgSnippet(){
    return `<svg viewBox="${this.$data.centuryLinkLogoData.viewBox}" xmlns="http://www.w3.org/2000/svg" data-brand-type="black" aria-hidden="true">
            ${CENTURYLINK_SVG_LOGO_DATA_LIST.map((svgData, index) =>`<path fill="${svgData.fill}" d="${svgData.path}"></path>${index + 1 === CENTURYLINK_SVG_LOGO_DATA_LIST.length ? '' :`
            `}`).join("")}
          </svg>`;
  }
}
</script>

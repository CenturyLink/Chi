<template lang="pug">
  div
    <TitleBar title="Error 500" description="Basic 500 level error page template. Indicates a server side error, so no dynamic information is presented." />
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
                        <Logo :viewBox="$data._centuryLinkLogoData.viewBox" :dataBrandType="$data._centuryLinkLogoData.dataBrandType" :svgPathDataList="$data._centuryLinkLogoData.svgPathDataList" />
                    template(v-else)
                      a.chi-brand(href='#', aria-label="Lumen")
                        <Logo :viewBox="$data._lumenLogoData.viewBox" :dataBrandType="$data._lumenLogoData.dataBrandType" :svgPathDataList="$data._lumenLogoData.svgPathDataList" />
              .chi-app__body.-px--2.-py--4.-d--flex.-justify-content--center
                div.-w--100.-mw--480
                  .chi-card.-b--0.-bg--none
                    .chi-card__content.-text--center
                      h1.-m--2 500
                      h2.-text--h3 Internal Server Error
                      p.-text.-pb--2 We're sorry, the server encountered an internal error and was unable to complete your request.
          <pre class="language-html">
            <code v-highlight="['centurylink'].includes($store.state.themes.theme) ? $data._centuryLinkCodeSnippet : $data._lumenCodeSnippet" class="html"></code>
          </pre>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '../error-common/_logo.vue';
import { _centuryLinkLogoData, _lumenLogoData, _lumenLogoSvgDataList, _centuryLinkLogoSvgDataList } from '../error-common/utilities';
@Component({
  components: {
    Logo
  },
  data: () => {
    return {
      _lumenLogoData: _lumenLogoData,
      _centuryLinkLogoData: _centuryLinkLogoData,
      _lumenCodeSnippet: ``,
      _centuryLinkCodeSnippet: ``
    };
  }
})
export default class Error500 extends Vue {
  created(){
    this._createCodeSnippet();
  }
  _createCodeSnippet(){
    this.$data._lumenCodeSnippet = `<div class="chi-app -bg--grey-10">
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
          <h1 class="-m--2">500</h1>
          <h2 class="-text--h3">Internal Server Error</h2>
          <p class="-text -pb--2">We're sorry, the server encountered an internal error and was unable to complete your request.</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;
    this.$data._centuryLinkCodeSnippet = `<div class="chi-app -bg--grey-10">
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
          <h1 class="-m--2">500</h1>
          <h2 class="-text--h3">Internal Server Error</h2>
          <p class="-text -pb--2">We're sorry, the server encountered an internal error and was unable to complete your request.</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;
  }
  _getLumenSvgSnippet(){
    return `<svg viewBox="${_lumenLogoData.viewBox}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${_lumenLogoSvgDataList.map((svgData) =>`<path d="${svgData.path}" fill="${svgData.fill}"/>`).join("")}</svg>`;
  }
  _getCenturyLinkSvgSnippet(){
    return `<svg viewBox="${_centuryLinkLogoData.viewBox}" xmlns="http://www.w3.org/2000/svg" data-brand-type="black" aria-hidden="true">
            ${_centuryLinkLogoSvgDataList.map((svgData, index) =>`<path fill="${svgData.fill}" d="${svgData.path}"></path>${index + 1 === _centuryLinkLogoSvgDataList.length ? '' :`
            `}`).join("")}
          </svg>`;
  }
}
</script>

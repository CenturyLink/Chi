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
                    a.chi-brand(href='#', aria-label="Lumen")
                      svg(viewBox='0 0 145 20', xmlns='http://www.w3.org/2000/svg', aria-hidden='true')
                        template(v-for="(svgPath, index) in $data._lumenLogoSvgPaths")
                          path(`svgPath`)
              .chi-app__body.-px--2.-py--4.-d--flex.-justify-content--center
                div.-w--100.-mw--480
                  .chi-card.-b--0.-bg--none
                    .chi-card__content.-text--center
                      h1.-m--2 404
                      h2.-text--h3 Page not found
                      p.-text.-pb--2 We're Sorry! The page you requested is currently unavailable.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { _lumenLogoSvgPaths } from './utilities';
@Component({
  data: () => {
    return {
      _lumenLogoSvgPaths: _lumenLogoSvgPaths
    };
  }
})
export default class Error404 extends Vue {}
</script>

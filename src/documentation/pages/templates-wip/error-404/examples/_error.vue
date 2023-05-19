<template lang="pug">
  <ComponentExample id="error_404" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false" :showTitle="false">
    .-p--3.-bg--grey-20(slot="example")
      .chi-app.-bg--grey-10
        header.chi-header
          .chi-header__content.-justify-content--center
            .chi-header__brand
              a.chi-brand(:class="logoClassName" href="#", :aria-label="ariaLabel" v-html="logo")
        .chi-app__body.-px--2.-py--4.-d--flex.-justify-content--center
          div.-w--100.-mw--480
            .chi-card.-b--0.-bg--none
              .chi-card__content.-text--center
                h1.-m--2 404
                h2.-text--h3 Page not found
                p.-text.-pb--2 We're Sorry! The page you requested is currently unavailable.
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { svgLogos } from '~/fixtures/fixtures';
import { IThemes } from '~/models/models';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ]
    }
  }
})
export default class Error extends Vue {
  ariaLabels: IThemes = {
    lumen: 'Lumen',
    centurylink: 'CenturyLink',
    portal: 'Lumen Enterprise Portal',
    brightspeed: 'Brightspeed',
    colt: 'Colt'
  }

  get theme() {
    return this.$store.state.themes.theme;
  }

  get logo() {
    return svgLogos[this.theme as keyof IThemes];
  }

  get ariaLabel() {
    return this.ariaLabels[this.theme as keyof IThemes];
  }

  get logoClassName() {
    return this.theme === 'centurylink' ? '-centurylink -black' : '';
  }

  get codeSnippets() {
    return {
      htmlblueprint:
        `<div class="chi-app -bg--grey-10">
  <header class="chi-header">
    <div class="chi-header__content -justify-content--center">
      <div class="chi-header__brand">
        <a class="chi-brand ${this.logoClassName}" href="#" aria-label="${this.ariaLabel}">
          ${this.logo}
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
</div>`
    }
  }
}
</script>

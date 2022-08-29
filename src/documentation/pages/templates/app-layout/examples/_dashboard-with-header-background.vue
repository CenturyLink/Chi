<template lang="pug">
  <ComponentExample title="Dashboard with header background" id="dashboard-header-background" padding="-p--0" :tabs="exampleTabs">
    chi-main(title="Page title" format="fixed-width" header-background slot="example")
      chi-button(v-show="['lumen', 'centurylink', 'brightspeed'].includes($store.state.themes.theme)" color='primary' size='sm' slot='header-actions')
        | Button
      chi-button(v-show="['portal'].includes($store.state.themes.theme)" size='xs' slot='header-actions')
        chi-icon(icon='settings')
        span Customize
      chi-button(id='example__help-button4' type='icon' size='sm' variant='flat' alternative-text="Help" slot="help-icon" @click="$refs.example__help_popover4.toggle()")
        chi-icon(icon='circle-question-outline')
      chi-popover(id='example__help-popover4' ref='example__help_popover4' position='right-start' variant='text' arrow reference='#example__help-button4' slot='help-icon')
        | Popover content.
      .chi-css-grid.-grid-rows--176
        .chi-css-col.-col-lg--6.-col-xl--4.-row--2
          .chi-card.-highlight.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta) View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta) View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta) View
            .chi-card__content
              ul.chi-css-grid.-gap--05.-no-style.-m--0
                template(v-for="i in 8")
                  li.chi-css-col.-col-sm--6
                    chi-link(href='#') Widget Link
        .chi-css-col.-col-lg--6.-col-xl--4
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta) View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4.-row--2
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta) View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4.-row--2
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta) View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta) View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4.-row--2
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta) View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4.-row--2
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta) View
            .chi-card__content Content here
        .chi-css-col.-col-lg--6.-col-xl--4
          .chi-card.-widget.-h--100
            .chi-card__header
              .chi-card__title Widget
              chi-link(size='md' href='#' cta) View
            .chi-card__content Content here
      <AppLayoutFooter />
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import AppLayoutFooter from './_app-layout-footer.vue';
import { BASE_HELP_LANGUAGES, FOOTER_LINKS } from './fixtures';
import { _getBaseWebComponentFooter, _getBaseHtmlBlueprintFooter, _getDashboardWidgetList } from './utilities';
import { Themes } from '../../../../models/models';

@Component({
  components: {
    AppLayoutFooter
  },
  data: () => {
    return {
      languages: BASE_HELP_LANGUAGES,
      footerLinks: FOOTER_LINKS,
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``
      }
    };
  },
})

export default class DashboardWithHeaderBackground extends Vue {
  // Computed Property
  get hasThemeChanged() {
    return this.$store.state.themes.theme;
  }

  @Watch('hasThemeChanged')
  onDataChanged(newTheme: Themes) {
    this._createSnippets(newTheme);
  }

  created() {
    this._createSnippets(this.$store.state.themes.theme);
  }

  _createSnippets(theme: Themes = 'lumen') {
    this.$data.codeSnippets.webcomponent = `<chi-main title="Page title" format="fixed-width" header-background>
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  ${['portal'].includes(theme) ? 
  `<chi-button size="xs" slot="header-actions">
    <chi-icon icon="settings"></chi-icon>
    <span>Customize</span>
  </chi-button>` : 
  `<chi-button color="primary" size="sm" slot="header-actions">Button</chi-button>`}
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
            ${_getDashboardWidgetList(true)}
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
  ${_getBaseWebComponentFooter(theme === 'centurylink')}
</chi-main>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`;
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main -fixed-width -header-background">
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
      ${['portal'].includes(theme) ?
      `<button class="chi-button -xs">
        <div class="chi-button__content">
          <i class="chi-icon icon-settings"></i>
          <span>Customize</span>
        </div>
      </button>` :
      `<button class="chi-button -primary -sm">Button</button>`}
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
              ${_getDashboardWidgetList(false)}
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
  ${_getBaseHtmlBlueprintFooter(theme === 'centurylink')}
</div>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
  chi.popover(document.getElementById('example__help-button'));
<\/script>`;
  }
}
</script>

<template lang="pug">
  <ComponentExample title="Dashboard with page-level alert" id="dashboard_with_alert" :tabs="exampleTabs" padding="0">
    chi-main(title='Page Title' format='fixed-width' header-background slot="example")
      chi-alert(color='info' icon='circle-info' slot='page-alert' closable) This is a page level info alert
      chi-button#dashboard-alert__help-button(type='icon' size='sm' variant='flat' alternative-text='Help' slot='help-icon' @click="togglePopover")
        chi-icon(icon='circle-question-outline')
      chi-popover(ref="popover" position='right-start' variant='text' arrow reference='#dashboard-alert__help-button' slot='help-icon')
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
      div(slot="footer")
        div(v-html="footers.lumen" v-if="['lumen', 'portal'].includes($store.state.themes.theme)")
        div(v-html="footers.centurylink" v-if="$store.state.themes.theme === 'centurylink'")
        div(v-html="footers.brightspeed" v-if="$store.state.themes.theme === 'brightspeed'")

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
import { generateExampleFooter } from '~/pages/templates-wip/app-layout/examples/_footer.vue';

declare const chi: any;

@Component({
  data: () => {
    return {
      footers: {
        lumen: generateExampleFooter('dashboard-alert-language-dropdown-button'),
        centurylink: generateExampleFooter('dashboard-alert-language-dropdown-button', 'centurylink'),
        brightspeed: generateExampleFooter('dashboard-alert-language-dropdown-button', 'brightspeed'),
      },
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: '',
        htmlblueprint: ''
      }
    };
  }
})
export default class DashboardAlert extends Vue {
  mounted() {
    const languageDropdown = document.getElementById('dashboard-alert-language-dropdown-button');

    if (languageDropdown) {
      chi.dropdown(languageDropdown);
    }

    this._setCodeSnippets();
  }

  updated() {
    this._setCodeSnippets();
  }

  togglePopover() {
    (this.$refs.popover as any).toggle();
  }

  _setCodeSnippets() {
    const footerTemplate = generateExampleFooter(
      'language-dropdown-button',
      this.$store.state.themes.theme
    );

    this.$data.codeSnippets.webcomponent = `<chi-main title="Page Title" format="fixed-width" header-background>
  <chi-alert color="info" icon="circle-info" slot="page-alert" closable>This is a page level info alert</chi-alert>
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
  ${footerTemplate}
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
  <div class="chi-main__alert">
    <div class="chi-alert -info -close" role="alert">
      <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
      <div class="chi-alert__content">
        <p class="chi-alert__text">This is a page level info alert</p>
      </div>
      <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
    </div>
  </div>
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">
          Page Title
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
  ${footerTemplate}
</div>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
  chi.popover(document.getElementById('example__help-button'));
<\/script>`;
  }
}
</script>

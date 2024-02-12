<template lang="pug">
<ComponentExample title="Dashboard with header background" id="dashboard" :tabs="exampleTabs" padding="0">
  template(#example)
    chi-main(title='Page title' format='fixed-width' header-background)
      template(#help-icon)
        chi-button#dashboard__help-button(type='icon' size='sm' variant='flat' alternative-text='Help' @click="togglePopover")
          chi-icon(icon='circle-question-outline')
      template(#help-icon)
        chi-popover(ref="popover" position='right-start' variant='text' arrow reference='#dashboard__help-button')
          | Popover content.
      template(#header-actions)
        chi-button(color='primary' size='sm') Button
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
      template(#footer)
        template(v-if="['lumen', 'portal'].includes(selectedTheme)")
          div(v-html="footers.lumen")
        template(v-if="selectedTheme === 'centurylink'")
          div(v-html="footers.centurylink")
        template(v-if="selectedTheme === 'brightspeed'")
          div(v-html="footers.brightspeed")

template(#code-webcomponent)
  Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
template(#code-htmlblueprint)
  Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import {
  generateAllExampleFooters,
  generateExampleFooter,
} from '~/pages/templates-wip/app-layout/examples/_footer.vue';

declare const chi: any;

@NuxtComponent({})
export default class Dashboard extends Vue {
  selectedTheme = useSelectedTheme();
  footers = generateAllExampleFooters('dashboard-language-dropdown-button');
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: '',
    htmlblueprint: '',
  };

  mounted() {
    const languageDropdown = document.getElementById('dashboard-language-dropdown-button');

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
    const footerTemplate = generateExampleFooter(this.selectedTheme);

    this.codeSnippets.webcomponent = `<chi-main title="Page title" format="fixed-width" header-background>
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

<script>${this.selectedTheme === 'centurylink'
        ? ''
        : `\n  chi.dropdown(document.getElementById('language-dropdown-button'));`
      }
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`;
    this.codeSnippets.htmlblueprint = `<div class="chi-main -fixed-width -header-background">
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

<script>${this.selectedTheme === 'centurylink'
        ? ''
        : `\n  chi.dropdown(document.getElementById('language-dropdown-button'));`
      }
  chi.popover(document.getElementById('example__help-button'));
<\/script>`;
  }
}
</script>

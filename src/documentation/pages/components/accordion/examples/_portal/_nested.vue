<template lang="pug">
  <ComponentExample title="Nested" id="nested_portal" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
    div(slot="example")
      .chi-accordion#example-portal-nested
        .chi-accordion__item
          button.chi-accordion__trigger
            .chi-accordion__title
              | Click me to expand Accordion
            i.chi-icon.icon-chevron-down(aria-hidden="true")
          .chi-accordion__content
            .chi-accordion
              .chi-accordion__item
                button.chi-accordion__trigger
                  .chi-accordion__title
                    | Accordion 1
                  i.chi-icon.icon-chevron-down(aria-hidden="true")
                .chi-accordion__content
                  p.chi-accordion__text Content goes here
                  .chi-accordion
                    .chi-accordion__item
                      button.chi-accordion__trigger
                        .chi-accordion__title
                          | Accordion 1.1
                        i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__content
                        p.chi-accordion__text Content goes here
                        .chi-accordion
                          .chi-accordion__item
                            button.chi-accordion__trigger
                              .chi-accordion__title
                                | Accordion 1.1.1
                              i.chi-icon.icon-chevron-down(aria-hidden="true")
                            .chi-accordion__content
                              p.chi-accordion__text Content goes here
                    .chi-accordion__item
                      button.chi-accordion__trigger
                        .chi-accordion__title
                          | Accordion 1.2
                        i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__content
                        p.chi-accordion__text Content goes here
              .chi-accordion__item
                button.chi-accordion__trigger
                  .chi-accordion__title
                    | Accordion 2
                  i.chi-icon.icon-chevron-down(aria-hidden="true")
                .chi-accordion__content
                  p.chi-accordion__text Content goes here
                  .chi-accordion
                    .chi-accordion__item
                      button.chi-accordion__trigger
                        .chi-accordion__title
                          | Accordion 2.1
                        i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__content
                        p.chi-accordion__text Content goes here
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <JSNeeded slot="tab-description" />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      string: 'String',
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
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-accordion" id="example-portal-nested">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Click me to expand Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion 1</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content goes here</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion 1.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                  <div class="chi-accordion">
                    <div class="chi-accordion__item">
                      <button class="chi-accordion__trigger">
                        <div class="chi-accordion__title">Accordion 1.1.1</div>
                        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                      </button>
                      <div class="chi-accordion__content">
                        <p class="chi-accordion__text">Content goes here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion 1.2</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion 2</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content goes here</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion 2.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  const accordionNested = document.getElementById('example-portal-nested');

  chi.accordion(accordionNested);
<//script>`
      }
    };
  }
})
export default class NestedPortal extends Vue {
  mounted() {
    const accordionNested = document.getElementById('example-portal-nested');

    chi.accordion(accordionNested);
  }
}
</script>

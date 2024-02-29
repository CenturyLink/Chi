<template lang="pug">
<ComponentExample title="Nested" id="nested_lumen_centurylink" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
  template(#example)
    .chi-accordion#example-nested
      .chi-accordion__item
        button.chi-accordion__trigger
          i.chi-icon.icon-chevron-down(aria-hidden="true")
          .chi-accordion__title
            | Click me to expand Accordion
        .chi-accordion__content
          .chi-accordion
            .chi-accordion__item
              button.chi-accordion__trigger
                i.chi-icon.icon-chevron-down(aria-hidden="true")
                .chi-accordion__title
                  | Accordion 1
              .chi-accordion__content
                p.chi-accordion__text Content goes here
                .chi-accordion
                  .chi-accordion__item
                    button.chi-accordion__trigger
                      i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__title
                        | Accordion 1.1
                    .chi-accordion__content
                      p.chi-accordion__text Content goes here
                      .chi-accordion
                        .chi-accordion__item
                          button.chi-accordion__trigger
                            i.chi-icon.icon-chevron-down(aria-hidden="true")
                            .chi-accordion__title
                              | Accordion 1.1.1
                          .chi-accordion__content
                            p.chi-accordion__text Content goes here
                  .chi-accordion__item
                    button.chi-accordion__trigger
                      i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__title
                        | Accordion 1.2
                    .chi-accordion__content
                      p.chi-accordion__text Content goes here
            .chi-accordion__item
              button.chi-accordion__trigger
                i.chi-icon.icon-chevron-down(aria-hidden="true")
                .chi-accordion__title
                  | Accordion 2
              .chi-accordion__content
                p.chi-accordion__text Content goes here
                .chi-accordion
                  .chi-accordion__item
                    button.chi-accordion__trigger
                      i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__title
                        | Accordion 2.1
                    .chi-accordion__content
                      p.chi-accordion__text Content goes here
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class NestedLumenCenturyLink extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-accordion" id="nested-accordions">
  <div class="chi-accordion__item">
    <button class="chi-accordion__trigger">
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      <div class="chi-accordion__title">Click me to expand Accordion</div>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            <div class="chi-accordion__title">Accordion 1</div>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content goes here</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion 1.1</div>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content goes here</p>
                  <div class="chi-accordion">
                    <div class="chi-accordion__item">
                      <button class="chi-accordion__trigger">
                        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                        <div class="chi-accordion__title">Accordion 1.1.1</div>
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
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion 1.2</div>
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
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            <div class="chi-accordion__title">Accordion 2</div>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content goes here</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  <div class="chi-accordion__title">Accordion 2.1</div>
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
  const accordionNested = document.getElementById('nested-accordions');

  chi.accordion(accordionNested);
<\/script>`,
  };
  mounted() {
    const accordionNested = document.getElementById('example-nested');

    chi.accordion(accordionNested);
  }
}
</script>

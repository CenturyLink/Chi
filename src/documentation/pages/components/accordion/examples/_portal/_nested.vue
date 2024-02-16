<template lang="pug">
<ComponentExample title="Nested" id="nested_portal" :tabs="exampleTabs" padding="-p--3 -p-lg--6">
  template(#example)
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
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent")
  template(#code-htmlblueprint)
    JSNeeded
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class NestedPortal extends Vue {
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
  ]
  codeSnippets = {
    webcomponent: ``,
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
<//script>`,
  }
  mounted() {
    const accordionNested = document.getElementById('example-portal-nested');

    chi.accordion(accordionNested);
  }
}
</script>

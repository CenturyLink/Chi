<template lang="pug">
  <ComponentExample title="Expand / Collapse all Accordion items" id="expand_collapse_all_portal" :tabs="exampleTabs" padding="-p--3 p-lg--6">
    div(slot="example")
      button(@click="expandAll").chi-button.-primary.-outline#expand-all-portal Expand all
      button(@click="collapseAll").chi-button.-primary.-outline.-ml--1#collapse-all-portal Collapse all
      .chi-accordion.-mt--2#expand-collapse-portal
        .chi-accordion__item.-expanded
          button.chi-accordion__trigger
            .chi-accordion__title
              | Accordion
            i.chi-icon.icon-chevron-down(aria-hidden="true")
          .chi-accordion__content
            .chi-accordion
              .chi-accordion__item
                button.chi-accordion__trigger
                  .chi-accordion__title
                    | Accordion item 1
                  i.chi-icon.icon-chevron-down(aria-hidden="true")
                .chi-accordion__content
                  p.chi-accordion__text Content of Accordion item 1
                  .chi-accordion
                    .chi-accordion__item
                      button.chi-accordion__trigger
                        .chi-accordion__title
                          | Accordion item 1.1
                        i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__content
                        p.chi-accordion__text Content of Accordion item 1.1
                    .chi-accordion__item
                      button.chi-accordion__trigger
                        .chi-accordion__title
                          | Accordion item 1.2
                        i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__content
                        p.chi-accordion__text Content of Accordion item 1.2
              .chi-accordion__item
                button.chi-accordion__trigger
                  .chi-accordion__title
                    | Accordion item 2
                  i.chi-icon.icon-chevron-down(aria-hidden="true")
                .chi-accordion__content
                  p.chi-accordion__text Content of Accordion item 2
                  .chi-accordion
                    .chi-accordion__item
                      button.chi-accordion__trigger
                        .chi-accordion__title
                          | Accordion item 2.1
                        i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__content
                        p.chi-accordion__text Content of Accordion item 2.1
                    .chi-accordion__item
                      button.chi-accordion__trigger
                        .chi-accordion__title
                          | Accordion item 2.2
                        i.chi-icon.icon-chevron-down(aria-hidden="true")
                      .chi-accordion__content
                        p.chi-accordion__text Content of Accordion item 2.2
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
        htmlblueprint: `<button class="chi-button" id="expand-all-portal">Expand all</button>
<button class="chi-button" id="collapse-all-portal">Collapse all</button>

<div class="chi-accordion" id="expand-collapse-portal">
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion item 1</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 1.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 1.2</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 1.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chi-accordion__item">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion item 2</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 2</p>
            <div class="chi-accordion">
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 2.1</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.1</p>
                </div>
              </div>
              <div class="chi-accordion__item">
                <button class="chi-accordion__trigger">
                  <div class="chi-accordion__title">Accordion item 2.2</div>
                  <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="chi-accordion__content">
                  <p class="chi-accordion__text">Content of Accordion item 2.2</p>
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
  const expandCollapseAccordion = chi.accordion(document.getElementById("expand-collapse-portal"));
  const expandAll = document.getElementById("expand-all-portal");
  const collapseAll = document.getElementById("collapse-all-portal");

  expandAll.addEventListener("click", () => {
    expandCollapseAccordion.expandAll();
  });

  collapseAll.addEventListener("click", () => {
    expandCollapseAccordion.collapseAll();
  });
<\/script>`
      }
    };
  }
})
export default class ExpandCollapseAllPortal extends Vue {
  accordion: any;

  expandAll() {
    this.accordion.expandAll();
  }
  collapseAll() {
    this.accordion.collapseAll();
  }
  mounted() {
    const accordionExpandAll = document.getElementById(
      'expand-collapse-portal'
    );

    this.accordion = chi.accordion(accordionExpandAll);
  }
}
</script>

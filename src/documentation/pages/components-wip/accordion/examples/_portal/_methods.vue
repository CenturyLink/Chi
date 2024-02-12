<template lang="pug">
  <ComponentExample title="Show / Hide / Toggle of individual items of Accordion" id="methods_portal" :tabs="exampleTabs" padding="-p--3 p-lg--6">
    template(#example)
      button(@click="toggleOne").chi-button.-outline.-primary#toggle-accordion-portal-1 Toggle item 1
      button(@click="toggleTwo").chi-button.-outline.-primary.-ml--1#toggle-accordion-portal-2 Toggle item 2
      .chi-accordion.-mt--2#individual-portal-accordion-items
        .chi-accordion__item.-expanded
          button.chi-accordion__trigger
            .chi-accordion__title
              | Accordion
            i.chi-icon.icon-chevron-down(aria-hidden="true")
          .chi-accordion__content
            .chi-accordion
              .chi-accordion__item(ref="invividual-portal-accordion-item-1")
                button.chi-accordion__trigger
                  .chi-accordion__title
                    | Accordion item 1
                  i.chi-icon.icon-chevron-down(aria-hidden="true")
                .chi-accordion__content
                  p.chi-accordion__text Content of Accordion item 1
              .chi-accordion__item(ref="invividual-portal-accordion-item-2")
                button.chi-accordion__trigger
                  .chi-accordion__title
                    | Accordion item 2
                  i.chi-icon.icon-chevron-down(aria-hidden="true")
                .chi-accordion__content
                  p.chi-accordion__text Content of Accordion item 2
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
export default class MethodsPortal extends Vue {
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
    htmlblueprint: `<button class="chi-button" id="toggle-accordion-portal-1">Toggle item 1</button>
<button class="chi-button" id="toggle-accordion-portal-2">Toggle item 2</button>

<div class="chi-accordion" id="individual-portal-accordion-items">
  <div class="chi-accordion__item -expanded">
    <button class="chi-accordion__trigger">
      <div class="chi-accordion__title">Accordion</div>
      <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chi-accordion__content">
      <div class="chi-accordion">
        <div class="chi-accordion__item" id="invividual-portal-accordion-item-1">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion item 1</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 1</p>
          </div>
        </div>
        <div class="chi-accordion__item" id="invividual-portal-accordion-item-2">
          <button class="chi-accordion__trigger">
            <div class="chi-accordion__title">Accordion item 2</div>
            <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
          </button>
          <div class="chi-accordion__content">
            <p class="chi-accordion__text">Content of Accordion item 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  const individualAccordions = chi.accordion(document.getElementById("individual-portal-accordion-items"));
  const toggleAccordionOne = document.getElementById("toggle-portal-accordion-1");
  const toggleAccordionTwo = document.getElementById("toggle-portal-accordion-2");

  toggleAccordionOne.addEventListener("click", () => {
    individualAccordions.toggle(document.getElementById("invividual-portal-accordion-item-1"));
  });

  toggleAccordionTwo.addEventListener("click", () => {
    individualAccordions.toggle(document.getElementById("invividual-portal-accordion-item-2"));
  });
<\/script>`,
  }
  individualAccordions: any;

  toggleOne() {
    this.individualAccordions.toggle(this.$refs['invividual-portal-accordion-item-1'] as HTMLElement);
  }
  toggleTwo() {
    this.individualAccordions.toggle(this.$refs['invividual-portal-accordion-item-2'] as HTMLElement);
  }
  mounted() {
    const accordionMethods = document.getElementById('individual-portal-accordion-items');

    this.individualAccordions = chi.accordion(accordionMethods);
  }
}
</script>

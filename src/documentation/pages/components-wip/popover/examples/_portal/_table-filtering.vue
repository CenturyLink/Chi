<template lang="pug">
  <ComponentExample titleSize="h4" title="Table filtering" id="table-filtering-portal" :tabs="exampleTabs">
    .-position--relative(slot="example" style="height: 640px;")
      chi-popover(position='top' title='Filter' variant='custom' modal drag closable active prevent-auto-hide)
        button.chi-button(class='-flat -primary -sm -no-hover -px--0 -mb--1 -text--normal' @click="expandAll") Expand All
        .chi-accordion.-sm(ref="accordion")
          .chi-accordion__item(:class="accordionIndex === '1' ? '-expanded' : ''" v-for="accordionIndex in accordionIndexes")
            button.chi-accordion__trigger
              .chi-accordion__title
                | Accordion {{ accordionIndex }}
              i.chi-icon.icon-chevron-down(aria-hidden="true")
            .chi-accordion__content
              p.chi-accordion__text Filter content goes here
        button.chi-button.-flat.-icon.-xs.-py--0(slot='chi-popover__footer' ref="tooltipButton" data-tooltip='Clear all filters')
          .chi-button__content.-flex--column.-align-items--center
            i.chi-icon.icon-reset.-sm--2.-mr--0
            span.-text--uppercase.-text--primary.-text--2xs Clear
        .chi-divider.-vertical(slot='chi-popover__footer')
        chi-button(slot='chi-popover__footer') Cancel
        chi-button(slot='chi-popover__footer' color='primary') Apply
    <pre class="language-html" slot='code-webcomponent'>
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot='code-htmlblueprint'>
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
      accordionIndexes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
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
        webcomponent: `<chi-popover position="top" title="Filter" variant="custom" modal drag closable active prevent-auto-hide>
  <button class="chi-button -flat -primary -sm -no-hover -px--0 -mb--1 -text--normal" id="example-expand-all">Expand All</button>
  <div class="chi-accordion -sm" id="example-base">
    <div class="chi-accordion__item -expanded">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 1</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 2</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 3</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 4</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 5</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 6</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 7</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 8</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 9</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 10</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
    <div class="chi-accordion__item">
      <button class="chi-accordion__trigger">
        <div class="chi-accordion__title">Accordion 11</div>
        <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="chi-accordion__content">
        <p class="chi-accordion__text">Filter content goes here</p>
      </div>
    </div>
  </div>
  <button class="chi-button -flat -icon -xs -py--0" slot="chi-popover__footer" data-tooltip="Clear all filters">
    <div class="chi-button__content -flex--column -align-items--center">
      <i class="chi-icon icon-reset -sm--2 -mr--0"></i>
      <span class="-text--uppercase -text--primary -text--2xs">Clear</span>
    </div>
  </button>
  <div class="chi-divider -vertical" slot="chi-popover__footer"></div>
  <chi-button slot="chi-popover__footer">Cancel</chi-button>
  <chi-button slot="chi-popover__footer" color="primary">Apply</chi-button>
</chi-popover>

<script>
  const accordionBase = document.getElementById('example-base');
  const expandAll = document.getElementById("example-expand-all");

  const expandAccordion = chi.accordion(accordionBase);

  expandAll.addEventListener("click", () => {
    expandAccordion.expandAll();
  });

  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`,
        htmlblueprint: `<section class="chi-popover -active -closable -draggable -modal" aria-modal="true" role="dialog" aria-label="Popover title">
  <button class="chi-button -xs -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover title</h2>
  </header>
  <div class="chi-popover__content">
    <button class="chi-button -flat -primary -sm -no-hover -px--0 -mb--1 -text--normal" id="example-expand-all">Expand All</button>
    <div class="chi-accordion -sm" id="example-base">
      <div class="chi-accordion__item -expanded">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 1</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
      <div class="chi-accordion__item">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 2</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
      <div class="chi-accordion__item">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 3</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
      <div class="chi-accordion__item">
        <button class="chi-accordion__trigger">
          <div class="chi-accordion__title">Accordion 4</div>
          <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="chi-accordion__content">
          <p class="chi-accordion__text">Filter content goes here</p>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-popover__footer">
    <button class="chi-button -flat -icon -xs -py--0" data-tooltip="Clear all filters">
      <div class="chi-button__content -flex--column -align-items--center">
        <i class="chi-icon icon-reset -sm--2 -mr--0"></i>
        <span class="-text--uppercase -text--primary -text--2xs">Clear</span>
      </div>
    </button>
    <div class="chi-divider -vertical"></div>
    <button class="chi-button">Cancel</button>
    <button class="chi-button -primary">Apply</button>
  </div>
</section>

<script>
  const accordionBase = document.getElementById('example-base');
  const expandAll = document.getElementById("example-expand-all");

  const expandAccordion = chi.accordion(accordionBase);

  expandAll.addEventListener("click", () => {
    expandAccordion.expandAll();
  });

  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`
      }
    };
  }
})
export default class TableFilteringPortal extends Vue {
  accordion: any;

  mounted() {
    this.accordion = chi.accordion(this.$refs.accordion);
    chi.tooltip(this.$refs.tooltipButton);
  }

  expandAll() {
    this.accordion?.expandAll();
  }
}
</script>

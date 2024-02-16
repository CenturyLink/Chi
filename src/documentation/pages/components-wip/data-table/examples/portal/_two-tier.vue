<template lang="pug">
<ComponentExample title="Two tier header" id="two-tier-data-table" :tabs="exampleTabs">
  template(#example)
    .chi-card.-portal.-bg--white.-bg-md--grey-15
      .chi-card__header.-sm
        .chi-card__title Title
      .chi-card__content.-p--0
        .chi-data-table.-portal.-compact
          .chi-data-table__head
            .chi-data-table__row
              div.chi-data-table__cell.-justify-content-md--start.-sorting(aria-label="Sort Column Location",
                  data-column="localization", data-sort="ascending", data-label="Location") Location
                chi-button(variant='flat' type='icon')
                  chi-icon(icon='arrow-up', size='xs')
              div.chi-data-table__cell.-justify-content-md--start.-sorting(aria-label="Sort Column High Utilization",
                data-column="highUtilization", data-sort="ascending", data-label="High Utilization") High Utilization
                chi-button(variant='flat' type='icon')
                  chi-icon(icon='arrow-sort', size='xs')
              div.chi-data-table__cell.-justify-content-md--start.-sorting(aria-label="Sort Column Elevated Utilization",
                data-column="elevatedUtilization", data-sort="ascending", data-label="Elevated Utilization") Elevated Utilization
                chi-button(variant='flat' type='icon')
                  chi-icon(icon='arrow-sort', size='xs')
              div.chi-data-table__cell.-justify-content-md--start.-sorting(aria-label="Sort Column Highest %",
                data-column="highest", data-sort="ascending", data-label="Highest %") Highest %
                chi-button(variant='flat' type='icon')
                  chi-icon(icon='arrow-sort', size='xs')
            .chi-data-table__row
              .chi-data-table__cell
              .chi-data-table__cell
                div.-associated Total
                div.-associated %
              .chi-data-table__cell
                div.-associated Total
                div.-associated %
              .chi-data-table__cell
          .chi-data-table__body
            .chi-data-table__row.-md
              .chi-data-table__cell.-key.-bold
                div Location 1
              .chi-data-table__cell
                div.-associated 3
                div.-associated 98%
              .chi-data-table__cell
                div.-associated -
                div.-associated -
              .chi-data-table__cell
                div 98%
            .chi-data-table__row.-striped.-md
              .chi-data-table__cell.-key.-bold
                div Location 2
              .chi-data-table__cell
                div.-associated 1
                div.-associated 98%
              .chi-data-table__cell
                div.-associated 3
                div.-associated 67%
              .chi-data-table__cell
                div 98%
            .chi-data-table__row.-md
              .chi-data-table__cell.-key.-bold
                div Location 3
              .chi-data-table__cell
                div.-associated -
                div.-associated -
              .chi-data-table__cell
                div.-associated 2
                div.-associated 66
              .chi-data-table__cell
                div 66%
          .chi-data-table__footer
            nav.chi-pagination.-compact(role='navigation', aria-label='Pagination')
              .chi-pagination__content
                .chi-pagination__start
                  .chi-pagination__results.-text--xs
                    span.chi-pagination__label 240 Results
                .chi-pagination__center
                  .chi-pagination__button-group.chi-button-group
                    button.chi-button.-icon.-flat.-xs(aria-label='First page')
                      .chi-button__content
                        i.chi-icon.icon-page-first(aria-hidden='true')
                    button.chi-button.-icon.-flat.-xs(aria-label='Previous page')
                      .chi-button__content
                        i.chi-icon.icon-chevron-left(aria-hidden='true')
                  .chi-pagination__label
                    strong 2
                    span of
                    strong 3
                  .chi-pagination__button-group.chi-button-group
                    button.chi-button.-icon.-flat.-xs(aria-label='Next page')
                      .chi-button__content
                        i.chi-icon.icon-chevron-right(aria-hidden='true')
                    button.chi-button.-icon.-flat.-xs(aria-label='Last page')
                      .chi-button__content
                        i.chi-icon.icon-page-last(aria-hidden='true')
                .chi-pagination__end
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: false,
          id: 'webcomponent',
          label: 'Web Component',
          disabled: true,
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        htmlblueprint: `<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column Location"
            data-column="location" data-sort="ascending" data-label="Location">
            Location
            <chi-button variant="flat" type="icon>
              <chi-icon icon="arrow-up" size="xs"></chi-icon>
            </chi-button>
          </div>
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column High Utilization"
            data-column="highUtilization" data-sort="ascending" data-label="High Utilization">
            High Utilization
            <chi-button variant="flat" type="icon>
              <chi-icon icon="arrow-sort" size="xs"></chi-icon>
            </chi-button>
          </div>
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column Elevated Utilization"
            data-column="elevatedUtilization" data-sort="ascending" data-label="Elevated Utilization">
            Elevated Utilization
            <chi-button variant="flat" type="icon>
              <chi-icon icon="arrow-sort" size="xs"></chi-icon>
            </chi-button>
          </div>
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column Highest %"
            data-column="highest" data-sort="ascending" data-label="Highest %">
            Highest %
            <chi-button variant="flat" type="icon>
              <chi-icon icon="arrow-sort" size="xs"></chi-icon>
            </chi-button>
          </div>
        </div>
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell"></div>
          <div class="chi-data-table__cell">
            <div class="-associated">Total</div>
            <div class="-associated">%</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">Total</div>
            <div class="-associated">%</div>
          </div>
          <div class="chi-data-table__cell"></div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Location 1</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">3</div>
            <div class="-associated">98%</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">-</div>
            <div class="-associated">-</div>
          </div>
          <div class="chi-data-table__cell">
            <div>98%</div>
          </div>
        </div>
        <div class="chi-data-table__row -striped -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Location 2</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">1</div>
            <div class="-associated">98%</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">3</div>
            <div class="-associated">67%</div>
          </div>
          <div class="chi-data-table__cell">
            <div>98%</div>
          </div>
        </div>
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Location 3</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">-</div>
            <div class="-associated">-</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">2</div>
            <div class="-associated">66</div>
          </div>
          <div class="chi-data-table__cell">
            <div>66%</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">240 Results</span>
              </div>
            </div>
            <div class="chi-pagination__center">
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="First page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>2</strong>
                <span>of</span>
                <strong>3</strong>
              </div>
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="Next page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Last page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-last" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
            </div>
            <div class="chi-pagination__end"></div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>`,
      },
    };
  },
})
export default class DataTableTwoTier extends Vue { }
</script>

<template lang="pug">
<ComponentExample title="Second line wrapping" id="second-line-wrapping-data-table" :tabs="exampleTabs">
  template(#example)
    .chi-card.-portal.-bg--white
      .chi-card__header.-sm
        .chi-card__title Title
      .chi-card__content.-p--0
        ChiDataTable(:config='config', :dataTableData='table')
  template(#code-vue)
    .chi-tab__description
      | Use <code>cellWrap</code> config to achieve the two line wrapping
    Copy(lang="html" :code="codeSnippets.vue")
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
          id: 'vue',
          label: 'Vue',
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      config: {
        columnResize: true,
        style: {
          portal: true,
          noBorder: false,
          bordered: false,
          hover: false,
          size: 'md',
          striped: true,
        },
        pagination: {
          activePage: 1,
          compact: true,
          firstLast: true,
          pageJumper: false,
        },
        resultsPerPage: 3,
        cellWrap: true,
      },
      table: {
        head: {
          name: {
            label:
              'This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell',
            key: true,
            bold: true,
          },
          id: { label: 'ID', key: true },
          lastLogin: { label: 'Last Login' },
        },
        body: [
          {
            id: 'name-1',
            data: [
              'This is a long content with a second line wrapping without tooltip: Cell wrapped on two lines',
              'name-1',
              '18 Dec 2020 3:26 p.m.',
            ],
          },
          {
            id: 'name-2',
            data: [
              'This is a long content with a second line wrapping with tooltip: This is a long content for the tooltip in the wrapped cell',
              'name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
          },
          {
            id: 'name-3',
            data: ['Name 3', 'name-3', '5 Nov 2020 10:15 a.m.'],
          },
          {
            id: 'name-4',
            data: ['Name 4', 'name-4', '18 Dec 2020 3:26 p.m.'],
          },
          {
            id: 'name-5',
            data: ['Name 5', 'name-5', '18 Dec 2020 2:38 a.m.'],
          },
          {
            id: 'name-6',
            data: ['Name 6', 'name-6', '5 Nov 2020 10:15 a.m.'],
          },
        ],
      },
      codeSnippets: {
        vue: `<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    style: {
      portal: true,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: true,
    },
    pagination: {
      activePage: 1,
      compact: true,
      firstLast: true,
      pageJumper: false,
    },
    resultsPerPage: 3,
    cellWrap: true,
  },
  table: {
    head: {
      name: { label: 'This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell', key: true, bold: true },
      id: { label: 'ID', key: true },
      lastLogin: { label: 'Last Login' },
    },
    body: [
      {
        id: 'name-1',
        data: [
          'This is a long content with a second line wrapping without tooltip: Cell wrapped on two lines',
          'name-1',
          '18 Dec 2020 3:26 p.m.',
        ],
      },
      {
        id: 'name-2',
        data: [
          'This is a long content with a second line wrapping with tooltip: This is a long content for the tooltip in the wrapped cell',
          'name-2',
          '18 Dec 2020 2:38 a.m.',
        ],
      },
      {
        id: 'name-3',
        data: [
          'Name 3',
          'name-3',
          '5 Nov 2020 10:15 a.m.',
        ],
      },
      {
        id: 'name-4',
        data: [
          'Name 4',
          'name-4',
          '18 Dec 2020 3:26 p.m.',
        ],
      },
      {
        id: 'name-5',
        data: [
          'Name 5',
          'name-5',
          '18 Dec 2020 2:38 a.m.',
        ],
      },
      {
        id: 'name-6',
        data: [
          'Name 6',
          'name-6',
          '5 Nov 2020 10:15 a.m.',
        ],
      },
    ]
  }
}`,
        htmlblueprint: `<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell" data-label="This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell">
            <div class="-cell-wrap">This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell</div>
          </div>
          <div class="chi-data-table__cell" data-label="ID">
            <div class="-cell-wrap">ID</div>
          </div>
          <div class="chi-data-table__cell" data-label="Last Login">
            <div class="-cell-wrap">Last Login</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div class="-cell-wrap">This is a long content with a second line wrapping without tooltip: Cell wrapped on two lines</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div class="-cell-wrap">name-1</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-cell-wrap">18 Dec 2020 3:26 p.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -striped -md">
          <div class="chi-data-table__cell -key -bold">
            <div class="-cell-wrap">This is a long content with a second line wrapping with tooltip: This is a long content for the tooltip in the wrapped cell</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div class="-cell-wrap">name-2</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-cell-wrap">18 Dec 2020 2:38 a.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div class="-cell-wrap">Name 3</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div class="-cell-wrap">name-3</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-cell-wrap">5 Nov 2020 10:15 a.m.</div>
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
                <button class="chi-button -icon -flat -xs" aria-label="First page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page" disabled>
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>1</strong>
                <span>of</span>
                <strong>2</strong>
              </div>
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="Next page" >
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
export default class DataTableSecondLineWrapping extends Vue { }
</script>

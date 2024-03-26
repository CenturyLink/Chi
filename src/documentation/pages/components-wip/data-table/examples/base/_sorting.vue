<template lang="pug">
<ComponentExample v-for="sortType in sortingTypes" :key="sortType.id" :title="sortType.title" :id="sortType.id" :tabs="exampleTabs">
  template(#example)
    ChiDataTable(:config='getConfig(sortType.defaultSort)', :dataTableData='table')
  template(#code-vue)
    .chi-tab__description
      | Use <code>sortBy</code> and <code>sortDataType</code> properties to make the column sortable
    Copy(:code="getVueCode(sortType.defaultSort)" lang="html")

  template(#code-htmlblueprint)
    Copy(:code="getHtmlCode(sortType.defaultSort)" lang="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

type DefaultSortType = {
  key: string;
  direction: 'ascending' | 'descending';
} | null;

@NuxtComponent({
  data: () => {
    return {
      sortingTypes: [
        {
          title: 'Sorting',
          id: 'sorting-data-table',
          defaultSort: null,
        },
        {
          title: 'Default Sorting -- Ascending',
          id: 'sorting-ascending-data-table',
          defaultSort: {
            key: 'name',
            direction: 'ascending',
          },
        },
        {
          title: 'Default Sorting -- Descending',
          id: 'sorting-descending-data-table',
          defaultSort: {
            key: 'name',
            direction: 'descending',
          },
        },
      ],
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
          portal: false,
          noBorder: false,
          bordered: false,
          hover: false,
          size: 'md',
          striped: false,
        },
        pagination: {
          activePage: 1,
          compact: false,
          firstLast: false,
          pageJumper: true,
        },
        resultsPerPage: 3,
      },
      table: {
        head: {
          name: { label: 'Name', sortable: true, sortDataType: 'string' },
          id: { label: 'ID', sortable: true, sortDataType: 'string' },
          lastLogin: { label: 'Last Login', sortable: true, sortDatatype: 'date' },
        },
        body: [
          {
            id: 'name-1',
            data: ['Name 1', 'name-1', '18 Dec 2020 3:26 p.m.'],
          },
          {
            id: 'name-2',
            data: ['Name 2', 'name-2', '18 Dec 2020 2:38 a.m.'],
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
    };
  },
  methods: {
    getConfig(defaultSort: DefaultSortType) {
      return {
        ...this.config,
        ...(defaultSort ? { defaultSort } : {}),
      };
    },
    getHtmlCode(defaultSort: DefaultSortType) {
      return `<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <button class="chi-data-table__cell -sorting${defaultSort ? ' -active' : ''}${
        defaultSort?.direction === 'descending' ? ' -descending' : ''
      }">
        <div class="-mr--1">Name</div>
        <i class="chi-icon -xs ${
          defaultSort ? 'icon-arrow-up' : 'icon-arrow-sort'
        }"${defaultSort?.direction === 'ascending' ? 'style="transform: rotate(180deg);"' : ''} aria-hidden="true"></i>
      </button>
      <button class="chi-data-table__cell -sorting">
        <div class="-mr--1">ID</div>
        <i class="chi-icon -xs icon-arrow-sort" aria-hidden="true"></i>
      </button>
      <button class="chi-data-table__cell -sorting">
        <div class="-mr--1">Last Login</div>
        <i class="chi-icon -xs icon-arrow-sort" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 1</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-1</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 3:26 p.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 2</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-2</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 2:38 a.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 3</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-3</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>5 Nov 2020 10:15 a.m.</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__results">
            <span class="chi-pagination__label">6 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-10">20</button>
              <div class="chi-dropdown__menu -w--xs">
                <a class="chi-dropdown__menu-item -active" href="#">20</a>
                <a class="chi-dropdown__menu-item" href="#">40</a>
                <a class="chi-dropdown__menu-item" href="#">60</a>
                <a class="chi-dropdown__menu-item" href="#">80</a>
                <a class="chi-dropdown__menu-item" href="#">All</a>
              </div>
            </div>
            <span class="chi-pagination__label">per page</span>
          </div>
        </div>
        <div class="chi-pagination__center">
          <div class="chi-pagination__button-group chi-button-group">
            <button class="chi-button -icon -flat" aria-label="Previous page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
              </div>
            </button>
            <button class="chi-button -flat -active" aria-label="Page 1">1</button>
            <button class="chi-button -flat" aria-label="Page 2">2</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-10">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-10" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`;
    },
    getVueCode(defaultSort: DefaultSortType) {
      return `<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    style: {
      portal: false,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: false,
    },${defaultSort
          ? `
    defaultSort: {
      key: 'name',
      direction: '${defaultSort.direction}',
    },`
          : ''
        }
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },
    resultsPerPage: 3,
  },
  table: {
    head: {
      name: { label: 'Name', sortable: true, sortDataType: 'string' },
      id: { label: 'ID', sortable: true, sortDataType: 'string' },
      lastLogin: { label: 'Last Login', sortable: true, sortDatatype: 'date' },
    },
    body: [
      {
        id: 'name-1',
        data: [
          'Name 1',
          'name-1',
          '18 Dec 2020 3:26 p.m.',
        ],
      },
      {
        id: 'name-2',
        data: [
          'Name 2',
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
}`;
    },
  },
})
export default class DataTableSorting extends Vue { }
</script>

<template lang="pug">
  <ComponentExample title="Radio selection" id="radio-selection-portal-data-table" :tabs="exampleTabs">
    chi-data-table(:config='config', :data='table' slot="example")
    <Wrapper slot='code-vue'>
      .chi-tab__description
        | Use <code>selectable</code> config to render rows with radio buttons
      pre.language-html
        code(v-highlight="codeSnippets.vue" class="html")
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: false,
          id: 'webcomponent',
          label: 'Web Component',
          disabled: true
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
        }
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
        selectable: 'radio',
        resultsPerPage: 3,
      },
      table: {
        head: {
          name: { label: 'Name' },
          id: { label: 'ID' },
          lastLogin: { label: 'Last Login' },
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
      },
      codeSnippets: {
        vue: `<!-- Vue component -->
<ChiDataTable :config="config" :data="table"></ChiDataTable>

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
    selectable: 'radio',
    resultsPerPage: 3,
  },
  table: {
    head: {
      name: { label: 'Name' },
      id: { label: 'ID' },
      lastLogin: { label: 'Last Login' },
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
}`,
        htmlblueprint: `<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -selectable"></div>
          <div class="chi-data-table__cell">
            <div>Name</div>
          </div>
          <div class="chi-data-table__cell">
            <div>ID</div>
          </div>
          <div class="chi-data-table__cell">
            <div>Last Login</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <fieldset>
          <legend class="--sr-only">Select a Row</legend>
          <div class="chi-data-table__row -md">
            <div class="chi-data-table__cell -selectable">
              <div class="chi-radio">
                <input type="radio" class="chi-radio__input" id="radio-ba2" name="radios">
                <label class="chi-radio__label" for="radio-ba2"></label>
              </div>
            </div>
            <div class=" chi-data-table__cell" data-label="Name">
              <div>Name 1</div>
            </div>
            <div class="chi-data-table__cell" data-label="ID">
              <div>name-1</div>
            </div>
            <div class="chi-data-table__cell" data-label="Last Login">
              <div>18 Dec 2020 3:26 p.m.</div>
            </div>
          </div>
          <div class="chi-data-table__row -md">
            <div class="chi-data-table__cell -lh--1 -selectable">
              <div class="chi-radio">
                <input type="radio" class="chi-radio__input" id="radio-ba3" name="radios">
                <label class="chi-radio__label" for="radio-ba3"></label>
              </div>
            </div>
            <div class=" chi-data-table__cell" data-label="Name">
              <div>Name 2</div>
            </div>
            <div class="chi-data-table__cell" data-label="ID">
              <div>name-2</div>
            </div>
            <div class="chi-data-table__cell" data-label="Last Login">
              <div>18 Dec 2020 2:38 a.m.</div>
            </div>
          </div>
          <div class="chi-data-table__row -md">
            <div class="chi-data-table__cell -lh--1 -selectable">
              <div class="chi-radio">
                <input type="radio" class="chi-radio__input" id="radio-ba4" name="radios">
                <label class="chi-radio__label" for="radio-ba4"></label>
              </div>
            </div>
            <div class=" chi-data-table__cell" data-label="Name">
              <div>Name 3</div>
            </div>
            <div class="chi-data-table__cell" data-label="ID">
              <div>name-3</div>
            </div>
            <div class="chi-data-table__cell" data-label="Last Login">
              <div>5 Nov 2020 10:15 a.m.</div>
            </div>
          </div>
        </fieldset>
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
export default class DataTableRadioSelectionPortal extends Vue { }
</script>
  
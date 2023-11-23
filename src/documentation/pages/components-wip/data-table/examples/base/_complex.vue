<template lang="pug">
  <ComponentExample title="Complex" id="complex-data-table" :tabs="exampleTabs">
    div(slot="example")
      //- chi-data-table(:config='config', :data='table')
    <Wrapper slot='code-vue'>
      .chi-tab__description
        | Use <code>bordered</code> config to achieve bordered behavior
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
        columnResize: false,
        selectable: true,
        style: {
          portal: false,
          noBorder: false,
          bordered: false,
          hover: false,
          size: 'md',
          striped: true,
        },
        pagination: {
          activePage: 1,
          compact: false,
          firstLast: true,
          pageJumper: true,
        },
        resultsPerPage: 3,
        defaultSort: {
          key: 'name',
          sortBy: 'string',
          direction: 'ascending',
        },
        showExpandAll: true,
        showSelectAllDropdown: true,
        actions: [
          {
            label: 'View',
            icon: 'icon-check-alt',
            onClick: (props) => {
              console.log(JSON.stringify(props));
            },
          },
          {
            label: 'Edit',
            icon: 'icon-edit',
            onClick: () => console.log(`Edited`),
          },
          {
            label: 'Download',
            icon: 'icon-circle-arrow-down',
            hide: ['desktop'],
            onClick: () => console.log(`downloaded`),
          },
          {
            label: 'Delete',
            icon: 'icon-delete',
            onClick: () => console.log('deleted'),
          },
        ],
      },
      table: {
        head: {
          name: { label: 'Name', sortable: true, sortBy: 'name', sortDataType: 'string', key: true, bold: true },
          status: { label: 'Status', sortable: true, sortBy: 'status', sortDataType: 'string', description: 'Helpful information goes here.' },
          userID: { label: 'User ID', key: true, icon: 'user' },
          lastLogin: { label: 'Last Login', key: true },
        },
        body: [
          {
            expanded: true,
            id: "name-1",
            data: [
              { template: "name", payload: { name: "Name 1", id: "name-1" } },
              {
                template: "status",
                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
              },
              "user-name-1",
              "18 Dec 2020 3:26 p.m.",
            ],
            nestedContent: {
              table: {
                data: [
                  {
                    id: "child-1-name-1",
                    data: [
                      "Child 1 Name 1",
                      {
                        template: "status",
                        payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                      },
                      "user-name-1",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-1-name-1",
                            data: [
                              "Grand Child 1 Name 1",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-1",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-2-name-1",
                            data: [
                              "Grand Child 2 Name 1",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-1",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: "child-2-name-1",
                    data: [
                      "Child 2 Name 1",
                      {
                        template: "status",
                        payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                      },
                      "user-name-1",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-3-name-1",
                            data: [
                              "Grand Child 3 Name 1",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-1",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-4-name-1",
                            data: [
                              "Grand Child 4 Name 1",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-1",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            id: "name-2",
            data: [
              { template: "name", payload: { name: "Name 2", id: "name-2" } },
              {
                template: "status",
                payload: { status: "Due", icon: 'warning', color: 'warning' },
              },
              "user-name-2",
              "18 Dec 2020 3:26 p.m.",
            ],
            nestedContent: {
              table: {
                data: [
                  {
                    id: "child-1-name-2",
                    data: [
                      "Child 1 Name 2",
                      {
                        template: "status",
                        payload: { status: "Due", icon: 'warning', color: 'warning' },
                      },
                      "user-name-2",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-1-name-2",
                            data: [
                              "Grand Child 1 Name 2",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-2",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-2-name-2",
                            data: [
                              "Grand Child 2 Name 2",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-2",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: "child-2-name-2",
                    data: [
                      "Child 2 Name 2",
                      {
                        template: "status",
                        payload: { status: "Due", icon: 'warning', color: 'warning' },
                      },
                      "user-name-2",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-3-name-2",
                            data: [
                              "Grand Child 3 Name 2",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-2",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-4-name-2",
                            data: [
                              "Grand Child 4 Name 2",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-2",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            id: "name-3",
            data: [
              {
                template: "name",
                payload: {
                  name: "Name 3",
                  id: "name-3",
                },
              },
              {
                template: "status",
                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
              },
              "user-name-3",
              "18 Dec 2020 3:26 p.m.",
            ],
            nestedContent: {
              table: {
                data: [
                  {
                    id: "child-1-name-3",
                    data: [
                      "Child 1 Name 3",
                      {
                        template: "status",
                        payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                      },
                      "user-name-3",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-1-name-3",
                            data: [
                              "Grand Child 1 Name 3",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-3",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-2-name-3",
                            data: [
                              "Grand Child 2 Name 3",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-3",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: "child-2-name-3",
                    data: [
                      "Child 2 Name 3",
                      {
                        template: "status",
                        payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                      },
                      "user-name-3",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-3-name-3",
                            data: [
                              "Grand Child 3 Name 3",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-3",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-4-name-3",
                            data: [
                              "Grand Child 4 Name 3",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-3",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            id: "name-4",
            data: [
              {
                template: "name",
                payload: {
                  name: "Name 4",
                  id: "name-4",
                },
              },
              {
                template: "status",
                payload: { status: "Due", icon: 'warning', color: 'warning' },
              },
              "user-name-4",
              "18 Dec 2020 3:26 p.m.",
            ],
            nestedContent: {
              table: {
                data: [
                  {
                    id: "child-1-name-4",
                    data: [
                      "Child 1 Name 4",
                      {
                        template: "status",
                        payload: { status: "Due", icon: 'warning', color: 'warning' },
                      },
                      "user-name-4",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-1-name-4",
                            data: [
                              "Grand Child 1 Name 4",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-4",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-2-name-4",
                            data: [
                              "Grand Child 2 Name 4",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-4",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: "child-2-name-4",
                    data: [
                      "Child 2 Name 4",
                      {
                        template: "status",
                        payload: { status: "Due", icon: 'warning', color: 'warning' },
                      },
                      "user-name-4",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-3-name-4",
                            data: [
                              "Grand Child 3 Name 4",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-4",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-4-name-4",
                            data: [
                              "Grand Child 4 Name 4",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-4",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            id: "name-5",
            data: [
              {
                template: "name",
                payload: {
                  name: "Name 5",
                  id: "name-5",
                },
              },
              {
                template: "status",
                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
              },
              "user-name-5",
              "18 Dec 2020 3:26 p.m.",
            ],
            nestedContent: {
              table: {
                data: [
                  {
                    id: "child-1-name-5",
                    data: [
                      "Child 1 Name 5",
                      {
                        template: "status",
                        payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                      },
                      "user-name-5",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-1-name-5",
                            data: [
                              "Grand Child 1 Name 5",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-5",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-2-name-5",
                            data: [
                              "Grand Child 2 Name 5",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-5",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: "child-2-name-5",
                    data: [
                      "Child 2 Name 5",
                      {
                        template: "status",
                        payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                      },
                      "user-name-5",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-3-name-5",
                            data: [
                              "Grand Child 3 Name 5",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-5",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-4-name-5",
                            data: [
                              "Grand Child 4 Name 5",
                              {
                                template: "status",
                                payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                              },
                              "user-name-5",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            id: "name-6",
            data: [
              {
                template: "name",
                payload: {
                  name: "Name 6",
                  id: "name-6",
                },
              },
              {
                template: "status",
                payload: { status: "Due", icon: 'warning', color: 'warning' },
              },
              "user-name-6",
              "18 Dec 2020 3:26 p.m.",
            ],
            nestedContent: {
              table: {
                data: [
                  {
                    id: "child-1-name-6",
                    data: [
                      "Child 1 Name 6",
                      {
                        template: "status",
                        payload: { status: "Due", icon: 'warning', color: 'warning' },
                      },
                      "user-name-6",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-1-name-6",
                            data: [
                              "Grand Child 1 Name 6",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-6",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-2-name-6",
                            data: [
                              "Grand Child 2 Name 6",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-6",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: "child-2-name-6",
                    data: [
                      "Child 2 Name 6",
                      {
                        template: "status",
                        payload: { status: "Due", icon: 'warning', color: 'warning' },
                      },
                      "user-name-6",
                      "18 Dec 2020 2:38 a.m.",
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: "grandchild-3-name-6",
                            data: [
                              "Grand Child 3 Name 6",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-6",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                          {
                            id: "grandchild-4-name-6",
                            data: [
                              "Grand Child 4 Name 6",
                              {
                                template: "status",
                                payload: { status: "Due", icon: 'warning', color: 'warning' },
                              },
                              "user-name-6",
                              "18 Dec 2020 2:38 a.m.",
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      codeSnippets: {
        vue: `<!-- Vue component -->
<ChiDataTable :config="config" :data="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    style: {
      portal: false,
      noBorder: false,
      bordered: true,
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
        htmlblueprint: `<div class="chi-data-table -bordered">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
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
            <span class="chi-pagination__label">240 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-5">20</button>
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
            <button class="chi-button -flat" aria-label="Page 1">1</button>
            <button class="chi-button -flat" aria-label="Page 2">2</button>
            <button class="chi-button -flat -active" aria-label="Page 3">3</button>
            <button class="chi-button -flat" aria-label="Page 4">4</button>
            <button class="chi-button -flat" aria-label="Page 5">5</button>
            <div class="chi-button -flat" aria-hidden="true" disabled>...</div>
            <button class="chi-button -flat" aria-label="Page 12">12</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-5">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-5" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`,
      },
    };
  },
})
export default class DataTableComplex extends Vue { }
</script>

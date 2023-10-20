<template lang="pug">
  <ComponentExample title="Complex" id="base" :tabs="exampleTabs">
    p xxx
    chi-data-table(:config='config', :data='table', ref='dataTableComplex' slot="example")
      template(#status="payload")
        i(:class="`chi-icon icon-${payload.icon} -icon--${payload.color}`" aria-hidden="true")
        span.-text--truncate(style="padding-left: 0.5rem;") {{ payload.status }}
      template(#name="payload")
        chi-popover-example(:name="payload.name", :id="payload.id")
      template(#toolbar)
        chi-data-table-toolbar
          template(v-slot:start)
          template(v-slot:end)
            chi-button(@click="" variant="flat" type="icon" aria-label="Print data table complex example")
              chi-icon(icon="print")
      template(slot='bulkActions')
        .chi-bulk-actions__buttons
          .chi-bulk-actions__buttons-mobile.-z--40
            chi-button(variant='flat' type='icon' aria-label='Edit')
              chi-icon(icon='edit')
            chi-button(variant='flat' type='icon' aria-label='Compose')
              chi-icon(icon='compose')
            chi-button(variant='flat' type='icon' aria-label='Delete')
              chi-icon(icon='delete')
            chi-button(variant='flat' type='icon' aria-label='Print')
              chi-icon(icon='print')
          .chi-bulk-actions__buttons-desktop
            chi-button(size='xs' aria-label='Download')
              chi-icon(icon='arrow-to-bottom')
              span Download
            chi-button(size='xs' aria-label='Compose')
              chi-icon(icon='arrow-to-bottom')
              span Compose
            chi-button(size='xs' aria-label='Delete')
              chi-icon(icon='arrow-to-bottom')
              span Delete
            chi-button(size='xs' aria-label='Print')
              chi-icon(icon='arrow-to-bottom')
              span Print

    <pre class="language-html" slot="code-vue">
      <code v-highlight="$data.codeSnippets.vue" class="html"></code>
    </pre>

  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const config = {
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
        onClick: (props: any) => {
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
  };
const table = {
    head: {
      name: { label: 'Name', sortable: true, sortBy: 'name', sortDataType: 'string', key: true, bold: true },
      status: {
        label: 'Status',
        sortable: true,
        sortBy: 'status',
        sortDataType: 'string',
        description: 'Helpful information goes here.'
      },
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
      }
    ]
};

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'vue',
          label: 'Vue'
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        vue: `<!-- Vue component -->
            <ChiDataTable :config="config" :data="table" ref="dataTableComplex">
              <template #status="payload">
                <i class="\`chi-icon icon -icon--\`" aria-hidden="true"></i>
                <span class="-text--truncate" style="padding-left: 0.5rem;">
                  {{ payload.status }}
                </span>
              </template>
              <template #name="payload">
                <ExamplePopover :name="payload.name" :id="payload.id" />
              </template>
              <template #toolbar>
                <ChiToolbar>
                  <template v-slot:start></template>
                  <template v-slot:end>
                    <chi-button @chiClick="printTable" variant="flat" type="icon" aria-label="Print data table complex example">
                      <chi-icon icon="print"></chi-icon>
                    </chi-button>
                  </template>
                </ChiToolbar>
              </template>
              <template #bulkActions>
                <div class="chi-bulk-actions__buttons">
                  <div class="chi-bulk-actions__buttons-mobile -z--40">
                    <chi-button variant="flat" type="icon" aria-label="Edit">
                      <chi-icon icon="edit"></chi-icon>
                    </chi-button>
                    <chi-button variant="flat" type="icon" aria-label="Compose">
                      <chi-icon icon="compose"></chi-icon>
                    </chi-button>
                    <chi-button variant="flat" type="icon" aria-label="Delete">
                      <chi-icon icon="delete"></chi-icon>
                    </chi-button>
                    <chi-button variant="flat" type="icon" aria-label="Print">
                      <chi-icon icon="print"></chi-icon>
                    </chi-button>
                  </div>
                  <div class="chi-bulk-actions__buttons-desktop">
                    <chi-button size="xs" aria-label="Download">
                      <chi-icon icon="arrow-to-bottom"></chi-icon>
                      <span> Download </span>
                    </chi-button>
                    <chi-button size="xs" aria-label="Compose">
                      <chi-icon icon="arrow-to-bottom"></chi-icon>
                      <span> Compose </span>
                    </chi-button>
                    <chi-button size="xs" aria-label="Delete">
                      <chi-icon icon="arrow-to-bottom"></chi-icon>
                      <span> Delete </span>
                    </chi-button>
                    <chi-button size="xs" aria-label="Print">
                      <chi-icon icon="arrow-to-bottom"></chi-icon>
                      <span> Print </span>
                    </chi-button>
                  </div>
                </div>
              </template>
            </ChiDataTable>

            <!-- imports -->
            import ExamplePopover from './ExamplePopover.vue';

            <!-- Config and Data -->
            data: {
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
                    onClick: () => console.log(\`Edited\`),
                  },
                  {
                    label: 'Download',
                    icon: 'icon-circle-arrow-down',
                    hide: ['desktop'],
                    onClick: () => console.log(\`downloaded\`),
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
            },
            methods: {
              printTable() {
                this.$refs.dataTableComplex.print('Data table - Complex')
              }
            }`,
      },

      table,
      config
    }
  }
})
export default class Base extends Vue {}

</script>

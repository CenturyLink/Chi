<template lang="pug">
  <ComponentExample title="Complex" id="complex-data-table" :tabs="exampleTabs">
    chi-data-table(:config="config", :data="table", ref='dataTableComplex', slot="example")
      template(#status="payload")
        i(:class="`chi-icon icon-${payload.icon} -icon--${payload.color}`" aria-hidden="true")
        span.-text--truncate(style="padding-left: 0.5rem;") {{ payload.status }}
      template(#name="payload")
        chi-popover-example(:name="payload.name", :id="payload.id")
      template(#actions="payload")
        chi-dropdown-example(:id="payload.id")
      template(#toolbar)
        chi-data-table-toolbar
          template(v-slot:start)
          template(v-slot:end)
            chi-button(@click="printTable" variant="flat" type="icon" aria-label="Print data table complex example")
              chi-icon(icon="print") 
      template(#bulkActions)
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
    <Wrapper slot='code-vue'>
      .chi-tab__description.-p--2
        | Create reusable Vue components based on your needs and use them as custom templates for Data Table cells and row accordions
      .-d--flex.-no-gutter.-bt--1
        .-bg--grey-15.-pt--3.-br--1(style="width: 14rem;")
          ul#example-vertical-portal.chi-tabs.-vertical(role='tablist' aria-label='chi-tabs-vertical-portal')
            li.-active
              a(href='#vertical-portal-1' role='tab' aria-selected='true' aria-controls='vertical-portal-1') ExampleDataTable.vue
            li
              a(href='#vertical-portal-2' role='tab' aria-selected='false' tabindex='-1' aria-controls='vertical-portal-2') ExamplePopover.vue
            li
              a(href='#vertical-portal-3' role='tab' aria-selected='false' tabindex='-1' aria-controls='vertical-portal-3') ExampleDropdown.vue
            li.chi-sliding-border
          script.
            chi.tab(document.getElementById('example-vertical-portal'));
        .-flex--grow1
          #vertical-portal-1.chi-tabs-panel.-active(role='tabpanel')
            pre.language-html
              code(v-highlight="codeSnippets.dataTableExample" class="html")
          #vertical-portal-2.chi-tabs-panel(role='tabpanel')
            pre.language-html
              code(v-highlight="codeSnippets.popoverExample" class="html")
          #vertical-portal-3.chi-tabs-panel(role='tabpanel')
            pre.language-html
              code(v-highlight="codeSnippets.dropdownExample" class="html")
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PopoverExample from './../popover-example.vue'
import DropdownExample from './../dropdown-example.vue'

@Component({
  components: {
    ChiPopoverExample: PopoverExample,
    ChiDropdownExample: DropdownExample,
  },
  methods: {
    printTable() {
      (this.$refs.dataTableComplex as any)?.print("Data table - Complex");
    },
  },
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
          label: 'Vue'
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
          disabled: true
        }
      ],
      config: {
        columnResize: false,
        selectable: true,
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
        showSelectAllDropdown: true
      },
      table: {
        head: {
          name: { label: 'Name', sortable: true, sortBy: 'name', sortDataType: 'string', key: true, bold: true },
          status: { label: 'Status', sortable: true, sortBy: 'status', sortDataType: 'string', description: 'Helpful information goes here.' },
          userID: { label: 'User ID', key: true, icon: 'user' },
          lastLogin: { label: 'Last Login', key: true },
          actions: { label: 'Actions', align: 'right', isPrintDisabled: true },
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
              {
                template: "actions",
                payload: { id: "name-1" },
              },
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
                      {
                        template: "actions",
                        payload: { id: "child-1-name-1" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-1-name-1" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-2-name-1" },
                              },
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
                      {
                        template: "actions",
                        payload: { id: "child-2-name-1" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-3-name-1" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-4-name-1" },
                              },
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
              {
                template: "actions",
                payload: { id: "name-2" },
              },
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
                      {
                        template: "actions",
                        payload: { id: "child-1-name-2" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-1-name-2" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-2-name-2" },
                              },
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
                      {
                        template: "actions",
                        payload: { id: "child-2-name-2" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-3-name-2" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-4-name-2" },
                              },
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
              {
                template: "actions",
                payload: { id: "name-3" },
              },
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
                      {
                        template: "actions",
                        payload: { id: "child-1-name-3" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-1-name-3" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-2-name-3" },
                              },
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
                      {
                        template: "actions",
                        payload: { id: "child-2-name-3" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-3-name-3" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-4-name-3" },
                              },
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
              {
                template: "actions",
                payload: { id: "name-4" },
              },
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
                      {
                        template: "actions",
                        payload: { id: "child-1-name-4" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-1-name-4" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-2-name-4" },
                              },
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
                      {
                        template: "actions",
                        payload: { id: "child-2-name-4" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-3-name-4" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-4-name-4" },
                              },
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
              {
                template: "actions",
                payload: { id: "name-5" },
              },
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
                      {
                        template: "actions",
                        payload: { id: "child-1-name-5" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-1-name-5" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-2-name-5" },
                              },
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
                      {
                        template: "actions",
                        payload: { id: "child-2-name-5" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-3-name-5" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-4-name-5" },
                              },
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
              {
                template: "actions",
                payload: { id: "name-6" },
              },
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
                      {
                        template: "actions",
                        payload: { id: "child-1-name-6" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-1-name-6" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-2-name-6" },
                              },
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
                      {
                        template: "actions",
                        payload: { id: "child-2-name-6" },
                      },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-3-name-6" },
                              },
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
                              {
                                template: "actions",
                                payload: { id: "grandchild-4-name-6" },
                              },
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
        dataTableExample: `<!-- Vue component -->
<ChiDataTable :config="config" :data="table" ref="dataTableComplex">
  <template #status="payload">
    <i class="\`chi-icon icon-\${payload.icon} -icon--\${payload.color}\`" aria-hidden="true"></i>
    <span class="-text--truncate" style="padding-left: 0.5rem;">
      {{ payload.status }}
    </span>
  </template>
  <template #name="payload">
    <ExamplePopover :name="payload.name" :id="payload.id" />
  </template>
  <template #actions="payload">
    <ExampleDropdown :id="payload.id" />
  </template>
  <template #toolbar>
    <ChiToolbar>
      <template v-slot:start></template>
      <template v-slot:end>
        <chi-button @chiClick="printTable" variant="flat" type="icon"
         aria-label="Print data table complex example">
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
import ExampleDropdown from './ExampleDropdown.vue';

<!-- Config and Data -->
data: {
  config: {
    columnResize: false,
    selectable: true,
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
    showSelectAllDropdown: true
  },
  table: {
    head: {
      name: { label: 'Name', sortable: true, sortBy: 'name', sortDataType: 'string', key: true, bold: true },
      status: { label: 'Status', sortable: true, sortBy: 'status', sortDataType: 'string', description: 'Helpful information goes here.' },
      userID: { label: 'User ID', key: true, icon: 'user' },
      lastLogin: { label: 'Last Login', key: true },
      actions: { label: 'Actions', align: 'right', isPrintDisabled: true }
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
          {
            template: "actions",
            payload: { id: "name-1" },
          },
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
                  {
                    template: "actions",
                    payload: { id: "child-1-name-1" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-1" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-1" },
                          },
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
                  {
                    template: "actions",
                    payload: { id: "child-2-name-1" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-1" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-1" },
                          },
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
          {
            template: "actions",
            payload: { id: "name-2" },
          },
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
                  {
                    template: "actions",
                    payload: { id: "child-1-name-2" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-2" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-2" },
                          },
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
                  {
                    template: "actions",
                    payload: { id: "child-2-name-2" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-2" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-2" },
                          },
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
          {
            template: "actions",
            payload: { id: "name-3" },
          },
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
                  {
                    template: "actions",
                    payload: { id: "child-1-name-3" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-3" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-3" },
                          },
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
                  {
                    template: "actions",
                    payload: { id: "child-2-name-3" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-3" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-3" },
                          },
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
          {
            template: "actions",
            payload: { id: "name-4" },
          },
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
                  {
                    template: "actions",
                    payload: { id: "child-1-name-4" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-4" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-4" },
                          },
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
                  {
                    template: "actions",
                    payload: { id: "child-2-name-4" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-4" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-4" },
                          },
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
          {
            template: "actions",
            payload: { id: "name-5" },
          },
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
                  {
                    template: "actions",
                    payload: { id: "child-1-name-5" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-5" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-5" },
                          },
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
                  {
                    template: "actions",
                    payload: { id: "child-2-name-5" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-5" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-5" },
                          },
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
          {
            template: "actions",
            payload: { id: "name-6" },
          },
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
                  {
                    template: "actions",
                    payload: { id: "child-1-name-6" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-6" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-6" },
                          },
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
                  {
                    template: "actions",
                    payload: { id: "child-2-name-6" },
                  },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-6" },
                          },
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
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-6" },
                          },
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
        popoverExample: `<!-- Template -->
<template>
  <div class="-text--truncate">
    <a
      :id="\`ticket-popover-button-\${id}\`"
      href="#"
      :data-target="\`#ticket-popover-\${id}\`"
      position="top-start">
      {{id}}
    </a>
    <section
      class="chi-popover"
      :id="\`ticket-popover-\${id}\`"
      aria-modal="true"
      role="dialog"
      aria-label="Popover title"
    >
      <header class="chi-popover__header">
        <h2 class="chi-popover__title">{{ id }}</h2>
      </header>
      <div class="chi-popover__content">
        <p class="chi-popover__text">Content for {{ id }}</p>
      </div>
    </section>
  </div>
</template>

<!-- Mounted -->
mounted() {
  const buttonOpenOnHover = document.getElementById(\`ticket-popover-button-\${this.$props.id}\`);
  const popover = chi.popover(buttonOpenOnHover);
  let hoverAnimationTimeout: number;

  if (buttonOpenOnHover) {
    buttonOpenOnHover.addEventListener('mouseenter', function() {
      hoverAnimationTimeout = setTimeout(() => {
        popover.show();
      }, 300);
    });

    buttonOpenOnHover.addEventListener('mouseleave', function() {
      if (hoverAnimationTimeout) {
        clearTimeout(hoverAnimationTimeout);
      }
      popover.hide();
    });
  }
}
beforeDestroy() {
  this.popover.dispose();
}`,
        dropdownExample: `<!-- Template -->
<template>
  <div class="chi-dropdown">
    <button ref="dropdownTrigger" class="chi-button -icon -flat" aria-label="More options">
      <div class="chi-button__content">
        <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
      </div>
    </button>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#">
        <span><i class="chi-icon icon-edit -sm -icon--primary" /></span>
        <span>Edit</span>
      </a>
      <a class="chi-dropdown__menu-item" href="#">
        <span><i class="chi-icon icon-delete -sm -icon--primary" /></span>
        <span>Delete</span>
      </a>
    </div>
  </div>
</template>

<!-- mounted -->
mounted() {
  this.dropdown = chi.dropdown(this.$refs.dropdownTrigger);
}
beforeDestroy() {
  this.dropdown.dispose();
}`
      },
    };
  },
})
export default class DataTableComplexPortal extends Vue {

}
</script>

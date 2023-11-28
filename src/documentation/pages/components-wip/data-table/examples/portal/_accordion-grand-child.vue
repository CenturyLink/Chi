<template lang="pug">
  <ComponentExample title="Accordion Grand Child" id="accordion-grand-child-data-table" :tabs="exampleTabs">
    chi-data-table(:config='config', :data='table' slot="example")
    <Wrapper slot='code-vue'>
      .chi-tab__description
        | Use <code>nestedContent</code> property to provide data of row accordion content
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
          size: "md",
          striped: true,
        },
        pagination: {
          activePage: 1,
          compact: true,
          firstLast: true,
          pageJumper: false,
        },
        showExpandAll: true,
        resultsPerPage: 3,
      },
      table: {
        head: {
          name: { label: 'Name', key: true, bold: true },
          id: { label: 'ID', key: true },
          lastLogin: { label: 'Last Login' },
        },
        body: [
          {
            expanded: true,
            id: 'name-1',
            nestedContent: {
              table: {
                data: [
                  {
                    expanded: true,
                    id: 'name-1-0',
                    data: [
                      'Child Name 1',
                      'child-name-1',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: 'name-1-1',
                    data: [
                      'Child Name 2',
                      'child-name-2',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
            data: [
              'Name 1',
              'name-1',
              '18 Dec 2020 3:26 p.m.',
            ],
          },
          {
            id: 'name-2',
            nestedContent: {
              table: {
                data: [
                  {
                    id: 'name-2-0',
                    data: [
                      'Child Name 1',
                      'child-name-1',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: 'name-2-1',
                    data: [
                      'Child Name 2',
                      'child-name-2',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
            data: [
              'Name 2',
              'name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
          },
          {
            id: 'name-3',
            nestedContent: {
              table: {
                data: [
                  {
                    id: 'name-3-0',
                    data: [
                      'Child Name 1',
                      'child-name-1',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: 'name-3-1',
                    data: [
                      'Child Name 2',
                      'child-name-2',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
            data: [
              'Name 3',
              'name-3',
              '5 Nov 2020 10:15 a.m.',
            ],
          },
          {
            id: 'name-4',
            nestedContent: {
              table: {
                data: [
                  {
                    id: 'name-4-0',
                    data: [
                      'Child Name 1',
                      'child-name-1',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: 'name-4-1',
                    data: [
                      'Child Name 2',
                      'child-name-2',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
            data: [
              'Name 4',
              'name-4',
              '18 Dec 2020 3:26 p.m.',
            ],
          },
          {
            id: 'name-5',
            nestedContent: {
              table: {
                data: [
                  {
                    id: 'name-5-0',
                    data: [
                      'Child Name 1',
                      'child-name-1',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: 'name-5-1',
                    data: [
                      'Child Name 2',
                      'child-name-2',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
            data: [
              'Name 5',
              'name-5',
              '18 Dec 2020 2:38 a.m.',
            ],
          },
          {
            id: 'name-6',
            nestedContent: {
              table: {
                data: [
                  {
                    id: 'name-6-0',
                    data: [
                      'Child Name 1',
                      'child-name-1',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                  {
                    id: 'name-6-1',
                    data: [
                      'Child Name 2',
                      'child-name-2',
                      '18 Dec 2020 2:38 a.m.',
                    ],
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'name-1-0',
                            data: [
                              'Child Name 1',
                              'child-name-1',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                          {
                            id: 'name-1-1',
                            data: [
                              'Child Name 2',
                              'child-name-2',
                              '18 Dec 2020 2:38 a.m.',
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
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
      size: "md",
      striped: true,
    },
    pagination: {
      activePage: 1,
      compact: true,
      firstLast: true,
      pageJumper: false,
    },
    showExpandAll: true,
    resultsPerPage: 3,
  },
  table: {
    head: {
      name: { label: 'Name', key: true, bold: true },
      id: { label: 'ID', key: true },
      lastLogin: { label: 'Last Login' },
    },
    body: [
      {
        expanded: true,
        id: 'name-1',
        nestedContent: {
          table: {
            data: [
              {
                expanded: true,
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
                nestedContent: {
                table: {
                  data: [
                  {
                    id: 'name-1-0',
                    data: [
                    'Child Name 1',
                    'child-name-1',
                    '18 Dec 2020 2:38 a.m.',
                    ],
                  },
                  {
                    id: 'name-1-1',
                    data: [
                    'Child Name 2',
                    'child-name-2',
                    '18 Dec 2020 2:38 a.m.',
                    ],
                  },
                  ],
                },
                },
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
                nestedContent: {
                table: {
                  data: [
                  {
                    id: 'name-1-0',
                    data: [
                    'Child Name 1',
                    'child-name-1',
                    '18 Dec 2020 2:38 a.m.',
                    ],
                  },
                  {
                    id: 'name-1-1',
                    data: [
                    'Child Name 2',
                    'child-name-2',
                    '18 Dec 2020 2:38 a.m.',
                    ],
                  },
                  ],
                },
                },
              },
            ],
          },
        },
        data: [
          'Name 1',
          'name-1',
          '18 Dec 2020 3:26 p.m.',
        ],
      },
      {
        id: 'name-2',
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-2-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
          {
            id: 'name-2-1',
            data: [
              'Child Name 2',
              'child-name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
            ],
          },
        },
        data: [
          'Name 2',
          'name-2',
          '18 Dec 2020 2:38 a.m.',
        ],
      },
      {
        id: 'name-3',
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-3-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
          {
            id: 'name-3-1',
            data: [
              'Child Name 2',
              'child-name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
            ],
          },
        },
        data: [
          'Name 3',
          'name-3',
          '5 Nov 2020 10:15 a.m.',
        ],
      },
      {
        id: 'name-4',
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-4-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
          {
            id: 'name-4-1',
            data: [
              'Child Name 2',
              'child-name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
            ],
          },
        },
        data: [
          'Name 4',
          'name-4',
          '18 Dec 2020 3:26 p.m.',
        ],
      },
      {
        id: 'name-5',
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-5-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
          {
            id: 'name-5-1',
            data: [
              'Child Name 2',
              'child-name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
            ],
          },
        },
        data: [
          'Name 5',
          'name-5',
          '18 Dec 2020 2:38 a.m.',
        ],
      },
      {
        id: 'name-6',
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-6-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
          {
            id: 'name-6-1',
            data: [
              'Child Name 2',
              'child-name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
            ],
          },
        },
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
      <div role="row" class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -expandable -position--relative">
            <div>
              <button aria-label="Expand All Rows" class="chi-button -icon -flat -expand -sm">
                <div class="chi-button__content">
                  <i class="chi-icon icon-squares-minus-outline"></i>
                </div>
                <span class="-sr--only">Expand All Rows</span>
              </button>
              <div class="chi-tooltip " data-popper-placement="top">
                <span>Collapse All</span>
              </div>
            </div>
            <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="Name" class="chi-data-table__cell -justify-content-md--start -position--relative">
            Name <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="ID" class="chi-data-table__cell -justify-content-md--start -position--relative">
            ID <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="Last Login" class="chi-data-table__cell -justify-content-md--start -position--relative">
            Last Login <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
        </div>
      </div>

      <div class="chi-data-table__body">
        <div id="row-dt-1-name-1" data-rownumber="0" data-rowlevel="0" role="row" class="chi-data-table__row -md -expanded">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-1-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-minus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 1</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-1</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">18 Dec 2020 3:26 p.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-1-content">
          <div id="row-dt-1-name-1-0" data-rownumber="0-0" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -expanded">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-1-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-minus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-1-0-content">
            <div id="row-dt-1-name-1-0" data-rownumber="0-0-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="0-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-1-1" data-rownumber="0-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-1-1-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-1-1-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="0-1-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="0-1-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="row-dt-1-name-2" data-rownumber="1" data-rowlevel="0" role="row" class="chi-data-table__row -striped -md -collapsed">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-2-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-plus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 2</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-2</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-2-content" style="display: none;">
          <div id="row-dt-1-name-2-0" data-rownumber="1-0" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-2-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-2-0-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="1-0-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="1-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-2-1" data-rownumber="1-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-2-1-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-2-1-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="1-1-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="1-1-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="row-dt-1-name-3" data-rownumber="2" data-rowlevel="0" role="row" class="chi-data-table__row -md -collapsed">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-3-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-plus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 3</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-3</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">5 Nov 2020 10:15 a.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-3-content" style="display: none;">
          <div id="row-dt-1-name-3-0" data-rownumber="2-0" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-3-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-3-0-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="2-0-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="2-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-3-1" data-rownumber="2-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-3-1-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-3-1-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="2-1-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="2-1-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
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
  </div>`,
      },
    };
  },
})
export default class DataTableAccordionGrandChild extends Vue { }
</script>

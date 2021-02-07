<template>
  <div id="tadataTableVIew">
    <h2>Data Table example</h2>
    <ChiTable
      :data="table"
      :config="config"
      @chiSelectedRowsChange="(e) => this.rowSelect(e)"
      @chiPageChange="(e) => this.pageChange(e)"
      @chiPageSizeChange="(e) => this.pageSizeChange(e)"
      @chiDataSorting="(e) => this.dataSorting(e)"
    >
      <template #icon="payload">
        <i :class="`chi-icon icon-${payload.icon} -icon--${payload.color}`"></i>
      </template>
      <template #ticketId="payload">
        <TicketPopover :id="payload.id" />
      </template>
      <template #status="payload">
        <div
          :class="`chi-badge -${payload.status === 'active' ? 'primary' : ''}`"
        >
          <span class="-text--truncate">{{ payload.status }}</span>
        </div>
      </template>
      <template #actions="payload">
        <Actions :id="payload.id" />
      </template>
      <template #accordionContent="payload">
        <div class="chi-alert -success" role="alert">
          <i class="chi-alert__icon chi-icon icon-circle-check"></i>
          <div class="chi-alert__content">
            <p class="chi-alert__text">
              Custom content rendered by the provided template. ID:
              <b>{{ payload.id }}</b>
            </p>
          </div>
        </div>
      </template>
    </ChiTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataTable from '../components/data-table/DataTable';
import Actions from './DataTableTemplates/example-actions.vue';
import TicketPopover from './DataTableTemplates/example-popover.vue';

@Component({
  components: {
    ChiTable: DataTable,
    Actions,
    TicketPopover
  },
  methods: {
    rowSelect: (e) => {
      console.log(e);
    },
    pageChange: (e) => {
      console.log(e);
    },
    pageSizeChange: (e) => {
      console.log(e);
    },
    dataSorting: (e) => {
      console.log(e);
    }
  },
  data: () => {
    return {
      config: {
        columnResize: true,
        noResultsMessage:
          'No matches found. Please revise search criteria and try again.',
        activePage: 1,
        style: {
          portal: true,
          noBorder: false,
          bordered: false,
          hover: false,
          size: 'md',
          striped: true
        },
        pagination: {
          compact: true,
          firstLast: true,
          pageJumper: true
        },
        selectable: true,
        columnSizes: {
          xs: [5, 5, 5, 5, 5, 5, 5, 5],
          sm: [10, 10, 10, 0, 10, 10, 10, 10],
          md: [5, 15, 15, 0, 15, 15, 15, 5],
          lg: [5, 15, 15, 0, 15, 15, 15, 5],
          xl: [5, 15, 10, 15, 15, 15, 15, 5]
        },
        resultsPerPage: 10
      },
      table: {
        head: {
          alerts: { label: 'Alerts', align: 'center' },
          ticketId: { label: 'Ticket ID', sortable: true, sortBy: 'id', sortDataType: 'string' },
          status: {
            label: 'Status',
            sortable: true,
            sortBy: 'status',
            sortDataType: 'string',
            align: 'center'
          },
          supportType: { label: 'Support Type', sortable: true, sortDataType: 'string' },
          servicetype: { label: 'Service Type', sortable: true, sortDataType: 'string' },
          created: { label: 'Created', sortable: true, sortDataType: 'string' },
          productId: { label: 'Product / Service ID', sortable: true, sortDataType: 'string' },
          actions: { label: ' ', align: 'right', allowOverflow: true }
        },
        body: [
          {
            id: 'NTM000021063',
            nestedContent: {
              value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
            },
            active: false,
            data: [
              {
                template: 'icon',
                payload: { icon: 'circle-check', color: 'success' }
              },
              { template: 'ticketId', payload: { id: 'NTM000021063' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021063' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021071',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021071' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021071' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021064',
            active: false,
            nestedContent: {
              value: 'asdasdasd'
            },
            data: [
              '',
              { template: 'ticketId', payload: { id: 'NTM000021064' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021064' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021065',
            active: false,
            data: [
              {
                label: 'Alert Column',
                template: 'icon',
                payload: { icon: 'warning', color: 'warning' }
              }, // Custom, overwritten Label
              { template: 'ticketId', payload: { id: 'NTM000021065' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021065' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021066',
            active: false,
            nestedContent: {
              template: 'accordionContent',
              payload: {
                id: 'NTM000021066'
              }
            },
            data: [
              '',
              { template: 'ticketId', payload: { id: 'NTM000021066' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021066' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM0000210662',
            active: false,
            nestedContent: {
              table: {
                data: [
                  {
                    id: 'NTM0000210661',
                    active: false,
                    data: [
                      {
                        label: 'Alerts',
                        template: 'icon',
                        payload: { icon: 'circle-check', color: 'success' }
                      },
                      {
                        template: 'ticketId',
                        payload: { id: 'NTM0000210661' }
                      },
                      {
                        template: 'status',
                        payload: { status: 'active' },
                        align: 'center'
                      },
                      'Colocation',
                      'Internet Advantage',
                      '04/05/2018 8:00 AM',
                      'SVUJW034781A',
                      {
                        template: 'actions',
                        payload: { id: 'NTM0000210661' },
                        align: 'right'
                      }
                    ]
                  },
                  {
                    id: 'NTM00002106611',
                    active: false,
                    nestedContent: {
                      table: {
                        data: [
                          {
                            id: 'a',
                            active: false,
                            data: [
                              {
                                label: 'Alerts',
                                template: 'icon',
                                payload: {
                                  icon: 'circle-check',
                                  color: 'success'
                                }
                              },
                              {
                                template: 'ticketId',
                                payload: { id: 'NTM0000210661' }
                              },
                              {
                                template: 'status',
                                payload: { status: 'active' },
                                align: 'center'
                              },
                              'Colocation',
                              'Internet Advantage',
                              '04/05/2018 8:00 AM',
                              'SVUJW034781A',
                              {
                                template: 'actions',
                                payload: { id: 'NTM0000210661' },
                                align: 'right'
                              }
                            ]
                          },
                          {
                            id: 'bbb',
                            active: false,
                            nestedContent: {
                              table: {
                                data: [
                                  {
                                    id: 'ba',
                                    active: false,
                                    data: [
                                      {
                                        label: 'Alerts',
                                        template: 'icon',
                                        payload: {
                                          icon: 'circle-check',
                                          color: 'success'
                                        }
                                      },
                                      {
                                        template: 'ticketId',
                                        payload: { id: 'NTM00002106611' }
                                      },
                                      {
                                        template: 'status',
                                        payload: { status: 'active' },
                                        align: 'center'
                                      },
                                      'Colocation',
                                      'Internet Advantage',
                                      '04/05/2018 8:00 AM',
                                      'SVUJW034781A',
                                      {
                                        template: 'actions',
                                        payload: { id: 'NTM00002106611' },
                                        align: 'right'
                                      }
                                    ]
                                  },
                                  {
                                    id: 'bb',
                                    active: false,
                                    data: [
                                      {
                                        label: 'Alerts',
                                        template: 'icon',
                                        payload: {
                                          icon: 'circle-check',
                                          color: 'success'
                                        }
                                      },
                                      {
                                        template: 'ticketId',
                                        payload: { id: 'NTM00002106621' }
                                      },
                                      {
                                        template: 'status',
                                        payload: { status: 'active' },
                                        align: 'center'
                                      },
                                      'Colocation',
                                      'Internet Advantage',
                                      '04/05/2018 8:00 AM',
                                      'SVUJW034781A',
                                      {
                                        template: 'actions',
                                        payload: { id: 'NTM00002106621' },
                                        align: 'right'
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            data: [
                              {
                                label: 'Alerts',
                                template: 'icon',
                                payload: {
                                  icon: 'circle-check',
                                  color: 'success'
                                }
                              },
                              {
                                template: 'ticketId',
                                payload: { id: 'NTM0000210662' }
                              },
                              {
                                template: 'status',
                                payload: { status: 'active' },
                                align: 'center'
                              },
                              'Colocation',
                              'Internet Advantage',
                              '04/05/2018 8:00 AM',
                              'SVUJW034781A',
                              {
                                template: 'actions',
                                payload: { id: 'NTM0000210662' },
                                align: 'right'
                              }
                            ]
                          }
                        ]
                      }
                    },
                    data: [
                      {
                        label: 'Alerts',
                        template: 'icon',
                        payload: { icon: 'circle-check', color: 'success' }
                      },
                      {
                        template: 'ticketId',
                        payload: { id: 'NTM0000210662' }
                      },
                      {
                        template: 'status',
                        payload: { status: 'active' },
                        align: 'center'
                      },
                      'Colocation',
                      'Internet Advantage',
                      '04/05/2018 8:00 AM',
                      'SVUJW034781A',
                      {
                        template: 'actions',
                        payload: { id: 'NTM0000210662' },
                        align: 'right'
                      }
                    ]
                  }
                ]
              }
            },
            data: [
              '',
              { template: 'ticketId', payload: { id: 'NTM000021067' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021067' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021072',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021072' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021072' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM0000210651',
            active: false,
            data: [
              {
                label: 'Alerts',
                template: 'icon',
                payload: { icon: 'warning', color: 'warning' }
              },
              { template: 'ticketId', payload: { id: 'NTM0000210651' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM0000210651' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021068',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021068' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021068' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021069',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021069' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021069' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021070',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021070' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021070' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021073',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021073' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021073' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021074',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021074' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021074' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021075',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021075' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021075' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021076',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021076' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021076' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021077',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021077' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021077' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021078',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021078' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021078' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021079',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021079' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021079' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021080',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021080' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021080' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021081',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021081' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021081' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021082',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021082' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021082' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021083',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021083' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021083' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021084',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021084' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021084' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021085',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021085' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021085' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021086',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021086' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021086' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021087',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021087' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021087' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021088',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021088' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021088' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021089',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021089' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021089' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021090',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021090' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021090' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021091',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021091' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021091' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021092',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021092' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021092' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021093',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021093' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021093' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021094',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021094' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021094' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021095',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021095' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021095' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021096',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021096' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021096' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021097',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021097' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021097' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021098',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021098' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021098' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021099',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021099' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021099' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021100',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021100' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021100' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021101',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021101' } },
              { template: 'status', payload: { status: 'inactive' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021101' },
                align: 'right'
              }
            ]
          },
          {
            id: 'NTM000021102',
            active: false,
            data: [
              {},
              { template: 'ticketId', payload: { id: 'NTM000021102' } },
              { template: 'status', payload: { status: 'active' } },
              'Colocation',
              'Internet Advantage',
              '04/05/2018 8:00 AM',
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTM000021102' },
                align: 'right'
              }
            ]
          }
        ]
      }
    };
  }
})
export default class DataTableView extends Vue {}
</script>

<style lang="scss"></style>

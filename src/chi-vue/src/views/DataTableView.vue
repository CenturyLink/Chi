<template>
  <div id="tadataTableVIew">
    <h2>Data Table example</h2>
    <ChiTable :data="table">
      <template #icon="payload">
        <i :class="`chi-icon icon-${payload.icon} -icon--${payload.color}`"></i>
      </template>
      <template #ticketid="payload">
        <TicketPopover :id="payload.id" />
      </template>
      <template #status="payload">
        <div :class="`chi-badge -${payload.status==='active' ? 'primary' : ''}`">
          <span>{{payload.status}}</span>
        </div>
      </template>
      <template #actions="payload">
        <Actions :id="payload.id" />
      </template>
      <template #accordionContent="payload">
        <div class="chi-alert -success" role="alert">
          <i class="chi-alert__icon chi-icon icon-circle-check"></i>
          <div class="chi-alert__content">
            <p class="chi-alert__text">Custom content rendered by the provided template. ID: <b>{{payload.id}}</b></p>
          </div>
        </div>
      </template>
    </ChiTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataTable from '../components/data-table/DataTable';
import Actions from './DataTableTemplates/datatable-actions.vue';
import TicketPopover from './DataTableTemplates/datatable-popover.vue';

@Component({
  components: {
    ChiTable: DataTable,
    Actions,
    TicketPopover
  },
  data: () => {
    return {
      table: {
        config: {
          columnResize: true,
          noResultsMessage: 'No matches found. Please revise search criteria and try again.',
          style: {
            portal: false,
            noBorder: false,
            bordered: false,
            hover: false,
            size: 'md',
            striped: false,
          },
          pagination: {
          },
          selectable: true,
        },
        head: {
          alerts: { label: 'Alerts', align: 'center' },
          ticketId: { label: 'Ticket ID', sortable: true, sortBy: 'id' },
          status: { label: 'Status', sortable: true, sortBy: 'status', align: 'center' },
          supportType: { label: 'Support Type', sortable: true },
          servicetype: { label: 'Service Type', sortable: true },
          created: { label: 'Created', sortable: true },
          productId: { label: 'Product / Service ID', sortable: true },
          actions: { label: 'Actions', sortable: true, align: 'right' },
        },
        body: [
          {
            id: 'asdasd',
            accordion: {
              value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
            },
            active: false,
            data: [
              { label: 'Alerts', template: 'icon', payload: {icon: 'circle-check', color: 'success'}, align: 'center' },
              { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM000021063'} },
              { label: 'Status', template: 'status', payload: {status: 'active'},  align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: {id: 'NTM000021063'}, align: 'right'},
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021071' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021071' }, align: 'right' },
            ],
          },
          {
            id: 'qweqwe',
            active: false,
            accordion: {
              value: "asdasdasd"
            },
            data: [
              '',
              { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM000021064'} },
              { label: 'Status', template: 'status', payload: {status: 'inactive'}, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: {id: 'NTM000021064'}, align: 'right'},
            ],
          },
          {
            active: false,
            data: [
              { label: 'Alerts', template: 'icon', payload: {icon: 'warning', color: 'warning'}, align: 'center' },
              { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM000021065'} },
              { label: 'Status', template: 'status', payload: {status: 'active'}, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: {id: 'NTM000021065'}, align: 'right'},
            ],
          },
          {
            id: "NTM000021066",
            active: false,
            accordion: {
              template: 'accordionContent',
              payload: {
                id: 'NTM000021066'
              }
            },
            data: [
              '',
              { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM000021066'} },
              { label: 'Status', template: 'status', payload: {status: 'active'}, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: {id: 'NTM000021066'}, align: 'right'},
            ],
          },
          {
            id: "subtable",
            active: false,
            accordion: {
              table: {
                data: [
                  {
                    id: 'a',
                    active: false,
                    data: [
                      { label: 'Alerts', template: 'icon', payload: {icon: 'circle-check', color: 'success'}, align: 'center' },
                      { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM0000210661'} },
                      { label: 'Status', template: 'status', payload: {status: 'active'},  align: 'center' },
                      { label: 'Support Type', value: 'Colocation' },
                      { label: 'Service Type', value: 'Internet Advantage' },
                      { label: 'Created', value: '04/05/2018 8:00 AM' },
                      { label: 'Product/Service ID', value: 'SVUJW034781A' },
                      { label: 'Actions', template: 'actions', payload: {id: 'NTM0000210661'}, align: 'right'},
                    ],
                  },
                  {
                    id: 'b',
                    active: false,
                    accordion: {
                      table: {
                        data: [
                          {
                            id: 'a',
                            active: false,
                            data: [
                              { label: 'Alerts', template: 'icon', payload: {icon: 'circle-check', color: 'success'}, align: 'center' },
                              { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM0000210661'} },
                              { label: 'Status', template: 'status', payload: {status: 'active'},  align: 'center' },
                              { label: 'Support Type', value: 'Colocation' },
                              { label: 'Service Type', value: 'Internet Advantage' },
                              { label: 'Created', value: '04/05/2018 8:00 AM' },
                              { label: 'Product/Service ID', value: 'SVUJW034781A' },
                              { label: 'Actions', template: 'actions', payload: {id: 'NTM0000210661'}, align: 'right'},
                            ],
                          },
                          {
                            id: 'bbb',
                            active: false,
                            accordion: {
                              table: {
                                data: [
                                  {
                                    id: 'ba',
                                    active: false,
                                    data: [
                                      { label: 'Alerts', template: 'icon', payload: {icon: 'circle-check', color: 'success'}, align: 'center' },
                                      { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM00002106611'} },
                                      { label: 'Status', template: 'status', payload: {status: 'active'},  align: 'center' },
                                      { label: 'Support Type', value: 'Colocation' },
                                      { label: 'Service Type', value: 'Internet Advantage' },
                                      { label: 'Created', value: '04/05/2018 8:00 AM' },
                                      { label: 'Product/Service ID', value: 'SVUJW034781A' },
                                      { label: 'Actions', template: 'actions', payload: {id: 'NTM00002106611'}, align: 'right'},
                                    ],
                                  },
                                  {
                                    id: 'bb',
                                    active: false,
                                    data: [
                                      { label: 'Alerts', template: 'icon', payload: {icon: 'circle-check', color: 'success'}, align: 'center' },
                                      { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM00002106621'} },
                                      { label: 'Status', template: 'status', payload: {status: 'active'},  align: 'center' },
                                      { label: 'Support Type', value: 'Colocation' },
                                      { label: 'Service Type', value: 'Internet Advantage' },
                                      { label: 'Created', value: '04/05/2018 8:00 AM' },
                                      { label: 'Product/Service ID', value: 'SVUJW034781A' },
                                      { label: 'Actions', template: 'actions', payload: {id: 'NTM00002106621'}, align: 'right'},
                                    ],
                                  },
                                ]
                              }
                            },
                            data: [
                              { label: 'Alerts', template: 'icon', payload: {icon: 'circle-check', color: 'success'}, align: 'center' },
                              { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM0000210662'} },
                              { label: 'Status', template: 'status', payload: {status: 'active'},  align: 'center' },
                              { label: 'Support Type', value: 'Colocation' },
                              { label: 'Service Type', value: 'Internet Advantage' },
                              { label: 'Created', value: '04/05/2018 8:00 AM' },
                              { label: 'Product/Service ID', value: 'SVUJW034781A' },
                              { label: 'Actions', template: 'actions', payload: {id: 'NTM0000210662'}, align: 'right'},
                            ],
                          },
                        ]
                      }
                    },
                    data: [
                      { label: 'Alerts', template: 'icon', payload: {icon: 'circle-check', color: 'success'}, align: 'center' },
                      { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM0000210662'} },
                      { label: 'Status', template: 'status', payload: {status: 'active'},  align: 'center' },
                      { label: 'Support Type', value: 'Colocation' },
                      { label: 'Service Type', value: 'Internet Advantage' },
                      { label: 'Created', value: '04/05/2018 8:00 AM' },
                      { label: 'Product/Service ID', value: 'SVUJW034781A' },
                      { label: 'Actions', template: 'actions', payload: {id: 'NTM0000210662'}, align: 'right'},
                    ],
                  },
                ]
              }
            },
            data: [
              '',
              { label: 'Ticket ID', template: 'ticketid', payload: {id: 'NTM000021067'} },
              { label: 'Status', template: 'status', payload: {status: 'inactive'}, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: {id: 'NTM000021067'}, align: 'right'},
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021072' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021072' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              { label: 'Alerts', template: 'icon', payload: { icon: 'warning', color: 'warning' }, align: 'center' },
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021065' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021065' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021068' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021068' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021069' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021069' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021070' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021070' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021073' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021073' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021074' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021074' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021075' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021075' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021076' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021076' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021077' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021077' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021078' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021078' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021079' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021079' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021080' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021080' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021081' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021081' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021082' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021082' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021083' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021083' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021084' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021084' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021085' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021085' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021086' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021086' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021087' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021087' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021088' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021088' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021089' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021089' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021090' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021090' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021091' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021091' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021092' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021092' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021093' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021093' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021094' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021094' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021095' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021095' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021096' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021096' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021097' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021097' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021098' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021098' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021099' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021099' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021100' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021100' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021101' } },
              { label: 'Status', template: 'status', payload: { status: 'inactive' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021101' }, align: 'right' },
            ],
          },
          {
            active: false,
            data: [
              {},
              { label: 'Ticket ID', template: 'ticketid', payload: { id: 'NTM000021102' } },
              { label: 'Status', template: 'status', payload: { status: 'active' }, align: 'center' },
              { label: 'Support Type', value: 'Colocation' },
              { label: 'Service Type', value: 'Internet Advantage' },
              { label: 'Created', value: '04/05/2018 8:00 AM' },
              { label: 'Product/Service ID', value: 'SVUJW034781A' },
              { label: 'Actions', template: 'actions', payload: { id: 'NTM000021102' }, align: 'right' },
            ],
          },
        ]
      }
    };
  }
})
export default class DataTableView extends Vue {}
</script>

<style lang="scss"></style>

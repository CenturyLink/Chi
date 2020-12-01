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
        Accordion content goes here {{payload.id}}
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
            portal: true,
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
          alerts: { label: 'Alerts', sortable: true, align: 'center' },
          ticketId: { label: 'Ticket ID', sortable: true },
          status: { label: 'Status', sortable: true, align: 'center' },
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
            id: "erty",
            active: false,
            accordion: {
              template: 'accordionContent',
              payload: {
                id: 'etry'
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
            active: false,
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
        ]
      }
    };
  }
})
export default class DataTableView extends Vue {}
</script>

<style lang="scss"></style>

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
    </ChiTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataTable from '../components/data-table/DataTable';
import Actions from './datatable-actions.vue';
import TicketPopover from './datatable-popover.vue';

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
            accordion: {
              content: 'Content'
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
            active: false,
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
            accordion: {
              content: 'Content'
            }
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

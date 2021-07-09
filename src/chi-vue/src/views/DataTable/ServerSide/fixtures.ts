import { DataTableConfig } from '@/constants/types';

export const exampleConfig: DataTableConfig = {
  columnResize: true,
  mode: 'serverside',
  noResultsMessage: 'No matches found. Please revise search criteria and try again.',
  style: {
    portal: true,
    noBorder: false,
    bordered: false,
    hover: false,
    size: 'lg',
    striped: true,
  },
  pagination: {
    activePage: 1,
    compact: true,
    firstLast: true,
    hideOnSinglePage: true,
    pages: 2,
    pageJumper: true,
  },
  selectable: true,
  reserveExpansionSlot: true,
  columnSizes: {
    xs: [10, 10, 10, 0, 10, 10, 10, 5],
    sm: [10, 10, 10, 0, 10, 10, 10, 5],
    md: [15, 5, 15, 0, 15, 15, 15, 5],
    lg: [15, 5, 15, 0, 15, 15, 15, 5],
    xl: [15, 5, 10, 15, 15, 15, 15, 5],
  },
  resultsPerPage: 10,
};

export const exampleTableHead = {
  ticketId: { label: 'Ticket ID', sortable: true, sortBy: 'id', sortDataType: 'string', key: true, bold: true },
  alerts: { label: 'Alerts', align: 'center' },
  status: {
    label: 'Status',
    sortable: true,
    sortBy: 'status',
    sortDataType: 'string',
    align: 'center',
  },
  string: { label: 'String', sortable: true, sortDataType: 'string', key: true },
  number: { label: 'Number', sortable: true, sortDataType: 'number' },
  date: { label: 'Date', sortable: true, sortBy: 'date', sortDataType: 'date' },
  productId: { label: 'Product / Service ID', sortable: true, sortDataType: 'string' },
  actions: { label: ' ', align: 'right', allowOverflow: true },
};

export const exampleTablePage1 = [
  {
    id: 'NTN000021063',
    nestedContent: {
      template: 'loadingSkeleton',
    },
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021063' } },
      {
        template: 'icon',
        payload: { icon: 'circle-check', color: 'success' },
      },
      { template: 'status', payload: { status: 'active' } },
      'Colocation A',
      0,
      { template: 'date', payload: { date: new Date('02/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021063' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021071',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021071' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation B',
      1,
      { template: 'date', payload: { date: new Date('03/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021071' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021064',
    active: false,
    nestedContent: {
      value: 'asdasdasd',
    },
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021064' } },
      '',
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation B',
      2,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021064' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021065',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021065' } },
      {
        label: 'Alert Column',
        template: 'icon',
        payload: { icon: 'warning', color: 'warning' },
      },
      { template: 'status', payload: { status: 'active' } },
      'Colocation C',
      3,
      { template: 'date', payload: { date: new Date('05/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021065' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021066',
    active: false,
    nestedContent: {
      template: 'accordionContent',
      payload: {
        id: 'NTN000021066',
      },
    },
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021066' } },
      '',
      { template: 'status', payload: { status: 'active' } },
      'Colocation a',
      4,
      { template: 'date', payload: { date: new Date('06/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021066' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN0000210662',
    active: false,
    nestedContent: {
      table: {
        data: [
          {
            id: 'NTN0000210661',
            active: false,
            data: [
              {
                template: 'ticketId',
                payload: { id: 'NTN0000210661' },
              },
              {
                label: 'Alerts',
                template: 'icon',
                payload: { icon: 'circle-check', color: 'success' },
              },
              {
                template: 'status',
                payload: { status: 'active' },
                align: 'center',
              },
              'Colocation',
              5,
              { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTN0000210661' },
                align: 'right',
              },
            ],
          },
          {
            id: 'NTN00002106611',
            active: false,
            nestedContent: {
              table: {
                data: [
                  {
                    id: 'a',
                    active: false,
                    data: [
                      {
                        template: 'ticketId',
                        payload: { id: 'NTN0000210661' },
                      },
                      {
                        label: 'Alerts',
                        template: 'icon',
                        payload: {
                          icon: 'circle-check',
                          color: 'success',
                        },
                      },
                      {
                        template: 'status',
                        payload: { status: 'active' },
                        align: 'center',
                      },
                      'Colocation',
                      6,
                      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
                      'SVUJW034781A',
                      {
                        template: 'actions',
                        payload: { id: 'NTN0000210661' },
                        align: 'right',
                      },
                    ],
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
                                template: 'ticketId',
                                payload: { id: 'NTN00002106611' },
                              },
                              {
                                label: 'Alerts',
                                template: 'icon',
                                payload: {
                                  icon: 'circle-check',
                                  color: 'success',
                                },
                              },
                              {
                                template: 'status',
                                payload: { status: 'active' },
                                align: 'center',
                              },
                              'Colocation',
                              7,
                              { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
                              'SVUJW034781A',
                              {
                                template: 'actions',
                                payload: { id: 'NTN00002106611' },
                                align: 'right',
                              },
                            ],
                          },
                          {
                            id: 'bb',
                            active: false,
                            data: [
                              {
                                template: 'ticketId',
                                payload: { id: 'NTN00002106621' },
                              },
                              {
                                label: 'Alerts',
                                template: 'icon',
                                payload: {
                                  icon: 'circle-check',
                                  color: 'success',
                                },
                              },
                              {
                                template: 'status',
                                payload: { status: 'active' },
                                align: 'center',
                              },
                              'Colocation',
                              8,
                              { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
                              'SVUJW034781A',
                              {
                                template: 'actions',
                                payload: { id: 'NTN00002106621' },
                                align: 'right',
                              },
                            ],
                          },
                        ],
                      },
                    },
                    data: [
                      {
                        template: 'ticketId',
                        payload: { id: 'NTN0000210662' },
                      },
                      {
                        label: 'Alerts',
                        template: 'icon',
                        payload: {
                          icon: 'circle-check',
                          color: 'success',
                        },
                      },
                      {
                        template: 'status',
                        payload: { status: 'active' },
                        align: 'center',
                      },
                      'Colocation',
                      9,
                      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
                      'SVUJW034781A',
                      {
                        template: 'actions',
                        payload: { id: 'NTN0000210662' },
                        align: 'right',
                      },
                    ],
                  },
                ],
              },
            },
            data: [
              {
                template: 'ticketId',
                payload: { id: 'NTN0000210662' },
              },
              {
                label: 'Alerts',
                template: 'icon',
                payload: { icon: 'circle-check', color: 'success' },
              },
              {
                template: 'status',
                payload: { status: 'active' },
                align: 'center',
              },
              'Colocation',
              10,
              { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
              'SVUJW034781A',
              {
                template: 'actions',
                payload: { id: 'NTN0000210662' },
                align: 'right',
              },
            ],
          },
        ],
      },
    },
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021067' } },
      '',
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation b',
      11,
      { template: 'date', payload: { date: new Date('07/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021067' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021072',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021072' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation c',
      12,
      { template: 'date', payload: { date: new Date('01/06/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021072' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN0000210651',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN0000210651' } },
      {
        label: 'Alerts',
        template: 'icon',
        payload: { icon: 'warning', color: 'warning' },
      },
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      13,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN0000210651' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021068',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021068' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      14,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021068' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021069',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021069' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      15,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021069' },
        align: 'right',
      },
    ],
  },
];

export const exampleTablePage2 = [
  {
    id: 'NTN000021070',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021070' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      16,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021070' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021073',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021073' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      17,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021073' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021074',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021074' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      18,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021074' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021075',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021075' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      19,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021075' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021076',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021076' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      20,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021076' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021077',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021077' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      21,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021077' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021078',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021078' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      22,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021078' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021079',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021079' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      23,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021079' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021080',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021080' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      24,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021080' },
        align: 'right',
      },
    ],
  },
  {
    id: 'NTN000021081',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTN000021081' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      25,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
      {
        template: 'actions',
        payload: { id: 'NTN000021081' },
        align: 'right',
      },
    ],
  },
];

import {
  DataTableActionItemResponsiveness,
  DataTableColumnProps,
  DataTableConfig,
  SaveViewConfig,
  SaveViewModes,
} from '@/constants/types';

export const exampleConfig: DataTableConfig = {
  columnResize: true,
  noResultsMessage: 'No matching results',
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
    hideOnSinglePage: true,
    compact: true,
    firstLast: true,
    pageJumper: true,
  },
  selectable: true,
  columnSizes: {
    xs: [5, 5, 5, 0, 5, 5, 5, 5],
    sm: [10, 10, 10, 0, 10, 10, 10, 5],
    md: [15, 5, 15, 0, 15, 15, 15, 5],
    lg: [15, 5, 15, 0, 15, 15, 15, 5],
    xl: [15, 5, 10, 15, 15, 15, 15, 5],
  },
  resultsPerPage: 10,
  defaultSort: {
    key: 'date',
    sortBy: 'date',
    direction: 'descending',
  },
  truncation: true,
  treeSelection: true,
  print: {
    isNestedContentPrintDisabled: true,
  },
  showExpandAll: true,
  showSelectAllDropdown: true,
  emptyActionable: {
    isActionable: true,
  },
  actions: [
    {
      label: 'View',
      icon: 'icon-check-alt',
      onClick: (props: DataTableColumnProps) => {
        alert(`viewed props! ${JSON.stringify(props)}`);
      },
    },
    {
      label: 'Edit',
      icon: 'icon-edit',
      hide: [DataTableActionItemResponsiveness.MOBILE],
      onClick: () => (location.href = 'https://www.google.com'),
    },
    {
      label: 'Download',
      icon: 'icon-circle-arrow-down',
      hide: [DataTableActionItemResponsiveness.DESKTOP],
      onClick: () => console.log(`downloaded`),
    },
    {
      label: 'Delete',
      icon: 'icon-delete',
      onClick: () => console.log('deleted'),
    },
  ],
};

export const exampleSaveViewConfig: SaveViewConfig = {
  active: true,
  results: '(1-40 of 78)',
  default: true,
  mode: SaveViewModes.CREATE,
  title: 'Title goes here',
};

const exampleColumns = [
  {
    name: 'columnA',
    label: 'Column A',
  },
  {
    name: 'columnB',
    label: 'Column B',
  },
  {
    name: 'columnC',
    label: 'Column C',
    locked: true,
    selected: true,
  },
  {
    name: 'columnD',
    label: 'Column D',
    locked: true,
    selected: true,
  },
  {
    name: 'columnE',
    label: 'Column E',
    selected: true,
    wildcard: true,
  },
  {
    name: 'columnF',
    label: 'Column F',
    selected: true,
    wildcard: true,
  },
  {
    name: 'columnG',
    label: 'Column G',
    selected: true,
    wildcard: true,
  },
  {
    name: 'columnH',
    label: 'Column H',
  },
  {
    name: 'columnI',
    label: 'Column I',
  },
  {
    name: 'columnJ',
    label: 'Column J',
  },
];

const exampleFilters = {
  filters: [
    {
      name: 'status',
      type: 'select',
      id: 'myoption1',
      label: 'Selector',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
      ],
      value: 'active',
    },
    {
      name: 'input',
      placeholder: 'Input filter',
      type: 'input',
      value: '',
      id: 'myoption2',
      label: 'Input Filter',
    },
    {
      name: 'checkbox',
      type: 'checkbox',
      checked: false,
      id: 'myoption3',
      label: 'Checkbox',
    },
    {
      name: 'statusAdvanced',
      label: 'Status',
      type: 'select',
      id: 'myoption4',
      options: [
        {
          label: 'Active',
          value: 'active',
          selected: false,
        },
        {
          label: 'Inactive',
          value: 'inactive',
          selected: false,
        },
      ],
      advanced: true,
      value: 'active',
    },
    {
      name: 'inputAdvanced',
      label: 'Label',
      id: 'myoption5',
      advanced: true,
    },
    {
      name: 'textareaAdvanced',
      label: 'textarea',
      id: 'myoption6',
      type: 'textarea',
      advanced: true,
    },
    {
      name: 'checkboxAdvanced',
      id: 'myoption7',
      label: 'Advanced Checkbox',
      type: 'checkbox',
      advanced: true,
    },
    {
      name: 'input',
      placeholder: 'Input filter',
      type: 'input',
      value: '',
      id: 'myoption8',
      label: 'Input',
      advanced: true,
    },
  ],
};

const customItems = [
  {
    template: 'customAdvanced',
    label: 'Custom 1',
  },
  {
    template: 'customAdvanced2',
    label: 'Custom 2',
  },
  {
    template: 'customAdvanced3',
    label: 'Custom 3',
  },
  {
    template: 'customAdvanced4',
    label: 'Custom 4',
  },
  {
    template: 'customAdvanced5',
    label: 'Custom 5',
  },
];

export const exampleToolbar = {
  customItems: customItems,
  filtersData: exampleFilters,
  columnsData: {
    columns: exampleColumns,
  },
  viewsData: [
    {
      id: 'view-1',
      label: 'View 1',
      columns: exampleColumns,
      searchString: 'abc',
      filters: exampleFilters,
    },
    {
      id: 'view-2',
      label: 'View 2',
      columns: [],
      searchString: 'abcde',
      filters: [],
    },
  ],
};

export const exampleTableArrayHead = [
  {
    name: 'ticketId',
    label: 'Ticket ID',
    sortable: true,
    sortBy: 'id',
    sortDataType: 'string',
    key: true,
    bold: true,
    description: { title: 'Ticket ID', text: 'This is content for ticket id' },
  },
  {
    name: 'alerts',
    label: 'Alerts',
    align: 'center',
    description: {
      template: 'alertsDesc',
      payload: {
        success: { icon: 'circle-check', color: 'success' },
        warning: { icon: 'warning', color: 'warning' },
      },
    },
  },
  {
    name: 'status',
    label: 'Status',
    sortable: true,
    sortBy: 'status',
    sortDataType: 'string',
    align: 'center',
  },
  { name: 'string', label: 'Product', sortable: true, sortDataType: 'string', key: true },
  { name: 'number', label: 'Number', sortable: true, sortDataType: 'number' },
  { name: 'date', label: 'Created', sortable: true, sortBy: 'date', sortDataType: 'date' },
  { name: 'productId', label: 'Service ID', sortable: true, sortDataType: 'string' },
];

export const exampleTableHead = {
  ticketId: {
    label: 'Ticket ID',
    sortable: true,
    sortBy: 'id',
    sortDataType: 'string',
    key: true,
    bold: true,
    description: { title: 'Ticket ID', text: 'This is content for ticket id' },
  },
  alerts: {
    label: 'Alerts',
    align: 'center',
    description: {
      template: 'alertsDesc',
      payload: {
        success: { icon: 'circle-check', color: 'success' },
        warning: { icon: 'warning', color: 'warning' },
      },
    },
  },
  status: {
    label: 'Status',
    sortable: true,
    sortBy: 'status',
    sortDataType: 'string',
    align: 'center',
  },
  string: {
    label: 'Product',
    sortable: true,
    sortDataType: 'string',
    key: true,
    icon: 'circle-check',
  },
  number: { label: 'Number', sortable: true, sortDataType: 'number' },
  date: { label: 'Created', sortable: true, sortBy: 'date', sortDataType: 'date' },
  productId: { label: 'Service ID', sortable: true, sortDataType: 'string' },
};

export const exampleTableBody = [
  {
    id: 'NTM000021063',
    nestedContent: {
      template: 'loadingSkeleton',
    },
    active: false,
    selectionDisabled: true,
    print: {
      isNestedContentPrintDisabled: true,
    },
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021063' } },
      {
        template: 'icon',
        payload: { icon: 'circle-check', color: 'success' },
      },
      { template: 'status', payload: { status: 'active' } },
      'Colocation A',
      0,
      { template: 'date', payload: { date: new Date('02/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021071',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021071' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation B',
      1,
      { template: 'date', payload: { date: new Date('03/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021064',
    active: false,
    nestedContent: {
      value: 'asdasdasd',
    },
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021064' } },
      '',
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation B',
      2,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021065',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021065' } },
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
    ],
  },
  {
    id: 'NTM000021066',
    nestedContent: {
      template: 'accordionContent',
      payload: {
        id: 'NTM000021066',
      },
    },
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021066' } },
      '',
      { template: 'status', payload: { status: 'active' } },
      'Colocation a',
      4,
      { template: 'date', payload: { date: new Date('06/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM0000210662',
    selectionDisabled: true,
    nestedContent: {
      table: {
        data: [
          {
            id: 'NTM0000210661',
            data: [
              {
                template: 'ticketId',
                payload: { id: 'NTM0000210661' },
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
            ],
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
                    selectionDisabled: true,
                    data: [
                      {
                        template: 'ticketId',
                        payload: { id: 'NTM0000210661' },
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
                    ],
                  },
                  {
                    id: 'bbb',
                    active: false,
                    data: [
                      {
                        template: 'ticketId',
                        payload: { id: 'NTM0000210662' },
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
                    ],
                  },
                ],
              },
            },
            data: [
              {
                template: 'ticketId',
                payload: { id: 'NTM0000210662' },
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
            ],
          },
        ],
      },
    },
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021067' } },
      '',
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation b',
      11,
      { template: 'date', payload: { date: new Date('07/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021072',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021072' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation c',
      12,
      { template: 'date', payload: { date: new Date('01/06/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM0000210651',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM0000210651' } },
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
    ],
  },
  {
    id: 'NTM000021068',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021068' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      14,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021069',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021069' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      15,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021070',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021070' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      16,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021073',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021073' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      17,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021074',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021074' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      18,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021075',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021075' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      19,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021076',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021076' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      20,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021077',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021077' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      21,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021078',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021078' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      22,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021079',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021079' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      23,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021080',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021080' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      24,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021081',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021081' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      25,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021082',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021082' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      26,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021083',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021083' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      27,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021084',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021084' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      28,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021085',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021085' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      29,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021086',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021086' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      30,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021087',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021087' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      31,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021088',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021088' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      32,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021089',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021089' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      33,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021090',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021090' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      34,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021091',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021091' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      35,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021092',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021092' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      36,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021093',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021093' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      37,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021094',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021094' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      38,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021095',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021095' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      39,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021096',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021096' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      40,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021097',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021097' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      41,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021098',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021098' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      42,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021099',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021099' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      43,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021100',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021100' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      44,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021101',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021101' } },
      {},
      { template: 'status', payload: { status: 'inactive' } },
      'Colocation',
      -0.5,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
  {
    id: 'NTM000021102',
    active: false,
    data: [
      { template: 'ticketId', payload: { id: 'NTM000021102' } },
      {},
      { template: 'status', payload: { status: 'active' } },
      'Colocation',
      -1,
      { template: 'date', payload: { date: new Date('04/05/2018 8:00 AM') } },
      'SVUJW034781A',
    ],
  },
];

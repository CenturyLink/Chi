import { DataTableColumnProps, DataTableConfig, DataTableVisibilityAction } from '@/constants/types';

export const exampleConfig: DataTableConfig = {
  columnResize: true,
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
    compact: true,
    firstLast: true,
    pageJumper: false,
  },
  resultsPerPage: 3,
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
      hide: [DataTableVisibilityAction.MOBILE],
      onClick: () => (location.href = 'https://www.google.com'),
    },
    {
      label: 'Download',
      icon: 'icon-circle-arrow-down',
      hide: [DataTableVisibilityAction.DESKTOP],
      onClick: () => console.log(`downloaded`),
    },
    {
      label: 'Delete',
      icon: 'icon-delete',
      onClick: () => console.log('deleted'),
    },
  ],
};

export const exampleTableHead = {
  name: { label: 'Name', key: true, bold: true },
  id: { label: 'ID', key: true },
  lastLogin: { label: 'Last Login' },
};

export const exampleTableBody = [
  {
    id: 'name-1',
    data: ['Name 1', 'name-1', '18 Dec 2020 3:26 p.m.'],
  },
  {
    id: 'name-2',
    data: ['Name 2', 'name-2', '18 Dec 2020 2:38 a.m.'],
  },
  {
    id: 'name-3',
    data: ['Name 3', 'name-3', '5 Nov 2020 10:15 a.m.'],
  },
  {
    id: 'name-4',
    data: ['Name 4', 'name-4', '18 Dec 2020 3:26 p.m.'],
  },
  {
    id: 'name-5',
    data: ['Name 5', 'name-5', '18 Dec 2020 2:38 a.m.'],
  },
  {
    id: 'name-6',
    data: ['Name 6', 'name-6', '5 Nov 2020 10:15 a.m.'],
  },
];

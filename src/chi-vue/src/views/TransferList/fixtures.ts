export const exampleData = [
  {
    value: 'first',
    label: 'First',
    selected: false,
    locked: false,
    wildcard: false,
  },
  {
    value: 'second',
    label: 'Second',
    selected: false,
    locked: false,
    wildcard: false,
  },
  {
    value: 'third',
    label: 'Third',
    selected: true,
    locked: true,
    wildcard: false,
  },
  {
    value: 'fourth',
    label: 'Fourth',
    selected: true,
    locked: true,
    wildcard: false,
  },
  {
    value: 'fifth',
    label: 'Fifth',
    selected: true,
    locked: false,
    wildcard: false,
  },
  {
    value: 'sixth',
    label: 'Sixth',
    selected: true,
    locked: false,
    wildcard: true,
  },
  {
    value: 'seventh',
    label: 'Seventh',
    selected: true,
    locked: false,
    wildcard: true,
  },
];

export const exampleConfig = {
  searchInput: true,
  checkbox: false,
  columns: {
    from: {
      title: 'From',
      description: 'Description from',
    },
    to: {
      title: 'To',
      description: 'Description to',
    },
  },
};

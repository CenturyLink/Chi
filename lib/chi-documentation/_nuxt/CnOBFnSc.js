import{V as i,N as r}from"./NAah3XrW.js";import{o as b,c as p,a as l,d as n}from"./CEIPSiTs.js";import{_ as h}from"./DlAUqK2U.js";var v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,T=(o,t,u,d)=>{for(var e=d>1?void 0:d?g(t,u):t,a=o.length-1,c;a>=0;a--)(c=o[a])&&(e=(d?c(t,u,e):c(e))||e);return d&&e&&v(t,u,e),e};let s=class extends i{};s=T([r({})],s);function m(o,t,u,d,e,a){return b(),p("div",null,t[0]||(t[0]=[l("h2",null,"JavaScript",-1),l("h3",null,[n("Props"),l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Property")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Interface")]),l("th",null,[l("div",null,"Default")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"config")])]),l("td",null,[l("div",null,"To customize Data table behavior and style")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`{
  columnResize?: `),l("code",null,"boolean"),n(`;
  columnSizes?: {
    xs: `),l("code",null,"number[]"),n(`;
    sm: `),l("code",null,"number[]"),n(`;
    md: `),l("code",null,"number[]"),n(`;
    lg: `),l("code",null,"number[]"),n(`;
    xl: `),l("code",null,"number[]"),n(`;
  };
  defaultSort?: `),l("code",null,"DataTableSortConfig"),n(`;
  unsorted?: `),l("code",null,"boolean"),n(`;
  mode?: `),l("code",null,"'clientside' | 'serverside'"),n(`;
  noResultsMessage?: `),l("code",null,"string"),n(`;
  noFiltersMessage?: `),l("code",null,"string"),n(`;
  pagination: {
    activePage?: `),l("code",null,"number"),n(`;
    compact?: `),l("code",null,"boolean"),n(`;
    firstLast?: `),l("code",null,"boolean"),n(`;
    hideOnSinglePage?: `),l("code",null,"boolean"),n(`;
    pages?: `),l("code",null,"number"),n(`;
    pageJumper?: `),l("code",null,"boolean"),n(`;
    results?: `),l("code",null,"number"),n(`;
  };
  resultsPerPage?: `),l("code",null,"number"),n(`;
  style: `),l("code",null,"DataTableStyleConfig"),n(`;
  selectable?: `),l("code",null,"boolean | 'radio'"),n(`;
  reserveExpansionSlot?: `),l("code",null,"boolean"),n(`;
  truncation?: `),l("code",null,"boolean"),n(`;
  print?: {
    mode?: `),l("code",null,"'full' | 'printonly' | 'screenonly'"),n(`;
    isNestedContentPrintDisabled?: `),l("code",null,"boolean"),n(`;
  },
  treeSelection: `),l("code",null,"boolean"),n(`;
  cellWrap: `),l("code",null,"boolean"),n(`;
  showExpandAll: `),l("code",null,"boolean"),n(`;
  showSelectAllDropdown: `),l("code",null,"boolean"),n(`;
  actions?: `),l("code",null,"DataTableAction[]"),n(`
}`)])]),l("td",null,[l("div",null,"undefined")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"data")])]),l("td",null,[l("div",null,"To provide Data Table with Head and Body related data")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`{
  head: {
    [code: string]: {
      label: `),l("code",null,"string"),n(`;
      icon?: `),l("code",null,"string"),n(`;
      sortable?: `),l("code",null,"boolean"),n(`;
      sortBy?: `),l("code",null,"string"),n(`;
      sortDataType?: `),l("code",null,"'string' | 'number' | 'date' | 'boolean'"),n(`;
      align?: `),l("code",null,"'left' | 'center' | 'right'"),n(`;
      allowOverflow?: `),l("code",null,"'visible' | 'hidden'"),n(`;
      key?: `),l("code",null,"boolean"),n(`;
      bold?: `),l("code",null,"boolean"),n(`;
      description?: `),l("code",null,"string | DataTableColumnDescription"),n(`;
      isPrintDisabled?: `),l("code",null,"boolean"),n(`;
    };
  };
  body: `),l("code",null,"DataTableRow[]"),n(`;
}`)])]),l("td",null,[l("div",null,"undefined")])])])])])])],-1),l("h3",null,[n("Interfaces and types"),l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Name")]),l("th",null,[l("div",null,"Interface")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableRow")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`interface DataTableRow {
  active: `),l("code",null,"boolean"),n(`;
  expanded: `),l("code",null,"boolean"),n(`;
  data: `),l("code",null,"Record <string, any>"),n(`;
  nestedContent: {
    table: {
      data: `),l("code",null,"DataTableRow[]"),n(`;
    };
    template: `),l("code",null,"string"),n(`;
    value: `),l("code",null,"string"),n(`;
    payload: `),l("code",null,"any"),n(`;
  };
  id: `),l("code",null,"string"),n(`;
  selected?: `),l("code",null,"boolean"),n(`;
  selectionDisabled?: `),l("code",null,"boolean"),n(`;
  print?: {
    isNestedContentPrintDisabled?: boolean;
  };
  state?: `),l("code",null,"'success' | 'warning' | 'danger' | 'info'"),n(`;
  autoExpandedAlignment?: `),l("code",null,"boolean"),n(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableStyleConfig")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`interface DataTableStyleConfig {
  portal?: `),l("code",null,"boolean"),n(`;
  compact?: `),l("code",null,"boolean"),n(`;
  bordered?: `),l("code",null,"boolean"),n(`;
  noBorder?: `),l("code",null,"boolean"),n(`;
  hover?: `),l("code",null,"boolean"),n(`;
  striped?: `),l("code",null,"boolean"),n(`;
  size?: `),l("code",null,"DataTableSizes"),n(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableSortConfig")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`interface DataTableSortConfig {
  key: `),l("code",null,"string"),n(`;
  sortBy?: `),l("code",null,"string"),n(`;
  direction: `),l("code",null,"'ascending' | 'descending'"),n(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableSizes")])]),l("td",null,[l("code",null,"'xs' | 'sm' | 'md' | 'lg' | 'xl'")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableColumnDescription")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`interface DataTableColumnDescription {
  title?: `),l("code",null,"string"),n(`;
  text?: `),l("code",null,"string"),n(`;
  template?: `),l("code",null,"string"),n(`;
  payload?: `),l("code",null,"any"),n(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableAction")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`interface DataTableAction: {
  label: `),l("code",null,"string"),n(`;
  icon: `),l("code",null,"string"),n(`;
  onClick: `),l("code",null,"(props: DataTableRow | undefined) => void"),n(`;
  hide?: `),l("code",null,"'desktop' | 'tablet' | 'mobile'"),n(`;
}
`)])])])])])])])],-1),l("h3",null,[n("Methods"),l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Method")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Returns")]),l("th",null,[l("div",null,"Parameters")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"toggleRow() => void")])]),l("td",null,[l("div",{class:"-mb--1"},"To expand / collapse specific rows."),l("div",null,[l("code",null,"rowId"),n(" is created using this pattern: "),l("code",null,"row-dt-${dataTableNumber}-${rowId}")])]),l("td",null,"Type: void"),l("td",null,[l("div",{class:"-mb--1"},[n("row: "),l("code",null," { rowId: string }")]),l("div",null,[n("action?: "),l("code",null,"'expand' | 'collapse'")])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"print() => void")])]),l("td",null,[l("div",null,"To print the data table")]),l("td",null,"Type: void"),l("td",null,[l("div",null,[n("title: "),l("code",null,"string")])])])])])])])],-1),l("h3",null,[n("Events"),l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Event")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Type")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiDataSorting")])]),l("td",null,[l("div",null,"The user has sorted the table by a specific column")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`{
  column: `),l("code",null,"string | undefined"),n(`;
  direction: `),l("code",null,"'ascending' | 'descending' | undefined"),n(`;
  data?: `),l("code",null,"DataTableRow[]"),n(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiPageChange")])]),l("td",null,[l("div",null,"The user changed active page")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`{
  page: `),l("code",null,"number"),n(`;
  data?: `),l("code",null,"DataTableRow[]"),n(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowExpanded")])]),l("td",null,[l("div",null,"The user expanded a row")]),l("td",null,[l("code",null,"DataTableRow")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowCollapsed")])]),l("td",null,[l("div",null,"The user collapsed a row")]),l("td",null,[l("code",null,"DataTableRow")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowClick")])]),l("td",null,[l("div",null,"The user clicks in a row")]),l("td",null,[l("code",null,"DataTableRow")])]),l("tr",null,[l("td",{class:"-d--flex -align-items--center"},[l("div",null,[l("code",null,"chiSelectAll")]),l("chi-badge",{class:"-ml--1",size:"xs"},"Deprecated")]),l("td",null,[l("div",null,"The user selected all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiSelectThisPage")])]),l("td",null,[l("div",null,"The user selected all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",{class:"-d--flex -align-items--center"},[l("div",null,[l("code",null,"chiDeselectAll")]),l("chi-badge",{class:"-m--1",size:"xs"},"Deprecated")]),l("td",null,[l("div",null,"The user deselected all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiDeselectThisPage")])]),l("td",null,[l("div",null,"The user deselected all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiSelectAllPages")])]),l("td",null,[l("div",null,"The user selected all the rows on the table")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiDeselectAllPages")])]),l("td",null,[l("div",null,"The user deselected all the rows on the table")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowSelected")])]),l("td",null,[l("div",null,"The user selected a row")]),l("td",null,[l("code",null,"DataTableRow")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowDeselected")])]),l("td",null,[l("div",null,"The user deselected a row")]),l("td",null,[l("code",null,"DataTableRow")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiShowSelectedRowsOnly")])]),l("td",null,[l("div",null,"The user selected show selected only from bulk actions")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiCancel")])]),l("td",null,[l("div",null,"The user cancelled bulk actions")]),l("td",null,[l("code",null,"undefined")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiExpandAll")])]),l("td",null,[l("div",null,"The user expands all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiCollapseAll")])]),l("td",null,[l("div",null,"The user collapses all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])])])])])])],-1)]))}const x=h(s,[["render",m]]);export{x as default};

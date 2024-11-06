var y=Object.defineProperty;var x=(o,n,d)=>n in o?y(o,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[n]=d;var T=(o,n,d)=>x(o,typeof n!="symbol"?n+"":n,d);import{o as v,c as w,a as l,d as e,f as P,b as c,F as R,v as i}from"./CRBsHPO5.js";import{V as h,N as m}from"./Bdokak_-.js";import C from"./188hrbqF.js";import{_ as g}from"./DlAUqK2U.js";import{_ as $}from"./CIPiXAF4.js";import{s as S}from"./CioVcaN-.js";import{_ as A}from"./Q1fW3UX9.js";import"./Di-ELn2D.js";import"./CcrI_bxZ.js";import"./Cx7J_iiN.js";import"./Bxs95XXX.js";import"./BFAB3cmN.js";import"./BvdXqNz_.js";import"./CFe54mHR.js";var O=Object.defineProperty,E=Object.getOwnPropertyDescriptor,z=(o,n,d,a)=>{for(var t=a>1?void 0:a?E(n,d):n,s=o.length-1,u;s>=0;s--)(u=o[s])&&(t=(a?u(n,d,t):u(t))||t);return a&&t&&O(n,d,t),t};let r=class extends h{};r=z([m({})],r);function B(o,n,d,a,t,s){return v(),w("div",null,n[0]||(n[0]=[l("h2",null,"JavaScript",-1),l("h3",null,[e("Props"),l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Property")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Interface")]),l("th",null,[l("div",null,"Default")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"config")])]),l("td",null,[l("div",null,"To customize Data table behavior and style")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[e(`{
  columnResize?: `),l("code",null,"boolean"),e(`;
  columnSizes?: {
    xs: `),l("code",null,"number[]"),e(`;
    sm: `),l("code",null,"number[]"),e(`;
    md: `),l("code",null,"number[]"),e(`;
    lg: `),l("code",null,"number[]"),e(`;
    xl: `),l("code",null,"number[]"),e(`;
  };
  defaultSort?: `),l("code",null,"DataTableSortConfig"),e(`;
  unsorted?: `),l("code",null,"boolean"),e(`;
  mode?: `),l("code",null,"'clientside' | 'serverside'"),e(`;
  noResultsMessage?: `),l("code",null,"string"),e(`;
  noFiltersMessage?: `),l("code",null,"string"),e(`;
  pagination: {
    activePage?: `),l("code",null,"number"),e(`;
    compact?: `),l("code",null,"boolean"),e(`;
    firstLast?: `),l("code",null,"boolean"),e(`;
    hideOnSinglePage?: `),l("code",null,"boolean"),e(`;
    pages?: `),l("code",null,"number"),e(`;
    pageJumper?: `),l("code",null,"boolean"),e(`;
    results?: `),l("code",null,"number"),e(`;
  };
  resultsPerPage?: `),l("code",null,"number"),e(`;
  style: `),l("code",null,"DataTableStyleConfig"),e(`;
  selectable?: `),l("code",null,"boolean | 'radio'"),e(`;
  reserveExpansionSlot?: `),l("code",null,"boolean"),e(`;
  truncation?: `),l("code",null,"boolean"),e(`;
  print?: {
    mode?: `),l("code",null,"'full' | 'printonly' | 'screenonly'"),e(`;
    isNestedContentPrintDisabled?: `),l("code",null,"boolean"),e(`;
  },
  treeSelection: `),l("code",null,"boolean"),e(`;
  cellWrap: `),l("code",null,"boolean"),e(`;
  showExpandAll: `),l("code",null,"boolean"),e(`;
  showSelectAllDropdown: `),l("code",null,"boolean"),e(`;
  actions?: `),l("code",null,"DataTableAction[]"),e(`
}`)])]),l("td",null,[l("div",null,"undefined")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"data")])]),l("td",null,[l("div",null,"To provide Data Table with Head and Body related data")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[e(`{
  head: {
    [code: string]: {
      label: `),l("code",null,"string"),e(`;
      icon?: `),l("code",null,"string"),e(`;
      sortable?: `),l("code",null,"boolean"),e(`;
      sortBy?: `),l("code",null,"string"),e(`;
      sortDataType?: `),l("code",null,"'string' | 'number' | 'date' | 'boolean'"),e(`;
      align?: `),l("code",null,"'left' | 'center' | 'right'"),e(`;
      allowOverflow?: `),l("code",null,"'visible' | 'hidden'"),e(`;
      key?: `),l("code",null,"boolean"),e(`;
      bold?: `),l("code",null,"boolean"),e(`;
      description?: `),l("code",null,"string | DataTableColumnDescription"),e(`;
      isPrintDisabled?: `),l("code",null,"boolean"),e(`;
    };
  };
  body: `),l("code",null,"DataTableRow[]"),e(`;
}`)])]),l("td",null,[l("div",null,"undefined")])])])])])])],-1),l("h3",null,[e("Interfaces and types"),l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Name")]),l("th",null,[l("div",null,"Interface")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableRow")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[e(`interface DataTableRow {
  active: `),l("code",null,"boolean"),e(`;
  expanded: `),l("code",null,"boolean"),e(`;
  data: `),l("code",null,"Record <string, any>"),e(`;
  nestedContent: {
    table: {
      data: `),l("code",null,"DataTableRow[]"),e(`;
    };
    template: `),l("code",null,"string"),e(`;
    value: `),l("code",null,"string"),e(`;
    payload: `),l("code",null,"any"),e(`;
  };
  id: `),l("code",null,"string"),e(`;
  selected?: `),l("code",null,"boolean"),e(`;
  selectionDisabled?: `),l("code",null,"boolean"),e(`;
  print?: {
    isNestedContentPrintDisabled?: boolean;
  };
  state?: `),l("code",null,"'success' | 'warning' | 'danger' | 'info'"),e(`;
  autoExpandedAlignment?: `),l("code",null,"boolean"),e(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableStyleConfig")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[e(`interface DataTableStyleConfig {
  portal?: `),l("code",null,"boolean"),e(`;
  compact?: `),l("code",null,"boolean"),e(`;
  bordered?: `),l("code",null,"boolean"),e(`;
  noBorder?: `),l("code",null,"boolean"),e(`;
  hover?: `),l("code",null,"boolean"),e(`;
  striped?: `),l("code",null,"boolean"),e(`;
  size?: `),l("code",null,"DataTableSizes"),e(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableSortConfig")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[e(`interface DataTableSortConfig {
  key: `),l("code",null,"string"),e(`;
  sortBy?: `),l("code",null,"string"),e(`;
  direction: `),l("code",null,"'ascending' | 'descending'"),e(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableSizes")])]),l("td",null,[l("code",null,"'xs' | 'sm' | 'md' | 'lg' | 'xl'")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableColumnDescription")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[e(`interface DataTableColumnDescription {
  title?: `),l("code",null,"string"),e(`;
  text?: `),l("code",null,"string"),e(`;
  template?: `),l("code",null,"string"),e(`;
  payload?: `),l("code",null,"any"),e(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableAction")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[e(`interface DataTableAction: {
  label: `),l("code",null,"string"),e(`;
  icon: `),l("code",null,"string"),e(`;
  onClick: `),l("code",null,"(props: DataTableRow | undefined) => void"),e(`;
  hide?: `),l("code",null,"'desktop' | 'tablet' | 'mobile'"),e(`;
}
`)])])])])])])])],-1),l("h3",null,[e("Methods"),l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Method")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Returns")]),l("th",null,[l("div",null,"Parameters")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"toggleRow() => void")])]),l("td",null,[l("div",{class:"-mb--1"},"To expand / collapse specific rows."),l("div",null,[l("code",null,"rowId"),e(" is created using this pattern: "),l("code",null,"row-dt-${dataTableNumber}-${rowId}")])]),l("td",null,"Type: void"),l("td",null,[l("div",{class:"-mb--1"},[e("row: "),l("code",null," { rowId: string }")]),l("div",null,[e("action?: "),l("code",null,"'expand' | 'collapse'")])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"print() => void")])]),l("td",null,[l("div",null,"To print the data table")]),l("td",null,"Type: void"),l("td",null,[l("div",null,[e("title: "),l("code",null,"string")])])])])])])])],-1),l("h3",null,[e("Events"),l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Event")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Type")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiDataSorting")])]),l("td",null,[l("div",null,"The user has sorted the table by a specific column")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[e(`{
  column: `),l("code",null,"string | undefined"),e(`;
  direction: `),l("code",null,"'ascending' | 'descending' | undefined"),e(`;
  data?: `),l("code",null,"DataTableRow[]"),e(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiPageChange")])]),l("td",null,[l("div",null,"The user changed active page")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[e(`{
  page: `),l("code",null,"number"),e(`;
  data?: `),l("code",null,"DataTableRow[]"),e(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowExpanded")])]),l("td",null,[l("div",null,"The user expanded a row")]),l("td",null,[l("code",null,"DataTableRow")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowCollapsed")])]),l("td",null,[l("div",null,"The user collapsed a row")]),l("td",null,[l("code",null,"DataTableRow")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowClick")])]),l("td",null,[l("div",null,"The user clicks in a row")]),l("td",null,[l("code",null,"DataTableRow")])]),l("tr",null,[l("td",{class:"-d--flex -align-items--center"},[l("div",null,[l("code",null,"chiSelectAll")]),l("chi-badge",{class:"-ml--1",size:"xs"},"Deprecated")]),l("td",null,[l("div",null,"The user selected all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiSelectThisPage")])]),l("td",null,[l("div",null,"The user selected all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",{class:"-d--flex -align-items--center"},[l("div",null,[l("code",null,"chiDeselectAll")]),l("chi-badge",{class:"-m--1",size:"xs"},"Deprecated")]),l("td",null,[l("div",null,"The user deselected all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiDeselectThisPage")])]),l("td",null,[l("div",null,"The user deselected all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiSelectAllPages")])]),l("td",null,[l("div",null,"The user selected all the rows on the table")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiDeselectAllPages")])]),l("td",null,[l("div",null,"The user deselected all the rows on the table")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowSelected")])]),l("td",null,[l("div",null,"The user selected a row")]),l("td",null,[l("code",null,"DataTableRow")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowDeselected")])]),l("td",null,[l("div",null,"The user deselected a row")]),l("td",null,[l("code",null,"DataTableRow")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiShowSelectedRowsOnly")])]),l("td",null,[l("div",null,"The user selected show selected only from bulk actions")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiCancel")])]),l("td",null,[l("div",null,"The user cancelled bulk actions")]),l("td",null,[l("code",null,"undefined")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiExpandAll")])]),l("td",null,[l("div",null,"The user expands all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiCollapseAll")])]),l("td",null,[l("div",null,"The user collapses all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])])])])])])],-1)]))}const N=g(r,[["render",B]]);var j=Object.defineProperty,I=Object.getOwnPropertyDescriptor,M=(o,n,d,a)=>{for(var t=a>1?void 0:a?I(n,d):n,s=o.length-1,u;s>=0;s--)(u=o[s])&&(t=(a?u(n,d,t):u(t))||t);return a&&t&&j(n,d,t),t};let p=class extends h{};p=M([m({})],p);function V(o,n,d,a,t,s){const u=$;return v(),P(u)}const F=g(p,[["render",V]]);var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,L=(o,n,d,a)=>{for(var t=a>1?void 0:a?J(n,d):n,s=o.length-1,u;s>=0;s--)(u=o[s])&&(t=(a?u(n,d,t):u(t))||t);return a&&t&&H(n,d,t),t};let b=class extends h{constructor(){super(...arguments);T(this,"pageTabs",S)}};b=L([m({components:{Accessibility:F,Examples:C,Properties:N}})],b);const U={class:"chi-grid__container -pt--3"},W={class:"chi-tabs-panel -active",id:"examples"},q={class:"chi-tabs-panel",id:"properties"},G={class:"chi-tabs-panel",id:"accessibility"};function K(o,n,d,a,t,s){const u=A,D=i("Examples"),f=i("Properties"),_=i("Accessibility");return v(),w(R,null,[c(u,{title:"Data table",description:"Data tables are used to present data sets in a simple and organized way. Unlike standard HTML Table, it is responsive and compatible with all the screen sizes.",tabs:o.pageTabs},null,8,["tabs"]),l("div",U,[l("div",W,[c(D)]),l("div",q,[c(f)]),l("div",G,[c(_)])])],64)}const pl=g(b,[["render",K]]);export{pl as default};

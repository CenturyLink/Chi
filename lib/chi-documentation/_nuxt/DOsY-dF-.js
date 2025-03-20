import{_ as s}from"./Dg5y4kC1.js";import{_ as r}from"./CWc49wuB.js";import{_ as c}from"./8Rn8z3Rm.js";import{c as b,o as u,a as l,d as n,b as t,w as o,e as p,f as v}from"./BnvmtQYM.js";import{_ as m}from"./DlAUqK2U.js";import"./Bk5Nr_bJ.js";import"./CfKaToPi.js";import"./CpGl5nKs.js";import"./DhIYcLiR.js";import"./Cr4Krhex.js";import"./Zvpnuh4B.js";import"./DD5d-mQ_.js";import"./CtNiOt5b.js";import"./XzazPaSj.js";const g={class:"chi-table chi-table__options -bordered -my--3"},T={style:{"overflow-x":"auto"}},D={class:"-types -text",cellpadding:"0",cellspacing:"0"},w={class:"-d--flex -align-items--center"},f={class:"-d--flex -align-items--center"};function h(a,e){const d=c;return u(),b("div",null,[e[25]||(e[25]=l("h2",null,"Chi Vue",-1)),e[26]||(e[26]=l("h3",null,"Props",-1)),e[27]||(e[27]=l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Property")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Interface")]),l("th",null,[l("div",null,"Default")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"config")])]),l("td",null,[l("div",null,"To customize Data table behavior and style")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`{
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
  noResultsIcon?: `),l("code",null,"string"),n(`;
  noFiltersMessage?: `),l("code",null,"string"),n(`;
  noFiltersIcon?: `),l("code",null,"string"),n(`;
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
  emptyActionable?: `),l("code",null,"DataTableEmptyActionableConfig"),n(`;
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
}`)])]),l("td",null,[l("div",null,"undefined")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"dataTableData")])]),l("td",null,[l("div",null,"To provide Data Table with Head and Body related data")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`{
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
}`)])]),l("td",null,[l("div",null,"undefined")])])])])])],-1)),e[28]||(e[28]=l("h3",null,"Interfaces and types",-1)),e[29]||(e[29]=l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Name")]),l("th",null,[l("div",null,"Interface")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableRow")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`interface DataTableRow {
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
  selectableDisabledMessage?: `),l("code",null,"string"),n(`;
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
  direction: `),l("code",null,"'ascending' | 'descending'"),n(`;
  fullServerSort?: `),l("code",null,"boolean"),n(`;
  key: `),l("code",null,"string"),n(`;
  sortBy?: `),l("code",null,"string"),n(`;
}`)])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"DataTableEmptyActionableConfig")])]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`interface DataTableEmptyActionableConfig {
  isActionable?: `),l("code",null,"boolean"),n(`;
  icon?: `),l("code",null,"string"),n(`;
  message?: {
    actionLink?: `),l("code",null,"string"),n(`;
    text?: `),l("code",null,"string"),n(`;
  };
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
`)])])])])])])],-1)),e[30]||(e[30]=l("h3",null,"Methods",-1)),e[31]||(e[31]=l("section",{class:"chi-table chi-table__options -bordered -my--3"},[l("div",{style:{"overflow-x":"auto"}},[l("table",{class:"-text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Method")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Returns")]),l("th",null,[l("div",null,"Parameters")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"toggleRow() => void")])]),l("td",null,[l("div",{class:"-mb--1"},"To expand / collapse specific rows.")]),l("td",null,"Type: void"),l("td",null,[l("div",{class:"-mb--1"},[n("row: "),l("code",null," { rowId: string }")]),l("div",null,[n("action?: "),l("code",null,"'expand' | 'collapse'")])])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"print() => void")])]),l("td",null,[l("div",null,"To print the data table")]),l("td",null,"Type: void"),l("td",null,[l("div",null,[n("title: "),l("code",null,"string")])])])])])])],-1)),e[32]||(e[32]=l("h3",null,"Events",-1)),l("section",g,[l("div",T,[l("table",D,[e[24]||(e[24]=l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Event")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Type")])])],-1)),l("tbody",null,[e[8]||(e[8]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiDataSorting")])]),l("td",null,[l("div",null,"The user has sorted the table by a specific column")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`{
  column: `),l("code",null,"string | undefined"),n(`;
  direction: `),l("code",null,"'ascending' | 'descending' | undefined"),n(`;
  data?: `),l("code",null,"DataTableRow[]"),n(`;
}`)])])],-1)),e[9]||(e[9]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiPageChange")])]),l("td",null,[l("div",null,"The user changed active page")]),l("td",{class:"-p--0"},[l("pre",{class:"-mb--0"},[n(`{
  page: `),l("code",null,"number"),n(`;
  data?: `),l("code",null,"DataTableRow[]"),n(`;
}`)])])],-1)),e[10]||(e[10]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowExpanded")])]),l("td",null,[l("div",null,"The user expanded a row")]),l("td",null,[l("code",null,"DataTableRow")])],-1)),e[11]||(e[11]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowClick")])]),l("td",null,[l("div",null,"The user clicks in a row")]),l("td",null,[l("code",null,"DataTableRow")])],-1)),e[12]||(e[12]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowCollapsed")])]),l("td",null,[l("div",null,"The user collapsed a row")]),l("td",null,[l("code",null,"DataTableRow")])],-1)),l("tr",null,[l("td",w,[e[1]||(e[1]=l("div",null,[l("code",null,"chiSelectAll")],-1)),t(d,null,{default:o(()=>e[0]||(e[0]=[l("chi-badge",{class:"-ml--1",size:"xs"},"Deprecated",-1)])),_:1})]),e[2]||(e[2]=l("td",null,[l("div",null,"The user selected all the rows on the page")],-1)),e[3]||(e[3]=l("td",null,[l("code",null,"DataTableRow[]")],-1))]),e[13]||(e[13]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiSelectThisPage")])]),l("td",null,[l("div",null,"The user selected all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])],-1)),l("tr",null,[l("td",f,[e[5]||(e[5]=l("div",null,[l("code",null,"chiDeselectAll")],-1)),t(d,null,{default:o(()=>e[4]||(e[4]=[l("chi-badge",{class:"-m--1",size:"xs"},"Deprecated",-1)])),_:1})]),e[6]||(e[6]=l("td",null,[l("div",null,"The user deselected all the rows on the page")],-1)),e[7]||(e[7]=l("td",null,[l("code",null,"DataTableRow[]")],-1))]),e[14]||(e[14]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiDeselectThisPage")])]),l("td",null,[l("div",null,"The user deselected all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])],-1)),e[15]||(e[15]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiSelectAllPages")])]),l("td",null,[l("div",null,"The user selected all the rows on the table")]),l("td",null,[l("code",null,"DataTableRow[]")])],-1)),e[16]||(e[16]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiDeselectAllPages")])]),l("td",null,[l("div",null,"The user deselected all the rows on the table")]),l("td",null,[l("code",null,"DataTableRow[]")])],-1)),e[17]||(e[17]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowSelected")])]),l("td",null,[l("div",null,"The user selected a row")]),l("td",null,[l("code",null,"DataTableRow")])],-1)),e[18]||(e[18]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiRowDeselected")])]),l("td",null,[l("div",null,"The user deselected a row")]),l("td",null,[l("code",null,"DataTableRow")])],-1)),e[19]||(e[19]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiShowSelectedRowsOnly")])]),l("td",null,[l("div",null,"The user selected show selected only from bulk actions")]),l("td",null,[l("code",null,"DataTableRow[]")])],-1)),e[20]||(e[20]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiCancel")])]),l("td",null,[l("div",null,"The user cancelled bulk actions")]),l("td",null,[l("code",null,"undefined")])],-1)),e[21]||(e[21]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiExpandAll")])]),l("td",null,[l("div",null,"The user expands all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])],-1)),e[22]||(e[22]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiCollapseAll")])]),l("td",null,[l("div",null,"The user collapses all the rows on the page")]),l("td",null,[l("code",null,"DataTableRow[]")])],-1)),e[23]||(e[23]=l("tr",null,[l("td",null,[l("div",null,[l("code",null,"chiEmptyActionableLink")])]),l("td",null,[l("div",null,"The user clicks the empty actionable link")]),l("td",null,[l("code",null,"undefined")])],-1))])])])])])}const y={},x=m(y,[["render",h]]),V=p({__name:"index",setup(a){return(e,d)=>{const i=s;return u(),v(i,{"hide-builder":"",title:"Data table",description:"Data tables are used to present data sets in a simple and organized way. Unlike standard HTML Table, it is responsive and compatible with all the screen sizes."},{examples:o(()=>[t(r)]),properties:o(()=>[t(x)]),_:1})}}});export{V as default};

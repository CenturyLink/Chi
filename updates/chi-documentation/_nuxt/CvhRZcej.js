import{V as g,N as v}from"./uJTUijt2.js";import{_ as f}from"./drvuhYu1.js";import{_ as y}from"./D8GK0F__.js";import{_ as w}from"./DKu8Jd2y.js";import{o as c,c as d,b as r,F as _,i as C,r as M,f as D,w as p,h as L}from"./B5CYXVwa.js";import{_ as P}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./2EwpEKcw.js";var $=Object.defineProperty,x=Object.getOwnPropertyDescriptor,R=(e,i,n,s)=>{for(var t=s>1?void 0:s?x(i,n):i,l=e.length-1,o;l>=0;l--)(o=e[l])&&(t=(s?o(i,n,t):o(t))||t);return s&&t&&$(i,n,t),t};let u=class extends g{};u=R([v({data:()=>({emptyDataTables:[{title:"No Results",id:"no-results-data-table",description:"Use <code>noResultsMessage</code> config to customize the no results data message",config:{noResultsMessage:"No matching results"}},{title:"No Filters",id:"no-filters-data-table",description:"Use <code>noFiltersMessage</code> config to customize the no filters data message.",config:{noFiltersMessage:"Search for or select at least one filter to get results"}},{title:"Empty Actionable",id:"empty-actionable-data-table",description:null,config:{emptyActionable:{isActionable:!0}}}],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[]}}),methods:{getConfig(e){return{...this.config,...e.noFiltersMessage?{noResultsMessage:e.noFiltersMessage}:e}},getTableEmptyRow(e){return e.emptyActionable?`<div>
        <i class="chi-icon icon-circle-plus-outline -icon--grey -lg" aria-hidden="true"></i>
        <span>
          <a>Add a new or existing service</a>, then manage here.
        </span>
      </div>`:`<i class="-mr--1 chi-icon icon-search"></i>
      <div>${e.noFiltersMessage||e.noResultsMessage}</div>`},getVueCode(e){return`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,${e.noFiltersMessage?`
    noFiltersMessage: '${e.noFiltersMessage}',`:""}${e.noResultsMessage?`
    noResultsMessage: '${e.noResultsMessage}',`:""}
    style: {
      portal: false,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: false,
    },
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },${e.emptyActionable?`
    emptyActionable: {
      isActionable: true,
    },`:""}
    resultsPerPage: 3,
  },
  table: {
    head: {
      name: { label: 'Name' },
      id: { label: 'ID' },
      lastLogin: { label: 'Last Login' },
    },
    body: []
  }
}`},getHtmlCode(e){return`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell">
        <div>Name</div>
      </div>
      <div class="chi-data-table__cell">
        <div>ID</div>
      </div>
      <div class="chi-data-table__cell">
        <div>Last Login</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row-empty${e.emptyActionable?" -actionable":""}">
      ${this.getTableEmptyRow(e)}
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-1">20</button>
              <div class="chi-dropdown__menu -w--xs">
                <a class="chi-dropdown__menu-item -active" href="#">20</a>
                <a class="chi-dropdown__menu-item" href="#">40</a>
                <a class="chi-dropdown__menu-item" href="#">60</a>
                <a class="chi-dropdown__menu-item" href="#">80</a>
                <a class="chi-dropdown__menu-item" href="#">All</a>
              </div>
            </div>
            <span class="chi-pagination__label">per page</span>
          </div>
        </div>
        <div class="chi-pagination__center">
          <div class="chi-pagination__button-group chi-button-group">
            <button class="chi-button -icon -flat" aria-label="Previous page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
              </div>
            </button>
            <button class="chi-button -flat -active" aria-label="Page 1">1</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-1">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-1" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`}}})],u);const A=["innerHTML"];function F(e,i,n,s,t,l){const o=f,b=M("ChiDataTable"),m=y,h=w;return c(),d(_,null,[r(o,{title:"Empty"}),(c(!0),d(_,null,C(e.emptyDataTables,a=>(c(),D(h,{title:a.title,titleSize:"h4",id:a.id,key:a.id,tabs:e.exampleTabs},{example:p(()=>[r(b,{config:e.getConfig(a.config),dataTableData:e.table},null,8,["config","dataTableData"])]),"code-htmlblueprint":p(()=>[r(m,{lang:"html",code:e.getHtmlCode(a.config)},null,8,["code"])]),"code-vue":p(()=>[a.description?(c(),d("div",{key:0,class:"chi-tab__description",innerHTML:a.description},null,8,A)):L("",!0),r(m,{lang:"html",code:e.getVueCode(a.config)},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),128))],64)}const O=P(u,[["render",F]]);export{O as default};

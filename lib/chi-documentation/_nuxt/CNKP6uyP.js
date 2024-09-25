import{V as g,N as v}from"./NAah3XrW.js";import{_ as f}from"./BJfyOiY6.js";import{_ as y}from"./onyWiYp2.js";import{_ as w}from"./CAQzZ0uH.js";import{o as c,c as d,b as r,F as b,i as C,m as M,h as D,w as p,l as L}from"./CEIPSiTs.js";import{_ as P}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./DtNz156Q.js";var $=Object.defineProperty,R=Object.getOwnPropertyDescriptor,A=(e,i,l,s)=>{for(var a=s>1?void 0:s?R(i,l):i,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(s?o(i,l,a):o(a))||a);return s&&a&&$(i,l,a),a};let u=class extends g{};u=A([v({data:()=>({emptyDataTables:[{title:"No Results",id:"no-results-data-table",description:"Use <code>noResultsMessage</code> config to customize the no results data message",config:{noResultsMessage:"No matching results"}},{title:"No Filters",id:"no-filters-data-table",description:"Use <code>noFiltersMessage</code> config to customize the no filters data message.",config:{noFiltersMessage:"Search for or select at least one filter to get results"}},{title:"Empty Actionable",id:"empty-actionable-data-table",description:null,config:{emptyActionable:{isActionable:!0}}}],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[]}}),methods:{getConfig(e){return{...this.config,...e.noFiltersMessage?{noResultsMessage:e.noFiltersMessage}:e}},getTableEmptyRow(e){return e.emptyActionable?`<div>
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
</div>`}}})],u);const F=["innerHTML"];function N(e,i,l,s,a,n){const o=f,h=M("ChiDataTable"),m=y,_=w;return c(),d(b,null,[r(o,{title:"Empty"}),(c(!0),d(b,null,C(e.emptyDataTables,t=>(c(),D(_,{title:t.title,titleSize:"h4",id:t.id,key:t.id,tabs:e.exampleTabs},{example:p(()=>[r(h,{config:e.getConfig(t.config),dataTableData:e.table},null,8,["config","dataTableData"])]),"code-htmlblueprint":p(()=>[r(m,{lang:"html",code:e.getHtmlCode(t.config)},null,8,["code"])]),"code-vue":p(()=>[t.description?(c(),d("div",{key:0,class:"chi-tab__description",innerHTML:t.description},null,8,F)):L("",!0),r(m,{lang:"html",code:e.getVueCode(t.config)},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),128))],64)}const O=P(u,[["render",N]]);export{O as default};

import{V as _,N as f}from"./NAah3XrW.js";import{_ as y}from"./BJfyOiY6.js";import{_ as C}from"./onyWiYp2.js";import{_ as M}from"./CAQzZ0uH.js";import{o as c,c as p,b as r,F as m,i as D,m as L,h as P,w as u,a as d,l as $}from"./CEIPSiTs.js";import{_ as F}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./DtNz156Q.js";var N=Object.defineProperty,R=Object.getOwnPropertyDescriptor,T=(e,i,n,s)=>{for(var t=s>1?void 0:s?R(i,n):i,l=e.length-1,o;l>=0;l--)(o=e[l])&&(t=(s?o(i,n,t):o(t))||t);return s&&t&&N(i,n,t),t};let b=class extends _{};b=T([f({data:()=>({emptyDataTables:[{title:"No Results",id:"no-results-data-table",description:"Use <code>noResultsMessage</code> config to customize the no results data message",config:{noResultsMessage:"No matching results"}},{title:"No Filters",id:"no-filters-data-table",description:"Use <code>noFiltersMessage</code> config to customize the no filters data message",config:{noFiltersMessage:"Search for or select at least one filter to get results"}},{title:"Empty Actionable",id:"empty-actionable-data-table",description:null,config:{emptyActionable:{isActionable:!0}}}],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[]}}),methods:{getConfig(e){return{...this.config,...e.noFiltersMessage?{noResultsMessage:e.noFiltersMessage}:e}},getTableEmptyRow(e){return e.emptyActionable?`<div>
        <i class="chi-icon icon-circle-plus-outline -icon--grey -lg" aria-hidden="true"></i>
        <span>
          <a>Add a new or existing service</a>, then manage here.
        </span>
      </div>`:`<i class="-mr--1 chi-icon icon-search -icon--dark"></i>
      <div>${e.noFiltersMessage||e.noResultsMessage}</div>`},getVueCode(e){return`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,${e.noFiltersMessage?`
    noFiltersMessage: '${e.noFiltersMessage}',`:""}${e.noResultsMessage?`
    noResultsMessage: '${e.noResultsMessage}',`:""}
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
}`},getHtmlCode(e){return`<div class="chi-data-table -portal -compact">
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
    <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
        <div class="chi-pagination__content">
          <div class="chi-pagination__start">
          </div>
          <div class="chi-pagination__center">
            <div class="chi-pagination__button-group chi-button-group">
              <button class="chi-button -icon -flat -xs" aria-label="First page" disabled>
                <div class="chi-button__content">
                  <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                </div>
              </button>
              <button class="chi-button -icon -flat -xs" aria-label="Previous page" disabled>
                <div class="chi-button__content">
                  <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                </div>
              </button>
            </div>
            <div class="chi-pagination__label">
              <strong>1</strong>
              <span>of</span>
              <strong>1</strong>
            </div>
            <div class="chi-pagination__button-group chi-button-group">
              <button class="chi-button -icon -flat -xs" aria-label="Next page" disabled>
                <div class="chi-button__content">
                  <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
                </div>
              </button>
              <button class="chi-button -icon -flat -xs" aria-label="Last page" disabled>
                <div class="chi-button__content">
                  <i class="chi-icon icon-page-last" aria-hidden="true"></i>
                </div>
              </button>
            </div>
          </div>
          <div class="chi-pagination__end"></div>
        </div>
      </nav>
  </div>
</div>`}}})],b);const w={class:"chi-card -portal -bg--white"},x={class:"chi-card__content -p--0"},A=["innerHTML"];function V(e,i,n,s,t,l){const o=y,h=L("ChiDataTable"),g=C,v=M;return c(),p(m,null,[r(o,{title:"Empty"}),(c(!0),p(m,null,D(e.emptyDataTables,a=>(c(),P(v,{title:a.title,titleSize:"h4",id:a.id,key:a.id,tabs:e.exampleTabs},{example:u(()=>[d("div",w,[i[0]||(i[0]=d("div",{class:"chi-card__header -sm"},[d("div",{class:"chi-card__title"},"Title")],-1)),d("div",x,[r(h,{config:e.getConfig(a.config),dataTableData:e.table},null,8,["config","dataTableData"])])])]),"code-vue":u(()=>[a.description?(c(),p("div",{key:0,class:"chi-tab__description",innerHTML:a.description},null,8,A)):$("",!0),r(g,{lang:"html",code:e.getVueCode(a.config)},null,8,["code"])]),"code-htmlblueprint":u(()=>[r(g,{lang:"html",code:e.getHtmlCode(a.config)},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),128))],64)}const S=F(b,[["render",V]]);export{S as default};

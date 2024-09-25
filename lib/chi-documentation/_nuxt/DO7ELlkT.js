import{V as u,N as g}from"./NAah3XrW.js";import{_ as h}from"./onyWiYp2.js";import{_ as f}from"./CAQzZ0uH.js";import{o as p,c as D,i as N,F as w,m as C,h as L,w as o,b as c,a as r,d as m}from"./CEIPSiTs.js";import{_ as y}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var P=Object.defineProperty,T=Object.getOwnPropertyDescriptor,x=(a,t,s,n)=>{for(var e=n>1?void 0:n?T(t,s):t,d=a.length-1,l;d>=0;d--)(l=a[d])&&(e=(n?l(t,s,e):l(e))||e);return n&&e&&P(t,s,e),e};let b=class extends u{};b=x([g({data:()=>({sortingTypes:[{title:"Sorting",id:"sorting-data-table",defaultSort:null},{title:"Default Sorting -- Ascending",id:"sorting-ascending-data-table",defaultSort:{key:"name",direction:"ascending"}},{title:"Default Sorting -- Descending",id:"sorting-descending-data-table",defaultSort:{key:"name",direction:"descending"}}],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},table:{head:{name:{label:"Name",sortable:!0,sortDataType:"string"},id:{label:"ID",sortable:!0,sortDataType:"string"},lastLogin:{label:"Last Login",sortable:!0,sortDatatype:"date"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]}}),methods:{getConfig(a){return{...this.config,...a?{defaultSort:a}:{}}},getHtmlCode(a){return`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <button class="chi-data-table__cell -sorting${a?" -active":""}${(a==null?void 0:a.direction)==="descending"?" -descending":""}">
        <div class="-mr--1">Name</div>
        <i class="chi-icon -xs ${a?"icon-arrow-up":"icon-arrow-sort"}"${(a==null?void 0:a.direction)==="ascending"?'style="transform: rotate(180deg);"':""} aria-hidden="true"></i>
      </button>
      <button class="chi-data-table__cell -sorting">
        <div class="-mr--1">ID</div>
        <i class="chi-icon -xs icon-arrow-sort" aria-hidden="true"></i>
      </button>
      <button class="chi-data-table__cell -sorting">
        <div class="-mr--1">Last Login</div>
        <i class="chi-icon -xs icon-arrow-sort" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="chi-data-table__body">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 1</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-1</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 3:26 p.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 2</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-2</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 2:38 a.m.</div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 3</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-3</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>5 Nov 2020 10:15 a.m.</div>
      </div>
    </div>
  </div>
  <div class="chi-data-table__footer">
    <nav class="chi-pagination" role="navigation" aria-label="Pagination">
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          <div class="chi-pagination__results">
            <span class="chi-pagination__label">6 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-10">20</button>
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
            <button class="chi-button -flat" aria-label="Page 2">2</button>
            <button class="chi-button -icon -flat" aria-label="Next page">
              <div class="chi-button__content">
                <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div class="chi-pagination__end">
          <div class="chi-pagination__jumper">
            <label class="chi-pagination__label" for="jumper-input-10">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-10" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`},getVueCode(a){return`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    style: {
      portal: false,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: false,
    },${a?`
    defaultSort: {
      key: 'name',
      direction: '${a.direction}',
    },`:""}
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },
    resultsPerPage: 3,
  },
  table: {
    head: {
      name: { label: 'Name', sortable: true, sortDataType: 'string' },
      id: { label: 'ID', sortable: true, sortDataType: 'string' },
      lastLogin: { label: 'Last Login', sortable: true, sortDatatype: 'date' },
    },
    body: [
      {
        id: 'name-1',
        data: [
          'Name 1',
          'name-1',
          '18 Dec 2020 3:26 p.m.',
        ],
      },
      {
        id: 'name-2',
        data: [
          'Name 2',
          'name-2',
          '18 Dec 2020 2:38 a.m.',
        ],
      },
      {
        id: 'name-3',
        data: [
          'Name 3',
          'name-3',
          '5 Nov 2020 10:15 a.m.',
        ],
      },
      {
        id: 'name-4',
        data: [
          'Name 4',
          'name-4',
          '18 Dec 2020 3:26 p.m.',
        ],
      },
      {
        id: 'name-5',
        data: [
          'Name 5',
          'name-5',
          '18 Dec 2020 2:38 a.m.',
        ],
      },
      {
        id: 'name-6',
        data: [
          'Name 6',
          'name-6',
          '5 Nov 2020 10:15 a.m.',
        ],
      },
    ]
  }
}`}}})],b);function $(a,t,s,n,e,d){const l=C("ChiDataTable"),v=h,_=f;return p(!0),D(w,null,N(a.sortingTypes,i=>(p(),L(_,{key:i.id,title:i.title,id:i.id,tabs:a.exampleTabs},{example:o(()=>[c(l,{config:a.getConfig(i.defaultSort),dataTableData:a.table},null,8,["config","dataTableData"])]),"code-vue":o(()=>[t[0]||(t[0]=r("div",{class:"chi-tab__description"},[m("Use "),r("code",null,"sortBy"),m(" and "),r("code",null,"sortDataType"),m(" properties to make the column sortable")],-1)),c(v,{code:a.getVueCode(i.defaultSort),lang:"html"},null,8,["code"])]),"code-htmlblueprint":o(()=>[c(v,{code:a.getHtmlCode(i.defaultSort),lang:"html"},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),128)}const A=y(b,[["render",$]]);export{A as default};

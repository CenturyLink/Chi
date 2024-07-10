import{V as _,N as h}from"./uJTUijt2.js";import{_ as u}from"./D8GK0F__.js";import{_ as g}from"./DKu8Jd2y.js";import{o as s,c as f,i as N,F as D,r as L,f as m,w as c,a as C,b as p}from"./B5CYXVwa.js";import{_ as w}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var B=Object.defineProperty,P=Object.getOwnPropertyDescriptor,$=(a,t,l,d)=>{for(var e=d>1?void 0:d?P(t,l):t,n=a.length-1,o;n>=0;n--)(o=a[n])&&(e=(d?o(t,l,e):o(e))||e);return d&&e&&B(t,l,e),e};let r=class extends _{};r=$([h({data:()=>({styledDataTables:[{title:"No Border",id:"no-border-data-table",description:"Use <code>noBorder</code> config to remove the borders",style:{noBorder:!0}},{title:"Striped",id:"striped-data-table",description:"Use <code>striped</code> config to achieve striped styles",style:{striped:!0}},{title:"Hover",id:"hover-data-table",description:"Use <code>hover</code> config to achieve hover styles",style:{hover:!0}},{title:"Bordered",id:"bordered-data-table",description:"Use <code>bordered</code> config to achieve bordered styles",style:{bordered:!0}}],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]}}),methods:{getConfig(a){return{...this.config,style:{...this.config.style,...a}}},getVueCode(a){return`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    style: {
      portal: false,
      noBorder: ${!!a.noBorder},
      bordered: ${!!a.bordered},
      hover: ${!!a.hover},
      size: 'md',
      striped: ${!!a.striped},
    },
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
      name: { label: 'Name' },
      id: { label: 'ID' },
      lastLogin: { label: 'Last Login' },
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
}`},getHtmlCode(a){return`<div class="chi-data-table${a.noBorder?" -no-border":""}${a.bordered?" -bordered":""}${a.hover?" -hover":""}">
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
    <div class="chi-data-table__row ${a.striped?"-striped":""}" >
      <div class="chi-data-table__cell" data-label="Name" >
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
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-2">20</button>
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
            <label class="chi-pagination__label" for="jumper-input-2">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-2" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`}}})],r);const y=["innerHTML"];function x(a,t,l,d,e,n){const o=L("ChiDataTable"),v=u,b=g;return s(!0),f(D,null,N(a.styledDataTables,i=>(s(),m(b,{title:i.title,key:i.id,id:i.id,tabs:a.exampleTabs},{example:c(()=>[(s(),m(o,{config:a.getConfig(i.style),key:i.id,dataTableData:a.table},null,8,["config","dataTableData"]))]),"code-vue":c(()=>[C("div",{class:"chi-tab__description",innerHTML:i.description},null,8,y),p(v,{lang:"html",code:a.getVueCode(i.style)},null,8,["code"])]),"code-htmlblueprint":c(()=>[p(v,{lang:"html",code:a.getHtmlCode(i.style)},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),128)}const M=w(r,[["render",x]]);export{M as default};

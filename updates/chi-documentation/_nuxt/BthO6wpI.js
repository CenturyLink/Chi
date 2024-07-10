import{V as m,N as _}from"./uJTUijt2.js";import{_ as u}from"./D8GK0F__.js";import{_ as h}from"./DKu8Jd2y.js";import{o as f,f as g,w as c,r as N,b as o,a as v,d as b}from"./B5CYXVwa.js";import{_ as D}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var x=Object.defineProperty,C=Object.getOwnPropertyDescriptor,w=(a,t,l,i)=>{for(var e=i>1?void 0:i?C(t,l):t,d=a.length-1,n;d>=0;d--)(n=a[d])&&(e=(i?n(t,l,e):n(e))||e);return i&&e&&x(t,l,e),e};let s=class extends m{};s=w([_({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},showExpandAll:!0,resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[{expanded:!0,id:"name-1",nestedContent:{value:"Accordion content"},data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",nestedContent:{value:"Accordion content"},data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",nestedContent:{value:"Accordion content"},data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",nestedContent:{value:"Accordion content"},data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",nestedContent:{value:"Accordion content"},data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",nestedContent:{value:"Accordion content"},data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
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
    },
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: false,
      pageJumper: true,
    },
    showExpandAll: true,
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
        expanded: true,
        id: 'name-1',
        nestedContent: {
            value: "Accordion content",
        },
        data: [
          'Name 1',
          'name-1',
          '18 Dec 2020 3:26 p.m.',
        ],
      },
      {
        id: 'name-2',
        nestedContent: {
            value: "Accordion content",
        },
        data: [
          'Name 2',
          'name-2',
          '18 Dec 2020 2:38 a.m.',
        ],
      },
      {
        id: 'name-3',
        nestedContent: {
            value: "Accordion content",
        },
        data: [
          'Name 3',
          'name-3',
          '5 Nov 2020 10:15 a.m.',
        ],
      },
      {
        id: 'name-4',
        nestedContent: {
            value: "Accordion content",
        },
        data: [
          'Name 4',
          'name-4',
          '18 Dec 2020 3:26 p.m.',
        ],
      },
      {
        id: 'name-5',
        nestedContent: {
            value: "Accordion content",
        },
        data: [
          'Name 5',
          'name-5',
          '18 Dec 2020 2:38 a.m.',
        ],
      },
      {
        id: 'name-6',
        nestedContent: {
            value: "Accordion content",
        },
        data: [
          'Name 6',
          'name-6',
          '5 Nov 2020 10:15 a.m.',
        ],
      },
    ]
  }
}`,htmlblueprint:`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -expandable -position--relative">
        <button class="chi-button -icon -flat -expand -sm">
          <div class="chi-button__content">
            <i class="chi-icon icon-squares-plus-outline"></i>
          </div>
        </button>
      </div>
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
    <div class="chi-data-table__row -expanded">
      <div class="chi-data-table__cell -expandable">
        <button class="chi-button -icon -flat -sm" aria-label="Expand row">
          <div class="chi-button__content">
            <i class="chi-icon icon-minus" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 1</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-1</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 3:26 p.m. </div>
      </div>
    </div>
    <div class="chi-data-table__row-child -p--2">
      <div>Accordion content</div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -expandable">
        <button class="chi-button -icon -flat -sm" aria-label="Expand row">
          <div class="chi-button__content">
            <i class="chi-icon icon-plus" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-data-table__cell" data-label="Name">
        <div>Name 2</div>
      </div>
      <div class="chi-data-table__cell" data-label="ID">
        <div>name-2</div>
      </div>
      <div class="chi-data-table__cell" data-label="Last Login">
        <div>18 Dec 2020 2:38 a.m. </div>
      </div>
    </div>
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -expandable">
        <button class="chi-button -icon -flat -sm" aria-label="Expand row">
          <div class="chi-button__content">
            <i class="chi-icon icon-plus" aria-hidden="true"></i>
          </div>
        </button>
      </div>
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
            <span class="chi-pagination__label">240 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-9">20</button>
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
            <label class="chi-pagination__label" for="jumper-input-9">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-9" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`}})})],s);const A=v("div",{class:"chi-tab__description"},[b("Use "),v("code",null,"nestedContent"),b(" property to provide data for the accordion content.")],-1);function L(a,t,l,i,e,d){const n=N("ChiDataTable"),r=u,p=h;return f(),g(p,{title:"Accordion",id:"accordion-data-table",tabs:a.exampleTabs},{example:c(()=>[o(n,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])]),"code-vue":c(()=>[A,o(r,{lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":c(()=>[o(r,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const j=D(s,[["render",L]]);export{j as default};

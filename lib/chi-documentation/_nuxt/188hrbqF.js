var ra=Object.defineProperty;var ma=(a,t,n)=>t in a?ra(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var W=(a,t,n)=>ma(a,typeof t!="symbol"?t+"":t,n);import{v as m,o as b,f as y,w as o,b as s,a as e,d as u,c as C,F as x,i as L,l as P,n as q,t as K,j as pa}from"./CRBsHPO5.js";import{V as g,N as f}from"./Bdokak_-.js";import{_ as w}from"./Di-ELn2D.js";import{_ as N}from"./Cx7J_iiN.js";import{_ as D}from"./DlAUqK2U.js";import{_ as Q}from"./Bxs95XXX.js";import X from"./BFAB3cmN.js";import Y from"./BvdXqNz_.js";import{_ as va}from"./CcrI_bxZ.js";import"./CioVcaN-.js";var ba=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,ua=(a,t,n,d)=>{for(var i=d>1?void 0:d?ha(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&ba(t,n,i),i};let $=class extends g{};$=ua([f({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},showExpandAll:!0,resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[{expanded:!0,id:"name-1",nestedContent:{value:"Accordion content"},data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",nestedContent:{value:"Accordion content"},data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",nestedContent:{value:"Accordion content"},data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",nestedContent:{value:"Accordion content"},data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",nestedContent:{value:"Accordion content"},data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",nestedContent:{value:"Accordion content"},data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
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
</div>`}})})],$);function _a(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(),y(v,{title:"Accordion",id:"accordion-data-table",tabs:a.exampleTabs},{example:o(()=>[s(l,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])]),"code-vue":o(()=>[t[0]||(t[0]=e("div",{class:"chi-tab__description"},[u("Use "),e("code",null,"nestedContent"),u(" property to provide data for the accordion content.")],-1)),s(r,{lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ga=D($,[["render",_a]]);var fa=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,ya=(a,t,n,d)=>{for(var i=d>1?void 0:d?Da(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&fa(t,n,i),i};let O=class extends g{};O=ya([f({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{active:!0,id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
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
        active: true,
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
}`,htmlblueprint:`<div class="chi-data-table">
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
    <div class="chi-data-table__row -active">
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
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-6">20</button>
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
            <label class="chi-pagination__label" for="jumper-input-6">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-6" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`}})})],O);function wa(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(),y(v,{title:"Active",id:"active-data-table",tabs:a.exampleTabs},{example:o(()=>[s(l,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])]),"code-vue":o(()=>[t[0]||(t[0]=e("div",{class:"chi-tab__description"},[u("Use "),e("code",null,"active"),u(" property to achieve active state of rows")],-1)),s(r,{lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Na=D(O,[["render",wa]]);var Ca=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,La=(a,t,n,d)=>{for(var i=d>1?void 0:d?xa(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&Ca(t,n,i),i};let z=class extends g{};z=La([f({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
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
}`,htmlblueprint:`<div class="chi-data-table">
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
            <label class="chi-pagination__label" for="jumper-input-1">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-1" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`}})})],z);function Ta(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(),y(v,{title:"Base",id:"base-data-table",tabs:a.exampleTabs},{example:o(()=>[s(l,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])]),"code-vue":o(()=>[s(r,{code:a.codeSnippets.vue,lang:"html"},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Pa=D(z,[["render",Ta]]);var $a=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,za=(a,t,n,d)=>{for(var i=d>1?void 0:d?Oa(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&$a(t,n,i),i};let E=class extends g{};E=za([f({data:()=>({emptyDataTables:[{title:"No Results",id:"no-results-data-table",description:"Use <code>noResultsMessage</code> config to customize the no results data message",config:{noResultsMessage:"No matching results"}},{title:"No Filters",id:"no-filters-data-table",description:"Use <code>noFiltersMessage</code> config to customize the no filters data message.",config:{noFiltersMessage:"Search for or select at least one filter to get results"}},{title:"Empty Actionable",id:"empty-actionable-data-table",description:null,config:{emptyActionable:{isActionable:!0}}}],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[]}}),methods:{getConfig(a){return{...this.config,...a.noFiltersMessage?{noResultsMessage:a.noFiltersMessage}:a}},getTableEmptyRow(a){return a.emptyActionable?`<div>
        <i class="chi-icon icon-circle-plus-outline -icon--grey -lg" aria-hidden="true"></i>
        <span>
          <a>Add a new or existing service</a>, then manage here.
        </span>
      </div>`:`<i class="-mr--1 chi-icon icon-search"></i>
      <div>${a.noFiltersMessage||a.noResultsMessage}</div>`},getVueCode(a){return`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,${a.noFiltersMessage?`
    noFiltersMessage: '${a.noFiltersMessage}',`:""}${a.noResultsMessage?`
    noResultsMessage: '${a.noResultsMessage}',`:""}
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
    },${a.emptyActionable?`
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
}`},getHtmlCode(a){return`<div class="chi-data-table">
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
    <div class="chi-data-table__row-empty${a.emptyActionable?" -actionable":""}">
      ${this.getTableEmptyRow(a)}
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
</div>`}}})],E);const Ea=["innerHTML"];function Ia(a,t,n,d,i,c){const l=Q,r=m("ChiDataTable"),v=w,p=N;return b(),C(x,null,[s(l,{title:"Empty"}),(b(!0),C(x,null,L(a.emptyDataTables,h=>(b(),y(p,{title:h.title,titleSize:"h4",id:h.id,key:h.id,tabs:a.exampleTabs},{example:o(()=>[s(r,{config:a.getConfig(h.config),dataTableData:a.table},null,8,["config","dataTableData"])]),"code-htmlblueprint":o(()=>[s(v,{lang:"html",code:a.getHtmlCode(h.config)},null,8,["code"])]),"code-vue":o(()=>[h.description?(b(),C("div",{key:0,class:"chi-tab__description",innerHTML:h.description},null,8,Ea)):P("",!0),s(v,{lang:"html",code:a.getVueCode(h.config)},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),128))],64)}const Ga=D(E,[["render",Ia]]);var Sa=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,Aa=(a,t,n,d)=>{for(var i=d>1?void 0:d?Ba(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&Sa(t,n,i),i};let I=class extends g{};I=Aa([f({data:()=>({styledDataTables:[{title:"No Border",id:"no-border-data-table",description:"Use <code>noBorder</code> config to remove the borders",style:{noBorder:!0}},{title:"Striped",id:"striped-data-table",description:"Use <code>striped</code> config to achieve striped styles",style:{striped:!0}},{title:"Hover",id:"hover-data-table",description:"Use <code>hover</code> config to achieve hover styles",style:{hover:!0}},{title:"Bordered",id:"bordered-data-table",description:"Use <code>bordered</code> config to achieve bordered styles",style:{bordered:!0}}],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]}}),methods:{getConfig(a){return{...this.config,style:{...this.config.style,...a}}},getVueCode(a){return`<!-- Vue component -->
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
</div>`}}})],I);const Ra=["innerHTML"];function ka(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(!0),C(x,null,L(a.styledDataTables,p=>(b(),y(v,{title:p.title,key:p.id,id:p.id,tabs:a.exampleTabs},{example:o(()=>[(b(),y(l,{config:a.getConfig(p.style),key:p.id,dataTableData:a.table},null,8,["config","dataTableData"]))]),"code-vue":o(()=>[e("div",{class:"chi-tab__description",innerHTML:p.description},null,8,Ra),s(r,{lang:"html",code:a.getVueCode(p.style)},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:a.getHtmlCode(p.style)},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),128)}const ja=D(I,[["render",ka]]);var Ha=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,Va=(a,t,n,d)=>{for(var i=d>1?void 0:d?Ma(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&Ha(t,n,i),i};let G=class extends g{};G=Va([f({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},selectable:!0,showSelectAllDropdown:!0,resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{htmlblueprintRadio:`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -selectable"></div>
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
    <fieldset>
      <div class="chi-data-table__row">
        <div class="chi-data-table__cell -selectable">
          <div class="chi-radio">
            <input type="radio" class="chi-radio__input" id="radio-ba2" name="radios">
            <label class="chi-radio__label" for="radio-ba2"></label>
          </div>
        </div>
        <div class=" chi-data-table__cell" data-label="Name">
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
        <div class="chi-data-table__cell -lh--1 -selectable">
          <div class="chi-radio">
            <input type="radio" class="chi-radio__input" id="radio-ba3" name="radios">
            <label class="chi-radio__label" for="radio-ba3"></label>
          </div>
        </div>
        <div class=" chi-data-table__cell" data-label="Name">
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
        <legend class="-sr--only">Select a Row</legend>
        <div class="chi-data-table__cell -lh--1 -selectable">
          <div class="chi-radio">
            <input type="radio" class="chi-radio__input" id="radio-ba4" name="radios">
            <label class="chi-radio__label" for="radio-ba4"></label>
          </div>
        </div>
        <div class=" chi-data-table__cell" data-label="Name">
          <div>Name 3</div>
        </div>
        <div class="chi-data-table__cell" data-label="ID">
          <div>name-3</div>
        </div>
        <div class="chi-data-table__cell" data-label="Last Login">
          <div>5 Nov 2020 10:15 a.m.</div>
        </div>
      </div>
    </fieldset>
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
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-7">20</button>
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
            <label class="chi-pagination__label" for="jumper-input-7">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-7" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`,htmlblueprintCheckbox:`<div class="chi-data-table">
  <div class="chi-data-table__head">
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -selectable">
        <div class="chi-checkbox">
          <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba1">
          <label class="chi-checkbox__label" for="checkbox-ba1">
            <div class="-sr--only">Label</div>
          </label>
        </div>
        <div class="chi-dropdown">
          <button aria-label="Select All Dropdown" data-position="bottom-start" class="chi-button -icon -flat -has-active">
            <div class="chi-button__content">
              <i aria-hidden="true" class="chi-icon icon-chevron-down -xs"></i>
            </div>
          </button>
          <div class="chi-dropdown__menu" x-placement="bottom-start">
            <a class="chi-dropdown__menu-item">Select all items, this page</a>
            <a class="chi-dropdown__menu-item">Select all items, all pages</a>
            <a class="chi-dropdown__menu-item">Deselect all</a>
          </div>
        </div>
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
    <div class="chi-data-table__row">
      <div class="chi-data-table__cell -selectable">
        <div class="chi-checkbox">
          <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba2">
          <label class="chi-checkbox__label" for="checkbox-ba2">
            <div class="-sr--only">Label</div>
          </label>
        </div>
      </div>
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
      <div class="chi-data-table__cell -lh--1 -selectable">
        <div class="chi-checkbox">
          <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba3">
          <label class="chi-checkbox__label" for="checkbox-ba3">
            <div class="-sr--only">Label</div>
          </label>
        </div>
      </div>
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
      <div class="chi-data-table__cell -lh--1 -selectable">
        <div class="chi-checkbox">
          <input type="checkbox" class="chi-checkbox__input" id="checkbox-ba4">
          <label class="chi-checkbox__label" for="checkbox-ba4">
            <div class="-sr--only">Label</div>
          </label>
        </div>
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
            <span class="chi-pagination__label">6 results</span>
          </div>
          <div class="chi-pagination__page-size">
            <div class="chi-dropdown">
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-7">20</button>
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
            <label class="chi-pagination__label" for="jumper-input-7">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-7" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`}}),methods:{getRadioSelectionConfig(){return{...this.config,selectable:"radio"}},getSelectableTableVueCode(a){return`<!-- Vue component -->
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
    selectable: ${a==="radio"?"'radio'":`${a},
    showSelectAllDropdown: true`},
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
}`}}})],G);function Ua(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(),C(x,null,[s(v,{title:"Selectable",id:"selectable-data-table",tabs:a.exampleTabs},{example:o(()=>[s(l,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])]),"code-vue":o(()=>[t[0]||(t[0]=e("div",{class:"chi-tab__description"},[u("Use "),e("code",null,"selectable"),u(" config to render rows with selectable checkboxes")],-1)),s(r,{lang:"html",code:a.getSelectableTableVueCode(!0)},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:a.codeSnippets.htmlblueprintCheckbox},null,8,["code"])]),_:1},8,["tabs"]),s(v,{title:"Radio Selection",id:"radio-selection-data-table",tabs:a.exampleTabs},{example:o(()=>[s(l,{config:a.getRadioSelectionConfig(),dataTableData:a.table},null,8,["config","dataTableData"])]),"code-vue":o(()=>[t[1]||(t[1]=e("div",{class:"chi-tab__description"},[u("Use "),e("code",null,"selectable"),u(" config to render rows with radio buttons")],-1)),s(r,{lang:"html",code:a.getSelectableTableVueCode("radio")},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:a.codeSnippets.htmlblueprintRadio},null,8,["code"])]),_:1},8,["tabs"])],64)}const Ja=D(G,[["render",Ua]]);var Fa=Object.defineProperty,Wa=Object.getOwnPropertyDescriptor,qa=(a,t,n,d)=>{for(var i=d>1?void 0:d?Wa(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&Fa(t,n,i),i};let S=class extends g{};S=qa([f({data:()=>({sizes:["xs","sm","md","lg","xl"],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"lg",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]}}),methods:{getConfig(a){return{...this.config,style:{...this.config.styles,size:a}}},getVueCode(a){return`<!-- Vue component -->
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
      size: '${a}',
      striped: false,
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
}`},getHtmlCode(a){return`<div class="chi-data-table -${a}">
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
              <button class="chi-button -flat -px--1 chi-dropdown__trigger" id="pagesize-16">20</button>
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
            <label class="chi-pagination__label" for="jumper-input-16">Go to page:</label>
            <input class="chi-input" type="text" id="jumper-input-16" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>`}}})],S);function Ka(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(!0),C(x,null,L(a.sizes,p=>(b(),y(v,{key:p,title:`Size -${p}`,id:`size-${p}-data-table`,tabs:a.exampleTabs},{example:o(()=>[s(l,{config:a.getConfig(p),dataTableData:a.table},null,8,["config","dataTableData"])]),"code-vue":o(()=>[s(r,{lang:"html",code:a.getVueCode(p)},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{code:a.getHtmlCode(p),lang:"html"},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),128)}const Qa=D(S,[["render",Ka]]);var Xa=Object.defineProperty,Ya=Object.getOwnPropertyDescriptor,Za=(a,t,n,d)=>{for(var i=d>1?void 0:d?Ya(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&Xa(t,n,i),i};let B=class extends g{};B=Za([f({data:()=>({sortingTypes:[{title:"Sorting",id:"sorting-data-table",defaultSort:null},{title:"Default Sorting -- Ascending",id:"sorting-ascending-data-table",defaultSort:{key:"name",direction:"ascending"}},{title:"Default Sorting -- Descending",id:"sorting-descending-data-table",defaultSort:{key:"name",direction:"descending"}}],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!1},pagination:{activePage:1,compact:!1,firstLast:!1,pageJumper:!0},resultsPerPage:3},table:{head:{name:{label:"Name",sortable:!0,sortDataType:"string"},id:{label:"ID",sortable:!0,sortDataType:"string"},lastLogin:{label:"Last Login",sortable:!0,sortDatatype:"date"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]}}),methods:{getConfig(a){return{...this.config,...a?{defaultSort:a}:{}}},getHtmlCode(a){return`<div class="chi-data-table">
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
}`}}})],B);function ae(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(!0),C(x,null,L(a.sortingTypes,p=>(b(),y(v,{key:p.id,title:p.title,id:p.id,tabs:a.exampleTabs},{example:o(()=>[s(l,{config:a.getConfig(p.defaultSort),dataTableData:a.table},null,8,["config","dataTableData"])]),"code-vue":o(()=>[t[0]||(t[0]=e("div",{class:"chi-tab__description"},[u("Use "),e("code",null,"sortBy"),u(" and "),e("code",null,"sortDataType"),u(" properties to make the column sortable")],-1)),s(r,{code:a.getVueCode(p.defaultSort),lang:"html"},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{code:a.getHtmlCode(p.defaultSort),lang:"html"},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),128)}const ee=D(B,[["render",ae]]);var te=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,le=(a,t,n,d)=>{for(var i=d>1?void 0:d?ie(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&te(t,n,i),i};let A=class extends g{};A=le([f({components:{ChiPopoverExample:X,ChiDropdownExample:Y},methods:{printTable(){var a;(a=this.$refs.dataTableComplex)==null||a.print("Data table - Complex")}},mounted(){chi.tab(document.getElementById("example-vertical-base"))},data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],config:{columnResize:!1,selectable:!0,style:{portal:!1,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!1,firstLast:!0,pageJumper:!0},resultsPerPage:3,defaultSort:{key:"name",sortBy:"string",direction:"ascending"},showExpandAll:!0,showSelectAllDropdown:!0},table:{head:{name:{label:"Name",sortable:!0,sortBy:"name",sortDataType:"string",key:!0,bold:!0},status:{label:"Status",sortable:!0,sortBy:"status",sortDataType:"string",description:"Helpful information goes here."},userID:{label:"User ID",key:!0,icon:"user"},lastLogin:{label:"Last Login",key:!0},actions:{label:"Actions",align:"right",isPrintDisabled:!0}},body:[{expanded:!0,id:"name-1",data:[{template:"name",payload:{name:"Name 1",id:"name-1"}},{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-1"}}],nestedContent:{table:{data:[{id:"child-1-name-1",data:["Child 1 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-1"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-1",data:["Grand Child 1 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-1"}}]},{id:"grandchild-2-name-1",data:["Grand Child 2 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-1"}}]}]}}},{id:"child-2-name-1",data:["Child 2 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-1"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-1",data:["Grand Child 3 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-1"}}]},{id:"grandchild-4-name-1",data:["Grand Child 4 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-1"}}]}]}}}]}}},{id:"name-2",data:[{template:"name",payload:{name:"Name 2",id:"name-2"}},{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-2"}}],nestedContent:{table:{data:[{id:"child-1-name-2",data:["Child 1 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-2"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-2",data:["Grand Child 1 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-2"}}]},{id:"grandchild-2-name-2",data:["Grand Child 2 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-2"}}]}]}}},{id:"child-2-name-2",data:["Child 2 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-2"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-2",data:["Grand Child 3 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-2"}}]},{id:"grandchild-4-name-2",data:["Grand Child 4 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-2"}}]}]}}}]}}},{id:"name-3",data:[{template:"name",payload:{name:"Name 3",id:"name-3"}},{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-3"}}],nestedContent:{table:{data:[{id:"child-1-name-3",data:["Child 1 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-3"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-3",data:["Grand Child 1 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-3"}}]},{id:"grandchild-2-name-3",data:["Grand Child 2 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-3"}}]}]}}},{id:"child-2-name-3",data:["Child 2 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-3"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-3",data:["Grand Child 3 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-3"}}]},{id:"grandchild-4-name-3",data:["Grand Child 4 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-3"}}]}]}}}]}}},{id:"name-4",data:[{template:"name",payload:{name:"Name 4",id:"name-4"}},{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-4"}}],nestedContent:{table:{data:[{id:"child-1-name-4",data:["Child 1 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-4"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-4",data:["Grand Child 1 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-4"}}]},{id:"grandchild-2-name-4",data:["Grand Child 2 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-4"}}]}]}}},{id:"child-2-name-4",data:["Child 2 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-4"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-4",data:["Grand Child 3 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-4"}}]},{id:"grandchild-4-name-4",data:["Grand Child 4 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-4"}}]}]}}}]}}},{id:"name-5",data:[{template:"name",payload:{name:"Name 5",id:"name-5"}},{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-5"}}],nestedContent:{table:{data:[{id:"child-1-name-5",data:["Child 1 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-5"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-5",data:["Grand Child 1 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-5"}}]},{id:"grandchild-2-name-5",data:["Grand Child 2 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-5"}}]}]}}},{id:"child-2-name-5",data:["Child 2 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-5"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-5",data:["Grand Child 3 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-5"}}]},{id:"grandchild-4-name-5",data:["Grand Child 4 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-5"}}]}]}}}]}}},{id:"name-6",data:[{template:"name",payload:{name:"Name 6",id:"name-6"}},{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-6"}}],nestedContent:{table:{data:[{id:"child-1-name-6",data:["Child 1 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-6"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-6",data:["Grand Child 1 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-6"}}]},{id:"grandchild-2-name-6",data:["Grand Child 2 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-6"}}]}]}}},{id:"child-2-name-6",data:["Child 2 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-6"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-6",data:["Grand Child 3 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-6"}}]},{id:"grandchild-4-name-6",data:["Grand Child 4 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-6"}}]}]}}}]}}}]},codeSnippets:{dataTableExample:`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table" ref="dataTableComplex">
  <template #status="payload">
    <i :class="\`chi-icon icon-\${payload.icon} -icon--\${payload.color}\`" aria-hidden="true"></i>
    <span class="-text--truncate" style="padding-left: 0.5rem;">
      {{ payload.status }}
    </span>
  </template>
  <template #name="payload">
    <ExamplePopover :name="payload.name" :id="payload.id" />
  </template>
  <template #actions="payload">
    <ExampleDropdown :id="payload.id" />
  </template>
  <template #toolbar>
    <ChiDataTableToolbar>
      <template v-slot:start></template>
      <template v-slot:end>
        <chi-button @chiClick="printTable" variant="flat" type="icon"
         aria-label="Print data table complex example">
          <chi-icon icon="print"></chi-icon>
        </chi-button>
      </template>
    </ChiDataTableToolbar>
  </template>
  <template #bulk-actions>
    <div class="chi-bulk-actions__buttons">
      <div class="chi-bulk-actions__buttons-mobile -z--40">
        <chi-button variant="flat" type="icon" aria-label="Edit">
          <chi-icon icon="edit"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" aria-label="Compose">
          <chi-icon icon="compose"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" aria-label="Delete">
          <chi-icon icon="delete"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" aria-label="Print">
          <chi-icon icon="print"></chi-icon>
        </chi-button>
      </div>
      <div class="chi-bulk-actions__buttons-desktop">
        <chi-button size="xs" aria-label="Download">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Download </span>
        </chi-button>
        <chi-button size="xs" aria-label="Compose">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Compose </span>
        </chi-button>
        <chi-button size="xs" aria-label="Delete">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Delete </span>
        </chi-button>
        <chi-button size="xs" aria-label="Print">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Print </span>
        </chi-button>
      </div>
    </div>
  </template>
</ChiDataTable>

<!-- imports -->
import ExamplePopover from './ExamplePopover.vue';
import ExampleDropdown from './ExampleDropdown.vue';

<!-- Config and Data -->
data: {
  config: {
    columnResize: false,
    selectable: true,
    style: {
      portal: false,
      noBorder: false,
      bordered: false,
      hover: false,
      size: 'md',
      striped: true,
    },
    pagination: {
      activePage: 1,
      compact: false,
      firstLast: true,
      pageJumper: true,
    },
    resultsPerPage: 3,
    defaultSort: {
      key: 'name',
      sortBy: 'string',
      direction: 'ascending',
    },
    showExpandAll: true,
    showSelectAllDropdown: true
  },
  table: {
    head: {
      name: { label: 'Name', sortable: true, sortBy: 'name', sortDataType: 'string', key: true, bold: true },
      status: { label: 'Status', sortable: true, sortBy: 'status', sortDataType: 'string', description: 'Helpful information goes here.' },
      userID: { label: 'User ID', key: true, icon: 'user' },
      lastLogin: { label: 'Last Login', key: true },
      actions: { label: 'Actions', align: 'right', isPrintDisabled: true }
    },
    body: [
      {
        expanded: true,
        id: "name-1",
        data: [
          { template: "name", payload: { name: "Name 1", id: "name-1" } },
          {
            template: "status",
            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
          },
          "user-name-1",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-1" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-1",
                data: [
                  "Child 1 Name 1",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-1",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-1" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-1",
                        data: [
                          "Grand Child 1 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-1" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-1",
                        data: [
                          "Grand Child 2 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-1" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-1",
                data: [
                  "Child 2 Name 1",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-1",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-1" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-1",
                        data: [
                          "Grand Child 3 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-1" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-1",
                        data: [
                          "Grand Child 4 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-1" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-2",
        data: [
          { template: "name", payload: { name: "Name 2", id: "name-2" } },
          {
            template: "status",
            payload: { status: "Due", icon: 'warning', color: 'warning' },
          },
          "user-name-2",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-2" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-2",
                data: [
                  "Child 1 Name 2",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-2",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-2" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-2",
                        data: [
                          "Grand Child 1 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-2" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-2",
                        data: [
                          "Grand Child 2 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-2" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-2",
                data: [
                  "Child 2 Name 2",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-2",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-2" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-2",
                        data: [
                          "Grand Child 3 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-2" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-2",
                        data: [
                          "Grand Child 4 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-2" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-3",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 3",
              id: "name-3",
            },
          },
          {
            template: "status",
            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
          },
          "user-name-3",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-3" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-3",
                data: [
                  "Child 1 Name 3",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-3",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-3" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-3",
                        data: [
                          "Grand Child 1 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-3" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-3",
                        data: [
                          "Grand Child 2 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-3" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-3",
                data: [
                  "Child 2 Name 3",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-3",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-3" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-3",
                        data: [
                          "Grand Child 3 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-3" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-3",
                        data: [
                          "Grand Child 4 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-3" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-4",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 4",
              id: "name-4",
            },
          },
          {
            template: "status",
            payload: { status: "Due", icon: 'warning', color: 'warning' },
          },
          "user-name-4",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-4" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-4",
                data: [
                  "Child 1 Name 4",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-4",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-4" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-4",
                        data: [
                          "Grand Child 1 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-4" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-4",
                        data: [
                          "Grand Child 2 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-4" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-4",
                data: [
                  "Child 2 Name 4",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-4",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-4" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-4",
                        data: [
                          "Grand Child 3 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-4" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-4",
                        data: [
                          "Grand Child 4 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-4" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-5",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 5",
              id: "name-5",
            },
          },
          {
            template: "status",
            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
          },
          "user-name-5",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-5" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-5",
                data: [
                  "Child 1 Name 5",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-5",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-5" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-5",
                        data: [
                          "Grand Child 1 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-5" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-5",
                        data: [
                          "Grand Child 2 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-5" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-5",
                data: [
                  "Child 2 Name 5",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-5",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-5" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-5",
                        data: [
                          "Grand Child 3 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-5" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-5",
                        data: [
                          "Grand Child 4 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-5" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-6",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 6",
              id: "name-6",
            },
          },
          {
            template: "status",
            payload: { status: "Due", icon: 'warning', color: 'warning' },
          },
          "user-name-6",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-6" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-6",
                data: [
                  "Child 1 Name 6",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-6",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-6" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-6",
                        data: [
                          "Grand Child 1 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-6" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-6",
                        data: [
                          "Grand Child 2 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-6" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-6",
                data: [
                  "Child 2 Name 6",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-6",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-6" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-6",
                        data: [
                          "Grand Child 3 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-6" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-6",
                        data: [
                          "Grand Child 4 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-6" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
},
methods: {
  printTable() {
    this.$refs.dataTableComplex.print('Data table - Complex')
  }
}`,popoverExample:`<!-- Template -->
<template>
  <div class="-text--truncate">
    <a
      :id="\`name-popover-button-\${id}\`"
      href="#"
      :data-target="\`#name-popover-\${id}\`"
      position="top-start">
      {{id}}
    </a>
    <section
      class="chi-popover"
      :id="\`name-popover-\${id}\`"
      aria-modal="true"
      role="dialog"
      :aria-label="name"
    >
      <div class="chi-popover__content">
        {{ name }}
      </div>
    </section>
  </div>
</template>

<!-- Mounted -->
mounted() {
  let hoverAnimationTimeout: ReturnType<typeof setTimeout> | undefined;;
  const buttonOpenOnHover = document.getElementById(\`ticket-popover-button-\${this.$props.id}\`);
  const popover = chi.popover(buttonOpenOnHover);

  if (buttonOpenOnHover) {
    buttonOpenOnHover.addEventListener('mouseenter', function() {
      hoverAnimationTimeout = setTimeout(() => {
        popover.show();
      }, 300);
    });

    buttonOpenOnHover.addEventListener('mouseleave', function() {
      if (hoverAnimationTimeout) {
        clearTimeout(hoverAnimationTimeout);
      }
      popover.hide();
    });
  }
}
beforeDestroy() {
  this.popover.dispose();
}`,dropdownExample:`<!-- Template -->
<template>
  <div class="chi-dropdown -position--absolute">
    <button
      :id="'action-button-' + id"
      class="chi-button -icon -primary -flat"
      aria-label="More options"
      data-position="left-start"
    >
      <div class="chi-button__content">
        <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
      </div>
    </button>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#" v-for="action in actions">
        <span><chi-icon :icon="action.icon" size="sm" color="primary"></chi-icon></span>
        <span>{{ action.name }}</span>
      </a>
    </div>
  </div>
</template>

<!-- Config and data -->
data: {
  actions: [
    {name: 'View', icon: 'check-alt'},
    {name: 'Edit', icon: 'edit'},
    {name: 'Delete', icon: 'delete'}
  ]
}

<!-- mounted -->
mounted() {
  this.dropdown = chi.dropdown(document.getElementById(\`action-button-\${this.id}\`));
}
beforeDestroy() {
  this.dropdown.dispose();
}`}})})],A);const de={class:"-text--truncate",style:{"padding-left":"0.5rem"}},ne={class:"-d--flex -no-gutter -bt--1"},ce={class:"-flex--grow1"},se={class:"chi-tabs-panel -active",id:"vertical-base-1",role:"tabpanel"},oe={class:"chi-tabs-panel",id:"vertical-base-2",role:"tabpanel"},re={class:"chi-tabs-panel",id:"vertical-base-3",role:"tabpanel"};function me(a,t,n,d,i,c){const l=m("ChiPopoverExample"),r=m("ChiDropdownExample"),v=m("ChiDataTableToolbar"),p=m("ChiDataTable"),h=w,T=N;return b(),y(T,{title:"Complex",id:"complex-data-table",tabs:a.exampleTabs},{example:o(()=>[s(p,{config:a.config,dataTableData:a.table,ref:"dataTableComplex"},{status:o(_=>[e("i",{class:q(`chi-icon icon-${_.icon} -icon--${_.color}`),"aria-hidden":"true"},null,2),e("span",de,K(_.status),1)]),name:o(_=>[s(l,{name:_.name,id:_.id},null,8,["name","id"])]),actions:o(_=>[s(r,{id:_.id},null,8,["id"])]),toolbar:o(()=>[s(v,null,{end:o(()=>[e("chi-button",{onClick:t[0]||(t[0]=(..._)=>a.printTable&&a.printTable(..._)),variant:"flat",type:"icon","aria-label":"Print data table complex example"},t[1]||(t[1]=[e("chi-icon",{icon:"print"},null,-1)]))]),_:1})]),"bulk-actions":o(()=>t[2]||(t[2]=[e("div",{class:"chi-bulk-actions__buttons"},[e("div",{class:"chi-bulk-actions__buttons-mobile -z--40"},[e("chi-button",{variant:"flat",type:"icon","aria-label":"Edit"},[e("chi-icon",{icon:"edit"})]),e("chi-button",{variant:"flat",type:"icon","aria-label":"Compose"},[e("chi-icon",{icon:"compose"})]),e("chi-button",{variant:"flat",type:"icon","aria-label":"Delete"},[e("chi-icon",{icon:"delete"})]),e("chi-button",{variant:"flat",type:"icon","aria-label":"Print"},[e("chi-icon",{icon:"print"})])]),e("div",{class:"chi-bulk-actions__buttons-desktop"},[e("chi-button",{size:"xs","aria-label":"Download"},[e("chi-icon",{icon:"arrow-to-bottom"}),e("span",null,"Download")]),e("chi-button",{size:"xs","aria-label":"Compose"},[e("chi-icon",{icon:"arrow-to-bottom"}),e("span",null,"Compose")]),e("chi-button",{size:"xs","aria-label":"Delete"},[e("chi-icon",{icon:"arrow-to-bottom"}),e("span",null,"Delete")]),e("chi-button",{size:"xs","aria-label":"Print"},[e("chi-icon",{icon:"arrow-to-bottom"}),e("span",null,"Print")])])],-1)])),_:1},8,["config","dataTableData"])]),"code-vue":o(()=>[t[4]||(t[4]=e("div",{class:"chi-tab__description -p--2"},"Create reusable Vue components based on your needs and use them as custom templates for Data Table cells and row accordions",-1)),e("div",ne,[t[3]||(t[3]=e("div",{class:"-bg--grey-15 -pt--3 -br--1",style:{width:"14rem"}},[e("ul",{class:"chi-tabs -vertical",id:"example-vertical-base",role:"tablist","aria-label":"chi-tabs-vertical-base"},[e("li",{class:"-active"},[e("a",{href:"#vertical-base-1",role:"tab","aria-selected":"true","aria-controls":"vertical-base-1"},"ExampleDataTable.vue")]),e("li",null,[e("a",{href:"#vertical-base-2",role:"tab","aria-selected":"false",tabindex:"-1","aria-controls":"vertical-base-2"},"ExamplePopover.vue")]),e("li",null,[e("a",{href:"#vertical-base-3",role:"tab","aria-selected":"false",tabindex:"-1","aria-controls":"vertical-base-3"},"ExampleDropdown.vue")]),e("li",{class:"chi-sliding-border"})])],-1)),e("div",ce,[e("div",se,[s(h,{lang:"html",code:a.codeSnippets.dataTableExample},null,8,["code"])]),e("div",oe,[s(h,{lang:"html",code:a.codeSnippets.popoverExample},null,8,["code"])]),e("div",re,[s(h,{lang:"html",code:a.codeSnippets.dropdownExample},null,8,["code"])])])])]),_:1},8,["tabs"])}const pe=D(A,[["render",me]]);var ve=Object.defineProperty,be=Object.getOwnPropertyDescriptor,he=(a,t,n,d)=>{for(var i=d>1?void 0:d?be(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&ve(t,n,i),i};let R=class extends g{};R=he([f({data:()=>({accordionTypes:[{title:"Accordion Grand Child",id:"accordion-grand-child-data-table",table:{head:{name:{label:"Name",key:!0,bold:!0},id:{label:"ID",key:!0},lastLogin:{label:"Last Login"}},body:[{expanded:!0,id:"name-1",nestedContent:{table:{data:[{expanded:!0,id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",nestedContent:{table:{data:[{id:"name-2-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-2-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",nestedContent:{table:{data:[{id:"name-3-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-3-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",nestedContent:{table:{data:[{id:"name-4-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-4-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",nestedContent:{table:{data:[{id:"name-5-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-5-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",nestedContent:{table:{data:[{id:"name-6-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}},{id:"name-6-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."],nestedContent:{table:{data:[{id:"name-1-0",data:["Child Name 1","child-name-1","18 Dec 2020 2:38 a.m."]},{id:"name-1-1",data:["Child Name 2","child-name-2","18 Dec 2020 2:38 a.m."]}]}}}]}},data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippetVue:`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
    style: {
      portal: true,
      noBorder: false,
      bordered: false,
      hover: false,
      size: "md",
      striped: true,
    },
    pagination: {
      activePage: 1,
      compact: true,
      firstLast: true,
      pageJumper: false,
    },
    showExpandAll: true,
    resultsPerPage: 3,
  },
  table: {
    head: {
      name: { label: 'Name', key: true, bold: true },
      id: { label: 'ID', key: true },
      lastLogin: { label: 'Last Login' },
    },
    body: [
      {
        expanded: true,
        id: 'name-1',
        nestedContent: {
          table: {
            data: [
              {
                expanded: true,
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
                nestedContent: {
                table: {
                  data: [
                  {
                    id: 'name-1-0',
                    data: [
                    'Child Name 1',
                    'child-name-1',
                    '18 Dec 2020 2:38 a.m.',
                    ],
                  },
                  {
                    id: 'name-1-1',
                    data: [
                    'Child Name 2',
                    'child-name-2',
                    '18 Dec 2020 2:38 a.m.',
                    ],
                  },
                  ],
                },
                },
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
                nestedContent: {
                table: {
                  data: [
                  {
                    id: 'name-1-0',
                    data: [
                    'Child Name 1',
                    'child-name-1',
                    '18 Dec 2020 2:38 a.m.',
                    ],
                  },
                  {
                    id: 'name-1-1',
                    data: [
                    'Child Name 2',
                    'child-name-2',
                    '18 Dec 2020 2:38 a.m.',
                    ],
                  },
                  ],
                },
                },
              },
            ],
          },
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
          table: {
            data: [
              {
                id: 'name-2-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
          {
            id: 'name-2-1',
            data: [
              'Child Name 2',
              'child-name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
            ],
          },
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
          table: {
            data: [
              {
                id: 'name-3-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
          {
            id: 'name-3-1',
            data: [
              'Child Name 2',
              'child-name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
            ],
          },
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
          table: {
            data: [
              {
                id: 'name-4-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
          {
            id: 'name-4-1',
            data: [
              'Child Name 2',
              'child-name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
            ],
          },
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
          table: {
            data: [
              {
                id: 'name-5-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
          {
            id: 'name-5-1',
            data: [
              'Child Name 2',
              'child-name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
            ],
          },
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
          table: {
            data: [
              {
                id: 'name-6-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
          {
            id: 'name-6-1',
            data: [
              'Child Name 2',
              'child-name-2',
              '18 Dec 2020 2:38 a.m.',
            ],
        nestedContent: {
          table: {
            data: [
              {
                id: 'name-1-0',
                data: [
                  'Child Name 1',
                  'child-name-1',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
              {
                id: 'name-1-1',
                data: [
                  'Child Name 2',
                  'child-name-2',
                  '18 Dec 2020 2:38 a.m.',
                ],
              },
            ],
          },
        },
          },
            ],
          },
        },
        data: [
          'Name 6',
          'name-6',
          '5 Nov 2020 10:15 a.m.',
        ],
      },
    ]
  }
}`,codeSnippetHtml:`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div role="row" class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -expandable -position--relative">
            <div>
              <button aria-label="Expand All Rows" class="chi-button -icon -flat -expand -sm">
                <div class="chi-button__content">
                  <i class="chi-icon icon-squares-minus-outline"></i>
                </div>
                <span class="-sr--only">Expand All Rows</span>
              </button>
              <div class="chi-tooltip " data-popper-placement="top">
                <span>Collapse All</span>
              </div>
            </div>
            <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="Name" class="chi-data-table__cell -justify-content-md--start -position--relative">
            Name <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="ID" class="chi-data-table__cell -justify-content-md--start -position--relative">
            ID <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
          <div data-label="Last Login" class="chi-data-table__cell -justify-content-md--start -position--relative">
            Last Login <div class="-position--absolute resize-handle">&nbsp;</div>
          </div>
        </div>
      </div>

      <div class="chi-data-table__body">
        <div id="row-dt-1-name-1" data-rownumber="0" data-rowlevel="0" role="row" class="chi-data-table__row -md -expanded">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-1-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-minus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 1</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-1</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">18 Dec 2020 3:26 p.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-1-content">
          <div id="row-dt-1-name-1-0" data-rownumber="0-0" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -expanded">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-1-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-minus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-1-0-content">
            <div id="row-dt-1-name-1-0" data-rownumber="0-0-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="0-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-1-1" data-rownumber="0-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-1-1-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-1-1-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="0-1-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="0-1-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="row-dt-1-name-2" data-rownumber="1" data-rowlevel="0" role="row" class="chi-data-table__row -striped -md -collapsed">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-2-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-plus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 2</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-2</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-2-content" style="display: none;">
          <div id="row-dt-1-name-2-0" data-rownumber="1-0" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-2-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-2-0-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="1-0-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="1-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-2-1" data-rownumber="1-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-2-1-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-2-1-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="1-1-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="1-1-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="row-dt-1-name-3" data-rownumber="2" data-rowlevel="0" role="row" class="chi-data-table__row -md -collapsed">
          <div role="cell" class="chi-data-table__cell -expandable">
            <button aria-label="Expand row" data-target="#row-dt-1-name-3-content" class="chi-button -icon -flat -expand -xs">
              <div class="chi-button__content">
                <i class="chi-icon icon-plus"></i>
              </div>
              <span class="-sr--only">Expand Row</span>
            </button>
          </div>
          <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
            <div class="-w--100">
              <div class="-text--truncate">Name 3</div>
            </div>
          </div>
          <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
            <div class="-w--100">
              <div class="-text--truncate">name-3</div>
            </div>
          </div>
          <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
            <div class="-w--100">
              <div class="-text--truncate">5 Nov 2020 10:15 a.m.</div>
            </div>
          </div>
        </div>
        <div id="row-dt-1-name-3-content" style="display: none;">
          <div id="row-dt-1-name-3-0" data-rownumber="2-0" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-3-0-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 1</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-1</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-3-0-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="2-0-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="2-0-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-3-1" data-rownumber="2-1" data-rowlevel="1" role="row" class="chi-data-table__row-child -md -collapsed">
            <div class="chi-data-table__cell -expandable"></div>
            <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
              <button aria-label="Expand row" data-target="#row-dt-1-name-3-1-content" class="chi-button -icon -flat -expand -xs">
                <div class="chi-button__content">
                  <i class="chi-icon icon-plus"></i>
                </div>
                <span class="-sr--only">Expand Row</span>
              </button>
              <div class="-w--100">
                <div class="-text--truncate">Child Name 2</div>
              </div>
            </div>
            <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
              <div class="-w--100">
                <div class="-text--truncate">child-name-2</div>
              </div>
            </div>
            <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
              <div class="-w--100">
                <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
              </div>
            </div>
          </div>
          <div id="row-dt-1-name-3-1-content" style="display: none;">
            <div id="row-dt-1-name-1-0" data-rownumber="2-1-0" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 1</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-1</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
            <div id="row-dt-1-name-1-1" data-rownumber="2-1-1" data-rowlevel="2" role="row" class="chi-data-table__row-grand-child -md">
              <div role="cell" class="chi-data-table__cell -expandable"></div>
              <div aria-label="Name" data-label="Name" role="cell" class="chi-data-table__cell -key -bold">
                <div class="-w--100">
                  <div class="-text--truncate">Child Name 2</div>
                </div>
              </div>
              <div aria-label="ID" data-label="ID" role="cell" class="chi-data-table__cell -key">
                <div class="-w--100">
                  <div class="-text--truncate">child-name-2</div>
                </div>
              </div>
              <div aria-label="Last Login" data-label="Last Login" role="cell" class="chi-data-table__cell">
                <div class="-w--100">
                  <div class="-text--truncate">18 Dec 2020 2:38 a.m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">6 Results</span>
              </div>
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
                <strong>2</strong>
              </div>
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="Next page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Last page">
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
    </div>
  </div>
</div>`}],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},showExpandAll:!0,resultsPerPage:3}})})],R);const ue={class:"chi-card -portal -bg--white"},_e={class:"chi-card__content -p--0"};function ge(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(!0),C(x,null,L(a.accordionTypes,p=>(b(),y(v,{title:p.title,id:p.id,tabs:a.exampleTabs},{example:o(()=>[e("div",ue,[t[0]||(t[0]=e("div",{class:"chi-card__header -sm"},[e("div",{class:"chi-card__title"},"Title")],-1)),e("div",_e,[s(l,{config:a.config,dataTableData:p.table},null,8,["config","dataTableData"])])])]),"code-vue":o(()=>[t[1]||(t[1]=e("div",{class:"chi-tab__description"},[u("Use "),e("code",null,"nestedContent"),u(" property to provide data of row accordion content")],-1)),s(r,{lang:"html",code:p.codeSnippetVue},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:p.codeSnippetHtml},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),256)}const fe=D(R,[["render",ge]]);var De=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,we=(a,t,n,d)=>{for(var i=d>1?void 0:d?ye(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&De(t,n,i),i};let k=class extends g{};k=we([f({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},resultsPerPage:3},table:{head:{name:{label:"Name",key:!0,bold:!0},id:{label:"ID",key:!0},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
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
    },
    resultsPerPage: 3,
  },
  table: {
    head: {
      name: { label: 'Name', key: true, bold: true },
      id: { label: 'ID', key: true },
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
}`,htmlblueprint:`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
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
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Name 1</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div>name-1</div>
          </div>
          <div class="chi-data-table__cell">
            <div>18 Dec 2020 3:26 p.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -striped -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Name 2</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div>name-2</div>
          </div>
          <div class="chi-data-table__cell">
            <div>18 Dec 2020 2:38 a.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Name 3</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div>name-3</div>
          </div>
          <div class="chi-data-table__cell">
            <div>5 Nov 2020 10:15 a.m.</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">6 Results</span>
              </div>
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
                <strong>2</strong>
              </div>
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="Next page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Last page">
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
    </div>
  </div>
</div>`}})})],k);const Ne={class:"chi-card -portal -bg--white"},Ce={class:"chi-card__content -p--0"};function xe(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(),y(v,{title:"Base",id:"base-portal-data-table",tabs:a.exampleTabs},{example:o(()=>[e("div",Ne,[t[0]||(t[0]=e("div",{class:"chi-card__header -sm"},[e("div",{class:"chi-card__title"},"Title")],-1)),e("div",Ce,[s(l,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])])])]),"code-vue":o(()=>[t[1]||(t[1]=e("div",{class:"chi-tab__description"},[u("Use "),e("code",null,"portal"),u(" config to achieve portal styling")],-1)),s(r,{lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Le=D(k,[["render",xe]]);var Te=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,$e=(a,t,n,d)=>{for(var i=d>1?void 0:d?Pe(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&Te(t,n,i),i};let j=class extends g{};j=$e([f({data:()=>({emptyDataTables:[{title:"No Results",id:"no-results-data-table",description:"Use <code>noResultsMessage</code> config to customize the no results data message",config:{noResultsMessage:"No matching results"}},{title:"No Filters",id:"no-filters-data-table",description:"Use <code>noFiltersMessage</code> config to customize the no filters data message",config:{noFiltersMessage:"Search for or select at least one filter to get results"}},{title:"Empty Actionable",id:"empty-actionable-data-table",description:null,config:{emptyActionable:{isActionable:!0}}}],exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[]}}),methods:{getConfig(a){return{...this.config,...a.noFiltersMessage?{noResultsMessage:a.noFiltersMessage}:a}},getTableEmptyRow(a){return a.emptyActionable?`<div>
        <i class="chi-icon icon-circle-plus-outline -icon--grey -lg" aria-hidden="true"></i>
        <span>
          <a>Add a new or existing service</a>, then manage here.
        </span>
      </div>`:`<i class="-mr--1 chi-icon icon-search -icon--dark"></i>
      <div>${a.noFiltersMessage||a.noResultsMessage}</div>`},getVueCode(a){return`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,${a.noFiltersMessage?`
    noFiltersMessage: '${a.noFiltersMessage}',`:""}${a.noResultsMessage?`
    noResultsMessage: '${a.noResultsMessage}',`:""}
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
    },${a.emptyActionable?`
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
}`},getHtmlCode(a){return`<div class="chi-data-table -portal -compact">
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
    <div class="chi-data-table__row-empty${a.emptyActionable?" -actionable":""}">
      ${this.getTableEmptyRow(a)}
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
</div>`}}})],j);const Oe={class:"chi-card -portal -bg--white"},ze={class:"chi-card__content -p--0"},Ee=["innerHTML"];function Ie(a,t,n,d,i,c){const l=Q,r=m("ChiDataTable"),v=w,p=N;return b(),C(x,null,[s(l,{title:"Empty"}),(b(!0),C(x,null,L(a.emptyDataTables,h=>(b(),y(p,{title:h.title,titleSize:"h4",id:h.id,key:h.id,tabs:a.exampleTabs},{example:o(()=>[e("div",Oe,[t[0]||(t[0]=e("div",{class:"chi-card__header -sm"},[e("div",{class:"chi-card__title"},"Title")],-1)),e("div",ze,[s(r,{config:a.getConfig(h.config),dataTableData:a.table},null,8,["config","dataTableData"])])])]),"code-vue":o(()=>[h.description?(b(),C("div",{key:0,class:"chi-tab__description",innerHTML:h.description},null,8,Ee)):P("",!0),s(v,{lang:"html",code:a.getVueCode(h.config)},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(v,{lang:"html",code:a.getHtmlCode(h.config)},null,8,["code"])]),_:2},1032,["title","id","tabs"]))),128))],64)}const Ge=D(j,[["render",Ie]]);var Se=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,Ae=(a,t,n,d)=>{for(var i=d>1?void 0:d?Be(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&Se(t,n,i),i};let H=class extends g{};H=Ae([f({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},selectable:"radio",resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
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
    },
    selectable: 'radio',
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
}`,htmlblueprint:`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -selectable"></div>
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
        <fieldset>
          <div class="chi-data-table__row -md">
            <div class="chi-data-table__cell -selectable">
              <div class="chi-radio">
                <input type="radio" class="chi-radio__input" id="radio-ba2" name="radios">
                <label class="chi-radio__label" for="radio-ba2"></label>
              </div>
            </div>
            <div class=" chi-data-table__cell" data-label="Name">
              <div>Name 1</div>
            </div>
            <div class="chi-data-table__cell" data-label="ID">
              <div>name-1</div>
            </div>
            <div class="chi-data-table__cell" data-label="Last Login">
              <div>18 Dec 2020 3:26 p.m.</div>
            </div>
          </div>
          <div class="chi-data-table__row -striped -md">
            <div class="chi-data-table__cell -lh--1 -selectable">
              <div class="chi-radio">
                <input type="radio" class="chi-radio__input" id="radio-ba3" name="radios">
                <label class="chi-radio__label" for="radio-ba3"></label>
              </div>
            </div>
            <div class=" chi-data-table__cell" data-label="Name">
              <div>Name 2</div>
            </div>
            <div class="chi-data-table__cell" data-label="ID">
              <div>name-2</div>
            </div>
            <div class="chi-data-table__cell" data-label="Last Login">
              <div>18 Dec 2020 2:38 a.m.</div>
            </div>
          </div>
          <div class="chi-data-table__row -md">
            <div class="chi-data-table__cell -lh--1 -selectable">
              <div class="chi-radio">
                <input type="radio" class="chi-radio__input" id="radio-ba4" name="radios">
                <label class="chi-radio__label" for="radio-ba4"></label>
              </div>
            </div>
            <div class=" chi-data-table__cell" data-label="Name">
              <div>Name 3</div>
            </div>
            <div class="chi-data-table__cell" data-label="ID">
              <div>name-3</div>
            </div>
            <div class="chi-data-table__cell" data-label="Last Login">
              <div>5 Nov 2020 10:15 a.m.</div>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">6 Results</span>
              </div>
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
                <strong>2</strong>
              </div>
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="Next page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Last page">
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
    </div>
  </div>
</div>`}})})],H);const Re={class:"chi-card -portal -bg--white"},ke={class:"chi-card__content -p--0"};function je(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(),y(v,{title:"Radio selection",id:"radio-selection-portal-data-table",tabs:a.exampleTabs},{example:o(()=>[e("div",Re,[t[0]||(t[0]=e("div",{class:"chi-card__header -sm"},[e("div",{class:"chi-card__title"},"Title")],-1)),e("div",ke,[s(l,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])])])]),"code-vue":o(()=>[t[1]||(t[1]=e("div",{class:"chi-tab__description"},[u("Use "),e("code",null,"selectable"),u(" config to render rows with radio buttons")],-1)),s(r,{lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const He=D(H,[["render",je]]);var Me=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Ue=(a,t,n,d)=>{for(var i=d>1?void 0:d?Ve(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&Me(t,n,i),i};let M=class extends g{};M=Ue([f({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},resultsPerPage:3,cellWrap:!0},table:{head:{name:{label:"This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell",key:!0,bold:!0},id:{label:"ID",key:!0},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["This is a long content with a second line wrapping without tooltip: Cell wrapped on two lines","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["This is a long content with a second line wrapping with tooltip: This is a long content for the tooltip in the wrapped cell","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
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
    },
    resultsPerPage: 3,
    cellWrap: true,
  },
  table: {
    head: {
      name: { label: 'This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell', key: true, bold: true },
      id: { label: 'ID', key: true },
      lastLogin: { label: 'Last Login' },
    },
    body: [
      {
        id: 'name-1',
        data: [
          'This is a long content with a second line wrapping without tooltip: Cell wrapped on two lines',
          'name-1',
          '18 Dec 2020 3:26 p.m.',
        ],
      },
      {
        id: 'name-2',
        data: [
          'This is a long content with a second line wrapping with tooltip: This is a long content for the tooltip in the wrapped cell',
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
}`,htmlblueprint:`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell" data-label="This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell">
            <div class="-cell-wrap">This is a long header content with a second line wrapping without tooltip: This is a long content for the tooltip in the wrapped cell</div>
          </div>
          <div class="chi-data-table__cell" data-label="ID">
            <div class="-cell-wrap">ID</div>
          </div>
          <div class="chi-data-table__cell" data-label="Last Login">
            <div class="-cell-wrap">Last Login</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div class="-cell-wrap">This is a long content with a second line wrapping without tooltip: Cell wrapped on two lines</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div class="-cell-wrap">name-1</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-cell-wrap">18 Dec 2020 3:26 p.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -striped -md">
          <div class="chi-data-table__cell -key -bold">
            <div class="-cell-wrap">This is a long content with a second line wrapping with tooltip: This is a long content for the tooltip in the wrapped cell</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div class="-cell-wrap">name-2</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-cell-wrap">18 Dec 2020 2:38 a.m.</div>
          </div>
        </div>
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div class="-cell-wrap">Name 3</div>
          </div>
          <div class="chi-data-table__cell -key">
            <div class="-cell-wrap">name-3</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-cell-wrap">5 Nov 2020 10:15 a.m.</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">240 Results</span>
              </div>
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
                <strong>2</strong>
              </div>
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="Next page" >
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Last page">
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
    </div>
  </div>
</div>`}})})],M);const Je={class:"chi-card -portal -bg--white"},Fe={class:"chi-card__content -p--0"};function We(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(),y(v,{title:"Second line wrapping",id:"second-line-wrapping-data-table",tabs:a.exampleTabs},{example:o(()=>[e("div",Je,[t[0]||(t[0]=e("div",{class:"chi-card__header -sm"},[e("div",{class:"chi-card__title"},"Title")],-1)),e("div",Fe,[s(l,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])])])]),"code-vue":o(()=>[t[1]||(t[1]=e("div",{class:"chi-tab__description"},[u("Use "),e("code",null,"cellWrap"),u(" config to achieve the two line wrapping")],-1)),s(r,{lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const qe=D(M,[["render",We]]);var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Xe=(a,t,n,d)=>{for(var i=d>1?void 0:d?Qe(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&Ke(t,n,i),i};let V=class extends g{};V=Xe([f({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},resultsPerPage:3},table:{head:{name:{label:"Name",key:!0,bold:!0},id:{label:"ID",key:!0},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."],state:"danger"},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table"></ChiDataTable>

<!-- Config and Data -->
data: {
  config: {
    columnResize: true,
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
    },
    resultsPerPage: 3,
  },
  table: {
    head: {
      name: { label: 'Name', key: true, bold: true },
      id: { label: 'ID', key: true },
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
        state: 'danger'
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
}`,htmlblueprint:`<div class="chi-card -portal -bg--white -bg-md--grey-15">
<div class="chi-card__header -sm">
  <div class="chi-card__title">Title</div>
</div>
<div class="chi-card__content -p--0">
  <div class="chi-data-table -portal -compact">
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
      <div class="chi-data-table__row -md">
        <div class="chi-data-table__cell -key -bold">
          <div>Name 1</div>
        </div>
        <div class="chi-data-table__cell -key">
          <div>name-1</div>
        </div>
        <div class="chi-data-table__cell">
          <div>18 Dec 2020 3:26 p.m.</div>
        </div>
      </div>
      <div class="chi-data-table__row -row--danger -striped -md">
        <div class="chi-data-table__cell -key -bold">
          <div>Name 2</div>
        </div>
        <div class="chi-data-table__cell -key">
          <div>name-2</div>
        </div>
        <div class="chi-data-table__cell">
          <div>18 Dec 2020 2:38 a.m.</div>
        </div>
      </div>
      <div class="chi-data-table__row -md">
        <div class="chi-data-table__cell -key -bold">
          <div>Name 3</div>
        </div>
        <div class="chi-data-table__cell -key">
          <div>name-3</div>
        </div>
        <div class="chi-data-table__cell">
          <div>5 Nov 2020 10:15 a.m.</div>
        </div>
      </div>
    </div>
    <div class="chi-data-table__footer">
      <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
        <div class="chi-pagination__content">
          <div class="chi-pagination__start">
            <div class="chi-pagination__results">
              <span class="chi-pagination__label">6 Results</span>
            </div>
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
              <strong>2</strong>
            </div>
            <div class="chi-pagination__button-group chi-button-group">
              <button class="chi-button -icon -flat -xs" aria-label="Next page">
                <div class="chi-button__content">
                  <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
                </div>
              </button>
              <button class="chi-button -icon -flat -xs" aria-label="Last page">
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
  </div>
</div>
</div>`}})})],V);const Ye={class:"chi-card -portal -bg--white"},Ze={class:"chi-card__content -p--0"};function at(a,t,n,d,i,c){const l=m("ChiDataTable"),r=w,v=N;return b(),y(v,{title:"State",id:"state-data-table",tabs:a.exampleTabs},{example:o(()=>[e("div",Ye,[t[0]||(t[0]=e("div",{class:"chi-card__header -sm"},[e("div",{class:"chi-card__title"},"Title")],-1)),e("div",Ze,[s(l,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])])])]),"code-vue":o(()=>[t[1]||(t[1]=e("div",{class:"chi-tab__description"},[u("Use "),e("code",null,"state"),u(" config to achieve state styling")],-1)),s(r,{lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":o(()=>[s(r,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const et=D(V,[["render",at]]);var tt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,lt=(a,t,n,d)=>{for(var i=d>1?void 0:d?it(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&tt(t,n,i),i};let U=class extends g{};U=lt([f({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{htmlblueprint:`<div class="chi-card -portal -bg--white -bg-md--grey-15">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content -p--0">
    <div class="chi-data-table -portal -compact">
      <div class="chi-data-table__head">
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column Location"
            data-column="location" data-sort="ascending" data-label="Location">
            Location
            <chi-button variant="flat" type="icon">
              <chi-icon icon="arrow-up" size="xs"></chi-icon>
            </chi-button>
          </div>
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column High Utilization"
            data-column="highUtilization" data-sort="ascending" data-label="High Utilization">
            High Utilization
            <chi-button variant="flat" type="icon">
              <chi-icon icon="arrow-sort" size="xs"></chi-icon>
            </chi-button>
          </div>
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column Elevated Utilization"
            data-column="elevatedUtilization" data-sort="ascending" data-label="Elevated Utilization">
            Elevated Utilization
            <chi-button variant="flat" type="icon">
              <chi-icon icon="arrow-sort" size="xs"></chi-icon>
            </chi-button>
          </div>
          <div class="chi-data-table__cell -justify-content-md--start -sorting" aria-label="Sort Column Highest %"
            data-column="highest" data-sort="ascending" data-label="Highest %">
            Highest %
            <chi-button variant="flat" type="icon">
              <chi-icon icon="arrow-sort" size="xs"></chi-icon>
            </chi-button>
          </div>
        </div>
        <div class="chi-data-table__row">
          <div class="chi-data-table__cell"></div>
          <div class="chi-data-table__cell">
            <div class="-associated">Total</div>
            <div class="-associated">%</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">Total</div>
            <div class="-associated">%</div>
          </div>
          <div class="chi-data-table__cell"></div>
        </div>
      </div>
      <div class="chi-data-table__body">
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Location 1</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">3</div>
            <div class="-associated">98%</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">-</div>
            <div class="-associated">-</div>
          </div>
          <div class="chi-data-table__cell">
            <div>98%</div>
          </div>
        </div>
        <div class="chi-data-table__row -striped -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Location 2</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">1</div>
            <div class="-associated">98%</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">3</div>
            <div class="-associated">67%</div>
          </div>
          <div class="chi-data-table__cell">
            <div>98%</div>
          </div>
        </div>
        <div class="chi-data-table__row -md">
          <div class="chi-data-table__cell -key -bold">
            <div>Location 3</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">-</div>
            <div class="-associated">-</div>
          </div>
          <div class="chi-data-table__cell">
            <div class="-associated">2</div>
            <div class="-associated">66</div>
          </div>
          <div class="chi-data-table__cell">
            <div>66%</div>
          </div>
        </div>
      </div>
      <div class="chi-data-table__footer">
        <nav class="chi-pagination -compact" role="navigation" aria-label="Pagination">
          <div class="chi-pagination__content">
            <div class="chi-pagination__start">
              <div class="chi-pagination__results">
                <span class="chi-pagination__label">240 Results</span>
              </div>
            </div>
            <div class="chi-pagination__center">
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="First page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-page-first" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Previous page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <div class="chi-pagination__label">
                <strong>2</strong>
                <span>of</span>
                <strong>3</strong>
              </div>
              <div class="chi-pagination__button-group chi-button-group">
                <button class="chi-button -icon -flat -xs" aria-label="Next page">
                  <div class="chi-button__content">
                    <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
                  </div>
                </button>
                <button class="chi-button -icon -flat -xs" aria-label="Last page">
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
    </div>
  </div>
</div>`}})})],U);function dt(a,t,n,d,i,c){const l=w,r=N;return b(),y(r,{title:"Two tier header",id:"two-tier-data-table",tabs:a.exampleTabs},{example:o(()=>t[0]||(t[0]=[e("div",{class:"chi-card -portal -bg--white -bg-md--grey-15"},[e("div",{class:"chi-card__header -sm"},[e("div",{class:"chi-card__title"},"Title")]),e("div",{class:"chi-card__content -p--0"},[e("div",{class:"chi-data-table -portal -compact"},[e("div",{class:"chi-data-table__head"},[e("div",{class:"chi-data-table__row"},[e("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column Location","data-column":"localization","data-sort":"ascending","data-label":"Location"},[u("Location"),e("chi-button",{variant:"flat",type:"icon"},[e("chi-icon",{icon:"arrow-up",size:"xs"})])]),e("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column High Utilization","data-column":"highUtilization","data-sort":"ascending","data-label":"High Utilization"},[u("High Utilization"),e("chi-button",{variant:"flat",type:"icon"},[e("chi-icon",{icon:"arrow-sort",size:"xs"})])]),e("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column Elevated Utilization","data-column":"elevatedUtilization","data-sort":"ascending","data-label":"Elevated Utilization"},[u("Elevated Utilization"),e("chi-button",{variant:"flat",type:"icon"},[e("chi-icon",{icon:"arrow-sort",size:"xs"})])]),e("div",{class:"chi-data-table__cell -justify-content-md--start -sorting","aria-label":"Sort Column Highest %","data-column":"highest","data-sort":"ascending","data-label":"Highest %"},[u("Highest %"),e("chi-button",{variant:"flat",type:"icon"},[e("chi-icon",{icon:"arrow-sort",size:"xs"})])])]),e("div",{class:"chi-data-table__row"},[e("div",{class:"chi-data-table__cell"}),e("div",{class:"chi-data-table__cell"},[e("div",{class:"-associated"},"Total"),e("div",{class:"-associated"},"%")]),e("div",{class:"chi-data-table__cell"},[e("div",{class:"-associated"},"Total"),e("div",{class:"-associated"},"%")]),e("div",{class:"chi-data-table__cell"})])]),e("div",{class:"chi-data-table__body"},[e("div",{class:"chi-data-table__row -md"},[e("div",{class:"chi-data-table__cell -key -bold"},[e("div",null,"Location 1")]),e("div",{class:"chi-data-table__cell"},[e("div",{class:"-associated"},"3"),e("div",{class:"-associated"},"98%")]),e("div",{class:"chi-data-table__cell"},[e("div",{class:"-associated"},"-"),e("div",{class:"-associated"},"-")]),e("div",{class:"chi-data-table__cell"},[e("div",null,"98%")])]),e("div",{class:"chi-data-table__row -striped -md"},[e("div",{class:"chi-data-table__cell -key -bold"},[e("div",null,"Location 2")]),e("div",{class:"chi-data-table__cell"},[e("div",{class:"-associated"},"1"),e("div",{class:"-associated"},"98%")]),e("div",{class:"chi-data-table__cell"},[e("div",{class:"-associated"},"3"),e("div",{class:"-associated"},"67%")]),e("div",{class:"chi-data-table__cell"},[e("div",null,"98%")])]),e("div",{class:"chi-data-table__row -md"},[e("div",{class:"chi-data-table__cell -key -bold"},[e("div",null,"Location 3")]),e("div",{class:"chi-data-table__cell"},[e("div",{class:"-associated"},"-"),e("div",{class:"-associated"},"-")]),e("div",{class:"chi-data-table__cell"},[e("div",{class:"-associated"},"2"),e("div",{class:"-associated"},"66")]),e("div",{class:"chi-data-table__cell"},[e("div",null,"66%")])])]),e("div",{class:"chi-data-table__footer"},[e("nav",{class:"chi-pagination -compact",role:"navigation","aria-label":"Pagination"},[e("div",{class:"chi-pagination__content"},[e("div",{class:"chi-pagination__start"},[e("div",{class:"chi-pagination__results -text--xs"},[e("span",{class:"chi-pagination__label"},"240 Results")])]),e("div",{class:"chi-pagination__center"},[e("div",{class:"chi-pagination__button-group chi-button-group"},[e("button",{class:"chi-button -icon -flat -xs","aria-label":"First page"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-page-first","aria-hidden":"true"})])]),e("button",{class:"chi-button -icon -flat -xs","aria-label":"Previous page"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-chevron-left","aria-hidden":"true"})])])]),e("div",{class:"chi-pagination__label"},[e("strong",null,"2"),e("span",null,"of"),e("strong",null,"3")]),e("div",{class:"chi-pagination__button-group chi-button-group"},[e("button",{class:"chi-button -icon -flat -xs","aria-label":"Next page"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-chevron-right","aria-hidden":"true"})])]),e("button",{class:"chi-button -icon -flat -xs","aria-label":"Last page"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-page-last","aria-hidden":"true"})])])])]),e("div",{class:"chi-pagination__end"})])])])])])],-1)])),"code-htmlblueprint":o(()=>[s(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const nt=D(U,[["render",dt]]);var ct=Object.defineProperty,st=Object.getOwnPropertyDescriptor,ot=(a,t,n,d)=>{for(var i=d>1?void 0:d?st(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&ct(t,n,i),i};let J=class extends g{};J=ot([f({components:{ChiPopoverExample:X,ChiDropdownExample:Y},methods:{printTable(){var a;(a=this.$refs.dataTableComplex)==null||a.print("Data table - Complex")}},mounted(){chi.tab(document.getElementById("example-vertical-portal"))},data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint",disabled:!0}],config:{columnResize:!1,selectable:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},resultsPerPage:3,defaultSort:{key:"name",sortBy:"string",direction:"ascending"},showExpandAll:!0,showSelectAllDropdown:!0},table:{head:{name:{label:"Name",sortable:!0,sortBy:"name",sortDataType:"string",key:!0,bold:!0},status:{label:"Status",sortable:!0,sortBy:"status",sortDataType:"string",description:"Helpful information goes here."},userID:{label:"User ID",key:!0,icon:"user"},lastLogin:{label:"Last Login",key:!0},actions:{label:"Actions",align:"right",isPrintDisabled:!0}},body:[{expanded:!0,id:"name-1",data:[{template:"name",payload:{name:"Name 1",id:"name-1"}},{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-1"}}],nestedContent:{table:{data:[{id:"child-1-name-1",data:["Child 1 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-1"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-1",data:["Grand Child 1 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-1"}}]},{id:"grandchild-2-name-1",data:["Grand Child 2 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-1"}}]}]}}},{id:"child-2-name-1",data:["Child 2 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-1"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-1",data:["Grand Child 3 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-1"}}]},{id:"grandchild-4-name-1",data:["Grand Child 4 Name 1",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-1","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-1"}}]}]}}}]}}},{id:"name-2",data:[{template:"name",payload:{name:"Name 2",id:"name-2"}},{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-2"}}],nestedContent:{table:{data:[{id:"child-1-name-2",data:["Child 1 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-2"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-2",data:["Grand Child 1 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-2"}}]},{id:"grandchild-2-name-2",data:["Grand Child 2 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-2"}}]}]}}},{id:"child-2-name-2",data:["Child 2 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-2"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-2",data:["Grand Child 3 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-2"}}]},{id:"grandchild-4-name-2",data:["Grand Child 4 Name 2",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-2","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-2"}}]}]}}}]}}},{id:"name-3",data:[{template:"name",payload:{name:"Name 3",id:"name-3"}},{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-3"}}],nestedContent:{table:{data:[{id:"child-1-name-3",data:["Child 1 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-3"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-3",data:["Grand Child 1 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-3"}}]},{id:"grandchild-2-name-3",data:["Grand Child 2 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-3"}}]}]}}},{id:"child-2-name-3",data:["Child 2 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-3"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-3",data:["Grand Child 3 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-3"}}]},{id:"grandchild-4-name-3",data:["Grand Child 4 Name 3",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-3","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-3"}}]}]}}}]}}},{id:"name-4",data:[{template:"name",payload:{name:"Name 4",id:"name-4"}},{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-4"}}],nestedContent:{table:{data:[{id:"child-1-name-4",data:["Child 1 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-4"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-4",data:["Grand Child 1 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-4"}}]},{id:"grandchild-2-name-4",data:["Grand Child 2 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-4"}}]}]}}},{id:"child-2-name-4",data:["Child 2 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-4"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-4",data:["Grand Child 3 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-4"}}]},{id:"grandchild-4-name-4",data:["Grand Child 4 Name 4",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-4","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-4"}}]}]}}}]}}},{id:"name-5",data:[{template:"name",payload:{name:"Name 5",id:"name-5"}},{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-5"}}],nestedContent:{table:{data:[{id:"child-1-name-5",data:["Child 1 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-5"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-5",data:["Grand Child 1 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-5"}}]},{id:"grandchild-2-name-5",data:["Grand Child 2 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-5"}}]}]}}},{id:"child-2-name-5",data:["Child 2 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-5"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-5",data:["Grand Child 3 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-5"}}]},{id:"grandchild-4-name-5",data:["Grand Child 4 Name 5",{template:"status",payload:{status:"Overdue",icon:"circle-alert",color:"danger"}},"user-name-5","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-5"}}]}]}}}]}}},{id:"name-6",data:[{template:"name",payload:{name:"Name 6",id:"name-6"}},{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 3:26 p.m.",{template:"actions",payload:{id:"name-6"}}],nestedContent:{table:{data:[{id:"child-1-name-6",data:["Child 1 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-1-name-6"}}],nestedContent:{table:{data:[{id:"grandchild-1-name-6",data:["Grand Child 1 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-1-name-6"}}]},{id:"grandchild-2-name-6",data:["Grand Child 2 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-2-name-6"}}]}]}}},{id:"child-2-name-6",data:["Child 2 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"child-2-name-6"}}],nestedContent:{table:{data:[{id:"grandchild-3-name-6",data:["Grand Child 3 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-3-name-6"}}]},{id:"grandchild-4-name-6",data:["Grand Child 4 Name 6",{template:"status",payload:{status:"Due",icon:"warning",color:"warning"}},"user-name-6","18 Dec 2020 2:38 a.m.",{template:"actions",payload:{id:"grandchild-4-name-6"}}]}]}}}]}}}]},codeSnippets:{dataTableExample:`<!-- Vue component -->
<ChiDataTable :config="config" :dataTableData="table" ref="dataTableComplex">
  <template #status="payload">
    <i :class="\`chi-icon icon-\${payload.icon} -icon--\${payload.color}\`" aria-hidden="true"></i>
    <span class="-text--truncate" style="padding-left: 0.5rem;">
      {{ payload.status }}
    </span>
  </template>
  <template #name="payload">
    <ExamplePopover :name="payload.name" :id="payload.id" />
  </template>
  <template #actions="payload">
    <ExampleDropdown :id="payload.id" />
  </template>
  <template #toolbar>
    <ChiDataTableToolbar>
      <template v-slot:start></template>
      <template v-slot:end>
        <chi-button @chiClick="printTable" variant="flat" type="icon"
         aria-label="Print data table complex example">
          <chi-icon icon="print"></chi-icon>
        </chi-button>
      </template>
    </ChiDataTableToolbar>
  </template>
  <template #bulk-actions>
    <div class="chi-bulk-actions__buttons">
      <div class="chi-bulk-actions__buttons-mobile -z--40">
        <chi-button variant="flat" type="icon" aria-label="Edit">
          <chi-icon icon="edit"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" aria-label="Compose">
          <chi-icon icon="compose"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" aria-label="Delete">
          <chi-icon icon="delete"></chi-icon>
        </chi-button>
        <chi-button variant="flat" type="icon" aria-label="Print">
          <chi-icon icon="print"></chi-icon>
        </chi-button>
      </div>
      <div class="chi-bulk-actions__buttons-desktop">
        <chi-button size="xs" aria-label="Download">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Download </span>
        </chi-button>
        <chi-button size="xs" aria-label="Compose">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Compose </span>
        </chi-button>
        <chi-button size="xs" aria-label="Delete">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Delete </span>
        </chi-button>
        <chi-button size="xs" aria-label="Print">
          <chi-icon icon="arrow-to-bottom"></chi-icon>
          <span> Print </span>
        </chi-button>
      </div>
    </div>
  </template>
</ChiDataTable>

<!-- imports -->
import ExamplePopover from './ExamplePopover.vue';
import ExampleDropdown from './ExampleDropdown.vue';

<!-- Config and Data -->
data: {
  config: {
    columnResize: false,
    selectable: true,
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
    },
    resultsPerPage: 3,
    defaultSort: {
      key: 'name',
      sortBy: 'string',
      direction: 'ascending',
    },
    showExpandAll: true,
    showSelectAllDropdown: true
  },
  table: {
    head: {
      name: { label: 'Name', sortable: true, sortBy: 'name', sortDataType: 'string', key: true, bold: true },
      status: { label: 'Status', sortable: true, sortBy: 'status', sortDataType: 'string', description: 'Helpful information goes here.' },
      userID: { label: 'User ID', key: true, icon: 'user' },
      lastLogin: { label: 'Last Login', key: true },
      actions: { label: 'Actions', align: 'right', isPrintDisabled: true }
    },
    body: [
      {
        expanded: true,
        id: "name-1",
        data: [
          { template: "name", payload: { name: "Name 1", id: "name-1" } },
          {
            template: "status",
            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
          },
          "user-name-1",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-1" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-1",
                data: [
                  "Child 1 Name 1",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-1",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-1" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-1",
                        data: [
                          "Grand Child 1 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-1" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-1",
                        data: [
                          "Grand Child 2 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-1" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-1",
                data: [
                  "Child 2 Name 1",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-1",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-1" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-1",
                        data: [
                          "Grand Child 3 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-1" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-1",
                        data: [
                          "Grand Child 4 Name 1",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-1",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-1" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-2",
        data: [
          { template: "name", payload: { name: "Name 2", id: "name-2" } },
          {
            template: "status",
            payload: { status: "Due", icon: 'warning', color: 'warning' },
          },
          "user-name-2",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-2" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-2",
                data: [
                  "Child 1 Name 2",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-2",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-2" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-2",
                        data: [
                          "Grand Child 1 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-2" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-2",
                        data: [
                          "Grand Child 2 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-2" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-2",
                data: [
                  "Child 2 Name 2",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-2",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-2" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-2",
                        data: [
                          "Grand Child 3 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-2" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-2",
                        data: [
                          "Grand Child 4 Name 2",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-2",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-2" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-3",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 3",
              id: "name-3",
            },
          },
          {
            template: "status",
            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
          },
          "user-name-3",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-3" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-3",
                data: [
                  "Child 1 Name 3",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-3",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-3" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-3",
                        data: [
                          "Grand Child 1 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-3" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-3",
                        data: [
                          "Grand Child 2 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-3" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-3",
                data: [
                  "Child 2 Name 3",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-3",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-3" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-3",
                        data: [
                          "Grand Child 3 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-3" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-3",
                        data: [
                          "Grand Child 4 Name 3",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-3",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-3" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-4",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 4",
              id: "name-4",
            },
          },
          {
            template: "status",
            payload: { status: "Due", icon: 'warning', color: 'warning' },
          },
          "user-name-4",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-4" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-4",
                data: [
                  "Child 1 Name 4",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-4",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-4" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-4",
                        data: [
                          "Grand Child 1 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-4" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-4",
                        data: [
                          "Grand Child 2 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-4" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-4",
                data: [
                  "Child 2 Name 4",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-4",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-4" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-4",
                        data: [
                          "Grand Child 3 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-4" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-4",
                        data: [
                          "Grand Child 4 Name 4",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-4",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-4" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-5",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 5",
              id: "name-5",
            },
          },
          {
            template: "status",
            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
          },
          "user-name-5",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-5" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-5",
                data: [
                  "Child 1 Name 5",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-5",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-5" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-5",
                        data: [
                          "Grand Child 1 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-5" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-5",
                        data: [
                          "Grand Child 2 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-5" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-5",
                data: [
                  "Child 2 Name 5",
                  {
                    template: "status",
                    payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                  },
                  "user-name-5",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-5" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-5",
                        data: [
                          "Grand Child 3 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-5" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-5",
                        data: [
                          "Grand Child 4 Name 5",
                          {
                            template: "status",
                            payload: { status: "Overdue", icon: "circle-alert", color: "danger" },
                          },
                          "user-name-5",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-5" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: "name-6",
        data: [
          {
            template: "name",
            payload: {
              name: "Name 6",
              id: "name-6",
            },
          },
          {
            template: "status",
            payload: { status: "Due", icon: 'warning', color: 'warning' },
          },
          "user-name-6",
          "18 Dec 2020 3:26 p.m.",
          {
            template: "actions",
            payload: { id: "name-6" },
          },
        ],
        nestedContent: {
          table: {
            data: [
              {
                id: "child-1-name-6",
                data: [
                  "Child 1 Name 6",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-6",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-1-name-6" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-1-name-6",
                        data: [
                          "Grand Child 1 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-1-name-6" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-2-name-6",
                        data: [
                          "Grand Child 2 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-2-name-6" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                id: "child-2-name-6",
                data: [
                  "Child 2 Name 6",
                  {
                    template: "status",
                    payload: { status: "Due", icon: 'warning', color: 'warning' },
                  },
                  "user-name-6",
                  "18 Dec 2020 2:38 a.m.",
                  {
                    template: "actions",
                    payload: { id: "child-2-name-6" },
                  },
                ],
                nestedContent: {
                  table: {
                    data: [
                      {
                        id: "grandchild-3-name-6",
                        data: [
                          "Grand Child 3 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-3-name-6" },
                          },
                        ],
                      },
                      {
                        id: "grandchild-4-name-6",
                        data: [
                          "Grand Child 4 Name 6",
                          {
                            template: "status",
                            payload: { status: "Due", icon: 'warning', color: 'warning' },
                          },
                          "user-name-6",
                          "18 Dec 2020 2:38 a.m.",
                          {
                            template: "actions",
                            payload: { id: "grandchild-4-name-6" },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
},
methods: {
  printTable() {
    this.$refs.dataTableComplex.print('Data table - Complex')
  }
}`,popoverExample:`<!-- Template -->
<template>
  <div class="-text--truncate">
    <a
      :id="\`name-popover-button-\${id}\`"
      href="#"
      :data-target="\`#name-popover-\${id}\`"
      position="top-start">
      {{id}}
    </a>
    <section
      class="chi-popover"
      :id="\`name-popover-\${id}\`"
      aria-modal="true"
      role="dialog"
      :aria-label="name"
    >
      <div class="chi-popover__content">
        {{ name }}
      </div>
    </section>
  </div>
</template>

<!-- Mounted -->
mounted() {
  let hoverAnimationTimeout: ReturnType<typeof setTimeout> | undefined;
  const buttonOpenOnHover = document.getElementById(\`ticket-popover-button-\${this.$props.id}\`);
  const popover = chi.popover(buttonOpenOnHover);

  if (buttonOpenOnHover) {
    buttonOpenOnHover.addEventListener('mouseenter', function() {
      hoverAnimationTimeout = setTimeout(() => {
        popover.show();
      }, 300);
    });

    buttonOpenOnHover.addEventListener('mouseleave', function() {
      if (hoverAnimationTimeout) {
        clearTimeout(hoverAnimationTimeout);
      }
      popover.hide();
    });
  }
}
beforeDestroy() {
  this.popover.dispose();
}`,dropdownExample:`<!-- Template -->
<template>
  <div class="chi-dropdown -position--absolute">
    <button
      :id="'action-button-' + id"
      class="chi-button -icon -primary -flat"
      aria-label="More options"
      data-position="left-start"
    >
      <div class="chi-button__content">
        <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
      </div>
    </button>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#" v-for="action in actions">
        <span><chi-icon :icon="action.icon" size="sm" color="primary"></chi-icon></span>
        <span>{{ action.name }}</span>
      </a>
    </div>
  </div>
</template>

<!-- Config and data -->
data: {
  actions: [
    {name: 'View', icon: 'check-alt'},
    {name: 'Edit', icon: 'edit'},
    {name: 'Delete', icon: 'delete'}
  ]
}

<!-- mounted -->
mounted() {
  this.dropdown = chi.dropdown(document.getElementById(\`action-button-\${this.id}\`));
}
beforeDestroy() {
  this.dropdown.dispose();
}`}})})],J);const rt={class:"chi-card -portal -bg--white"},mt={class:"chi-card__content -p--0"},pt={class:"-text--truncate",style:{"padding-left":"0.5rem"}},vt={class:"-d--flex -no-gutter -bt--1"},bt={class:"-flex--grow1"},ht={class:"chi-tabs-panel -active",id:"vertical-portal-1",role:"tabpanel"},ut={class:"chi-tabs-panel",id:"vertical-portal-2",role:"tabpanel"},_t={class:"chi-tabs-panel",id:"vertical-portal-3",role:"tabpanel"};function gt(a,t,n,d,i,c){const l=m("ChiPopoverExample"),r=m("ChiDropdownExample"),v=m("ChiDataTableToolbar"),p=m("ChiDataTable"),h=w,T=N;return b(),y(T,{title:"Complex",id:"complex-data-table",tabs:a.exampleTabs},{example:o(()=>[e("div",rt,[t[3]||(t[3]=e("div",{class:"chi-card__header -sm"},[e("div",{class:"chi-card__title"},"Title")],-1)),e("div",mt,[s(p,{config:a.config,dataTableData:a.table,ref:"dataTableComplex"},{status:o(_=>[e("i",{class:q(`chi-icon icon-${_.icon} -icon--${_.color}`),"aria-hidden":"true"},null,2),e("span",pt,K(_.status),1)]),name:o(_=>[s(l,{name:_.name,id:_.id},null,8,["name","id"])]),actions:o(_=>[s(r,{id:_.id},null,8,["id"])]),toolbar:o(()=>[s(v,null,{end:o(()=>[e("chi-button",{onClick:t[0]||(t[0]=(..._)=>a.printTable&&a.printTable(..._)),variant:"flat",type:"icon","aria-label":"Print data table complex example"},t[1]||(t[1]=[e("chi-icon",{icon:"print"},null,-1)]))]),_:1})]),"bulk-actions":o(()=>t[2]||(t[2]=[e("div",{class:"chi-bulk-actions__buttons"},[e("div",{class:"chi-bulk-actions__buttons-mobile -z--40"},[e("chi-button",{variant:"flat",type:"icon","aria-label":"Edit"},[e("chi-icon",{icon:"edit"})]),e("chi-button",{variant:"flat",type:"icon","aria-label":"Compose"},[e("chi-icon",{icon:"compose"})]),e("chi-button",{variant:"flat",type:"icon","aria-label":"Delete"},[e("chi-icon",{icon:"delete"})]),e("chi-button",{variant:"flat",type:"icon","aria-label":"Print"},[e("chi-icon",{icon:"print"})])]),e("div",{class:"chi-bulk-actions__buttons-desktop"},[e("chi-button",{size:"xs","aria-label":"Download"},[e("chi-icon",{icon:"arrow-to-bottom"}),e("span",null,"Download")]),e("chi-button",{size:"xs","aria-label":"Compose"},[e("chi-icon",{icon:"arrow-to-bottom"}),e("span",null,"Compose")]),e("chi-button",{size:"xs","aria-label":"Delete"},[e("chi-icon",{icon:"arrow-to-bottom"}),e("span",null,"Delete")]),e("chi-button",{size:"xs","aria-label":"Print"},[e("chi-icon",{icon:"arrow-to-bottom"}),e("span",null,"Print")])])],-1)])),_:1},8,["config","dataTableData"])])])]),"code-vue":o(()=>[t[5]||(t[5]=e("div",{class:"chi-tab__description -p--2"},"Create reusable Vue components based on your needs and use them as custom templates for Data Table cells and row accordions",-1)),e("div",vt,[t[4]||(t[4]=e("div",{class:"-bg--grey-15 -pt--3 -br--1",style:{width:"14rem"}},[e("ul",{class:"chi-tabs -vertical",id:"example-vertical-portal",role:"tablist","aria-label":"chi-tabs-vertical-portal"},[e("li",{class:"-active"},[e("a",{href:"#vertical-portal-1",role:"tab","aria-selected":"true","aria-controls":"vertical-portal-1"},"ExampleDataTable.vue")]),e("li",null,[e("a",{href:"#vertical-portal-2",role:"tab","aria-selected":"false",tabindex:"-1","aria-controls":"vertical-portal-2"},"ExamplePopover.vue")]),e("li",null,[e("a",{href:"#vertical-portal-3",role:"tab","aria-selected":"false",tabindex:"-1","aria-controls":"vertical-portal-3"},"ExampleDropdown.vue")]),e("li",{class:"chi-sliding-border"})])],-1)),e("div",bt,[e("div",ht,[s(h,{lang:"html",code:a.codeSnippets.dataTableExample},null,8,["code"])]),e("div",ut,[s(h,{lang:"html",code:a.codeSnippets.popoverExample},null,8,["code"])]),e("div",_t,[s(h,{lang:"html",code:a.codeSnippets.dropdownExample},null,8,["code"])])])])]),_:1},8,["tabs"])}const ft=D(J,[["render",gt]]);var Dt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,wt=(a,t,n,d)=>{for(var i=d>1?void 0:d?yt(t,n):t,c=a.length-1,l;c>=0;c--)(l=a[c])&&(i=(d?l(t,n,i):l(i))||i);return d&&i&&Dt(t,n,i),i};let F=class extends g{constructor(){super(...arguments);W(this,"selectedTheme",pa())}};F=wt([f({components:{Complex:pe,Accordion:ga,Active:Na,BaseExample:Pa,Empty:Ga,Selectable:Ja,Sizes:Qa,ConfigStyled:ja,Sorting:ee,AccordionPortal:fe,BasePortal:Le,EmptyPortal:Ge,RadioSelectionPortal:He,SecondLineWrapping:qe,State:et,TwoTierHeader:nt,ComplexPortal:ft}})],F);const Nt={key:0},Ct={key:1};function xt(a,t,n,d,i,c){const l=m("Complex"),r=m("BaseExample"),v=m("Empty"),p=m("ConfigStyled"),h=m("Active"),T=m("Selectable"),_=m("Accordion"),Z=m("Sorting"),aa=m("Sizes"),ea=m("ComplexPortal"),ta=m("BasePortal"),ia=m("SecondLineWrapping"),la=m("State"),da=m("EmptyPortal"),na=m("RadioSelectionPortal"),ca=m("AccordionPortal"),sa=m("TwoTierHeader"),oa=va;return b(),C(x,null,[t[0]||(t[0]=e("h2",null,"Examples",-1)),s(oa,null,{default:o(()=>[["lumen","centurylink"].includes(a.selectedTheme)?(b(),C("div",Nt,[s(l),s(r),s(v),s(p),s(h),s(T),s(_),s(Z),s(aa)])):P("",!0),["portal","brightspeed","colt"].includes(a.selectedTheme)?(b(),C("div",Ct,[s(ea),s(ta),s(ia),s(la),s(da),s(na),s(ca),s(sa)])):P("",!0)]),_:1})],64)}const Rt=D(F,[["render",xt]]);export{Rt as default};

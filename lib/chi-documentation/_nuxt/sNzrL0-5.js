import{V as p,N as _}from"./NAah3XrW.js";import{_ as h}from"./onyWiYp2.js";import{_ as u}from"./CAQzZ0uH.js";import{o as g,h as f,w as n,m as N,a as t,b as o,d as m}from"./CEIPSiTs.js";import{_ as D}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var y=Object.defineProperty,P=Object.getOwnPropertyDescriptor,T=(e,a,s,d)=>{for(var i=d>1?void 0:d?P(a,s):a,c=e.length-1,l;c>=0;c--)(l=e[c])&&(i=(d?l(a,s,i):l(i))||i);return d&&i&&y(a,s,i),i};let r=class extends p{};r=T([_({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},resultsPerPage:3},table:{head:{name:{label:"Name",key:!0,bold:!0},id:{label:"ID",key:!0},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
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
</div>`}})})],r);const C={class:"chi-card -portal -bg--white"},L={class:"chi-card__content -p--0"};function w(e,a,s,d,i,c){const l=N("ChiDataTable"),v=h,b=u;return g(),f(b,{title:"Base",id:"base-portal-data-table",tabs:e.exampleTabs},{example:n(()=>[t("div",C,[a[0]||(a[0]=t("div",{class:"chi-card__header -sm"},[t("div",{class:"chi-card__title"},"Title")],-1)),t("div",L,[o(l,{config:e.config,dataTableData:e.table},null,8,["config","dataTableData"])])])]),"code-vue":n(()=>[a[1]||(a[1]=t("div",{class:"chi-tab__description"},[m("Use "),t("code",null,"portal"),m(" config to achieve portal styling")],-1)),o(v,{lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(v,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const R=D(r,[["render",w]]);export{R as default};

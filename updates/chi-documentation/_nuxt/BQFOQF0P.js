import{V as b,N as p}from"./uJTUijt2.js";import{_ as h}from"./D8GK0F__.js";import{_ as u}from"./DKu8Jd2y.js";import{o as g,f,w as n,r as N,a as t,b as o,d as m}from"./B5CYXVwa.js";import{_ as D}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var y=Object.defineProperty,T=Object.getOwnPropertyDescriptor,x=(a,i,c,d)=>{for(var e=d>1?void 0:d?T(i,c):i,s=a.length-1,l;s>=0;s--)(l=a[s])&&(e=(d?l(i,c,e):l(e))||e);return d&&e&&y(i,c,e),e};let r=class extends b{};r=x([p({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},resultsPerPage:3},table:{head:{name:{label:"Name",key:!0,bold:!0},id:{label:"ID",key:!0},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."],state:"danger"},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
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
</div>`}})})],r);const w={class:"chi-card -portal -bg--white"},C=t("div",{class:"chi-card__header -sm"},[t("div",{class:"chi-card__title"},"Title")],-1),L={class:"chi-card__content -p--0"},P=t("div",{class:"chi-tab__description"},[m("Use "),t("code",null,"state"),m(" config to achieve state styling")],-1);function k(a,i,c,d,e,s){const l=N("ChiDataTable"),v=h,_=u;return g(),f(_,{title:"State",id:"state-data-table",tabs:a.exampleTabs},{example:n(()=>[t("div",w,[C,t("div",L,[o(l,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])])])]),"code-vue":n(()=>[P,o(v,{lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":n(()=>[o(v,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const j=D(r,[["render",k]]);export{j as default};

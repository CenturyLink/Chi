import{V as m,N as p}from"./uJTUijt2.js";import{_ as h}from"./D8GK0F__.js";import{_ as u}from"./DKu8Jd2y.js";import{o as g,f,w as o,r as N,a as i,b as n,d as b}from"./B5CYXVwa.js";import{_ as D}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var L=Object.defineProperty,P=Object.getOwnPropertyDescriptor,T=(a,t,c,l)=>{for(var e=l>1?void 0:l?P(t,c):t,s=a.length-1,d;s>=0;s--)(d=a[s])&&(e=(l?d(t,c,e):d(e))||e);return l&&e&&L(t,c,e),e};let r=class extends m{};r=T([p({data:()=>({exampleTabs:[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"vue",label:"Vue"},{active:!1,id:"htmlblueprint",label:"HTML Blueprint"}],config:{columnResize:!0,style:{portal:!0,noBorder:!1,bordered:!1,hover:!1,size:"md",striped:!0},pagination:{activePage:1,compact:!0,firstLast:!0,pageJumper:!1},selectable:"radio",resultsPerPage:3},table:{head:{name:{label:"Name"},id:{label:"ID"},lastLogin:{label:"Last Login"}},body:[{id:"name-1",data:["Name 1","name-1","18 Dec 2020 3:26 p.m."]},{id:"name-2",data:["Name 2","name-2","18 Dec 2020 2:38 a.m."]},{id:"name-3",data:["Name 3","name-3","5 Nov 2020 10:15 a.m."]},{id:"name-4",data:["Name 4","name-4","18 Dec 2020 3:26 p.m."]},{id:"name-5",data:["Name 5","name-5","18 Dec 2020 2:38 a.m."]},{id:"name-6",data:["Name 6","name-6","5 Nov 2020 10:15 a.m."]}]},codeSnippets:{vue:`<!-- Vue component -->
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
</div>`}})})],r);const w={class:"chi-card -portal -bg--white"},x=i("div",{class:"chi-card__header -sm"},[i("div",{class:"chi-card__title"},"Title")],-1),C={class:"chi-card__content -p--0"},y=i("div",{class:"chi-tab__description"},[b("Use "),i("code",null,"selectable"),b(" config to render rows with radio buttons")],-1);function V(a,t,c,l,e,s){const d=N("ChiDataTable"),v=h,_=u;return g(),f(_,{title:"Radio selection",id:"radio-selection-portal-data-table",tabs:a.exampleTabs},{example:o(()=>[i("div",w,[x,i("div",C,[n(d,{config:a.config,dataTableData:a.table},null,8,["config","dataTableData"])])])]),"code-vue":o(()=>[y,n(v,{lang:"html",code:a.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":o(()=>[n(v,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const J=D(r,[["render",V]]);export{J as default};

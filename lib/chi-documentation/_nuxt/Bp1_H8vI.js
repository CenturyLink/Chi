var k=Object.defineProperty;var q=(a,i,t)=>i in a?k(a,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[i]=t;var h=(a,i,t)=>q(a,typeof i!="symbol"?i+"":i,t);import{V as $,N as M}from"./NAah3XrW.js";import{o,h as P,w as T,a as e,c as d,F as p,i as b,n as I,t as v,d as u,b as _,j as A,p as N,m as f,l as B}from"./CEIPSiTs.js";import{_ as E}from"./onyWiYp2.js";import{_ as j}from"./CS2TcPBX.js";import{_ as z}from"./CAQzZ0uH.js";import{_ as C}from"./DlAUqK2U.js";import U from"./PdNPwzCR.js";import R from"./Cg3jikS1.js";import V from"./CSNTNV0E.js";import F from"./CMOBFM-d.js";import J from"./CtpSzXSy.js";import{s as W}from"./DtNz156Q.js";import{_ as G}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=(a,i,t,s)=>{for(var c=s>1?void 0:s?Q(i,t):i,l=a.length-1,n;l>=0;l--)(n=a[l])&&(c=(s?n(i,t,c):n(c))||c);return s&&c&&K(i,t,c),c};let L=class extends ${constructor(){super(...arguments);h(this,"menuItems",["1","2","3","4"]);h(this,"drawerMenuItems",["1","2"]);h(this,"activeMenuItem","1");h(this,"activeDrawerMenuItem","2");h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<aside class="chi-sidenav" id="example-base">
  <div class="chi-sidenav__content">
    <nav>
      <ul class="chi-sidenav__list">
        <li class="-active">
          <a href="#drawer-0-1">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Active Item</span>
          </a>
        </li>
        <li>
          <a href="#drawer-0-2">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Menu Item</span>
          </a>
        </li>
        <li>
          <a href="#drawer-0-3">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Menu Item</span>
          </a>
        </li>
        <li>
          <a href="#drawer-0-4">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Menu Item</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="chi-sidenav__drawers">
    <div class="chi-drawer -animated -left" id="drawer-0-1">
      <div class="chi-drawer__header">
        <div class="chi-drawer__title">Menu item 1</div>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content">
        <div class="chi-accordion">
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 1</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.1</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.2</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chi-accordion__item -active">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 2</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.1</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item -active">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.2</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.1</span>
                    </a>
                    <a class="-active" href="#exampleHashTarget">
                      <span>Item 2.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#exampleHashTarget">
            <span>
              External
              <i class="chi-icon icon-external-link -xs" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="chi-drawer -animated -left" id="drawer-0-2">
      <div class="chi-drawer__header">
        <div class="chi-drawer__title">Menu item 2</div>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content">
        <div class="chi-accordion">
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 1</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.1</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.2</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 2</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.1</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.2</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#exampleHashTarget">
            <span>
              External
              <i class="chi-icon icon-external-link -xs" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="chi-drawer -animated -left" id="drawer-0-3">
      <div class="chi-drawer__header">
        <div class="chi-drawer__title">Menu item 3</div>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content">
        <div class="chi-accordion">
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 1</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.1</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.2</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 2</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.1</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.2</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#exampleHashTarget">
            <span>
              External
              <i class="chi-icon icon-external-link -xs" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="chi-drawer -animated -left" id="drawer-0-4">
      <div class="chi-drawer__header">
        <div class="chi-drawer__title">Menu item 4</div>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content">
        <div class="chi-accordion">
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 1</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.1</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.2</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 2</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.1</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.2</div>
                    <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#exampleHashTarget">
            <span>
              External
              <i class="chi-icon icon-external-link -xs" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</aside>

<script>
  chi.sidenav(document.getElementById('example-base'));
<\/script>`})}mounted(){chi.sidenav(this.$refs.sidenav)}};L=X([M({})],L);const Y={class:"-d--flex -overflow--hidden"},Z={class:"chi-sidenav -flex--shrink0 -animated",ref:"sidenav"},ii={class:"chi-sidenav__content"},ei={class:"chi-sidenav__list"},ai=["href"],ci={class:"chi-sidenav__drawers"},ni=["id"],ti={class:"chi-drawer__header"},si={class:"chi-drawer__title"},oi={class:"chi-drawer__content"},di={class:"chi-accordion"},ri={class:"chi-accordion__trigger"},li={class:"chi-accordion__title"},hi={class:"chi-accordion__content"},vi={class:"chi-accordion"},_i={class:"chi-accordion__trigger"},mi={class:"chi-accordion__title"},ui={class:"chi-accordion__content"},pi={class:"-flex--grow1 -p--3 -pb--4"};function bi(a,i,t,s,c,l){const n=E,w=j,x=z;return o(),P(x,{title:"Base",id:"base-lumen-centurylink",tabs:a.exampleTabs,padding:"-p--0"},{example:T(()=>[e("div",Y,[e("aside",Z,[e("div",ii,[e("nav",null,[e("ul",ei,[(o(!0),d(p,null,b(a.menuItems,r=>(o(),d("li",{class:I(r===a.activeMenuItem?"-active":"")},[e("a",{href:`#drawer-0-${r}`},[i[0]||(i[0]=e("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),e("span",null,v(r===a.activeMenuItem?"Active Item":"Menu Item"),1)],8,ai)],2))),256))])])]),e("div",ci,[(o(!0),d(p,null,b(a.menuItems,r=>(o(),d("div",{class:"chi-drawer -animated -left",id:`drawer-0-${r}`},[e("div",ti,[e("div",si,"Menu item "+v(r),1),i[1]||(i[1]=e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1))]),e("div",oi,[e("div",di,[(o(!0),d(p,null,b(a.drawerMenuItems,m=>(o(),d("div",{class:I(["chi-accordion__item",r===a.activeMenuItem&&m===a.activeDrawerMenuItem?"-active -expanded":""])},[e("button",ri,[e("div",li,"Item "+v(m),1),i[2]||(i[2]=e("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),e("div",hi,[e("div",vi,[(o(!0),d(p,null,b(a.drawerMenuItems,g=>(o(),d("div",{class:I(["chi-accordion__item",`${r===a.activeMenuItem&&m===a.activeDrawerMenuItem&&g===a.activeDrawerMenuItem?"-active -expanded":""}`])},[e("button",_i,[e("div",mi,"Item "+v(m)+"."+v(g),1),i[3]||(i[3]=e("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),e("div",ui,[(o(!0),d(p,null,b(a.drawerMenuItems,H=>(o(),d("a",{href:"#exampleHashTarget",class:I(`${r===a.activeMenuItem&&m===a.activeDrawerMenuItem&&g===a.activeDrawerMenuItem&&H===a.activeDrawerMenuItem?"-active":""}`)},[e("span",null,"Item "+v(m)+"."+v(g)+"."+v(H),1)],2))),256))])],2))),256))])])],2))),256)),i[4]||(i[4]=e("a",{href:"#exampleHashTarget"},[e("span",null,[u("External"),e("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1))])])],8,ni))),256))])],512),e("div",pi,[(o(),d(p,null,b([1,2,3,4],r=>e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":T(()=>[_(n,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":T(()=>[_(w),_(n,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const gi=C(L,[["render",bi]]);var fi=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,wi=(a,i,t,s)=>{for(var c=s>1?void 0:s?Ii(i,t):i,l=a.length-1,n;l>=0;l--)(n=a[l])&&(c=(s?n(i,t,c):n(c))||c);return s&&c&&fi(i,t,c),c};let y=class extends ${constructor(){super(...arguments);h(this,"menuItems",["1","2","3","4"]);h(this,"drawerMenuItems",["1","2"]);h(this,"activeMenuItem","1");h(this,"activeDrawerMenuItem","2");h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<aside class="chi-sidenav" id="sidenav-1">
  <div class="chi-sidenav__content">
    <nav>
      <ul class="chi-sidenav__list">
        <li class="-active">
          <a href="#drawer-2-1" class="">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Active Item</span>
          </a>
        </li>
        <li>
          <a href="#drawer-2-2">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Menu Item</span>
          </a>
        </li>
        <li>
          <a href="#drawer-2-3">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Menu Item</span>
          </a>
        </li>
        <li>
          <a href="#drawer-2-4">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Menu Item</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="chi-sidenav__drawers">
    <div class="chi-drawer -animated -left" id="drawer-2-1">
      <div class="chi-drawer__header">
        <div class="chi-drawer__title">Menu item 1</div>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content">
        <div class="chi-accordion">
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 1</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chi-accordion__item -active">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 2</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item -active">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.1</span>
                    </a>
                    <a class="-active" href="#exampleHashTarget">
                      <span>Item 2.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#exampleHashTarget">
            <span>
              External
              <i class="chi-icon icon-external-link -xs" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="chi-drawer -left -animated" id="drawer-2-2">
      <div class="chi-drawer__header">
        <div class="chi-drawer__title">Menu item 2</div>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content">
        <div class="chi-accordion">
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 1</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 2</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#exampleHashTarget">
            <span>
              External
              <i class="chi-icon icon-external-link -xs" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="chi-drawer -left -animated" id="drawer-2-3">
      <div class="chi-drawer__header">
        <div class="chi-drawer__title">Menu item 3</div>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content">
        <div class="chi-accordion">
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 1</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 2</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#exampleHashTarget">
            <span>
              External
              <i class="chi-icon icon-external-link -xs" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="chi-drawer -left -animated" id="drawer-2-4">
      <div class="chi-drawer__header">
        <div class="chi-drawer__title">Menu item 4</div>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content">
        <div class="chi-accordion">
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 1</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1.2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 1.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chi-accordion__item">
            <button class="chi-accordion__trigger">
              <div class="chi-accordion__title">Item 2</div>
              <i class="chi-icon icon-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="chi-accordion__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.1.2</span>
                    </a>
                  </div>
                </div>
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2.2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div class="chi-accordion__content">
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.1</span>
                    </a>
                    <a href="#exampleHashTarget">
                      <span>Item 2.2.2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#exampleHashTarget">
            <span>
              External
              <i class="chi-icon icon-external-link -xs" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</aside>

<script>
  chi.sidenav(document.getElementById('sidenav-1'), {
    openOnHover: true,
    autoClose: true
  });
<\/script>`})}mounted(){chi.sidenav(this.$refs.sidenav,{openOnHover:!0,autoClose:!0})}};y=wi([M({})],y);const xi={class:"-d--flex -overflow--hidden"},Ti={class:"chi-sidenav -flex--shrink0 -animated",ref:"sidenav"},Hi={class:"chi-sidenav__content"},$i={class:"chi-sidenav__list"},Mi=["href"],Ci={class:"chi-sidenav__drawers"},Li=["id"],yi={class:"chi-drawer__header"},Oi={class:"chi-drawer__title"},Si={class:"chi-drawer__content"},Di={class:"chi-accordion"},Pi={class:"chi-accordion__trigger"},Ei={class:"chi-accordion__title"},Bi={class:"chi-accordion__content"},ji={class:"chi-accordion"},zi={class:"chi-accordion__trigger"},ki={class:"chi-accordion__title"},qi={class:"chi-accordion__content"},Ai={class:"-flex--grow1 -p--3 -pb--4"};function Ni(a,i,t,s,c,l){const n=E,w=j,x=z;return o(),P(x,{title:"Open on hover",id:"open-on-hover",tabs:a.exampleTabs,padding:"-p--0"},{example:T(()=>[e("div",xi,[e("aside",Ti,[e("div",Hi,[e("nav",null,[e("ul",$i,[(o(!0),d(p,null,b(a.menuItems,r=>(o(),d("li",{class:I(r===a.activeMenuItem?"-active":"")},[e("a",{href:`#drawer-2-${r}`},[i[0]||(i[0]=e("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),e("span",null,v(r===a.activeMenuItem?"Active Item":"Menu Item"),1)],8,Mi)],2))),256))])])]),e("div",Ci,[(o(!0),d(p,null,b(a.menuItems,r=>(o(),d("div",{class:"chi-drawer -animated -left",id:`drawer-2-${r}`},[e("div",yi,[e("div",Oi,"Menu item "+v(r),1),i[1]||(i[1]=e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1))]),e("div",Si,[e("div",Di,[(o(!0),d(p,null,b(a.drawerMenuItems,m=>(o(),d("div",{class:I(["chi-accordion__item",r===a.activeMenuItem&&m===a.activeDrawerMenuItem?"-active -expanded":""])},[e("button",Pi,[e("div",Ei,"Item "+v(m),1),i[2]||(i[2]=e("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),e("div",Bi,[e("div",ji,[(o(!0),d(p,null,b(a.drawerMenuItems,g=>(o(),d("div",{class:I(["chi-accordion__item",`${r===a.activeMenuItem&&m===a.activeDrawerMenuItem&&g===a.activeDrawerMenuItem?"-active -expanded":""}`])},[e("button",zi,[e("div",ki,"Item "+v(m)+"."+v(g),1),i[3]||(i[3]=e("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),e("div",qi,[(o(!0),d(p,null,b(a.drawerMenuItems,H=>(o(),d("a",{href:"#exampleHashTarget",class:I(`${r===a.activeMenuItem&&m===a.activeDrawerMenuItem&&g===a.activeDrawerMenuItem&&H===a.activeDrawerMenuItem?"-active":""}`)},[e("span",null,"Item "+v(m)+"."+v(g)+"."+v(H),1)],2))),256))])],2))),256))])])],2))),256)),i[4]||(i[4]=e("a",{href:"#exampleHashTarget"},[e("span",null,[u("External"),e("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1))])])],8,Li))),256))])],512),e("div",Ai,[(o(),d(p,null,b([1,2,3,4],r=>e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":T(()=>[_(n,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":T(()=>[_(w),_(n,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ui=C(y,[["render",Ni]]);var Ri=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,Fi=(a,i,t,s)=>{for(var c=s>1?void 0:s?Vi(i,t):i,l=a.length-1,n;l>=0;l--)(n=a[l])&&(c=(s?n(i,t,c):n(c))||c);return s&&c&&Ri(i,t,c),c};let O=class extends ${};O=Fi([M({data:()=>({codeSnippets:{htmlblueprint:`<div class="-d--flex">
  <aside class="chi-sidenav -flex--shrink0">
    <!-- Sidenav content goes here -->
  </aside>
  <div class="-flex--grow1">
    <!-- Page content goes here -->
  </div>
</div>`}})})],O);function Ji(a,i,t,s,c,l){const n=E;return o(),d("div",null,[i[0]||(i[0]=e("h2",null,"Recommended layout",-1)),i[1]||(i[1]=e("p",{class:"-text"},"Use this layout to ensure the sidenav renders correctly in your project.",-1)),_(n,{class:"html",lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])])}const Wi=C(O,[["render",Ji]]);var Gi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Qi=(a,i,t,s)=>{for(var c=s>1?void 0:s?Ki(i,t):i,l=a.length-1,n;l>=0;l--)(n=a[l])&&(c=(s?n(i,t,c):n(c))||c);return s&&c&&Gi(i,t,c),c};let S=class extends ${constructor(){super(...arguments);h(this,"selectedTheme",A());h(this,"baseUrl",N().public.baseUrl)}};S=Qi([M({components:{BaseLumenCenturyLink:gi,OpenOnHover:Ui,SmSizeLumenCenturyLink:U,MdSizeLumenCenturyLink:R,LgSizeLumenCenturyLink:V,RecommendedLayout:Wi}})],S);const Xi={key:1},Yi={class:"-text"},Zi=["href"];function ie(a,i,t,s,c,l){const n=f("BaseLumenCenturyLink"),w=f("OpenOnHover"),x=f("SmSizeLumenCenturyLink"),r=f("MdSizeLumenCenturyLink"),m=f("LgSizeLumenCenturyLink"),g=f("RecommendedLayout");return o(),d("div",null,[i[13]||(i[13]=e("h2",null,"Examples",-1)),["lumen","centurylink"].includes(a.selectedTheme)?(o(),P(n,{key:0})):B("",!0),_(w),["lumen","centurylink"].includes(a.selectedTheme)?(o(),d("div",Xi,[i[10]||(i[10]=e("h2",null,"Active Usage",-1)),e("p",Yi,[i[0]||(i[0]=u("The ")),i[1]||(i[1]=e("code",null,"-active",-1)),i[2]||(i[2]=u(" class can be applied to ")),i[3]||(i[3]=e("code",null,"ul.chi-sidenav__list > li",-1)),i[4]||(i[4]=u(" for activating the elements in the sidenav menu, ")),i[5]||(i[5]=e("code",null,".drawer",-1)),i[6]||(i[6]=u(" for opening the ")),e("a",{href:`${a.baseUrl}components/drawer/`},"drawer",8,Zi),i[7]||(i[7]=u(", and ")),i[8]||(i[8]=e("code",null,"ul.chi-sidenav__drawer-list > li",-1)),i[9]||(i[9]=u(" for activating the menu items inside the drawer."))]),i[11]||(i[11]=e("h2",null,"Sizes",-1)),i[12]||(i[12]=e("p",{class:"-text"},[u("Sidenav supports the following sizes: "),e("code",null,"-sm"),u(", "),e("code",null,"-md"),u(" and "),e("code",null,"-lg"),u(". The default size is "),e("code",null,"-md"),u(".")],-1)),_(x),_(r),_(m)])):B("",!0),_(g)])}const ee=C(S,[["render",ie]]);var ae=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,ne=(a,i,t,s)=>{for(var c=s>1?void 0:s?ce(i,t):i,l=a.length-1,n;l>=0;l--)(n=a[l])&&(c=(s?n(i,t,c):n(c))||c);return s&&c&&ae(i,t,c),c};let D=class extends ${constructor(){super(...arguments);h(this,"pageTabs",W)}};D=ne([M({components:{Accessibility:J,Examples:ee,Properties:F}})],D);const te={class:"chi-grid__container -pt--3"},se={class:"chi-tabs-panel -active",id:"examples"},oe={class:"chi-tabs-panel",id:"properties"},de={class:"chi-tabs-panel",id:"accessibility"};function re(a,i,t,s,c,l){const n=G,w=f("Examples"),x=f("Properties"),r=f("Accessibility");return o(),d("div",null,[_(n,{title:"Sidenav",description:"Use sidenav to add a responsive multi-level navigation menu to your project.",tabs:a.pageTabs},null,8,["tabs"]),e("div",te,[e("div",se,[_(w)]),e("div",oe,[_(x)]),e("div",de,[_(r)])])])}const Pe=C(D,[["render",re]]);export{Pe as default};

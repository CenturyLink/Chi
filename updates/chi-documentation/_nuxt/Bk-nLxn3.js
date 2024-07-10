var k=Object.defineProperty;var q=(e,a,t)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var h=(e,a,t)=>q(e,typeof a!="symbol"?a+"":a,t);import{V as H,N as M}from"./uJTUijt2.js";import{o,f as P,w as $,a as i,c as d,F as p,i as b,n as I,t as _,b as v,d as u,g as A,j as N,r as f,h as B}from"./B5CYXVwa.js";import{_ as E}from"./D8GK0F__.js";import{_ as j}from"./BLbnEGma.js";import{_ as z}from"./DKu8Jd2y.js";import{_ as C}from"./DlAUqK2U.js";import U from"./CInRhOej.js";import R from"./BrQo_7q2.js";import V from"./CtMWSmsZ.js";import F from"./Cw59AwdA.js";import J from"./BHZzVYWF.js";import{s as W}from"./2EwpEKcw.js";import{_ as G}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=(e,a,t,s)=>{for(var c=s>1?void 0:s?Q(a,t):a,l=e.length-1,n;l>=0;l--)(n=e[l])&&(c=(s?n(a,t,c):n(c))||c);return s&&c&&K(a,t,c),c};let L=class extends H{constructor(){super(...arguments);h(this,"menuItems",["1","2","3","4"]);h(this,"drawerMenuItems",["1","2"]);h(this,"activeMenuItem","1");h(this,"activeDrawerMenuItem","2");h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<aside class="chi-sidenav" id="example-base">
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
<\/script>`})}mounted(){chi.sidenav(this.$refs.sidenav)}};L=X([M({})],L);const Y={class:"-d--flex -overflow--hidden"},Z={class:"chi-sidenav -flex--shrink0 -animated",ref:"sidenav"},ii={class:"chi-sidenav__content"},ei={class:"chi-sidenav__list"},ci=["href"],ai=i("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1),ni={class:"chi-sidenav__drawers"},ti=["id"],si={class:"chi-drawer__header"},oi={class:"chi-drawer__title"},di=i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1),ri={class:"chi-drawer__content"},li={class:"chi-accordion"},hi={class:"chi-accordion__trigger"},_i={class:"chi-accordion__title"},vi=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1),mi={class:"chi-accordion__content"},ui={class:"chi-accordion"},pi={class:"chi-accordion__trigger"},bi={class:"chi-accordion__title"},gi=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1),fi={class:"chi-accordion__content"},Ii=i("a",{href:"#exampleHashTarget"},[i("span",null,[u("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1),wi={class:"-flex--grow1 -p--3 -pb--4"};function xi(e,a,t,s,c,l){const n=E,w=j,x=z;return o(),P(x,{title:"Base",id:"base-lumen-centurylink",tabs:e.exampleTabs,padding:"-p--0"},{example:$(()=>[i("div",Y,[i("aside",Z,[i("div",ii,[i("nav",null,[i("ul",ei,[(o(!0),d(p,null,b(e.menuItems,r=>(o(),d("li",{class:I(r===e.activeMenuItem?"-active":"")},[i("a",{href:`#drawer-0-${r}`},[ai,i("span",null,_(r===e.activeMenuItem?"Active Item":"Menu Item"),1)],8,ci)],2))),256))])])]),i("div",ni,[(o(!0),d(p,null,b(e.menuItems,r=>(o(),d("div",{class:"chi-drawer -animated -left",id:`drawer-0-${r}`},[i("div",si,[i("div",oi,"Menu item "+_(r),1),di]),i("div",ri,[i("div",li,[(o(!0),d(p,null,b(e.drawerMenuItems,m=>(o(),d("div",{class:I(["chi-accordion__item",r===e.activeMenuItem&&m===e.activeDrawerMenuItem?"-active -expanded":""])},[i("button",hi,[i("div",_i,"Item "+_(m),1),vi]),i("div",mi,[i("div",ui,[(o(!0),d(p,null,b(e.drawerMenuItems,g=>(o(),d("div",{class:I(["chi-accordion__item",`${r===e.activeMenuItem&&m===e.activeDrawerMenuItem&&g===e.activeDrawerMenuItem?"-active -expanded":""}`])},[i("button",pi,[i("div",bi,"Item "+_(m)+"."+_(g),1),gi]),i("div",fi,[(o(!0),d(p,null,b(e.drawerMenuItems,T=>(o(),d("a",{href:"#exampleHashTarget",class:I(`${r===e.activeMenuItem&&m===e.activeDrawerMenuItem&&g===e.activeDrawerMenuItem&&T===e.activeDrawerMenuItem?"-active":""}`)},[i("span",null,"Item "+_(m)+"."+_(g)+"."+_(T),1)],2))),256))])],2))),256))])])],2))),256)),Ii])])],8,ti))),256))])],512),i("div",wi,[(o(),d(p,null,b([1,2,3,4],r=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":$(()=>[v(n,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":$(()=>[v(w),v(n,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $i=C(L,[["render",xi]]);var Ti=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,Mi=(e,a,t,s)=>{for(var c=s>1?void 0:s?Hi(a,t):a,l=e.length-1,n;l>=0;l--)(n=e[l])&&(c=(s?n(a,t,c):n(c))||c);return s&&c&&Ti(a,t,c),c};let y=class extends H{constructor(){super(...arguments);h(this,"menuItems",["1","2","3","4"]);h(this,"drawerMenuItems",["1","2"]);h(this,"activeMenuItem","1");h(this,"activeDrawerMenuItem","2");h(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);h(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<aside class="chi-sidenav" id="sidenav-1">
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
<\/script>`})}mounted(){chi.sidenav(this.$refs.sidenav,{openOnHover:!0,autoClose:!0})}};y=Mi([M({})],y);const Ci={class:"-d--flex -overflow--hidden"},Li={class:"chi-sidenav -flex--shrink0 -animated",ref:"sidenav"},yi={class:"chi-sidenav__content"},Oi={class:"chi-sidenav__list"},Si=["href"],Di=i("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1),Pi={class:"chi-sidenav__drawers"},Ei=["id"],Bi={class:"chi-drawer__header"},ji={class:"chi-drawer__title"},zi=i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1),ki={class:"chi-drawer__content"},qi={class:"chi-accordion"},Ai={class:"chi-accordion__trigger"},Ni={class:"chi-accordion__title"},Ui=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1),Ri={class:"chi-accordion__content"},Vi={class:"chi-accordion"},Fi={class:"chi-accordion__trigger"},Ji={class:"chi-accordion__title"},Wi=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1),Gi={class:"chi-accordion__content"},Ki=i("a",{href:"#exampleHashTarget"},[i("span",null,[u("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1),Qi={class:"-flex--grow1 -p--3 -pb--4"};function Xi(e,a,t,s,c,l){const n=E,w=j,x=z;return o(),P(x,{title:"Open on hover",id:"open-on-hover",tabs:e.exampleTabs,padding:"-p--0"},{example:$(()=>[i("div",Ci,[i("aside",Li,[i("div",yi,[i("nav",null,[i("ul",Oi,[(o(!0),d(p,null,b(e.menuItems,r=>(o(),d("li",{class:I(r===e.activeMenuItem?"-active":"")},[i("a",{href:`#drawer-2-${r}`},[Di,i("span",null,_(r===e.activeMenuItem?"Active Item":"Menu Item"),1)],8,Si)],2))),256))])])]),i("div",Pi,[(o(!0),d(p,null,b(e.menuItems,r=>(o(),d("div",{class:"chi-drawer -animated -left",id:`drawer-2-${r}`},[i("div",Bi,[i("div",ji,"Menu item "+_(r),1),zi]),i("div",ki,[i("div",qi,[(o(!0),d(p,null,b(e.drawerMenuItems,m=>(o(),d("div",{class:I(["chi-accordion__item",r===e.activeMenuItem&&m===e.activeDrawerMenuItem?"-active -expanded":""])},[i("button",Ai,[i("div",Ni,"Item "+_(m),1),Ui]),i("div",Ri,[i("div",Vi,[(o(!0),d(p,null,b(e.drawerMenuItems,g=>(o(),d("div",{class:I(["chi-accordion__item",`${r===e.activeMenuItem&&m===e.activeDrawerMenuItem&&g===e.activeDrawerMenuItem?"-active -expanded":""}`])},[i("button",Fi,[i("div",Ji,"Item "+_(m)+"."+_(g),1),Wi]),i("div",Gi,[(o(!0),d(p,null,b(e.drawerMenuItems,T=>(o(),d("a",{href:"#exampleHashTarget",class:I(`${r===e.activeMenuItem&&m===e.activeDrawerMenuItem&&g===e.activeDrawerMenuItem&&T===e.activeDrawerMenuItem?"-active":""}`)},[i("span",null,"Item "+_(m)+"."+_(g)+"."+_(T),1)],2))),256))])],2))),256))])])],2))),256)),Ki])])],8,Ei))),256))])],512),i("div",Qi,[(o(),d(p,null,b([1,2,3,4],r=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":$(()=>[v(n,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":$(()=>[v(w),v(n,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Yi=C(y,[["render",Xi]]);var Zi=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,ee=(e,a,t,s)=>{for(var c=s>1?void 0:s?ie(a,t):a,l=e.length-1,n;l>=0;l--)(n=e[l])&&(c=(s?n(a,t,c):n(c))||c);return s&&c&&Zi(a,t,c),c};let O=class extends H{};O=ee([M({data:()=>({codeSnippets:{htmlblueprint:`<div class="-d--flex">
  <aside class="chi-sidenav -flex--shrink0">
    <!-- Sidenav content goes here -->
  </aside>
  <div class="-flex--grow1">
    <!-- Page content goes here -->
  </div>
</div>`}})})],O);const ce=i("h2",null,"Recommended layout",-1),ae=i("p",{class:"-text"},"Use this layout to ensure the sidenav renders correctly in your project.",-1);function ne(e,a,t,s,c,l){const n=E;return o(),d("div",null,[ce,ae,v(n,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])])}const te=C(O,[["render",ne]]);var se=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,de=(e,a,t,s)=>{for(var c=s>1?void 0:s?oe(a,t):a,l=e.length-1,n;l>=0;l--)(n=e[l])&&(c=(s?n(a,t,c):n(c))||c);return s&&c&&se(a,t,c),c};let S=class extends H{constructor(){super(...arguments);h(this,"selectedTheme",A());h(this,"baseUrl",N().public.baseUrl)}};S=de([M({components:{BaseLumenCenturyLink:$i,OpenOnHover:Yi,SmSizeLumenCenturyLink:U,MdSizeLumenCenturyLink:R,LgSizeLumenCenturyLink:V,RecommendedLayout:te}})],S);const re=i("h2",null,"Examples",-1),le={key:1},he=i("h2",null,"Active Usage",-1),_e={class:"-text"},ve=i("code",null,"-active",-1),me=i("code",null,"ul.chi-sidenav__list > li",-1),ue=i("code",null,".drawer",-1),pe=["href"],be=i("code",null,"ul.chi-sidenav__drawer-list > li",-1),ge=i("h2",null,"Sizes",-1),fe=i("p",{class:"-text"},[u("Sidenav supports the following sizes: "),i("code",null,"-sm"),u(", "),i("code",null,"-md"),u(" and "),i("code",null,"-lg"),u(". The default size is "),i("code",null,"-md"),u(".")],-1);function Ie(e,a,t,s,c,l){const n=f("BaseLumenCenturyLink"),w=f("OpenOnHover"),x=f("SmSizeLumenCenturyLink"),r=f("MdSizeLumenCenturyLink"),m=f("LgSizeLumenCenturyLink"),g=f("RecommendedLayout");return o(),d("div",null,[re,["lumen","centurylink","lumenrebrand24"].includes(e.selectedTheme)?(o(),P(n,{key:0})):B("",!0),v(w),["lumen","centurylink","lumenrebrand24"].includes(e.selectedTheme)?(o(),d("div",le,[he,i("p",_e,[u("The "),ve,u(" class can be applied to "),me,u(" for activating the elements in the sidenav menu, "),ue,u(" for opening the "),i("a",{href:`${e.baseUrl}components/drawer/`},"drawer",8,pe),u(", and "),be,u(" for activating the menu items inside the drawer.")]),ge,fe,v(x),v(r),v(m)])):B("",!0),v(g)])}const we=C(S,[["render",Ie]]);var xe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Te=(e,a,t,s)=>{for(var c=s>1?void 0:s?$e(a,t):a,l=e.length-1,n;l>=0;l--)(n=e[l])&&(c=(s?n(a,t,c):n(c))||c);return s&&c&&xe(a,t,c),c};let D=class extends H{constructor(){super(...arguments);h(this,"pageTabs",W)}};D=Te([M({components:{Accessibility:J,Examples:we,Properties:F}})],D);const He={class:"chi-grid__container -pt--3"},Me={class:"chi-tabs-panel -active",id:"examples"},Ce={class:"chi-tabs-panel",id:"properties"},Le={class:"chi-tabs-panel",id:"accessibility"};function ye(e,a,t,s,c,l){const n=G,w=f("Examples"),x=f("Properties"),r=f("Accessibility");return o(),d("div",null,[v(n,{title:"Sidenav",description:"Use sidenav to add a responsive multi-level navigation menu to your project.",tabs:e.pageTabs},null,8,["tabs"]),i("div",He,[i("div",Me,[v(w)]),i("div",Ce,[v(x)]),i("div",Le,[v(r)])])])}const Ze=C(D,[["render",ye]]);export{Ze as default};

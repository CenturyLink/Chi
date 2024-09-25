var H=Object.defineProperty;var M=(a,c,s)=>c in a?H(a,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[c]=s;var r=(a,c,s)=>M(a,typeof c!="symbol"?c+"":c,s);import{V as C,N as D}from"./NAah3XrW.js";import{_ as $}from"./onyWiYp2.js";import{_ as E}from"./CS2TcPBX.js";import{_ as L}from"./CAQzZ0uH.js";import{o as e,h as k,w as b,a as i,c as n,i as _,n as g,t as d,F as v,d as S,b as I}from"./CEIPSiTs.js";import{_ as y}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var B=Object.defineProperty,N=Object.getOwnPropertyDescriptor,q=(a,c,s,m)=>{for(var o=m>1?void 0:m?N(c,s):c,u=a.length-1,l;u>=0;u--)(l=a[u])&&(o=(m?l(c,s,o):l(o))||o);return m&&o&&B(c,s,o),o};let w=class extends C{constructor(){super(...arguments);r(this,"menuItems",["1","2","3","4"]);r(this,"drawerMenuItems",["1","2"]);r(this,"activeMenuItem","1");r(this,"activeDrawerMenuItem","2");r(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);r(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<aside class="chi-sidenav -md" id="sidenav-4">
  <div class="chi-sidenav__content">
    <nav>
      <ul class="chi-sidenav__list">
        <li class="-active">
          <a href="#drawer-3-1">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Active Item</span>
          </a>
        </li>
        <li>
          <a href="#drawer-3-2">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Menu Item</span>
          </a>
        </li>
        <li>
          <a href="#drawer-3-3">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Menu Item</span>
          </a>
        </li>
        <li>
          <a href="#drawer-3-4">
            <i class="chi-icon icon-atom" aria-hidden="true"></i>
            <span>Menu Item</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="chi-sidenav__drawers">
    <div class="chi-drawer -animated -left" id="drawer-3-1">
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
    <div class="chi-drawer -animated -left" id="drawer-3-2">
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
    <div class="chi-drawer -animated -left" id="drawer-3-3">
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
    <div class="chi-drawer -animated -left" id="drawer-3-4">
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

<script>chi.sidenav(document.getElementById('sidenav-4'));<\/script>`})}mounted(){chi.sidenav(this.$refs.sidenav)}};w=q([D({})],w);const z={class:"-d--flex -overflow--hidden"},V={class:"chi-sidenav -flex--shrink0 -animated -md",ref:"sidenav"},O={class:"chi-sidenav__content"},P={class:"chi-sidenav__list"},j=["href"],A={class:"chi-sidenav__drawers"},F=["id"],J={class:"chi-drawer__header"},U={class:"chi-drawer__title"},W={class:"chi-drawer__content"},G={class:"chi-accordion"},K={class:"chi-accordion__trigger"},Q={class:"chi-accordion__title"},R={class:"chi-accordion__content"},X={class:"chi-accordion"},Y={class:"chi-accordion__trigger"},Z={class:"chi-accordion__title"},ii={class:"chi-accordion__content"},ai={class:"-flex--grow1 -p--3 -pb--4"};function ci(a,c,s,m,o,u){const l=$,x=E,T=L;return e(),k(T,{title:"-md",id:"md-size-lumen-centurylink",tabs:a.exampleTabs,padding:"-p--0"},{example:b(()=>[i("div",z,[i("aside",V,[i("div",O,[i("nav",null,[i("ul",P,[(e(!0),n(v,null,_(a.menuItems,t=>(e(),n("li",{class:g(t===a.activeMenuItem?"-active":"")},[i("a",{href:`#drawer-4-${t}`},[c[0]||(c[0]=i("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),i("span",null,d(t===a.activeMenuItem?"Active Item":"Menu Item"),1)],8,j)],2))),256))])])]),i("div",A,[(e(!0),n(v,null,_(a.menuItems,t=>(e(),n("div",{class:"chi-drawer -animated -left",id:`drawer-4-${t}`},[i("div",J,[i("div",U,"Menu item "+d(t),1),c[1]||(c[1]=i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1))]),i("div",W,[i("div",G,[(e(!0),n(v,null,_(a.drawerMenuItems,h=>(e(),n("div",{class:g(["chi-accordion__item",t===a.activeMenuItem&&h===a.activeDrawerMenuItem?"-active -expanded":""])},[i("button",K,[i("div",Q,"Item "+d(h),1),c[2]||(c[2]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",R,[i("div",X,[(e(!0),n(v,null,_(a.drawerMenuItems,p=>(e(),n("div",{class:g(["chi-accordion__item",`${t===a.activeMenuItem&&h===a.activeDrawerMenuItem&&p===a.activeDrawerMenuItem?"-active -expanded":""}`])},[i("button",Y,[i("div",Z,"Item "+d(h)+"."+d(p),1),c[3]||(c[3]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",ii,[(e(!0),n(v,null,_(a.drawerMenuItems,f=>(e(),n("a",{href:"#exampleHashTarget",class:g(`${t===a.activeMenuItem&&h===a.activeDrawerMenuItem&&p===a.activeDrawerMenuItem&&f===a.activeDrawerMenuItem?"-active":""}`)},[i("span",null,"Item "+d(h)+"."+d(p)+"."+d(f),1)],2))),256))])],2))),256))])])],2))),256)),c[4]||(c[4]=i("a",{href:"#exampleHashTarget"},[i("span",null,[S("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1))])])],8,F))),256))])],512),i("div",ai,[(e(),n(v,null,_([1,2,3,4],t=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":b(()=>[I(l,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":b(()=>[I(x),I(l,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ui=y(w,[["render",ci]]);export{ui as default};

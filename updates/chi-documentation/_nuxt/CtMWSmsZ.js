var H=Object.defineProperty;var M=(c,a,s)=>a in c?H(c,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[a]=s;var r=(c,a,s)=>M(c,typeof a!="symbol"?a+"":a,s);import{V as C,N as L}from"./uJTUijt2.js";import{_ as D}from"./D8GK0F__.js";import{_ as $}from"./BLbnEGma.js";import{_ as E}from"./DKu8Jd2y.js";import{o as e,f as k,w as b,a as i,c as n,i as _,n as g,t as d,F as v,b as I,d as S}from"./B5CYXVwa.js";import{_ as y}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var B=Object.defineProperty,N=Object.getOwnPropertyDescriptor,q=(c,a,s,m)=>{for(var o=m>1?void 0:m?N(a,s):a,u=c.length-1,l;u>=0;u--)(l=c[u])&&(o=(m?l(a,s,o):l(o))||o);return m&&o&&B(a,s,o),o};let w=class extends C{constructor(){super(...arguments);r(this,"menuItems",["1","2","3","4"]);r(this,"drawerMenuItems",["1","2"]);r(this,"activeMenuItem","1");r(this,"activeDrawerMenuItem","2");r(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);r(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<aside class="chi-sidenav -lg" id="sidenav-5">
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

<script>chi.sidenav(document.getElementById('sidenav-5'));<\/script>`})}mounted(){chi.sidenav(this.$refs.sidenav)}};w=q([L({})],w);const z={class:"-d--flex -overflow--hidden"},V={class:"chi-sidenav -flex--shrink0 -animated -lg",ref:"sidenav"},O={class:"chi-sidenav__content"},P={class:"chi-sidenav__list"},j=["href"],A=i("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1),F={class:"chi-sidenav__drawers"},J=["id"],U={class:"chi-drawer__header"},W={class:"chi-drawer__title"},G=i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1),K={class:"chi-drawer__content"},Q={class:"chi-accordion"},R={class:"chi-accordion__trigger"},X={class:"chi-accordion__title"},Y=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1),Z={class:"chi-accordion__content"},ii={class:"chi-accordion"},ci={class:"chi-accordion__trigger"},ai={class:"chi-accordion__title"},ei=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1),ni={class:"chi-accordion__content"},ti=i("a",{href:"#exampleHashTarget"},[i("span",null,[S("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1),si={class:"-flex--grow1 -p--3 -pb--4"};function oi(c,a,s,m,o,u){const l=D,x=$,T=E;return e(),k(T,{title:"-lg",id:"lg-size-lumen-centurylink",tabs:c.exampleTabs,padding:"-p--0"},{example:b(()=>[i("div",z,[i("aside",V,[i("div",O,[i("nav",null,[i("ul",P,[(e(!0),n(v,null,_(c.menuItems,t=>(e(),n("li",{class:g(t===c.activeMenuItem?"-active":"")},[i("a",{href:`#drawer-5-${t}`},[A,i("span",null,d(t===c.activeMenuItem?"Active Item":"Menu Item"),1)],8,j)],2))),256))])])]),i("div",F,[(e(!0),n(v,null,_(c.menuItems,t=>(e(),n("div",{class:"chi-drawer -animated -left",id:`drawer-5-${t}`},[i("div",U,[i("div",W,"Menu item "+d(t),1),G]),i("div",K,[i("div",Q,[(e(!0),n(v,null,_(c.drawerMenuItems,h=>(e(),n("div",{class:g(["chi-accordion__item",t===c.activeMenuItem&&h===c.activeDrawerMenuItem?"-active -expanded":""])},[i("button",R,[i("div",X,"Item "+d(h),1),Y]),i("div",Z,[i("div",ii,[(e(!0),n(v,null,_(c.drawerMenuItems,p=>(e(),n("div",{class:g(["chi-accordion__item",`${t===c.activeMenuItem&&h===c.activeDrawerMenuItem&&p===c.activeDrawerMenuItem?"-active -expanded":""}`])},[i("button",ci,[i("div",ai,"Item "+d(h)+"."+d(p),1),ei]),i("div",ni,[(e(!0),n(v,null,_(c.drawerMenuItems,f=>(e(),n("a",{href:"#exampleHashTarget",class:g(`${t===c.activeMenuItem&&h===c.activeDrawerMenuItem&&p===c.activeDrawerMenuItem&&f===c.activeDrawerMenuItem?"-active":""}`)},[i("span",null,"Item "+d(h)+"."+d(p)+"."+d(f),1)],2))),256))])],2))),256))])])],2))),256)),ti])])],8,J))),256))])],512),i("div",si,[(e(),n(v,null,_([1,2,3,4],t=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":b(()=>[I(l,{class:"html",lang:"html",code:c.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":b(()=>[I(x),I(l,{lang:"html",code:c.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const wi=y(w,[["render",oi]]);export{wi as default};

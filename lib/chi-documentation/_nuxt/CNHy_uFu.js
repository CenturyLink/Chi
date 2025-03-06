import{_ as P}from"./LJMJS6pN.js";import{_ as $}from"./C_gFFCTR.js";import{_ as S}from"./CLOSKf5d.js";import{_ as B}from"./CmWk2xIH.js";import{e as T,g as L,h as z,f as A,o as n,w as g,b as _,a as i,c as o,i as r,n as u,t as e,F as d,d as b,l as j,k as V,j as F,p as G}from"./CmP53kv-.js";const K={class:"-d--flex -overflow--hidden"},Q={class:"chi-sidenav -flex--shrink0 -animated",ref:"sidenav"},X={class:"chi-sidenav__content"},Y={class:"chi-sidenav__list"},Z=["href"],ii={class:"chi-sidenav__drawers"},ci=["id"],ai={class:"chi-drawer__header"},ei={class:"chi-drawer__title"},ni={class:"chi-drawer__content"},ti={class:"chi-accordion"},si={class:"chi-accordion__trigger"},oi={class:"chi-accordion__title"},di={class:"chi-accordion__content"},ri={class:"chi-accordion"},li={class:"chi-accordion__trigger"},hi={class:"chi-accordion__title"},_i={class:"chi-accordion__content"},vi={class:"-flex--grow1 -p--3 -pb--4"},N="1",M="2",mi=T({__name:"_base_lumen_centurylink",setup(H){const m=["1","2","3","4"],v=["1","2"],t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],h={webcomponent:"",htmlblueprint:`<aside class="chi-sidenav" id="example-base">
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
<\/script>`},p=L("sidenav");return z(()=>{p.value&&chi.sidenav(p.value)}),(D,c)=>{const x=$,w=S,f=B;return n(),A(f,{title:"Base",id:"base-lumen-centurylink",tabs:t,padding:"-p--0"},{example:g(()=>[i("div",K,[i("aside",Q,[i("div",X,[i("nav",null,[i("ul",Y,[(n(),o(d,null,r(m,a=>i("li",{class:u(a===N?"-active":"")},[i("a",{href:`#drawer-0-${a}`},[c[0]||(c[0]=i("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),i("span",null,e(a===N?"Active Item":"Menu Item"),1)],8,Z)],2)),64))])])]),i("div",ii,[(n(),o(d,null,r(m,a=>i("div",{class:"chi-drawer -animated -left",id:`drawer-0-${a}`},[i("div",ai,[i("div",ei,"Menu item "+e(a),1),c[1]||(c[1]=i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1))]),i("div",ni,[i("div",ti,[(n(),o(d,null,r(v,s=>i("div",{class:u(["chi-accordion__item",a===N&&s===M?"-active -expanded":""])},[i("button",si,[i("div",oi,"Item "+e(s),1),c[2]||(c[2]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",di,[i("div",ri,[(n(),o(d,null,r(v,l=>i("div",{class:u(["chi-accordion__item",`${a===N&&s===M&&l===M?"-active -expanded":""}`])},[i("button",li,[i("div",hi,"Item "+e(s)+"."+e(l),1),c[3]||(c[3]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",_i,[(n(),o(d,null,r(v,I=>i("a",{href:"#exampleHashTarget",class:u(`${a===N&&s===M&&l===M&&I===M?"-active":""}`)},[i("span",null,"Item "+e(s)+"."+e(l)+"."+e(I),1)],2)),64))])],2)),64))])])],2)),64)),c[4]||(c[4]=i("a",{href:"#exampleHashTarget"},[i("span",null,[b("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1))])])],8,ci)),64))])],512),i("div",vi,[(n(),o(d,null,r([1,2,3,4],a=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":g(()=>[_(x,{class:"html",lang:"html",code:h.webcomponent},null,8,["code"])]),"code-htmlblueprint":g(()=>[_(w),_(x,{lang:"html",code:h.htmlblueprint},null,8,["code"])]),_:1})}}}),ui={class:"-d--flex -overflow--hidden"},pi={class:"chi-sidenav -flex--shrink0 -animated",ref:"sidenav"},gi={class:"chi-sidenav__content"},bi={class:"chi-sidenav__list"},xi=["href"],Ii={class:"chi-sidenav__drawers"},wi=["id"],fi={class:"chi-drawer__header"},Ti={class:"chi-drawer__title"},Hi={class:"chi-drawer__content"},$i={class:"chi-accordion"},Mi={class:"chi-accordion__trigger"},Ci={class:"chi-accordion__title"},ki={class:"chi-accordion__content"},Ei={class:"chi-accordion"},yi={class:"chi-accordion__trigger"},qi={class:"chi-accordion__title"},Si={class:"chi-accordion__content"},Bi={class:"-flex--grow1 -p--3 -pb--4"},R="1",C="2",Li=T({__name:"_open-on-hover",setup(H){const m=["1","2","3","4"],v=["1","2"],t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],h={webcomponent:"",htmlblueprint:`<aside class="chi-sidenav" id="example-open-on-hover">
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
  chi.sidenav(document.getElementById('example-open-on-hover'), {
    openOnHover: true,
    autoClose: true
  });
<\/script>`},p=L("sidenav");return z(()=>{p.value&&chi.sidenav(p.value,{openOnHover:!0,autoClose:!0})}),(D,c)=>{const x=$,w=S,f=B;return n(),A(f,{title:"Open on hover",id:"open-on-hover",padding:"-p--0",tabs:t},{example:g(()=>[i("div",ui,[i("aside",pi,[i("div",gi,[i("nav",null,[i("ul",bi,[(n(),o(d,null,r(m,a=>i("li",{class:u(a===R?"-active":"")},[i("a",{href:`#drawer-2-${a}`},[c[0]||(c[0]=i("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),i("span",null,e(a===R?"Active Item":"Menu Item"),1)],8,xi)],2)),64))])])]),i("div",Ii,[(n(),o(d,null,r(m,a=>i("div",{class:"chi-drawer -animated -left",id:`drawer-2-${a}`},[i("div",fi,[i("div",Ti,"Menu item "+e(a),1),c[1]||(c[1]=i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1))]),i("div",Hi,[i("div",$i,[(n(),o(d,null,r(v,s=>i("div",{class:u(["chi-accordion__item",a===R&&s===C?"-active -expanded":""])},[i("button",Mi,[i("div",Ci,"Item "+e(s),1),c[2]||(c[2]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",ki,[i("div",Ei,[(n(),o(d,null,r(v,l=>i("div",{class:u(["chi-accordion__item",`${a===R&&s===C&&l===C?"-active -expanded":""}`])},[i("button",yi,[i("div",qi,"Item "+e(s)+"."+e(l),1),c[3]||(c[3]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",Si,[(n(),o(d,null,r(v,I=>i("a",{href:"#exampleHashTarget",class:u(`${a===R&&s===C&&l===C&&I===C?"-active":""}`)},[i("span",null,"Item "+e(s)+"."+e(l)+"."+e(I),1)],2)),64))])],2)),64))])])],2)),64)),c[4]||(c[4]=i("a",{href:"#exampleHashTarget"},[i("span",null,[b("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1))])])],8,wi)),64))])],512),i("div",Bi,[(n(),o(d,null,r([1,2,3,4],a=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":g(()=>[_(x,{class:"html",lang:"html",code:h.webcomponent},null,8,["code"])]),"code-htmlblueprint":g(()=>[_(w),_(x,{lang:"html",code:h.htmlblueprint},null,8,["code"])]),_:1})}}}),zi={class:"-d--flex -overflow--hidden"},Ai={class:"chi-sidenav -flex--shrink0 -sm -animated",ref:"sidenav"},Di={class:"chi-sidenav__content"},Ni={class:"chi-sidenav__list"},Ri=["href"],Ui={class:"chi-sidenav__drawers"},Ji=["id"],Wi={class:"chi-drawer__header"},Oi={class:"chi-drawer__title"},Fi={class:"chi-drawer__content"},Vi={class:"chi-accordion"},ji={class:"chi-accordion__trigger"},Pi={class:"chi-accordion__title"},Gi={class:"chi-accordion__content"},Ki={class:"chi-accordion"},Qi={class:"chi-accordion__trigger"},Xi={class:"chi-accordion__title"},Yi={class:"chi-accordion__content"},Zi={class:"-flex--grow1 -p--3 -pb--4"},U="1",k="2",ic=T({__name:"_sm_lumen_centurylink",setup(H){const m=["1","2","3","4"],v=["1","2"],t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],h={webcomponent:"",htmlblueprint:`<aside class="chi-sidenav -sm" id="example-size-sm">
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

<script>chi.sidenav(document.getElementById('example-size-sm'));<\/script>`},p=L("sidenav");return z(()=>{p.value&&chi.sidenav(p.value)}),(D,c)=>{const x=$,w=S,f=B;return n(),A(f,{title:"-sm",id:"sm-size-lumen-centurylink",tabs:t,padding:"-p--0"},{example:g(()=>[i("div",zi,[i("aside",Ai,[i("div",Di,[i("nav",null,[i("ul",Ni,[(n(),o(d,null,r(m,a=>i("li",{class:u(a===U?"-active":"")},[i("a",{href:`#drawer-3-${a}`},[c[0]||(c[0]=i("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),i("span",null,e(a===U?"Active Item":"Menu Item"),1)],8,Ri)],2)),64))])])]),i("div",Ui,[(n(),o(d,null,r(m,a=>i("div",{class:"chi-drawer -animated -left",id:`drawer-3-${a}`},[i("div",Wi,[i("div",Oi,"Menu item "+e(a),1),c[1]||(c[1]=i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1))]),i("div",Fi,[i("div",Vi,[(n(),o(d,null,r(v,s=>i("div",{class:u(["chi-accordion__item",a===U&&s===k?"-active -expanded":""])},[i("button",ji,[i("div",Pi,"Item "+e(s),1),c[2]||(c[2]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",Gi,[i("div",Ki,[(n(),o(d,null,r(v,l=>i("div",{class:u(["chi-accordion__item",`${a===U&&s===k&&l===k?"-active -expanded":""}`])},[i("button",Qi,[i("div",Xi,"Item "+e(s)+"."+e(l),1),c[3]||(c[3]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",Yi,[(n(),o(d,null,r(v,I=>i("a",{href:"#exampleHashTarget",class:u(`${a===U&&s===k&&l===k&&I===k?"-active":""}`)},[i("span",null,"Item "+e(s)+"."+e(l)+"."+e(I),1)],2)),64))])],2)),64))])])],2)),64)),c[4]||(c[4]=i("a",{href:"#exampleHashTarget"},[i("span",null,[b("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1))])])],8,Ji)),64))])],512),i("div",Zi,[(n(),o(d,null,r([1,2,3,4],a=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":g(()=>[_(x,{class:"html",lang:"html",code:h.webcomponent},null,8,["code"])]),"code-htmlblueprint":g(()=>[_(w),_(x,{lang:"html",code:h.htmlblueprint},null,8,["code"])]),_:1})}}}),cc={class:"-d--flex -overflow--hidden"},ac={class:"chi-sidenav -flex--shrink0 -animated -md",ref:"sidenav"},ec={class:"chi-sidenav__content"},nc={class:"chi-sidenav__list"},tc=["href"],sc={class:"chi-sidenav__drawers"},oc=["id"],dc={class:"chi-drawer__header"},rc={class:"chi-drawer__title"},lc={class:"chi-drawer__content"},hc={class:"chi-accordion"},_c={class:"chi-accordion__trigger"},vc={class:"chi-accordion__title"},mc={class:"chi-accordion__content"},uc={class:"chi-accordion"},pc={class:"chi-accordion__trigger"},gc={class:"chi-accordion__title"},bc={class:"chi-accordion__content"},xc={class:"-flex--grow1 -p--3 -pb--4"},J="1",E="2",Ic=T({__name:"_md_lumen_centurylink",setup(H){const m=["1","2","3","4"],v=["1","2"],t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],h={webcomponent:"",htmlblueprint:`<aside class="chi-sidenav -md" id="example-size-md">
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

<script>chi.sidenav(document.getElementById('example-size-md'));<\/script>`},p=L("sidenav");return z(()=>{p.value&&chi.sidenav(p.value)}),(D,c)=>{const x=$,w=S,f=B;return n(),A(f,{title:"-md",id:"md-size-lumen-centurylink",tabs:t,padding:"-p--0"},{example:g(()=>[i("div",cc,[i("aside",ac,[i("div",ec,[i("nav",null,[i("ul",nc,[(n(),o(d,null,r(m,a=>i("li",{class:u(a===J?"-active":"")},[i("a",{href:`#drawer-4-${a}`},[c[0]||(c[0]=i("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),i("span",null,e(a===J?"Active Item":"Menu Item"),1)],8,tc)],2)),64))])])]),i("div",sc,[(n(),o(d,null,r(m,a=>i("div",{class:"chi-drawer -animated -left",id:`drawer-4-${a}`},[i("div",dc,[i("div",rc,"Menu item "+e(a),1),c[1]||(c[1]=i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1))]),i("div",lc,[i("div",hc,[(n(),o(d,null,r(v,s=>i("div",{class:u(["chi-accordion__item",a===J&&s===E?"-active -expanded":""])},[i("button",_c,[i("div",vc,"Item "+e(s),1),c[2]||(c[2]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",mc,[i("div",uc,[(n(),o(d,null,r(v,l=>i("div",{class:u(["chi-accordion__item",`${a===J&&s===E&&l===E?"-active -expanded":""}`])},[i("button",pc,[i("div",gc,"Item "+e(s)+"."+e(l),1),c[3]||(c[3]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",bc,[(n(),o(d,null,r(v,I=>i("a",{href:"#exampleHashTarget",class:u(`${a===J&&s===E&&l===E&&I===E?"-active":""}`)},[i("span",null,"Item "+e(s)+"."+e(l)+"."+e(I),1)],2)),64))])],2)),64))])])],2)),64)),c[4]||(c[4]=i("a",{href:"#exampleHashTarget"},[i("span",null,[b("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1))])])],8,oc)),64))])],512),i("div",xc,[(n(),o(d,null,r([1,2,3,4],a=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":g(()=>[_(x,{class:"html",lang:"html",code:h.webcomponent},null,8,["code"])]),"code-htmlblueprint":g(()=>[_(w),_(x,{lang:"html",code:h.htmlblueprint},null,8,["code"])]),_:1})}}}),wc={class:"-d--flex -overflow--hidden"},fc={class:"chi-sidenav -flex--shrink0 -animated -lg",ref:"sidenav"},Tc={class:"chi-sidenav__content"},Hc={class:"chi-sidenav__list"},$c=["href"],Mc={class:"chi-sidenav__drawers"},Cc=["id"],kc={class:"chi-drawer__header"},Ec={class:"chi-drawer__title"},yc={class:"chi-drawer__content"},qc={class:"chi-accordion"},Sc={class:"chi-accordion__trigger"},Bc={class:"chi-accordion__title"},Lc={class:"chi-accordion__content"},zc={class:"chi-accordion"},Ac={class:"chi-accordion__trigger"},Dc={class:"chi-accordion__title"},Nc={class:"chi-accordion__content"},Rc={class:"-flex--grow1 -p--3 -pb--4"},W="1",y="2",Uc=T({__name:"_lg_lumen_centurylink",setup(H){const m=["1","2","3","4"],v=["1","2"],t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],h={webcomponent:"",htmlblueprint:`<aside class="chi-sidenav -lg" id="example-size-lg">
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

<script>chi.sidenav(document.getElementById('example-size-lg'));<\/script>`},p=L("sidenav");return z(()=>{p.value&&chi.sidenav(p.value)}),(D,c)=>{const x=$,w=S,f=B;return n(),A(f,{title:"-lg",id:"lg-size-lumen-centurylink",tabs:t,padding:"-p--0"},{example:g(()=>[i("div",wc,[i("aside",fc,[i("div",Tc,[i("nav",null,[i("ul",Hc,[(n(),o(d,null,r(m,a=>i("li",{class:u(a===W?"-active":"")},[i("a",{href:`#drawer-5-${a}`},[c[0]||(c[0]=i("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),i("span",null,e(a===W?"Active Item":"Menu Item"),1)],8,$c)],2)),64))])])]),i("div",Mc,[(n(),o(d,null,r(m,a=>i("div",{class:"chi-drawer -animated -left",id:`drawer-5-${a}`},[i("div",kc,[i("div",Ec,"Menu item "+e(a),1),c[1]||(c[1]=i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1))]),i("div",yc,[i("div",qc,[(n(),o(d,null,r(v,s=>i("div",{class:u(["chi-accordion__item",a===W&&s===y?"-active -expanded":""])},[i("button",Sc,[i("div",Bc,"Item "+e(s),1),c[2]||(c[2]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",Lc,[i("div",zc,[(n(),o(d,null,r(v,l=>i("div",{class:u(["chi-accordion__item",`${a===W&&s===y&&l===y?"-active -expanded":""}`])},[i("button",Ac,[i("div",Dc,"Item "+e(s)+"."+e(l),1),c[3]||(c[3]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",Nc,[(n(),o(d,null,r(v,I=>i("a",{href:"#exampleHashTarget",class:u(`${a===W&&s===y&&l===y&&I===y?"-active":""}`)},[i("span",null,"Item "+e(s)+"."+e(l)+"."+e(I),1)],2)),64))])],2)),64))])])],2)),64)),c[4]||(c[4]=i("a",{href:"#exampleHashTarget"},[i("span",null,[b("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1))])])],8,Cc)),64))])],512),i("div",Rc,[(n(),o(d,null,r([1,2,3,4],a=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":g(()=>[_(x,{class:"html",lang:"html",code:h.webcomponent},null,8,["code"])]),"code-htmlblueprint":g(()=>[_(w),_(x,{lang:"html",code:h.htmlblueprint},null,8,["code"])]),_:1})}}}),Jc=T({__name:"_recommended-layout",setup(H){const m={base:`<div class="-d--flex">
  <aside class="chi-sidenav -flex--shrink0">
    <!-- Sidenav content goes here -->
  </aside>
  <div class="-flex--grow1">
    <!-- Page content goes here -->
  </div>
</div>`,floating:`<div class="-d--flex">
  <aside class="chi-sidenav -float -flex--shrink0">
    <!-- Sidenav content goes here -->
  </aside>
  <div class="-flex--grow1">
    <!-- Page content goes here -->
  </div>
</div>`},v=j();return(t,h)=>{const p=$;return n(),o(d,null,[h[1]||(h[1]=i("h2",null,"Recommended layout",-1)),h[2]||(h[2]=i("p",{class:"-text"},"Use this layout to ensure the sidenav renders correctly in your project.",-1)),["lumen","centurylink"].includes(F(v))?(n(),o(d,{key:0},[h[0]||(h[0]=i("h3",null,"Base",-1)),_(p,{class:"-mb--3 html",lang:"html",code:m.base},null,8,["code"])],64)):V("",!0),h[3]||(h[3]=i("h3",null,"Floating",-1)),_(p,{class:"html",lang:"html",code:m.floating},null,8,["code"])],64)}}}),Wc={class:"-d--flex -overflow--hidden"},Oc={class:"chi-sidenav -flex--shrink0 -animated -float",ref:"sidenav"},Fc={class:"chi-sidenav__content"},Vc={class:"chi-sidenav__list"},jc=["href"],Pc={class:"chi-sidenav__drawers"},Gc=["id"],Kc={class:"chi-drawer__header"},Qc={class:"chi-drawer__title"},Xc={class:"chi-drawer__content"},Yc={class:"chi-accordion"},Zc={class:"chi-accordion__trigger"},ia={class:"chi-accordion__title"},ca={class:"chi-accordion__content"},aa={class:"chi-accordion"},ea={class:"chi-accordion__trigger"},na={class:"chi-accordion__title"},ta={class:"chi-accordion__content"},sa={class:"-flex--grow1 -p--3 -pb--4"},O="1",q="2",oa=T({__name:"_floating",setup(H){const m=["1","2","3","4"],v=["1","2"],t=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],h={webcomponent:"",htmlblueprint:`<aside class="chi-sidenav -float" id="example-floating">
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
  chi.sidenav(document.getElementById('example-floating'), {
    openOnHover: true,
    autoClose: true
  });
<\/script>`},p=L("sidenav");return z(()=>{p.value&&chi.sidenav(p.value,{openOnHover:!0,autoClose:!0})}),(D,c)=>{const x=$,w=S,f=B;return n(),A(f,{title:"Floating",id:"floating",padding:"-p--0",tabs:t},{example:g(()=>[i("div",Wc,[i("aside",Oc,[i("div",Fc,[i("nav",null,[i("ul",Vc,[(n(),o(d,null,r(m,a=>i("li",{class:u(a===O?"-active":"")},[i("a",{href:`#drawer-floating-${a}`},[c[0]||(c[0]=i("i",{class:"chi-icon icon-atom","aria-hidden":"true"},null,-1)),i("span",null,e(a===O?"Active Item":"Menu Item"),1)],8,jc)],2)),64))])])]),i("div",Pc,[(n(),o(d,null,r(m,a=>i("div",{class:"chi-drawer -animated -left",id:`drawer-floating-${a}`},[i("div",Kc,[i("div",Qc,"Menu item "+e(a),1),c[1]||(c[1]=i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])],-1))]),i("div",Xc,[i("div",Yc,[(n(),o(d,null,r(v,s=>i("div",{class:u(["chi-accordion__item",a===O&&s===q?"-active -expanded":""])},[i("button",Zc,[i("div",ia,"Item "+e(s),1),c[2]||(c[2]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",ca,[i("div",aa,[(n(),o(d,null,r(v,l=>i("div",{class:u(["chi-accordion__item",`${a===O&&s===q&&l===q?"-active -expanded":""}`])},[i("button",ea,[i("div",na,"Item "+e(s)+"."+e(l),1),c[3]||(c[3]=i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"},null,-1))]),i("div",ta,[(n(),o(d,null,r(v,I=>i("a",{href:"#exampleHashTarget",class:u(`${a===O&&s===q&&l===q&&I===q?"-active":""}`)},[i("span",null,"Item "+e(s)+"."+e(l)+"."+e(I),1)],2)),64))])],2)),64))])])],2)),64)),c[4]||(c[4]=i("a",{href:"#exampleHashTarget"},[i("span",null,[b("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])],-1))])])],8,Gc)),64))])],512),i("div",sa,[(n(),o(d,null,r([1,2,3,4],a=>i("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),64))])])]),"code-webcomponent":g(()=>[_(x,{class:"html",lang:"html",code:h.webcomponent},null,8,["code"])]),"code-htmlblueprint":g(()=>[_(w),_(x,{lang:"html",code:h.htmlblueprint},null,8,["code"])]),_:1})}}}),da={class:"-text"},ma=T({__name:"index",setup(H){const m=j();return G().public.baseUrl,(v,t)=>{const h=P;return n(),o(d,null,[t[14]||(t[14]=i("h2",null,"Examples",-1)),["lumen","centurylink"].includes(F(m))?(n(),o(d,{key:0},[_(mi),_(Li)],64)):V("",!0),_(oa),["lumen","centurylink"].includes(F(m))?(n(),o(d,{key:1},[t[11]||(t[11]=i("h2",null,"Active Usage",-1)),i("p",da,[t[1]||(t[1]=b("The ")),t[2]||(t[2]=i("code",null,"-active",-1)),t[3]||(t[3]=b(" class can be applied to ")),t[4]||(t[4]=i("code",null,"ul.chi-sidenav__list > li",-1)),t[5]||(t[5]=b(" for activating the elements in the sidenav menu, ")),t[6]||(t[6]=i("code",null,".drawer",-1)),t[7]||(t[7]=b(" for opening the ")),_(h,{to:`/components/drawer/?theme=${F(m)}`},{default:g(()=>t[0]||(t[0]=[b("drawer")])),_:1},8,["to"]),t[8]||(t[8]=b(", and ")),t[9]||(t[9]=i("code",null,"ul.chi-sidenav__drawer-list > li",-1)),t[10]||(t[10]=b(" for activating the menu items inside the drawer."))]),t[12]||(t[12]=i("h2",null,"Sizes",-1)),t[13]||(t[13]=i("p",{class:"-text"},[b("Sidenav supports the following sizes: "),i("code",null,"-sm"),b(", "),i("code",null,"-md"),b(" and "),i("code",null,"-lg"),b(". The default size is "),i("code",null,"-md"),b(".")],-1)),_(ic),_(Ic),_(Uc)],64)):V("",!0),_(Jc)],64)}}});export{ma as _};

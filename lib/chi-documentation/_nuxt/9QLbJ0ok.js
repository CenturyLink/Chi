var w=Object.defineProperty;var x=(e,a,n)=>a in e?w(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;var r=(e,a,n)=>x(e,typeof a!="symbol"?a+"":a,n);import{V as u,N as v}from"./Bdokak_-.js";import{_ as I}from"./Di-ELn2D.js";import{_ as T}from"./D1M_ALV-.js";import{_ as H}from"./Cx7J_iiN.js";import{o as p,f as k,w as d,a as i,d as m,b as l,c as C,v as y}from"./CRBsHPO5.js";import{_ as b}from"./DlAUqK2U.js";import"./CcrI_bxZ.js";import"./Cf-jS4dB.js";import"./Bxs95XXX.js";import"./CioVcaN-.js";var N=Object.defineProperty,q=Object.getOwnPropertyDescriptor,$=(e,a,n,o)=>{for(var c=o>1?void 0:o?q(a,n):a,s=e.length-1,t;s>=0;s--)(t=e[s])&&(c=(o?t(a,n,c):t(c))||c);return o&&c&&N(a,n,c),c};let h=class extends u{constructor(){super(...arguments);r(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);r(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button class="chi-button -icon -flat" id="mobile-navigation-interaction-trigger" data-target="#mobile-navigation-example" aria-label="Open Menu">
  <div class="chi-button__content">
    <i class="chi-icon icon-menu -sm--2" aria-hidden="true"></i>
  </div>
</button>

<!-- Mobile Navigation -->
<div class="chi-mobile-nav" id="mobile-navigation-example">
  <div class="chi-backdrop -closed -position--absolute -animated">
    <div class="chi-backdrop__wrapper">
      <div class="chi-drawer -left -animated chi-mobile-nav__first-level -position--absolute">
        <div class="-position--relative">
          <div class="chi-mobile-nav__first-level-content -w--100">
            <div class="chi-drawer__header chi-mobile-nav__header">
              <button
                class="chi-button -flat chi-dropdown__trigger -animate -no-hover -b--transparent"
                id="button-site-menu2"
                data-target="dropdown-2-menu"
              >
                Control Center
              </button>
              <button class="chi-button -icon -close" aria-label="Close">
                <div class="chi-button__content">
                  <i class="chi-icon icon-x" aria-hidden="true"></i>
                </div>
              </button>
            </div>
            <div class="chi-mobile-nav__dropdown">
              <div
                class="chi-dropdown__menu -list chi-mobile-nav__dropdown-content"
                id="dropdown-2-menu"
              >
                <a class="chi-dropdown__menu-item -h--auto -active" href="#">
                  <span class="chi-dropdown__menu-item_title">App name</span>
                  <span class="chi-dropdown__menu-item_text">
                    App description
                  </span>
                </a>
                <a class="chi-dropdown__menu-item -h--auto" href="#">
                  <span class="chi-dropdown__menu-item_title">App name 2</span>
                  <span class="chi-dropdown__menu-item_text">
                    App description
                  </span>
                </a>
                <a class="chi-dropdown__menu-item -h--auto" href="#">
                  <span class="chi-dropdown__menu-item_title">App name 3</span>
                  <span class="chi-dropdown__menu-item_text">
                    App description
                  </span>
                </a>
              </div>
            </div>
            <div class="chi-drawer__content chi-mobile-nav__content">
              <div class="chi-mobile-nav__user">
                <div class="chi-mobile-nav__user-name">
                  <span>Alessandro Ray</span>
                </div>
                <button
                  class="chi-button -flat chi-dropdown__trigger -px--1 -animate -no-hover -b--transparent -text--normal"
                  id="button-user-menu2"
                  data-target="dropdown-3-menu"
                >
                  Menu
                </button>
              </div>
              <div class="chi-mobile-nav__dropdown">
                <div
                  class="chi-dropdown__menu chi-mobile-nav__dropdown-content"
                  id="dropdown-3-menu"
                >
                  <a class="chi-dropdown__menu-item" href="#">
                    <i class="chi-icon icon-user" aria-hidden="true"></i>
                    <span>Item 1</span>
                  </a>
                  <a class="chi-dropdown__menu-item" href="#">
                    <i class="chi-icon icon-logout" aria-hidden="true"></i>
                    <span>Item 2</span>
                  </a>
                </div>
              </div>
              <ul class="chi-tabs -vertical -icons">
                <li class="-active">
                  <a
                    href="#second-level-1"
                    class=" chi-drawer__subitem-list-trigger"
                  >
                    <i class="chi-icon icon-atom" aria-hidden="true"></i>
                    <span>Toggle me</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#second-level-2"
                    class=" chi-drawer__subitem-list-trigger"
                  >
                    <i class="chi-icon icon-atom" aria-hidden="true"></i>
                    <span>Toggle me</span>
                  </a>
                </li>
                <li>
                  <a href="#tab-link">
                    <i class="chi-icon icon-atom" aria-hidden="true"></i>
                    <span>Tab link</span>
                  </a>
                </li>
                <li>
                  <a href="#tab-link">
                    <i class="chi-icon icon-atom" aria-hidden="true"></i>
                    <span>Tab link</span>
                  </a>
                </li>
              </ul>
              <div class="chi-divider"></div>
              <ul class="chi-tabs -vertical -icons">
                <li>
                  <a class="-text--primary" href="#tab-link">
                    <i class="chi-icon icon-user" aria-hidden="true"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <a class="-text--primary" href="#tab-link">
                    <i
                      class="chi-icon icon-bell-settings-outline"
                      aria-hidden="true"
                    ></i>
                    <span>Notification Settings</span>
                  </a>
                </li>
                <li>
                  <a class="-text--primary" href="#tab-link">
                    <i class="chi-icon icon-logout" aria-hidden="true"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="chi-mobile-nav__drawers">
          <div
            class="chi-drawer -right -position--absolute"
            id="second-level-1"
          >
            <div class="chi-drawer__header chi-mobile-nav__header">
              <button
                class="chi-button -flat -icon -no-hover -back"
                aria-label="Back"
              >
                <div class="chi-button__content">
                  <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                </div>
              </button>
              <div class="chi-mobile-nav__header-title">Inventory</div>
              <button class="chi-button -icon -close" aria-label="Close">
                <div class="chi-button__content">
                  <i class="chi-icon icon-x" aria-hidden="true"></i>
                </div>
              </button>
            </div>
            <div class="chi-drawer__content chi-mobile-nav__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
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
                <div class="chi-accordion__item -active -expanded">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 2</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
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
                      <div class="chi-accordion__item -active -expanded">
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
                    <i
                      class="chi-icon icon-external-link -xs"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="chi-drawer -right -position--absolute"
            id="second-level-2"
          >
            <div class="chi-drawer__header chi-mobile-nav__header">
              <button
                class="chi-button -flat -icon -no-hover -back"
                aria-label="Back"
              >
                <div class="chi-button__content">
                  <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
                </div>
              </button>
              <div class="chi-mobile-nav__header-title">Inventory</div>
              <button class="chi-button -icon -close" aria-label="Close">
                <div class="chi-button__content">
                  <i class="chi-icon icon-x" aria-hidden="true"></i>
                </div>
              </button>
            </div>
            <div class="chi-drawer__content chi-mobile-nav__content">
              <div class="chi-accordion">
                <div class="chi-accordion__item">
                  <button class="chi-accordion__trigger">
                    <div class="chi-accordion__title">Item 1</div>
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
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
                    <i
                      class="chi-icon icon-chevron-down"
                      aria-hidden="true"
                    ></i>
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
                    <i
                      class="chi-icon icon-external-link -xs"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript -->
<script>
  chi.mobilenav(document.querySelector("#mobile-navigation-interaction-trigger"));
<\/script>`})}mounted(){chi.mobilenav(document.querySelector("#mobile-navigation-interaction-trigger"))}};h=$([v({})],h);const A={class:"-mb--3 -overflow--hidden"},E={class:"-position--relative -z--0 -overflow--hidden",style:{height:"25rem"}},S={class:"-p--3"},O={class:"-d--flex -align-items--center"},D={class:"chi-button -icon -flat",id:"mobile-navigation-interaction-trigger",ref:"trigger","data-target":"#mobile-navigation-example","aria-label":"Open Menu"};function P(e,a,n,o,c,s){const t=I,g=T,f=H;return p(),k(f,{title:"Interaction",id:"interaction",padding:"-p--0",tabs:e.exampleTabs},{example:d(()=>[i("div",A,[i("div",E,[i("div",S,[i("div",O,[i("button",D,a[0]||(a[0]=[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-menu -sm--2","aria-hidden":"true"})],-1)]),512),a[1]||(a[1]=i("b",{class:"-ml--2"},"Click menu button to open Mobile navigation",-1))]),a[2]||(a[2]=i("p",{class:"-text -mb--3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit. Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.",-1)),a[3]||(a[3]=i("p",{class:"-text -mb--3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu dignissim nisi, gravida pharetra elit. Etiam eu urna orci. Nulla et lorem eleifend, ultrices massa id, molestie urna. Nulla nec quam in turpis fermentum dictum vitae ac nibh. Suspendisse lacus nisi, sollicitudin in commodo quis, euismod id enim. Donec semper nunc et tellus convallis, tristique varius turpis gravida. Quisque hendrerit magna ac bibendum molestie. Nullam scelerisque libero vitae lorem dignissim ullamcorper. Integer mollis auctor enim vel molestie. Etiam id vestibulum augue, vitae dapibus quam. Nunc tincidunt aliquet lacus nec malesuada. Donec ultricies augue non lorem eleifend, eget ullamcorper lacus elementum. Donec condimentum enim nec justo auctor, nec bibendum ipsum dapibus.",-1))]),a[4]||(a[4]=i("div",{class:"chi-mobile-nav",id:"mobile-navigation-example"},[i("div",{class:"chi-backdrop -closed -position--absolute"},[i("div",{class:"chi-backdrop__wrapper"},[i("div",{class:"chi-drawer -left -animated chi-mobile-nav__first-level -position--absolute"},[i("div",{class:"-position--relative"},[i("div",{class:"chi-mobile-nav__first-level-content -w--100"},[i("div",{class:"chi-drawer__header chi-mobile-nav__header"},[i("button",{class:"chi-button -flat chi-dropdown__trigger -animate -no-hover -b--transparent",id:"button-site-menu2","data-target":"dropdown-2-menu"},"Control Center"),i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),i("div",{class:"chi-mobile-nav__dropdown"},[i("div",{class:"chi-dropdown__menu -list chi-mobile-nav__dropdown-content",id:"dropdown-2-menu"},[i("a",{class:"chi-dropdown__menu-item -h--auto -active",href:"#"},[i("span",{class:"chi-dropdown__menu-item_title"},"App name"),i("span",{class:"chi-dropdown__menu-item_text"},"App description")]),i("a",{class:"chi-dropdown__menu-item -h--auto",href:"#"},[i("span",{class:"chi-dropdown__menu-item_title"},"App name 2"),i("span",{class:"chi-dropdown__menu-item_text"},"App description")]),i("a",{class:"chi-dropdown__menu-item -h--auto",href:"#"},[i("span",{class:"chi-dropdown__menu-item_title"},"App name 3"),i("span",{class:"chi-dropdown__menu-item_text"},"App description")])])]),i("div",{class:"chi-drawer__content chi-mobile-nav__content"},[i("div",{class:"chi-mobile-nav__user"},[i("div",{class:"chi-mobile-nav__user-name"},[i("span",null,"Alessandro Ray")]),i("button",{class:"chi-button -flat chi-dropdown__trigger -px--1 -animate -no-hover -b--transparent -text--normal",id:"button-user-menu2","data-target":"dropdown-3-menu"},"Menu")]),i("div",{class:"chi-mobile-nav__dropdown"},[i("div",{class:"chi-dropdown__menu chi-mobile-nav__dropdown-content",id:"dropdown-3-menu"},[i("a",{class:"chi-dropdown__menu-item",href:"#"},[i("i",{class:"chi-icon icon-user","aria-hidden":"true"}),i("span",null,"Item 1")]),i("a",{class:"chi-dropdown__menu-item",href:"#"},[i("i",{class:"chi-icon icon-logout","aria-hidden":"true"}),i("span",null,"Item 2")])])]),i("ul",{class:"chi-tabs -vertical -icons"},[i("li",{class:"-active"},[i("a",{href:"#second-level-1"},[i("i",{class:"chi-icon icon-atom","aria-hidden":"true"}),i("span",null,"Toggle me")])]),i("li",null,[i("a",{href:"#second-level-2"},[i("i",{class:"chi-icon icon-atom","aria-hidden":"true"}),i("span",null,"Toggle me")])]),i("li",null,[i("a",{href:"#tab-link"},[i("i",{class:"chi-icon icon-atom","aria-hidden":"true"}),i("span",null,"Tab link")])]),i("li",null,[i("a",{href:"#tab-link"},[i("i",{class:"chi-icon icon-atom","aria-hidden":"true"}),i("span",null,"Tab link")])])]),i("div",{class:"chi-divider"}),i("ul",{class:"chi-tabs -vertical -icons"},[i("li",null,[i("a",{class:"-text--primary",href:"#tab-link"},[i("i",{class:"chi-icon icon-user","aria-hidden":"true"}),i("span",null,"My Profile")])]),i("li",null,[i("a",{class:"-text--primary",href:"#tab-link"},[i("i",{class:"chi-icon icon-bell-settings-outline","aria-hidden":"true"}),i("span",null,"Notification Settings")])]),i("li",null,[i("a",{class:"-text--primary",href:"#tab-link"},[i("i",{class:"chi-icon icon-logout","aria-hidden":"true"}),i("span",null,"Sign Out")])])])])])]),i("div",{class:"chi-mobile-nav__drawers"},[i("div",{class:"chi-drawer -right -position--absolute",id:"second-level-1"},[i("div",{class:"chi-drawer__header chi-mobile-nav__header"},[i("button",{class:"chi-button -flat -icon -no-hover -back","aria-label":"Back"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-chevron-left","aria-hidden":"true"})])]),i("div",{class:"chi-mobile-nav__header-title"},"Inventory"),i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),i("div",{class:"chi-drawer__content chi-mobile-nav__content"},[i("div",{class:"chi-accordion"},[i("div",{class:"chi-accordion__item"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 1"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("div",{class:"chi-accordion"},[i("div",{class:"chi-accordion__item"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 1.1"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 1.1.1")]),i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 1.1.2")])])]),i("div",{class:"chi-accordion__item"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 1.2"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 1.2.1")]),i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 1.2.2")])])])])])]),i("div",{class:"chi-accordion__item -active -expanded"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 2"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("div",{class:"chi-accordion"},[i("div",{class:"chi-accordion__item"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 2.1"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 2.1.1")]),i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 2.1.2")])])]),i("div",{class:"chi-accordion__item -active -expanded"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 2.2"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 2.2.1")]),i("a",{class:"-active",href:"#exampleHashTarget"},[i("span",null,"Item 2.2.2")])])])])])]),i("a",{href:"#exampleHashTarget"},[i("span",null,[m("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])])])])]),i("div",{class:"chi-drawer -right -position--absolute",id:"second-level-2"},[i("div",{class:"chi-drawer__header chi-mobile-nav__header"},[i("button",{class:"chi-button -flat -icon -no-hover -back","aria-label":"Back"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-chevron-left","aria-hidden":"true"})])]),i("div",{class:"chi-mobile-nav__header-title"},"Inventory"),i("button",{class:"chi-button -icon -close","aria-label":"Close"},[i("div",{class:"chi-button__content"},[i("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),i("div",{class:"chi-drawer__content chi-mobile-nav__content"},[i("div",{class:"chi-accordion"},[i("div",{class:"chi-accordion__item"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 1"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("div",{class:"chi-accordion"},[i("div",{class:"chi-accordion__item"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 1.1"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 1.1.1")]),i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 1.1.2")])])]),i("div",{class:"chi-accordion__item"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 1.2"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 1.2.1")]),i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 1.2.2")])])])])])]),i("div",{class:"chi-accordion__item"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 2"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("div",{class:"chi-accordion"},[i("div",{class:"chi-accordion__item"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 2.1"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 2.1.1")]),i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 2.1.2")])])]),i("div",{class:"chi-accordion__item"},[i("button",{class:"chi-accordion__trigger"},[i("div",{class:"chi-accordion__title"},"Item 2.2"),i("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})]),i("div",{class:"chi-accordion__content"},[i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 2.2.1")]),i("a",{href:"#exampleHashTarget"},[i("span",null,"Item 2.2.2")])])])])])]),i("a",{href:"#exampleHashTarget"},[i("span",null,[m("External"),i("i",{class:"chi-icon icon-external-link -xs","aria-hidden":"true"})])])])])])])])])])],-1))])])]),"code-webcomponent":d(()=>[l(t,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[l(g),l(t,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const B=b(h,[["render",P]]);var M=Object.defineProperty,V=Object.getOwnPropertyDescriptor,j=(e,a,n,o)=>{for(var c=o>1?void 0:o?V(a,n):a,s=e.length-1,t;s>=0;s--)(t=e[s])&&(c=(o?t(a,n,c):t(c))||c);return o&&c&&M(a,n,c),c};let _=class extends u{};_=j([v({components:{Interaction:B}})],_);function L(e,a,n,o,c,s){const t=y("Interaction");return p(),C("div",null,[a[0]||(a[0]=i("h2",null,"Examples",-1)),l(t)])}const ai=b(_,[["render",L]]);export{ai as default};

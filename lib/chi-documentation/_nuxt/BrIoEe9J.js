import{_ as S}from"./DqffTiRd.js";import{e as d,o as r,f as u,w as i,a as e,b as t,d as s,c as x,j as g,t as w,F as f,g as C,h as y,l as T,k as z}from"./8OrwJQBm.js";import{_ as m}from"./Cs9k3wdq.js";import{_}from"./B7eGrFrM.js";import{_ as I}from"./CUfuKhER.js";const $=d({__name:"_base",setup(p){const l=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:`<div class="chi-form__item">
  <chi-search-input></chi-search-input>
</div>`,vue:`<div class="chi-form__item">
  <ChiSearchInput />
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input" type="search" aria-label="search input" />
    <button class="chi-button -icon -flat -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>`};return(c,n)=>{const a=m,h=_;return r(),u(h,{title:"Base",id:"base",tabs:l},{example:i(()=>n[0]||(n[0]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[e("div",{class:"chi-form__item"},[e("chi-search-input")])])],-1)])),"code-webcomponent":i(()=>[t(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-vue":i(()=>[t(a,{class:"html",lang:"html",code:o.vue},null,8,["code"])]),"code-htmlblueprint":i(()=>[t(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),k=d({__name:"_disabled",setup(p){const l=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:`<div class="chi-form__item">
  <chi-search-input value="Sample Text" disabled></chi-search-input>
</div>`,vue:`<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" disabled />
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input" type="search" value="Sample text" disabled="disabled" aria-label="search input" />
    <button class="chi-button -icon -flat -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>`};return(c,n)=>{const a=m,h=_;return r(),u(h,{title:"Disabled",id:"disabled",tabs:l},{"example-description":i(()=>n[0]||(n[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"disabled"),s(" boolean attribute to prevent users from interacting with a search input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),s(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:i(()=>n[1]||(n[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[e("div",{class:"chi-form__item"},[e("chi-search-input",{value:"Sample text",disabled:""})])])],-1)])),"code-webcomponent":i(()=>[t(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-vue":i(()=>[t(a,{class:"html",lang:"html",code:o.vue},null,8,["code"])]),"code-htmlblueprint":i(()=>[t(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),E=d({__name:"_error",setup(p){const l={webcomponent:`<div class="chi-form__item">
  <chi-search-input id="example__danger" value="Unknown item" state="danger" helper-message="Item not found"></chi-text-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -danger" type="search" value="Unknown item" aria-label="search input" />
    <button class="chi-button -icon -flat -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Item not found
  </div>
</div>`};return(o,c)=>{const n=m,a=_;return r(),u(a,{title:"Error",id:"error"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"danger"),s(" state to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[e("div",{class:"chi-form__item"},[e("chi-search-input",{id:"example-danger",state:"danger",value:"Unknown item","helper-message":"Item not found"})])])],-1)])),"code-webcomponent":i(()=>[t(n,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[t(n,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),B=d({__name:"_message",setup(p){const l={webcomponent:`<div class="chi-form__item">
  <chi-search-input helper-message="Optional helper message"></chi-search-input>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input" type="search" aria-label="search input" />
    <button class="chi-button -icon -flat -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>`};return(o,c)=>{const n=m,a=_;return r(),u(a,{title:"Message",id:"message"},{"example-description":i(()=>c[0]||(c[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"helper-message"),s(" attribute to provide users with additional information, validation feedback, and other helpful information.")],-1)])),example:i(()=>c[1]||(c[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},[e("div",{class:"chi-form__item"},[e("chi-search-input",{id:"example__message","helper-message":"Optional helper message"})])])],-1)])),"code-webcomponent":i(()=>[t(n,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[t(n,{class:"html",lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),U={class:"-p--0"},V={class:"chi-grid"},L={class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},M={class:"-text -text--bold"},N={class:"chi-form__item"},W=["size"],H=d({__name:"_sizes-lumen-centurylink",setup(p){const l=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],o=["xs","sm","md","lg","xl"],c={webcomponent:`<div class="chi-form__item">
  <chi-search-input size="xs" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="sm" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="md" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="lg" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="xl" value="Sample Text"></chi-search-input>
</div>`,vue:`<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="xs" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="sm" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="md" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="lg" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="xl" />
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -xs" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -xs -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -xs" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -sm" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -sm -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -md" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -md -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -lg" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -lg -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -xl" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -xl -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>`};return(n,a)=>{const h=m,b=_;return r(),u(b,{title:"Sizes",id:"sizes-lumen-centurylink",tabs:l,"title-size":"h2"},{"example-description":i(()=>a[0]||(a[0]=[e("p",{class:"-text"},[s("Search input supports the following sizes: "),e("code",null,"xs"),s(", "),e("code",null,"sm"),s(", "),e("code",null,"md"),s(", "),e("code",null,"lg"),s(", "),e("code",null,"xl"),s(". The default size is "),e("code",null,"md"),s(".")],-1)])),example:i(()=>[e("div",U,[(r(),x(f,null,g(o,v=>e("div",V,[e("div",L,[e("p",M,w(v),1),e("div",N,[e("chi-search-input",{size:v,value:"Sample Text"},null,8,W)])])])),64))])]),"code-webcomponent":i(()=>[t(h,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-vue":i(()=>[t(h,{class:"html",lang:"html",code:c.vue},null,8,["code"])]),"code-htmlblueprint":i(()=>[t(h,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),O={class:"-p--0"},D={class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},q={class:"-text -text--bold"},F={class:"chi-form__item"},R=["size"],j=d({__name:"_portal_sizes",setup(p){const l=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],o=["xs","sm","md","lg"],c={webcomponent:`<div class="chi-form__item">
  <chi-search-input size="xs" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="sm" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="md" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="lg" value="Sample Text"></chi-search-input>
</div>`,vue:`<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="xs" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="sm" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="md" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="lg" />
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -xs" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -xs -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -xs" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -sm" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -sm -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -md" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -md -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -lg" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -lg -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>`};return(n,a)=>{const h=m,b=_;return r(),u(b,{title:"Sizes",id:"sizes-portal",tabs:l,"title-size":"h2"},{"example-description":i(()=>a[0]||(a[0]=[e("p",{class:"-text"},[s("Search input supports the following sizes: "),e("code",null,"xs"),s(", "),e("code",null,"sm"),s(", "),e("code",null,"md"),s(", "),e("code",null,"lg"),s(". The default size is "),e("code",null,"md"),s(".")],-1)])),example:i(()=>[e("div",O,[(r(),x(f,null,g(o,v=>e("div",D,[e("p",q,w(v),1),e("div",F,[e("chi-search-input",{size:v,value:"Sample Text"},null,8,R)])])),64))])]),"code-webcomponent":i(()=>[t(h,{class:"html",lang:"html",code:c.webcomponent},null,8,["code"])]),"code-vue":i(()=>[t(h,{class:"html",lang:"html",code:c.vue},null,8,["code"])]),"code-htmlblueprint":i(()=>[t(h,{class:"html",lang:"html",code:c.htmlblueprint},null,8,["code"])]),_:1})}}}),A={class:"chi-grid"},J={class:"chi-col -w--12 -w-sm--8 -w-md--6 -w-lg--5"},G={class:"chi-form__item"},K={ref:"example-autocomplete",mode:"autocomplete","visible-items":"3"},P=d({__name:"_autocomplete",setup(p){const l=C("example-autocomplete");y(()=>{l.value&&(l.value.menuItems=[1,2,3,4,5].map(c=>({title:`Item ${c}`,href:"#"})))});const o={webcomponent:`<div class="chi-form__item">
  <chi-search-input id="example__autocomplete" mode="autocomplete" visible-items="3"></chi-search-input>
</div>

<script>
  const input = document.getElementById("example__autocomplete");

  input.menuItems = [
    { title: "Item 1", href: "#" },
    { title: "Item 2", href: "#" },
    { title: "Item 3", href: "#" },
    { title: "Item 4", href: "#" },
    { title: "Item 5", href: "#" }
  ];
<\/script>`,htmlblueprint:`<div class="chi-dropdown">
   <div id="with-dropdown" class="chi-input__wrapper -icon--right">
      <input class="chi-input chi-search__input" type="search" aria-label="search input" />
      <button class="chi-button -icon -flat -bg--none" aria-label="Search">
         <div class="chi-button__content">
            <i class="chi-icon icon-search" aria-hidden="true"></i>
         </div>
      </button>
   </div>
   <div class="chi-dropdown__menu" style="overflow-y: auto; max-height: 7rem">
      <a class="chi-dropdown__menu-item" href="#">Item 1</a>
      <a class="chi-dropdown__menu-item" href="#">Item 2</a>
      <a class="chi-dropdown__menu-item" href="#">Item 3</a>
      <a class="chi-dropdown__menu-item" href="#">Item 4</a>
   </div>
</div>

<script>
  chi.dropdown(document.getElementById('with-dropdown'));
<\/script>`};return(c,n)=>{const a=m,h=I,b=_;return r(),u(b,{title:"Autocomplete",id:"autocomplete"},{"example-description":i(()=>n[0]||(n[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,'mode="autocomplete"'),s(" attribute to enable autocomplete functionality. To fully implement the autocomplete field, you must provide a list of menu items by setting the "),e("code",null,"menuItems"),s(" property to the input search field, as in the example below. When autocomplete mode is active, the property "),e("code",null,"visible-items"),s(", which allows to set numbers of items visible in the dropdown, is available.")],-1)])),example:i(()=>[e("div",A,[e("div",J,[e("div",G,[e("chi-search-input",K,null,512)])])])]),"code-webcomponent":i(()=>[t(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[t(h),t(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),ie=d({__name:"index",setup(p){const l=T();return(o,c)=>{const n=S;return r(),x(f,null,[c[0]||(c[0]=e("h2",null,"Examples",-1)),t(n,{placeholder:"loading..."},{default:i(()=>[t($),t(k),t(B),t(E),t(n,null,{default:i(()=>[t(P)]),_:1}),z(l)==="portal"?(r(),u(j,{key:0})):(r(),u(H,{key:1}))]),_:1})],64)}}});export{ie as _};

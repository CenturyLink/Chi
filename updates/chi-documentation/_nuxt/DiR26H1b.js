import{V as b,N as h}from"./uJTUijt2.js";import{_ as x}from"./D8GK0F__.js";import{_}from"./BLbnEGma.js";import{_ as v}from"./DKu8Jd2y.js";import{o as f,f as z,w as p,b as o,a as e,d as l}from"./B5CYXVwa.js";import{_ as g}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var L=Object.defineProperty,I=Object.getOwnPropertyDescriptor,y=(a,t,c,s)=>{for(var i=s>1?void 0:s?I(t,c):t,d=a.length-1,n;d>=0;d--)(n=a[d])&&(i=(s?n(t,c,i):n(i))||i);return s&&i&&L(t,c,i),i};let m=class extends b{};m=y([h({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs -->
<chi-label for="example-6-xs">Label</chi-label>
<chi-number-input expanded size="xs" id="example-6-xs"></chi-number-input>

<!-- sm -->
<chi-label for="example-6-sm">Label</chi-label>
<chi-number-input expanded size="sm" id="example-6-sm"></chi-number-input>

<!-- md -->
<chi-label for="example-6-md">Label</chi-label>
<chi-number-input expanded size="md" id="example-6-md"></chi-number-input>

<!-- lg -->
<chi-label for="example-6-lg">Label</chi-label>
<chi-number-input expanded size="lg" id="example-6-lg"></chi-number-input>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-xs">Label</label>
  <div class="chi-number-input -expanded -xs">
    <input id="input-example-expanded-xs" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-sm">Label</label>
  <div class="chi-number-input -expanded -sm">
    <input id="input-example-expanded-sm" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-sm'));<\/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-md">Label</label>
  <div class="chi-number-input -expanded -md">
    <input id="input-example-expanded-md" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-lg">Label</label>
  <div class="chi-number-input -expanded -lg">
    <input id="input-example-expanded-lg" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-lg'));<\/script>`}})})],m);const w=e("p",{class:"-text"},[l("Expanded number inputs support the following sizes: "),e("code",null,"xs"),l(", "),e("code",null,"sm"),l(", "),e("code",null,"md"),l(", "),e("code",null,"lg"),l(". The default size is "),e("code",null,"md"),l(".")],-1),E=e("div",{class:"-d--flex -flex--column"},[e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-portal-expanded-sizes-xs"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"xs",id:"example-portal-expanded-sizes-xs"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-portal-expanded-sizes-sm"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"sm",id:"example-portal-expanded-sizes-sm"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-portal-expanded-sizes-md"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"md",id:"example-portal-expanded-sizes-md"})])]),e("div",{class:"-py--2"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example-portal-expanded-sizes-lg"},"Label"),e("chi-number-input",{class:"-mr--2",expanded:"",size:"lg",id:"example-portal-expanded-sizes-lg"})])])],-1);function B(a,t,c,s,i,d){const n=x,u=_,r=v;return f(),z(r,{title:"Sizes",id:"sizes-expanded_portal",tabs:a.exampleTabs},{"example-description":p(()=>[w]),example:p(()=>[E]),"code-webcomponent":p(()=>[o(n,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[o(u),o(n,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const J=g(m,[["render",B]]);export{J as default};

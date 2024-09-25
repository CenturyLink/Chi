var N=Object.defineProperty;var U=(t,e,n)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $=(t,e,n)=>U(t,typeof e!="symbol"?e+"":e,n);import{V as m,N as b}from"./NAah3XrW.js";import{_ as f}from"./onyWiYp2.js";import{_ as v}from"./CAQzZ0uH.js";import{o as h,h as x,w as d,a as l,b as p,d as c,m as _,c as R}from"./CEIPSiTs.js";import{_ as u}from"./DlAUqK2U.js";import{_ as V}from"./CS2TcPBX.js";import z from"./CuiCIJ-E.js";import A from"./DCpFev6z.js";import{s as J}from"./DtNz156Q.js";import{_ as F}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./B2BTeTyp.js";import"./B52wz4YK.js";import"./DA9BgUq9.js";var G=Object.defineProperty,K=Object.getOwnPropertyDescriptor,Q=(t,e,n,a)=>{for(var i=a>1?void 0:a?K(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&G(e,n,i),i};let w=class extends m{};w=Q([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__base_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__base_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__base_opt_1">
      <label class="chi-radio__label" for="example__base_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__base_opt_2">
      <label class="chi-radio__label" for="example__base_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`}})})],w);function X(t,e,n,a,i,s){const o=f,r=v;return h(),x(r,{title:"Base",id:"base",tabs:t.exampleTabs},{example:d(()=>e[0]||(e[0]=[l("fieldset",null,[l("legend",{class:"chi-label"},"Select an option"),l("div",{class:"chi-form__item -mb--1"},[l("chi-radio-button",{id:"example__base_opt_1",label:"Option 1",name:"example__base-radios"})]),l("div",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__base_opt_2",label:"Option 2",name:"example__base-radios"})])],-1)])),"code-webcomponent":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Y=u(w,[["render",X]]);var Z=Object.defineProperty,k=Object.getOwnPropertyDescriptor,ee=(t,e,n,a)=>{for(var i=a>1?void 0:a?k(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&Z(e,n,i),i};let S=class extends m{};S=ee([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__checked_opt_1" label="Option 1" name="radios" checked></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__checked_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__checked_opt_1" checked>
      <label class="chi-radio__label" for="example__checked_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__checked_opt_2">
      <label class="chi-radio__label" for="example__checked_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`}})})],S);function ie(t,e,n,a,i,s){const o=f,r=v;return h(),x(r,{title:"Checked",id:"checked",tabs:t.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[l("p",{class:"-text"},[c("Use the "),l("code",null,"checked"),c(" boolean attribute to set the default value of a radio button input to true.")],-1)])),example:d(()=>e[1]||(e[1]=[l("fieldset",null,[l("legend",{class:"chi-label"},"Select an option"),l("div",{class:"chi-form__item -mb--1"},[l("chi-radio-button",{id:"example__checked_opt_1",label:"Option 1",name:"example__checked-radios",checked:""})]),l("div",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__checked_opt_2",label:"Option 2",name:"example__checked-radios"})])],-1)])),"code-webcomponent":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const le=u(S,[["render",ie]]);var te=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,ae=(t,e,n,a)=>{for(var i=a>1?void 0:a?oe(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&te(e,n,i),i};let C=class extends m{};C=ae([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__disabled_opt_1" label="Option 1" name="radios" disabled></chi-radio-button>
  </div>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__disabled_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__disabled_opt_3" label="Option 3" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__disabled_opt_1" disabled>
      <label class="chi-radio__label" for="example__disabled_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__disabled_opt_2">
      <label class="chi-radio__label" for="example__disabled_opt_2">Option 2</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__disabled_opt_3">
      <label class="chi-radio__label" for="example__disabled_opt_3">Option 3</label>
    </div>
  </div>
</fieldset>`}})})],C);function ne(t,e,n,a,i,s){const o=f,r=v;return h(),x(r,{title:"Disabled",id:"disabled",tabs:t.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[l("p",{class:"-text"},[c("Use the "),l("code",null,"disabled"),c(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.")],-1)])),example:d(()=>e[1]||(e[1]=[l("fieldset",null,[l("legend",{class:"chi-label"},"Select an option"),l("div",{class:"chi-form__item -mb--1"},[l("chi-radio-button",{id:"example__disabled_opt_1",label:"Option 1",name:"example__disabled-radios",disabled:""})]),l("div",{class:"chi-form__item -mb--1"},[l("chi-radio-button",{id:"example__disabled_opt_2",label:"Option 2",name:"example__disabled-radios"})]),l("div",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__disabled_opt_3",label:"Option 3",name:"example__disabled-radios"})])],-1)])),"code-webcomponent":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const se=u(C,[["render",ne]]);var de=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,re=(t,e,n,a)=>{for(var i=a>1?void 0:a?pe(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&de(e,n,i),i};let P=class extends m{};P=re([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__required_opt_1" label="Option 1" name="radios" required></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__required_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__required_opt_1" required>
      <label class="chi-radio__label" for="example__required_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__required_opt_2">
      <label class="chi-radio__label" for="example__required_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`}})})],P);function ce(t,e,n,a,i,s){const o=f,r=v;return h(),x(r,{title:"Required",id:"required",tabs:t.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[l("p",{class:"-text"},[c("Use the "),l("code",null,"required"),c(" boolean attribute to indicate which radio buttons must be completed before submitting a form.")],-1)])),example:d(()=>e[1]||(e[1]=[l("fieldset",null,[l("legend",{class:"chi-label"},[c("Select an option"),l("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),l("div",{class:"chi-form__item -mb--1"},[l("chi-radio-button",{id:"example__required_opt_1",label:"Option 1",name:"example__required-radios",required:""})]),l("div",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__required_opt_2",label:"Option 2",name:"example__required-radios"})])],-1)])),"code-webcomponent":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _e=u(P,[["render",ce]]);var me=Object.defineProperty,be=Object.getOwnPropertyDescriptor,he=(t,e,n,a)=>{for(var i=a>1?void 0:a?be(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&me(e,n,i),i};let y=class extends m{};y=he([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__optional_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__optional_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__optional_opt_1">
      <label class="chi-radio__label" for="example__optional_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__optional_opt_2">
      <label class="chi-radio__label" for="example__optional_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`}})})],y);function ue(t,e,n,a,i,s){const o=f,r=v;return h(),x(r,{title:"Optional",id:"optional",tabs:t.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[l("p",{class:"-text"},[c("Use "),l("code",null,"optional"),c(" to help emphasize a group of radio button options are not required and can be skipped.")],-1)])),example:d(()=>e[1]||(e[1]=[l("fieldset",null,[l("legend",{class:"chi-label"},[c("Select an option"),l("abbr",{class:"chi-label__optional","aria-label":"Optional field"},"(optional)")]),l("div",{class:"chi-form__item -mb--1"},[l("chi-radio-button",{id:"example__optional_opt_1",label:"Option 1",name:"example__optional-radios"})]),l("div",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__optional_opt_2",label:"Option 2",name:"example__optional-radios"})])],-1)])),"code-webcomponent":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const fe=u(y,[["render",ue]]);var ve=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,Oe=(t,e,n,a)=>{for(var i=a>1?void 0:a?xe(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&ve(e,n,i),i};let q=class extends m{constructor(){super(...arguments);$(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!1,id:"htmlblueprint",label:"HTML Blueprint"}]);$(this,"codeSnippets",{webcomponent:`<fieldset>
  <div class="chi-label__wrapper">
    <legend class="chi-label">Select an option</legend>
    <div class="chi-label__help">
      <chi-button id="example__help-button" type="icon" variant="flat" size="xs" aria-label="Help">
        <chi-icon icon="circle-info-outline" size="xs" aria-hidden="true"></chi-icon>
      </chi-button>
      <chi-popover id="example__help-popover" variant="text" arrow reference="#example__help-button" position="top">
        Helpful information goes here
      </chi-popover>
    </div>
  </div>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__help_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__help_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>

<script>
  var helpButton = document.getElementById("example__help-button");

  helpButton.addEventListener("click", () => {
    var popover = document.getElementById("example__help-popover");

    popover.toggle();
  });
<\/script>`,htmlblueprint:`<fieldset>
  <div class="chi-label__wrapper">
    <legend class="chi-label">Select an option</legend>
    <div class="chi-label__help">
      <button class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example___help-popover">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </button>
      <section class="chi-popover chi-popover--top -animated" id="example___help-popover" aria-modal="true" role="dialog" aria-hidden="true" x-placement="top">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div>
  </div>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__help_opt_1">
      <label class="chi-radio__label" for="example__help_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__help_opt_2">
      <label class="chi-radio__label" for="example__help_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`})}handlerClick(){const n=this.$refs.popover;n==null||n.toggle()}};q=Oe([b({})],q);const ge={class:"chi-label__wrapper"},$e={class:"chi-label__help"},we={ref:"popover",id:"example__help-popover",variant:"text",arrow:"",reference:"#example__help-button",position:"top"};function Se(t,e,n,a,i,s){const o=f,r=V,O=v;return h(),x(O,{title:"Help",id:"help",tabs:t.exampleTabs},{"example-description":d(()=>e[1]||(e[1]=[l("p",{class:"-text"},[c("Use "),l("code",null,"chi-label__help"),c(" to include a help icon that displays helpful information about an input in a popover. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1)])),example:d(()=>[l("fieldset",null,[l("div",ge,[e[3]||(e[3]=l("legend",{class:"chi-label"},"Select an option",-1)),l("div",$e,[l("chi-button",{id:"example__help-button",type:"icon",variant:"flat",size:"xs","aria-label":"Help",onClick:e[0]||(e[0]=(...g)=>t.handlerClick&&t.handlerClick(...g))},e[2]||(e[2]=[l("chi-icon",{icon:"circle-info-outline",size:"xs","aria-hidden":"true"},null,-1)])),l("chi-popover",we,"Helpful information goes here",512)])]),e[4]||(e[4]=l("div",{class:"chi-form__item -mb--1"},[l("chi-radio-button",{id:"example__help_opt_1",label:"Option 1",name:"example__help-radios"})],-1)),e[5]||(e[5]=l("div",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__help_opt_2",label:"Option 2",name:"example__help-radios"})],-1))])]),"code-webcomponent":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(r),p(o,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ce=u(q,[["render",Se]]);var Pe=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,qe=(t,e,n,a)=>{for(var i=a>1?void 0:a?ye(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&Pe(e,n,i),i};let T=class extends m{};T=qe([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__error_opt_1" label="Option 1" name="radios" state="danger" required></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__error_opt_2" label="Option 2" name="radios" state="danger"></chi-radio-button>
  </div>
  <div class="chi-label -status -danger">
    <chi-icon icon="circle-warning" aria-hidden="true"></chi-icon>
    Please select an option
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input -danger" type="radio" name="radios" id="example__error_opt_1" required>
      <label class="chi-radio__label" for="example__error_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input -danger" type="radio" name="radios" id="example__error_opt_2">
      <label class="chi-radio__label" for="example__error_opt_2">Option 2</label>
    </div>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please select an option
  </div>
</fieldset>`}})})],T);function Te(t,e,n,a,i,s){const o=f,r=v;return h(),x(r,{title:"Error",id:"error",tabs:t.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[l("p",{class:"-text"},[c("Use the "),l("code",null,"-danger"),c(" state to provide feedback to users when a selection has not been made. Once a selection has been made, the state must be removed. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:d(()=>e[1]||(e[1]=[l("fieldset",null,[l("legend",{class:"chi-label"},[c("Select an option"),l("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),l("div",{class:"chi-form__item -mb--1"},[l("chi-radio-button",{id:"example__error_opt_1",label:"Option 1",name:"example__error-radios",state:"danger",required:""})]),l("div",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__error_opt_2",label:"Option 2",name:"example__error-radios",state:"danger"})]),l("div",{class:"chi-label -status -danger"},[l("chi-icon",{icon:"circle-warning","aria-hidden":"true"}),c("Please select an option")])],-1)])),"code-webcomponent":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Be=u(T,[["render",Te]]);var Ee=Object.defineProperty,De=Object.getOwnPropertyDescriptor,je=(t,e,n,a)=>{for(var i=a>1?void 0:a?De(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&Ee(e,n,i),i};let B=class extends m{};B=je([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -inline">
    <chi-radio-button id="example__inline_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item -inline">
    <chi-radio-button id="example__inline_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-form__item -inline">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__inline_opt_1">
      <label class="chi-radio__label" for="example__inline_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item -inline">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__inline_opt_2" disabled>
      <label class="chi-radio__label" for="example__inline_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>`}})})],B);function Re(t,e,n,a,i,s){const o=f,r=v;return h(),x(r,{title:"Inline",id:"inline",tabs:t.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[l("p",{class:"-text"},[c("Apply "),l("code",null,"-inline"),c(" to display two or more radio buttons in one row.")],-1)])),example:d(()=>e[1]||(e[1]=[l("fieldset",null,[l("legend",{class:"chi-label"},"Select an option"),l("div",{class:"chi-form__item -inline"},[l("chi-radio-button",{id:"example__inline_opt_1",label:"Option 1",name:"example__inline-radios"})]),l("div",{class:"chi-form__item -inline"},[l("chi-radio-button",{id:"example__inline_opt_2",label:"Option 2",name:"example__inline-radios"})])],-1)])),"code-webcomponent":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const He=u(B,[["render",Re]]);var Le=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Me=(t,e,n,a)=>{for(var i=a>1?void 0:a?Ie(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&Le(e,n,i),i};let E=class extends m{};E=Me([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!1,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_1" label="Option 1" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_2" label="Option 2" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_3" label="Option 3" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_4" label="Option 4" name="radio-button-list"></chi-radio-button>
    </li>
    <li class="chi-form__item">
      <chi-radio-button id="example__list_opt_5" label="Option 5" name="radio-button-list"></chi-radio-button>
    </li>
  </ul>
</fieldset>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_1">
        <label class="chi-radio__label" for="example__list_opt_1">Option 1</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_2">
        <label class="chi-radio__label" for="example__list_opt_2">Option 2</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_3">
        <label class="chi-radio__label" for="example__list_opt_3">Option 3</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_4">
        <label class="chi-radio__label" for="example__list_opt_4">Option 4</label>
      </div>
    </li>
    <li class="chi-form__item">
      <div class="chi-radio">
        <input type="radio" class="chi-radio__input" name="radio-button-list" id="example__list_opt_5">
        <label class="chi-radio__label" for="example__list_opt_5">Option 5</label>
      </div>
    </li>
  </ul>
</fieldset>`}})})],E);function We(t,e,n,a,i,s){const o=f,r=v;return h(),x(r,{title:"Radio Button List",id:"radio-button-list",tabs:t.exampleTabs},{"example-description":d(()=>e[0]||(e[0]=[l("p",{class:"-text"},[c("Radio button lists are used to wrap a series of radio buttons in a list. To render a series of radio buttons in a list, apply the class "),l("code",null,"-list"),c(" to "),l("code",null,"chi-form__item"),c(".")],-1)])),example:d(()=>e[1]||(e[1]=[l("fieldset",null,[l("legend",{class:"chi-label"},"Select an option"),l("ul",{class:"chi-form__item -list",style:{"max-width":"20rem"}},[l("li",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__list_opt_1",label:"Option 1",name:"radio-button-list"})]),l("li",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__list_opt_2",label:"Option 2",name:"radio-button-list"})]),l("li",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__list_opt_3",label:"Option 3",name:"radio-button-list"})]),l("li",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__list_opt_4",label:"Option 4",name:"radio-button-list"})]),l("li",{class:"chi-form__item"},[l("chi-radio-button",{id:"example__list_opt_5",label:"Option 5",name:"radio-button-list"})])])],-1)])),"code-webcomponent":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":d(()=>[p(o,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ne=u(E,[["render",We]]);var Ue=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,ze=(t,e,n,a)=>{for(var i=a>1?void 0:a?Ve(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&Ue(e,n,i),i};let D=class extends m{};D=ze([b({components:{BaseExample:Y,Checked:le,Disabled:se,Required:_e,Optional:fe,Help:Ce,Error:Be,Inline:He,RadioButtonList:Ne}})],D);function Ae(t,e,n,a,i,s){const o=_("BaseExample"),r=_("Checked"),O=_("Disabled"),g=_("Required"),H=_("Optional"),L=_("Help"),I=_("Error"),M=_("Inline"),W=_("RadioButtonList");return h(),R("div",null,[e[0]||(e[0]=l("h2",null,"Examples",-1)),p(o),p(r),p(O),p(g),p(H),p(L),p(I),e[1]||(e[1]=l("h2",null,"Layout Variations",-1)),p(M),p(W)])}const Je=u(D,[["render",Ae]]);var Fe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Ke=(t,e,n,a)=>{for(var i=a>1?void 0:a?Ge(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(i=(a?o(e,n,i):o(i))||i);return a&&i&&Fe(e,n,i),i};let j=class extends m{constructor(){super(...arguments);$(this,"pageTabs",J)}};j=Ke([b({components:{Accessibility:A,Examples:Je,Properties:z}})],j);const Qe={class:"chi-grid__container -pt--3"},Xe={class:"chi-tabs-panel -active",id:"examples"},Ye={class:"chi-tabs-panel",id:"properties"},Ze={class:"chi-tabs-panel",id:"accessibility"};function ke(t,e,n,a,i,s){const o=F,r=_("Examples"),O=_("Properties"),g=_("Accessibility");return h(),R("div",null,[p(o,{title:"Radio button",description:"Radio buttons are used to select a single item in a list of options.",tabs:t.pageTabs},null,8,["tabs"]),l("div",Qe,[l("div",Xe,[p(r)]),l("div",Ye,[p(O)]),l("div",Ze,[p(g)])])])}const Pi=u(j,[["render",ke]]);export{Pi as default};

var Q=Object.defineProperty;var R=(t,s,c)=>s in t?Q(t,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[s]=c;var y=(t,s,c)=>R(t,typeof s!="symbol"?s+"":s,c);import{V as m,N as b}from"./uJTUijt2.js";import{o as d,f as w,w as p,b as a,a as n,d as h,c as v,F as X,i as Y,g as Z,r as _}from"./B5CYXVwa.js";import{_ as f}from"./D8GK0F__.js";import{_ as g}from"./DKu8Jd2y.js";import{_ as u}from"./DlAUqK2U.js";import ee from"./CS5czGii.js";import te from"./D_6L-2IQ.js";import se from"./CN3DY00W.js";import ie from"./SH7HNW8j.js";import ne from"./CsAVMEle.js";import le from"./Br-cWu1m.js";import ce from"./4YqC12mP.js";import oe from"./0buKPKVh.js";import ae from"./B1sSCQiW.js";import pe from"./GAwbG9tl.js";import he from"./CXuNTb1S.js";import{s as re}from"./2EwpEKcw.js";import{_ as _e}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./C9_DePFx.js";var de=Object.defineProperty,me=Object.getOwnPropertyDescriptor,be=(t,s,c,l)=>{for(var e=l>1?void 0:l?me(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&de(s,c,e),e};let C=class extends m{};C=be([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-switch id="toggle-ba1" label="Label"></chi-switch>',htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch" for="toggle-ba1">
    <input type="checkbox" class="chi-switch__input" id="toggle-ba1">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`}})})],C);const ue=n("div",{class:"chi-form__item"},[n("chi-switch",{id:"toggle-ba1",label:"Label"})],-1);function we(t,s,c,l,e,o){const i=f,r=g;return d(),w(r,{titleSize:"h4",title:"Base",id:"base-lumen-centurylink",tabs:t.exampleTabs},{example:p(()=>[ue]),"code-webcomponent":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const fe=u(C,[["render",we]]);var ge=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,ve=(t,s,c,l)=>{for(var e=l>1?void 0:l?Le(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&ge(s,c,e),e};let x=class extends m{};x=ve([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-switch id="toggle-di1" label="Label" disabled></chi-switch>',htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch" for="toggle-di1">
    <input type="checkbox" class="chi-switch__input" name="toggle-di1" value="toggle-di1" disabled>
    <span id="toggle-di1" class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`}})})],x);const $e=n("p",{class:"-text"},[h("Use the "),n("code",null,"disabled"),h(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),n("strong",null,"Note:"),h(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1),ye=n("div",{class:"chi-form__item"},[n("chi-switch",{id:"toggle-di1",label:"Label",disabled:""})],-1);function Ce(t,s,c,l,e,o){const i=f,r=g;return d(),w(r,{titleSize:"h4",title:"Disabled",id:"disabled-lumen-centurylink",tabs:t.exampleTabs},{"example-description":p(()=>[$e]),example:p(()=>[ye]),"code-webcomponent":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const xe=u(x,[["render",Ce]]);var Se=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,ke=(t,s,c,l)=>{for(var e=l>1?void 0:l?Pe(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&Se(s,c,e),e};let S=class extends m{};S=ke([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:'<chi-switch id="toggle-ch1" label="Label" checked></chi-switch>',htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch" for="toggle-ch1">
    <input type="checkbox" class="chi-switch__input" id="toggle-ch1" checked>
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`}})})],S);const Oe=n("p",{class:"-text"},[h("Use the "),n("code",null,"checked"),h(" boolean attribute to set the default value of a toggle switch to true.")],-1),Te=n("div",{class:"chi-form__item"},[n("chi-switch",{id:"toggle-ch1",label:"Label",checked:""})],-1);function De(t,s,c,l,e,o){const i=f,r=g;return d(),w(r,{titleSize:"h4",title:"Checked",id:"checked-lumen-centurylink",tabs:t.exampleTabs},{"example-description":p(()=>[Oe]),example:p(()=>[Te]),"code-webcomponent":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ze=u(S,[["render",De]]);var Be=Object.defineProperty,je=Object.getOwnPropertyDescriptor,He=(t,s,c,l)=>{for(var e=l>1?void 0:l?je(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&Be(s,c,e),e};let P=class extends m{};P=He([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item -inline">
  <chi-switch id="toggle5" label="Label"></chi-switch>
</div>
<div class="chi-form__item -inline">
  <chi-switch id="toggle6" label="Label"></chi-switch>
</div>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Configure options</legend>
  <div class="chi-form__item -inline">
    <label class="chi-switch" for="toggle5">
      <input type="checkbox" class="chi-switch__input" id="toggle5">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
  <div class="chi-form__item -inline">
    <label class="chi-switch" for="toggle6">
      <input type="checkbox" class="chi-switch__input" id="toggle6">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
</fieldset>`}})})],P);const Ee=n("div",{class:"-d--flex"},[n("div",{class:"chi-form__item -inline"},[n("chi-switch",{id:"toggle5",label:"Label"})]),n("div",{class:"chi-form__item -inline"},[n("chi-switch",{id:"toggle6",label:"Label"})])],-1),Ie=n("div",{class:"p--text chi-tab__description"},[h("Apply the "),n("code",null,"-inline"),h(" class to "),n("code",null,"chi-form__item"),h(" for displaying toggle switches inline.")],-1),Me=n("div",{class:"p--text chi-tab__description"},[h("Apply the "),n("code",null,"-inline"),h(" class to "),n("code",null,"chi-form__item"),h(" to display switches inline.")],-1);function We(t,s,c,l,e,o){const i=f,r=g;return d(),w(r,{titleSize:"h4",title:"Inline",id:"inline-lumen-centurylink",tabs:t.exampleTabs},{example:p(()=>[Ee]),"code-webcomponent":p(()=>[Ie,a(i,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[Me,a(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ae=u(P,[["render",We]]);var Ve=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Ue=(t,s,c,l)=>{for(var e=l>1?void 0:l?Ne(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&Ve(s,c,e),e};let k=class extends m{};k=Ue([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-switch id="toggle3" label="Label"></chi-switch>
</div>
<div class="chi-form__item">
  <chi-switch id="toggle4" label="Label"></chi-switch>
</div>`,htmlblueprint:`<fieldset>
  <legend class="chi-label">Configure options</legend>
  <div class="chi-form__item">
    <label class="chi-switch" for="toggle3">
      <input type="checkbox" class="chi-switch__input" id="toggle3">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
  <div class="chi-form__item">
    <label class="chi-switch" for="toggle4">
      <input type="checkbox" class="chi-switch__input" id="toggle4">
      <span class="chi-switch__content">
        <span class="chi-switch__thumb"></span>
      </span>
      <span class="chi-switch__label">Label</span>
    </label>
  </div>
</fieldset>`}})})],k);const Fe=n("div",{class:"chi-form__item"},[n("chi-switch",{id:"toggle3",label:"Label"})],-1),qe=n("div",{class:"chi-form__item"},[n("chi-switch",{id:"toggle4",label:"Label"})],-1);function Ge(t,s,c,l,e,o){const i=f,r=g;return d(),w(r,{titleSize:"h4",title:"Stacked",id:"stacked-lumen-centurylink",tabs:t.exampleTabs},{example:p(()=>[Fe,qe]),"code-webcomponent":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Je=u(k,[["render",Ge]]);var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Re=(t,s,c,l)=>{for(var e=l>1?void 0:l?Qe(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&Ke(s,c,e),e};let O=class extends m{};O=Re([b({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],toggleList:["toggle10","toggle11","toggle12","toggle13","toggle14"],codeSnippets:{webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle10">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle10">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle11">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle11">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle12">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle12">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch" for="toggle13">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle13">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item" for="toggle14">
      <label class="chi-switch">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="toggle14">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
  </ul>
</fieldset>`}})})],O);const Xe=n("p",{class:"-text"},[h("Switch lists are used to wrap a series of switches in a list. To render, apply the class "),n("code",null,"-list"),h(" to "),n("code",null,"chi-form__item"),h(".")],-1),Ye=n("legend",{class:"chi-label"},"Select options",-1),Ze={class:"chi-form__item -list",style:{"max-width":"20rem"}},et={class:"chi-form__item"},tt=["for"],st=n("span",{class:"chi-switch__label"},"Label",-1),it=["id"],nt=n("span",{class:"chi-switch__content"},[n("span",{class:"chi-switch__thumb"})],-1);function lt(t,s,c,l,e,o){const i=f,r=g;return d(),w(r,{titleSize:"h4",title:"Switch List",id:"switch-list-lumen-centurylink",tabs:t.exampleTabs},{"example-description":p(()=>[Xe]),example:p(()=>[Ye,n("ul",Ze,[(d(!0),v(X,null,Y(t.toggleList,L=>(d(),v("li",et,[n("label",{class:"chi-switch",for:`${L}`},[st,n("input",{class:"chi-switch__input",type:"checkbox",id:`${L}`},null,8,it),nt],8,tt)]))),256))])]),"code-webcomponent":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ct=u(O,[["render",lt]]);var ot=Object.defineProperty,at=Object.getOwnPropertyDescriptor,pt=(t,s,c,l)=>{for(var e=l>1?void 0:l?at(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&ot(s,c,e),e};let T=class extends m{};T=pt([b({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch" for="toggle7">
    <span class="chi-switch__label">Label</span>
    <input type="checkbox" class="chi-switch__input" id="toggle7">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
  </label>
</div>`}})})],T);const ht=n("div",{class:"chi-form__item"},[n("label",{class:"chi-switch",for:"toggle7"},[n("span",{class:"chi-switch__label"},"Label"),n("input",{class:"chi-switch__input",type:"checkbox",id:"toggle7"}),n("span",{class:"chi-switch__content"},[n("span",{class:"chi-switch__thumb"})])])],-1);function rt(t,s,c,l,e,o){const i=f,r=g;return d(),w(r,{titleSize:"h4",title:"Switch with Left Label",id:"switch-left-label-lumen-centurylink",tabs:t.exampleTabs},{example:p(()=>[ht]),"code-webcomponent":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _t=u(T,[["render",rt]]);var dt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,bt=(t,s,c,l)=>{for(var e=l>1?void 0:l?mt(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&dt(s,c,e),e};let D=class extends m{};D=bt([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<div class="chi-form__item">
  <chi-switch id="toggle8" label="Label" hide-label></chi-switch>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-switch -label--hide" for="toggle8">
    <input type="checkbox" class="chi-switch__input" id="toggle8">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`}})})],D);const ut=n("div",{class:"chi-form__item"},[n("chi-switch",{id:"toggle8",label:"Label","hide-label":""})],-1),wt=n("div",{class:"p--text chi-tab__description"},[h("Apply the "),n("code",null,"hide-label"),h(" attribute to "),n("code",null,"chi-switch"),h(" to render a switch without a label. Use this method for rendering switches in close proximity to other text that clearly describes its purpose.")],-1),ft=n("div",{class:"p--text chi-tab__description"},[h("Apply the class "),n("code",null,"-label--hide"),h(" to "),n("code",null,"chi-switch"),h(" to render a switch without a label. Use this method for rendering switches in close proximity to other text that clearly describes its purpose.")],-1);function gt(t,s,c,l,e,o){const i=f,r=g;return d(),w(r,{titleSize:"h4",title:"Switch with Hidden Label",id:"switch-hidden-label-portal",tabs:t.exampleTabs},{example:p(()=>[ut]),"code-webcomponent":p(()=>[wt,a(i,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[ft,a(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Lt=u(D,[["render",gt]]);var vt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,yt=(t,s,c,l)=>{for(var e=l>1?void 0:l?$t(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&vt(s,c,e),e};let z=class extends m{};z=yt([b({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:`<!-- xs -->
<div class="chi-form__item">
  <chi-switch id="toggle15" label="Label" size="xs"></chi-switch>
</div>

<!-- sm -->
<div class="chi-form__item">
  <chi-switch id="toggle16" label="Label" size="sm"></chi-switch>
</div>`,htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-switch -xs" for="toggle15">
    <input type="checkbox" class="chi-switch__input" id="toggle15">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-switch -sm" for="toggle16">
    <input type="checkbox" class="chi-switch__input" id="toggle16">
    <span class="chi-switch__content">
      <span class="chi-switch__thumb"></span>
    </span>
    <span class="chi-switch__label">Label</span>
  </label>
</div>`}})})],z);const Ct=n("div",{class:"p-text -mb--3 -text"},[h("Toggle switch supports different sizes: "),n("code",null,"xs"),h(", "),n("code",null,"sm"),h(". The default size is "),n("code",null,"sm"),h(".")],-1),xt=n("div",{class:"-p--2"},[n("div",{class:"chi-form__item"},[n("chi-switch",{id:"toggle15",label:"Label",size:"xs"})])],-1),St=n("div",{class:"-p--2"},[n("div",{class:"chi-form__item"},[n("chi-switch",{id:"toggle16",label:"Label",size:"sm"})])],-1);function Pt(t,s,c,l,e,o){const i=f,r=g;return d(),w(r,{title:"Sizes",id:"sizes-lumen-centurylink",tabs:t.exampleTabs},{"example-description":p(()=>[Ct]),example:p(()=>[xt,St]),"code-webcomponent":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[a(i,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const kt=u(z,[["render",Pt]]);var Ot=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Dt=(t,s,c,l)=>{for(var e=l>1?void 0:l?Tt(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&Ot(s,c,e),e};let B=class extends m{constructor(){super(...arguments);y(this,"selectedTheme",Z())}};B=Dt([b({components:{BaseLumenCenturyLink:fe,CheckedLumenCenturyLink:ze,DisabledLumenCenturyLink:xe,InlineLumenCenturyLink:Ae,StackedLumenCenturyLink:Je,SwitchListLumenCenturyLink:ct,SwitchLeftLumenCenturyLink:_t,SwitchHiddenLumenCenturyLink:Lt,SizesLumenCenturyLink:kt,BasePortal:ee,CheckedPortal:te,DisabledPortal:se,InlinePortal:ie,StackedPortal:ne,SwitchListPortal:le,SwitchLeftPortal:ce,SwitchHiddenPortal:oe,SizesPortal:ae}})],B);const zt=n("h3",null,"Examples",-1),Bt={key:0},jt=n("h3",null,"Layout Variations",-1),Ht={key:1},Et=n("h3",null,"Layout Variations",-1);function It(t,s,c,l,e,o){const i=_("BaseLumenCenturyLink"),r=_("CheckedLumenCenturyLink"),L=_("DisabledLumenCenturyLink"),$=_("StackedLumenCenturyLink"),H=_("InlineLumenCenturyLink"),E=_("SwitchListLumenCenturyLink"),I=_("SwitchLeftLumenCenturyLink"),M=_("SwitchHiddenLumenCenturyLink"),W=_("SizesLumenCenturyLink"),A=_("BasePortal"),V=_("CheckedPortal"),N=_("DisabledPortal"),U=_("StackedPortal"),F=_("InlinePortal"),q=_("SwitchListPortal"),G=_("SwitchLeftPortal"),J=_("SwitchHiddenPortal"),K=_("SizesPortal");return d(),v("div",null,[zt,["lumen","centurylink","lumenrebrand24"].includes(t.selectedTheme)?(d(),v("div",Bt,[a(i),a(r),a(L),jt,a($),a(H),a(E),a(I),a(M),a(W)])):(d(),v("div",Ht,[a(A),a(V),a(N),Et,a(U),a(F),a(q),a(G),a(J),a(K)]))])}const Mt=u(B,[["render",It]]);var Wt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Vt=(t,s,c,l)=>{for(var e=l>1?void 0:l?At(s,c):s,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=(l?i(s,c,e):i(e))||e);return l&&e&&Wt(s,c,e),e};let j=class extends m{constructor(){super(...arguments);y(this,"pageTabs",re)}};j=Vt([b({components:{Examples:Mt,Accessibility:he,Properties:pe}})],j);const Nt={class:"chi-grid__container -pt--3"},Ut={class:"chi-tabs-panel -active",id:"examples"},Ft={class:"chi-tabs-panel",id:"properties"},qt={class:"chi-tabs-panel",id:"accessibility"};function Gt(t,s,c,l,e,o){const i=_e,r=_("Examples"),L=_("Properties"),$=_("Accessibility");return d(),v("div",null,[a(i,{title:"Toggle switch",description:"Toggle switches are used to switch between two possible states.",tabs:t.pageTabs},null,8,["tabs"]),n("div",Nt,[n("div",Ut,[a(r)]),n("div",Ft,[a(L)]),n("div",qt,[a($)])])])}const Ss=u(j,[["render",Gt]]);export{Ss as default};

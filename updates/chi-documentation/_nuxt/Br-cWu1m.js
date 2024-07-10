import{V as u,N as w}from"./uJTUijt2.js";import{_ as g}from"./D8GK0F__.js";import{_ as f}from"./DKu8Jd2y.js";import{o as p,f as x,w as n,a as s,c as m,i as L,F as S,b,d as h}from"./B5CYXVwa.js";import{_ as y}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var v=Object.defineProperty,P=Object.getOwnPropertyDescriptor,$=(t,c,a,i)=>{for(var e=i>1?void 0:i?P(c,a):c,o=t.length-1,l;o>=0;o--)(l=t[o])&&(e=(i?l(c,a,e):l(e))||e);return i&&e&&v(c,a,e),e};let _=class extends u{};_=$([w({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],toggleList:["portal-toggle10","portal-toggle11","portal-toggle12","portal-toggle13","portal-toggle14"],codeSnippets:{webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select options</legend>
  <ul class="chi-form__item -list">
    <li class="chi-form__item">
      <label class="chi-switch -xs" for="portal-toggle10">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="portal-toggle10">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch -xs" for="portal-toggle11">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="portal-toggle11">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch -xs" for="portal-toggle12">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="portal-toggle12">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item">
      <label class="chi-switch -xs" for="portal-toggle13">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="portal-toggle13">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
    <li class="chi-form__item" for="portal-toggle14">
      <label class="chi-switch -xs">
        <span class="chi-switch__label">Label</span>
        <input type="checkbox" class="chi-switch__input" id="portal-toggle14">
        <span class="chi-switch__content">
          <span class="chi-switch__thumb"></span>
        </span>
      </label>
    </li>
  </ul>
</fieldset>`}})})],_);const C=s("p",{class:"-text"},[h("Switch lists are used to wrap a series of switches in a list. To render, apply the class "),s("code",null,"-list"),h(" to "),s("code",null,"chi-form__item"),h(".")],-1),B=s("legend",{class:"chi-label"},"Select options",-1),N={class:"chi-form__item -list",style:{"max-width":"20rem"}},T={class:"chi-form__item"},V=["for"],k=s("span",{class:"chi-switch__label"},"Label",-1),O=["id"],j=s("span",{class:"chi-switch__content"},[s("span",{class:"chi-switch__thumb"})],-1);function D(t,c,a,i,e,o){const l=g,d=f;return p(),x(d,{titleSize:"h4",title:"Switch List",id:"switch-list-portal",tabs:t.exampleTabs},{"example-description":n(()=>[C]),example:n(()=>[B,s("ul",N,[(p(!0),m(S,null,L(t.toggleList,r=>(p(),m("li",T,[s("label",{class:"chi-switch -xs",for:`${r}`},[k,s("input",{class:"chi-switch__input",type:"checkbox",id:`${r}`},null,8,O),j],8,V)]))),256))])]),"code-webcomponent":n(()=>[b(l,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[b(l,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const I=y(_,[["render",D]]);export{I as default};

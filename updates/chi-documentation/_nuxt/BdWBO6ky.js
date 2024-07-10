var D=Object.defineProperty;var F=(t,l,i)=>l in t?D(t,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[l]=i;var d=(t,l,i)=>F(t,typeof l!="symbol"?l+"":l,i);import{V as h,N as b}from"./uJTUijt2.js";import{_ as N}from"./D8GK0F__.js";import{_ as P}from"./DKu8Jd2y.js";import{o as m,f as B,w as r,b as p,a,d as f,g as L,c as $,F as E,i as z,t as j,n as H,r as _}from"./B5CYXVwa.js";import{_ as v}from"./DlAUqK2U.js";import M from"./CSAF0KXG.js";import q from"./B2tMjKOI.js";import{s as A}from"./2EwpEKcw.js";import{_ as I}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./By_bqUVL.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var V=Object.defineProperty,J=Object.getOwnPropertyDescriptor,W=(t,l,i,n)=>{for(var e=n>1?void 0:n?J(l,i):l,o=t.length-1,s;o>=0;o--)(s=t[o])&&(e=(n?s(l,i,e):s(e))||e);return n&&e&&V(l,i,e),e};let g=class extends h{};g=W([b({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<input type="file" class="chi-file-input" id="file01" aria-label="Choose file">
<label for="file01">No file chosen</label>
<script>
var inputFiles = document.querySelectorAll('input[type="file"].chi-file-input');

Array.prototype.forEach.call(inputFiles, function(input) {
  var label = input.nextElementSibling;

  input.addEventListener('change', function(e) {
    var fileName = '';

    if (this.files && this.files.length > 1) {
      fileName = this.files.length + ' files selected';
    } else {
      fileName = e.target.value.split('\\').pop();
    }

    if (fileName) {
      label.innerHTML = fileName;
    }
  });
});
<\/script>`}})})],g);const Y=a("input",{class:"chi-file-input",type:"file",id:"file01","aria-label":"Choose file"},null,-1),R=a("label",{for:"file01"},"No file chosen",-1),U=a("div",{class:"chi-tab__description -text--grey"},"This HTML Blueprint requires JavaScript to update the label content once a file or files have been selected. You may use your own JavaScript solution, or use Chi's example below.",-1);function Z(t,l,i,n,e,o){const s=N,c=P;return m(),B(c,{title:"Base",id:"base",tabs:t.exampleTabs},{example:r(()=>[Y,R]),"code-webcomponent":r(()=>[p(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[U,p(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const K=v(g,[["render",Z]]);var G=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=(t,l,i,n)=>{for(var e=n>1?void 0:n?Q(l,i):l,o=t.length-1,s;o>=0;o--)(s=t[o])&&(e=(n?s(l,i,e):s(e))||e);return n&&e&&G(l,i,e),e};let T=class extends h{};T=X([b({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<input type="file" class="chi-file-input" id="unique-id-di1" aria-label="Choose file" disabled>
<label for="unique-id-di1">No file chosen</label>

<script>
var inputFiles = document.querySelectorAll('input[type="file"].chi-file-input');

Array.prototype.forEach.call(inputFiles, function(input) {
  var label = input.nextElementSibling;

  input.addEventListener('change', function(e) {
    var fileName = '';

    if (this.files && this.files.length > 1) {
      fileName = this.files.length + ' files selected';
    } else {
      fileName = e.target.value.split('\\').pop();
    }

    if (fileName) {
      label.innerHTML = fileName;
    }
  });
});
<\/script>`}})})],T);const k=a("input",{class:"chi-file-input",id:"unique-id-di1",type:"file","aria-label":"Choose file",disabled:""},null,-1),ee=a("label",{for:"unique-id-di1"},"No file chosen",-1),te={class:"chi-tab__description -text--grey"};function le(t,l,i,n,e,o){const s=N,c=P;return m(),B(c,{title:"Disabled",id:"disabled",tabs:t.exampleTabs},{example:r(()=>[k,ee]),"code-webcomponent":r(()=>[p(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[a("div",te,[f("This HTML Blueprint requires JavaScript to update the label content once a file or files have been selected. You may use your own JavaScript solution, or use Chi's example below."),p(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])])]),_:1},8,["tabs"])}const ie=v(T,[["render",le]]);var ne=Object.defineProperty,se=Object.getOwnPropertyDescriptor,oe=(t,l,i,n)=>{for(var e=n>1?void 0:n?se(l,i):l,o=t.length-1,s;o>=0;o--)(s=t[o])&&(e=(n?s(l,i,e):s(e))||e);return n&&e&&ne(l,i,e),e};const O=["xs","sm","md","lg"],y=["xs","sm","md","lg","xl"];let C=class extends h{constructor(){super(...arguments);d(this,"selectedTheme",L());d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:""});d(this,"sizes",{portal:O,centurylink:y,lumen:y,portalrebrand24:O,lumenrebrand24:y});d(this,"theme",L())}getHtmlBlueprintByTheme(){return this.sizes[this.theme.toLowerCase()].map(i=>`
<!-- -${i} -->
<input type="file" class="chi-file-input -${i}" id="example-file-input_${i}" aria-label="Choose file">
<label for="example-file-input_${i}">No file chosen</label>
`).join("")}getSizesByTheme(){return this.sizes[this.theme.toLowerCase()].map(i=>`<code>-${i}</code>`).join()}};C=oe([b({})],C);const ae={class:"-text"},pe=["innerHTML"],re=a("code",null,"-md",-1),ce={class:"-text--bold -mt--0"},ue=["id"],de=["for"];function me(t,l,i,n,e,o){const s=N,c=P;return m(),B(c,{title:"Sizes",id:"sizes",tabs:t.exampleTabs},{"example-description":r(()=>[a("p",ae,[f("File inputs support sizes:"),a("span",{innerHTML:t.getSizesByTheme()},null,8,pe),f(". The default size is "),re,f(".")])]),example:r(()=>[(m(!0),$(E,null,z(t.sizes[t.selectedTheme],(u,x)=>(m(),$("div",{class:"-p--2",key:x},[a("p",ce,"-"+j(u),1),a("input",{class:H(`chi-file-input -${u}`),type:"file",id:`example-file-${u}`,"aria-label":"Choose file"},null,10,ue),a("label",{for:`example-file-${u}`},"No file chosen",8,de)]))),128))]),"code-webcomponent":r(()=>[p(s,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(s,{lang:"html",code:t.getHtmlBlueprintByTheme()},null,8,["code"])]),_:1},8,["tabs"])}const fe=v(C,[["render",me]]);var _e=Object.defineProperty,he=Object.getOwnPropertyDescriptor,be=(t,l,i,n)=>{for(var e=n>1?void 0:n?he(l,i):l,o=t.length-1,s;o>=0;o--)(s=t[o])&&(e=(n?s(l,i,e):s(e))||e);return n&&e&&_e(l,i,e),e};let S=class extends h{};S=be([b({components:{FileInputBase:K,Disabled:ie,Sizes:fe}})],S);const ve=a("h2",null,"Examples",-1),$e=a("p",{class:"-text"},[f("To render a file input, apply the class "),a("code",null,"chi-file-input"),f("to an "),a("code",null,'input type="file"'),f(" and add a label next to it.")],-1);function xe(t,l,i,n,e,o){const s=_("FileInputBase"),c=_("Disabled"),u=_("Sizes");return m(),$(E,null,[ve,$e,p(s),p(c),p(u)],64)}const ye=v(S,[["render",xe]]);var ge=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Ce=(t,l,i,n)=>{for(var e=n>1?void 0:n?Te(l,i):l,o=t.length-1,s;o>=0;o--)(s=t[o])&&(e=(n?s(l,i,e):s(e))||e);return n&&e&&ge(l,i,e),e};let w=class extends h{constructor(){super(...arguments);d(this,"pageTabs",A)}mounted(){this.saveFile()}saveFile(){document.querySelectorAll('input[type="file"].chi-file-input').forEach(i=>{const n=i.nextElementSibling;i.addEventListener("change",e=>{const o=e.target.value.split("\\").pop();n&&o&&(n.innerHTML=o)})})}};w=Ce([b({components:{Accessibility:q,Examples:ye,Properties:M}})],w);const Se={class:"chi-grid__container -pt--3"},we={class:"chi-tabs-panel -active",id:"examples"},Ne={class:"chi-tabs-panel",id:"properties"},Pe={class:"chi-tabs-panel",id:"accessibility"};function Be(t,l,i,n,e,o){const s=I,c=_("Examples"),u=_("Properties"),x=_("Accessibility");return m(),$(E,null,[p(s,{title:"File input",description:"File inputs are used to select one or more files from a user's device storage.",tabs:t.pageTabs},null,8,["tabs"]),a("div",Se,[a("div",we,[p(c)]),a("div",Ne,[p(u)]),a("div",Pe,[p(x)])])],64)}const Ze=v(w,[["render",Be]]);export{Ze as default};

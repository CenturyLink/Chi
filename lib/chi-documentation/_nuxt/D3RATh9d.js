var O=Object.defineProperty;var D=(l,e,i)=>e in l?O(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i;var m=(l,e,i)=>D(l,typeof e!="symbol"?e+"":e,i);import{V as h,N as _}from"./NAah3XrW.js";import{_ as w}from"./onyWiYp2.js";import{_ as N}from"./CAQzZ0uH.js";import{o as d,h as P,w as r,a,b as p,d as f,j as E,c as $,F as B,i as F,t as j,n as z,m as b}from"./CEIPSiTs.js";import{_ as v}from"./DlAUqK2U.js";import H from"./CNaG6Bax.js";import M from"./CTYzXvnJ.js";import{s as q}from"./DtNz156Q.js";import{_ as A}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./B52wz4YK.js";import"./DA9BgUq9.js";var I=Object.defineProperty,V=Object.getOwnPropertyDescriptor,J=(l,e,i,n)=>{for(var t=n>1?void 0:n?V(e,i):e,o=l.length-1,s;o>=0;o--)(s=l[o])&&(t=(n?s(e,i,t):s(t))||t);return n&&t&&I(e,i,t),t};let y=class extends h{};y=J([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<input type="file" class="chi-file-input" id="file01" aria-label="Choose file">
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
<\/script>`}})})],y);function W(l,e,i,n,t,o){const s=w,c=N;return d(),P(c,{title:"Base",id:"base",tabs:l.exampleTabs},{example:r(()=>e[0]||(e[0]=[a("input",{class:"chi-file-input",type:"file",id:"file01","aria-label":"Choose file"},null,-1),a("label",{for:"file01"},"No file chosen",-1)])),"code-webcomponent":r(()=>[p(s,{class:"html",lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[e[1]||(e[1]=a("div",{class:"chi-tab__description -text--grey"},"This HTML Blueprint requires JavaScript to update the label content once a file or files have been selected. You may use your own JavaScript solution, or use Chi's example below.",-1)),p(s,{lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Y=v(y,[["render",W]]);var R=Object.defineProperty,U=Object.getOwnPropertyDescriptor,Z=(l,e,i,n)=>{for(var t=n>1?void 0:n?U(e,i):e,o=l.length-1,s;o>=0;o--)(s=l[o])&&(t=(n?s(e,i,t):s(t))||t);return n&&t&&R(e,i,t),t};let g=class extends h{};g=Z([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<input type="file" class="chi-file-input" id="unique-id-di1" aria-label="Choose file" disabled>
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
<\/script>`}})})],g);const K={class:"chi-tab__description -text--grey"};function G(l,e,i,n,t,o){const s=w,c=N;return d(),P(c,{title:"Disabled",id:"disabled",tabs:l.exampleTabs},{example:r(()=>e[0]||(e[0]=[a("input",{class:"chi-file-input",id:"unique-id-di1",type:"file","aria-label":"Choose file",disabled:""},null,-1),a("label",{for:"unique-id-di1"},"No file chosen",-1)])),"code-webcomponent":r(()=>[p(s,{lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[a("div",K,[e[1]||(e[1]=f("This HTML Blueprint requires JavaScript to update the label content once a file or files have been selected. You may use your own JavaScript solution, or use Chi's example below.")),p(s,{lang:"html",code:l.codeSnippets.htmlblueprint},null,8,["code"])])]),_:1},8,["tabs"])}const Q=v(g,[["render",G]]);var X=Object.defineProperty,k=Object.getOwnPropertyDescriptor,ee=(l,e,i,n)=>{for(var t=n>1?void 0:n?k(e,i):e,o=l.length-1,s;o>=0;o--)(s=l[o])&&(t=(n?s(e,i,t):s(t))||t);return n&&t&&X(e,i,t),t};const te=["xs","sm","md","lg"],L=["xs","sm","md","lg","xl"];let T=class extends h{constructor(){super(...arguments);m(this,"selectedTheme",E());m(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);m(this,"codeSnippets",{webcomponent:""});m(this,"sizes",{portal:te,centurylink:L,lumen:L});m(this,"theme",E())}getHtmlBlueprintByTheme(){return this.sizes[this.theme.toLowerCase()].map(i=>`
<!-- -${i} -->
<input type="file" class="chi-file-input -${i}" id="example-file-input_${i}" aria-label="Choose file">
<label for="example-file-input_${i}">No file chosen</label>
`).join("")}getSizesByTheme(){return this.sizes[this.theme.toLowerCase()].map(i=>`<code>-${i}</code>`).join()}};T=ee([_({})],T);const le={class:"-text"},ie=["innerHTML"],ne={class:"-text--bold -mt--0"},se=["id"],oe=["for"];function ae(l,e,i,n,t,o){const s=w,c=N;return d(),P(c,{title:"Sizes",id:"sizes",tabs:l.exampleTabs},{"example-description":r(()=>[a("p",le,[e[0]||(e[0]=f("File inputs support sizes:")),a("span",{innerHTML:l.getSizesByTheme()},null,8,ie),e[1]||(e[1]=f(". The default size is ")),e[2]||(e[2]=a("code",null,"-md",-1)),e[3]||(e[3]=f("."))])]),example:r(()=>[(d(!0),$(B,null,F(l.sizes[l.selectedTheme],(u,x)=>(d(),$("div",{class:"-p--2",key:x},[a("p",ne,"-"+j(u),1),a("input",{class:z(`chi-file-input -${u}`),type:"file",id:`example-file-${u}`,"aria-label":"Choose file"},null,10,se),a("label",{for:`example-file-${u}`},"No file chosen",8,oe)]))),128))]),"code-webcomponent":r(()=>[p(s,{lang:"html",code:l.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[p(s,{lang:"html",code:l.getHtmlBlueprintByTheme()},null,8,["code"])]),_:1},8,["tabs"])}const pe=v(T,[["render",ae]]);var re=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,ue=(l,e,i,n)=>{for(var t=n>1?void 0:n?ce(e,i):e,o=l.length-1,s;o>=0;o--)(s=l[o])&&(t=(n?s(e,i,t):s(t))||t);return n&&t&&re(e,i,t),t};let C=class extends h{};C=ue([_({components:{FileInputBase:Y,Disabled:Q,Sizes:pe}})],C);function me(l,e,i,n,t,o){const s=b("FileInputBase"),c=b("Disabled"),u=b("Sizes");return d(),$(B,null,[e[0]||(e[0]=a("h2",null,"Examples",-1)),e[1]||(e[1]=a("p",{class:"-text"},[f("To render a file input, apply the class "),a("code",null,"chi-file-input"),f("to an "),a("code",null,'input type="file"'),f(" and add a label next to it.")],-1)),p(s),p(c),p(u)],64)}const de=v(C,[["render",me]]);var fe=Object.defineProperty,be=Object.getOwnPropertyDescriptor,he=(l,e,i,n)=>{for(var t=n>1?void 0:n?be(e,i):e,o=l.length-1,s;o>=0;o--)(s=l[o])&&(t=(n?s(e,i,t):s(t))||t);return n&&t&&fe(e,i,t),t};let S=class extends h{constructor(){super(...arguments);m(this,"pageTabs",q)}mounted(){this.saveFile()}saveFile(){document.querySelectorAll('input[type="file"].chi-file-input').forEach(i=>{const n=i.nextElementSibling;i.addEventListener("change",t=>{const o=t.target.value.split("\\").pop();n&&o&&(n.innerHTML=o)})})}};S=he([_({components:{Accessibility:M,Examples:de,Properties:H}})],S);const _e={class:"chi-grid__container -pt--3"},ve={class:"chi-tabs-panel -active",id:"examples"},$e={class:"chi-tabs-panel",id:"properties"},xe={class:"chi-tabs-panel",id:"accessibility"};function ye(l,e,i,n,t,o){const s=A,c=b("Examples"),u=b("Properties"),x=b("Accessibility");return d(),$(B,null,[p(s,{title:"File input",description:"File inputs are used to select one or more files from a user's device storage.",tabs:l.pageTabs},null,8,["tabs"]),a("div",_e,[a("div",ve,[p(c)]),a("div",$e,[p(u)]),a("div",xe,[p(x)])])],64)}const qe=v(S,[["render",ye]]);export{qe as default};

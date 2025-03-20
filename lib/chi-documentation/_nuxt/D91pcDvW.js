import{_ as h}from"./Cr4Krhex.js";import{_}from"./Zvpnuh4B.js";import{e as m,f as x,o as r,w as o,a as e,b as s,l as v,r as E,s as g,c as b,i as B,t as $,n as H,j as M,F as C,d as u}from"./BnvmtQYM.js";const q=m({__name:"_base",setup(d){const a=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<input type="file" class="chi-file-input" id="file01" aria-label="Choose file">
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
<\/script>`};return(f,i)=>{const n=h,p=_;return r(),x(p,{title:"Base",id:"base",tabs:a},{example:o(()=>i[0]||(i[0]=[e("input",{class:"chi-file-input",type:"file",id:"file01","aria-label":"Choose file"},null,-1),e("label",{for:"file01"},"No file chosen",-1)])),"code-webcomponent":o(()=>[s(n,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description -text--grey"},"This HTML Blueprint requires JavaScript to update the label content once a file or files have been selected. You may use your own JavaScript solution, or use Chi's example below.",-1)),s(n,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),F=m({__name:"_disabled",setup(d){const a=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],t={webcomponent:"",htmlblueprint:`<input type="file" class="chi-file-input" id="unique-id-di1" aria-label="Choose file" disabled>
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
<\/script>`};return(f,i)=>{const n=h,p=_;return r(),x(p,{title:"Disabled",id:"disabled",tabs:a},{example:o(()=>i[0]||(i[0]=[e("input",{class:"chi-file-input",id:"unique-id-di1",type:"file","aria-label":"Choose file",disabled:""},null,-1),e("label",{for:"unique-id-di1"},"No file chosen",-1)])),"code-webcomponent":o(()=>[s(n,{lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description -text--grey"},"This HTML Blueprint requires JavaScript to update the label content once a file or files have been selected. You may use your own JavaScript solution, or use Chi's example below.",-1)),s(n,{lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),z={class:"-text"},k=["innerHTML"],A={class:"-text--bold -mt--0"},J=["id"],j=["for"],I=m({__name:"_sizes",setup(d){const a=["xs","sm","md","lg"],t=["xs","sm","md","lg","xl"],f=v(),i=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={portal:a,centurylink:t,lumen:t},p=E(v()),T=g(()=>n[p.value.toLowerCase()].map(l=>`
<!-- -${l} -->
<input type="file" class="chi-file-input -${l}" id="example-file-input_${l}" aria-label="Choose file">
<label for="example-file-input_${l}">No file chosen</label>
`).join("")),N=g(()=>n[p.value.toLowerCase()].map(l=>`<code>-${l}</code>`).join());return(y,l)=>{const S=h,w=_;return r(),x(w,{title:"Sizes",id:"sizes",tabs:i},{"example-description":o(()=>[e("p",z,[l[0]||(l[0]=u("File inputs support sizes:")),e("span",{innerHTML:N.value},null,8,k),l[1]||(l[1]=u(". The default size is ")),l[2]||(l[2]=e("code",null,"-md",-1)),l[3]||(l[3]=u("."))])]),example:o(()=>[(r(!0),b(C,null,B(n[M(f)],(c,L)=>(r(),b("div",{class:"-p--2",key:L},[e("p",A,"-"+$(c),1),e("input",{class:H(`chi-file-input -${c}`),type:"file",id:`example-file-${c}`,"aria-label":"Choose file"},null,10,J),e("label",{for:`example-file-${c}`},"No file chosen",8,j)]))),128))]),"code-htmlblueprint":o(()=>[s(S,{lang:"html",code:T.value},null,8,["code"])]),_:1})}}}),D=m({__name:"index",setup(d){return(a,t)=>(r(),b(C,null,[t[0]||(t[0]=e("h2",null,"Examples",-1)),t[1]||(t[1]=e("p",{class:"-text"},[u("To render a file input, apply the class "),e("code",null,"chi-file-input"),u("to an "),e("code",null,'input type="file"'),u(" and add a label next to it.")],-1)),s(q),s(F),s(I)],64))}});export{D as _};

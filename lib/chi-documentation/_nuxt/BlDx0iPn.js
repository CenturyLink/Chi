import{_ as h}from"./D6TR492o.js";import{_}from"./BQdGHRz_.js";import{e as m,f as x,w as o,o as r,a as e,b as s,j as v,r as E,x as g,d as u,c as b,i as B,t as $,n as H,k as M,F as C}from"./C2nwJ2gl.js";const q=m({__name:"_base",setup(d){const a=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<input type="file" class="chi-file-input" id="file01" aria-label="Choose file">
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
<\/script>`};return(f,i)=>{const n=h,p=_;return r(),x(p,{title:"Base",id:"base",tabs:a},{example:o(()=>i[0]||(i[0]=[e("input",{class:"chi-file-input",type:"file",id:"file01","aria-label":"Choose file"},null,-1),e("label",{for:"file01"},"No file chosen",-1)])),"code-webcomponent":o(()=>[s(n,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description -text--grey"},"This HTML Blueprint requires JavaScript to update the label content once a file or files have been selected. You may use your own JavaScript solution, or use Chi's example below.",-1)),s(n,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),F=m({__name:"_disabled",setup(d){const a=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<input type="file" class="chi-file-input" id="unique-id-di1" aria-label="Choose file" disabled>
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
<\/script>`};return(f,i)=>{const n=h,p=_;return r(),x(p,{title:"Disabled",id:"disabled",tabs:a},{example:o(()=>i[0]||(i[0]=[e("input",{class:"chi-file-input",id:"unique-id-di1",type:"file","aria-label":"Choose file",disabled:""},null,-1),e("label",{for:"unique-id-di1"},"No file chosen",-1)])),"code-webcomponent":o(()=>[s(n,{lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":o(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description -text--grey"},"This HTML Blueprint requires JavaScript to update the label content once a file or files have been selected. You may use your own JavaScript solution, or use Chi's example below.",-1)),s(n,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),k={class:"-text"},z=["innerHTML"],A={class:"-text--bold -mt--0"},J=["id"],j=["for"],I=m({__name:"_sizes",setup(d){const a=["xs","sm","md","lg"],l=["xs","sm","md","lg","xl"],f=v(),i=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={portal:a,centurylink:l,lumen:l},p=E(v()),T=g(()=>n[p.value.toLowerCase()].map(t=>`
<!-- -${t} -->
<input type="file" class="chi-file-input -${t}" id="example-file-input_${t}" aria-label="Choose file">
<label for="example-file-input_${t}">No file chosen</label>
`).join("")),N=g(()=>n[p.value.toLowerCase()].map(t=>`<code>-${t}</code>`).join());return(y,t)=>{const S=h,w=_;return r(),x(w,{title:"Sizes",id:"sizes",tabs:i},{"example-description":o(()=>[e("p",k,[t[0]||(t[0]=u("File inputs support sizes:")),e("span",{innerHTML:N.value},null,8,z),t[1]||(t[1]=u(". The default size is ")),t[2]||(t[2]=e("code",null,"-md",-1)),t[3]||(t[3]=u("."))])]),example:o(()=>[(r(!0),b(C,null,B(n[M(f)],(c,L)=>(r(),b("div",{class:"-p--2",key:L},[e("p",A,"-"+$(c),1),e("input",{class:H(`chi-file-input -${c}`),type:"file",id:`example-file-${c}`,"aria-label":"Choose file"},null,10,J),e("label",{for:`example-file-${c}`},"No file chosen",8,j)]))),128))]),"code-htmlblueprint":o(()=>[s(S,{lang:"html",code:T.value},null,8,["code"])]),_:1})}}}),D=m({__name:"index",setup(d){return(a,l)=>(r(),b(C,null,[l[0]||(l[0]=e("h2",null,"Examples",-1)),l[1]||(l[1]=e("p",{class:"-text"},[u("To render a file input, apply the class "),e("code",null,"chi-file-input"),u("to an "),e("code",null,'input type="file"'),u(" and add a label next to it.")],-1)),s(q),s(F),s(I)],64))}});export{D as _};

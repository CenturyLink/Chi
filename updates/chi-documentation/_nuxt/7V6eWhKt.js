var u=Object.defineProperty;var m=(t,e,o)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var i=(t,e,o)=>m(t,typeof e!="symbol"?e+"":e,o);import{a5 as d,o as h,c as _,b as r,F as f}from"./B5CYXVwa.js";import{V as b,N as v}from"./uJTUijt2.js";import{_ as w}from"./drvuhYu1.js";import{_ as y}from"./DdvxCeKp.js";import{_ as C}from"./DlAUqK2U.js";var g=Object.defineProperty,k=Object.getOwnPropertyDescriptor,x=(t,e,o,s)=>{for(var n=s>1?void 0:s?k(e,o):e,c=t.length-1,a;c>=0;c--)(a=t[c])&&(n=(s?a(e,o,n):a(n))||n);return s&&n&&g(e,o,n),n};let l=class extends b{constructor(){super(...arguments);i(this,"stylesheet",{htmlblueprint:e=>`<link rel="stylesheet" href="https://lib.lumen.com/chi/${e}/chi.css" integrity="sha256-1bhPx5yXmCMWKzXn9PFea05NRF+239d9pqYJcR3GHWY=" crossorigin="anonymous">`});i(this,"values",["Vue","Stencil","Angular","React"]);i(this,"columns",[{title:"",key:"class"},{title:"chi.css",key:"css"},{title:"chi.js",key:"js"},{title:"Web components",key:"webComponents"},{title:"Favicon",key:"favicon"},{title:"Download",key:"download"}])}mounted(){chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),{mode:"accordion"})}getContent(e,o){switch(e.key){case"class":return`<span class="-text--bold">${o}</span>`;case"download":return`<a href="/boilerplates/chi-vue-es6-boilerplate.zip" class="chi-button">
                    <div class="chi-button__content">
                        <i aria-hidden="true" class="chi-icon icon-circle-arrow-down-outline"></i>
                        <span>Download</span>
                    </div>
                 </a>`;default:return'<i class="chi-icon icon-check -icon--success"></i>'}}get version(){return d()}};l=x([v({})],l);function P(t,e,o,s,n,c){const a=w,p=y;return h(),_(f,null,[r(a,{title:"Framework specific boilerplates",id:"framework-specific-boilerplates",titleSize:"h2",additionalClasses:"-lh--4"}),r(p,{data:t.values,columns:t.columns,getContent:t.getContent,additionalClasses:"-mt--3 -mb--3 -bordered -text--center"},null,8,["data","columns","getContent"])],64)}const N=C(l,[["render",P]]);export{N as default};

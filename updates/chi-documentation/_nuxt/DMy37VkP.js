var i=Object.defineProperty;var c=(r,e,o)=>e in r?i(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var l=(r,e,o)=>c(r,typeof e!="symbol"?e+"":e,o);import{V as p,N as _}from"./uJTUijt2.js";import{h as v}from"./DAzwSQBh.js";import{_ as f}from"./drvuhYu1.js";import{_ as b}from"./DdvxCeKp.js";import{o as h,c as $,b as d,F as x}from"./B5CYXVwa.js";import{_ as C}from"./DlAUqK2U.js";import"./2EwpEKcw.js";var g=Object.defineProperty,B=Object.getOwnPropertyDescriptor,w=(r,e,o,t)=>{for(var a=t>1?void 0:t?B(e,o):e,n=r.length-1,s;n>=0;n--)(s=r[n])&&(a=(t?s(e,o,a):s(a))||a);return t&&a&&g(e,o,a),a};let u=class extends p{constructor(){super(...arguments);l(this,"columns",v);l(this,"borderRadius",[{name:"base",value:["4px","0.25rem"]},{name:"sharp",value:["0"]},{name:"circle",value:["50%"]}])}getContent(o,t){switch(o.key){case"token":return`<code>$border-radius-${t.name}</code>`;case"value":return`<div class="-text">${t.value[0]}</div>${t.value[1]?`<div class="-text">${t.value[1]}</div>`:""}`;case"example":return`<div class="-text -bg--black" style="height:1rem;width:1rem;border-radius:${t.value[0]}"></div>`;default:return""}}};u=w([_({})],u);function R(r,e,o,t,a,n){const s=f,m=b;return h(),$(x,null,[d(s,{title:"Border radius",id:"border-radius",titleSize:"h2"}),d(m,{data:r.borderRadius,columns:r.columns,getContent:r.getContent,additionalClasses:"-xs -mt--2 -mb--4 -lumen--show"},null,8,["data","columns","getContent"])],64)}const k=C(u,[["render",R]]);export{k as default};

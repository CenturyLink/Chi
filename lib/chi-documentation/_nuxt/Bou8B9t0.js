import{V as c,N as p}from"./NAah3XrW.js";import{_ as u}from"./onyWiYp2.js";import{o as g,c as v,a as s,b as i,d as m}from"./CEIPSiTs.js";import{_ as f}from"./DlAUqK2U.js";import"./CnZFJwg2.js";var h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,S=(t,e,a,n)=>{for(var r=n>1?void 0:n?y(e,a):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(r=(n?o(e,a,r):o(r))||r);return n&&r&&h(e,a,r),r};let d=class extends c{};d=S([p({data:()=>({codeMemory1:`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
// do stuff
rangeSlider.dispose();`,codeMemory2:`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
var elem2 = document.getElementById('range02');
var rangeSlider2 = chi.rangeSlider(elem2);
rangeSlider === rangeSlider2; // returns true

rangeSlider.dispose(); // Only have to do it once.`})})],d);function P(t,e,a,n,r,l){const o=u;return g(),v("div",null,[e[0]||(e[0]=s("h3",null,"Preventing memory leaks",-1)),e[1]||(e[1]=s("p",{class:"-text"},"Rangeslider component has a dispose function to free all the resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component.",-1)),i(o,{lang:"javascript",code:t.codeMemory1},null,8,["code"]),e[2]||(e[2]=s("p",{class:"-text"},[m("It is safe to call the "),s("code",null,"rangeSlider"),m(" method more than once, as it will return any previously created rangeSlider component associated with the element.")],-1)),i(o,{lang:"javascript",code:t.codeMemory2},null,8,["code"])])}const O=f(d,[["render",P]]);export{O as default};

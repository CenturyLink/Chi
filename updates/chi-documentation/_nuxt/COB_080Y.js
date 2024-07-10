import{V as m,N as p}from"./uJTUijt2.js";import{_ as u}from"./D8GK0F__.js";import{o as h,c as g,b as d,a as l,d as i}from"./B5CYXVwa.js";import{_}from"./DlAUqK2U.js";import"./C-hgEc7b.js";var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=(r,o,a,n)=>{for(var e=n>1?void 0:n?f(o,a):o,s=r.length-1,t;s>=0;s--)(t=r[s])&&(e=(n?t(o,a,e):t(e))||e);return n&&e&&v(o,a,e),e};let c=class extends m{};c=y([p({data:()=>({codeMemory1:`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
// do stuff
rangeSlider.dispose();`,codeMemory2:`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
var elem2 = document.getElementById('range02');
var rangeSlider2 = chi.rangeSlider(elem2);
rangeSlider === rangeSlider2; // returns true

rangeSlider.dispose(); // Only have to do it once.`})})],c);const S=l("h3",null,"Preventing memory leaks",-1),P=l("p",{class:"-text"},"Rangeslider component has a dispose function to free all the resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component.",-1),x=l("p",{class:"-text"},[i("It is safe to call the "),l("code",null,"rangeSlider"),i(" method more than once, as it will return any previously created rangeSlider component associated with the element.")],-1);function w(r,o,a,n,e,s){const t=u;return h(),g("div",null,[S,P,d(t,{lang:"javascript",code:r.codeMemory1},null,8,["code"]),x,d(t,{lang:"javascript",code:r.codeMemory2},null,8,["code"])])}const b=_(c,[["render",w]]);export{b as default};

import{V as p,N as c}from"./NAah3XrW.js";import{_ as v}from"./_tbI9m6B.js";import{_ as g}from"./onyWiYp2.js";import{o as b,c as f,a as e,b as r,d as t}from"./CEIPSiTs.js";import{_ as h}from"./DlAUqK2U.js";import"./CnZFJwg2.js";var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,C=(o,n,s,a)=>{for(var l=a>1?void 0:a?w(n,s):n,d=o.length-1,i;d>=0;d--)(i=o[d])&&(l=(a?i(n,s,l):i(l))||l);return a&&l&&y(n,s,l),l};let m=class extends p{};m=C([c({data:()=>({codeMemory1:`var elem = document.getElementById('example-tabs');
var tabComponent = chi.tab(elem);
// do stuff
tabComponent.dispose();`,codeMemory2:`var elem = document.getElementById('example-tabs');
var tabComponent = chi.tab(elem);
var elem2 = document.getElementById('example-tabs');
var tabComponent2 = chi.tab(elem2);
tabComponent === tabComponent2; // returns true

tabComponent.dispose(); // Only have to do it once.`,codeMemory3:`var navigationElem = document.getElementById('#navigationElementId');
var navigationComponent = chi.navigation(navigationElem);
// do stuff
navigationComponent.dispose();`,codeMemory4:`var elem = document.getElementById('navigation-1');
var navigationComponent = chi.navigation(elem);
var elem2 = document.getElementById('navigation-1');
var navigationComponent2 = chi.navigation(elem2);
navigationComponent === navigationComponent2; // returns true

navigationComponent.dispose(); // Only have to do it once.`})})],m);function T(o,n,s,a,l,d){const i=v,u=g;return b(),f("div",null,[n[0]||(n[0]=e("h2",null,"Web Component",-1)),r(i,{tag:"chi-tabs"}),n[1]||(n[1]=e("h3",null,"Interfaces and types",-1)),n[2]||(n[2]=e("section",{class:"chi-table chi-table__options -bordered -my--3"},[e("div",{style:{"overflow-x":"auto"}},[e("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[e("thead",null,[e("tr",null,[e("th",null,[e("div",null,"Name")]),e("th",null,[e("div",null,"Interface")])])]),e("tbody",null,[e("tr",null,[e("td",null,[e("div",null,[e("code",null,"TabTrigger")])]),e("td",{class:"-p--0"},[e("pre",{class:"-mb--0"},[t(`interface TabTrigger {
  children: `),e("code",null,"TabTrigger[]"),t(`;
  parent?: `),e("code",null,"TabTrigger"),t(`;
  id: `),e("code",null,"string"),t(`;
  label?: `),e("code",null,"string"),t(`;
  overflow: `),e("code",null,"boolean"),t(`;
  target?: `),e("code",null,"string"),t(`;
  href?: `),e("code",null,"string"),t(`;
  visibleItems?: `),e("code",null,"number"),t(`;
}
`)])])])])])])],-1)),n[3]||(n[3]=e("h3",null,"JavaScript",-1)),n[4]||(n[4]=e("h4",null,"Options",-1)),n[5]||(n[5]=e("p",{class:"-text"},"This component accepts options to configure its behavior.",-1)),n[6]||(n[6]=e("section",{class:"chi-table chi-table__options -bordered -my--3"},[e("div",null,[e("table",{class:"-text",cellpadding:"0",cellspacing:"0"},[e("thead",null,[e("tr",null,[e("th",{style:{width:"10em"}},[e("div",null,"Option")]),e("th",{style:{width:"10em"}},[e("div",null,"Default")]),e("th",null,[e("div",null,"Description")])])]),e("tbody",null,[e("tr",null,[e("td",null,[e("div",null,[e("code",null,"overflowMenu")])]),e("td",null,[e("div",null,[e("code",null,"true")])]),e("td",null,[e("div",null,"Only works for horizontal navigation components. It encloses overflowed tabs into a dropdown located at the end of the navigation component.")])]),e("tr",null,[e("td",null,[e("div",null,[e("code",null,"overflowMenuLabel")])]),e("td",null,[e("div",null,[e("code",null,"See More...")])]),e("td",null,[e("div",null,"Text for the overflow menu dropdown.")])]),e("tr",null,[e("td",null,[e("div",null,[e("code",null,"waitForAnimations")])]),e("td",null,[e("div",null,[e("code",null,"false")])]),e("td",null,[e("div",null,"Makes the browser wait for the sliding border to move to the clicked link. It only works with common links.")])])])])])],-1)),n[7]||(n[7]=e("h4",null,"Preventing memory leaks",-1)),n[8]||(n[8]=e("h5",null,"chi.tab()",-1)),n[9]||(n[9]=e("p",{class:"-text"},"Tab components have a dispose function to free all resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component.",-1)),r(u,{lang:"javascript",code:o.codeMemory1},null,8,["code"]),n[10]||(n[10]=e("p",{class:"-text"},[e("span",{class:"chi-badge -dark -sm -mr--1"},[e("span",null,"Tip")]),t("It is safe to call the tab method more than once, as it will return any previously created tabs component associated with the trigger.")],-1)),r(u,{code:o.codeMemory2,lang:"javascript"},null,8,["code"]),n[11]||(n[11]=e("h5",null,"chi.navigation()",-1)),n[12]||(n[12]=e("p",{class:"-text"},"Navigation components have a dispose function to free all resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component. There is no need to call to tab and dropdown inner components dispose function as the navigation one will free resources of all internal components automatically.",-1)),r(u,{lang:"javascript",code:o.codeMemory3},null,8,["code"]),n[13]||(n[13]=e("p",{class:"-text"},[e("span",{class:"chi-badge -dark -sm -mr--1"},[e("span",null,"Tip")]),t("It is safe to call the "),e("code",null,"navigation"),t(" factory function more than once, as it will return any previously created navigation component associated to the element.")],-1)),r(u,{lang:"javascript",code:o.codeMemory4},null,8,["code"])])}const j=h(m,[["render",T]]);export{j as default};

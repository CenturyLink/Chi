import{a as u,_ as p}from"./Dg5y4kC1.js";import{_ as c}from"./D8z6bDCW.js";import{_ as v}from"./Cr4Krhex.js";import{e as s,c as g,o as r,a as e,b as o,d as n,f as b,w as i}from"./BnvmtQYM.js";import"./Bk5Nr_bJ.js";import"./CfKaToPi.js";import"./CpGl5nKs.js";import"./8Rn8z3Rm.js";import"./DlAUqK2U.js";import"./DhIYcLiR.js";import"./DKkADrKB.js";import"./D0qO3s5y.js";import"./Zvpnuh4B.js";import"./DD5d-mQ_.js";const h=`var elem = document.getElementById('example-tabs');
var tabComponent = chi.tab(elem);
// do stuff
tabComponent.dispose();`,f=`var elem = document.getElementById('example-tabs');
var tabComponent = chi.tab(elem);
var elem2 = document.getElementById('example-tabs');
var tabComponent2 = chi.tab(elem2);
tabComponent === tabComponent2; // returns true

tabComponent.dispose(); // Only have to do it once.`,y=`var navigationElem = document.getElementById('#navigationElementId');
var navigationComponent = chi.navigation(navigationElem);
// do stuff
navigationComponent.dispose();`,w=`var elem = document.getElementById('navigation-1');
var navigationComponent = chi.navigation(elem);
var elem2 = document.getElementById('navigation-1');
var navigationComponent2 = chi.navigation(elem2);
navigationComponent === navigationComponent2; // returns true

navigationComponent.dispose(); // Only have to do it once.`,x=s({__name:"_properties",setup(d){return(m,t)=>{const a=u,l=v;return r(),g("div",null,[t[0]||(t[0]=e("h2",null,"Web Component",-1)),o(a,{tag:"chi-tabs"}),t[1]||(t[1]=e("h3",null,"Interfaces and types",-1)),t[2]||(t[2]=e("section",{class:"chi-table chi-table__options -bordered -my--3"},[e("div",{style:{"overflow-x":"auto"}},[e("table",{class:"-types -text",cellpadding:"0",cellspacing:"0"},[e("thead",null,[e("tr",null,[e("th",null,[e("div",null,"Name")]),e("th",null,[e("div",null,"Interface")])])]),e("tbody",null,[e("tr",null,[e("td",null,[e("div",null,[e("code",null,"TabTrigger")])]),e("td",{class:"-p--0"},[e("pre",{class:"-mb--0"},[n(`interface TabTrigger {
  children: `),e("code",null,"TabTrigger[]"),n(`;
  parent?: `),e("code",null,"TabTrigger"),n(`;
  id: `),e("code",null,"string"),n(`;
  label?: `),e("code",null,"string"),n(`;
  overflow: `),e("code",null,"boolean"),n(`;
  target?: `),e("code",null,"string"),n(`;
  href?: `),e("code",null,"string"),n(`;
  visibleItems?: `),e("code",null,"number"),n(`;
  disabled?: `),e("code",null,"boolean"),n(`;
}
`)])])])])])])],-1)),t[3]||(t[3]=e("h2",null,"JavaScript",-1)),t[4]||(t[4]=e("h3",null,"Options",-1)),t[5]||(t[5]=e("p",{class:"-text"},"This component accepts options to configure its behavior.",-1)),t[6]||(t[6]=e("section",{class:"chi-table chi-table__options -bordered -my--3"},[e("div",null,[e("table",{class:"-text",cellpadding:"0",cellspacing:"0"},[e("thead",null,[e("tr",null,[e("th",{style:{width:"10em"}},[e("div",null,"Option")]),e("th",{style:{width:"10em"}},[e("div",null,"Default")]),e("th",null,[e("div",null,"Description")])])]),e("tbody",null,[e("tr",null,[e("td",null,[e("div",null,[e("code",null,"overflowMenu")])]),e("td",null,[e("div",null,[e("code",null,"true")])]),e("td",null,[e("div",null,"Only works for horizontal navigation components. It encloses overflowed tabs into a dropdown located at the end of the navigation component.")])]),e("tr",null,[e("td",null,[e("div",null,[e("code",null,"overflowMenuLabel")])]),e("td",null,[e("div",null,[e("code",null,"See More...")])]),e("td",null,[e("div",null,"Text for the overflow menu dropdown.")])]),e("tr",null,[e("td",null,[e("div",null,[e("code",null,"waitForAnimations")])]),e("td",null,[e("div",null,[e("code",null,"false")])]),e("td",null,[e("div",null,"Makes the browser wait for the sliding border to move to the clicked link. It only works with common links.")])])])])])],-1)),t[7]||(t[7]=e("h3",null,"Preventing memory leaks",-1)),t[8]||(t[8]=e("h4",null,"chi.tab()",-1)),t[9]||(t[9]=e("p",{class:"-text"},"Tab components have a dispose function to free all resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component.",-1)),o(l,{lang:"javascript",code:h}),t[10]||(t[10]=e("p",{class:"-text"},[e("span",{class:"chi-badge -dark -sm -mr--1"},[e("span",null,"Tip")]),n("It is safe to call the tab method more than once, as it will return any previously created tabs component associated with the trigger.")],-1)),o(l,{code:f,lang:"javascript"}),t[11]||(t[11]=e("h4",null,"chi.navigation()",-1)),t[12]||(t[12]=e("p",{class:"-text"},"Navigation components have a dispose function to free all resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component. There is no need to call to tab and dropdown inner components dispose function as the navigation one will free resources of all internal components automatically.",-1)),o(l,{lang:"javascript",code:y}),t[13]||(t[13]=e("p",{class:"-text"},[e("span",{class:"chi-badge -dark -sm -mr--1"},[e("span",null,"Tip")]),n("It is safe to call the "),e("code",null,"navigation"),n(" factory function more than once, as it will return any previously created navigation component associated to the element.")],-1)),o(l,{lang:"javascript",code:w})])}}}),D=s({__name:"index",setup(d){return(m,t)=>{const a=p;return r(),b(a,{"hide-builder":"",title:"Tabs",description:"Tabs are used to navigate between views within the same context."},{examples:i(()=>[o(c)]),properties:i(()=>[o(x)]),_:1})}}});export{D as default};

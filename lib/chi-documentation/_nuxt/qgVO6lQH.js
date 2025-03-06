import{_ as d}from"./CwWdfYK8.js";import{_ as c}from"./DnuGukGM.js";import{_ as p}from"./C_gFFCTR.js";import{e as i,c as u,o as s,a as r,b as o,d as n,f as g,w as a}from"./CmP53kv-.js";import"./CDht6vRo.js";import"./C3x5fPEm.js";import"./tYJG4N2n.js";import"./BngLxHOz.js";import"./DlAUqK2U.js";import"./DUA-YDj1.js";import"./CLOSKf5d.js";import"./LJMJS6pN.js";import"./CmWk2xIH.js";import"./GMWfc-pl.js";const _=`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
// do stuff
rangeSlider.dispose();`,h=`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
var elem2 = document.getElementById('range02');
var rangeSlider2 = chi.rangeSlider(elem2);
rangeSlider === rangeSlider2; // returns true

rangeSlider.dispose(); // Only have to do it once.`,f=i({__name:"_properties",setup(l){return(m,e)=>{const t=p;return s(),u("div",null,[e[0]||(e[0]=r("h3",null,"Preventing memory leaks",-1)),e[1]||(e[1]=r("p",{class:"-text"},"Rangeslider component has a dispose function to free all the resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component.",-1)),o(t,{lang:"javascript",code:_}),e[2]||(e[2]=r("p",{class:"-text"},[n("It is safe to call the "),r("code",null,"rangeSlider"),n(" method more than once, as it will return any previously created rangeSlider component associated with the element.")],-1)),o(t,{lang:"javascript",code:h})])}}}),R=i({__name:"index",setup(l){return(m,e)=>{const t=d;return s(),g(t,{"hide-builder":"",title:"Range slider",description:"Range sliders are used for inputting numeric values within a range."},{examples:a(()=>[o(c)]),properties:a(()=>[o(f)]),_:1})}}});export{R as default};

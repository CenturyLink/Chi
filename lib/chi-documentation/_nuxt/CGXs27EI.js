import{_ as d}from"./C3oeiXsm.js";import{_ as c}from"./e36Ajdu-.js";import{_ as p}from"./Di-ELn2D.js";import{e as i,o as s,c as u,a as r,b as o,d as n,f as g,w as a}from"./CRBsHPO5.js";import"./CFe54mHR.js";import"./DdXxu9YD.js";import"./DlAUqK2U.js";import"./CIPiXAF4.js";import"./CioVcaN-.js";import"./D1M_ALV-.js";import"./Cf-jS4dB.js";import"./Cx7J_iiN.js";import"./Bxs95XXX.js";import"./Bdokak_-.js";import"./CcrI_bxZ.js";const _=`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
// do stuff
rangeSlider.dispose();`,f=`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
var elem2 = document.getElementById('range02');
var rangeSlider2 = chi.rangeSlider(elem2);
rangeSlider === rangeSlider2; // returns true

rangeSlider.dispose(); // Only have to do it once.`,h=i({__name:"_properties",setup(m){return(l,e)=>{const t=p;return s(),u("div",null,[e[0]||(e[0]=r("h3",null,"Preventing memory leaks",-1)),e[1]||(e[1]=r("p",{class:"-text"},"Rangeslider component has a dispose function to free all the resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component.",-1)),o(t,{lang:"javascript",code:_}),e[2]||(e[2]=r("p",{class:"-text"},[n("It is safe to call the "),r("code",null,"rangeSlider"),n(" method more than once, as it will return any previously created rangeSlider component associated with the element.")],-1)),o(t,{lang:"javascript",code:f})])}}}),b=i({__name:"index",setup(m){return(l,e)=>{const t=d;return s(),g(t,{title:"Range slider",description:"Range sliders are used for inputting numeric values within a range."},{examples:a(()=>[o(c)]),properties:a(()=>[o(h)]),_:1})}}});export{b as default};

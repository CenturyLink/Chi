import{_ as d}from"./Cliqj1oI.js";import{_ as c}from"./rgWHj47t.js";import{_ as p}from"./Cs9k3wdq.js";import{e as i,o as s,c as u,a as r,b as o,d as n,f as g,w as a}from"./8OrwJQBm.js";import"./C--ko8kT.js";import"./BYYWnbSa.js";import"./CNlSzNPL.js";import"./DqffTiRd.js";import"./DlAUqK2U.js";import"./DuKm7cZd.js";import"./CUfuKhER.js";import"./POnE5cla.js";import"./B7eGrFrM.js";import"./guMl99Os.js";const _=`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
// do stuff
rangeSlider.dispose();`,h=`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
var elem2 = document.getElementById('range02');
var rangeSlider2 = chi.rangeSlider(elem2);
rangeSlider === rangeSlider2; // returns true

rangeSlider.dispose(); // Only have to do it once.`,f=i({__name:"_properties",setup(l){return(m,e)=>{const t=p;return s(),u("div",null,[e[0]||(e[0]=r("h3",null,"Preventing memory leaks",-1)),e[1]||(e[1]=r("p",{class:"-text"},"Rangeslider component has a dispose function to free all the resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component.",-1)),o(t,{lang:"javascript",code:_}),e[2]||(e[2]=r("p",{class:"-text"},[n("It is safe to call the "),r("code",null,"rangeSlider"),n(" method more than once, as it will return any previously created rangeSlider component associated with the element.")],-1)),o(t,{lang:"javascript",code:h})])}}}),R=i({__name:"index",setup(l){return(m,e)=>{const t=d;return s(),g(t,{"hide-builder":"",title:"Range slider",description:"Range sliders are used for inputting numeric values within a range."},{examples:a(()=>[o(c)]),properties:a(()=>[o(f)]),_:1})}}});export{R as default};

import{_ as d}from"./DIPVI4Ws.js";import{_ as c}from"./DDIpA9mf.js";import{_ as p}from"./D6TR492o.js";import{e as s,o as i,c as u,a as r,b as o,d as n,f as g,w as a}from"./C2nwJ2gl.js";import"./2velEjM6.js";import"./CvqIcLJ1.js";import"./Pw6ad_s-.js";import"./CLVGr10x.js";import"./DlAUqK2U.js";import"./C9zIItfq.js";import"./GYQZMMrf.js";import"./CM3aijXp.js";import"./BQdGHRz_.js";import"./RvicIt9e.js";const _=`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
// do stuff
rangeSlider.dispose();`,f=`var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
var elem2 = document.getElementById('range02');
var rangeSlider2 = chi.rangeSlider(elem2);
rangeSlider === rangeSlider2; // returns true

rangeSlider.dispose(); // Only have to do it once.`,h=s({__name:"_properties",setup(l){return(m,e)=>{const t=p;return i(),u("div",null,[e[0]||(e[0]=r("h3",null,"Preventing memory leaks",-1)),e[1]||(e[1]=r("p",{class:"-text"},"Rangeslider component has a dispose function to free all the resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component.",-1)),o(t,{lang:"javascript",code:_}),e[2]||(e[2]=r("p",{class:"-text"},[n("It is safe to call the "),r("code",null,"rangeSlider"),n(" method more than once, as it will return any previously created rangeSlider component associated with the element.")],-1)),o(t,{lang:"javascript",code:f})])}}}),V=s({__name:"index",setup(l){return(m,e)=>{const t=d;return i(),g(t,{title:"Range slider",description:"Range sliders are used for inputting numeric values within a range."},{examples:a(()=>[o(c)]),properties:a(()=>[o(h)]),_:1})}}});export{V as default};

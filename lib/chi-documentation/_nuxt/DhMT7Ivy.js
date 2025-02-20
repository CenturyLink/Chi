import{at as _,ar as f,au as i,aq as g,a9 as a,av as $,ab as l}from"./6XaUQmon.js";const R=(t,e,p)=>[`<div class="${$.INPUT_WRAPPER} ${a.DISPLAY.FLEX}">`,...l([...t,...e,...p]),"</div>"],S=()=>{const t=[];for(let e=0;e<5;e++)t.push(["<div>",...l([`<div class="${i.TICK}"></div>`,`<div class="${i.TICK_LABEL}">Step ${e+1}</div>`]),"</div>"]);return t.flat()},N=(t,e)=>{const{textLabel:p="",type:s,leftTextLabel:c,rightTextLabel:r}=e.dynamicComputedProps,n=!!(c||r),P=[`<legend class="${_.LABEL}">${p}</legend>`],d=[`<input${f([`class="${i.RANGE_SLIDER}"`,'id="example__range-slider"','type="range"',s==="steps"&&'min="0"',s==="steps"&&'max="4"',s==="steps"&&'step="1"',...g(e)].filter(Boolean),5,2)}${s==="steps"?"  ":" "}/>`],o=[`<span class="${a.TEXT.TEXT} ${a.MARGIN.RIGHT[2]}">${c}</span>`].filter(()=>!!c),v=[`<span class="${a.TEXT.TEXT} ${a.MARGIN.LEFT[2]}">${r}</span>`].filter(()=>!!r),T=[`<div class="${i.PROGRESS}"></div>`],I=[`<div class="${i.THUMB}"></div>`],E=[`<div class="${$.INPUT_WRAPPER} ${a.SIZING.W100}">`,...l([...d,...T,...I]),"</div>"],L=[`<div class="${$.INPUT_WRAPPER} ${a.SIZING.W100}">`,...l([...d,`<div class="${i.TICK_BAR}">`,...l(S()),"</div>",...T,...I]),"</div>"],A=[...P,s==="base"&&!n&&d.join(`
`),s==="base"&&n&&R(o,d,v).join(`
`),s==="active"&&!n&&E.join(`
`),s==="active"&&n&&R(o,E,v).join(`
`),s==="steps"&&L.join(`
`)].filter(Boolean).join(`
`),m=["<script>chi.rangeSlider(document.getElementById('example__range-slider'));<\/script>"];return A.concat(`

`,...m)};export{N as snippet};

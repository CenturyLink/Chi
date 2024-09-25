import{_ as r}from"./BJfyOiY6.js";import{_ as c}from"./onyWiYp2.js";import{e as a,o as p,c as m,b as n,a as e,d as o,F as u}from"./CEIPSiTs.js";const y=a({__name:"_rules",setup(d){const s={htmlblueprint:`@import 'components/icons/webfont-font-face';
:host(chi-icon) {
@import '../../global/styles/common';
@extend %root-typography;
@import 'components/icons/icons';
@import 'components/icons/webfont-icons';

display: inline-block;
}`};return(_,t)=>{const l=r,i=c;return p(),m(u,null,[n(l,{title:"Rules",id:"rules",titleSize:"h3"}),t[0]||(t[0]=e("ul",{class:"-text"},[e("li",null,"Components MIGHT have a *.scss file that will import the necessary files from the project"),e("li",null,[o("All rules but font-face ones MUST be wrapped inside a "),e("code",null,":host"),o(" rule to override a possible Chi default stylesheet")]),e("li",null,[o("The default display for Custom Elements is "),e("code",null,"inline"),o(" so the developer MUST take care of this.")])],-1)),n(i,{id:"rules",code:s.htmlblueprint},null,8,["code"])],64)}}});export{y as _};

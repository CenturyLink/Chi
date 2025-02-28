import{e as d,r as B,p as H,x as L,o as r,f as b,w as e,a as t,d as n,k as C,b as o,c as w,j as k,t as S,F as y,l as E,i as $}from"./8OrwJQBm.js";import{_}from"./Cs9k3wdq.js";import{_ as g}from"./CUfuKhER.js";import{_ as x}from"./B7eGrFrM.js";import{_ as T}from"./DqffTiRd.js";const V={class:"-text"},N=["href"],M="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et interdum purus. Curabitur varius libero, vel hendrerit enim tincidunt sit amet. Ut eros purus, semper nec ipsum et, maximus faucibus suscipit nibh.",W=d({__name:"_long",setup(h){const c=B(null),p=H().public.baseUrl,a=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",vue:`<ChiTooltip message="Lorem ipsum...">
  <chi-button>Hover me to see tooltip</chi-button>
</ChiTooltip>`,htmlblueprint:`<button id="tooltip-long" class="chi-button" data-tooltip="Lorem ipsum...">Hover me to see tooltip</button>

<script>chi.tooltip(document.getElementById('tooltip-long'));<\/script>`};return L(()=>{chi.tooltip(c.value)}),(u,l)=>{const s=_,m=g,v=x;return r(),b(v,{title:"Long Tooltips",id:"long",tabs:a},{"example-description":e(()=>[t("p",V,[l[0]||(l[0]=n("Long Tooltips will be truncated on the fourth line. To display text beyond four lines, use the ")),t("a",{href:`${C(p)}components/popover`},"Popover",8,N),l[1]||(l[1]=n(" component"))])]),example:e(()=>[t("button",{class:"chi-button -mr--2 -mb--2 -mb-md--0","data-tooltip":M,ref_key:"tooltipButtonLong",ref:c},"Hover me to see tooltip",512)]),"code-webcomponent":e(()=>[o(s,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-vue":e(()=>[o(s,{class:"html",lang:"html",code:i.vue},null,8,["code"])]),"code-htmlblueprint":e(()=>[o(m),o(s,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),J=d({__name:"_disabled",setup(h){const c=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],p={webcomponent:`<chi-tooltip message="Tooltip message for a disabled button">
  <chi-button disabled>Hover me to see tooltip</chi-button>
</chi-tooltip>`,vue:`<ChiTooltip message="Tooltip message for a disabled button">
  <chi-button disabled>Hover me to see tooltip</chi-button>
</ChiTooltip>`,htmlblueprint:`<span data-tooltip="Tooltip message for a disabled button" id="tooltip-disabled-button">
  <button class="chi-button" disabled>Hover me to see tooltip</button>
</span>

<script>chi.tooltip(document.getElementById('tooltip-disabled-button'));<\/script>`};return(a,i)=>{const u=T,l=_,s=g,m=x;return r(),b(m,{title:"Tooltip on disabled buttons",id:"disabled",tabs:c},{example:e(()=>[o(u,null,{default:e(()=>i[0]||(i[0]=[t("chi-tooltip",{message:"Tooltip message for a disabled button",wrapper:""},[t("chi-button",{disabled:""},"Hover me to see tooltip")],-1)])),_:1})]),"code-webcomponent":e(()=>[o(l,{class:"html",lang:"html",code:p.webcomponent},null,8,["code"])]),"code-vue":e(()=>[o(l,{class:"html",lang:"html",code:p.vue},null,8,["code"])]),"code-htmlblueprint":e(()=>[i[1]||(i[1]=t("div",{class:"p--text chi-tab__description"},[n("When a button element is in disabled state, "),t("code",null,"mouseenter"),n(" and "),t("code",null,"mouseleave"),n(" events are not being triggered. Wrap the disabled button in a "),t("code",null,"span"),n(" element, providing the attribute "),t("code",null,'data-tooltip=""'),n(" to achieve the same behavior.")],-1)),o(s),o(l,{lang:"html",code:p.htmlblueprint},null,8,["code"])]),_:1})}}}),R={class:"-bg--black"},I={class:"-p--3"},O=d({__name:"_light-lumen-centurylink",setup(h){const c=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],p={webcomponent:`<chi-tooltip message="Your tooltip text on a button" color="light">
  <chi-button variant="outline" color="light">Hover me to see tooltip</chi-button>
</chi-tooltip>`,vue:`<ChiTooltip message="Your tooltip text on a button" color="light">
  <chi-button variant="outline" color="light">Hover me to see tooltip</chi-button>
</ChiTooltip>`,htmlblueprint:`<button id="tooltip-2" class="chi-button -outline -light" data-tooltip="Your tooltip text on a button" data-tooltip-color="light">Hover me to see tooltip</button>

<script>chi.tooltip(document.getElementById('tooltip-2'));<\/script>`};return(a,i)=>{const u=T,l=_,s=g,m=x;return r(),b(m,{title:"Light",id:"light-lumen-centurylink",padding:"-p--0",tabs:c},{"example-description":e(()=>i[0]||(i[0]=[t("p",{class:"-text"},"Use light tooltips for rendering tooltips on dark backgrounds.",-1)])),example:e(()=>[t("div",R,[t("div",I,[o(u,null,{default:e(()=>i[1]||(i[1]=[t("chi-tooltip",{message:"Your tooltip text on a button",wrapper:"",color:"light"},[t("chi-button",{variant:"outline",color:"light"},"Hover me to see tooltip")],-1)])),_:1})])])]),"code-webcomponent":e(()=>[o(l,{class:"html",lang:"html",code:p.webcomponent},null,8,["code"])]),"code-vue":e(()=>[o(l,{class:"html",lang:"html",code:p.vue},null,8,["code"])]),"code-htmlblueprint":e(()=>[i[2]||(i[2]=t("div",{class:"p--text chi-tab__description"},[n("To use, apply the "),t("code",null,'data-tooltip-color="light"'),n(" attribute to the Tooltip trigger element.")],-1)),o(s),o(l,{lang:"html",code:p.htmlblueprint},null,8,["code"])]),_:1})}}}),U={class:"-d--flex -flex--wrap"},z=["message","position"],F=d({__name:"_positioned",setup(h){const c=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],p=[{text:"Top Tooltip",dataTooltip:"Your top tooltip text",position:"top"},{text:"Right Tooltip",dataTooltip:"Your right tooltip text",position:"right"},{text:"Bottom Tooltip",dataTooltip:"Your bottom tooltip tex",position:"bottom"},{text:"Left Tooltip",dataTooltip:"Your left tooltip text",position:"left"}],a={webcomponent:`<chi-tooltip message="Your top tooltip text" position="top">
  <chi-button>Top Tooltip</chi-button>
</chi-tooltip>
<chi-tooltip message="Your right tooltip text" position="right">
  <chi-button>Right Tooltip</chi-button>
</chi-tooltip>
<chi-tooltip message="Your bottom tooltip text" position="bottom">
  <chi-button>Bottom Tooltip</chi-button>
</chi-tooltip>
<chi-tooltip message="Your left tooltip text" position="left">
  <chi-button>Left Tooltip</chi-button>
</chi-tooltip>`,vue:`<ChiTooltip message="Your top tooltip text" position="top">
  <chi-button>Top Tooltip</chi-button>
</ChiTooltip>
<ChiTooltip message="Your right tooltip text" position="right">
  <chi-button>Right Tooltip</chi-button>
</ChiTooltip>
<ChiTooltip message="Your bottom tooltip text" position="bottom">
  <chi-button>Bottom Tooltip</chi-button>
</ChiTooltip>
<ChiTooltip message="Your left tooltip text" position="left">
  <chi-button>Left Tooltip</chi-button>
</ChiTooltip>`,htmlblueprint:`<button class="chi-button" data-tooltip="Your top tooltip text">Top Tooltip</button>
<button class="chi-button" data-tooltip="Your right tooltip text" data-position="right">Right Tooltip</button>
<button class="chi-button" data-tooltip="Your bottom tooltip text" data-position="bottom">Bottom Tooltip</button>
<button class="chi-button" data-tooltip="Your left tooltip text" data-position="left">Left Tooltip</button>

<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>
`};return(i,u)=>{const l=T,s=_,m=g,v=x;return r(),b(v,{title:"Positioning",id:"positioned",tabs:c},{example:e(()=>[o(l,null,{default:e(()=>[t("div",U,[(r(),w(y,null,k(p,(f,Y)=>t("chi-tooltip",{class:"-mr--2 -mb--2 -mb-md--0",key:Y,message:f.dataTooltip,position:f.position,wrapper:""},[t("chi-button",null,S(f.text),1)],8,z)),64))])]),_:1})]),"code-webcomponent":e(()=>[o(s,{class:"html",lang:"html",code:a.webcomponent},null,8,["code"])]),"code-vue":e(()=>[o(s,{class:"html",lang:"html",code:a.vue},null,8,["code"])]),"code-htmlblueprint":e(()=>[u[0]||(u[0]=t("div",{class:"p--text chi-tab__description"},[n("By default, tooltip is positioned on top of the element. To alter position, use the "),t("code",null,"data-position"),n(" attribute. Valid values are "),t("code",null,"top"),n(", "),t("code",null,"right"),n(", "),t("code",null,"bottom"),n(", "),t("code",null,"left"),n(". You can pass an array of Elements and initialize all at once.")],-1)),o(m),o(s,{lang:"html",code:a.htmlblueprint},null,8,["code"])]),_:1})}}}),P=d({__name:"_base",setup(h){const c=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],p={webcomponent:`<chi-tooltip message="Your tooltip text on a button">
  <chi-button>Hover me to see tooltip</chi-button>
</chi-tooltip>`,vue:`<ChiTooltip message="Your tooltip text on a button">
  <chi-button>Hover me to see tooltip</chi-button>
</ChiTooltip>`,htmlblueprint:`<button id="tooltip-1" class="chi-button" data-tooltip="Your tooltip text on a button">Hover me to see tooltip</button>

<script>chi.tooltip(document.getElementById('tooltip-1'));<\/script>
`};return(a,i)=>{const u=T,l=_,s=g,m=x;return r(),b(m,{title:"Base",id:"base",tabs:c},{example:e(()=>[o(u,null,{default:e(()=>i[0]||(i[0]=[t("chi-tooltip",{message:"Your tooltip text on a button",wrapper:""},[t("chi-button",null,"Hover me to see tooltip")],-1)])),_:1})]),"code-webcomponent":e(()=>[o(l,{class:"html",lang:"html",code:p.webcomponent},null,8,["code"])]),"code-vue":e(()=>[o(l,{class:"html",lang:"html",code:p.vue},null,8,["code"])]),"code-htmlblueprint":e(()=>[i[1]||(i[1]=t("div",{class:"p--text chi-tab__description"},[n("To render a tooltip, apply the "),t("code",null,"data-tooltip"),n(" attribute to an element. Then initialize it with the chi.tooltip factory method.")],-1)),o(s),o(l,{lang:"html",code:p.htmlblueprint},null,8,["code"])]),_:1})}}}),K=d({__name:"index",setup(h){const c=E();return(p,a)=>(r(),w(y,null,[a[0]||(a[0]=t("h2",null,"Examples",-1)),o(P),["lumen","centurylink"].includes(C(c))?(r(),b(O,{key:0})):$("",!0),o(J),o(F),o(W)],64))}});export{K as _};

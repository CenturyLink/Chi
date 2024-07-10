var y=Object.defineProperty;var C=(t,e,i)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var d=(t,e,i)=>C(t,typeof e!="symbol"?e+"":e,i);import{V as H,N as B}from"./uJTUijt2.js";import{_ as I}from"./D8GK0F__.js";import{_ as $}from"./DKu8Jd2y.js";import{o as l,f as w,w as h,a,c as r,i as u,n as S,t as _,h as b,F as f,b as g}from"./B5CYXVwa.js";import{_ as P}from"./DlAUqK2U.js";import"./C-hgEc7b.js";import"./drvuhYu1.js";import"./2EwpEKcw.js";var T=Object.defineProperty,E=Object.getOwnPropertyDescriptor,N=(t,e,i,p)=>{for(var s=p>1?void 0:p?E(e,i):e,n=t.length-1,c;n>=0;n--)(c=t[n])&&(s=(p?c(e,i,s):c(s))||s);return p&&s&&T(e,i,s),s};let m=class extends H{constructor(){super(...arguments);d(this,"stats",[{value:"ALL",title:"Services",active:!0},{value:"366",title:"Communications"},{value:"932",title:"Hybrid & Cloud IT",value2:"0",title2:"Recently Closed"},{value:"301",title:"Managed & IT Services",value2:"6",title2:"Recently Closed"},{value:"100",title:"Networking & Cloud IT"},{value:"2",title:"Security",value2:"0",title2:"Recently Closed"}]);d(this,"exampleTabs");d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-stat">
  <div class="chi-stat__item -active">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">ALL</div>
        <div class="chi-stat-metric__title">Services</div>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">366</div>
        <div class="chi-stat-metric__title">Communications</div>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-base-help-button2" aria-label="Help" data-target="#example__portal-base-help-popover2" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">932</div>
        <div class="chi-stat-metric__title">Hybrid & Cloud IT</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">0</div>
        <div class="chi-stat-submetric__title">Recently Closed</div>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-base-help-button3" aria-label="Help" data-target="#example__portal-base-help-popover3" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">301</div>
        <div class="chi-stat-metric__title">Managed & IT Services</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">6</div>
        <div class="chi-stat-submetric__title">Recently Closed</div>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-base-help-button4" aria-label="Help" data-target="#example__portal-base-help-popover4" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">100</div>
        <div class="chi-stat-metric__title">Networking & Cloud IT</div>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-base-help-button5" aria-label="Help" data-target="#example__portal-base-help-popover5" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="chi-stat__item">
    <div class="chi-stat__content">
      <div class="chi-stat-metric">
        <div class="chi-stat-metric__value">2</div>
        <div class="chi-stat-metric__title">Security</div>
      </div>
      <div class="chi-stat-submetric">
        <div class="chi-stat-submetric__value">0</div>
        <div class="chi-stat-submetric__title">Recently Closed</div>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-base-help-button6" aria-label="Help" data-target="#example__portal-base-help-popover6" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<section class="chi-popover chi-popover--bottom" id="example__portal-base-help-popover2" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-base-help-popover3" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-base-help-popover4" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-base-help-popover5" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-base-help-popover6" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>

<script>
  chi.popover(document.getElementById('example__portal-base-help-button2'));
  chi.popover(document.getElementById('example__portal-base-help-button3'));
  chi.popover(document.getElementById('example__portal-base-help-button4'));
  chi.popover(document.getElementById('example__portal-base-help-button5'));
  chi.popover(document.getElementById('example__portal-base-help-button6'));
<\/script>`})}togglePopover(i){this.$refs[i][0].toggle()}};m=N([B({})],m);const k={class:"chi-stat"},R={class:"chi-stat__content"},L={class:"chi-stat-metric"},V={class:"chi-stat-metric__value"},O={class:"chi-stat-metric__title"},D={key:0,class:"chi-stat-submetric"},j={class:"chi-stat-submetric__value"},A={class:"chi-stat-submetric__title"},F={key:1,class:"chi-label__help"},M=["id","onClick"],z=a("i",{class:"chi-icon icon-circle-info-outline","aria-hidden":"true"},null,-1),q=[z],G=["reference"],J=a("div",{class:"chi-popover__content"},[a("p",{class:"chi-popover__text"},"Helpful information goes here.")],-1),K=[J];function Q(t,e,i,p,s,n){const c=I,x=$;return l(),w(x,{title:"Base",id:"base-portal",tabs:t.exampleTabs},{example:h(()=>[a("div",k,[(l(!0),r(f,null,u(t.stats,(o,v)=>(l(),r("div",{key:v,class:S(o.active?"chi-stat__item -active":"chi-stat__item")},[a("div",R,[a("div",L,[a("div",V,_(o.value),1),a("div",O,_(o.title),1)]),o.value2?(l(),r("div",D,[a("div",j,_(o.value2),1),a("div",A,_(o.title2),1)])):b("",!0),o.active?b("",!0):(l(),r("div",F,[a("button",{class:"chi-button -icon -xs -flat",id:`button-base-portal-${v}`,onClick:U=>t.togglePopover(`popover-${v}`),"aria-label":"Help"},q,8,M)]))])],2))),128))]),(l(!0),r(f,null,u(t.stats.length-1,o=>(l(),r("chi-popover",{key:o,ref_for:!0,ref:`popover-${o}`,"aria-modal":"true",position:"bottom",role:"dialog",reference:`#button-base-portal-${o}`,arrow:""},K,8,G))),128))]),"code-webcomponent":h(()=>[g(c,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[g(c,{class:"html",lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const lt=P(m,[["render",Q]]);export{lt as default};

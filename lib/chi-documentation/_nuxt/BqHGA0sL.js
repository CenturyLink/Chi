var y=Object.defineProperty;var C=(e,t,i)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var d=(e,t,i)=>C(e,typeof t!="symbol"?t+"":t,i);import{V as H,N as B}from"./NAah3XrW.js";import{_ as $}from"./onyWiYp2.js";import{_ as I}from"./CAQzZ0uH.js";import{o as l,h as w,w as h,a as s,c as r,i as u,n as S,t as v,l as b,F as f,b as g}from"./CEIPSiTs.js";import{_ as P}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var T=Object.defineProperty,E=Object.getOwnPropertyDescriptor,N=(e,t,i,p)=>{for(var o=p>1?void 0:p?E(t,i):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(o=(p?c(t,i,o):c(o))||o);return p&&o&&T(t,i,o),o};let m=class extends H{constructor(){super(...arguments);d(this,"stats",[{value:"ALL",title:"Services",active:!0},{value:"366",title:"Communications"},{value:"932",title:"Hybrid & Cloud IT",value2:"0",title2:"Recently Closed"},{value:"301",title:"Managed & IT Services",value2:"6",title2:"Recently Closed"},{value:"100",title:"Networking & Cloud IT"},{value:"2",title:"Security",value2:"0",title2:"Recently Closed"}]);d(this,"exampleTabs");d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-stat">
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
<\/script>`})}togglePopover(i){this.$refs[i][0].toggle()}};m=N([B({})],m);const k={class:"chi-stat"},R={class:"chi-stat__content"},L={class:"chi-stat-metric"},V={class:"chi-stat-metric__value"},O={class:"chi-stat-metric__title"},D={key:0,class:"chi-stat-submetric"},j={class:"chi-stat-submetric__value"},A={class:"chi-stat-submetric__title"},F={key:1,class:"chi-label__help"},M=["id","onClick"],z=["reference"];function q(e,t,i,p,o,n){const c=$,x=I;return l(),w(x,{title:"Base",id:"base-portal",tabs:e.exampleTabs},{example:h(()=>[s("div",k,[(l(!0),r(f,null,u(e.stats,(a,_)=>(l(),r("div",{key:_,class:S(a.active?"chi-stat__item -active":"chi-stat__item")},[s("div",R,[s("div",L,[s("div",V,v(a.value),1),s("div",O,v(a.title),1)]),a.value2?(l(),r("div",D,[s("div",j,v(a.value2),1),s("div",A,v(a.title2),1)])):b("",!0),a.active?b("",!0):(l(),r("div",F,[s("button",{class:"chi-button -icon -xs -flat",id:`button-base-portal-${_}`,onClick:G=>e.togglePopover(`popover-${_}`),"aria-label":"Help"},t[0]||(t[0]=[s("i",{class:"chi-icon icon-circle-info-outline","aria-hidden":"true"},null,-1)]),8,M)]))])],2))),128))]),(l(!0),r(f,null,u(e.stats.length-1,a=>(l(),r("chi-popover",{key:a,ref_for:!0,ref:`popover-${a}`,"aria-modal":"true",position:"bottom",role:"dialog",reference:`#button-base-portal-${a}`,arrow:""},t[1]||(t[1]=[s("div",{class:"chi-popover__content"},[s("p",{class:"chi-popover__text"},"Helpful information goes here.")],-1)]),8,z))),128))]),"code-webcomponent":h(()=>[g(c,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[g(c,{class:"html",lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const it=P(m,[["render",q]]);export{it as default};

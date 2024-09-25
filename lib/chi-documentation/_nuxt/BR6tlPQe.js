var y=Object.defineProperty;var C=(t,i,c)=>i in t?y(t,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[i]=c;var p=(t,i,c)=>C(t,typeof i!="symbol"?i+"":i,c);import{V as H,N as I}from"./NAah3XrW.js";import{_ as B}from"./onyWiYp2.js";import{_ as w}from"./CS2TcPBX.js";import{_ as S}from"./CAQzZ0uH.js";import{o as s,h as E,w as h,a as o,c as l,i as g,n as T,t as v,l as m,F as f,b as u}from"./CEIPSiTs.js";import{_ as $}from"./DlAUqK2U.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./DtNz156Q.js";var N=Object.defineProperty,P=Object.getOwnPropertyDescriptor,R=(t,i,c,r)=>{for(var a=r>1?void 0:r?P(i,c):i,d=t.length-1,n;d>=0;d--)(n=t[d])&&(a=(r?n(i,c,a):n(a))||a);return r&&a&&N(i,c,a),a};let b=class extends H{constructor(){super(...arguments);p(this,"stats",[{value:"ALL",title:"Services",active:!0},{value:"366",title:"Communications",icon:"platform-voice-unified-communications"},{value:"932",title:"Hybrid & Cloud IT",value2:"0",title2:"Recently Closed",icon:"platform-it-agility-hybrid-cloud"},{value:"301",title:"Managed & IT Services",value2:"6",title2:"Recently Closed",icon:"business-support-ticket"},{value:"100",title:"Networking & Cloud IT",icon:"platform-adaptive-networking"},{value:"2",title:"Security",value2:"0",title2:"Recently Closed",icon:"platform-connected-security"}]);p(this,"exampleTabs",[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}]);p(this,"codeSnippets",{webcomponent:`<div class="chi-stat">
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
      <div class="chi-stat-background-icon">
        <chi-marketing-icon icon="platform-voice-unified-communications"></chi-marketing-icon>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button2" aria-label="Help" data-target="#example__portal-bgicons-help-popover2" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <chi-marketing-icon icon="platform-it-agility-hybrid-cloud"></chi-marketing-icon>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button3" aria-label="Help" data-target="#example__portal-bgicons-help-popover3" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <chi-marketing-icon icon="business-support-ticket"></chi-marketing-icon>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button4" aria-label="Help" data-target="#example__portal-bgicons-help-popover4" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <chi-marketing-icon icon="platform-adaptive-networking"></chi-marketing-icon>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button5" aria-label="Help" data-target="#example__portal-bgicons-help-popover5" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <chi-marketing-icon icon="platform-connected-security"></chi-marketing-icon>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button6" aria-label="Help" data-target="#example__portal-bgicons-help-popover6" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover2" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover3" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover4" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover5" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover6" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>

<script>
  chi.popover(document.getElementById('example__portal-bgicons-help-button2'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button3'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button4'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button5'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button6'));
<\/script>`,htmlblueprint:`<div class="chi-stat">
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
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-file" aria-hidden="true"></i>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button2" aria-label="Help" data-target="#example__portal-bgicons-help-popover2" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-warning" aria-hidden="true"></i>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button3" aria-label="Help" data-target="#example__portal-bgicons-help-popover3" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-map-marker" aria-hidden="true"></i>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button4" aria-label="Help" data-target="#example__portal-bgicons-help-popover4" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-mail" aria-hidden="true"></i>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button5" aria-label="Help" data-target="#example__portal-bgicons-help-popover5" data-position="bottom">
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
      <div class="chi-stat-background-icon">
        <i class="chi-icon icon-file" aria-hidden="true"></i>
      </div>
      <div class="chi-label__help">
        <button class="chi-button -icon -xs -flat" id="example__portal-bgicons-help-button6" aria-label="Help" data-target="#example__portal-bgicons-help-popover6" data-position="bottom">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover2" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover3" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover4" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover5" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>
<section class="chi-popover chi-popover--bottom" id="example__portal-bgicons-help-popover6" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Helpful information goes here.</p>
  </div>
</section>

<script>
  chi.popover(document.getElementById('example__portal-bgicons-help-button2'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button3'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button4'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button5'));
  chi.popover(document.getElementById('example__portal-bgicons-help-button6'));
<\/script>`})}togglePopover(c){this.$refs[c][0].toggle()}};b=R([I({})],b);const L={class:"chi-stat"},V={class:"chi-stat__content"},M={class:"chi-stat-metric"},O={class:"chi-stat-metric__value"},A={class:"chi-stat-metric__title"},D={key:0,class:"chi-stat-submetric"},j={class:"chi-stat-submetric__value"},F={class:"chi-stat-submetric__title"},z={key:1,class:"chi-stat-background-icon"},J=["icon"],W={key:2,class:"chi-label__help"},q=["id","onClick"],G=["reference"];function K(t,i,c,r,a,d){const n=B,x=w,k=S;return s(),E(k,{title:"Background Icons",id:"background-icons-portal",tabs:t.exampleTabs},{example:h(()=>[o("div",L,[(s(!0),l(f,null,g(t.stats,(e,_)=>(s(),l("div",{key:_,class:T(e.active?"chi-stat__item -active":"chi-stat__item")},[o("div",V,[o("div",M,[o("div",O,v(e.value),1),o("div",A,v(e.title),1)]),e.value2?(s(),l("div",D,[o("div",j,v(e.value2),1),o("div",F,v(e.title2),1)])):m("",!0),e.active?m("",!0):(s(),l("div",z,[o("chi-marketing-icon",{icon:e.icon},null,8,J)])),e.active?m("",!0):(s(),l("div",W,[o("button",{class:"chi-button -icon -xs -flat",id:`button-bg-icons-portal-${_}`,onClick:Q=>t.togglePopover(`popover-${_}`),"aria-label":"Help"},i[0]||(i[0]=[o("i",{class:"chi-icon icon-circle-info-outline","aria-hidden":"true"},null,-1)]),8,q)]))])],2))),128))]),(s(!0),l(f,null,g(t.stats.length-1,e=>(s(),l("chi-popover",{key:e,ref_for:!0,ref:`popover-${e}`,"aria-modal":"true",position:"bottom",role:"dialog",reference:`#button-bg-icons-portal-${e}`,arrow:""},i[1]||(i[1]=[o("div",{class:"chi-popover__content"},[o("p",{class:"chi-popover__text"},"Helpful information goes here.")],-1)]),8,G))),128))]),"code-webcomponent":h(()=>[u(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":h(()=>[u(x),u(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ni=$(b,[["render",K]]);export{ni as default};

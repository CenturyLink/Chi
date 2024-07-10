var F=Object.defineProperty;var z=(t,i,a)=>i in t?F(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a;var d=(t,i,a)=>z(t,typeof i!="symbol"?i+"":i,a);import{V as b,N as m}from"./uJTUijt2.js";import{_ as $}from"./D8GK0F__.js";import{_ as f}from"./BLbnEGma.js";import{_ as w}from"./DKu8Jd2y.js";import{o as h,f as S,w as r,a as n,b as o,c as y,F as N,i as J,t as W,r as u,d as x}from"./B5CYXVwa.js";import{_ as v}from"./DlAUqK2U.js";import K from"./COB_080Y.js";import Y from"./q2zSc4MM.js";import{s as q}from"./2EwpEKcw.js";import{_ as Q}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var U=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Z=(t,i,a,l)=>{for(var e=l>1?void 0:l?X(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&U(i,a,e),e};let C=class extends b{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range01">Range label</label>
  <input class="chi-range-slider" type="range" id="range01">
</div>

<script>chi.rangeSlider(document.getElementById('range01'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};C=Z([m({})],C);const k={class:"chi-form__item"},ee=n("label",{class:"chi-label",for:"range01"},"Range label",-1),te={class:"chi-range-slider",id:"range01",type:"range",ref:"range"};function ie(t,i,a,l,e,c){const s=$,p=f,_=w;return h(),S(_,{title:"Base",id:"base",tabs:t.exampleTabs},{example:r(()=>[n("div",k,[ee,n("input",te,null,512)])]),"code-webcomponent":r(()=>[o(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[o(p),o(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const se=v(C,[["render",ie]]);var ne=Object.defineProperty,le=Object.getOwnPropertyDescriptor,ae=(t,i,a,l)=>{for(var e=l>1?void 0:l?le(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&ne(i,a,e),e};let P=class extends b{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range04">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" id="range04">
    <div class="chi-input__progress"></div>
    <div class="chi-input__thumb"></div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range04'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};P=ae([m({})],P);const ce={class:"chi-form__item"},oe=n("label",{class:"chi-label",for:"range04"},"Range label",-1),re={class:"chi-input__wrapper"},de={class:"chi-range-slider",id:"range04",type:"range",ref:"range"},pe=n("div",{class:"chi-input__progress"},null,-1),_e=n("div",{class:"chi-input__thumb"},null,-1);function he(t,i,a,l,e,c){const s=$,p=f,_=w;return h(),S(_,{title:"Base",id:"base-consistent",tabs:t.exampleTabs},{example:r(()=>[n("div",ce,[oe,n("div",re,[n("input",de,null,512),pe,_e])])]),"code-webcomponent":r(()=>[o(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[o(p),o(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ue=v(P,[["render",he]]);var be=Object.defineProperty,me=Object.getOwnPropertyDescriptor,ve=(t,i,a,l)=>{for(var e=l>1?void 0:l?me(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&be(i,a,e),e};let D=class extends b{};D=ve([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range02">Range label</label>
  <input class="chi-range-slider" type="range" id="range02" disabled>
</div>

<script>chi.rangeSlider(document.getElementById('range02'));<\/script>`}})})],D);const ge=n("div",{class:"chi-form__item"},[n("label",{class:"chi-label",for:"range02"},"Range label"),n("input",{class:"chi-range-slider",type:"range",id:"range02",disabled:""})],-1);function $e(t,i,a,l,e,c){const s=$,p=f,_=w;return h(),S(_,{title:"Disabled",id:"disabled",tabs:t.exampleTabs},{example:r(()=>[ge]),"code-webcomponent":r(()=>[o(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[o(p),o(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const fe=v(D,[["render",$e]]);var we=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,ye=(t,i,a,l)=>{for(var e=l>1?void 0:l?Se(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&we(i,a,e),e};let B=class extends b{};B=ye([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range05">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" id="range05" disabled>
    <div class="chi-input__progress"></div>
    <div class="chi-input__thumb"></div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range05'));<\/script>`}})})],B);const xe=n("div",{class:"chi-form__item"},[n("label",{class:"chi-label",for:"range05"},"Range label"),n("div",{class:"chi-input__wrapper"},[n("input",{class:"chi-range-slider",type:"range",id:"range05",disabled:""}),n("div",{class:"chi-input__progress"}),n("div",{class:"chi-input__thumb"})])],-1);function Ce(t,i,a,l,e,c){const s=$,p=f,_=w;return h(),S(_,{title:"Disabled",id:"disabled-consistent",tabs:t.exampleTabs},{example:r(()=>[xe]),"code-webcomponent":r(()=>[o(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[o(p),o(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Pe=v(B,[["render",Ce]]);var De=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,Oe=(t,i,a,l)=>{for(var e=l>1?void 0:l?Be(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&De(i,a,e),e};let O=class extends b{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range06">Range label</label>
  <div class="chi-input__wrapper -d--flex">
    <span class="-text -mr--2">200GB</span>
    <div class="chi-input__wrapper -w--100">
      <input class="chi-range-slider" type="range" id="range06">
      <div class="chi-input__progress"></div>
      <div class="chi-input__thumb"></div>
    </div>
    <span class="-text -ml--2">5TB</span>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range06'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};O=Oe([m({})],O);const Re={class:"chi-form__item"},Te=n("label",{class:"chi-label",for:"range06"},"Range label",-1),Ee={class:"chi-input__wrapper -d--flex"},Me=n("span",{class:"-text -mr--2"},"200GB",-1),Le={class:"chi-input__wrapper -w--100"},je={class:"chi-range-slider",type:"range",id:"range06",ref:"range"},Ne=n("div",{class:"chi-input__progress"},null,-1),Je=n("div",{class:"chi-input__thumb"},null,-1),We=n("span",{class:"-text -ml--2"},"5TB",-1);function He(t,i,a,l,e,c){const s=$,p=f,_=w;return h(),S(_,{title:"Multiple Labels",id:"multiple-labels",tabs:t.exampleTabs},{example:r(()=>[n("div",Re,[Te,n("div",Ee,[Me,n("div",Le,[n("input",je,null,512),Ne,Je]),We])])]),"code-webcomponent":r(()=>[o(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[o(p),o(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ie=v(O,[["render",He]]);var Ae=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Ge=(t,i,a,l)=>{for(var e=l>1?void 0:l?Ve(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&Ae(i,a,e),e};let R=class extends b{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range03">Range label</label>
  <div class="chi-input__wrapper -d--flex">
    <span class="-text">200GB</span>
    <input class="chi-range-slider -mx--2" type="range" id="range03">
    <span class="-text">5TB</span>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range03'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};R=Ge([m({})],R);const Fe={class:"chi-form__item"},ze=n("label",{class:"chi-label",for:"range03"},"Range label",-1),Ke={class:"chi-input__wrapper -d--flex"},Ye=n("span",{class:"-text -mr--2"},"200GB",-1),qe={class:"chi-range-slider",type:"range",id:"range03",ref:"range"},Qe=n("span",{class:"-text -ml--2"},"5TB",-1);function Ue(t,i,a,l,e,c){const s=$,p=f,_=w;return h(),S(_,{title:"Multiple Labels",id:"multiple-labels",tabs:t.exampleTabs},{example:r(()=>[n("div",Fe,[ze,n("div",Ke,[Ye,n("input",qe,null,512),Qe])])]),"code-webcomponent":r(()=>[o(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[o(p),o(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Xe=v(R,[["render",Ue]]);var Ze=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,et=(t,i,a,l)=>{for(var e=l>1?void 0:l?ke(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&Ze(i,a,e),e};let T=class extends b{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"rangeLabel");d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range09">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" min="0" max="4" step="1" id="range09">
    <div class="chi-input__tick-bar">
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">Monthly</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">1 year</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">2 years</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">3 years</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">&gt; 3 years</div>
      </div>
    </div>
    <div class="chi-input__progress"></div>
    <div class="chi-input__thumb"></div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range09'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};T=et([m({})],T);const tt={class:"chi-form__item"},it=n("label",{class:"chi-label",for:"range09"},"Range label",-1),st={class:"chi-input__wrapper"},nt={class:"chi-range-slider",id:"range09",type:"range",min:"0",max:"4",step:"1",ref:"range"},lt={class:"chi-input__tick-bar"},at=n("div",null,null,-1),ct=n("div",{class:"chi-input__tick"},null,-1),ot={class:"chi-input__tick-label"},rt=n("div",{class:"chi-input__progress"},null,-1),dt=n("div",{class:"chi-input__thumb"},null,-1);function pt(t,i,a,l,e,c){const s=$,p=f,_=w;return h(),S(_,{title:"Consistent rendering in WebKit browsers",id:"radio-consistent",tabs:t.exampleTabs},{example:r(()=>[n("div",tt,[it,n("div",st,[n("input",nt,null,512),n("div",lt,[(h(!0),y(N,null,J(t.rangeLabel,g=>(h(),y("div",null,[at,ct,n("div",ot,W(g),1)]))),256))]),rt,dt])])]),"code-webcomponent":r(()=>[o(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[o(p),o(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _t=v(T,[["render",pt]]);var ht=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,bt=(t,i,a,l)=>{for(var e=l>1?void 0:l?ut(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&ht(i,a,e),e};let E=class extends b{};E=bt([m({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],rangeLabel:["Monthly","1 year","2 years","3 years","> 3 years"],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range08">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" min="0" max="4" step="1" id="range08" disabled>
    <div class="chi-input__tick-bar">
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">Monthly</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">1 year</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">2 years</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">3 years</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">&gt; 3 years</div>
      </div>
    </div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range08'));<\/script>`}})})],E);const mt={class:"chi-form__item"},vt=n("label",{class:"chi-label",for:"range08"},"Range label",-1),gt={class:"chi-input__wrapper"},$t=n("input",{class:"chi-range-slider",type:"range",min:"0",max:"4",step:"1",id:"range08",disabled:""},null,-1),ft={class:"chi-input__tick-bar"},wt=n("div",null,null,-1),St=n("div",{class:"chi-input__tick"},null,-1),yt={class:"chi-input__tick-label"};function xt(t,i,a,l,e,c){const s=$,p=f,_=w;return h(),S(_,{title:"Disabled",id:"radio-disabled",tabs:t.exampleTabs},{example:r(()=>[n("div",mt,[vt,n("div",gt,[$t,n("div",ft,[(h(!0),y(N,null,J(t.rangeLabel,g=>(h(),y("div",null,[wt,St,n("div",yt,W(g),1)]))),256))])])])]),"code-webcomponent":r(()=>[o(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[o(p),o(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ct=v(E,[["render",xt]]);var Pt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,Bt=(t,i,a,l)=>{for(var e=l>1?void 0:l?Dt(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&Pt(i,a,e),e};let M=class extends b{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"rangeLabel");d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range07">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" min="0" max="4" step="1" id="range07">
    <div class="chi-input__tick-bar">
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">Monthly</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">1 year</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">2 years</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">3 years</div>
      </div>
      <div>
        <div class="chi-input__tick"></div>
        <div class="chi-input__tick-label">&gt; 3 years</div>
      </div>
    </div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range07'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};M=Bt([m({})],M);const Ot=n("div",{class:"p-text -mb--3 -text"},"Enable range sliders to function like radio buttons.",-1),Rt={class:"chi-form__item"},Tt=n("label",{class:"chi-label",for:"range07"},"Range label",-1),Et={class:"chi-input__wrapper"},Mt={class:"chi-range-slider",id:"range07",type:"range",min:"0",max:"4",step:"1",ref:"range"},Lt={class:"chi-input__tick-bar"},jt=n("div",null,null,-1),Nt=n("div",{class:"chi-input__tick"},null,-1),Jt={class:"chi-input__tick-label"};function Wt(t,i,a,l,e,c){const s=$,p=f,_=w;return h(),S(_,{title:"Radio buttons as range slider",id:"radio-slider",tabs:t.exampleTabs},{"example-description":r(()=>[Ot]),example:r(()=>[n("div",Rt,[Tt,n("div",Et,[n("input",Mt,null,512),n("div",Lt,[(h(!0),y(N,null,J(t.rangeLabel,g=>(h(),y("div",null,[jt,Nt,n("div",Jt,W(g),1)]))),256))])])])]),"code-webcomponent":r(()=>[o(s,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[o(p),o(s,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ht=v(M,[["render",Wt]]);var It=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Vt=(t,i,a,l)=>{for(var e=l>1?void 0:l?At(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&It(i,a,e),e};let L=class extends b{};L=Vt([m({components:{BaseExample:se,Disabled:fe,MultipleLabels:Xe,BaseConsistent:ue,DisabledConsistent:Pe,MultipleConsistent:Ie,RadioSlider:Ht,RadioDisabled:Ct,RadioConsistent:_t}})],L);const Gt=n("h2",null,"Examples",-1),Ft=n("p",{class:"-text"},[x("To render a range slider, apply the class "),n("code",null,"chi-range-slider"),x(" to an "),n("code",null,'input type="range"'),x(".Range widths are fluid by default.")],-1),zt=n("h2",null,"Achieve consistent rendering",-1),Kt=n("p",{class:"-text"},[x("As webkit browsers don't support an active track bar, we've created our own. You will either need a JavaScript solution for moving the "),n("code",null,"chi-input__thumb"),x(" element and changing the size of "),n("code",null,"chi-input__progress"),x(", or you can use Chi's JavaScript library as it provides this functionality out of the box.")],-1);function Yt(t,i,a,l,e,c){const s=u("BaseExample"),p=u("Disabled"),_=u("MultipleLabels"),g=u("BaseConsistent"),H=u("DisabledConsistent"),I=u("MultipleConsistent"),A=u("RadioSlider"),V=u("RadioDisabled"),G=u("RadioConsistent");return h(),y("div",null,[Gt,Ft,o(s),o(p),o(_),zt,Kt,o(g),o(H),o(I),o(A),o(V),o(G)])}const qt=v(L,[["render",Yt]]);var Qt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Xt=(t,i,a,l)=>{for(var e=l>1?void 0:l?Ut(i,a):i,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(l?s(i,a,e):s(e))||e);return l&&e&&Qt(i,a,e),e};let j=class extends b{constructor(){super(...arguments);d(this,"pageTabs",q)}};j=Xt([m({components:{Examples:qt,Accessibility:Y,Properties:K}})],j);const Zt={class:"chi-grid__container -pt--3"},kt={class:"chi-tabs-panel -active",id:"examples"},ei={class:"chi-tabs-panel",id:"properties"},ti={class:"chi-tabs-panel",id:"accessibility"};function ii(t,i,a,l,e,c){const s=Q,p=u("Examples"),_=u("Properties"),g=u("Accessibility");return h(),y("div",null,[o(s,{title:"Range slider",description:"Range sliders are used for inputting numeric values within a range.",tabs:t.pageTabs},null,8,["tabs"]),n("div",Zt,[n("div",kt,[o(p)]),n("div",ei,[o(_)]),n("div",ti,[o(g)])])])}const Oi=v(j,[["render",ii]]);export{Oi as default};

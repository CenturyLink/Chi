var F=Object.defineProperty;var z=(t,e,a)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var d=(t,e,a)=>z(t,typeof e!="symbol"?e+"":e,a);import{V as m,N as v}from"./NAah3XrW.js";import{_ as f}from"./onyWiYp2.js";import{_ as $}from"./CS2TcPBX.js";import{_ as w}from"./CAQzZ0uH.js";import{o as b,h as S,w as p,a as s,b as o,c as y,F as N,i as J,t as W,m as u,d as x}from"./CEIPSiTs.js";import{_ as h}from"./DlAUqK2U.js";import K from"./Bou8B9t0.js";import Y from"./CLIR4v43.js";import{s as q}from"./DtNz156Q.js";import{_ as Q}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var U=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Z=(t,e,a,l)=>{for(var i=l>1?void 0:l?X(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&U(e,a,i),i};let C=class extends m{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range01">Range label</label>
  <input class="chi-range-slider" type="range" id="range01">
</div>

<script>chi.rangeSlider(document.getElementById('range01'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};C=Z([v({})],C);const k={class:"chi-form__item"},ee={class:"chi-range-slider",id:"range01",type:"range",ref:"range"};function ie(t,e,a,l,i,r){const n=f,c=$,_=w;return b(),S(_,{title:"Base",id:"base",tabs:t.exampleTabs},{example:p(()=>[s("div",k,[e[0]||(e[0]=s("label",{class:"chi-label",for:"range01"},"Range label",-1)),s("input",ee,null,512)])]),"code-webcomponent":p(()=>[o(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[o(c),o(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const te=h(C,[["render",ie]]);var ne=Object.defineProperty,se=Object.getOwnPropertyDescriptor,le=(t,e,a,l)=>{for(var i=l>1?void 0:l?se(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&ne(e,a,i),i};let P=class extends m{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range04">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" id="range04">
    <div class="chi-input__progress"></div>
    <div class="chi-input__thumb"></div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range04'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};P=le([v({})],P);const ae={class:"chi-form__item"},re={class:"chi-input__wrapper"},oe={class:"chi-range-slider",id:"range04",type:"range",ref:"range"};function pe(t,e,a,l,i,r){const n=f,c=$,_=w;return b(),S(_,{title:"Base",id:"base-consistent",tabs:t.exampleTabs},{example:p(()=>[s("div",ae,[e[2]||(e[2]=s("label",{class:"chi-label",for:"range04"},"Range label",-1)),s("div",re,[s("input",oe,null,512),e[0]||(e[0]=s("div",{class:"chi-input__progress"},null,-1)),e[1]||(e[1]=s("div",{class:"chi-input__thumb"},null,-1))])])]),"code-webcomponent":p(()=>[o(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[o(c),o(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const de=h(P,[["render",pe]]);var ce=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,be=(t,e,a,l)=>{for(var i=l>1?void 0:l?_e(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&ce(e,a,i),i};let D=class extends m{};D=be([v({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range02">Range label</label>
  <input class="chi-range-slider" type="range" id="range02" disabled>
</div>

<script>chi.rangeSlider(document.getElementById('range02'));<\/script>`}})})],D);function ue(t,e,a,l,i,r){const n=f,c=$,_=w;return b(),S(_,{title:"Disabled",id:"disabled",tabs:t.exampleTabs},{example:p(()=>e[0]||(e[0]=[s("div",{class:"chi-form__item"},[s("label",{class:"chi-label",for:"range02"},"Range label"),s("input",{class:"chi-range-slider",type:"range",id:"range02",disabled:""})],-1)])),"code-webcomponent":p(()=>[o(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[o(c),o(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const me=h(D,[["render",ue]]);var ve=Object.defineProperty,he=Object.getOwnPropertyDescriptor,ge=(t,e,a,l)=>{for(var i=l>1?void 0:l?he(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&ve(e,a,i),i};let B=class extends m{};B=ge([v({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range05">Range label</label>
  <div class="chi-input__wrapper">
    <input class="chi-range-slider" type="range" id="range05" disabled>
    <div class="chi-input__progress"></div>
    <div class="chi-input__thumb"></div>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range05'));<\/script>`}})})],B);function fe(t,e,a,l,i,r){const n=f,c=$,_=w;return b(),S(_,{title:"Disabled",id:"disabled-consistent",tabs:t.exampleTabs},{example:p(()=>e[0]||(e[0]=[s("div",{class:"chi-form__item"},[s("label",{class:"chi-label",for:"range05"},"Range label"),s("div",{class:"chi-input__wrapper"},[s("input",{class:"chi-range-slider",type:"range",id:"range05",disabled:""}),s("div",{class:"chi-input__progress"}),s("div",{class:"chi-input__thumb"})])],-1)])),"code-webcomponent":p(()=>[o(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[o(c),o(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $e=h(B,[["render",fe]]);var we=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,ye=(t,e,a,l)=>{for(var i=l>1?void 0:l?Se(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&we(e,a,i),i};let O=class extends m{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
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

<script>chi.rangeSlider(document.getElementById('range06'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};O=ye([v({})],O);const xe={class:"chi-form__item"},Ce={class:"chi-input__wrapper -d--flex"},Pe={class:"chi-input__wrapper -w--100"},De={class:"chi-range-slider",type:"range",id:"range06",ref:"range"};function Be(t,e,a,l,i,r){const n=f,c=$,_=w;return b(),S(_,{title:"Multiple Labels",id:"multiple-labels",tabs:t.exampleTabs},{example:p(()=>[s("div",xe,[e[4]||(e[4]=s("label",{class:"chi-label",for:"range06"},"Range label",-1)),s("div",Ce,[e[2]||(e[2]=s("span",{class:"-text -mr--2"},"200GB",-1)),s("div",Pe,[s("input",De,null,512),e[0]||(e[0]=s("div",{class:"chi-input__progress"},null,-1)),e[1]||(e[1]=s("div",{class:"chi-input__thumb"},null,-1))]),e[3]||(e[3]=s("span",{class:"-text -ml--2"},"5TB",-1))])])]),"code-webcomponent":p(()=>[o(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[o(c),o(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Oe=h(O,[["render",Be]]);var Re=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Ee=(t,e,a,l)=>{for(var i=l>1?void 0:l?Te(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&Re(e,a,i),i};let R=class extends m{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="range03">Range label</label>
  <div class="chi-input__wrapper -d--flex">
    <span class="-text">200GB</span>
    <input class="chi-range-slider -mx--2" type="range" id="range03">
    <span class="-text">5TB</span>
  </div>
</div>

<script>chi.rangeSlider(document.getElementById('range03'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};R=Ee([v({})],R);const Me={class:"chi-form__item"},Le={class:"chi-input__wrapper -d--flex"},je={class:"chi-range-slider",type:"range",id:"range03",ref:"range"};function Ne(t,e,a,l,i,r){const n=f,c=$,_=w;return b(),S(_,{title:"Multiple Labels",id:"multiple-labels",tabs:t.exampleTabs},{example:p(()=>[s("div",Me,[e[2]||(e[2]=s("label",{class:"chi-label",for:"range03"},"Range label",-1)),s("div",Le,[e[0]||(e[0]=s("span",{class:"-text -mr--2"},"200GB",-1)),s("input",je,null,512),e[1]||(e[1]=s("span",{class:"-text -ml--2"},"5TB",-1))])])]),"code-webcomponent":p(()=>[o(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[o(c),o(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Je=h(R,[["render",Ne]]);var We=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Ie=(t,e,a,l)=>{for(var i=l>1?void 0:l?He(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&We(e,a,i),i};let T=class extends m{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"rangeLabel");d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
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

<script>chi.rangeSlider(document.getElementById('range09'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};T=Ie([v({})],T);const Ae={class:"chi-form__item"},Ve={class:"chi-input__wrapper"},Ge={class:"chi-range-slider",id:"range09",type:"range",min:"0",max:"4",step:"1",ref:"range"},Fe={class:"chi-input__tick-bar"},ze={class:"chi-input__tick-label"};function Ke(t,e,a,l,i,r){const n=f,c=$,_=w;return b(),S(_,{title:"Consistent rendering in WebKit browsers",id:"radio-consistent",tabs:t.exampleTabs},{example:p(()=>[s("div",Ae,[e[4]||(e[4]=s("label",{class:"chi-label",for:"range09"},"Range label",-1)),s("div",Ve,[s("input",Ge,null,512),s("div",Fe,[(b(!0),y(N,null,J(t.rangeLabel,g=>(b(),y("div",null,[e[0]||(e[0]=s("div",null,null,-1)),e[1]||(e[1]=s("div",{class:"chi-input__tick"},null,-1)),s("div",ze,W(g),1)]))),256))]),e[2]||(e[2]=s("div",{class:"chi-input__progress"},null,-1)),e[3]||(e[3]=s("div",{class:"chi-input__thumb"},null,-1))])])]),"code-webcomponent":p(()=>[o(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[o(c),o(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ye=h(T,[["render",Ke]]);var qe=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Ue=(t,e,a,l)=>{for(var i=l>1?void 0:l?Qe(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&qe(e,a,i),i};let E=class extends m{};E=Ue([v({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],rangeLabel:["Monthly","1 year","2 years","3 years","> 3 years"],codeSnippets:{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
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

<script>chi.rangeSlider(document.getElementById('range08'));<\/script>`}})})],E);const Xe={class:"chi-form__item"},Ze={class:"chi-input__wrapper"},ke={class:"chi-input__tick-bar"},ei={class:"chi-input__tick-label"};function ii(t,e,a,l,i,r){const n=f,c=$,_=w;return b(),S(_,{title:"Disabled",id:"radio-disabled",tabs:t.exampleTabs},{example:p(()=>[s("div",Xe,[e[3]||(e[3]=s("label",{class:"chi-label",for:"range08"},"Range label",-1)),s("div",Ze,[e[2]||(e[2]=s("input",{class:"chi-range-slider",type:"range",min:"0",max:"4",step:"1",id:"range08",disabled:""},null,-1)),s("div",ke,[(b(!0),y(N,null,J(t.rangeLabel,g=>(b(),y("div",null,[e[0]||(e[0]=s("div",null,null,-1)),e[1]||(e[1]=s("div",{class:"chi-input__tick"},null,-1)),s("div",ei,W(g),1)]))),256))])])])]),"code-webcomponent":p(()=>[o(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[o(c),o(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ti=h(E,[["render",ii]]);var ni=Object.defineProperty,si=Object.getOwnPropertyDescriptor,li=(t,e,a,l)=>{for(var i=l>1?void 0:l?si(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&ni(e,a,i),i};let M=class extends m{constructor(){super(...arguments);d(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);d(this,"rangeLabel");d(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<div class="chi-form__item">
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

<script>chi.rangeSlider(document.getElementById('range07'));<\/script>`});d(this,"rangeSlider")}mounted(){this.rangeSlider=chi.rangeSlider(this.$refs.range)}beforeDestroy(){this.rangeSlider.dispose()}};M=li([v({})],M);const ai={class:"chi-form__item"},ri={class:"chi-input__wrapper"},oi={class:"chi-range-slider",id:"range07",type:"range",min:"0",max:"4",step:"1",ref:"range"},pi={class:"chi-input__tick-bar"},di={class:"chi-input__tick-label"};function ci(t,e,a,l,i,r){const n=f,c=$,_=w;return b(),S(_,{title:"Radio buttons as range slider",id:"radio-slider",tabs:t.exampleTabs},{"example-description":p(()=>e[0]||(e[0]=[s("div",{class:"p-text -mb--3 -text"},"Enable range sliders to function like radio buttons.",-1)])),example:p(()=>[s("div",ai,[e[3]||(e[3]=s("label",{class:"chi-label",for:"range07"},"Range label",-1)),s("div",ri,[s("input",oi,null,512),s("div",pi,[(b(!0),y(N,null,J(t.rangeLabel,g=>(b(),y("div",null,[e[1]||(e[1]=s("div",null,null,-1)),e[2]||(e[2]=s("div",{class:"chi-input__tick"},null,-1)),s("div",di,W(g),1)]))),256))])])])]),"code-webcomponent":p(()=>[o(n,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":p(()=>[o(c),o(n,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const _i=h(M,[["render",ci]]);var bi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,mi=(t,e,a,l)=>{for(var i=l>1?void 0:l?ui(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&bi(e,a,i),i};let L=class extends m{};L=mi([v({components:{BaseExample:te,Disabled:me,MultipleLabels:Je,BaseConsistent:de,DisabledConsistent:$e,MultipleConsistent:Oe,RadioSlider:_i,RadioDisabled:ti,RadioConsistent:Ye}})],L);function vi(t,e,a,l,i,r){const n=u("BaseExample"),c=u("Disabled"),_=u("MultipleLabels"),g=u("BaseConsistent"),H=u("DisabledConsistent"),I=u("MultipleConsistent"),A=u("RadioSlider"),V=u("RadioDisabled"),G=u("RadioConsistent");return b(),y("div",null,[e[0]||(e[0]=s("h2",null,"Examples",-1)),e[1]||(e[1]=s("p",{class:"-text"},[x("To render a range slider, apply the class "),s("code",null,"chi-range-slider"),x(" to an "),s("code",null,'input type="range"'),x(".Range widths are fluid by default.")],-1)),o(n),o(c),o(_),e[2]||(e[2]=s("h2",null,"Achieve consistent rendering",-1)),e[3]||(e[3]=s("p",{class:"-text"},[x("As webkit browsers don't support an active track bar, we've created our own. You will either need a JavaScript solution for moving the "),s("code",null,"chi-input__thumb"),x(" element and changing the size of "),s("code",null,"chi-input__progress"),x(", or you can use Chi's JavaScript library as it provides this functionality out of the box.")],-1)),o(g),o(H),o(I),o(A),o(V),o(G)])}const hi=h(L,[["render",vi]]);var gi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,$i=(t,e,a,l)=>{for(var i=l>1?void 0:l?fi(e,a):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(i=(l?n(e,a,i):n(i))||i);return l&&i&&gi(e,a,i),i};let j=class extends m{constructor(){super(...arguments);d(this,"pageTabs",q)}};j=$i([v({components:{Examples:hi,Accessibility:Y,Properties:K}})],j);const wi={class:"chi-grid__container -pt--3"},Si={class:"chi-tabs-panel -active",id:"examples"},yi={class:"chi-tabs-panel",id:"properties"},xi={class:"chi-tabs-panel",id:"accessibility"};function Ci(t,e,a,l,i,r){const n=Q,c=u("Examples"),_=u("Properties"),g=u("Accessibility");return b(),y("div",null,[o(n,{title:"Range slider",description:"Range sliders are used for inputting numeric values within a range.",tabs:t.pageTabs},null,8,["tabs"]),s("div",wi,[s("div",Si,[o(c)]),s("div",yi,[o(_)]),s("div",xi,[o(g)])])])}const Zi=h(j,[["render",Ci]]);export{Zi as default};

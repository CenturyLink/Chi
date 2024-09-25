var R=Object.defineProperty;var W=(i,t,l)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[t]=l;var C=(i,t,l)=>W(i,typeof t!="symbol"?t+"":t,l);import{V as h,N as _}from"./NAah3XrW.js";import{o as p,h as g,w as r,a as e,b as c,d as m,j as H,m as b,c as S,F as Q}from"./CEIPSiTs.js";import{_ as f}from"./onyWiYp2.js";import{_ as x}from"./CS2TcPBX.js";import{_ as q}from"./CAQzZ0uH.js";import{_ as v}from"./DlAUqK2U.js";import F from"./ADtppIgT.js";import U from"./B8cM_H29.js";import{s as G}from"./DtNz156Q.js";import{_ as K}from"./DFOICsuk.js";import"./CnZFJwg2.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=(i,t,l,s)=>{for(var a=s>1?void 0:s?Y(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&X(t,l,a),a};let w=class extends h{};w=Z([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger-alert" class="chi-button chi-modal__trigger" data-target="#modal-alert">
  Launch portal alert modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-alert" class="chi-modal -portal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Alert Modal Title</h2>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <div class="-d--flex">
          <i class="chi-icon icon-circle-x -sm--3 -icon--danger -mr--2" aria-hidden="true"></i>
          <div class="-w--100">
            <p class="-text--bold -m--0">Replace this subhead text with specific text from project documentation</p>
            <p class="-mt--1 -mb--0">Supporting text to explain the subhead text. Check user story to customize based on requirements. This is placeholder text to show spacing and line height. Replace this text with text provided in requirements.</p>
          </div>
        </div>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button -primary">Button</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-alert'));<\/script>`}})})],w);function ee(i,t,l,s,a,n){const o=f,d=x,u=q;return p(),g(u,{title:"Alert",id:"alert-portal",padding:"-p--0",tabs:i.exampleTabs},{example:r(()=>t[0]||(t[0]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal -portal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Alert Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("div",{class:"-d--flex"},[e("i",{class:"chi-icon icon-circle-x -sm--3 -icon--danger -mr--2","aria-hidden":"true"}),e("div",{class:"-w--100"},[e("p",{class:"-text--bold -m--0"},"Replace this subhead text with specific text from project documentation"),e("p",{class:"-mt--1 -mb--0"},"Supporting text to explain the subhead text. Check user story to customize based on requirements. This is placeholder text to show spacing and line height. Replace this text with text provided in requirements.")])])]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button -primary"},"Button")])])])],-1)])),"code-webcomponent":r(()=>[c(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const te=v(w,[["render",ee]]);var ae=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,oe=(i,t,l,s)=>{for(var a=s>1?void 0:s?ie(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&ae(t,l,a),a};let M=class extends h{constructor(){super(...arguments);C(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);C(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger-1" class="chi-button chi-modal__trigger" data-target="#modal-1">
  Launch demo modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-1" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Modal Title</h2>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <p class="-text -m--0">Modal content</p>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button" data-dismiss="modal">Cancel</button>
        <button class="chi-button -primary">Save</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-1'));<\/script>`});C(this,"modal")}mounted(){this.modal=chi.modal(this.$refs.baseModal)}beforeDestroy(){this.modal.dispose()}};M=oe([_({})],M);const se={class:"-p--0"},le={class:"-d--flex -justify-content--start -align-items--start"},ne={class:"chi-button -primary chi-modal__trigger",id:"modal-trigger-1","data-target":"#modal-1",ref:"baseModal"};function ce(i,t,l,s,a,n){const o=f,d=x,u=q;return p(),g(u,{title:"Base",id:"base",additionalStyle:"position: static;",tabs:i.exampleTabs},{example:r(()=>[e("div",se,[e("div",le,[e("button",ne,"Click me to open the modal",512)]),t[0]||(t[0]=e("div",{class:"chi-backdrop -closed"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",id:"modal-1",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","data-dismiss":"modal","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button","data-dismiss":"modal"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1))])]),"code-webcomponent":r(()=>[c(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const re=v(M,[["render",ce]]);var de=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,me=(i,t,l,s)=>{for(var a=s>1?void 0:s?ue(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&de(t,l,a),a};let y=class extends h{};y=me([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger-7" class="chi-button chi-modal__trigger" data-target="#modal-7">
  Launch no border modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-7" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header -no-border">
        <h2 class="chi-modal__title">Modal Title</h2>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <p class="-text -m--0">Modal content</p>
      </div>
      <footer class="chi-modal__footer -no-border">
        <button class="chi-button" data-dismiss="modal">Cancel</button>
        <button class="chi-button -primary">Save</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-7'));<\/script>`}})})],y);function pe(i,t,l,s,a,n){const o=f,d=x,u=q;return p(),g(u,{title:"No Border",id:"no-border",padding:"-p--0",tabs:i.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[e("p",{class:"-text"},[m("Disable header or footer borders by applying the class "),e("code",null,"-no-border"),m(" to "),e("code",null,"chi-modal__header"),m(" or "),e("code",null,"chi-modal__footer"),m(".")],-1)])),example:r(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header -no-border"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer -no-border"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":r(()=>[c(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const be=v(y,[["render",pe]]);var he=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,ve=(i,t,l,s)=>{for(var a=s>1?void 0:s?_e(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&he(t,l,a),a};let L=class extends h{};L=ve([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger-2" class="chi-button chi-modal__trigger" data-target="#modal-2">
  Launch center modal
</button>

<!-- Modal -->
<div class="chi-backdrop -center -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-2" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Modal Title</h2>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <p class="-text -m--0">Modal content</p>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button" data-dismiss="modal">Cancel</button>
        <button class="chi-button -primary">Save</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-2'));<\/script>`}})})],L);function ge(i,t,l,s,a,n){const o=f,d=x,u=q;return p(),g(u,{title:"Center",padding:"-p--0",id:"center",tabs:i.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[e("p",{class:"-text"},[m("Modals can also be placed in the middle of the page by applying the class "),e("code",null,"-center"),m(" to "),e("code",null,"chi-backdrop"),m(".")],-1)])),example:r(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -center -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":r(()=>[c(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const fe=v(L,[["render",ge]]);var xe=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Ce=(i,t,l,s)=>{for(var a=s>1?void 0:s?qe(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&xe(t,l,a),a};let T=class extends h{};T=Ce([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger-6" class="chi-button chi-modal__trigger" data-target="#modal-6">
  Launch inverse modal
</button>

<!-- Modal -->
<div class="chi-backdrop -inverse -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-6" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Modal Title</h2>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <p class="-text -m--0">Modal content</p>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button" data-dismiss="modal">Cancel</button>
        <button class="chi-button -primary">Save</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-6'));<\/script>`}})})],T);function Se(i,t,l,s,a,n){const o=f,d=x,u=q;return p(),g(u,{title:"Inverse Backdrop",padding:"-p--0",id:"inverse-backdrop",tabs:i.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[e("p",{class:"-text"},[m("Invert a modals backdrop by applying the class "),e("code",null,"-inverse.")],-1)])),example:r(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -inverse -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":r(()=>[c(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $e=v(T,[["render",Se]]);var we=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,ye=(i,t,l,s)=>{for(var a=s>1?void 0:s?Me(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&we(t,l,a),a};let P=class extends h{};P=ye([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger-4" class="chi-button chi-modal__trigger" data-target="#modal-4">
  Launch long scrollable modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed -mh--480">
  <div class="chi-backdrop__wrapper">
    <section id="modal-4" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Modal Title</h2>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <p class="-text -mt--0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Nam volutpat tellus sapien, ac aliquam nisl mattis id. Etiam laoreet malesuada tristique. Morbi luctus facilisis laoreet. Sed pharetra diam consequat, ultrices sem facilisis, ornare urna. Suspendisse nec mollis massa.
          Praesent ipsum purus, euismod quis mattis et, scelerisque in erat. Etiam laoreet dolor non suscipit laoreet. Sed nec mauris vitae ipsum mollis laoreet et sed nisi. In at metus eget neque consequat pellentesque. Aliquam erat volutpat.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas ultricies justo, vel scelerisque justo. Aliquam mollis diam ac ligula feugiat placerat sed iaculis urna. Donec in mi consequat,
          cursus ante non, pulvinar eros. Phasellus viverra massa venenatis, pellentesque lectus auctor, condimentum nibh. Donec malesuada magna sed libero tincidunt, id tempus lectus mollis.
        </p>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button" data-dismiss="modal">Cancel</button>
        <button class="chi-button -primary">Save</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-4'));<\/script>`}})})],P);function Le(i,t,l,s,a,n){const o=f,d=x,u=q;return p(),g(u,{title:"Scrolling long content",id:"scrollable-long-content",padding:"-p--0",tabs:i.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Enable scrolling when modals become too long for the user’s viewport or device, they scroll independent of the page itself.",-1)])),example:r(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0 -mh--480"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true",style:{"margin-top":"0"}},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -mt--0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque."),e("p",{class:"-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ac odio quis sem placerat porta vel nec leo. Phasellus et malesuada nisi."),e("p",{class:"-text"},"Nam volutpat tellus sapien, ac aliquam nisl mattis id. Etiam laoreet malesuada tristique. Morbi luctus facilisis laoreet. Sed pharetra diam consequat, ultrices sem facilisis, ornare urna. Suspendisse nec mollis massa. Praesent ipsum purus, euismod quis mattis et, scelerisque in erat. Etiam laoreet dolor non suscipit laoreet. Sed nec mauris vitae ipsum mollis laoreet et sed nisi. In at metus eget neque consequat pellentesque. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas ultricies justo, vel scelerisque justo. Aliquam mollis diam ac ligula feugiat placerat sed iaculis urna. Donec in mi consequat, cursus ante non, pulvinar eros. Phasellus viverra massa venenatis, pellentesque lectus auctor, condimentum nibh. Donec malesuada magna sed libero tincidunt, id tempus lectus mollis.")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":r(()=>[c(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Te=v(P,[["render",Le]]);var Pe=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Oe=(i,t,l,s)=>{for(var a=s>1?void 0:s?Ne(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&Pe(t,l,a),a};let N=class extends h{};N=Oe([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger-5" class="chi-button chi-modal__trigger" data-target="#modal-5">
  Launch modal with subtitle
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-5" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Modal Title</h2>
        <h3 class="chi-modal__subtitle">Modal subtitle</h3>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <p class="-text -m--0">Modal content</p>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button" data-dismiss="modal">Cancel</button>
        <button class="chi-button -primary">Save</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-5'));<\/script>`}})})],N);function Be(i,t,l,s,a,n){const o=f,d=x,u=q;return p(),g(u,{title:"With Subtitle",id:"with-subtitle",padding:"-p--0",tabs:i.exampleTabs},{example:r(()=>t[0]||(t[0]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("h3",{class:"chi-modal__subtitle"},"Modal subtitle"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":r(()=>[c(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ee=v(N,[["render",Be]]);var Ie=Object.defineProperty,je=Object.getOwnPropertyDescriptor,De=(i,t,l,s)=>{for(var a=s>1?void 0:s?je(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&Ie(t,l,a),a};let O=class extends h{};O=De([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger-3" class="chi-button chi-modal__trigger" data-target="#modal-3">
  Launch scrollable modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-3" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Modal Title</h2>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content -mh--400">
        <p class="-text -mt--0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum.
        </p>
        <p class="-text">
          Nam volutpat tellus sapien, ac aliquam nisl mattis id. Etiam laoreet malesuada tristique. Morbi luctus facilisis laoreet. Sed pharetra diam consequat, ultrices sem facilisis, ornare urna. Suspendisse nec mollis massa.
          Praesent ipsum purus, euismod quis mattis et, scelerisque in erat. Etiam laoreet dolor non suscipit laoreet. Sed nec mauris vitae ipsum mollis laoreet et sed nisi. In at metus eget neque consequat pellentesque. Aliquam erat volutpat.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas ultricies justo, vel scelerisque justo. Aliquam mollis diam ac ligula feugiat placerat sed iaculis urna. Donec in mi consequat,
          cursus ante non, pulvinar eros. Phasellus viverra massa venenatis, pellentesque lectus auctor, condimentum nibh. Donec malesuada magna sed libero tincidunt, id tempus lectus mollis.
        </p>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button" data-dismiss="modal">Cancel</button>
        <button class="chi-button -primary">Save</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-3'));<\/script>`}})})],O);function Ae(i,t,l,s,a,n){const o=f,d=x,u=q;return p(),g(u,{title:"Requirements",titleSize:"h4",id:"scrollable-requirements",padding:"-p--0",tabs:i.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[e("p",{class:"-text"},[m("A max-height must be defined on "),e("code",null,"chi-modal__content"),m(". Use max-height utility classes such as "),e("code",null,"-mh--400"),m(" or "),e("code",null,"-mh--480"),m(", or define your own value.")],-1)])),example:r(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true",style:{"margin-top":"0"}},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content -mh--400"},[e("p",{class:"-text -mt--0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque."),e("p",{class:"-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ac odio quis sem placerat porta vel nec leo. Phasellus et malesuada nisi."),e("p",{class:"-text"},"Nam volutpat tellus sapien, ac aliquam nisl mattis id. Etiam laoreet malesuada tristique. Morbi luctus facilisis laoreet. Sed pharetra diam consequat, ultrices sem facilisis, ornare urna. Suspendisse nec mollis massa. Praesent ipsum purus, euismod quis mattis et, scelerisque in erat. Etiam laoreet dolor non suscipit laoreet. Sed nec mauris vitae ipsum mollis laoreet et sed nisi. In at metus eget neque consequat pellentesque. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas ultricies justo, vel scelerisque justo. Aliquam mollis diam ac ligula feugiat placerat sed iaculis urna. Donec in mi consequat, cursus ante non, pulvinar eros. Phasellus viverra massa venenatis, pellentesque lectus auctor, condimentum nibh. Donec malesuada magna sed libero tincidunt, id tempus lectus mollis.")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":r(()=>[c(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ke=v(O,[["render",Ae]]);var Je=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,Ve=(i,t,l,s)=>{for(var a=s>1?void 0:s?ze(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&Je(t,l,a),a};let B=class extends h{};B=Ve([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger-9" class="chi-button chi-modal__trigger" data-target="#modal-9">
  Launch simple modal
</button>

<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-9" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
      <div class="chi-modal__content -text--center -p--6">
        <h2 class="-text--h3 -text--bolder -m--0">Modal Title</h2>
        <p class="-text -py--1 -px--3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mollis nulla, eget ornare tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet rutrum eros laoreet.</p>
        <button class="chi-button -primary -lg -mt--1">Action</button>
      </div>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-9'));<\/script>`}})})],B);function Re(i,t,l,s,a,n){const o=f,d=x,u=q;return p(),g(u,{title:"Simple",id:"simple",padding:"-p--0",tabs:i.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[e("p",{class:"-text"},[m("Remove "),e("code",null,"chi-modal__header"),m(" and "),e("code",null,"chi-modal__footer"),m(" for a simple and customizable modal.")],-1)])),example:r(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])]),e("div",{class:"chi-modal__content -text--center -p--6"},[e("h2",{class:"-text--h3 -m--0 -text--bolder"},"Modal Title"),e("p",{class:"-text -py--1 -px--3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mollis nulla, eget ornare tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet rutrum eros laoreet."),e("button",{class:"chi-button -primary -lg -mt--1"},"Action")])])])],-1)])),"code-webcomponent":r(()=>[c(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const We=v(B,[["render",Re]]);var He=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Fe=(i,t,l,s)=>{for(var a=s>1?void 0:s?Qe(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&He(t,l,a),a};let E=class extends h{};E=Fe([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
<button id="modal-trigger-8" class="chi-button chi-modal__trigger" data-target="#modal-8">
  Launch multi-step modal
</button>

<!-- Modal -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-8" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title -centered">Modal Title</h2>
        <button class="chi-modal__back" aria-label="Back"></button>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <p class="-text -m--0">Modal content</p>
      </div>
      <footer class="chi-modal__footer">
        <button class="chi-button -primary">Next</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-8'));<\/script>`}})})],E);function Ue(i,t,l,s,a,n){const o=f,d=x,u=q;return p(),g(u,{title:"Multi-step",id:"multi-step",padding:"-p--0",tabs:i.exampleTabs},{"example-description":r(()=>t[0]||(t[0]=[e("p",{class:"-text"},[m("For multi-step modals, ensure the class "),e("code",null,"-centered"),m(" is applied to "),e("code",null,"chi-modal__title"),m(". This will provide sufficient real estate on the left side to store a back button "),e("code",null,"chi-modal__back"),m(".")],-1)])),example:r(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title -centered"},"Modal Title"),e("button",{class:"chi-modal__back","aria-label":"Back"}),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button -primary"},"Next")])])])],-1)])),"code-webcomponent":r(()=>[c(o,{class:"html",lang:"html",code:i.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[c(d),c(o,{lang:"html",code:i.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ge=v(E,[["render",Ue]]);var Ke=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ye=(i,t,l,s)=>{for(var a=s>1?void 0:s?Xe(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&Ke(t,l,a),a};let I=class extends h{constructor(){super(...arguments);C(this,"selectedTheme",H())}};I=Ye([_({components:{AlertPortal:te,BaseExample:re,NoBorderLumenCenturyLink:be,Center:fe,InverseLumenCenturyLink:$e,ScrollableLongContent:Te,ScrollableRequirements:ke,ModalSubtitleLumenCenturyLink:Ee,SimpleLumenCenturyLink:We,MultiStep:Ge}})],I);const Ze={key:0},et={key:1};function tt(i,t,l,s,a,n){const o=b("BaseExample"),d=b("Center"),u=b("ScrollableRequirements"),$=b("ScrollableLongContent"),A=b("ModalSubtitleLumenCenturyLink"),k=b("InverseLumenCenturyLink"),J=b("NoBorderLumenCenturyLink"),D=b("MultiStep"),z=b("SimpleLumenCenturyLink"),V=b("AlertPortal");return p(),S("div",null,[t[0]||(t[0]=e("h2",null,"Examples",-1)),t[1]||(t[1]=e("p",{class:"-text"},"Modals are composed of several parts. To render a modal, include a modal backdrop, modal header, modal body, and modal footer (optional). By default modals are aligned to the top of the page.",-1)),c(o),c(d),t[2]||(t[2]=e("h3",null,"Scrollable",-1)),t[3]||(t[3]=e("p",{class:"-text"},"Enable scrolling if the height of the modal's content is larger than the modal's content container.",-1)),c(u),c($),["lumen","centurylink"].includes(i.selectedTheme)?(p(),S("div",Ze,[c(A),c(k),c(J),c(D),c(z)])):(p(),S("div",et,[c(V),c(D)]))])}const at=v(I,[["render",tt]]);var it=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,st=(i,t,l,s)=>{for(var a=s>1?void 0:s?ot(t,l):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(a=(s?o(t,l,a):o(a))||a);return s&&a&&it(t,l,a),a};let j=class extends h{constructor(){super(...arguments);C(this,"pageTabs",G)}};j=st([_({components:{Examples:at,Accessibility:U,Properties:F}})],j);const lt={class:"chi-grid__container -pt--3"},nt={class:"chi-tabs-panel -active",id:"examples"},ct={class:"chi-tabs-panel",id:"properties"},rt={class:"chi-tabs-panel",id:"accessibility"};function dt(i,t,l,s,a,n){const o=K,d=b("Examples"),u=b("Properties"),$=b("Accessibility");return p(),S(Q,null,[c(o,{title:"Modal",description:"Modals are windows used for displaying prompts and subtasks without losing context of the parent application.",tabs:i.pageTabs},null,8,["tabs"]),e("div",lt,[e("div",nt,[c(d)]),e("div",ct,[c(u)]),e("div",rt,[c($)])])],64)}const At=v(j,[["render",dt]]);export{At as default};

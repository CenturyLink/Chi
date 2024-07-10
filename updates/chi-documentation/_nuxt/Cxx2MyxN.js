var R=Object.defineProperty;var W=(a,i,l)=>i in a?R(a,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[i]=l;var q=(a,i,l)=>W(a,typeof i!="symbol"?i+"":i,l);import{V as b,N as _}from"./uJTUijt2.js";import{o as p,f as g,w as r,b as n,a as e,d as m,g as H,r as h,c as C}from"./B5CYXVwa.js";import{_ as f}from"./D8GK0F__.js";import{_ as x}from"./BLbnEGma.js";import{_ as $}from"./DKu8Jd2y.js";import{_ as v}from"./DlAUqK2U.js";import Q from"./CR1Syeo5.js";import F from"./ChYs7_5y.js";import{s as U}from"./2EwpEKcw.js";import{_ as G}from"./Be4hAolY.js";import"./C-hgEc7b.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var K=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Y=(a,i,l,s)=>{for(var t=s>1?void 0:s?X(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&K(i,l,t),t};let w=class extends b{};w=Y([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-alert'));<\/script>`}})})],w);const Z=e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal -portal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Alert Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("div",{class:"-d--flex"},[e("i",{class:"chi-icon icon-circle-x -sm--3 -icon--danger -mr--2","aria-hidden":"true"}),e("div",{class:"-w--100"},[e("p",{class:"-text--bold -m--0"},"Replace this subhead text with specific text from project documentation"),e("p",{class:"-mt--1 -mb--0"},"Supporting text to explain the subhead text. Check user story to customize based on requirements. This is placeholder text to show spacing and line height. Replace this text with text provided in requirements.")])])]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button -primary"},"Button")])])])],-1);function ee(a,i,l,s,t,c){const o=f,d=x,u=$;return p(),g(u,{title:"Alert",id:"alert-portal",padding:"-p--0",tabs:a.exampleTabs},{example:r(()=>[Z]),"code-webcomponent":r(()=>[n(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(d),n(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const te=v(w,[["render",ee]]);var ae=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,oe=(a,i,l,s)=>{for(var t=s>1?void 0:s?ie(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&ae(i,l,t),t};let M=class extends b{constructor(){super(...arguments);q(this,"exampleTabs",[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);q(this,"codeSnippets",{webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-1'));<\/script>`});q(this,"modal")}mounted(){this.modal=chi.modal(this.$refs.baseModal)}beforeDestroy(){this.modal.dispose()}};M=oe([_({})],M);const se={class:"-p--0"},le={class:"-d--flex -justify-content--start -align-items--start"},ce={class:"chi-button -primary chi-modal__trigger",id:"modal-trigger-1","data-target":"#modal-1",ref:"baseModal"},ne=e("div",{class:"chi-backdrop -closed"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",id:"modal-1",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","data-dismiss":"modal","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button","data-dismiss":"modal"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1);function re(a,i,l,s,t,c){const o=f,d=x,u=$;return p(),g(u,{title:"Base",id:"base",additionalStyle:"position: static;",tabs:a.exampleTabs},{example:r(()=>[e("div",se,[e("div",le,[e("button",ce,"Click me to open the modal",512)]),ne])]),"code-webcomponent":r(()=>[n(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(d),n(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const de=v(M,[["render",re]]);var ue=Object.defineProperty,me=Object.getOwnPropertyDescriptor,pe=(a,i,l,s)=>{for(var t=s>1?void 0:s?me(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&ue(i,l,t),t};let y=class extends b{};y=pe([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-7'));<\/script>`}})})],y);const he=e("p",{class:"-text"},[m("Disable header or footer borders by applying the class "),e("code",null,"-no-border"),m(" to "),e("code",null,"chi-modal__header"),m(" or "),e("code",null,"chi-modal__footer"),m(".")],-1),be=e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header -no-border"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer -no-border"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1);function _e(a,i,l,s,t,c){const o=f,d=x,u=$;return p(),g(u,{title:"No Border",id:"no-border",padding:"-p--0",tabs:a.exampleTabs},{"example-description":r(()=>[he]),example:r(()=>[be]),"code-webcomponent":r(()=>[n(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(d),n(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ve=v(y,[["render",_e]]);var ge=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,xe=(a,i,l,s)=>{for(var t=s>1?void 0:s?fe(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&ge(i,l,t),t};let L=class extends b{};L=xe([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-2'));<\/script>`}})})],L);const $e=e("p",{class:"-text"},[m("Modals can also be placed in the middle of the page by applying the class "),e("code",null,"-center"),m(" to "),e("code",null,"chi-backdrop"),m(".")],-1),qe=e("div",{class:"chi-backdrop -center -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1);function Ce(a,i,l,s,t,c){const o=f,d=x,u=$;return p(),g(u,{title:"Center",padding:"-p--0",id:"center",tabs:a.exampleTabs},{"example-description":r(()=>[$e]),example:r(()=>[qe]),"code-webcomponent":r(()=>[n(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(d),n(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Se=v(L,[["render",Ce]]);var we=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,ye=(a,i,l,s)=>{for(var t=s>1?void 0:s?Me(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&we(i,l,t),t};let T=class extends b{};T=ye([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-6'));<\/script>`}})})],T);const Le=e("p",{class:"-text"},[m("Invert a modals backdrop by applying the class "),e("code",null,"-inverse.")],-1),Te=e("div",{class:"chi-backdrop -inverse -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1);function Pe(a,i,l,s,t,c){const o=f,d=x,u=$;return p(),g(u,{title:"Inverse Backdrop",padding:"-p--0",id:"inverse-backdrop",tabs:a.exampleTabs},{"example-description":r(()=>[Le]),example:r(()=>[Te]),"code-webcomponent":r(()=>[n(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(d),n(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ne=v(T,[["render",Pe]]);var Oe=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,Ee=(a,i,l,s)=>{for(var t=s>1?void 0:s?Be(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&Oe(i,l,t),t};let P=class extends b{};P=Ee([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-4'));<\/script>`}})})],P);const Ie=e("p",{class:"-text"},"Enable scrolling when modals become too long for the user’s viewport or device, they scroll independent of the page itself.",-1),De=e("div",{class:"chi-backdrop -p--6 -position--relative -z--0 -mh--480"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true",style:{"margin-top":"0"}},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -mt--0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque."),e("p",{class:"-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ac odio quis sem placerat porta vel nec leo. Phasellus et malesuada nisi."),e("p",{class:"-text"},"Nam volutpat tellus sapien, ac aliquam nisl mattis id. Etiam laoreet malesuada tristique. Morbi luctus facilisis laoreet. Sed pharetra diam consequat, ultrices sem facilisis, ornare urna. Suspendisse nec mollis massa. Praesent ipsum purus, euismod quis mattis et, scelerisque in erat. Etiam laoreet dolor non suscipit laoreet. Sed nec mauris vitae ipsum mollis laoreet et sed nisi. In at metus eget neque consequat pellentesque. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas ultricies justo, vel scelerisque justo. Aliquam mollis diam ac ligula feugiat placerat sed iaculis urna. Donec in mi consequat, cursus ante non, pulvinar eros. Phasellus viverra massa venenatis, pellentesque lectus auctor, condimentum nibh. Donec malesuada magna sed libero tincidunt, id tempus lectus mollis.")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1);function je(a,i,l,s,t,c){const o=f,d=x,u=$;return p(),g(u,{title:"Scrolling long content",id:"scrollable-long-content",padding:"-p--0",tabs:a.exampleTabs},{"example-description":r(()=>[Ie]),example:r(()=>[De]),"code-webcomponent":r(()=>[n(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(d),n(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ae=v(P,[["render",je]]);var ke=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,ze=(a,i,l,s)=>{for(var t=s>1?void 0:s?Je(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&ke(i,l,t),t};let N=class extends b{};N=ze([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-5'));<\/script>`}})})],N);const Ve=e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("h3",{class:"chi-modal__subtitle"},"Modal subtitle"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1);function Re(a,i,l,s,t,c){const o=f,d=x,u=$;return p(),g(u,{title:"With Subtitle",id:"with-subtitle",padding:"-p--0",tabs:a.exampleTabs},{example:r(()=>[Ve]),"code-webcomponent":r(()=>[n(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(d),n(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const We=v(N,[["render",Re]]);var He=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,Fe=(a,i,l,s)=>{for(var t=s>1?void 0:s?Qe(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&He(i,l,t),t};let O=class extends b{};O=Fe([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-3'));<\/script>`}})})],O);const Ue=e("p",{class:"-text"},[m("A max-height must be defined on "),e("code",null,"chi-modal__content"),m(". Use max-height utility classes such as "),e("code",null,"-mh--400"),m(" or "),e("code",null,"-mh--480"),m(", or define your own value.")],-1),Ge=e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true",style:{"margin-top":"0"}},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content -mh--400"},[e("p",{class:"-text -mt--0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque."),e("p",{class:"-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ac odio quis sem placerat porta vel nec leo. Phasellus et malesuada nisi."),e("p",{class:"-text"},"Nam volutpat tellus sapien, ac aliquam nisl mattis id. Etiam laoreet malesuada tristique. Morbi luctus facilisis laoreet. Sed pharetra diam consequat, ultrices sem facilisis, ornare urna. Suspendisse nec mollis massa. Praesent ipsum purus, euismod quis mattis et, scelerisque in erat. Etiam laoreet dolor non suscipit laoreet. Sed nec mauris vitae ipsum mollis laoreet et sed nisi. In at metus eget neque consequat pellentesque. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas ultricies justo, vel scelerisque justo. Aliquam mollis diam ac ligula feugiat placerat sed iaculis urna. Donec in mi consequat, cursus ante non, pulvinar eros. Phasellus viverra massa venenatis, pellentesque lectus auctor, condimentum nibh. Donec malesuada magna sed libero tincidunt, id tempus lectus mollis.")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1);function Ke(a,i,l,s,t,c){const o=f,d=x,u=$;return p(),g(u,{title:"Requirements",titleSize:"h4",id:"scrollable-requirements",padding:"-p--0",tabs:a.exampleTabs},{"example-description":r(()=>[Ue]),example:r(()=>[Ge]),"code-webcomponent":r(()=>[n(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(d),n(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Xe=v(O,[["render",Ke]]);var Ye=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,et=(a,i,l,s)=>{for(var t=s>1?void 0:s?Ze(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&Ye(i,l,t),t};let B=class extends b{};B=et([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-9'));<\/script>`}})})],B);const tt=e("p",{class:"-text"},[m("Remove "),e("code",null,"chi-modal__header"),m(" and "),e("code",null,"chi-modal__footer"),m(" for a simple and customizable modal.")],-1),at=e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])]),e("div",{class:"chi-modal__content -text--center -p--6"},[e("h2",{class:"-text--h3 -m--0 -text--bolder"},"Modal Title"),e("p",{class:"-text -py--1 -px--3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mollis nulla, eget ornare tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet rutrum eros laoreet."),e("button",{class:"chi-button -primary -lg -mt--1"},"Action")])])])],-1);function it(a,i,l,s,t,c){const o=f,d=x,u=$;return p(),g(u,{title:"Simple",id:"simple",padding:"-p--0",tabs:a.exampleTabs},{"example-description":r(()=>[tt]),example:r(()=>[at]),"code-webcomponent":r(()=>[n(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(d),n(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ot=v(B,[["render",it]]);var st=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,ct=(a,i,l,s)=>{for(var t=s>1?void 0:s?lt(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&st(i,l,t),t};let E=class extends b{};E=ct([_({data:()=>({exampleTabs:[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],codeSnippets:{webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-8'));<\/script>`}})})],E);const nt=e("p",{class:"-text"},[m("For multi-step modals, ensure the class "),e("code",null,"-centered"),m(" is applied to "),e("code",null,"chi-modal__title"),m(". This will provide sufficient real estate on the left side to store a back button "),e("code",null,"chi-modal__back"),m(".")],-1),rt=e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title -centered"},"Modal Title"),e("button",{class:"chi-modal__back","aria-label":"Back"}),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button -primary"},"Next")])])])],-1);function dt(a,i,l,s,t,c){const o=f,d=x,u=$;return p(),g(u,{title:"Multi-step",id:"multi-step",padding:"-p--0",tabs:a.exampleTabs},{"example-description":r(()=>[nt]),example:r(()=>[rt]),"code-webcomponent":r(()=>[n(o,{class:"html",lang:"html",code:a.codeSnippets.webcomponent},null,8,["code"])]),"code-htmlblueprint":r(()=>[n(d),n(o,{lang:"html",code:a.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const ut=v(E,[["render",dt]]);var mt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ht=(a,i,l,s)=>{for(var t=s>1?void 0:s?pt(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&mt(i,l,t),t};let I=class extends b{constructor(){super(...arguments);q(this,"selectedTheme",H())}};I=ht([_({components:{AlertPortal:te,BaseExample:de,NoBorderLumenCenturyLink:ve,Center:Se,InverseLumenCenturyLink:Ne,ScrollableLongContent:Ae,ScrollableRequirements:Xe,ModalSubtitleLumenCenturyLink:We,SimpleLumenCenturyLink:ot,MultiStep:ut}})],I);const bt=e("h2",null,"Examples",-1),_t={class:"-text"},vt=e("h3",null,"Scrollable",-1),gt=e("p",{class:"-text"},"Enable scrolling if the height of the modal's content is larger than the modal's content container.",-1),ft={key:0},xt={key:1};function $t(a,i,l,s,t,c){const o=h("BaseExample"),d=h("Center"),u=h("ScrollableRequirements"),S=h("ScrollableLongContent"),A=h("ModalSubtitleLumenCenturyLink"),k=h("InverseLumenCenturyLink"),J=h("NoBorderLumenCenturyLink"),j=h("MultiStep"),z=h("SimpleLumenCenturyLink"),V=h("AlertPortal");return p(),C("div",null,[bt,e("p",_t,[m("Modals are composed of several parts. To render a modal, include a modal backdrop, modal header, modal body, and modal footer (optional). By default modals are aligned to the top of the page."),n(o),n(d),vt,gt,n(u),n(S),["lumen","centurylink","lumenrebrand24"].includes(a.selectedTheme)?(p(),C("div",ft,[n(A),n(k),n(J),n(j),n(z)])):(p(),C("div",xt,[n(V),n(j)]))])])}const qt=v(I,[["render",$t]]);var Ct=Object.defineProperty,St=Object.getOwnPropertyDescriptor,wt=(a,i,l,s)=>{for(var t=s>1?void 0:s?St(i,l):i,c=a.length-1,o;c>=0;c--)(o=a[c])&&(t=(s?o(i,l,t):o(t))||t);return s&&t&&Ct(i,l,t),t};let D=class extends b{constructor(){super(...arguments);q(this,"pageTabs",U)}};D=wt([_({components:{Examples:qt,Accessibility:F,Properties:Q}})],D);const Mt={class:"chi-grid__container -pt--3"},yt={class:"chi-tabs-panel -active",id:"examples"},Lt={class:"chi-tabs-panel",id:"properties"},Tt={class:"chi-tabs-panel",id:"accessibility"};function Pt(a,i,l,s,t,c){const o=G,d=h("Examples"),u=h("Properties"),S=h("Accessibility");return p(),C("div",null,[n(o,{title:"Modal",description:"Modals are windows used for displaying prompts and subtasks without losing context of the parent application.",tabs:a.pageTabs},null,8,["tabs"]),e("div",Mt,[e("div",yt,[n(d)]),e("div",Lt,[n(u)]),e("div",Tt,[n(S)])])])}const oa=v(D,[["render",Pt]]);export{oa as default};

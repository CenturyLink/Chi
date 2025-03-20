import{_ as h}from"./Cr4Krhex.js";import{_ as v}from"./DKkADrKB.js";import{_ as b}from"./Zvpnuh4B.js";import{e as m,f as _,o as u,w as i,b as a,a as e,r as q,g as C,h as M,q as w,d as n,l as y,c as g,j as k}from"./BnvmtQYM.js";const S=m({__name:"_alert-portal",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
      <footer class="chi-modal__footer -justify-content--center"">
        <button class="chi-button -primary">Button</button>
      </footer>
    </section>
  </div>
</div>

<!-- JavaScript -->
<script>chi.modal(document.getElementById('modal-trigger-alert'));<\/script>`};return(d,t)=>{const o=h,c=v,r=b;return u(),_(r,{title:"Alert",id:"alert-portal",padding:"-p--0",tabs:s},{example:i(()=>t[0]||(t[0]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal -portal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Alert Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("div",{class:"-d--flex"},[e("i",{class:"chi-icon icon-circle-x -sm--3 -icon--danger -mr--2","aria-hidden":"true"}),e("div",{class:"-w--100"},[e("p",{class:"-text--bold -m--0"},"Replace this subhead text with specific text from project documentation"),e("p",{class:"-mt--1 -mb--0"},"Supporting text to explain the subhead text. Check user story to customize based on requirements. This is placeholder text to show spacing and line height. Replace this text with text provided in requirements.")])])]),e("footer",{class:"chi-modal__footer -justify-content--center"},[e("button",{class:"chi-button -primary"},"Button")])])])],-1)])),"code-webcomponent":i(()=>[a(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(c),a(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),N={class:"-p--0"},T={class:"-d--flex -justify-content--start -align-items--start"},E={class:"chi-button -primary chi-modal__trigger",id:"modal-trigger-1","data-target":"#modal-1",ref:"baseModal"},B=m({__name:"_base",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-1'));<\/script>`},d=q(null),t=C("baseModal");return M(()=>{t.value&&(d.value=chi.modal(t.value))}),w(()=>{var o;(o=d.value)==null||o.dispose()}),(o,c)=>{const r=h,x=v,f=b;return u(),_(f,{title:"Base",id:"base",additionalStyle:"position: static;",tabs:s},{example:i(()=>[e("div",N,[e("div",T,[e("button",E,"Click me to open the modal",512)]),c[0]||(c[0]=e("div",{class:"chi-backdrop -closed"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",id:"modal-1",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","data-dismiss":"modal","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button","data-dismiss":"modal"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1))])]),"code-webcomponent":i(()=>[a(r,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(x),a(r,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),L=m({__name:"_noborder-lumen-centurylink",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-7'));<\/script>`};return(d,t)=>{const o=h,c=v,r=b;return u(),_(r,{title:"No Border",id:"no-border",padding:"-p--0",tabs:s},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Disable header or footer borders by applying the class "),e("code",null,"-no-border"),n(" to "),e("code",null,"chi-modal__header"),n(" or "),e("code",null,"chi-modal__footer"),n(".")],-1)])),example:i(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header -no-border"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer -no-border"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":i(()=>[a(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(c),a(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),I=m({__name:"_center",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-2'));<\/script>`};return(d,t)=>{const o=h,c=v,r=b;return u(),_(r,{title:"Center",padding:"-p--0",id:"center",tabs:s},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Modals can also be placed in the middle of the page by applying the class "),e("code",null,"-center"),n(" to "),e("code",null,"chi-backdrop"),n(".")],-1)])),example:i(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -center -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":i(()=>[a(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(c),a(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),z=m({__name:"_inverse-lumen-centurylink",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-6'));<\/script>`};return(d,t)=>{const o=h,c=v,r=b;return u(),_(r,{title:"Inverse Backdrop",padding:"-p--0",id:"inverse-backdrop",tabs:s},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Invert a modals backdrop by applying the class "),e("code",null,"-inverse.")],-1)])),example:i(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -inverse -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":i(()=>[a(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(c),a(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),J=m({__name:"_scrollable_long_content",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-4'));<\/script>`};return(d,t)=>{const o=h,c=v,r=b;return u(),_(r,{title:"Scrolling long content",id:"scrollable-long-content",padding:"-p--0",tabs:s},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Enable scrolling when modals become too long for the user’s viewport or device, they scroll independent of the page itself.",-1)])),example:i(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0 -mh--480"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true",style:{"margin-top":"0"}},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -mt--0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque."),e("p",{class:"-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ac odio quis sem placerat porta vel nec leo. Phasellus et malesuada nisi."),e("p",{class:"-text"},"Nam volutpat tellus sapien, ac aliquam nisl mattis id. Etiam laoreet malesuada tristique. Morbi luctus facilisis laoreet. Sed pharetra diam consequat, ultrices sem facilisis, ornare urna. Suspendisse nec mollis massa. Praesent ipsum purus, euismod quis mattis et, scelerisque in erat. Etiam laoreet dolor non suscipit laoreet. Sed nec mauris vitae ipsum mollis laoreet et sed nisi. In at metus eget neque consequat pellentesque. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas ultricies justo, vel scelerisque justo. Aliquam mollis diam ac ligula feugiat placerat sed iaculis urna. Donec in mi consequat, cursus ante non, pulvinar eros. Phasellus viverra massa venenatis, pellentesque lectus auctor, condimentum nibh. Donec malesuada magna sed libero tincidunt, id tempus lectus mollis.")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":i(()=>[a(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(c),a(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),D=m({__name:"_subtitle-lumen-centurylink",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-5'));<\/script>`};return(d,t)=>{const o=h,c=v,r=b;return u(),_(r,{title:"With Subtitle",id:"with-subtitle",padding:"-p--0",tabs:s},{example:i(()=>t[0]||(t[0]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("h3",{class:"chi-modal__subtitle"},"Modal subtitle"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":i(()=>[a(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(c),a(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),A=m({__name:"_scrollable_requirements",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-3'));<\/script>`};return(d,t)=>{const o=h,c=v,r=b;return u(),_(r,{title:"Requirements",titleSize:"h4",id:"scrollable-requirements",padding:"-p--0",tabs:s},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("A "),e("code",null,"max-height"),n(" must be defined on "),e("code",null,"chi-modal__content"),n(". Use max-height utility classes such as "),e("code",null,"-mh--400"),n(" or "),e("code",null,"-mh--480"),n(", or define your own value.")],-1)])),example:i(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true",style:{"margin-top":"0"}},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Modal Title"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content -mh--400"},[e("p",{class:"-text -mt--0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque."),e("p",{class:"-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit lacus. Nunc ornare sollicitudin arcu vitae viverra. Nam in aliquam augue. Nunc dignissim purus sed massa consequat dictum."),e("p",{class:"-text"},"Integer sed ligula pulvinar, posuere sem nec, varius risus. Vivamus facilisis, eros quis tempus accumsan, nulla ligula aliquam nulla, sed porttitor quam quam auctor diam. Nullam vitae placerat arcu, a suscipit neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ac odio quis sem placerat porta vel nec leo. Phasellus et malesuada nisi."),e("p",{class:"-text"},"Nam volutpat tellus sapien, ac aliquam nisl mattis id. Etiam laoreet malesuada tristique. Morbi luctus facilisis laoreet. Sed pharetra diam consequat, ultrices sem facilisis, ornare urna. Suspendisse nec mollis massa. Praesent ipsum purus, euismod quis mattis et, scelerisque in erat. Etiam laoreet dolor non suscipit laoreet. Sed nec mauris vitae ipsum mollis laoreet et sed nisi. In at metus eget neque consequat pellentesque. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque egestas ultricies justo, vel scelerisque justo. Aliquam mollis diam ac ligula feugiat placerat sed iaculis urna. Donec in mi consequat, cursus ante non, pulvinar eros. Phasellus viverra massa venenatis, pellentesque lectus auctor, condimentum nibh. Donec malesuada magna sed libero tincidunt, id tempus lectus mollis.")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])],-1)])),"code-webcomponent":i(()=>[a(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(c),a(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),H=m({__name:"_simple-lumen-centurylink",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-9'));<\/script>`};return(d,t)=>{const o=h,c=v,r=b;return u(),_(r,{title:"Simple",id:"simple",padding:"-p--0",tabs:s},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Remove "),e("code",null,"chi-modal__header"),n(" and "),e("code",null,"chi-modal__footer"),n(" for a simple and customizable modal.")],-1)])),example:i(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])]),e("div",{class:"chi-modal__content -text--center -p--6"},[e("h2",{class:"-text--h3 -m--0 -text--bolder -text--center"},"Modal Title"),e("p",{class:"-text -py--1 -px--3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mollis nulla, eget ornare tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet rutrum eros laoreet."),e("button",{class:"chi-button -primary -lg -mt--1"},"Action")])])])],-1)])),"code-webcomponent":i(()=>[a(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(c),a(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),$=m({__name:"_multi_step",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={webcomponent:"",htmlblueprint:`<!-- Trigger -->
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
<script>chi.modal(document.getElementById('modal-trigger-8'));<\/script>`};return(d,t)=>{const o=h,c=v,r=b;return u(),_(r,{title:"Multi-step",id:"multi-step",padding:"-p--0",tabs:s},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("For multi-step modals, ensure the class "),e("code",null,"-centered"),n(" is applied to "),e("code",null,"chi-modal__title"),n(". This will provide sufficient real estate on the left side to store a back button "),e("code",null,"chi-modal__back"),n(".")],-1)])),example:i(()=>t[1]||(t[1]=[e("div",{class:"chi-backdrop -p--6 -position--relative -z--0"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal",role:"dialog","aria-label":"Modal description","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title -centered"},"Modal Title"),e("button",{class:"chi-modal__back","aria-label":"Back"}),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("p",{class:"-text -m--0"},"Modal content")]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button -primary"},"Next")])])])],-1)])),"code-webcomponent":i(()=>[a(o,{class:"html",lang:"html",code:l.webcomponent},null,8,["code"])]),"code-htmlblueprint":i(()=>[a(c),a(o,{lang:"html",code:l.htmlblueprint},null,8,["code"])]),_:1})}}}),j=m({__name:"_column-customization",setup(p){const s=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"vue",label:"Vue"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],l={vue:`<!-- Vue component -->
<ChiColumnCustomization :columnsData="columnsData"></ChiColumnCustomization>

<!-- Config and Data -->
data: {
  columnsData: {
    columns: [
      {
        name: 'columnE',
        label: 'Column E',
        selected: true,
      },
      {
        name: 'columnB',
        label: 'Column B',
      },
      {
        name: 'columnA',
        label: 'Column A',
      },
      {
        name: 'columnC',
        label: 'Column C',
        locked: true,
        selected: true,
      },
      {
        name: 'columnD',
        label: 'Column D',
        locked: true,
        selected: true,
      },
      {
        name: 'columnF',
        label: 'Column F',
        selected: true,
      },
      {
        name: 'columnJ',
        label: 'Column J',
      },
      {
        name: 'columnG',
        label: 'Column G',
      },
      {
        name: 'columnI',
        label: 'Column I',
      },
      {
        name: 'columnH',
        label: 'Column H',
      },
    ];,
  },
},`};return(d,t)=>{const o=h,c=b;return u(),_(c,{title:"Column Customization",id:"column-customization",padding:"-p--0",tabs:s},{"example-description":i(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Opens column customization modal, and allows to modify them.",-1),e("div",{class:"example"},[e("div",{class:"chi-data-table__columns",id:"column-customization"},[e("div",{class:"chi-backdrop -center -p--6 -position--relative"},[e("div",{class:"chi-backdrop__wrapper"},[e("section",{class:"chi-modal -animated -active","data-cy":"chi-modal",role:"dialog","aria-label":"Customize Columns","aria-modal":"true"},[e("header",{class:"chi-modal__header"},[e("h2",{class:"chi-modal__title"},"Customize Columns"),e("button",{class:"chi-button -icon -close","aria-label":"Close"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-x","aria-hidden":"true"})])])]),e("div",{class:"chi-modal__content"},[e("div",{class:"-d--flex"},[e("div",{class:"-flex--grow1"},[e("div",null,[e("div",{class:"-text--bold"},"Available Columns"),e("select",{class:"chi-select available-columns",multiple:"multiple"},[e("option",{value:"columnA"},"Column A"),e("option",{value:"columnB"},"Column B"),e("option",{value:"columnG"},"Column G"),e("option",{value:"columnH"},"Column H"),e("option",{value:"columnI"},"Column I"),e("option",{value:"columnJ"},"Column J")])])]),e("div",{class:"-px--1 -d--flex -align-items--center"},[e("div",{class:"-d--flex -flex--column"},[e("button",{class:"chi-button -icon -flat","aria-label":"select"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-chevron-right","aria-hidden":"true"})])]),e("button",{class:"chi-button -icon -flat","aria-label":"Deselect"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-chevron-left","aria-hidden":"true"})])])])]),e("div",{class:"-flex--grow1"},[e("div",null,[e("div",{class:"-text--bold"},"Selected Columns"),e("select",{class:"chi-select selected-columns",multiple:"multiple"},[e("option",{class:"-locked",disabled:"disabled",value:"columnC"},"Column C"),e("option",{class:"-locked",disabled:"disabled",value:"columnD"},"Column D"),e("option",{value:"columnE"},"Column E"),e("option",{value:"columnF"},"Column F")])])]),e("div",{class:"-px--1 -d--flex -align-items--center"},[e("div",{class:"-d--flex -flex--column"},[e("button",{class:"chi-button -icon -flat","aria-label":"Move Up"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-chevron-up","aria-hidden":"true"})])]),e("button",{class:"chi-button -icon -flat","aria-label":"Move Down"},[e("div",{class:"chi-button__content"},[e("i",{class:"chi-icon icon-chevron-down","aria-hidden":"true"})])])])])])]),e("footer",{class:"chi-modal__footer"},[e("button",{class:"chi-button -icon -flat -xs -py--0 chi-column-customization__reset-button","data-tooltip":"Reset to default columns and order","aria-describedby":"chi-tooltip-22",disabled:""},[e("div",{class:"chi-button__content -flex--column -align-items--center"},[e("i",{class:"chi-icon icon-reset -sm--2 -mr--0","aria-hidden":"true"}),e("span",{class:"-text--uppercase -text--2xs"},"Reset")])]),e("div",{class:"chi-divider -vertical -mr--2"}),e("button",{class:"chi-button"},"Cancel"),e("button",{class:"chi-button -primary"},"Save")])])])])])],-1)])),"code-vue":i(()=>[t[1]||(t[1]=e("div",{class:"chi-tab__description"},[n("Use "),e("code",null,"columnsData"),n(" to customize the columns.")],-1)),a(o,{lang:"html",code:l.vue},null,8,["code"])]),_:1})}}}),P={key:0},V={key:1},Q=m({__name:"index",setup(p){const s=y();return(l,d)=>(u(),g("div",null,[d[0]||(d[0]=e("h2",null,"Examples",-1)),d[1]||(d[1]=e("p",{class:"-text"},"Modals are composed of several parts. To render a modal, include a modal backdrop, modal header, modal body, and modal footer (optional). By default modals are aligned to the top of the page.",-1)),a(B),a(I),d[2]||(d[2]=e("h3",null,"Scrollable",-1)),d[3]||(d[3]=e("p",{class:"-text"},"Enable scrolling if the height of the modal's content is larger than the modal's content container.",-1)),a(A),a(J),["lumen","centurylink"].includes(k(s))?(u(),g("div",P,[a(D),a(z),a(L),a($),a(H)])):(u(),g("div",V,[a(S)])),a(j)]))}});export{Q as _};

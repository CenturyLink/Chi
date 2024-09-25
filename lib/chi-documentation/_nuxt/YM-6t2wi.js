var q=Object.defineProperty;var H=(t,e,s)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var P=(t,e,s)=>H(t,typeof e!="symbol"?e+"":e,s);import{V as g,N as x}from"./NAah3XrW.js";import{_ as S}from"./onyWiYp2.js";import{_ as E}from"./CS2TcPBX.js";import{_ as w}from"./CAQzZ0uH.js";import{o as h,h as O,w as v,a as n,d as r,c as u,F as A,i as N,t as b,l as $,b as p,n as G,m as f}from"./CEIPSiTs.js";import{_ as C}from"./DlAUqK2U.js";import{_ as J}from"./CnZFJwg2.js";import W from"./v9vsDoQH.js";import X from"./UMbQNyID.js";import{s as z}from"./DtNz156Q.js";import{_ as K}from"./DFOICsuk.js";import"./B2BTeTyp.js";import"./BJfyOiY6.js";import"./_tbI9m6B.js";import"./mn8I5ZFn.js";import"./DA9BgUq9.js";var Q=Object.defineProperty,R=Object.getOwnPropertyDescriptor,Y=(t,e,s,l)=>{for(var a=l>1?void 0:l?R(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(l?i(e,s,a):i(a))||a);return l&&a&&Q(e,s,a),a};let T=class extends g{};T=Y([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],active:0,panels:[{state:"done",content:"Content in expansion panel (e.g. a form to select a product package)",title:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection"},{state:"active",content:"Content in expansion panel (e.g. a form to enter shipping address)",title:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address"},{state:"pending",content:"Content in expansion panel (e.g. a form to select installation date)",title:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date"},{state:"disabled",content:"Content in expansion panel (e.g. a form to enter payment method)",title:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4. (e.g.) payment method"}],codeSnippets:{webcomponent:`<chi-expansion-panel step="1" title="Panel title" state="active">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      Optional subtitle
    </div>
    <p class="chi-epanel__text">
      Content in expansion panel (e.g. a form to select a product package)
    </p>
  </div>
  <div slot="footer">
    <chi-button color="primary">
      Continue
    </chi-button>
  </div>
</chi-expansion-panel>
<chi-expansion-panel step="2" title="Panel title"></chi-expansion-panel>
<chi-expansion-panel step="3" title="Panel title"></chi-expansion-panel>
<chi-expansion-panel step="4" title="Panel title"></chi-expansion-panel>
`,vue:`<chi-vue-expansion-panel v-for="(panel, index) in panels" :key="index" :step="index + 1" title="Title" :state="active === index ? 'active' : active > index ? 'done' : 'pending'">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      {{ panel.title }}
    </div>
    <p class="chi-epanel__text">
      {{ panel.content }}
    </p>
  </div>
  <div slot="done">
    Use this area to present<br />
    a read-only summary of what the user<br />
    entered or selected in step 1.<br />
    (e.g.) a package selection
  </div>
  <button slot="footerStart" class="chi-button" @click="active -= 1">Previous</button>
  <button slot="footerEnd" class="chi-button -primary" @click="active += 1">
    Continue
  </button>
  <div slot="change">
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Edit</button>
  </div>
</chi-vue-expansion-panel>

<!-- Data and Methods -->
data: {
  active: 0,
  panels: [
    {
      content: "Content for the panel in done state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in active state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in pending state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in disabled state",
      title: "Panel title"
    }
  ]
}
`,htmlblueprint:`<!-- JavaScript -->
<script>chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example__base"]'));<\/script>

<!-- HTML -->
<div class="chi-epanel -active" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">1.</div>
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 1.
          (e.g.) a package selection
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select a product package)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">2.</div>
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 2.
          (e.g.) shipping address
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to enter shipping address)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">3.</div>
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 3.
          (e.g.) installation date
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select installation date)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">4.</div>
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 4.
          (e.g.) payment method
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to enter payment method)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="done">Finish</button>
        </div>
      </div>
    </div>
  </div>
</div>
`}})})],T);const Z={class:"-mw--720 -mx--auto"},ee=["step","state"],te={slot:"active"},ne={class:"chi-epanel__subtitle"},ae={class:"chi-epanel__text"},ie={slot:"done"},se={slot:"footer"},le={slot:"change"},oe=["onClick"];function ce(t,e,s,l,a,o){const i=S,_=E,m=w;return h(),O(m,{title:"Base",id:"base",tabs:t.exampleTabs,padding:"-p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>e[2]||(e[2]=[n("p",{class:"-text"},[r("Group expansion panels using the attribute "),n("code",null,'data-chi-epanel-group="name-of-the-group"'),r(". This will enable panels to work together as a sequential form. When a panel is activated, the previous expanding panels will get the done state and the next will get the pending state.")],-1)])),example:v(()=>[n("div",Z,[(h(!0),u(A,null,N(t.panels,(d,c)=>(h(),u("chi-expansion-panel",{key:c,step:c+1,title:"Panel title",state:t.active===c?"active":t.active>c?"done":"pending"},[n("div",te,[n("div",ne,b(d.title),1),n("p",ae,b(d.content),1)]),n("div",ie,b(d.doneContent),1),n("div",se,[c?(h(),u("chi-button",{key:0,onClick:e[0]||(e[0]=y=>t.active-=1)},"Previous")):$("",!0),n("chi-button",{onClick:e[1]||(e[1]=y=>t.active+=1),color:"primary"},b(c+1===t.panels.length?"Finish":"Continue"),1)]),n("div",le,[n("chi-button",{onClick:y=>t.active=c,color:"primary",variant:"flat"},"Edit",8,oe)])],8,ee))),128))])]),"code-webcomponent":v(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":v(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":v(()=>[p(_),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const de=C(T,[["render",ce]]);var pe=Object.defineProperty,re=Object.getOwnPropertyDescriptor,ve=(t,e,s,l)=>{for(var a=l>1?void 0:l?re(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(l?i(e,s,a):i(a))||a);return l&&a&&pe(e,s,a),a};let D=class extends g{};D=ve([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],active:1,panels:[{state:"done",content:"Content for the panel in done state",title:"Done state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection"},{state:"active",content:"Content for the panel in active state",title:"Active state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) shipping address"},{state:"pending",content:"Content for the panel in pending state",title:"Pending state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) installation date"},{state:"disabled",content:"Content for the panel in disabled state",title:"Disabled state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.)"}],codeSnippets:{webcomponent:`<!-- Done state -->
<chi-expansion-panel step="1" title="Done panel" state="done">
  <div slot="done">
    Use this area to present
    a read-only summary of what the user
    entered or selected in step 1.
    (e.g.) a package selection
  </div>
  <div slot="change">
    <chi-button color="primary" variant="flat">
      Edit
    </chi-button>
  </div>
</chi-expansion-panel>
<!-- Active state -->
<chi-expansion-panel step="2" title="Active panel" state="active">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      Optional subtitle
    </div>
    <p class="chi-epanel__text">
      Content in expansion panel (e.g. a form to enter shipping address)
    </p>
  </div>
  <div slot="footer">
    <chi-button color="primary" variant="flat">
      Cancel
    </chi-button>
    <chi-button color="primary" variant="outline">
      Previous
    </chi-button>
    <chi-button color="primary">
      Continue
    </chi-button>
  </div>
</chi-expansion-panel>
<!-- Pending state -->
<chi-expansion-panel step="3" title="Pending panel"></chi-expansion-panel>
<!-- Disabled state -->
<chi-expansion-panel step="4" title="Disabled panel" state="disabled"></chi-expansion-panel>`,vue:`<chi-vue-expansion-panel v-for="(panel, index) in panels" :key="index" :step="index + 1" title="Title" :state="active === index ? 'active' : panel.state">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      {{ panel.title }}
    </div>
    <p class="chi-epanel__text">
      {{ panel.content }}
    </p>
  </div>
  <div slot="done">
    Use this area to present<br />
    a read-only summary of what the user<br />
    entered or selected in step 1.<br />
    (e.g.) a package selection
  </div>
  <button slot="footerStart" class="chi-button" @click="active = index - 1">Previous</button>
  <button slot="footerEnd" class="chi-button -primary" @click="active = index + 1">
    Continue
  </button>
  <div slot="change">
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Edit</button>
  </div>
</chi-vue-expansion-panel>

<!-- Data and Methods -->
data: {
  active: 1,
  panels: [
    {
      state: "done",
      content: "Content for the panel in done state",
      title: "Done state"
    },
    {
      state: "active",
      content: "Content for the panel in active state",
      title: "Active state"
    },
    {
      state: "pending",
      content: "Content for the panel in pending state",
      title: "Pending state"
    },
    {
      state: "disabled",
      content: "Content for the panel in disabled state",
      title: "Disabled state"
    }
  ]
}
`,htmlblueprint:`<!-- JavaScript -->
<script>chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example__state"]'));<\/script>
<!-- HTML -->
<!-- Done state -->
<div class="chi-epanel -done" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">1.</div>
    <div class="chi-epanel__title">Done state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 1.
          (e.g.) a package selection
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select a product package)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Active state -->
<div class="chi-epanel -active" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">2.</div>
    <div class="chi-epanel__title">Active state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 2.
          (e.g.) shipping address
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to enter shipping address)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -flat -primary">Cancel</button>
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Pending state -->
<div class="chi-epanel -pending" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">3.</div>
    <div class="chi-epanel__title">Pending state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 3.
          (e.g.) installation date
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select installation date)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="done">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Disabled state -->
<div class="chi-epanel -disabled" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">4.</div>
    <div class="chi-epanel__title">Disabled state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 4.
          (e.g.) payment method
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to enter payment method)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Finish</button>
        </div>
      </div>
    </div>
  </div>
</div>`}}),methods:{getState:(t,e,s)=>t==="disabled"?t:e===s?"active":e>s?"done":"pending"}})],D);const he={class:"-mw--720 -mx--auto"},ue=["step","title","state"],_e={slot:"active"},be={class:"chi-epanel__subtitle"},me={class:"chi-epanel__text"},ye={slot:"done"},fe={slot:"footer"},ge={key:0,color:"primary",variant:"flat"},xe={slot:"change"},Ce=["onClick"];function Pe(t,e,s,l,a,o){const i=S,_=E,m=w;return h(),O(m,{title:"States",id:"states",tabs:t.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>e[2]||(e[2]=[n("p",{class:"-text"},[r("Expansion panels have four states: "),n("code",null,"active"),r(", "),n("code",null,"pending"),r(", "),n("code",null,"done"),r(" and "),n("code",null,"disabled"),r(". When "),n("code",null,"pending"),r(" (default state), only the title is shown. When "),n("code",null,"active"),r(", panels expand to show content or forms. When "),n("code",null,"done"),r(", content or form data is presented in a read only state. When "),n("code",null,"disabled"),r(", a muted title is shown in a non-clickable state.")],-1),n("p",{class:"-text"},"The four examples below differ only by state. Thanks to the state support and two internal hiding utility classes we can represent the different states of the same content changing only the property.",-1),n("p",{class:"-text"},"An optional cancel button can also be included to exit the expansion panel workflow.",-1)])),example:v(()=>[n("div",he,[(h(!0),u(A,null,N(t.panels,(d,c)=>(h(),u("chi-expansion-panel",{key:c,step:c+1,title:d.title,state:t.getState(d.state,t.active,c)},[n("div",_e,[n("div",be,b(d.subtitle),1),n("p",me,b(d.content),1)]),n("div",ye,b(d.doneContent),1),n("div",fe,[d.state==="active"?(h(),u("chi-button",ge,"Cancel")):$("",!0),c?(h(),u("chi-button",{key:1,onClick:e[0]||(e[0]=y=>t.active-=1)},"Previous")):$("",!0),n("chi-button",{onClick:e[1]||(e[1]=y=>t.active+=1),color:"primary"},"Continue")]),n("div",xe,[n("chi-button",{onClick:y=>t.active=c,color:"primary",variant:"flat"},"Edit",8,Ce)])],8,ue))),128))])]),"code-webcomponent":v(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":v(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":v(()=>[p(_),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const $e=C(D,[["render",Pe]]);var Se=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,we=(t,e,s,l)=>{for(var a=l>1?void 0:l?Ee(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(l?i(e,s,a):i(a))||a);return l&&a&&Se(e,s,a),a};let U=class extends g{};U=we([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],active:1,panels:[{title:"Panel title",state:"done",content:"Content in expansion panel (e.g. a form to select a product package)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection"},{title:"Panel title",state:"active",content:"Content in expansion panel (e.g. a form to enter shipping address)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address"},{title:"Panel title",state:"pending",content:"Content in expansion panel (e.g. a form to select installation date)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date"},{title:"Panel title",state:"disabled",content:"Content in expansion panel (e.g. a form to enter payment method)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4. (e.g.) payment method"}],codeSnippets:{webcomponent:`<!-- Done state -->
<chi-expansion-panel step="1" title="Done panel" state="done" state-icon>
  <div slot="done">
    Use this area to present
    a read-only summary of what the user
    entered or selected in step 1.
    (e.g.) a package selection
  </div>
  <div slot="change">
    <chi-button color="primary" variant="flat">
      Edit
    </chi-button>
  </div>
</chi-expansion-panel>
<!-- Active state -->
<chi-expansion-panel step="2" title="Active panel" state="active" state-icon>
  <div slot="active">
    <div class="chi-epanel__subtitle">
      Optional subtitle
    </div>
    <p class="chi-epanel__text">
      Content in expansion panel (e.g. a form to enter shipping address)
    </p>
  </div>
  <div slot="footer">
    <chi-button color="primary" variant="flat">
      Cancel
    </chi-button>
    <chi-button color="primary" variant="outline">
      Previous
    </chi-button>
    <chi-button color="primary">
      Continue
    </chi-button>
  </div>
</chi-expansion-panel>
<!-- Pending state -->
<chi-expansion-panel step="3" title="Pending panel"></chi-expansion-panel state-icon>
<!-- Disabled state -->
<chi-expansion-panel step="4" title="Disabled panel" state="disabled"></chi-expansion-panel state-icon>`,vue:`<chi-vue-expansion-panel v-for="(panel, index) in panels" :key="index" :step="index + 1" title="Title"
            :state="active === index ? 'active' : active > index ? 'done' : 'pending'" :state-icon="true">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      {{ panel.title }}
    </div>
    <p class="chi-epanel__text">
      {{ panel.content }}
    </p>
  </div>
  <div slot="done">
    Use this area to present<br />
    a read-only summary of what the user<br />
    entered or selected in step 1.<br />
    (e.g.) a package selection
  </div>
  <button slot="footerStart" class="chi-button" @click="active -= 1">Previous</button>
  <button slot="footerEnd" class="chi-button -primary" @click="active += 1">
    Continue
  </button>
  <div slot="change">
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Edit</button>
  </div>
</chi-vue-expansion-panel>

<!-- Data and Methods -->
data: {
  active: 0,
  panels: [
    {
      content: "Content for the panel in done state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in active state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in pending state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in disabled state",
      title: "Panel title"
    }
  ]
}`,htmlblueprint:`<!-- JavaScript -->
<script>chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example__state"]'));<\/script>
<!-- HTML -->
<!-- Done state -->
<div class="chi-epanel -done -state-icon" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">1.</div>
    <div class="chi-epanel__title">Done state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 1.
          (e.g.) a package selection
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select a product package)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Active state -->
<div class="chi-epanel -active -state-icon" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">2.</div>
    <div class="chi-epanel__title">Active state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 2.
          (e.g.) shipping address
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to enter shipping address)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -flat -primary">Cancel</button>
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Pending state -->
<div class="chi-epanel -pending -state-icon" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">3.</div>
    <div class="chi-epanel__title">Pending state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 3.
          (e.g.) installation date
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select installation date)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="done">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Disabled state -->
<div class="chi-epanel -disabled -state-icon" data-chi-epanel-group="example__state">
  <div class="chi-epanel__header">
    <div class="chi-epanel__number">4.</div>
    <div class="chi-epanel__title">Disabled state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 4.
          (e.g.) payment method
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to enter payment method)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Finish</button>
        </div>
      </div>
    </div>
  </div>
</div>`}})})],U);const Oe={class:"-mw--720 -mx--auto"},Ae=["step","title","state"],Ne={slot:"active"},Te={class:"chi-epanel__subtitle"},De={class:"chi-epanel__text"},Ue={slot:"done"},je={slot:"footer"},ke={slot:"change"},Me=["onClick"];function Le(t,e,s,l,a,o){const i=S,_=E,m=w;return h(),O(m,{title:"State Icon",id:"state-icon",tabs:t.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>e[2]||(e[2]=[n("p",{class:"-text"},"Use state icon to render an icon that corresponds with the state of the panel.",-1)])),example:v(()=>[n("div",Oe,[(h(!0),u(A,null,N(t.panels,(d,c)=>(h(),u("chi-expansion-panel",{key:c,step:c+1,title:d.title,state:t.active===c?"active":t.active>c?"done":"pending","state-icon":!0},[n("div",Ne,[n("div",Te,b(d.subtitle),1),n("p",De,b(d.content),1)]),n("div",Ue,b(d.doneContent),1),n("div",je,[c?(h(),u("chi-button",{key:0,onClick:e[0]||(e[0]=y=>t.active-=1)},"Previous")):$("",!0),n("chi-button",{onClick:e[1]||(e[1]=y=>t.active+=1),color:"primary"},b(c+1===t.panels.length?"Finish":"Continue"),1)]),n("div",ke,[n("chi-button",{onClick:y=>t.active=c,color:"primary",variant:"flat"},"Edit",8,Me)])],8,Ae))),128))])]),"code-webcomponent":v(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":v(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":v(()=>[p(_),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ie=C(U,[["render",Le]]);var Be=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Ve=(t,e,s,l)=>{for(var a=l>1?void 0:l?Ge(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(l?i(e,s,a):i(a))||a);return l&&a&&Be(e,s,a),a};let j=class extends g{};j=Ve([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],active:0,panels:[{state:"done",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to select a product package)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection"},{state:"active",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to enter shipping address)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address"},{state:"pending",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to select installation date)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date"},{state:"disabled",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to enter payment method)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4. (e.g.) payment method"}],codeSnippets:{webcomponent:`<chi-expansion-panel title="Panel title" state="active">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      Optional subtitle 1
    </div>
    <p class="chi-epanel__text">
      Content in expansion panel (e.g. a form to select a product package)
    </p>
  </div>
  <div slot="footer">
    <chi-button color="primary">
      Continue
    </chi-button>
  </div>
</chi-expansion-panel>
<chi-expansion-panel title="Panel title"></chi-expansion-panel>
<chi-expansion-panel title="Panel title"></chi-expansion-panel>
<chi-expansion-panel title="Panel title"></chi-expansion-panel>`,vue:`<chi-vue-expansion-panel v-for="(panel, index) in panels" :key="index" title="Title" :state="active === index ? 'active' : active > index ? 'done' : 'pending'">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      {{ panel.title }}
    </div>
    <p class="chi-epanel__text">
      {{ panel.content }}
    </p>
  </div>
  <div slot="done">
    Use this area to present<br />
    a read-only summary of what the user<br />
    entered or selected in step 1.<br />
    (e.g.) a package selection
  </div>
  <button slot="footerStart" class="chi-button" @click="active -= 1">Previous</button>
  <button slot="footerEnd" class="chi-button -primary" @click="active += 1">
    Continue
  </button>
  <div slot="change">
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Edit</button>
  </div>
</chi-vue-expansion-panel>

<!-- Data and Methods -->
data: {
  active: 0,
  panels: [
    {
      content: "Content for the panel in done state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in active state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in pending state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in disabled state",
      title: "Panel title"
    }
  ]
}
`,htmlblueprint:`<!-- JavaScript -->
<script>chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example__no-step-number"]'));<\/script>

<!-- HTML -->
<div class="chi-epanel -no-step -active" data-chi-epanel-group="example__no-step-number">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse -ml--0">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 1.
          (e.g.) a package selection
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select a product package)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel -no-step" data-chi-epanel-group="example__no-step-number">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse -ml--0">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 2.
          (e.g.) shipping address
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to enter shipping address)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel -no-step" data-chi-epanel-group="example__no-step-number">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse -ml--0">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 3.
          (e.g.) installation date
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to select installation date)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel -no-step" data-chi-epanel-group="example__no-step-number">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Panel title</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse -ml--0">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 4.
          (e.g.) payment method
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content in expansion panel (e.g. a form to enter payment method)</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="done">Finish</button>
        </div>
      </div>
    </div>
  </div>
</div>`}})})],j);const Fe={class:"-mw--720 -mx--auto"},qe=["title","state"],He={slot:"active"},Je={class:"chi-epanel__subtitle"},We={class:"chi-epanel__text"},Xe={slot:"done"},ze={slot:"footer"},Ke={slot:"change"},Qe=["onClick"];function Re(t,e,s,l,a,o){const i=S,_=E,m=w;return h(),O(m,{title:"No step number",id:"no-step-number",tabs:t.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>e[2]||(e[2]=[n("p",{class:"-text"},"Step numbering is optional and can be easily omitted.",-1)])),example:v(()=>[n("div",Fe,[(h(!0),u(A,null,N(t.panels,(d,c)=>(h(),u("chi-expansion-panel",{key:c,title:d.title,state:t.active===c?"active":t.active>c?"done":"pending"},[n("div",He,[n("div",Je,b(d.subtitle),1),n("p",We,b(d.content),1)]),n("div",Xe,b(d.doneContent),1),n("div",ze,[c?(h(),u("chi-button",{key:0,onClick:e[0]||(e[0]=y=>t.active-=1)},"Previous")):$("",!0),n("chi-button",{onClick:e[1]||(e[1]=y=>t.active+=1),color:"primary"},b(c+1===t.panels.length?"Finish":"Continue"),1)]),n("div",Ke,[n("chi-button",{onClick:y=>t.active=c,color:"primary",variant:"flat"},"Edit",8,Qe)])],8,qe))),128))])]),"code-webcomponent":v(()=>[e[3]||(e[3]=n("div",{class:"chi-tab__description"},[r("Step numbering can be omitted by removing the "),n("code",null,"step"),r(" property.")],-1)),p(i,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":v(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":v(()=>[p(_),e[4]||(e[4]=n("div",{class:"p--text chi-tab__description"},[r("Step numbering can be omitted by applying "),n("code",null,"-no-step"),r(" to "),n("code",null,"chi-epanel"),r(" and removing "),n("code",null,"chi-epanel__number"),r(".")],-1)),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ye=C(j,[["render",Re]]);var Ze=Object.defineProperty,et=Object.getOwnPropertyDescriptor,tt=(t,e,s,l)=>{for(var a=l>1?void 0:l?et(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(l?i(e,s,a):i(a))||a);return l&&a&&Ze(e,s,a),a};let k=class extends g{};k=tt([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],active:1,panels:[{state:"done",content:"Content goes here",subtitle:"Optional subtitle",title:"Done State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1."},{state:"active",content:"Content goes here",subtitle:"Optional subtitle",title:"Active State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2."},{state:"pending",content:"Content goes here",subtitle:"Optional subtitle",title:"Pending State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3."},{state:"disabled",content:"Content goes here",subtitle:"Optional subtitle",title:"Disabled State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4."}],codeSnippets:{webcomponent:`<!-- Done state -->
<chi-expansion-panel title="Done panel" bordered state="done">
  <div slot="done">
    Use this area to present
    a read-only summary of what the user
    entered or selected in step 1.
  </div>
  <div slot="change">
    <chi-button color="primary" variant="flat">
      Edit
    </chi-button>
  </div>
</chi-expansion-panel>
<!-- Active state -->
<chi-expansion-panel title="Active panel" bordered state="active">
  <div slot="active">
    <div class="chi-epanel__subtitle">
      Optional subtitle
    </div>
    <p class="chi-epanel__text">
      Content goes here
    </p>
  </div>
  <div slot="footer">
    <chi-button color="primary">
      Continue
    </chi-button>
  </div>
</chi-expansion-panel>
<!-- Pending state -->
<chi-expansion-panel title="Pending panel" bordered></chi-expansion-panel>
<!-- Disabled state -->
<chi-expansion-panel title="Disabled panel" bordered state="disabled"></chi-expansion-panel>`,vue:`<chi-vue-expansion-panel v-for="(panel, index) in panels" :key="index" :step="index + 1" title="Title"
            :state="active === index ? 'active' : active > index ? 'done' : 'pending'" :bordered="true" >
  <div slot="active">
    <div class="chi-epanel__subtitle">
      {{ panel.title }}
    </div>
    <p class="chi-epanel__text">
      {{ panel.content }}
    </p>
  </div>
  <div slot="done">
    Use this area to present<br />
    a read-only summary of what the user<br />
    entered or selected in step 1.<br />
    (e.g.) a package selection
  </div>
  <button slot="footerStart" class="chi-button" @click="active -= 1">Previous</button>
  <button slot="footerEnd" class="chi-button -primary" @click="active += 1">
    Continue
  </button>
  <div slot="change">
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Edit</button>
  </div>
</chi-vue-expansion-panel>

<!-- Data and Methods -->
data: {
  active: 0,
  panels: [
    {
      content: "Content for the panel in done state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in active state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in pending state",
      title: "Panel title"
    },
    {
      content: "Content for the panel in disabled state",
      title: "Panel title"
    }
  ]
}
`,htmlblueprint:`<!-- JavaScript -->
<script>chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example__bordered"]'));<\/script>

<!-- HTML -->
<!-- Done state -->
<div class="chi-epanel -bordered -done" data-chi-epanel-group="example__bordered">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Done state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 1.
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Active state -->
<div class="chi-epanel -bordered -active" data-chi-epanel-group="example__bordered">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Active state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 2.
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Pending state -->
<div class="chi-epanel -bordered -pending" data-chi-epanel-group="example__bordered">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Pending state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 3.
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="done">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Disabled state -->
<div class="chi-epanel -bordered -disabled" data-chi-epanel-group="example__bordered">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title">Disabled state</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Use this area to present
          a read-only summary of what the user
          entered or selected in step 4.
        </div>
      </div>
    </div>
    <div class="chi-epanel__action -done--only">
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Edit</button>
    </div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Finish</button>
        </div>
      </div>
    </div>
  </div>
</div>`}}),methods:{getState:(t,e,s)=>t==="disabled"?"disabled":e===s?"active":e>s?"done":"pending"}})],k);const nt={class:"-mw--720 -mx--auto"},at=["title","state"],it={slot:"active"},st={class:"chi-epanel__subtitle"},lt={class:"chi-epanel__text"},ot={slot:"done"},ct={slot:"footer"},dt={slot:"change"},pt=["onClick"];function rt(t,e,s,l,a,o){const i=S,_=E,m=w;return h(),O(m,{title:"Bordered",id:"bordered",tabs:t.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>e[2]||(e[2]=[n("p",{class:"-text"},"Use bordered to apply borders to panels and contain them in card styled boxes.",-1)])),example:v(()=>[n("div",nt,[(h(!0),u(A,null,N(t.panels,(d,c)=>(h(),u("chi-expansion-panel",{key:c,title:d.title,state:t.getState(d.state,t.active,c),bordered:!0},[n("div",it,[n("div",st,b(d.subtitle),1),n("p",lt,b(d.content),1)]),n("div",ot,b(d.doneContent),1),n("div",ct,[c?(h(),u("chi-button",{key:0,onClick:e[0]||(e[0]=y=>t.active-=1)},"Previous")):$("",!0),n("chi-button",{onClick:e[1]||(e[1]=y=>t.active+=1),color:"primary"},"Continue")]),n("div",dt,[n("chi-button",{onClick:y=>t.active=c,color:"primary",variant:"flat"},"Edit",8,pt)])],8,at))),128))])]),"code-webcomponent":v(()=>[e[3]||(e[3]=n("div",{class:"chi-tab__description"},[r("To render bordered panels, apply the property "),n("code",null,"bordered"),r(".")],-1)),p(i,{lang:"html",code:t.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":v(()=>[p(i,{class:"html",lang:"html",code:t.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":v(()=>[p(_),e[4]||(e[4]=n("div",{class:"p--text chi-tab__description"},[r("To render bordered panels, apply the class "),n("code",null,"-bordered"),r(".")],-1)),p(i,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const vt=C(k,[["render",rt]]);var ht=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,_t=(t,e,s,l)=>{for(var a=l>1?void 0:l?ut(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(l?i(e,s,a):i(a))||a);return l&&a&&ht(e,s,a),a};let M=class extends g{constructor(){super(...arguments);P(this,"exampleTabs",[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{id:"vue",label:"Vue",disabled:!0},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);P(this,"panels",[{title:"Panel 1",isActive:!0},{title:"Panel 2",isActive:!1},{title:"Panel 3",isActive:!1},{title:"Panel 4",isActive:!1}]);P(this,"codeSnippets",{htmlblueprint:`<div class="chi-epanel -no-step -active" data-chi-epanel-group="example__free-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="toggle">Panel 1</div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel -no-step" data-chi-epanel-group="example__free-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="toggle">Panel 2</div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel -no-step" data-chi-epanel-group="example__free-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="toggle">Panel 3</div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel -no-step" data-chi-epanel-group="example__free-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="toggle">Panel 4</div>
  </div>
  <div class="chi-epanel__collapse">
    <div class="-active--only">
      <div class="chi-epanel__body">
        <div class="chi-epanel__content">
          <div class="chi-epanel__subtitle">Optional subtitle</div>
          <p class="chi-epanel__text">Content goes here</p>
        </div>
        <div class="chi-epanel__footer -justify-content--end">
          <button class="chi-button" data-chi-epanel-action="previous">Previous</button>
          <button class="chi-button -primary" data-chi-epanel-action="next">Continue</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- JavaScript -->
<script>
  chi.expansionPanel(
    document.querySelectorAll('[data-chi-epanel-group="example__free-mode"]'),
    {mode: 'free'}
  );
<\/script>`})}mounted(){const s=document.querySelectorAll('[data-chi-epanel-group="example__free-mode"]');chi.expansionPanel(s,{mode:"free"})}};M=_t([x({})],M);const bt={class:"-mw--720 -mx--auto"},mt={class:"chi-epanel__header"},yt={class:"chi-epanel__title","data-chi-epanel-action":"toggle"},ft={class:"chi-epanel__collapse"},gt={class:"-active--only"},xt={class:"chi-epanel__body"},Ct={class:"chi-epanel__footer -justify-content--end"},Pt={key:0,class:"chi-button","data-chi-epanel-action":"previous"},$t={key:1,class:"chi-button -primary","data-chi-epanel-action":"next"};function St(t,e,s,l,a,o){const i=E,_=S,m=w;return h(),O(m,{title:"Free mode",id:"free-mode",tabs:t.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>e[0]||(e[0]=[n("p",{class:"-text"},"In this mode there is no automated action triggered when an element activates, so you will need to manage all custom behavior.",-1)])),example:v(()=>[n("div",bt,[(h(!0),u(A,null,N(t.panels,(d,c)=>(h(),u("div",{class:G(["chi-epanel -no-step",d.isActive?"-active":""]),"data-chi-epanel-group":"example__free-mode"},[n("div",mt,[n("div",yt,b(d.title),1),e[1]||(e[1]=n("div",{class:"chi-epanel__action -done--only"},[n("button",{class:"chi-button -primary -flat","data-chi-epanel-action":"active"},"Edit")],-1))]),n("div",ft,[n("div",gt,[n("div",xt,[e[2]||(e[2]=n("div",{class:"chi-epanel__content"},[n("div",{class:"chi-epanel__subtitle"},"Optional subtitle"),n("p",{class:"chi-epanel__text"},"Content goes here")],-1)),n("div",Ct,[c!==0?(h(),u("button",Pt,"Previous")):$("",!0),c!==3?(h(),u("button",$t,"Continue")):$("",!0)])])])])],2))),256))])]),"code-htmlblueprint":v(()=>[p(i),p(_,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Et=C(M,[["render",St]]);var wt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,At=(t,e,s,l)=>{for(var a=l>1?void 0:l?Ot(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(l?i(e,s,a):i(a))||a);return l&&a&&wt(e,s,a),a};let L=class extends g{constructor(){super(...arguments);P(this,"exampleTabs",[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{id:"vue",label:"Vue",disabled:!0},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);P(this,"panels",[{title:"Panel 1",isDone:!0},{title:"Panel 2",isDone:!1},{title:"Panel 3",isDone:!1},{title:"Panel 4",isDone:!1}]);P(this,"codeSnippets",{htmlblueprint:`<div class="chi-epanel -done" data-chi-epanel-group="example__custom-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="done">Panel 1</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
          interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
          Aenean eu sapien eget ante placerat pretium a sit amet ante.
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__custom-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="done">Panel 2</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
          interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
          Aenean eu sapien eget ante placerat pretium a sit amet ante.
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__custom-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="done">Panel 3</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
          interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
          Aenean eu sapien eget ante placerat pretium a sit amet ante.
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chi-epanel" data-chi-epanel-group="example__custom-mode">
  <div class="chi-epanel__header">
    <div class="chi-epanel__title" data-chi-epanel-action="done">Panel 4</div>
    <div class="chi-epanel__content">
      <div class="chi-epanel__collapse">
        <div class="-done--only">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit
          interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla.
          Aenean eu sapien eget ante placerat pretium a sit amet ante.
        </div>
      </div>
    </div>
  </div>
</div>
<!-- JavaScript -->
<script>
chi.expansionPanel(
  document.querySelectorAll('[data-chi-epanel-group="example__custom-mode"]'),
  {
    mode: 'custom',
    changeHandler: function (newState, oldState, expansionPanel, panelGroup) {
      if (newState === chi.EXPANSION_PANEL_STATES.DONE) {
        panelGroup.expansion_panels.forEach(function (exPa) {
          if (exPa !== expansionPanel) {
            exPa.setState(chi.EXPANSION_PANEL_STATES.PENDING.NAME);
          }
        });
      }
    },
    customActions: {
      active: (expansionPanel, epGroup) =>
        expansionPanel.setState(chi.EXPANSION_PANEL_STATES.ACTIVE.NAME),
      done: (expansionPanel, epGroup) =>
        expansionPanel.setState(chi.EXPANSION_PANEL_STATES.DONE.NAME),
      pending: (expansionPanel, epGroup) =>
        expansionPanel.setState(chi.EXPANSION_PANEL_STATES.PENDING.NAME),
      toggle: (expansionPanel, epGroup) => {
        if (expansionPanel._state === chi.EXPANSION_PANEL_STATES.ACTIVE) {
          expansionPanel.setState(chi.EXPANSION_PANEL_STATES.PENDING.NAME);
        } else {
          expansionPanel.setState(chi.EXPANSION_PANEL_STATES.ACTIVE.NAME);
        }
      },
      next: (expansionPanel, epGroup) => {
        epGroup.reset(expansionPanel);
        epGroup.next().setState(chi.EXPANSION_PANEL_STATES.ACTIVE.NAME);
      },
      previous: (expansionPanel, epGroup) => {
        epGroup.reset(expansionPanel);
        epGroup.previous().setState(chi.EXPANSION_PANEL_STATES.ACTIVE.NAME);
      },
      disabled: (expansionPanel, epGroup) =>
        expansionPanel.setState(chi.EXPANSION_PANEL_STATES.DISABLED.NAME)
    }
  }
);
<\/script>`})}mounted(){const s=document.querySelectorAll('[data-chi-epanel-group="example__custom-mode"]');chi.expansionPanel(s,{mode:"custom",changeHandler:function(l,a,o,i){l===chi.EXPANSION_PANEL_STATES.DONE&&i.expansion_panels.forEach(function(_){_!==o&&_.setState(chi.EXPANSION_PANEL_STATES.PENDING.NAME)})}})}};L=At([x({})],L);const Nt={class:"-mw--720 -mx--auto"},Tt={class:"chi-epanel__header"},Dt={class:"chi-epanel__title","data-chi-epanel-action":"done"};function Ut(t,e,s,l,a,o){const i=E,_=S,m=w;return h(),O(m,{title:"Custom mode",id:"custom-mode",tabs:t.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>e[0]||(e[0]=[n("p",{class:"-text"},[r("Write your own custom mode by adding a handler for state changes of the expansion panels in the configuration, and writing your own functions for the "),n("code",null,"active"),r(", "),n("code",null,"done"),r(", "),n("code",null,"pending"),r(", "),n("code",null,"disabled"),r(", "),n("code",null,"toggle"),r(", "),n("code",null,"next"),r(" and "),n("code",null,"previous"),r(" actions. In the example, the component behaves similar to the accordion but alternates between "),n("code",null,"done"),r(" and "),n("code",null,"pending"),r(" states instead of "),n("code",null,"active"),r(" and "),n("code",null,"pending"),r(" states. The overridden action functions are for documentation purposes only because they clone the functionality of the default ones.")],-1)])),example:v(()=>[n("div",Nt,[(h(!0),u(A,null,N(t.panels,(d,c)=>(h(),u("div",{class:G(["chi-epanel",d.isDone?"-done":""]),"data-chi-epanel-group":"example__custom-mode"},[n("div",Tt,[n("div",Dt,b(d.title),1),e[1]||(e[1]=n("div",{class:"chi-epanel__content"},[n("div",{class:"chi-epanel__collapse"},[n("div",{class:"-done--only"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla. Aenean eu sapien eget ante placerat pretium a sit amet ante.")])],-1))])],2))),256))])]),"code-htmlblueprint":v(()=>[p(i),p(_,{lang:"html",code:t.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const jt=C(L,[["render",Ut]]);var kt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,Lt=(t,e,s,l)=>{for(var a=l>1?void 0:l?Mt(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(l?i(e,s,a):i(a))||a);return l&&a&&kt(e,s,a),a};let I=class extends g{};I=Lt([x({components:{BaseExample:de,States:$e,StateIcon:Ie,NoStep:Ye,Bordered:vt,FreeMode:Et,CustomMode:jt}})],I);function It(t,e,s,l,a,o){const i=f("BaseExample"),_=f("States"),m=f("StateIcon"),d=f("NoStep"),c=f("Bordered"),y=f("FreeMode"),V=f("CustomMode"),F=J;return h(),u("div",null,[e[0]||(e[0]=n("h2",null,"Examples",-1)),p(F,{placeholder:"loading..."},{default:v(()=>[p(i),p(_),p(m),p(d),p(c),p(y),p(V)]),_:1})])}const Bt=C(I,[["render",It]]);var Gt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Ft=(t,e,s,l)=>{for(var a=l>1?void 0:l?Vt(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(l?i(e,s,a):i(a))||a);return l&&a&&Gt(e,s,a),a};let B=class extends g{constructor(){super(...arguments);P(this,"pageTabs",z)}};B=Ft([x({components:{Accessibility:X,Examples:Bt,Properties:W}})],B);const qt={class:"chi-grid__container -pt--3"},Ht={class:"chi-tabs-panel -active",id:"examples"},Jt={class:"chi-tabs-panel",id:"properties"},Wt={class:"chi-tabs-panel",id:"accessibility"};function Xt(t,e,s,l,a,o){const i=K,_=f("Examples"),m=f("Properties"),d=f("Accessibility");return h(),u("div",null,[p(i,{title:"Expansion panel",description:"Expansion panels organize content into collapsible panels and reveal them to users in a progressive, step-by-step way.",tabs:t.pageTabs},null,8,["tabs"]),n("div",qt,[n("div",Ht,[p(_)]),n("div",Jt,[p(m)]),n("div",Wt,[p(d)])])])}const gn=C(B,[["render",Xt]]);export{gn as default};

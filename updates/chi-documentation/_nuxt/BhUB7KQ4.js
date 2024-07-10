var q=Object.defineProperty;var H=(e,n,s)=>n in e?q(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s;var P=(e,n,s)=>H(e,typeof n!="symbol"?n+"":n,s);import{V as f,N as x}from"./uJTUijt2.js";import{_ as S}from"./D8GK0F__.js";import{_ as w}from"./BLbnEGma.js";import{_ as O}from"./DKu8Jd2y.js";import{o as h,f as A,w as v,a as t,c as u,F as E,i as N,t as b,h as $,b as p,d as r,n as G,r as g}from"./B5CYXVwa.js";import{_ as C}from"./DlAUqK2U.js";import{_ as J}from"./C-hgEc7b.js";import W from"./iJR2GDyv.js";import X from"./BA_lIu7k.js";import{s as z}from"./2EwpEKcw.js";import{_ as K}from"./Be4hAolY.js";import"./CRFpwjAl.js";import"./drvuhYu1.js";import"./B2eUzt0t.js";import"./JA9l-2c8.js";import"./C9_DePFx.js";var Q=Object.defineProperty,R=Object.getOwnPropertyDescriptor,Y=(e,n,s,l)=>{for(var a=l>1?void 0:l?R(n,s):n,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(l?i(n,s,a):i(a))||a);return l&&a&&Q(n,s,a),a};let T=class extends f{};T=Y([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],active:0,panels:[{state:"done",content:"Content in expansion panel (e.g. a form to select a product package)",title:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection"},{state:"active",content:"Content in expansion panel (e.g. a form to enter shipping address)",title:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address"},{state:"pending",content:"Content in expansion panel (e.g. a form to select installation date)",title:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date"},{state:"disabled",content:"Content in expansion panel (e.g. a form to enter payment method)",title:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4. (e.g.) payment method"}],codeSnippets:{webcomponent:`<chi-expansion-panel step="1" title="Panel title" state="active">
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
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
`}})})],T);const Z=t("p",{class:"-text"},[r("Group expansion panels using the attribute "),t("code",null,'data-chi-epanel-group="name-of-the-group"'),r(". This will enable panels to work together as a sequential form. When a panel is activated, the previous expanding panels will get the done state and the next will get the pending state.")],-1),ee={class:"-mw--720 -mx--auto"},te=["step","state"],ne={slot:"active"},ae={class:"chi-epanel__subtitle"},ie={class:"chi-epanel__text"},se={slot:"done"},le={slot:"footer"},oe={slot:"change"},ce=["onClick"];function de(e,n,s,l,a,o){const i=S,_=w,m=O;return h(),A(m,{title:"Base",id:"base",tabs:e.exampleTabs,padding:"-p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>[Z]),example:v(()=>[t("div",ee,[(h(!0),u(E,null,N(e.panels,(d,c)=>(h(),u("chi-expansion-panel",{key:c,step:c+1,title:"Panel title",state:e.active===c?"active":e.active>c?"done":"pending"},[t("div",ne,[t("div",ae,b(d.title),1),t("p",ie,b(d.content),1)]),t("div",se,b(d.doneContent),1),t("div",le,[c?(h(),u("chi-button",{key:0,onClick:n[0]||(n[0]=y=>e.active-=1)},"Previous")):$("",!0),t("chi-button",{onClick:n[1]||(n[1]=y=>e.active+=1),color:"primary"},b(c+1===e.panels.length?"Finish":"Continue"),1)]),t("div",oe,[t("chi-button",{onClick:y=>e.active=c,color:"primary",variant:"flat"},"Change",8,ce)])],8,te))),128))])]),"code-webcomponent":v(()=>[p(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":v(()=>[p(i,{class:"html",lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":v(()=>[p(_),p(i,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const pe=C(T,[["render",de]]);var re=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,he=(e,n,s,l)=>{for(var a=l>1?void 0:l?ve(n,s):n,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(l?i(n,s,a):i(a))||a);return l&&a&&re(n,s,a),a};let D=class extends f{};D=he([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],active:1,panels:[{state:"done",content:"Content for the panel in done state",title:"Done state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection"},{state:"active",content:"Content for the panel in active state",title:"Active state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) shipping address"},{state:"pending",content:"Content for the panel in pending state",title:"Pending state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) installation date"},{state:"disabled",content:"Content for the panel in disabled state",title:"Disabled state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.)"}],codeSnippets:{webcomponent:`<!-- Done state -->
<chi-expansion-panel step="1" title="Done panel" state="done">
  <div slot="done">
    Use this area to present
    a read-only summary of what the user
    entered or selected in step 1.
    (e.g.) a package selection
  </div>
  <div slot="change">
    <chi-button color="primary" variant="flat">
      Change
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
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
</div>`}}),methods:{getState:(e,n,s)=>e==="disabled"?e:n===s?"active":n>s?"done":"pending"}})],D);const ue=t("p",{class:"-text"},[r("Expansion panels have four states: "),t("code",null,"active"),r(", "),t("code",null,"pending"),r(", "),t("code",null,"done"),r(" and "),t("code",null,"disabled"),r(". When "),t("code",null,"pending"),r(" (default state), only the title is shown. When "),t("code",null,"active"),r(", panels expand to show content or forms. When "),t("code",null,"done"),r(", content or form data is presented in a read only state. When "),t("code",null,"disabled"),r(", a muted title is shown in a non-clickable state.")],-1),_e=t("p",{class:"-text"},"The four examples below differ only by state. Thanks to the state support and two internal hiding utility classes we can represent the different states of the same content changing only the property.",-1),be=t("p",{class:"-text"},"An optional cancel button can also be included to exit the expansion panel workflow.",-1),me={class:"-mw--720 -mx--auto"},ye=["step","title","state"],ge={slot:"active"},fe={class:"chi-epanel__subtitle"},xe={class:"chi-epanel__text"},Ce={slot:"done"},Pe={slot:"footer"},$e={key:0,color:"primary",variant:"flat"},Se={slot:"change"},we=["onClick"];function Oe(e,n,s,l,a,o){const i=S,_=w,m=O;return h(),A(m,{title:"States",id:"states",tabs:e.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>[ue,_e,be]),example:v(()=>[t("div",me,[(h(!0),u(E,null,N(e.panels,(d,c)=>(h(),u("chi-expansion-panel",{key:c,step:c+1,title:d.title,state:e.getState(d.state,e.active,c)},[t("div",ge,[t("div",fe,b(d.subtitle),1),t("p",xe,b(d.content),1)]),t("div",Ce,b(d.doneContent),1),t("div",Pe,[d.state==="active"?(h(),u("chi-button",$e,"Cancel")):$("",!0),c?(h(),u("chi-button",{key:1,onClick:n[0]||(n[0]=y=>e.active-=1)},"Previous")):$("",!0),t("chi-button",{onClick:n[1]||(n[1]=y=>e.active+=1),color:"primary"},"Continue")]),t("div",Se,[t("chi-button",{onClick:y=>e.active=c,color:"primary",variant:"flat"},"Change",8,we)])],8,ye))),128))])]),"code-webcomponent":v(()=>[p(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":v(()=>[p(i,{class:"html",lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":v(()=>[p(_),p(i,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Ae=C(D,[["render",Oe]]);var Ee=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,Te=(e,n,s,l)=>{for(var a=l>1?void 0:l?Ne(n,s):n,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(l?i(n,s,a):i(a))||a);return l&&a&&Ee(n,s,a),a};let U=class extends f{};U=Te([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],active:1,panels:[{title:"Panel title",state:"done",content:"Content in expansion panel (e.g. a form to select a product package)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection"},{title:"Panel title",state:"active",content:"Content in expansion panel (e.g. a form to enter shipping address)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address"},{title:"Panel title",state:"pending",content:"Content in expansion panel (e.g. a form to select installation date)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date"},{title:"Panel title",state:"disabled",content:"Content in expansion panel (e.g. a form to enter payment method)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4. (e.g.) payment method"}],codeSnippets:{webcomponent:`<!-- Done state -->
<chi-expansion-panel step="1" title="Done panel" state="done" state-icon>
  <div slot="done">
    Use this area to present
    a read-only summary of what the user
    entered or selected in step 1.
    (e.g.) a package selection
  </div>
  <div slot="change">
    <chi-button color="primary" variant="flat">
      Change
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
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
</div>`}})})],U);const De=t("p",{class:"-text"},"Use state icon to render an icon that corresponds with the state of the panel.",-1),Ue={class:"-mw--720 -mx--auto"},je=["step","title","state"],ke={slot:"active"},Me={class:"chi-epanel__subtitle"},Le={class:"chi-epanel__text"},Ie={slot:"done"},Be={slot:"footer"},Ge={slot:"change"},Ve=["onClick"];function Fe(e,n,s,l,a,o){const i=S,_=w,m=O;return h(),A(m,{title:"State Icon",id:"state-icon",tabs:e.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>[De]),example:v(()=>[t("div",Ue,[(h(!0),u(E,null,N(e.panels,(d,c)=>(h(),u("chi-expansion-panel",{key:c,step:c+1,title:d.title,state:e.active===c?"active":e.active>c?"done":"pending","state-icon":!0},[t("div",ke,[t("div",Me,b(d.subtitle),1),t("p",Le,b(d.content),1)]),t("div",Ie,b(d.doneContent),1),t("div",Be,[c?(h(),u("chi-button",{key:0,onClick:n[0]||(n[0]=y=>e.active-=1)},"Previous")):$("",!0),t("chi-button",{onClick:n[1]||(n[1]=y=>e.active+=1),color:"primary"},b(c+1===e.panels.length?"Finish":"Continue"),1)]),t("div",Ge,[t("chi-button",{onClick:y=>e.active=c,color:"primary",variant:"flat"},"Change",8,Ve)])],8,je))),128))])]),"code-webcomponent":v(()=>[p(i,{class:"html",lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":v(()=>[p(i,{class:"html",lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":v(()=>[p(_),p(i,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const qe=C(U,[["render",Fe]]);var He=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,We=(e,n,s,l)=>{for(var a=l>1?void 0:l?Je(n,s):n,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(l?i(n,s,a):i(a))||a);return l&&a&&He(n,s,a),a};let j=class extends f{};j=We([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],active:0,panels:[{state:"done",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to select a product package)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection"},{state:"active",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to enter shipping address)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address"},{state:"pending",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to select installation date)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date"},{state:"disabled",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to enter payment method)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4. (e.g.) payment method"}],codeSnippets:{webcomponent:`<chi-expansion-panel title="Panel title" state="active">
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
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
</div>`}})})],j);const Xe=t("p",{class:"-text"},"Step numbering is optional and can be easily omitted.",-1),ze={class:"-mw--720 -mx--auto"},Ke=["title","state"],Qe={slot:"active"},Re={class:"chi-epanel__subtitle"},Ye={class:"chi-epanel__text"},Ze={slot:"done"},et={slot:"footer"},tt=t("div",{slot:"change"},null,-1),nt=["onClick"],at=t("div",{class:"chi-tab__description"},[r("Step numbering can be omitted by removing the "),t("code",null,"step"),r(" property.")],-1),it=t("div",{class:"p--text chi-tab__description"},[r("Step numbering can be omitted by applying "),t("code",null,"-no-step"),r(" to "),t("code",null,"chi-epanel"),r(" and removing "),t("code",null,"chi-epanel__number"),r(".")],-1);function st(e,n,s,l,a,o){const i=S,_=w,m=O;return h(),A(m,{title:"No step number",id:"no-step-number",tabs:e.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>[Xe]),example:v(()=>[t("div",ze,[(h(!0),u(E,null,N(e.panels,(d,c)=>(h(),u("chi-expansion-panel",{key:c,title:d.title,state:e.active===c?"active":e.active>c?"done":"pending"},[t("div",Qe,[t("div",Re,b(d.subtitle),1),t("p",Ye,b(d.content),1)]),t("div",Ze,b(d.doneContent),1),t("div",et,[c?(h(),u("chi-button",{key:0,onClick:n[0]||(n[0]=y=>e.active-=1)},"Previous")):$("",!0),t("chi-button",{onClick:n[1]||(n[1]=y=>e.active+=1),color:"primary"},b(c+1===e.panels.length?"Finish":"Continue"),1)]),tt,t("chi-button",{onClick:y=>e.active=c,color:"primary",variant:"flat"},"Change",8,nt)],8,Ke))),128))])]),"code-webcomponent":v(()=>[at,p(i,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":v(()=>[p(i,{class:"html",lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":v(()=>[p(_),it,p(i,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const lt=C(j,[["render",st]]);var ot=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,dt=(e,n,s,l)=>{for(var a=l>1?void 0:l?ct(n,s):n,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(l?i(n,s,a):i(a))||a);return l&&a&&ot(n,s,a),a};let k=class extends f{};k=dt([x({data:()=>({exampleTabs:[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],active:1,panels:[{state:"done",content:"Content goes here",subtitle:"Optional subtitle",title:"Done State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1."},{state:"active",content:"Content goes here",subtitle:"Optional subtitle",title:"Active State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2."},{state:"pending",content:"Content goes here",subtitle:"Optional subtitle",title:"Pending State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3."},{state:"disabled",content:"Content goes here",subtitle:"Optional subtitle",title:"Disabled State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4."}],codeSnippets:{webcomponent:`<!-- Done state -->
<chi-expansion-panel title="Done panel" bordered state="done">
  <div slot="done">
    Use this area to present
    a read-only summary of what the user
    entered or selected in step 1.
  </div>
  <div slot="change">
    <chi-button color="primary" variant="flat">
      Change
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
    <button class="chi-button -primary -flat" data-chi-epanel-action="active" @click="active = index">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
      <button class="chi-button -primary -flat" data-chi-epanel-action="active">Change</button>
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
</div>`}}),methods:{getState:(e,n,s)=>e==="disabled"?"disabled":n===s?"active":n>s?"done":"pending"}})],k);const pt=t("p",{class:"-text"},"Use bordered to apply borders to panels and contain them in card styled boxes.",-1),rt={class:"-mw--720 -mx--auto"},vt=["title","state"],ht={slot:"active"},ut={class:"chi-epanel__subtitle"},_t={class:"chi-epanel__text"},bt={slot:"done"},mt={slot:"footer"},yt={slot:"change"},gt=["onClick"],ft=t("div",{class:"chi-tab__description"},[r("To render bordered panels, apply the property "),t("code",null,"bordered"),r(".")],-1),xt=t("div",{class:"p--text chi-tab__description"},[r("To render bordered panels, apply the class "),t("code",null,"-bordered"),r(".")],-1);function Ct(e,n,s,l,a,o){const i=S,_=w,m=O;return h(),A(m,{title:"Bordered",id:"bordered",tabs:e.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>[pt]),example:v(()=>[t("div",rt,[(h(!0),u(E,null,N(e.panels,(d,c)=>(h(),u("chi-expansion-panel",{key:c,title:d.title,state:e.getState(d.state,e.active,c),bordered:!0},[t("div",ht,[t("div",ut,b(d.subtitle),1),t("p",_t,b(d.content),1)]),t("div",bt,b(d.doneContent),1),t("div",mt,[c?(h(),u("chi-button",{key:0,onClick:n[0]||(n[0]=y=>e.active-=1)},"Previous")):$("",!0),t("chi-button",{onClick:n[1]||(n[1]=y=>e.active+=1),color:"primary"},"Continue")]),t("div",yt,[t("chi-button",{onClick:y=>e.active=c,color:"primary",variant:"flat"},"Change",8,gt)])],8,vt))),128))])]),"code-webcomponent":v(()=>[ft,p(i,{lang:"html",code:e.codeSnippets.webcomponent},null,8,["code"])]),"code-vue":v(()=>[p(i,{class:"html",lang:"html",code:e.codeSnippets.vue},null,8,["code"])]),"code-htmlblueprint":v(()=>[p(_),xt,p(i,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Pt=C(k,[["render",Ct]]);var $t=Object.defineProperty,St=Object.getOwnPropertyDescriptor,wt=(e,n,s,l)=>{for(var a=l>1?void 0:l?St(n,s):n,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(l?i(n,s,a):i(a))||a);return l&&a&&$t(n,s,a),a};let M=class extends f{constructor(){super(...arguments);P(this,"exampleTabs",[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{id:"vue",label:"Vue",disabled:!0},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);P(this,"panels",[{title:"Panel 1",isActive:!0},{title:"Panel 2",isActive:!1},{title:"Panel 3",isActive:!1},{title:"Panel 4",isActive:!1}]);P(this,"codeSnippets",{htmlblueprint:`<div class="chi-epanel -no-step -active" data-chi-epanel-group="example__free-mode">
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
<\/script>`})}mounted(){const s=document.querySelectorAll('[data-chi-epanel-group="example__free-mode"]');chi.expansionPanel(s,{mode:"free"})}};M=wt([x({})],M);const Ot=t("p",{class:"-text"},"In this mode there is no automated action triggered when an element activates, so you will need to manage all custom behavior.",-1),At={class:"-mw--720 -mx--auto"},Et={class:"chi-epanel__header"},Nt={class:"chi-epanel__title","data-chi-epanel-action":"toggle"},Tt=t("div",{class:"chi-epanel__action -done--only"},[t("button",{class:"chi-button -primary -flat","data-chi-epanel-action":"active"},"Change")],-1),Dt={class:"chi-epanel__collapse"},Ut={class:"-active--only"},jt={class:"chi-epanel__body"},kt=t("div",{class:"chi-epanel__content"},[t("div",{class:"chi-epanel__subtitle"},"Optional subtitle"),t("p",{class:"chi-epanel__text"},"Content goes here")],-1),Mt={class:"chi-epanel__footer -justify-content--end"},Lt={key:0,class:"chi-button","data-chi-epanel-action":"previous"},It={key:1,class:"chi-button -primary","data-chi-epanel-action":"next"};function Bt(e,n,s,l,a,o){const i=w,_=S,m=O;return h(),A(m,{title:"Free mode",id:"free-mode",tabs:e.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>[Ot]),example:v(()=>[t("div",At,[(h(!0),u(E,null,N(e.panels,(d,c)=>(h(),u("div",{class:G(["chi-epanel -no-step",d.isActive?"-active":""]),"data-chi-epanel-group":"example__free-mode"},[t("div",Et,[t("div",Nt,b(d.title),1),Tt]),t("div",Dt,[t("div",Ut,[t("div",jt,[kt,t("div",Mt,[c!==0?(h(),u("button",Lt,"Previous")):$("",!0),c!==3?(h(),u("button",It,"Continue")):$("",!0)])])])])],2))),256))])]),"code-htmlblueprint":v(()=>[p(i),p(_,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Gt=C(M,[["render",Bt]]);var Vt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,qt=(e,n,s,l)=>{for(var a=l>1?void 0:l?Ft(n,s):n,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(l?i(n,s,a):i(a))||a);return l&&a&&Vt(n,s,a),a};let L=class extends f{constructor(){super(...arguments);P(this,"exampleTabs",[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{id:"vue",label:"Vue",disabled:!0},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}]);P(this,"panels",[{title:"Panel 1",isDone:!0},{title:"Panel 2",isDone:!1},{title:"Panel 3",isDone:!1},{title:"Panel 4",isDone:!1}]);P(this,"codeSnippets",{htmlblueprint:`<div class="chi-epanel -done" data-chi-epanel-group="example__custom-mode">
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
<\/script>`})}mounted(){const s=document.querySelectorAll('[data-chi-epanel-group="example__custom-mode"]');chi.expansionPanel(s,{mode:"custom",changeHandler:function(l,a,o,i){l===chi.EXPANSION_PANEL_STATES.DONE&&i.expansion_panels.forEach(function(_){_!==o&&_.setState(chi.EXPANSION_PANEL_STATES.PENDING.NAME)})}})}};L=qt([x({})],L);const Ht=t("p",{class:"-text"},[r("Write your own custom mode by adding a handler for state changes of the expansion panels in the configuration, and writing your own functions for the "),t("code",null,"active"),r(", "),t("code",null,"done"),r(", "),t("code",null,"pending"),r(", "),t("code",null,"disabled"),r(", "),t("code",null,"toggle"),r(", "),t("code",null,"next"),r(" and "),t("code",null,"previous"),r(" actions. In the example, the component behaves similar to the accordion but alternates between "),t("code",null,"done"),r(" and "),t("code",null,"pending"),r(" states instead of "),t("code",null,"active"),r(" and "),t("code",null,"pending"),r(" states. The overridden action functions are for documentation purposes only because they clone the functionality of the default ones.")],-1),Jt={class:"-mw--720 -mx--auto"},Wt={class:"chi-epanel__header"},Xt={class:"chi-epanel__title","data-chi-epanel-action":"done"},zt=t("div",{class:"chi-epanel__content"},[t("div",{class:"chi-epanel__collapse"},[t("div",{class:"-done--only"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla. Aenean eu sapien eget ante placerat pretium a sit amet ante.")])],-1);function Kt(e,n,s,l,a,o){const i=w,_=S,m=O;return h(),A(m,{title:"Custom mode",id:"custom-mode",tabs:e.exampleTabs,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":v(()=>[Ht]),example:v(()=>[t("div",Jt,[(h(!0),u(E,null,N(e.panels,(d,c)=>(h(),u("div",{class:G(["chi-epanel",d.isDone?"-done":""]),"data-chi-epanel-group":"example__custom-mode"},[t("div",Wt,[t("div",Xt,b(d.title),1),zt])],2))),256))])]),"code-htmlblueprint":v(()=>[p(i),p(_,{lang:"html",code:e.codeSnippets.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}const Qt=C(L,[["render",Kt]]);var Rt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Zt=(e,n,s,l)=>{for(var a=l>1?void 0:l?Yt(n,s):n,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(l?i(n,s,a):i(a))||a);return l&&a&&Rt(n,s,a),a};let I=class extends f{};I=Zt([x({components:{BaseExample:pe,States:Ae,StateIcon:qe,NoStep:lt,Bordered:Pt,FreeMode:Gt,CustomMode:Qt}})],I);const en=t("h2",null,"Examples",-1);function tn(e,n,s,l,a,o){const i=g("BaseExample"),_=g("States"),m=g("StateIcon"),d=g("NoStep"),c=g("Bordered"),y=g("FreeMode"),V=g("CustomMode"),F=J;return h(),u("div",null,[en,p(F,{placeholder:"loading..."},{default:v(()=>[p(i),p(_),p(m),p(d),p(c),p(y),p(V)]),_:1})])}const nn=C(I,[["render",tn]]);var an=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,ln=(e,n,s,l)=>{for(var a=l>1?void 0:l?sn(n,s):n,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(l?i(n,s,a):i(a))||a);return l&&a&&an(n,s,a),a};let B=class extends f{constructor(){super(...arguments);P(this,"pageTabs",z)}};B=ln([x({components:{Accessibility:X,Examples:nn,Properties:W}})],B);const on={class:"chi-grid__container -pt--3"},cn={class:"chi-tabs-panel -active",id:"examples"},dn={class:"chi-tabs-panel",id:"properties"},pn={class:"chi-tabs-panel",id:"accessibility"};function rn(e,n,s,l,a,o){const i=K,_=g("Examples"),m=g("Properties"),d=g("Accessibility");return h(),u("div",null,[p(i,{title:"Expansion panel",description:"Expansion panels organize content into collapsible panels and reveal them to users in a progressive, step-by-step way.",tabs:e.pageTabs},null,8,["tabs"]),t("div",on,[t("div",cn,[p(_)]),t("div",dn,[p(m)]),t("div",pn,[p(d)])])])}const Ln=C(B,[["render",rn]]);export{Ln as default};

import{_ as D}from"./CcrI_bxZ.js";import{_ as k}from"./Di-ELn2D.js";import{_ as w}from"./D1M_ALV-.js";import{_ as S}from"./Cx7J_iiN.js";import{e as P,r as O,o as d,f as A,w as l,a as e,d as o,c as v,i as N,t as m,l as x,F as $,b as c,z as T,n as U}from"./CRBsHPO5.js";const I={class:"-mw--720 -mx--auto"},L=["step","title","state"],j={slot:"active"},M={class:"chi-epanel__subtitle"},G={class:"chi-epanel__text -mb--0"},q={slot:"done"},B={slot:"footer"},H=["onClick"],J=["onClick"],V={key:0,slot:"change"},W=["onClick"],X=P({__name:"_base",setup(E){const y=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],i=O([{state:"active",content:"Content in expansion panel (e.g. a form to select a product package)",title:"Panel title",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection",completed:!1},{state:"pending",content:"Content in expansion panel (e.g. a form to enter shipping address)",title:"Panel title",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address",completed:!1},{state:"pending",content:"Content in expansion panel (e.g. a form to select installation date)",title:"Panel title",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date",completed:!1},{state:"pending",content:"Content in expansion panel (e.g. a form to enter payment method)",title:"Panel title",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4. (e.g.) payment method",completed:!1}]),r={webcomponent:`<chi-expansion-panel step="1" title="Panel title" state="active">
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
`,vue:`<chi-vue-expansion-panel 
  v-for="(panel, index) in panels" 
  :key="index" 
  :step="index + 1" 
  title="Title" 
  :state="active === index ? 'active' : active > index ? 'done' : 'pending'"
>
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
`},h=(t,n)=>{i.value.forEach((a,b)=>{a.state==="active"&&(a.state=a.completed?"done":"pending"),b===t&&(a.state=n)})},u=t=>{i.value[t].state="done",i.value[t].completed=!0;const n=i.value.findIndex(a=>a.state==="pending");n!==-1&&h(n,"active")},g=t=>h(t,"active"),_=t=>h(t-1,"active");return(t,n)=>{const a=k,b=w,f=S;return d(),A(f,{title:"Base",id:"base",tabs:y,padding:"-p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},[o("Group expansion panels using the attribute "),e("code",null,'data-chi-epanel-group="name-of-the-group"'),o(". This will enable panels to work together as a sequential form. When a panel is activated, the previous expanding panels will get the done state and the next will get the pending state.")],-1)])),example:l(()=>[e("div",I,[(d(!0),v($,null,N(i.value,(s,p)=>(d(),v("chi-expansion-panel",{key:p,step:p+1,title:s.title,state:s.state},[e("div",j,[e("div",M,m(s.subtitle),1),e("p",G,m(s.content),1)]),e("div",q,m(s.doneContent),1),e("div",B,[p?(d(),v("chi-button",{key:0,onClick:C=>_(p)},"Previous",8,H)):x("",!0),e("chi-button",{onClick:C=>u(p),color:"primary"},m(p+1===i.value.length?"Finish":"Continue"),9,J)]),s.state==="done"?(d(),v("div",V,[e("chi-button",{onClick:C=>g(p),color:"primary",variant:"flat"},"Edit",8,W)])):x("",!0)],8,L))),128))])]),"code-webcomponent":l(()=>[c(a,{class:"html",lang:"html",code:r.webcomponent},null,8,["code"])]),"code-vue":l(()=>[c(a,{class:"html",lang:"html",code:r.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[c(b),c(a,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),F={class:"-mw--720 -mx--auto"},z=["step","title","state"],K={slot:"active"},Q={class:"chi-epanel__subtitle"},R={class:"chi-epanel__text -mb--0"},Y={slot:"done"},Z={slot:"footer"},ee=["onClick"],te=["onClick"],ne={key:0,slot:"change"},ae=["onClick"],ie=P({__name:"_states",setup(E){const y=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:`<!-- Done state -->
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
</div>`},r=O([{state:"done",content:"Content in expansion panel (e.g. a form to select a product package)",title:"Done state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection.",completed:!1},{state:"active",content:"Content in expansion panel (e.g. a form to enter shipping address)",title:"Active state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address",completed:!1},{state:"pending",content:"Content in expansion panel (e.g. a form to select installation date)",title:"Pending state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date",completed:!1},{state:"disabled",content:"Content for the panel in disabled state",title:"Disabled state",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4.",completed:!1}]),h=(t,n)=>{r.value.forEach((a,b)=>{a.state==="active"&&(a.state=a.completed?"done":"pending"),b===t&&(a.state=n)})},u=t=>{r.value[t].state="done",r.value[t].completed=!0;const n=r.value.findIndex(a=>a.state==="pending");n!==-1&&h(n,"active")},g=t=>h(t,"active"),_=t=>h(t-1,"active");return(t,n)=>{const a=k,b=w,f=S;return d(),A(f,{title:"States",id:"states",tabs:y,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},[o("Expansion panels have four states: "),e("code",null,"active"),o(", "),e("code",null,"pending"),o(", "),e("code",null,"done"),o(" and "),e("code",null,"disabled"),o(". When "),e("code",null,"pending"),o(" (default state), only the title is shown. When "),e("code",null,"active"),o(", panels expand to show content or forms. When "),e("code",null,"done"),o(", content or form data is presented in a read only state. When "),e("code",null,"disabled"),o(", a muted title is shown in a non-clickable state.")],-1),e("p",{class:"-text"},"The four examples below differ only by state. Thanks to the state support and two internal hiding utility classes we can represent the different states of the same content changing only the property.",-1),e("p",{class:"-text"},"An optional cancel button can also be included to exit the expansion panel workflow.",-1)])),example:l(()=>[e("div",F,[(d(!0),v($,null,N(r.value,(s,p)=>(d(),v("chi-expansion-panel",{key:p,step:p+1,title:s.title,state:s.state},[e("div",K,[e("div",Q,m(s.subtitle),1),e("p",R,m(s.content),1)]),e("div",Y,m(s.doneContent),1),e("div",Z,[n[1]||(n[1]=e("chi-button",{color:"primary",variant:"flat"},"Cancel",-1)),p?(d(),v("chi-button",{key:0,onClick:C=>_(p)},"Previous",8,ee)):x("",!0),e("chi-button",{onClick:C=>u(p),color:"primary"},"Continue",8,te)]),s.state==="done"?(d(),v("div",ne,[e("chi-button",{onClick:C=>g(p),color:"primary",variant:"flat"},"Edit",8,ae)])):x("",!0)],8,z))),128))])]),"code-webcomponent":l(()=>[c(a,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-vue":l(()=>[c(a,{class:"html",lang:"html",code:i.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[c(b),c(a,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),se={class:"-mw--720 -mx--auto"},le=["step","title","state"],oe={slot:"active"},ce={class:"chi-epanel__subtitle"},de={class:"chi-epanel__text -mb--0"},pe={slot:"done"},re={slot:"footer"},ve=["onClick"],he=["onClick"],ue={key:0,slot:"change"},_e=["onClick"],me=P({__name:"_state_icon",setup(E){const y=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],i=O([{title:"Panel title",state:"done",content:"Content in expansion panel (e.g. a form to select a product package)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection",completed:!0},{title:"Panel title",state:"active",content:"Content in expansion panel (e.g. a form to enter shipping address)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address",completed:!1},{title:"Panel title",state:"pending",content:"Content in expansion panel (e.g. a form to select installation date)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date",completed:!1},{title:"Panel title",state:"pending",content:"Content in expansion panel (e.g. a form to enter payment method)",subtitle:"Optional subtitle",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4. (e.g.) payment method",completed:!1}]),r={webcomponent:`<chi-expansion-panel step="1" title="Panel title" state="active" state-icon>
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
<chi-expansion-panel step="2" title="Panel title" state-icon></chi-expansion-panel>
<chi-expansion-panel step="3" title="Panel title" state-icon></chi-expansion-panel>
<chi-expansion-panel step="4" title="Panel title" state-icon></chi-expansion-panel>`,vue:`<chi-vue-expansion-panel v-for="(panel, index) in panels" :key="index" :step="index + 1" title="Title"
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
<script>chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="example__base"]'));<\/script>

<!-- HTML -->
<div class="chi-epanel -state-icon -active" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <i class="chi-icon -icon--success icon-circle-check -sm--2 -state"></i>
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
<div class="chi-epanel -state-icon" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <i class="chi-icon -icon--success icon-circle-check -sm--2 -state"></i>
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
<div class="chi-epanel -state-icon" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <i class="chi-icon -icon--success icon-circle-check -sm--2 -state"></i>
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
<div class="chi-epanel -state-icon" data-chi-epanel-group="example__base">
  <div class="chi-epanel__header">
    <i class="chi-icon -icon--success icon-circle-check -sm--2 -state"></i>
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
`},h=_=>{i.value[_].state="done",i.value[_].completed=!0;const t=i.value.findIndex(n=>n.state==="pending");i.value=i.value.map(n=>({...n,state:n.state==="active"?"pending":n.state})),t!==-1&&(i.value[t].state="active")},u=_=>{i.value=i.value.map(t=>({...t,state:t.state==="active"?t.completed?"done":"pending":t.state})),i.value[_].state="active"},g=_=>{i.value=i.value.map(t=>({...t,state:t.state==="active"?t.completed?"done":"pending":t.state})),i.value[_-1].state="active"};return(_,t)=>{const n=k,a=w,b=S;return d(),A(b,{title:"State Icon",id:"state-icon",tabs:y,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":l(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Use state icon to render an icon that corresponds with the state of the panel.",-1)])),example:l(()=>[e("div",se,[(d(!0),v($,null,N(i.value,(f,s)=>(d(),v("chi-expansion-panel",{key:s,step:s+1,title:f.title,state:f.state,"state-icon":""},[e("div",oe,[e("div",ce,m(f.subtitle),1),e("p",de,m(f.content),1)]),e("div",pe,m(f.doneContent),1),e("div",re,[s?(d(),v("chi-button",{key:0,onClick:p=>g(s)},"Previous",8,ve)):x("",!0),e("chi-button",{onClick:p=>h(s),color:"primary"},m(s+1===i.value.length?"Finish":"Continue"),9,he)]),f.state==="done"?(d(),v("div",ue,[e("chi-button",{onClick:p=>u(s),color:"primary",variant:"flat"},"Edit",8,_e)])):x("",!0)],8,le))),128))])]),"code-webcomponent":l(()=>[c(n,{class:"html",lang:"html",code:r.webcomponent},null,8,["code"])]),"code-vue":l(()=>[c(n,{class:"html",lang:"html",code:r.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[c(a),c(n,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),be={class:"-mw--720 -mx--auto"},ye=["title","state"],ge={slot:"active"},fe={class:"chi-epanel__subtitle"},xe={class:"chi-epanel__text -mb--0"},Ce={slot:"done"},Pe={slot:"footer"},Ee=["onClick"],ke=["onClick"],we={key:0,slot:"change"},Se=["onClick"],Ae=P({__name:"_no-step",setup(E){const y=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],i=O([{state:"active",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to select a product package)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1. (e.g.) a package selection",completed:!1},{state:"pending",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to enter shipping address)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2. (e.g.) shipping address",completed:!1},{state:"pending",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to select installation date)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3. (e.g.) installation date",completed:!1},{state:"pending",subtitle:"Optional subtitle",title:"Panel title",content:"Content in expansion panel (e.g. a form to enter payment method)",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4. (e.g.) payment method",completed:!1}]),r={webcomponent:`<chi-expansion-panel title="Panel title" state="active">
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
</div>`},h=(t,n)=>{i.value.forEach((a,b)=>{a.state==="active"&&(a.state=a.completed?"done":"pending"),b===t&&(a.state=n)})},u=t=>{i.value[t].state="done",i.value[t].completed=!0;const n=i.value.findIndex(a=>a.state==="pending");n!==-1&&h(n,"active")},g=t=>h(t,"active"),_=t=>h(t-1,"active");return(t,n)=>{const a=k,b=w,f=S;return d(),A(f,{title:"No step number",id:"no-step-number",tabs:y,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},"Step numbering is optional and can be easily omitted.",-1)])),example:l(()=>[e("div",be,[(d(!0),v($,null,N(i.value,(s,p)=>(d(),v("chi-expansion-panel",{key:p,title:s.title,state:s.state},[e("div",ge,[e("div",fe,m(s.subtitle),1),e("p",xe,m(s.content),1)]),e("div",Ce,m(s.doneContent),1),e("div",Pe,[p?(d(),v("chi-button",{key:0,onClick:C=>_(p)},"Previous",8,Ee)):x("",!0),e("chi-button",{onClick:C=>u(p),color:"primary"},m(p+1===i.value.length?"Finish":"Continue"),9,ke)]),s.state==="done"?(d(),v("div",we,[e("chi-button",{onClick:C=>g(p),color:"primary",variant:"flat"},"Edit",8,Se)])):x("",!0)],8,ye))),128))])]),"code-webcomponent":l(()=>[n[1]||(n[1]=e("div",{class:"chi-tab__description"},[o("Step numbering can be omitted by removing the "),e("code",null,"step"),o(" property.")],-1)),c(a,{lang:"html",code:r.webcomponent},null,8,["code"])]),"code-vue":l(()=>[c(a,{class:"html",lang:"html",code:r.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[c(b,null,{default:l(()=>n[2]||(n[2]=[o("Step numbering can be omitted by applying "),e("code",null,"-no-step",-1),o(" to "),e("code",null,"chi-epanel",-1),o(" and removing "),e("code",null,"chi-epanel__number",-1),o(".")])),_:1}),c(a,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),Ne={class:"-mw--720 -mx--auto"},$e=["title","state"],Oe={slot:"active"},Te={class:"chi-epanel__subtitle"},Ue={class:"chi-epanel__text -mb--0"},De={slot:"done"},Ie={slot:"footer"},Le=["onClick"],je=["onClick"],Me={key:0,slot:"change"},Ge=["onClick"],qe=P({__name:"_bordered",setup(E){const y=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"vue",label:"Vue"},{id:"htmlblueprint",label:"HTML Blueprint"}],i=O([{state:"done",content:"Content goes here",subtitle:"Optional subtitle",title:"Done State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 1.",completed:!1},{state:"active",content:"Content goes here",subtitle:"Optional subtitle",title:"Active State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 2.",completed:!1},{state:"pending",content:"Content goes here",subtitle:"Optional subtitle",title:"Pending State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 3.",completed:!1},{state:"disabled",content:"Content goes here",subtitle:"Optional subtitle",title:"Disabled State",doneContent:"Use this area to present a read-only summary of what the user entered or selected in step 4.",completed:!1}]),r={webcomponent:`<!-- Done state -->
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
</div>`},h=(t,n)=>{i.value.forEach((a,b)=>{a.state==="active"&&(a.state=a.completed?"done":"pending"),b===t&&(a.state=n)})},u=t=>{i.value[t].state="done",i.value[t].completed=!0;const n=i.value.findIndex(a=>a.state==="pending");n!==-1&&h(n,"active")},g=t=>h(t,"active"),_=t=>h(t-1,"active");return(t,n)=>{const a=k,b=w,f=S;return d(),A(f,{title:"Bordered",id:"bordered",tabs:y,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":l(()=>n[0]||(n[0]=[e("p",{class:"-text"},"Use bordered to apply borders to panels and contain them in card styled boxes.",-1)])),example:l(()=>[e("div",Ne,[(d(!0),v($,null,N(i.value,(s,p)=>(d(),v("chi-expansion-panel",{key:p,bordered:"",title:s.title,state:s.state},[e("div",Oe,[e("div",Te,m(s.subtitle),1),e("p",Ue,m(s.content),1)]),e("div",De,m(s.doneContent),1),e("div",Ie,[p?(d(),v("chi-button",{key:0,onClick:C=>_(p)},"Previous",8,Le)):x("",!0),e("chi-button",{onClick:C=>u(p),color:"primary"},m(p+1===i.value.length?"Finish":"Continue"),9,je)]),s.state==="done"?(d(),v("div",Me,[e("chi-button",{onClick:C=>g(p),color:"primary",variant:"flat"},"Edit",8,Ge)])):x("",!0)],8,$e))),128))])]),"code-webcomponent":l(()=>[n[1]||(n[1]=e("div",{class:"chi-tab__description"},[o("To render bordered panels, apply the property "),e("code",null,"bordered"),o(".")],-1)),c(a,{lang:"html",code:r.webcomponent},null,8,["code"])]),"code-vue":l(()=>[c(a,{class:"html",lang:"html",code:r.vue},null,8,["code"])]),"code-htmlblueprint":l(()=>[c(b,null,{default:l(()=>n[2]||(n[2]=[o("To render bordered panels, apply the class "),e("code",null,"-bordered",-1),o(".")])),_:1}),c(a,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),Be={class:"-mw--720 -mx--auto"},He={class:"chi-epanel__header"},Je={class:"chi-epanel__title","data-chi-epanel-action":"toggle"},Ve={class:"chi-epanel__collapse"},We={class:"-active--only"},Xe={class:"chi-epanel__body"},Fe={class:"chi-epanel__footer -justify-content--end"},ze={key:0,class:"chi-button","data-chi-epanel-action":"previous"},Ke={key:1,class:"chi-button -primary","data-chi-epanel-action":"next"},Qe=P({__name:"_free-mode",setup(E){const y=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i=[{title:"Panel 1",isActive:!0},{title:"Panel 2",isActive:!1},{title:"Panel 3",isActive:!1},{title:"Panel 4",isActive:!1}],r={htmlblueprint:`<div class="chi-epanel -no-step -active" data-chi-epanel-group="example__free-mode">
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
<\/script>`};return T(()=>{const h=document.querySelectorAll('[data-chi-epanel-group="example__free-mode"]');chi.expansionPanel(h,{mode:"free"})}),(h,u)=>{const g=w,_=k,t=S;return d(),A(t,{title:"Free mode",id:"free-mode",tabs:y,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":l(()=>u[0]||(u[0]=[e("p",{class:"-text"},"In this mode there is no automated action triggered when an element activates, so you will need to manage all custom behavior.",-1)])),example:l(()=>[e("div",Be,[(d(),v($,null,N(i,(n,a)=>e("div",{class:U(["chi-epanel -no-step",n.isActive?"-active":""]),"data-chi-epanel-group":"example__free-mode"},[e("div",He,[e("div",Je,m(n.title),1),u[1]||(u[1]=e("div",{class:"chi-epanel__action -done--only"},[e("button",{class:"chi-button -primary -flat","data-chi-epanel-action":"active"},"Edit")],-1))]),e("div",Ve,[e("div",We,[e("div",Xe,[u[2]||(u[2]=e("div",{class:"chi-epanel__content"},[e("div",{class:"chi-epanel__subtitle"},"Optional subtitle"),e("p",{class:"chi-epanel__text"},"Content goes here")],-1)),e("div",Fe,[a!==0?(d(),v("button",ze,"Previous")):x("",!0),a!==3?(d(),v("button",Ke,"Continue")):x("",!0)])])])])],2)),64))])]),"code-htmlblueprint":l(()=>[c(g),c(_,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),Re={class:"-mw--720 -mx--auto"},Ye={class:"chi-epanel__header"},Ze={class:"chi-epanel__title","data-chi-epanel-action":"done"},et=P({__name:"_custom-mode",setup(E){const y=[{active:!1,id:"webcomponent",label:"Web Component",disabled:!0},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i=[{title:"Panel 1",isDone:!0},{title:"Panel 2",isDone:!1},{title:"Panel 3",isDone:!1},{title:"Panel 4",isDone:!1}],r={htmlblueprint:`<div class="chi-epanel -done" data-chi-epanel-group="example__custom-mode">
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
<\/script>`};return T(()=>{const h=document.querySelectorAll('[data-chi-epanel-group="example__custom-mode"]');chi.expansionPanel(h,{mode:"custom",changeHandler:function(u,g,_,t){u===chi.EXPANSION_PANEL_STATES.DONE&&t.expansion_panels.forEach(function(n){n!==_&&n.setState(chi.EXPANSION_PANEL_STATES.PENDING.NAME)})}})}),(h,u)=>{const g=w,_=k,t=S;return d(),A(t,{title:"Custom mode",id:"custom-mode",tabs:y,padding:"-p--3 -p-lg--6",additionalClasses:"-bg--grey-10"},{"example-description":l(()=>u[0]||(u[0]=[e("p",{class:"-text"},[o("Write your own custom mode by adding a handler for state changes of the expansion panels in the configuration, and writing your own functions for the "),e("code",null,"active"),o(", "),e("code",null,"done"),o(", "),e("code",null,"pending"),o(", "),e("code",null,"disabled"),o(", "),e("code",null,"toggle"),o(", "),e("code",null,"next"),o(" and "),e("code",null,"previous"),o(" actions. In the example, the component behaves similar to the accordion but alternates between "),e("code",null,"done"),o(" and "),e("code",null,"pending"),o(" states instead of "),e("code",null,"active"),o(" and "),e("code",null,"pending"),o(" states. The overridden action functions are for documentation purposes only because they clone the functionality of the default ones.")],-1)])),example:l(()=>[e("div",Re,[(d(),v($,null,N(i,(n,a)=>e("div",{class:U(["chi-epanel",n.isDone?"-done":""]),"data-chi-epanel-group":"example__custom-mode"},[e("div",Ye,[e("div",Ze,m(n.title),1),u[1]||(u[1]=e("div",{class:"chi-epanel__content"},[e("div",{class:"chi-epanel__collapse"},[e("div",{class:"-done--only"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius arcu nisl, non accumsan elit interdum et. Nunc ut gravida justo. Nulla sit amet est accumsan, condimentum elit nec, dapibus nulla. Aenean eu sapien eget ante placerat pretium a sit amet ante.")])],-1))])],2)),64))])]),"code-htmlblueprint":l(()=>[c(g),c(_,{lang:"html",code:r.htmlblueprint},null,8,["code"])]),_:1})}}}),lt=P({__name:"index",setup(E){return(y,i)=>{const r=D;return d(),v("div",null,[i[0]||(i[0]=e("h2",null,"Examples",-1)),c(r,{placeholder:"loading..."},{default:l(()=>[c(X),c(ie),c(me),c(Ae),c(qe),c(Qe),c(et)]),_:1})])}}});export{lt as _};

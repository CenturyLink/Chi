import{_ as B}from"./8Rn8z3Rm.js";import{_}from"./Cr4Krhex.js";import{_ as h}from"./Zvpnuh4B.js";import{e as b,f as x,o as m,w as l,b as o,a as e,d as n,c as f,i as O,n as L,t as S,F as w,r as T,h as q,q as z,l as k,j as H}from"./BnvmtQYM.js";import{_ as C}from"./DKkADrKB.js";const M=b({__name:"_base",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-ba1">Label</label>
  <select class="chi-select" id="example-ba1">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`};return(p,t)=>{const s=_,a=h;return m(),x(a,{title:"Base",id:"base",tabs:c},{example:l(()=>t[0]||(t[0]=[e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-ba1"},"Label"),e("select",{class:"chi-select",id:"example-ba1"},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")])],-1)])),"code-webcomponent":l(()=>[o(s,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(s,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),W=b({__name:"_disabled",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-di1">Label</label>
  <select class="chi-select" id="example-di1" disabled>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`};return(p,t)=>{const s=_,a=h;return m(),x(a,{title:"Disabled",id:"disabled",tabs:c},{example:l(()=>t[0]||(t[0]=[e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-di1"},"Label"),e("select",{class:"chi-select",id:"example-di1",disabled:""},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")])],-1)])),"code-webcomponent":l(()=>[o(s,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(s,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),P=b({__name:"_required",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-re1">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <select class="chi-select" id="example-re1" required>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`};return(p,t)=>{const s=_,a=h;return m(),x(a,{title:"Required",id:"required",tabs:c},{"example-description":l(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Use the "),e("code",null,"required"),n(" boolean attribute to indicate which select must be completed before submitting a form.")],-1)])),example:l(()=>t[1]||(t[1]=[e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-re1"},[n("Label"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),e("select",{class:"chi-select",id:"example-re1",required:""},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")])],-1)])),"code-webcomponent":l(()=>[o(s,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(s,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),R=b({__name:"_optional",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-op1">
    Label
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </label>
  <select class="chi-select" id="example-op1" required>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`};return(p,t)=>{const s=_,a=h;return m(),x(a,{title:"Optional",id:"optional",tabs:c},{"example-description":l(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Use "),e("code",null,"optional"),n(" to help emphasize that a select is not required and can be skipped.")],-1)])),example:l(()=>t[1]||(t[1]=[e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-op1"},[n("Label"),e("abbr",{class:"chi-label__optional","aria-label":"Optional field"},"(optional)")]),e("select",{class:"chi-select",id:"example-op1",required:""},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")])],-1)])),"code-webcomponent":l(()=>[o(s,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(s,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),F=b({__name:"_help",setup(u){const c=[{active:!0,id:"webcomponent",label:"Web Component"},{id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__help" info-icon info-icon-message="Helpful information goes here.">Label</chi-label>
  <select class="chi-select" id="example__help">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="example__help">Label</label>
    <div class="chi-label__help">
      <button class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example__help-popover">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </button>
      <section class="chi-popover chi-popover--top -animated" id="example__help-popover" aria-modal="true" role="dialog" aria-hidden="true" x-placement="top">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div>
  </div>
  <select class="chi-select" id="example__help">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`};return(p,t)=>{const s=_,a=C,r=h;return m(),x(r,{title:"Help",id:"help",tabs:c},{"example-description":l(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Use "),e("code",null,"chi-label"),n("'s attributes "),e("code",null,"infoIcon"),n(" and "),e("code",null,"infoIconMessage"),n(" to include a help icon that displays helpful information in a popover.")],-1)])),example:l(()=>t[1]||(t[1]=[e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("chi-label",{for:"example__help","info-icon":"","info-icon-message":"Helpful information goes here."},"Label"),e("select",{class:"chi-select",id:"example__help"},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")])],-1)])),"code-webcomponent":l(()=>[o(s,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(a),o(s,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),N=b({__name:"_message",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-me1">Label</label>
  <select class="chi-select" id="example-me1">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="chi-label -status">Optional helper message</div>
</div>`};return(p,t)=>{const s=_,a=h;return m(),x(a,{title:"Message",id:"message",tabs:c},{"example-description":l(()=>t[0]||(t[0]=[e("p",{class:"-text"},"Add a message below a select to store descriptions, validation feedback, and other helpful information.",-1)])),example:l(()=>t[1]||(t[1]=[e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-me1"},"Label"),e("select",{class:"chi-select",id:"example-me1"},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")]),e("div",{class:"chi-label -status"},"Optional helper message")],-1)])),"code-webcomponent":l(()=>[o(s,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(s,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),U=b({__name:"_error_lumen_centurylink",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-er1">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <select class="chi-select -danger" id="example-er1" required>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please select an option
  </div>
</div>`};return(p,t)=>{const s=_,a=h;return m(),x(a,{title:"Error",id:"error-lumen-centurylink",tabs:c},{"example-description":l(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Use the "),e("code",null,"-danger"),n(" state to provide feedback to users when a selection has not been made. Once a selection has been made, the state must be removed. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:l(()=>t[1]||(t[1]=[e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-er1"},[n("Label"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),e("select",{class:"chi-select -danger",id:"example-er1",required:""},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")]),e("div",{class:"chi-label -status -danger"},[e("chi-icon",{icon:"circle-warning","aria-hidden":"true"}),n("Please select an option")])],-1)])),"code-webcomponent":l(()=>[o(s,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(s,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),A=b({__name:"_error",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example-portal-er1">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <select class="chi-select -danger" id="example-portal-er1" required>
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please select an option
  </div>
</div>`};return(p,t)=>{const s=_,a=h;return m(),x(a,{title:"Error",id:"error-portal",tabs:c},{"example-description":l(()=>t[0]||(t[0]=[e("p",{class:"-text"},[n("Use the "),e("code",null,"-danger"),n(" state to provide feedback to users when a selection has not been made. Once a selection has been made, the state must be removed. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:l(()=>t[1]||(t[1]=[e("div",{class:"chi-form__item",style:{"max-width":"20rem"}},[e("label",{class:"chi-label",for:"example-er1"},[n("Label"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")]),e("select",{class:"chi-select -danger",id:"example-er1",required:""},[e("option",{value:""},"- Select -"),e("option",null,"Option 1"),e("option",null,"Option 2"),e("option",null,"Option 3")]),e("div",{class:"chi-label -status -danger"},[e("i",{class:"chi-icon icon-circle-warning","aria-hidden":"true"}),n("Please select an option")])],-1)])),"code-webcomponent":l(()=>[o(s,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(s,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),I={class:"-p--2"},J={class:"chi-form__item",style:{"max-width":"20rem"}},V=["for"],D=["id"],j={value:"",selected:"",disabled:"",hidden:""},G=b({__name:"_sizes_lumen_centurylink",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xs">Label</label>
  <select class="chi-select -xs" id="example-size-xs">
    <option>-xs - Select -</option>
  </select>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-sm">Label</label>
  <select class="chi-select -sm" id="example-size-sm">
    <option>-sm - Select -</option>
  </select>
</div>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-md">Label</label>
  <select class="chi-select -md" id="example-size-md">
    <option>-md - Select -</option>
  </select>
</div>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-lg">Label</label>
  <select class="chi-select -lg" id="example-size-lg">
    <option>-lg - Select -</option>
  </select>
</div>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xl">Label</label>
  <select class="chi-select -xl" id="example-size-xl">
    <option>-xl - Select -</option>
  </select>
</div>`},p=["xs","sm","md","lg","xl"];return(t,s)=>{const a=_,r=h;return m(),x(r,{title:"Sizes",id:"sizes-lumen-centurylink",tabs:c},{"example-description":l(()=>s[0]||(s[0]=[e("p",{class:"-text"},[n("Selects support the following sizes: "),e("code",null,"-xs"),n(", "),e("code",null,"-sm"),n(", "),e("code",null,"-md"),n(", "),e("code",null,"-lg"),n(", "),e("code",null,"-xl"),n(". The default size is "),e("code",null,"-md"),n(".")],-1)])),example:l(()=>[(m(),f(w,null,O(p,d=>e("div",I,[e("div",J,[e("label",{class:"chi-label",for:`example-size-${d}`},"Label",8,V),e("select",{class:L(`chi-select -${d}`),id:`example-size-${d}`},[e("option",j,"-"+S(d)+" - Select -",1),(m(),f(w,null,O([1,2,3],g=>e("option",null,"Option "+S(g),1)),64))],10,D)])])),64))]),"code-webcomponent":l(()=>[o(a,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(a,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),K={class:"-p--2"},Q={class:"chi-form__item",style:{"max-width":"20rem"}},X=["for"],Y=["id"],Z={value:"",selected:"",disabled:"",hidden:""},ee=b({__name:"_sizes",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-xs">Label</label>
  <select class="chi-select -xs" id="example-size-xs">
    <option>-xs - Select -</option>
  </select>
</div>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-sm">Label</label>
  <select class="chi-select -sm" id="example-size-sm">
    <option>-sm - Select -</option>
  </select>
</div>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-md">Label</label>
  <select class="chi-select -md" id="example-size-md">
    <option>-md - Select -</option>
  </select>
</div>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example-size-lg">Label</label>
  <select class="chi-select -lg" id="example-size-lg">
    <option>-lg - Select -</option>
  </select>
</div>`},p=["xs","sm","md","lg"];return(t,s)=>{const a=_,r=h;return m(),x(r,{title:"Sizes",id:"sizes-portal",tabs:c},{"example-description":l(()=>s[0]||(s[0]=[e("p",{class:"-text"},[n("Selects support the following sizes: "),e("code",null,"-xs"),n(", "),e("code",null,"-sm"),n(", "),e("code",null,"-md"),n(", "),e("code",null,"-lg"),n(". The default size is "),e("code",null,"-md"),n(".")],-1)])),example:l(()=>[(m(),f(w,null,O(p,d=>e("div",K,[e("div",Q,[e("label",{class:"chi-label",for:`example-size-${d}`},"Label",8,X),e("select",{class:L(`chi-select -${d}`),id:`example-size-${d}`},[e("option",Z,"-"+S(d)+" - Select -",1),(m(),f(w,null,O([1,2,3],g=>e("option",null,"Option "+S(g),1)),64))],10,Y)])])),64))]),"code-webcomponent":l(()=>[o(a,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(a,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),le={class:"chi-col -w--12 -p--2"},te=["id"],oe=["for"],ne=b({__name:"_floating-labels_lumen_centurylink",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<div id="floating-label-lg" class="chi-input__wrapper -floating-label">
  <select class="chi-select -lg" id="floating-label-select-lg">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-select-lg">Placeholder text</label>
</div>

<div id="floating-label-xl" class="chi-input__wrapper -floating-label">
  <select class="chi-select -xl" id="floating-label-select-xl">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-select-xl">Placeholder text</label>
</div>

<script>chi.floatingLabel(document.querySelectorAll('.-floating-label'));<\/script>`},p=T([]),t=[],s=["lg","xl"];return q(()=>{var a;return(a=p.value)==null?void 0:a.forEach(r=>r&&t.push(chi.floatingLabel(r)))}),z(()=>{t.forEach(a=>a.dispose())}),(a,r)=>{const d=_,g=C,y=h;return m(),x(y,{title:"Floating labels",id:"floating-labels-lumen-centurylink",tabs:c},{"example-description":l(()=>r[0]||(r[0]=[e("p",{class:"-text"},[n("Floating labels are a solution to keep the placeholder visible when no label is attached to the select. Chi only supports floating labels on "),e("code",null,"-lg"),n(" and "),e("code",null,"-xl"),n(" selects.")],-1)])),example:l(()=>[(m(),f(w,null,O(s,(v,$)=>e("div",le,[e("div",{class:"chi-input__wrapper -floating-label",style:{"max-width":"20rem"},ref_for:!0,ref:E=>p.value.push(E)},[e("select",{class:L(`chi-select -${v}`),id:`floating-label-select-${v}`},r[1]||(r[1]=[e("option",null,null,-1),e("option",null,"Option 1",-1),e("option",null,"Option 2",-1),e("option",null,"Option 3",-1)]),10,te),e("label",{for:`floating-label-select-${v}`},"Placeholder text",8,oe)],512)])),64))]),"code-webcomponent":l(()=>[o(d,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(g),o(d,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),ie={class:"chi-col -w--12 -p--2"},se=["id"],ae=["for"],ce=b({__name:"_floating-labels",setup(u){const c=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],i={webcomponent:"",htmlblueprint:`<div id="floating-label-md" class="chi-input__wrapper -floating-label">
  <select class="chi-select -md" id="floating-label-portal-select-md">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-portal-select-md">Placeholder text</label>
</div>

<div id="floating-label-lg" class="chi-input__wrapper -floating-label">
  <select class="chi-select -lg" id="floating-label-portal-select-lg">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-portal-select-lg">Placeholder text</label>
</div>

<script>chi.floatingLabel(document.querySelectorAll('.-floating-label'));<\/script>`},p=["md","lg"],t=T([]),s=[];return q(()=>{var a;return(a=t.value)==null?void 0:a.forEach(r=>r&&s.push(chi.floatingLabel(r)))}),z(()=>{s.forEach(a=>a.dispose())}),(a,r)=>{const d=_,g=C,y=h;return m(),x(y,{title:"Floating labels",id:"floating-labels-portal",tabs:c},{"example-description":l(()=>r[0]||(r[0]=[e("p",{class:"-text"},"Floating labels are a solution to keep the placeholder visible when no label is attached to the select.",-1)])),example:l(()=>[(m(),f(w,null,O(p,v=>e("div",ie,[e("div",{class:"chi-input__wrapper -floating-label",style:{"max-width":"20rem"},ref_for:!0,ref:$=>t.value.push($)},[e("select",{class:L(`chi-select -${v}`),id:`floating-label-select-${v}`},r[1]||(r[1]=[e("option",null,null,-1),e("option",null,"Option 1",-1),e("option",null,"Option 2",-1),e("option",null,"Option 3",-1)]),10,se),e("label",{for:`floating-label-select-${v}`},"Placeholder text",8,ae)],512)])),64))]),"code-webcomponent":l(()=>[o(d,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":l(()=>[o(g),o(d,{lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),pe={key:0},re={key:1},he=b({__name:"index",setup(u){const c=k();return(i,p)=>{const t=B;return m(),f(w,null,[p[0]||(p[0]=e("h2",null,"Examples",-1)),p[1]||(p[1]=e("p",{class:"-text"},[n("To render a select, apply the class "),e("code",null,"chi-select"),n(" to a "),e("code",null,"select"),n(".")],-1)),o(M),o(W),o(P),o(R),o(t,null,{default:l(()=>[o(F)]),_:1}),o(N),["lumen","centurylink"].includes(H(c))?(m(),f("div",pe,[o(U),o(G),o(t,null,{default:l(()=>[o(ne)]),_:1})])):(m(),f("div",re,[o(A),o(ee),o(t,null,{default:l(()=>[o(ce)]),_:1})]))],64)}}});export{he as _};

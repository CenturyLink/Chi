import{_}from"./tNdMX7O9.js";import{_ as m}from"./BzQNDISb.js";import{_ as u}from"./C0Zb0D1T.js";import{e as p,f as d,o as r,w as n,b as i,a as e,d as o,c as f,F as x}from"./BpVBcII5.js";import{_ as L}from"./4ajXz9EY.js";const v=p({__name:"_base",setup(b){const t={webcomponent:"<chi-label>Label</chi-label>",htmlblueprint:'<label class="chi-label">Label</label>'};return(s,l)=>{const a=m,c=u;return r(),d(c,{title:"Base",id:"base"},{example:n(()=>l[0]||(l[0]=[e("chi-label",{for:"input-1"},"Label",-1),e("input",{class:"-sr--only",id:"input-1-control"},null,-1)])),"code-webcomponent":n(()=>[i(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[i(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),g=p({__name:"_required",setup(b){const t={webcomponent:`<!-- Required -->
<chi-label required>Label</chi-label>

<!-- Optional -->
<chi-label optional>Label</chi-label>`,htmlblueprint:`<!-- Required -->
<label class="chi-label">
  Label
  <abbr class="chi-label__required" aria-label="Required field">*</abbr>
</label>

<!-- Optional -->
<label class="chi-label">
  Label
  <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
</label>`};return(s,l)=>{const a=m,c=u;return r(),d(c,{title:"Required / Optional",id:"required"},{"example-description":n(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Use attribute "),e("code",null,"required"),o(" or "),e("code",null,"optional"),o(" if you need to indicate required / optional fields.")],-1)])),example:n(()=>l[1]||(l[1]=[e("chi-label",{for:"input-2",required:""},"Label",-1),e("input",{class:"-sr--only",id:"input-2-control"},null,-1),e("chi-label",{for:"input-3",optional:""},"Label",-1),e("input",{class:"-sr--only",id:"input-3-control"},null,-1)])),"code-webcomponent":n(()=>[i(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[i(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),w=p({__name:"_sizes",setup(b){const t={webcomponent:`<!-- xs -->
<chi-label size="xs">Label</chi-label>

<!-- sm -->
<chi-label size="sm">Label</chi-label>

<!-- md -->
<chi-label size="md">Label</chi-label>

<!-- lg -->
<chi-label size="lg">Label</chi-label>

<!-- xl -->
<chi-label size="xl">Label</chi-label>`,htmlblueprint:`<!-- xs -->
<label class="chi-label -xs">Label</label>

<!-- sm -->
<label class="chi-label -sm">Label</label>

<!-- md -->
<label class="chi-label -md">Label</label>

<!-- lg -->
<label class="chi-label -lg">Label</label>

<!-- xl -->
<label class="chi-label -xl">Label</label>`};return(s,l)=>{const a=m,c=u;return r(),d(c,{title:"Sizes",id:"sizes"},{"example-description":n(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Label supports the following sizes: "),e("code",null,"xs"),o(", "),e("code",null,"sm"),o(", "),e("code",null,"md"),o(", "),e("code",null,"lg"),o(", "),e("code",null,"xl"),o(". The default size is "),e("code",null,"md"),o(".")],-1)])),example:n(()=>l[1]||(l[1]=[e("chi-label",{for:"input-0",size:"xs"},"Label",-1),e("input",{class:"-sr--only",id:"input-0"},null,-1),e("chi-label",{for:"input-1",size:"sm"},"Label",-1),e("input",{class:"-sr--only",id:"input-1"},null,-1),e("chi-label",{for:"input-2",size:"md"},"Label",-1),e("input",{class:"-sr--only",id:"input-2"},null,-1),e("chi-label",{for:"input-3",size:"lg"},"Label",-1),e("input",{class:"-sr--only",id:"input-3"},null,-1),e("chi-label",{for:"input-4",size:"xl"},"Label",-1),e("input",{class:"-sr--only",id:"input-4"},null,-1)])),"code-webcomponent":n(()=>[i(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[i(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),y=p({__name:"_associate",setup(b){const t={webcomponent:`<chi-label for="number-input">Label</chi-label>
<chi-number-input id="number-input"></chi-number-input>

<chi-label for="chi-date-picker">Label</chi-label>
<chi-date-picker id="chi-date-picker"></chi-date-picker>`,htmlblueprint:`<div class="chi-form__item">
  <label for="number-input" class="chi-label">Label</label>
  <div class="chi-number-input">
    <input id="number-input" type="number" class="chi-input" value="0" aria-label="Input Label">
    <button aria-label="Decrease"></button>
    <button aria-label="Increase"></button>
  </div>
</div>

<div class="chi-form__item">
  <label class="chi-label" for="datepicker-1">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="datepicker-1" type="text" class="chi-input" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date -icon--muted" aria-hidden="true"></i>
  </div>
</div>`};return(s,l)=>{const a=m,c=u;return r(),d(c,{title:"Associate label with form elements",id:"associate"},{"example-description":n(()=>l[0]||(l[0]=[e("p",{class:"-text"},"Label is important for accessibility of form elements.",-1)])),example:n(()=>l[1]||(l[1]=[e("div",{style:{"max-width":"17rem"}},[e("chi-label",{for:"number-input"},"Label"),e("chi-number-input",{id:"number-input"}),e("chi-label",{class:"-mt--1",for:"chi-date-picker"},"Label"),e("chi-date-picker",{id:"chi-date-picker"})],-1)])),"code-webcomponent":n(()=>[l[2]||(l[2]=e("div",{class:"chi-tab__description"},[o("Associate "),e("code",null,"chi-label"),o(" with supported form-control web components")],-1)),i(a,{lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[i(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),z=p({__name:"_help",setup(b){const t={webcomponent:'<chi-label info-icon info-icon-message="Changed helpful information">Label</chi-label>',htmlblueprint:`<div class="chi-label__wrapper">
  <label class="chi-label">Label</label>
  <div class="chi-label__help">
    <div class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example__help-popover">
      <div class="chi-button__content">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </div>
    </div>
    <section class="chi-popover chi-popover--bottom" id="example__help-popover" aria-modal="true" role="dialog">
      <div class="chi-popover__content">
        <p class="chi-popover__text">Helpful information goes here.</p>
      </div>
    </section>
  </div>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`};return(s,l)=>{const a=m,c=L,h=u;return r(),d(h,{title:"Help",id:"help"},{"example-description":n(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Use attribute "),e("code",null,"infoIcon"),o(" and "),e("code",null,"infoIconMessage"),o(" to include a help icon that displays helpful information in a popover.")],-1)])),example:n(()=>l[1]||(l[1]=[e("chi-label",{for:"input-2","info-icon":"","info-icon-message":"Changed helpful information"},"Label",-1),e("input",{class:"-sr--only",id:"input-4-control"},null,-1)])),"code-webcomponent":n(()=>[i(a,{class:"html",lang:"html",code:t.webcomponent},null,8,["code"])]),"code-htmlblueprint":n(()=>[i(c),i(a,{class:"html",lang:"html",code:t.htmlblueprint},null,8,["code"])]),_:1})}}}),$=p({__name:"index",setup(b){return(t,s)=>{const l=_;return r(),f(x,null,[s[0]||(s[0]=e("h2",null,"Examples",-1)),i(v),i(l,null,{default:n(()=>[i(g)]),_:1}),i(w),i(l,null,{default:n(()=>[i(y),i(z)]),_:1})],64)}}});export{$ as _};

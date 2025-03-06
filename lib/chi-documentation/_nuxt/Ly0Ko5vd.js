import{_}from"./C_gFFCTR.js";import{_ as h}from"./CmWk2xIH.js";import{e as p,f as r,o as s,w as t,b as a,a as e,d as o,c as x,F as u,i as v,l as w,k as L,j as f}from"./CmP53kv-.js";import{_ as g}from"./CLOSKf5d.js";const y=p({__name:"_base",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__base">Label</chi-label>
  <chi-textarea id="example__base"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__base">Label</label>
  <textarea class="chi-input" id="example__base"></textarea>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Base",id:"base"},{example:t(()=>l[0]||(l[0]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__base"},"Label"),e("chi-textarea",{id:"example__base"})])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),S=p({__name:"_disabled",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__disabled">Label</chi-label>
  <chi-textarea id="example__disabled" disabled>Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__disabled">Label</label>
  <textarea class="chi-input" id="example__disabled" disabled>Sample text</textarea>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Disabled",id:"disabled"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Use the "),e("code",null,"disabled"),o(" boolean attribute to prevent users from interacting with an input. Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus. "),e("strong",null,"Note:"),o(" The required attribute can not be used on inputs with a disabled attribute specified.")],-1)])),example:t(()=>l[1]||(l[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__disabled"},"Label"),e("chi-textarea",{id:"example__disabled",disabled:""},"Sample text")])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),C=p({__name:"_readonly",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__readonly">Label</chi-label>
  <chi-textarea id="example__readonly" readonly>Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__readonly">Label</label>
  <textarea class="chi-input" id="example__readonly" readonly>Sample text</textarea>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Readonly",id:"readonly"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Use the "),e("code",null,"readonly"),o(" boolean attribute to prevent users from changing an input value. Unlike disabled inputs, readonly inputs are submitted with the form and can still receive browsing events such as mouse clicks and focus. "),e("strong",null,"Note:"),o(" The required attribute can not be used on inputs with a readonly attribute specified.")],-1)])),example:t(()=>l[1]||(l[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__readonly"},"Label"),e("chi-textarea",{id:"example__readonly",readonly:""},"Sample text")])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),k=p({__name:"_placeholder",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__placeholder">Label</chi-label>
  <chi-textarea id="example__placeholder" placeholder="Placeholder"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__placeholder">Label</label>
  <textarea class="chi-input" id="example__placeholder" placeholder="Placeholder"></textarea>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Placeholder",id:"placeholder"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Use the "),e("code",null,"placeholder"),o(" attribute to provide users with an example of the type of data that can be entered into an input. "),e("strong",null,"Note:"),o(" Placeholder text is not persistent and visually disappears when a value is entered.")],-1)])),example:t(()=>l[1]||(l[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__placeholder"},"Label"),e("chi-textarea",{id:"example__placeholder",placeholder:"Placeholder"})])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),q=p({__name:"_required",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__required" required>Label</chi-label>
  <chi-textarea id="example__required" required></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__required">
    Label
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <textarea class="chi-input" id="example__required" required></textarea>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Required",id:"required"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Use the "),e("code",null,"required"),o(" boolean attribute to indicate which inputs must be completed before submitting a form. This is useful for capturing important information and reducing the risk of form errors. To render a required textarea, apply the "),e("code",null,"required"),o(" attribute to the textarea. It is also encouraged but not mandatory to apply a "),e("code",null,"required"),o(" attribute to the corresponding label of the textarea which will automatically render a red asterisk. "),e("strong",null,"Note:"),o(" For HTML Blueprint implementations, the "),e("code",null,"required"),o(" attribute is not supported on the label. Please use the alternate method specified below for rendering a red asterisk within the label.")],-1)])),example:t(()=>l[1]||(l[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__required",required:""},"Label"),e("chi-textarea",{id:"example__required",required:""})])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),$=p({__name:"_optional",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__optional" optional>Label</chi-label>
  <chi-textarea id="example__optional"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__optional">
    Label
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </label>
  <textarea class="chi-input" id="example__optional"></textarea>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Optional",id:"optional"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("When the vast majority of inputs in a form are required, "),e("code",null,"optional"),o(" can be used to help emphasize the few that are not. This is useful for textareas that are not relevant to all users, such as an Additional Comments textarea in a create support ticket form. If the user does not have additional comments, applying "),e("code",null,"optional"),o(" to "),e("code",null,"chi-label"),o(" will help convey the labels corresponding textarea is not required and can be skipped. "),e("strong",null,"Note:"),o(" For HTML Blueprint implementations, the "),e("code",null,"optional"),o(" boolean attribute is not supported on the label. Please use the alternate method specified below for rendering optional text within the label.")],-1)])),example:t(()=>l[1]||(l[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__optional",optional:""},"Label"),e("chi-textarea",{id:"example__optional"})])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),E=p({__name:"_help",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__help" info-icon info-icon-message="Helpful information goes here.">Label</chi-label>
  <chi-textarea id="example__help"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="example__help">Label</label>
    <div class="chi-label__help">
      <div class="chi-button -icon -flat -xs" id="example__help-button" data-target="#example__help-popover" aria-label="Help">
        <div class="chi-button__content">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </div>
      </div>
      <section class="chi-popover chi-popover--top" id="example__help-popover" aria-modal="true" role="dialog">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div>
  </div>
  <textarea class="chi-input" id="example__help"></textarea>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`};return(m,l)=>{const c=_,n=g,b=h;return s(),r(b,{title:"Help",id:"help"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Use "),e("code",null,"chi-label"),o("'s attributes "),e("code",null,"infoIcon"),o(" and "),e("code",null,"infoIconMessage"),o(" to include a help icon that displays helpful information in a popover.")],-1)])),example:t(()=>l[1]||(l[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__help","info-icon":"","info-icon-message":"Helpful information goes here."},"Label"),e("chi-textarea",{id:"example__help"})])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(n),a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),T=p({__name:"_message",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__message">Label</chi-label>
  <chi-textarea id="example__message" helper-message="Optional helper message"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__message">Label</label>
  <textarea class="chi-input" id="example__message"></textarea>
  <div class="chi-label -status">Optional helper message</div>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Message",id:"message"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},"Add a message below a textarea to store descriptions, validation feedback, and other helpful information.",-1)])),example:t(()=>l[1]||(l[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__message"},"Label"),e("chi-textarea",{id:"example__message"}),e("div",{class:"chi-label -status"},"Optional helper message")])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),z=p({__name:"_error",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__danger" required>Describe the issue</chi-label>
  <chi-textarea id="example__danger" state="danger" helper-message="Please describe the issue" required></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__danger">
    Describe the issue
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </label>
  <textarea class="chi-input -danger" id="example__danger" required></textarea>
  <div class="chi-label -status -danger">Please describe the issue</div>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Error",id:"error"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Use the "),e("code",null,"danger"),o(" state to provide feedback to users when input data fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:t(()=>l[1]||(l[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__danger",required:""},"Describe the issue"),e("chi-textarea",{id:"example__danger",state:"danger","helper-message":"Please describe the issue",required:""})])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),I=p({__name:"_inline-label",setup(d){const i={webcomponent:`<div class="chi-form__item -row -align-items--start">
  <chi-label for="example__inline-label">Label</chi-label>
  <chi-textarea id="example__inline-label"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item -row -align-items--start">
  <label class="chi-label" for="example__inline-label">Label</label>
  <textarea class="chi-input" id="example__inline-label"></textarea>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Inline Label",id:"inline-label"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Apply the class "),e("code",null,"-row"),o(" to "),e("code",null,"chi-form__item"),o(" to render labels and textareas inline.")],-1)])),example:t(()=>l[1]||(l[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item -row -align-items--start"},[e("chi-label",{for:"example__inline-label"},"Label"),e("chi-textarea",{id:"example__inline-label"})])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),B=p({__name:"_inline-label-percent",setup(d){const i={webcomponent:`<div class="chi-form__item -row -align-items--start">
  <chi-label class="-w--50" for="example__inline-label-percent">Label width 50%</chi-label>
  <div class="-w--50">
    <chi-textarea id="example__inline-label-percent"></chi-textarea>
  </div>
</div>`,htmlblueprint:`<div class="chi-form__item -row -align-items--start">
  <label class="chi-label -w--50" for="example__inline-label-percent">Label</label>
  <div class="-w--50">
    <textarea class="chi-input" id="example__inline-label-percent"></textarea>
  </div>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Inline Label - width controlled using percent",id:"inline-label-percent"},{example:t(()=>l[0]||(l[0]=[e("div",{class:"chi-form__item -row -align-items--start"},[e("chi-label",{class:"-w--50",for:"example__inline-label-percent"},"Label width 50%"),e("div",{class:"-w--50"},[e("chi-textarea",{id:"example__inline-label-percent"})])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),N=p({__name:"_inline-label-grid",setup(d){const i={webcomponent:`<div class="chi-form__item -row chi-grid -no-gutter -align-items--start">
  <chi-label class="chi-col -w--3" for="example__inline-label-grid">Label width 3 columns</chi-label>
  <chi-textarea class="chi-col -w--9" id="example__inline-label-grid"></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item -row chi-grid -no-gutter -align-items--start">
  <label class="chi-label chi-col -w--3" for="example__inline-label-grid">Label</label>
  <textarea class="chi-input chi-col -w--9" id="example__inline-label-grid"></textarea>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Inline Label - width controlled using grid",id:"inline-label-grid"},{example:t(()=>l[0]||(l[0]=[e("div",{class:"chi-form__item -row chi-grid -no-gutter -align-items--start"},[e("chi-label",{class:"chi-col -w--3",for:"example__inline-label-grid"},"Label width 3 columns"),e("div",{class:"chi-col -w--9"},[e("chi-textarea",{id:"example__inline-label-grid"})])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),P=p({__name:"_inline-textareas",setup(d){const i={webcomponent:`<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input01">Label</chi-label>
    <chi-textarea id="example__inline-input01"></chi-textarea>
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <chi-label for="example__inline-input02">Label</chi-label>
    <chi-textarea id="example__inline-input02"></chi-textarea>
  </div>
</div>`,htmlblueprint:`<div class="-d--flex">
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input01">Label</label>
    <textarea class="chi-input" id="example__inline-input01"></textarea>
  </div>
  <div class="chi-form__item -inline -flex--grow1">
    <label class="chi-label" for="example__inline-input02">Label</label>
    <textarea class="chi-input" id="example__inline-input02"></textarea>
  </div>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Inline Textareas",id:"inline-textareas"},{example:t(()=>l[0]||(l[0]=[e("div",{class:"-d--flex"},[e("div",{class:"chi-form__item -inline -flex--grow1"},[e("chi-label",{for:"example__inline-input01"},"Label"),e("chi-textarea",{id:"example__inline-input01"})]),e("div",{class:"chi-form__item -inline -flex--grow1"},[e("chi-label",{for:"example__inline-input02"},"Label"),e("chi-textarea",{id:"example__inline-input02"})])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),A=p({__name:"_left-aligned",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-left">Label</chi-label>
  <chi-textarea id="example__icon-left" icon-left="map-marker" icon-left-color="muted">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-left">Label</label>
  <div class="chi-input__wrapper -icon--left">
    <textarea class="chi-input" id="example__icon-left">Sample text</textarea>
    <i class="chi-icon icon-map-marker -icon--muted" aria-hidden="true"></i>
  </div>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Left Aligned",id:"left-aligned"},{example:t(()=>l[0]||(l[0]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__icon-left"},"Label"),e("chi-textarea",{id:"example__icon-left","icon-left":"map-marker","icon-left-color":"muted"},"Sample text")])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),U=p({__name:"_right-aligned",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-right">Label</chi-label>
  <chi-textarea id="example__icon-right" icon-right="check" icon-right-color="success">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-right">Label</label>
  <div class="chi-input__wrapper -icon--right">
    <textarea class="chi-input" id="example__icon-right">Sample text</textarea>
    <i class="chi-icon icon-check -icon--success" aria-hidden="true"></i>
  </div>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Right Aligned",id:"right-aligned"},{example:t(()=>l[0]||(l[0]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__icon-right"},"Label"),e("chi-textarea",{id:"example__icon-right","icon-right":"check","icon-right-color":"success"},"Sample text")])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),H=p({__name:"_left-right-aligned",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__icon-left-right">Label</chi-label>
  <chi-textarea 
    id="example__icon-left-right" 
    icon-left="map-marker" 
    icon-right="check" 
    icon-left-color="muted" 
    icon-right-color="success"
  >
    Sample text
  </chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__icon-left-right">Label</label>
  <div class="chi-input__wrapper -icon--left -icon--right">
    <textarea class="chi-input" id="example__icon-left-right">Sample text</textarea>
    <i class="chi-icon icon-map-marker -icon--muted" aria-hidden="true"></i>
    <i class="chi-icon icon-check -icon--success" aria-hidden="true"></i>
  </div>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Left + Right Aligned",id:"left-right-aligned"},{example:t(()=>l[0]||(l[0]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__icon-left-right"},"Label"),e("chi-textarea",{id:"example__icon-left-right","icon-left":"map-marker","icon-right":"check","icon-left-color":"muted","icon-right-color":"success"},"Sample text")])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),R={class:"chi-grid"},D={class:"chi-col -w--12 -w-sm--8 -w-md--6"},O={class:"chi-grid"},V={class:"chi-col -w--12 -mb--2"},F={class:"chi-form__item"},M=["for"],j=["size","id"],J=p({__name:"_sizes-lumen-centurylink",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__xs">Label</chi-label>
  <chi-textarea size="sm" id="example__xs">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__sm">Label</chi-label>
  <chi-textarea size="sm" id="example__sm">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__md">Label</chi-label>
  <chi-textarea size="md" id="example__md">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__lg">Label</chi-label>
  <chi-textarea size="lg" id="example__lg">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__xl">Label</chi-label>
  <chi-textarea size="xl" id="example__xl">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__xs">Label</label>
  <textarea class="chi-input -xs" id="example__xs">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__sm">Label</label>
  <textarea class="chi-input -sm" id="example__sm">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__md">Label</label>
  <textarea class="chi-input -md" id="example__md">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__lg">Label</label>
  <textarea class="chi-input -lg" id="example__lg">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__xl">Label</label>
  <textarea class="chi-input -xl" id="example__xl">Sample text</textarea>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Sizes",titleSize:"h2",id:"sizes-lumen-centurylink"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Textareas support the following sizes: "),e("code",null,"xs"),o(", "),e("code",null,"sm"),o(", "),e("code",null,"md"),o(", "),e("code",null,"lg"),o(", and "),e("code",null,"xl"),o(". The default size is "),e("code",null,"md"),o(".")],-1)])),example:t(()=>[e("div",R,[e("div",D,[e("div",O,[(s(),x(u,null,v(["xs","sm","md","lg","xl"],b=>e("div",V,[e("div",F,[e("chi-label",{for:`example__${b}`},"Label",8,M),e("chi-textarea",{size:b,id:`example__${b}`},"Sample text",8,j)])])),64))])])])]),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),W={class:"chi-grid"},G={class:"chi-col -w--12 -w-sm--8 -w-md--6"},K={class:"chi-grid"},Q={class:"chi-col -w--12 -mb--2"},X={class:"chi-form__item"},Y=["for"],Z=["size","id"],ee=p({__name:"_sizes",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__xs">Label</chi-label>
  <chi-textarea size="sm" id="example__xs">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__sm">Label</chi-label>
  <chi-textarea size="sm" id="example__sm">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__md">Label</chi-label>
  <chi-textarea size="md" id="example__md">Sample text</chi-textarea>
</div>
<div class="chi-form__item">
  <chi-label for="example__lg">Label</chi-label>
  <chi-textarea size="lg" id="example__lg">Sample text</chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__xs">Label</label>
  <textarea class="chi-input -xs" id="example__xs">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__sm">Label</label>
  <textarea class="chi-input -sm" id="example__sm">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__md">Label</label>
  <textarea class="chi-input -md" id="example__md">Sample text</textarea>
</div>
<div class="chi-form__item">
  <label class="chi-label" for="example__lg">Label</label>
  <textarea class="chi-input -lg" id="example__lg">Sample text</textarea>
</div>`};return(m,l)=>{const c=_,n=h;return s(),r(n,{title:"Sizes",titleSize:"h2",id:"sizes-portal",tabs:m.exampleTabs},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Textareas support the following sizes: "),e("code",null,"xs"),o(", "),e("code",null,"sm"),o(", "),e("code",null,"md"),o(", "),e("code",null,"lg"),o(". The default size is "),e("code",null,"md"),o(".")],-1)])),example:t(()=>[e("div",W,[e("div",G,[e("div",K,[(s(),x(u,null,v(["xs","sm","md","lg"],b=>e("div",Q,[e("div",X,[e("chi-label",{for:`example__${b}`},"Label",8,Y),e("chi-textarea",{size:b,id:`example__${b}`},"Sample text",8,Z)])])),64))])])])]),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1},8,["tabs"])}}}),le=p({__name:"_copy-text-button",setup(d){const i={webcomponent:`<div class="chi-form__item">
  <chi-label for="example__copy-text-button">Label</chi-label>
  <chi-textarea value="Sample Text" id="example__copy-text-button" copy-text></chi-textarea>
</div>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="example__copy-text-button">Label</label>
  <div class="-d--flex -align-items--start">
    <div class="chi-input__wrapper -flex--grow1">
      <textarea type="text" class="chi-input" value="Sample text" id="example__copy-text-button" />
    </div>

    <button id="example_copy-text-button" class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Copy to clipboard">
      <div class="chi-button__content">
        <i class="chi-icon icon-copy -sm" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>

<script>
  document.getElementById('example_copy-text-button').addEventListener('click', () => {
    navigator.clipboard?.writeText(
      document.getElementById('example__copy-text-button').getAttribute('value')
    );
  });

  <!-- Tooltip -->
  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`};return(m,l)=>{const c=_,n=g,b=h;return s(),r(b,{title:"Copy text button",id:"copy-text"},{"example-description":t(()=>l[0]||(l[0]=[e("p",{class:"-text"},[o("Use the "),e("code",null,"copy-text"),o(" attribute to show a copy icon that provides the user the ability to copy the input value into the clipboard.")],-1)])),example:t(()=>l[1]||(l[1]=[e("div",{class:"chi-grid"},[e("div",{class:"chi-col -w--12 -w-sm--8 -w-md--6"},[e("div",{class:"chi-form__item"},[e("chi-label",{for:"example__copy-text-button"},"Label"),e("chi-textarea",{"copy-text":"",value:"Sample Text",id:"example__copy-text-button"})])])],-1)])),"code-webcomponent":t(()=>[a(c,{class:"html",lang:"html",code:i.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[a(n),a(c,{class:"html",lang:"html",code:i.htmlblueprint},null,8,["code"])]),_:1})}}}),te={key:0},ne=p({__name:"index",setup(d){const i=w();return(m,l)=>(s(),x(u,null,[l[1]||(l[1]=e("h2",null,"Examples",-1)),a(y),a(S),a(C),a(k),a(q),a($),a(E),a(T),a(le),a(z),l[2]||(l[2]=e("h2",null,"Layout Variations",-1)),a(I),a(B),a(N),a(P),["lumen","centurylink"].includes(f(i))?(s(),x("div",te,[l[0]||(l[0]=e("h2",null,"Icons",-1)),a(A),a(U),a(H)])):L("",!0),["lumen","centurylink"].includes(f(i))?(s(),r(J,{key:1})):(s(),r(ee,{key:2}))],64))}});export{ne as _};

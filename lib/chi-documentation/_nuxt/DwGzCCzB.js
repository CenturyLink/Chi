import{_ as q}from"./D6TR492o.js";import{_ as y}from"./BQdGHRz_.js";import{e as k,f as g,w as t,o as l,a as e,c as s,i as f,F as p,t as x,b as c,d as u,r as S,v as M,q as C,n as O,l as T,g as E,h as B,j as L,k as H}from"./C2nwJ2gl.js";import{_ as R}from"./GYQZMMrf.js";const W={class:"chi-picker-group"},z={class:"chi-picker-group__content"},A=["id"],U=["for"],N=k({__name:"_base",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-base" id="example-base-1">
      <label for="example-base-1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example-base" id="example-base-2">
      <label for="example-base-2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example-base" id="example-base-3">
      <label for="example-base-3">Option 3</label>
    </div>
  </div>
</fieldset>
`};return(m,n)=>{const a=q,r=y;return l(),g(r,{title:"Base",id:"base",tabs:d},{example:t(()=>[e("fieldset",null,[n[0]||(n[0]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",W,[e("div",z,[(l(),s(p,null,f([1,2,3],i=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example__base",id:`example__base_${i}`},null,8,A),e("label",{for:`example__base_${i}`},"Option "+x(i),9,U)],64))),64))])])])]),"code-webcomponent":t(()=>[c(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),P={class:"chi-picker-group"},V={class:"chi-picker-group__content"},D=["id","checked"],F=["for"],I=k({__name:"_checked",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-checked" id="example-checked-1" checked>
      <label for="example-checked-1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example-checked" id="example-checked-2">
      <label for="example-checked-2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example-checked" id="example-checked-3">
      <label for="example-checked-3">Option 3</label>
    </div>
  </div>
</fieldset>`};return(m,n)=>{const a=q,r=y;return l(),g(r,{title:"Checked",id:"checked",tabs:d},{"example-description":t(()=>n[0]||(n[0]=[e("p",{class:"-text"},[u("Use the "),e("code",null,"checked"),u(" boolean attribute to set the default value of a picker group input to true.")],-1)])),example:t(()=>[e("fieldset",null,[n[1]||(n[1]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",P,[e("div",V,[(l(),s(p,null,f([1,2,3],i=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example-checked",id:`example-checked-${i}`,checked:i===1},null,8,D),e("label",{for:`example-checked-${i}`},"Option "+x(i),9,F)],64))),64))])])])]),"code-webcomponent":t(()=>[c(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),J={class:"chi-picker-group"},j={class:"chi-picker-group__content"},G=["id","disabled"],K=["for"],Q=k({__name:"_disabled",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-disabled" id="example-disabled-1">
      <label for="example-disabled-1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example-disabled" id="example-disabled-2">
      <label for="example-disabled-2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example-disabled" id="example-disabled-3" disabled>
      <label for="example-disabled-3">Option 3</label>
    </div>
  </div>
</fieldset>
`};return(m,n)=>{const a=q,r=y;return l(),g(r,{title:"Disabled",id:"disabled",tabs:d},{"example-description":t(()=>n[0]||(n[0]=[e("p",{class:"-text"},[u("Use the "),e("code",null,"disabled"),u(" boolean attribute to prevent users from interacting with a picker group input.Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.")],-1)])),example:t(()=>[e("fieldset",null,[n[1]||(n[1]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",J,[e("div",j,[(l(),s(p,null,f([1,2,3],i=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example__disabled",id:`example__disabled_${i}`,disabled:i===3},null,8,G),e("label",{for:`example__disabled_${i}`},"Option "+x(i),9,K)],64))),64))])])])]),"code-webcomponent":t(()=>[c(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),X={class:"chi-picker-group"},Y={class:"chi-picker-group__content"},Z=["id","required"],ee=["for"],ie=k({__name:"_required",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-required" id="example-required-1" required>
      <label for="example-required-1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example-required" id="example-required-2">
      <label for="example-required-2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example-required" id="example-required-3">
      <label for="example-required-3">Option 3</label>
    </div>
  </div>
</fieldset>
`};return(m,n)=>{const a=q,r=y;return l(),g(r,{title:"Required",id:"required",tabs:d},{"example-description":t(()=>n[0]||(n[0]=[e("p",{class:"-text"},[u("Use the "),e("code",null,"required"),u(" boolean attribute to indicate which picker groups must be completed before submitting a form.")],-1)])),example:t(()=>[e("fieldset",null,[n[1]||(n[1]=e("legend",{class:"chi-label"},[u("Select an option"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")],-1)),e("div",X,[e("div",Y,[(l(),s(p,null,f([1,2,3],i=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example__required",id:`example__required_${i}`,required:i===1},null,8,Z),e("label",{for:`example__required_${i}`},"Option "+x(i),9,ee)],64))),64))])])])]),"code-webcomponent":t(()=>[c(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),le={class:"chi-picker-group"},ne={class:"chi-picker-group__content"},te=["id"],ae=["for"],ce=k({__name:"_optional",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
  </legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-optional" id="example-optional-1">
      <label for="example-optional-1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example-optional" id="example-optional-2">
      <label for="example-optional-2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example-optional" id="example-optional-3">
      <label for="example-optional-3">Option 3</label>
    </div>
  </div>
</fieldset>
`};return(m,n)=>{const a=q,r=y;return l(),g(r,{title:"Optional",id:"optional",tabs:d},{"example-description":t(()=>n[0]||(n[0]=[e("p",{class:"-text"},[u("Use "),e("code",null,"optional"),u(" to help emphasize a picker group that is not required and can be skipped.")],-1)])),example:t(()=>[e("fieldset",null,[n[1]||(n[1]=e("legend",{class:"chi-label"},[u("Select an option"),e("abbr",{class:"chi-label__optional","aria-label":"Optional field"},"(optional)")],-1)),e("div",le,[e("div",ne,[(l(),s(p,null,f([1,2,3],i=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example__optional",id:`example__optional_${i}`},null,8,te),e("label",{for:`example__optional_${i}`},"Option "+x(i),9,ae)],64))),64))])])])]),"code-webcomponent":t(()=>[c(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),oe={class:"chi-label__wrapper"},se={class:"chi-label__help"},pe={class:"chi-picker-group"},de={class:"chi-picker-group__content"},re=["id"],ue=["for"],me=k({__name:"_help",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <div class="chi-label__wrapper">
    <legend class="chi-label">Select an option</legend>
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
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-help" id="example-help-1">
      <label for="example-help-1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example-help" id="example-help-2">
      <label for="example-help-2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example-help" id="example-help-3">
      <label for="example-help-3">Option 3</label>
    </div>
  </div>
</fieldset>

<script>
  chi.popover(document.getElementById('example__help-button'));
<\/script>`},m=S(null);return M(()=>{m.value&&(m.value=chi.popover(m.value))}),C(()=>{m.value&&m.value.dispose()}),(n,a)=>{const r=q,i=R,h=y;return l(),g(h,{title:"Help",id:"help",tabs:d},{"example-description":t(()=>a[0]||(a[0]=[e("p",{class:"-text"},[u("Use "),e("code",null,"chi-label__help"),u(" to include a help icon that displays helpful information about an input in a popover. A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.")],-1)])),example:t(()=>[e("fieldset",null,[e("div",oe,[a[3]||(a[3]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",se,[e("button",{class:"chi-button -icon -xs -flat","aria-label":"Help","data-target":"#example__help-popover",ref_key:"helpButton",ref:m},a[1]||(a[1]=[e("i",{class:"chi-icon icon-circle-info-outline","aria-hidden":"true"},null,-1)]),512),a[2]||(a[2]=e("section",{class:"chi-popover chi-popover--top",id:"example__help-popover","aria-modal":"true",role:"dialog"},[e("div",{class:"chi-popover__content"},[e("p",{class:"chi-popover__text"},"Helpful information goes here.")])],-1))])]),e("div",pe,[e("div",de,[(l(),s(p,null,f([1,2,3],$=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example__help",id:`example-help-${$}`},null,8,re),e("label",{for:`example-help-${$}`},"Option "+x($),9,ue)],64))),64))])])])]),"code-webcomponent":t(()=>[c(r,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(i),c(r,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),_e={class:"chi-picker-group"},he={class:"chi-picker-group__content"},be=["id","required"],xe=["for"],fe=k({__name:"_error",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">
    Select an option
    <abbr class="chi-label__required" aria-label="Required field">*</abbr>
  </legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-error" id="example-error-1" required>
      <label for="example-error-1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example-error" id="example-error-2">
      <label for="example-error-2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example-error" id="example-error-3">
      <label for="example-error-3">Option 3</label>
    </div>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please select an option
  </div>
</fieldset>
`};return(m,n)=>{const a=q,r=y;return l(),g(r,{title:"Error",id:"error",tabs:d},{"example-description":t(()=>n[0]||(n[0]=[e("p",{class:"-text"},[u("Use the "),e("code",null,"-danger"),u(" state to provide feedback to users when an input fails to validate. To meet accessibility requirements, danger inputs must include an error message explaining the failure and/or how to correct it.")],-1)])),example:t(()=>[e("fieldset",null,[n[1]||(n[1]=e("legend",{class:"chi-label"},[u("Select an option"),e("abbr",{class:"chi-label__required","aria-label":"Required field"},"*")],-1)),e("div",_e,[e("div",he,[(l(),s(p,null,f([1,2,3],i=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example__error",id:`example__error_${i}`,required:i===1},null,8,be),e("label",{for:`example__error_${i}`},"Option "+x(i),9,xe)],64))),64))])]),n[2]||(n[2]=e("div",{class:"chi-label -status -danger"},[e("chi-icon",{icon:"circle-warning"}),u("Please select an option")],-1))])]),"code-webcomponent":t(()=>[c(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),ge={class:"chi-picker-group -fluid"},ke={class:"chi-picker-group__content"},ve=["id","checked"],qe=["for"],ye=k({__name:"_fluid",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group -fluid">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-fluid" id="example-fluid-1" checked>
      <label for="example-fluid-1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example-fluid" id="example-fluid-2">
      <label for="example-fluid-2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example-fluid" id="example-fluid-3">
      <label for="example-fluid-3">Option 3</label>
    </div>
  </div>
</fieldset>`};return(m,n)=>{const a=q,r=y;return l(),g(r,{title:"Fluid",id:"fluid",tabs:d},{example:t(()=>[e("fieldset",null,[n[0]||(n[0]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",ge,[e("div",ke,[(l(),s(p,null,f([1,2,3],i=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example__fluid",id:`example__fluid_${i}`,checked:i===1},null,8,ve),e("label",{for:`example__fluid_${i}`},"Option "+x(i),9,qe)],64))),64))])])])]),"code-webcomponent":t(()=>[c(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),$e={class:"chi-picker-group -fluid"},Oe={class:"chi-picker-group__content"},we=["id","checked"],Se=["for"],Ce=k({__name:"_alignment-lumen-centurylink",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group -fluid">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-alignment" id="example-alignment-1" checked>
      <label class="-align--left" for="example-alignment-1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example-alignment" id="example-alignment-2">
      <label for="example-alignment-2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example-alignment" id="example-alignment-3">
      <label class="-align--right" for="example-alignment-3">Option 3</label>
    </div>
  </div>
</fieldset>
`};return(m,n)=>{const a=q,r=y;return l(),g(r,{title:"Alignment",id:"alignment-lumen-centurylink",tabs:d},{"example-description":t(()=>n[0]||(n[0]=[e("p",{class:"-text"},[u("Picker group text is centered by default. However, this behavior can change by applying the modifiers "),e("code",null,"-align--left"),u(" or "),e("code",null,"-align--right"),u(".")],-1)])),example:t(()=>[e("fieldset",null,[n[1]||(n[1]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",$e,[e("div",Oe,[(l(),s(p,null,f([1,2,3],i=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example__alignment",id:`example__alignment_${i}`,checked:i===1},null,8,we),e("label",{class:O([i===1?"-align--left":"",i===3?"-align--right":""]),for:`example__alignment_${i}`},"Option "+x(i),11,Se)],64))),64))])])])]),"code-webcomponent":t(()=>[c(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),Te={class:"chi-picker-group -fluid"},Ee={class:"chi-picker-group__content"},Be=["id","checked"],He=["for"],Re=k({__name:"_disabled-fluidity",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group -fluid">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-df" id="example-df-1" checked>
      <label for="example-df-1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="example-df" id="example-df-2">
      <label class="-no-fluid" for="example-df-2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="example-df" id="example-df-3">
      <label for="example-df-3">Option 3</label>
    </div>
  </div>
</fieldset>`};return(m,n)=>{const a=q,r=y;return l(),g(r,{title:"Disable Fluidity",id:"disabled-fluidity",tabs:d},{"example-description":t(()=>n[0]||(n[0]=[e("p",{class:"-text"},[u("To disable the fluidity of a specific picker in a fluid picker group, apply the class "),e("code",null,"-no-fluid"),u(" to the picker.")],-1)])),example:t(()=>[e("fieldset",null,[n[1]||(n[1]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",Te,[e("div",Ee,[(l(),s(p,null,f([1,2,3],i=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example__disabled_fluidity",id:`example__disabled_fluidity_${i}`,checked:i===1},null,8,Be),e("label",{class:O(i===2?"-no-fluid":""),for:`example__disabled_fluidity_${i}`},"Option "+x(i),11,He)],64))),64))])])])]),"code-webcomponent":t(()=>[c(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),Me={class:"chi-picker-group -fluid",style:{"max-width":"21rem"}},Le={class:"chi-picker-group__content"},We=["id","checked"],ze=["for"],Ae={key:0,class:"chi-icon icon-atom -sm","aria-hidden":"true"},Ue={key:1,class:"chi-icon icon-atom -sm","aria-hidden":"true"},Ne=k({__name:"_text-and-icons",setup(v){const d=[1,2,3],o=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],m={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="example-text-and-icons" id="example-text-and-icons-1" checked>
      <label for="example-text-and-icons-1">
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
        <span>Radio1</span>
      </label>
      <input class="chi-picker__input" type="radio" name="example-text-and-icons" id="example-text-and-icons-2">
      <label for="example-text-and-icons-2">
        <span>Radio2</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="example-text-and-icons" id="example-text-and-icons-3">
      <label for="example-text-and-icons-3">
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
        <span>Radio3</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
    </div>
  </div>
  </fieldset>`};return(n,a)=>{const r=q,i=y;return l(),g(i,{title:"Texts and icons",id:"text-and-icons",tabs:o},{example:t(()=>[e("fieldset",null,[a[0]||(a[0]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",Me,[e("div",Le,[(l(),s(p,null,f(d,h=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example-text-and-icons",id:`example-text-and-icons-${h}`,checked:h===1},null,8,We),e("label",{for:`example-text-and-icons-${h}`},[h===1||h===3?(l(),s("i",Ae)):T("",!0),e("span",null,"Radio"+x(h),1),h===2||h===3?(l(),s("i",Ue)):T("",!0)],8,ze)],64))),64))])])])]),"code-webcomponent":t(()=>[c(r,{class:"html",lang:"html",code:m.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(r,{class:"html",lang:"html",code:m.htmlblueprint},null,8,["code"])]),_:1})}}}),Pe={class:"chi-picker-group"},Ve={class:"chi-picker-group__content"},De=["id","checked"],Fe=["for","data-tooltip"],Ie={class:"-sr--only"},Je=k({__name:"_icons",setup(v){const d=[1,2,3],o=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],m={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-ic" id="unique-id-ic1" checked>
      <label for="unique-id-ic1" data-tooltip="Option 1" data-position="bottom">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-ic" id="unique-id-ic2">
      <label for="unique-id-ic2" data-tooltip="Option 2" data-position="bottom">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-ic" id="unique-id-ic3">
      <label for="unique-id-ic3" data-tooltip="Option 3" data-position="bottom">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>

<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`},n=S([]),a=d.map(r=>E(`tooltip-${r}`));return B(()=>{a.forEach(r=>{r.value&&n.value.push(chi.tooltip(r.value))})}),C(()=>{n.value.forEach(r=>{r[0].dispose()})}),(r,i)=>{const h=q,$=R,w=y;return l(),g(w,{title:"Icons",id:"icons",tabs:o},{example:t(()=>[e("fieldset",null,[i[1]||(i[1]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",Pe,[e("div",Ve,[(l(),s(p,null,f(d,_=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example__icons",id:`example__icons_${_}`,checked:_===1},null,8,De),e("label",{ref_for:!0,ref:`tooltip-${_}`,for:`example__icons_${_}`,"data-tooltip":`Option ${_}`,"data-position":"bottom"},[e("span",Ie,"Option "+x(_),1),i[0]||(i[0]=e("i",{class:"chi-icon icon-atom -sm","aria-hidden":"true"},null,-1))],8,Fe)],64))),64))])])])]),"code-webcomponent":t(()=>[c(h,{class:"html",lang:"html",code:m.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c($),c(h,{lang:"html",code:m.htmlblueprint},null,8,["code"])]),_:1})}}}),je={class:"-d--flex -flex--column"},Ge={class:"-py--2"},Ke={class:"chi-picker-group"},Qe={class:"chi-picker-group__content"},Xe=["name","id","checked"],Ye=["for"],Ze={class:"-py--2"},ei={class:"chi-picker-group"},ii={class:"chi-picker-group__content"},li=["name","id","checked"],ni=["for","data-tooltip"],ti={class:"-sr--only"},ai=k({__name:"_sizes-lumen-centurylink",setup(v){const d=[1,2,3],o=["xs","sm","md","lg","xl"],m=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:"",htmlblueprint:`<!-- xs -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-xs" id="unique-id-xs1" checked>
      <label class="-xs" for="unique-id-xs1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-xs" id="unique-id-xs2">
      <label class="-xs" for="unique-id-xs2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-xs" id="unique-id-xs3">
      <label class="-xs" for="unique-id-xs3">Option 3</label>
    </div>
  </div>
</fieldset>

<!-- sm -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-sm" id="unique-id-sm1" checked>
      <label class="-sm" for="unique-id-sm1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm" id="unique-id-sm2">
      <label class="-sm" for="unique-id-sm2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm" id="unique-id-sm3">
      <label class="-sm" for="unique-id-sm3">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-sm-icon" id="unique-id-sm4" checked>
      <label class="-sm" for="unique-id-sm4">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -xs" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm-icon" id="unique-id-sm5">
      <label class="-sm" for="unique-id-sm5">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -xs" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm-icon" id="unique-id-sm6">
      <label class="-sm" for="unique-id-sm6">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -xs" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>

<!-- md -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-md" id="unique-id-md1" checked>
      <label class="-md" for="unique-id-md1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-md" id="unique-id-md2">
      <label class="-md" for="unique-id-md2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-md" id="unique-id-md3">
      <label class="-md" for="unique-id-md3">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-md-icon" id="unique-id-md4" checked>
      <label class="-md" for="unique-id-md4">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-md-icon" id="unique-id-md5">
      <label class="-md" for="unique-id-md5">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-md-icon" id="unique-id-md6">
      <label class="-md" for="unique-id-md6">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>

<!-- lg -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-lg" id="unique-id-lg1" checked>
      <label class="-lg" for="unique-id-lg1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg" id="unique-id-lg2">
      <label class="-lg" for="unique-id-lg2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg" id="unique-id-lg3">
      <label class="-lg" for="unique-id-lg3">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-lg-icon" id="unique-id-lg4" checked>
      <label class="-lg" for="unique-id-lg4">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg-icon" id="unique-id-lg5">
      <label class="-lg" for="unique-id-lg5">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg-icon" id="unique-id-lg6">
      <label class="-lg" for="unique-id-lg6">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`},a=S([]),r=d.map(i=>E(`tooltip-${i}`));return B(()=>{r.forEach(i=>{i.value&&a.value.push(chi.tooltip(i.value))})}),C(()=>{a.value.forEach(i=>{i[0].dispose()})}),(i,h)=>{const $=q,w=y;return l(),g(w,{title:"Sizes",id:"sizes-lumen-centurylink","title-size":"h2",tabs:m},{"example-description":t(()=>h[0]||(h[0]=[e("p",{class:"-text"},[u("Picker groups support the following sizes: "),e("code",null,"-xs"),u(", "),e("code",null,"-sm"),u(", "),e("code",null,"-md"),u(", "),e("code",null,"-lg"),u(", "),e("code",null,"-xl"),u(". The default size is "),e("code",null,"-md"),u(".")],-1)])),example:t(()=>[e("div",je,[(l(),s(p,null,f(o,_=>(l(),s(p,null,[e("strong",null,"-"+x(_),1),e("div",Ge,[e("fieldset",null,[h[1]||(h[1]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",Ke,[e("div",Qe,[(l(),s(p,null,f(d,b=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:`example__size_${_}`,id:`example__size_${_}_${b}`,checked:b===1},null,8,Xe),e("label",{for:`example__size_${_}_${b}`,class:O(`-${_}`)},"Option "+x(b),11,Ye)],64))),64))])])]),e("div",Ze,[e("fieldset",null,[h[2]||(h[2]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",ei,[e("div",ii,[(l(),s(p,null,f(d,b=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:`example__size_${_}_icon`,id:`example__size_${_}_icon_${b}`,checked:b===1},null,8,li),e("label",{ref_for:!0,ref:`tooltip-${b}`,for:`example__size_${_}_icon_${b}`,class:O(`-${_}`),"data-tooltip":`Option ${b}`,"data-position":"bottom"},[e("span",ti,"Option "+x(b),1),e("i",{class:O(["chi-icon icon-atom",_==="xs"?"-xs":"-sm"]),"aria-hidden":"true"},null,2)],10,ni)],64))),64))])])])])])],64))),64))])]),"code-webcomponent":t(()=>[c($,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c($,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),ci={class:"-d--flex -flex--column"},oi={class:"-py--2"},si={class:"chi-picker-group"},pi={class:"chi-picker-group__content"},di=["name","id","checked"],ri=["for"],ui={class:"-py--2"},mi={class:"chi-picker-group"},_i={class:"chi-picker-group__content"},hi=["name","id","checked"],bi=["for","data-tooltip"],xi={class:"-sr--only"},fi=k({__name:"_sizes-portal",setup(v){const d=[1,2,3],o=["xs","sm","md","lg"],m=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:"",htmlblueprint:`<!-- xs -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-xs" id="unique-id-xs1" checked>
      <label class="-xs" for="unique-id-xs1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-xs" id="unique-id-xs2">
      <label class="-xs" for="unique-id-xs2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-xs" id="unique-id-xs3">
      <label class="-xs" for="unique-id-xs3">Option 3</label>
    </div>
  </div>
</fieldset>

<!-- sm -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-sm" id="unique-id-sm1" checked>
      <label class="-sm" for="unique-id-sm1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm" id="unique-id-sm2">
      <label class="-sm" for="unique-id-sm2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm" id="unique-id-sm3">
      <label class="-sm" for="unique-id-sm3">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-sm-icon" id="unique-id-sm4" checked>
      <label class="-sm" for="unique-id-sm4">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -xs" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm-icon" id="unique-id-sm5">
      <label class="-sm" for="unique-id-sm5">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -xs" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-sm-icon" id="unique-id-sm6">
      <label class="-sm" for="unique-id-sm6">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -xs" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>

<!-- md -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-md" id="unique-id-md1" checked>
      <label class="-md" for="unique-id-md1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-md" id="unique-id-md2">
      <label class="-md" for="unique-id-md2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-md" id="unique-id-md3">
      <label class="-md" for="unique-id-md3">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-md-icon" id="unique-id-md4" checked>
      <label class="-md" for="unique-id-md4">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-md-icon" id="unique-id-md5">
      <label class="-md" for="unique-id-md5">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-md-icon" id="unique-id-md6">
      <label class="-md" for="unique-id-md6">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>
<script>
chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>

<!-- lg -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-lg" id="unique-id-lg1" checked>
      <label class="-lg" for="unique-id-lg1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg" id="unique-id-lg2">
      <label class="-lg" for="unique-id-lg2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg" id="unique-id-lg3">
      <label class="-lg" for="unique-id-lg3">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-lg-icon" id="unique-id-lg4" checked>
      <label class="-lg" for="unique-id-lg4">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg-icon" id="unique-id-lg5">
      <label class="-lg" for="unique-id-lg5">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-lg-icon" id="unique-id-lg6">
      <label class="-lg" for="unique-id-lg6">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>
<script>
chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>

<!-- xl -->
<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-xl" id="unique-id-xl1" checked>
      <label class="-xl" for="unique-id-xl1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-xl" id="unique-id-xl2">
      <label class="-xl" for="unique-id-xl2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-xl" id="unique-id-xl3">
      <label class="-xl" for="unique-id-xl3">Option 3</label>
    </div>
  </div>
</fieldset>

<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-xl-icon" id="unique-id-xl4" checked>
      <label class="-xl" for="unique-id-xl4">
        <span class="-sr--only">Option 1</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-xl-icon" id="unique-id-xl5">
      <label class="-xl" for="unique-id-xl5">
        <span class="-sr--only">Option 2</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-xl-icon" id="unique-id-xl6">
      <label class="-xl" for="unique-id-xl6">
        <span class="-sr--only">Option 3</span>
        <i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</fieldset>
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`},a=S([]),r=d.map(i=>E(`tooltip-${i}`));return B(()=>{r.forEach(i=>{i.value&&a.value.push(chi.tooltip(i.value))})}),C(()=>{a.value.forEach(i=>{i[0].dispose()})}),(i,h)=>{const $=q,w=y;return l(),g(w,{title:"Sizes",id:"sizes-portal","title-size":"h2",tabs:m},{"example-description":t(()=>h[0]||(h[0]=[e("p",{class:"-text"},[u("Picker groups support the following sizes: "),e("code",null,"-xs"),u(", "),e("code",null,"-sm"),u(", "),e("code",null,"-md"),u(", "),e("code",null,"-lg"),u(". The default size is "),e("code",null,"-md"),u(".")],-1)])),example:t(()=>[e("div",ci,[(l(),s(p,null,f(o,_=>(l(),s(p,null,[e("strong",null,"-"+x(_),1),e("div",oi,[e("fieldset",null,[h[1]||(h[1]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",si,[e("div",pi,[(l(),s(p,null,f(d,b=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:`example__size_${_}_portal`,id:`example__size_${_}_${b}_portal`,checked:b===1},null,8,di),e("label",{for:`example__size_${_}_${b}_portal`,class:O(`-${_}`)},"Option "+x(b),11,ri)],64))),64))])])]),e("div",ui,[e("fieldset",null,[h[2]||(h[2]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",mi,[e("div",_i,[(l(),s(p,null,f(d,b=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:`example__size_${_}_icon_portal`,id:`example__size_${_}_icon_${b}_portal`,checked:b===1},null,8,hi),e("label",{ref_for:!0,ref:`tooltip-${b}`,for:`example__size_${_}_icon_${b}_portal`,class:O(`-${_}`),"data-tooltip":`Option ${b}`,"data-position":"bottom"},[e("span",xi,"Option "+x(b),1),e("i",{class:O(["chi-icon icon-atom",_==="xs"?"-xs":"-sm"]),"aria-hidden":"true"},null,2)],10,bi)],64))),64))])])])])])],64))),64))])]),"code-webcomponent":t(()=>[c($,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c($,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),gi={class:"chi-picker-group -fluid"},ki={class:"chi-picker-group__content"},vi=["id","checked"],qi=["for"],yi={class:"chi-picker-label"},$i={class:"chi-picker-label"},Oi=k({__name:"_multiple_lines",setup(v){const d=[{disabled:!0,id:"webcomponent",label:"Web Component"},{active:!0,id:"htmlblueprint",label:"HTML Blueprint"}],o={webcomponent:"",htmlblueprint:`<fieldset>
  <legend class="chi-label">Select an option</legend>
  <div class="chi-picker-group -fluid">
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-mlt" id="unique-id-mlt1" checked>
      <label class="chi-picker-label__wrapper" for="unique-id-mlt1">
        <div class="chi-picker-label">
          Radio 1
        </div>
        <div class="chi-picker-label">
          Radio 1 description
        </div>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-mlt" id="unique-id-mlt2">
      <label class="chi-picker-label__wrapper" for="unique-id-mlt2">
        <div class="chi-picker-label">
          Radio 2
        </div>
        <div class="chi-picker-label">
          Radio 2 description
        </div>
      </label>
      <input class="chi-picker__input" type="radio" name="unique-name-mlt" id="unique-id-mlt3">
      <label class="chi-picker-label__wrapper" for="unique-id-mlt3">
        <div class="chi-picker-label">
          Radio 3
        </div>
        <div class="chi-picker-label">
          Radio 3 description
        </div>
      </label>
    </div>
  </div>
</fieldset>`};return(m,n)=>{const a=q,r=y;return l(),g(r,{title:"Multiple lines of Text",id:"multiple-lines",tabs:d},{example:t(()=>[e("fieldset",null,[n[0]||(n[0]=e("legend",{class:"chi-label"},"Select an option",-1)),e("div",gi,[e("div",ki,[(l(),s(p,null,f([1,2,3],i=>(l(),s(p,null,[e("input",{class:"chi-picker__input",type:"radio",name:"example-multiple-lines",id:`example-mlt-${i}`,checked:i===1},null,8,vi),e("label",{class:"chi-picker-label__wrapper",for:`example-mlt-${i}`},[e("div",yi,"Radio "+x(i),1),e("div",$i,"Radio "+x(i)+" description",1)],8,qi)],64))),64))])])])]),"code-webcomponent":t(()=>[c(a,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":t(()=>[c(a,{class:"html",lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),Ei=k({__name:"index",setup(v){const d=L();return(o,m)=>(l(),s("div",null,[m[0]||(m[0]=e("h2",null,"Examples",-1)),c(N),c(I),c(Q),c(ie),c(ce),c(me),c(fe),m[1]||(m[1]=e("h2",null,"Responsive",-1)),m[2]||(m[2]=e("p",{class:"-text"},[u("Picker groups can be expanded to fill the parent space by applying the class "),e("code",null,"-fluid"),u(". On smaller viewports, fluid pickers stack.")],-1)),c(ye),["lumen","centurylink"].includes(H(d))?(l(),g(Ce,{key:0})):T("",!0),c(Re),m[3]||(m[3]=e("h2",null,"Content Variations",-1)),c(Oi),c(Ne),c(Je),["lumen","centurylink"].includes(H(d))?(l(),g(ai,{key:1})):(l(),g(fi,{key:2}))]))}});export{Ei as _};

import{_ as w}from"./BskPbflv.js";import{_ as h}from"./CBk3mWUi.js";import{_ as x}from"./Apvmmo3P.js";import{_ as u}from"./BUnP1NT4.js";import{e as r,o as m,f as b,w as a,a as e,b as t,d as s,c as y}from"./CR_XfkrP.js";const f=r({__name:"_value-min-max-options",setup(_){const o={webcomponent:`<chi-label for="date-3">Date</chi-label>
<chi-date-picker id="date-3" value="01/24/2024" min="01/14/2024" max="02/07/2024">`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="datepicker-3">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="datepicker-3" type="text" class="chi-input" value="01/24/2024" min="01/14/2024" max="02/07/2024" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
</div>

<script>chi.datePicker(document.getElementById('datepicker-3'));<\/script>

<!-- Or configure programmatically -->
<script>
  chi.datePicker(
    document.getElementById('datepicker-3'),
    {
      date: '01/24/2024',
      min: '01/24/2024'
    }
);
<\/script>`};return(n,d)=>{const l=h,c=x,i=u;return m(),b(i,{title:"Value, min and max options",id:"value-min-max-options"},{example:a(()=>d[0]||(d[0]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"example__datepicker_date_min_max"},"Date"),e("chi-date-picker",{id:"example__datepicker_date_min_max",value:"01/24/2024",min:"01/14/2024",max:"02/07/2024"})],-1)])),"code-webcomponent":a(()=>[t(l,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c),t(l,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),g=r({__name:"_calendar-base",setup(_){const o=Array.from(Array(30).keys()),n=["S","M","T","W","T","F","S"],d={webcomponent:"<chi-date></chi-date>",htmlblueprint:""};return(()=>{let c="",i="";o.forEach(p=>{c+=`
    <div class="chi-datepicker__day">${p+1}</div>`}),n.forEach(p=>{i+=`
    <div class="chi-datepicker__week-day">${p}</div>`}),d.htmlblueprint=`<div class="chi-datepicker -week-starts-on-sun -month-starts-on-wed">
  <div class="chi-datepicker__month-row">
    <div class="prev">
      <i class="chi-icon icon-chevron-left -sm" aria-hidden="true"></i>
    </div>
    <div class="chi-datepicker__month">
      November 2024
    </div>
    <div class="next">
      <i class="chi-icon icon-chevron-right -sm" aria-hidden="true"></i>
    </div>
  </div>
  <div class="chi-datepicker__day-names">${i}
  </div>
  <div class="chi-datepicker__days">${c}
  </div>
</div>`})(),(c,i)=>{const p=h,v=x,k=u;return m(),b(k,{titleSize:"h4",title:"Base",id:"calendar-base"},{example:a(()=>i[0]||(i[0]=[e("chi-date",null,null,-1)])),"code-webcomponent":a(()=>[t(p,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(v),i[1]||(i[1]=e("div",{class:"chi-tab__description"},[s("Use the classes "),e("code",null,"-month-starts-on-sun"),s(", "),e("code",null,"-month-starts-on-mon"),s(", "),e("code",null,"-month-starts-on-tue"),s(", "),e("code",null,"-month-starts-on-wed"),s(", "),e("code",null,"-month-starts-on-thu"),s(", "),e("code",null,"-month-starts-on-fri"),s(" and "),e("code",null,"-month-starts-on-sat"),s(" to locate the first day in the correct cell."),e("br"),s("Use the classes "),e("code",null,"-week-starts-on-sun"),s(" or "),e("code",null,"-week-starts-on-mon"),s(" to fit the week definition of the desired locale."),e("br"),s("Use the class "),e("code",null,"-today"),s(" for the current date")],-1)),t(p,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),D=r({__name:"_calendar-active",setup(_){const o=Array.from(Array(30).keys()),n=["S","M","T","W","T","F","S"],d={webcomponent:'<chi-date value="05/15/2024"></chi-date>',htmlblueprint:""};return(()=>{let c="",i="";o.forEach(p=>{c+=`
    <div class="chi-datepicker__day ${p===14?"-active":""}">${p+1}</div>`}),n.forEach(p=>{i+=`
    <div class="chi-datepicker__week-day">${p}</div>`}),d.htmlblueprint=`<div class="chi-datepicker -week-starts-on-sun -month-starts-on-wed">
  <div class="chi-datepicker__month-row">
    <div class="prev">
      <i class="chi-icon icon-chevron-left -sm" aria-hidden="true"></i>
    </div>
    <div class="chi-datepicker__month">
      May 2024
    </div>
    <div class="next">
      <i class="chi-icon icon-chevron-right -sm" aria-hidden="true"></i>
    </div>
  </div>
  <div class="chi-datepicker__day-names">${i}
  </div>
  <div class="chi-datepicker__days">${c}
  </div>
</div>`})(),(c,i)=>{const p=h,v=x,k=u;return m(),b(k,{titleSize:"h4",title:"Active",id:"calendar-active"},{example:a(()=>i[0]||(i[0]=[e("chi-date",{value:"05/15/2024"},null,-1)])),"code-webcomponent":a(()=>[t(p,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(v),i[1]||(i[1]=e("div",{class:"chi-tab__description"},[s("Use class "),e("code",null,"-active"),s(" for the selected date")],-1)),t(p,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),C=r({__name:"_date-picker-multiple-dates",setup(_){const o=[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<chi-label for="multiple-dates">Date</chi-label>
<chi-date-picker id="multiple-dates" multiple></chi-date-picker>`,htmlblueprint:""};return(d,l)=>{const c=h,i=u;return m(),b(i,{title:"Multiple dates",id:"date-picker-multiple-dates",tabs:o},{"example-description":a(()=>l[0]||(l[0]=[e("p",{class:"-text"},[s("Use the attribute "),e("code",null,"multiple"),s(" to allow the user to select multiple dates.")],-1)])),example:a(()=>l[1]||(l[1]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"example__datepicker_date_multiple"},"Date"),e("chi-date-picker",{id:"example__datepicker_date_multiple",multiple:""})],-1)])),"code-webcomponent":a(()=>[t(c,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),S=r({__name:"_excluded-week-days",setup(_){const o=[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<chi-label for="date-excluded-weekdays">Date</chi-label>
<chi-date-picker id="date-excluded-weekdays" excluded-weekdays="0, 6"></chi-date-picker>`,htmlblueprint:""};return(d,l)=>{const c=h,i=u;return m(),b(i,{title:"Excluded week days",id:"excluded-week-days",tabs:o},{"example-description":a(()=>l[0]||(l[0]=[e("p",{class:"-text"},[s("Specify which week days to disable by using "),e("code",null,'excluded-weekdays="0, 6"'),s(" attribute")],-1)])),example:a(()=>l[1]||(l[1]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"example__datepicker_date_excluded_weekdays"},"Date"),e("chi-date-picker",{id:"example__datepicker_date_excluded_weekdays","excluded-weekdays":"0, 6"})],-1)])),"code-webcomponent":a(()=>[t(c,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),$=r({__name:"_calendar-multiple-active-dates",setup(_){const o=Array.from(Array(30).keys()),n=["S","M","T","W","T","F","S"],d={webcomponent:'<chi-date value="03/10/2024,03/11/2024,03/12/2024" multiple></chi-date>',htmlblueprint:""};return(()=>{let c="",i="";o.forEach(p=>{c+=`
    <div class="chi-datepicker__day ${p>=9&&p<=11?"-active":""}">${p+1}</div>`}),n.forEach(p=>{i+=`
    <div class="chi-datepicker__week-day">${p}</div>`}),d.htmlblueprint=`<div class="chi-datepicker -week-starts-on-sun -month-starts-on-wed">
  <div class="chi-datepicker__month-row">
    <div class="prev">
      <i class="chi-icon icon-chevron-left -sm" aria-hidden="true"></i>
    </div>
    <div class="chi-datepicker__month">
      March 2024
    </div>
    <div class="next">
      <i class="chi-icon icon-chevron-right -sm" aria-hidden="true"></i>
    </div>
  </div>
  <div class="chi-datepicker__day-names">${i}
  </div>
  <div class="chi-datepicker__days">${c}
  </div>
</div>`})(),(c,i)=>{const p=h,v=u;return m(),b(v,{titleSize:"h4",title:"Multiple active dates",id:"calendar-multiple-active-dates"},{example:a(()=>i[0]||(i[0]=[e("chi-date",{multiple:"",value:"03/10/2024,03/11/2024,03/12/2024"},null,-1)])),"code-webcomponent":a(()=>[i[1]||(i[1]=e("div",{class:"chi-tab__description"},"Specify multiple active dates by separating the dates with a comma",-1)),t(p,{lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[i[2]||(i[2]=e("div",{class:"chi-tab__description"},[e("span",{class:"-text--grey"},[s("Use class "),e("code",null,"-active"),s(" for the selected date")])],-1)),t(p,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),E=r({__name:"_excluded-dates-week-days",setup(_){const o=[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<chi-label for="date-excluded-days-dates">Date</chi-label>
<chi-date-picker id="date-excluded-days-dates" excluded-weekdays="0, 6" excluded-dates="01/23/2024, 05/25/2024, 07/03/2024, 09/12/2024, 12/12/2024"></chi-date-picker>`,htmlblueprint:""};return(d,l)=>{const c=h,i=u;return m(),b(i,{title:"Excluded dates and week days",id:"excluded-dates-week-days",tabs:o},{"example-description":a(()=>l[0]||(l[0]=[e("p",{class:"-text"},[s("Disable dates - "),e("code",null,'excluded-dates="01/23/2024, 05/25/2024"'),e("br"),s("Disable days - "),e("code",null,'excluded-weekdays="0, 6"')],-1)])),example:a(()=>l[1]||(l[1]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"example__datepicker_excluded_days_dates"},"Date"),e("chi-date-picker",{id:"example__datepicker_excluded_days_dates","excluded-dates":"01/23/2024, 05/25/2024, 07/03/2024, 09/12/2024, 12/12/2024","excluded-weekdays":"0, 6"})],-1)])),"code-webcomponent":a(()=>[t(c,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),M=r({__name:"_message",setup(_){const o={webcomponent:`<chi-label for="date-message">Date</chi-label>
<chi-date-picker id="date-message" helper-message="Optional helper message"></chi-date-picker>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="datepicker-message">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="datepicker-message" type="text" class="chi-input" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>

<script>chi.datePicker(document.getElementById('datepicker-message'));<\/script>`};return(n,d)=>{const l=h,c=x,i=u;return m(),b(i,{title:"Message",id:"date-message"},{"example-description":a(()=>d[0]||(d[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"helper-message"),s(" attribute to provide users with additional information, validation feedback, and other helpful information.")],-1)])),example:a(()=>d[1]||(d[1]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"example__date_message"},"Date"),e("chi-date-picker",{id:"example__date_message","helper-message":"Optional helper message"})],-1)])),"code-webcomponent":a(()=>[t(l,{lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c),t(l,{code:o.htmlblueprint,lang:"html"},null,8,["code"])]),_:1})}}}),T=r({__name:"_error",setup(_){const o={webcomponent:`<chi-label for="date-error">Date</chi-label>
<chi-date-picker id="date-error" state="danger" helper-message="Please select a date"></chi-date-picker>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="datepicker-error">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="datepicker-error" type="text" class="chi-input -danger" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Please select a date
  </div>
</div>

<script>chi.datePicker(document.getElementById('datepicker-error'));<\/script>`};return(n,d)=>{const l=h,c=x,i=u;return m(),b(i,{title:"Error",id:"date-error"},{"example-description":a(()=>d[0]||(d[0]=[e("p",{class:"-text"},[s("Use the "),e("code",null,"danger"),s(" state to provide feedback to users when date fails to validate. To meet accessibility requirements, danger date picker must include an error message explaining the failure and/or how to correct it.")],-1)])),example:a(()=>d[1]||(d[1]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"example__date_error"},"Date"),e("chi-date-picker",{id:"example__date_error",state:"danger","helper-message":"Please select a date"})],-1)])),"code-webcomponent":a(()=>[t(l,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c),t(l,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),P=r({__name:"_date-picker-date-time",setup(_){const o=[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<chi-label for="date-time">Date</chi-label>
<chi-date-picker id="date-time" mode="datetime"></chi-date-picker>`,htmlblueprint:""};return(d,l)=>{const c=h,i=u;return m(),b(i,{title:"Date Time",id:"date-picker-date-time",tabs:o},{example:a(()=>l[0]||(l[0]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"example__datepicker_date_time"},"Date Time"),e("chi-date-picker",{id:"example__datepicker_date_time",mode:"datetime"})],-1)])),"code-webcomponent":a(()=>[t(c,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),N=r({__name:"_date-picker-date-time-stepped",setup(_){const o=[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<chi-label for="date-time">Date</chi-label>
<chi-date-picker id="date-time" mode="datetime" minutes-step="5"></chi-date-picker>`,htmlblueprint:""};return(d,l)=>{const c=h,i=u;return m(),b(i,{title:"Date Time stepped",id:"date-picker-date-time-stepped",tabs:o,titleSize:"h4"},{"example-description":a(()=>l[0]||(l[0]=[e("p",{class:"-text"},[s("Minutes can be shown in steps of 5, 10, 15, 20, or 30 minutes or seconds. Use the property "),e("code",null,'minutes-step="value"'),s(" to define the step for the minutes (defaults to 15 min) if no value is provided.")],-1)])),example:a(()=>l[1]||(l[1]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"example__datepicker_date_time_stepped"},"Date Time"),e("chi-date-picker",{id:"example__datepicker_date_time_stepped",mode:"datetime","minutes-step":"5"})],-1)])),"code-webcomponent":a(()=>[t(c,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),Y=r({__name:"_excluded-dates",setup(_){const o=[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<chi-label for="date-excluded-dates">Date</chi-label>
<chi-date-picker id="date-excluded-dates" value="01/05/2024" excluded-dates="01/24/2024, 05/25/2024, 07/03/2024, 09/12/2024, 12/12/2024"></chi-date-picker>`,htmlblueprint:""};return(d,l)=>{const c=h,i=u;return m(),b(i,{title:"Excluded dates",id:"excluded-dates",tabs:o},{"example-description":a(()=>l[0]||(l[0]=[e("p",{class:"-text"},[s("Specify which dates to disable by using "),e("code",null,'excluded-dates="01/24/2020, 05/25/2020"'),s(" attribute"),e("br"),s("Separate dates with a comma")],-1)])),example:a(()=>l[1]||(l[1]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"example__datepicker_date_excluded_dates"},"Date"),e("chi-date-picker",{id:"example__datepicker_date_excluded_dates",value:"01/05/2024","excluded-dates":"01/24/2024, 05/25/2024, 07/03/2024, 09/12/2024, 12/12/2024"})],-1)])),"code-webcomponent":a(()=>[t(c,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),B=r({__name:"_base-date-picker",setup(_){const o={webcomponent:`<chi-label for="date">Date</chi-label>
<chi-date-picker id="date"></chi-date-picker>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="datepicker-1">Date</label>
  <div class="chi-input__wrapper -icon--right">
    <input id="datepicker-1" type="text" class="chi-input" placeholder="MM/DD/YYYY">
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
</div>

<script>chi.datePicker(document.getElementById('datepicker-1'));<\/script>`};return(n,d)=>{const l=h,c=x,i=u;return m(),b(i,{title:"Base",id:"base-date-picker"},{example:a(()=>d[0]||(d[0]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"date"},"Date"),e("chi-date-picker",{id:"date"})],-1)])),"code-webcomponent":a(()=>[t(l,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c),t(l,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),W=r({__name:"_disabled",setup(_){const o={webcomponent:`<chi-label for="date-2">Date</chi-label>
<chi-date-picker id="date-2" disabled></chi-date-picker>`,htmlblueprint:`<div class="chi-form__item">
  <label class="chi-label" for="datepicker-2">Date</label>
  <div class="chi-input__wrapper -disabled -icon--right">
    <input id="datepicker-2" type="text" class="chi-input" placeholder="MM/DD/YYYY" disabled>
    <i class="chi-icon icon-date" aria-hidden="true"></i>
  </div>
</div>

<script>chi.datePicker(document.getElementById('datepicker-2'));<\/script>`};return(n,d)=>{const l=h,c=x,i=u;return m(),b(i,{title:"Disabled",id:"date-disabled",additionalStyle:"z-index: 1;"},{example:a(()=>d[0]||(d[0]=[e("div",{style:{"max-width":"15rem"}},[e("chi-label",{for:"example__datepicker_date_2"},"Date"),e("chi-date-picker",{id:"example__datepicker_date_2",disabled:""})],-1)])),"code-webcomponent":a(()=>[t(l,{class:"html",lang:"html",code:o.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c),t(l,{lang:"html",code:o.htmlblueprint},null,8,["code"])]),_:1})}}}),A=r({__name:"_calendar-min-max",setup(_){const o=Array.from(Array(30).keys()),n=["S","M","T","W","T","F","S"],d={webcomponent:'<chi-date min="06/06/2024" max="06/22/2024"></chi-date>',htmlblueprint:""};return(()=>{let c="",i="";o.forEach(p=>{c+=`
    <div class="chi-datepicker__day ${p<=4||p>=22?"-inactive":""}">${p+1}</div>`}),n.forEach(p=>{i+=`
    <div class="chi-datepicker__week-day">${p}</div>`}),d.htmlblueprint=`<div class="chi-datepicker -week-starts-on-sun -month-starts-on-sat">
  <div class="chi-datepicker__month-row">
    <div class="prev">
      <i class="chi-icon icon-chevron-left -sm" aria-hidden="true"></i>
    </div>
    <div class="chi-datepicker__month">
      June 2024
    </div>
    <div class="next">
      <i class="chi-icon icon-chevron-right -sm" aria-hidden="true"></i>
    </div>
  </div>
  <div class="chi-datepicker__day-names">${i}
  </div>
  <div class="chi-datepicker__days">${c}
  </div>
</div>`})(),(c,i)=>{const p=h,v=x,k=u;return m(),b(k,{titleSize:"h4",title:"Min and Max ",id:"calendar-min-max"},{example:a(()=>i[0]||(i[0]=[e("chi-date",{min:"06/06/2024",max:"06/22/2024"},null,-1)])),"code-webcomponent":a(()=>[t(p,{class:"html",lang:"html",code:d.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(v),i[1]||(i[1]=e("div",{class:"chi-tab__description"},[s("Use class "),e("code",null,"-inactive"),s(" for deactivated dates.")],-1)),t(p,{lang:"html",code:d.htmlblueprint},null,8,["code"])]),_:1})}}}),U=r({__name:"_calendar-date-time",setup(_){const o=[{active:!0,id:"webcomponent",label:"Web Component"},{disabled:!0,id:"htmlblueprint",label:"HTML Blueprint"}],n={webcomponent:`<chi-date></chi-date>
<chi-time></chi-time>`,htmlblueprint:""};return(d,l)=>{const c=h,i=u;return m(),b(i,{titleSize:"h4",title:"Date and Time",id:"calendar-date-time",tabs:o},{example:a(()=>l[0]||(l[0]=[e("div",{class:"-d--flex",style:{width:"28.75rem"}},[e("chi-date"),e("chi-time")],-1)])),"code-webcomponent":a(()=>[t(c,{class:"html",lang:"html",code:n.webcomponent},null,8,["code"])]),"code-htmlblueprint":a(()=>[t(c,{class:"html",lang:"html",code:n.htmlblueprint},null,8,["code"])]),_:1})}}}),O=r({__name:"index",setup(_){return(o,n)=>{const d=w;return m(),y("div",null,[n[0]||(n[0]=e("h2",null,"Examples",-1)),t(d,null,{default:a(()=>[t(B)]),_:1}),t(W),t(d,null,{default:a(()=>[t(f),t(S),t(Y),t(E),t(M),t(T),t(P),t(N),t(C)]),_:1}),n[1]||(n[1]=e("h3",null,"Calendar",-1)),n[2]||(n[2]=e("p",{class:"-text"},"An example of a date picker calendar not attached to any element.",-1)),t(g),t(D),t($),t(A),t(U)])}}});export{O as _};

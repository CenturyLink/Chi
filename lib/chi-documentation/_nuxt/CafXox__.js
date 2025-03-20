import{b as o}from"./DhIYcLiR.js";const l=(t,e)=>{switch(t.key){case"class":return`<code>-bg--${e.name}</code>`;case"value":return`<code>background-color: ${e.value}</code>`;case"result":return`<div class="-text -b--1 -bg--${e.name}" style="height:15px;"></div>`;default:return""}},c=(t,e)=>{switch(t.key){case"class":return`<code>-text--${e.name}</code>
            <dl class="-text -text--xs -mt--2">
              <dt class="-text--bold">Font-size:</dt>
              <dt>${e.value[0]}</dt>
              <dt class="-text--bold -mt--1">Line-height:</dt>
              <dt>${e.value[1]}</dt>
            </dl>`;case"value":return`<p class="-text--${e.name} -px--1">The quick brown fox jumps over the lazy dog.</p>`;default:return""}};function n(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}function d(t=2){var s,a;return((s=window==null?void 0:window.localStorage)!=null&&s.chiVersions?JSON.parse((a=window==null?void 0:window.localStorage)==null?void 0:a.chiVersions):o).filter(r=>Number(r.split(".")[0])>=t)}export{c as a,d as b,n as c,l as g};

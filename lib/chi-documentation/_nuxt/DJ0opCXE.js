const a=(t,e)=>{switch(t.key){case"class":return`<code>-bg--${e.name}</code>`;case"value":return`<code>background-color: ${e.value}</code>`;case"result":return`<div class="-text -b--1 -bg--${e.name}" style="height:15px;"></div>`;default:return""}},s=(t,e)=>{switch(t.key){case"class":return`<code>-text--${e.name}</code>
            <dl class="-text -text--xs -mt--2">
              <dt class="-text--bold">Font-size:</dt>
              <dt>${e.value[0]}</dt>
              <dt class="-text--bold -mt--1">Line-height:</dt>
              <dt>${e.value[1]}</dt>
            </dl>`;case"value":return`<p class="-text--${e.name} -px--1">The quick brown fox jumps over the lazy dog.</p>`;default:return""}};function l(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}export{s as a,l as c,a as g};

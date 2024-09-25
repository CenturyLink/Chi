import{_ as t}from"./onyWiYp2.js";import{e as i,o as c,c as a,a as l,b as n,d}from"./CEIPSiTs.js";const r=`
        var elem = document.getElementById('accordion-1');
        var accordion = chi.accordion(elem);
        // do stuff
        accordion.dispose();
      `,u=`
        var elem = document.getElementById('accordion-2');
        var accordion = chi.accordion(elem);
        var elem2 = document.getElementById('accordion-2');
        var accordion2 = chi.accordion(elem2);
        accordion === accordion2; // returns true

        accordion.dispose(); // Only have to do it once.
      `,h=i({__name:"_properties",setup(s){return(v,o)=>{const e=t;return c(),a("div",null,[o[0]||(o[0]=l("h2",null,"JavaScript",-1)),o[1]||(o[1]=l("h3",{class:"mt--2"},"Methods",-1)),o[2]||(o[2]=l("section",{class:"chi-table chi-table__methods -bordered -my--3"},[l("div",null,[l("table",{class:"-text",cellpadding:"0",cellspacing:"0"},[l("thead",null,[l("tr",null,[l("th",null,[l("div",null,"Method")]),l("th",null,[l("div",null,"Description")]),l("th",null,[l("div",null,"Returns")])])]),l("tbody",null,[l("tr",null,[l("td",null,[l("div",null,[l("code",null,"hide() => void")])]),l("td",null,[l("div",null,"Hides the accordion or individual accordion item (if provided)")]),l("td",null,[l("div",null,"Type: void")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"show() => void")])]),l("td",null,[l("div",null,"Shows the accordion or individual accordion item (if provided)")]),l("td",null,[l("div",null,"Type: void")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"toggle() => void")])]),l("td",null,[l("div",null,"Toggles active state (show/hide) of the accordion or accordion item (if provided)")]),l("td",null,[l("div",null,"Type: void")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"expandAll() => void")])]),l("td",null,[l("div",null,"Expands all the accordion items")]),l("td",null,[l("div",null,"Type: void")])]),l("tr",null,[l("td",null,[l("div",null,[l("code",null,"collapseAll() => void")])]),l("td",null,[l("div",null,"Collapses all the accordion items")]),l("td",null,[l("div",null,"Type: void")])])])])])],-1)),o[3]||(o[3]=l("h3",null,"Preventing memory leaks",-1)),o[4]||(o[4]=l("p",{class:"-text"},"Accordion component has a dispose function to free all the resources attached to the element, such as event listeners and object data. You should call this method when you want to remove the component.",-1)),n(e,{lang:"javascript",code:r}),o[5]||(o[5]=l("p",{class:"-text"},[d("It is safe to call the "),l("code",null,"accordion"),d(" method more than once, as it will return any previously created accordion component associated with the element.")],-1)),n(e,{lang:"javascript",code:u})])}}});export{h as _};

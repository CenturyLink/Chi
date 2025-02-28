import{_ as v}from"./guMl99Os.js";import{_ as f}from"./Cs9k3wdq.js";import{e as b,W as _,l as S,o as d,c as h,b as i,a as e,k as g,d as a,F as u,x,j as $,n as T,t as V,X as I,g as k,h as j}from"./8OrwJQBm.js";import{c as A}from"./DuKm7cZd.js";import{_ as E}from"./CNlSzNPL.js";const L=b({__name:"_css",setup(y){const c=_(),r=S(),l={htmlblueprint:s=>{var o,n;return`<link rel="stylesheet" href="https://lib.lumen.com/chi/${s}/${(o=A[r.value])==null?void 0:o.css}" integrity="${(n=A[r.value])==null?void 0:n.sha}" crossorigin="anonymous">`}},t={htmlblueprint:`<html class="chi">
  ...
</html>`};return(s,o)=>{const n=v,m=f;return d(),h(u,null,[i(n,{title:"CSS",id:"css","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),o[0]||(o[0]=e("p",{class:"-text"},"Add Chi CSS by copying and pasting the stylesheet below into the header of your project. Chi's stylesheet is hosted on Lumen's Assets Server which is a highly available and performant option for loading assets into your Lumen project.",-1)),i(m,{class:"-mb--2",id:"stylesheet",code:l.htmlblueprint(g(c)),lang:"html"},null,8,["code"]),o[1]||(o[1]=e("p",{class:"-text -mb--2"},[a("Next, add the "),e("code",null,"chi"),a(" CSS class to the "),e("code",null,"<html>"),a(" tag of your document to properly scope the styles. This allows Chi to override any existing styles that have been defined by legacy markup.")],-1)),i(m,{class:"-mb--2",id:"ts-class",code:t.htmlblueprint,lang:"html"},null,8,["code"]),o[2]||(o[2]=e("p",{class:"-text -mb--3"},"At this point you can now start using Chi. The documentation includes a wealth of templates and code samples to get you started.",-1))],64)}}}),M=b({__name:"_favicon",setup(y){const c=S(),r=_(),l={htmlblueprint:(t,s)=>`<link rel="icon" type="image/svg+xml" href="https://lib.lumen.com/chi/${t}/assets/themes/${s}/images/favicon.svg" integrity="sha256-s8cfYbPxhcrLj+FL/OxALhZoDmlCwvX2/K3I0hq1PAs=" crossorigin="anonymous">
<link rel="alternate icon" href="https://lib.lumen.com/chi/${t}/assets/themes/${s}/images/favicon.ico" integrity="sha256-EkKmbH+i/VIQAtUl7NF4bPVaaJZCeBc5xWx8LTcMJp0=" crossorigin="anonymous">`};return(t,s)=>{const o=v,n=f;return d(),h(u,null,[i(o,{title:"Favicon",id:"favicon","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),s[0]||(s[0]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),s[1]||(s[1]=e("p",{class:"-text"},[a("A favicon is a small icon associated with a webpage that is typically displayed in a browser's address bar, bookmarks, and tabs. To add a Lumen favicon to your project, insert the following code before the closing "),e("code",null,"<head>"),a(" tag.")],-1)),i(n,{class:"-mb--2",id:"stylesheet",lang:"html",code:l.htmlblueprint(g(r),g(c))},null,8,["code"])],64)}}}),D={class:"chi-tabs -border",id:"chi-js-tabs"},P=["href"],B={class:"chi-tabs-panel -active",id:"chi-js-tabs--file"},H={class:"-mb--2"},J={class:"chi-tabs-panel",id:"chi-js-tabs--amd"},O=b({__name:"_javascript",setup(y){const c=[{title:"JavaScript file",link:"file"},{title:"AMD module",link:"amd"}],r={htmlblueprint:{jsFile:t=>`<script src="https://lib.lumen.com/chi/${t}/js/chi.js" integrity="sha256-sAc9gqHyLUNTapVac+/JYNCYZpUIcCntknjfH7X88D8=" crossorigin="anonymous"><\/script>`,amd:`'chi': {
  path: [CHI_PATH, 'amd', 'chi'].join('/'),
  shim: {
    deps: ['Popper'],
    exports: 'chi'
  }
}`}};x(()=>{chi.tab(document.getElementById("chi-js-tabs"))});const l=_();return(t,s)=>{const o=v,n=f;return d(),h(u,null,[i(o,{title:"JavaScript",id:"javascript","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),s[2]||(s[2]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),s[3]||(s[3]=e("p",{class:"-text"},"Although Chi can be used as a pure HTML and CSS library with only the stylesheet above, many advanced components like tabs, drop downs, date pickers, and others require JavaScript to function. In most cases the need is minimal. You may write your own JavaScript to integrate Chi's CSS and blueprints into your project, or use Chi's JavaScript library which was written to provide a complete solution.",-1)),s[4]||(s[4]=e("p",{class:"-text"},"Chi's JavaScript library depends on Popper.js for positioning components like Popovers and Dropdown menus, and Day.js for calculating dates in the Datepicker component. For the rest, the library is entirely independent.",-1)),s[5]||(s[5]=e("p",{class:"-text"},"Chi's JavaScript library is developed as an ES6 component, but with the help of Webpack, it is available in several flavors. Choose the method that best fits your project.",-1)),e("ul",D,[(d(),h(u,null,$(c,(m,p)=>e("li",{key:p,class:T({"-active":p===0})},[e("a",{href:`#chi-js-tabs--${m.link}`},V(m.title),9,P)],2)),64))]),e("div",B,[s[0]||(s[0]=e("p",{class:"-text"},"To use the old method of including Chi in your project, include the ES5, browser prepared, JavaScript file from the Lumen Assets Server. In this solution Popper.js and Day.js are bundled into the file.",-1)),e("div",H,[i(n,{id:"stylesheet",code:r.htmlblueprint.jsFile(g(l)),lang:"javascript"},null,8,["code"])])]),e("div",J,[s[1]||(s[1]=e("p",{class:"-text"},[a("If you use RequireJS or any other AMD compatible module loader in your project, you will find the AMD compatible version in the "),e("code",null,"amd"),a(" folder. Then, you will have to update your require configuration:")],-1)),i(n,{id:"stylesheet",code:r.htmlblueprint.amd,lang:"javascript"},null,8,["code"])])],64)}}}),F={class:"chi-expansion-panel -web-components"},N={class:"chi-epanel -no-step","data-chi-epanel-group":"web-component-details"},z={class:"chi-epanel__collapse"},W={class:"-active--only"},U={class:"chi-epanel__body"},Y={class:"chi-epanel__content"},q={class:"chi-epanel__text"},K={class:"chi-epanel -no-step","data-chi-epanel-group":"web-component-details"},Q={class:"chi-epanel__collapse"},R={class:"-active--only"},X={class:"chi-epanel__body"},Z={class:"chi-epanel__content"},G={class:"chi-epanel__text"},ee=b({__name:"_web_components",setup(y){const c={htmlblueprint:l=>`<script type="module" src="https://lib.lumen.com/chi/${l}/js/ce/ux-chi-ce/ux-chi-ce.esm.js" integrity="sha256-KTINZWpQbY+gjd6QYQ1w3FAXLXFl50y+pCdIiwgrLAA=" crossorigin="anonymous"><\/script>
<script nomodule="" src="https://lib.lumen.com/chi/${l}/js/ce/ux-chi-ce/ux-chi-ce.js" integrity="sha256-Kjjdp48pkZLQgUP9HYK5GF02T9jslqEngFe/w2LxLus=" crossorigin="anonymous"><\/script>`,HTMLAttribute:`<chi-button id="close-btn" size="md">Close</chi-button>
<script>
  document.getElementById("close-btn").setAttribute("size", "xl");
<\/script>`,DOMProperty:`<chi-button id="close-btn" size="md">Close</chi-button>
<script>
  document.getElementById("close-btn").size="xl";
<\/script>`,booleanAttributes:{example1:`<input type="text" disabled />
<chi-drawer id="drawer" active />
<script>
  document.getElementById("drawer").active = true;
  document.getElementById("drawer").setAttribute("active", "active");
<\/script>`,example2:`<input type="text"  />
<chi-drawer id="drawer" />
<script>
  document.getElementById("drawer").active = false;
  document.getElementById("drawer").removeAttribute("active");
<\/script>`,example3:`<chi-drawer id="drawer" />
<script>
  document.getElementById("drawer").show();   // This sets the active property to true
  document.getElementById("drawer").hide();   // This sets the active property to false
  document.getElementById("drawer").toggle(); // This toggles the state of the active property
<\/script>`}};x(()=>{chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),{mode:"accordion"})});const r=_();return(l,t)=>{const s=v,o=f;return d(),h(u,null,[i(s,{title:"Web Components",id:"web-components","title-size":"h2","additional-classes":"-mt--4 -text--h2 -text--bold"}),t[9]||(t[9]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),t[10]||(t[10]=e("p",{class:"-text"},[a("Chi Web Components are "),e("a",{target:"_blank",href:"https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements",rel:"noopener"},"Custom Elements"),a(" designed to Lumen's specifications and built according to the HTML Living Standard. They are written in vanilla Javascript for compatibility with major frameworks including AngularJS, ReactJS, VueJS, or no framework at all.")],-1)),t[11]||(t[11]=e("p",{class:"-text"},"Add Chi Web Components by copying and pasting the JavaScript files below into the header of your web application. Placing the files in the header is important as it will load any Polyfill if the browser doesn't support Web Components.",-1)),i(o,{class:"-mb--2 html",id:"stylesheet",code:c.htmlblueprint(g(r)),lang:"html"},null,8,["code"]),t[12]||(t[12]=e("p",{class:"-text -mb--3"},"After placing the files in your header, you are now ready to use the Web Components described in this documentation.",-1)),e("div",F,[e("div",N,[t[3]||(t[3]=e("div",{class:"chi-epanel__header"},[e("div",{class:"chi-epanel__title -w--100","data-chi-epanel-action":"toggle"},[e("i",{class:"chi-icon icon-chevron-right -mr--2","aria-hidden":"true"}),a("HTML attributes and DOM properties")])],-1)),e("div",z,[e("div",W,[e("div",U,[e("div",Y,[e("div",q,[t[0]||(t[0]=e("p",{class:"-text"},[a("Chi Web Components can be used in several different ways. The most common are the HTML attributes and the DOM properties. In most cases, we keep them synchronized. For example, the "),e("code",null,"chi-button"),a(" element has a "),e("code",null,"size"),a(" attribute that can be accessed and modified in two ways.")],-1)),t[1]||(t[1]=e("h3",{class:"-text--h5 -mt--3 -anchor"},"Modifying the HTML attribute",-1)),i(o,{class:"html",id:"stylesheet",code:c.HTMLAttribute,lang:"html"},null,8,["code"]),t[2]||(t[2]=e("h3",{class:"-text--h5 -mt--3"},"Setting the DOM property",-1)),i(o,{class:"html",id:"stylesheet",code:c.DOMProperty,lang:"html"},null,8,["code"])])])])])])]),e("div",K,[t[8]||(t[8]=e("div",{class:"chi-epanel__header"},[e("div",{class:"chi-epanel__title -w--100","data-chi-epanel-action":"toggle"},[e("i",{class:"chi-icon icon-chevron-right -mr--2","aria-hidden":"true"}),a("Boolean attributes and properties")])],-1)),e("div",Q,[e("div",R,[e("div",X,[e("div",Z,[e("div",G,[t[4]||(t[4]=e("p",{class:"-text"},[a("Some Chi components have boolean attributes which function the same way as the well known "),e("code",null,"disabled"),a(" attribute. Boolean attributes are "),e("code",null,"true"),a(" when the HTML element has the attribute and "),e("code",null,"false"),a(" when not.")],-1)),t[5]||(t[5]=e("p",{class:"-text"},"Boolean attributes can be set to true this way:",-1)),i(o,{class:"html",id:"stylesheet",code:c.booleanAttributes.example1,lang:"html"},null,8,["code"]),t[6]||(t[6]=e("p",{class:"-text"},"And set to false this way:",-1)),i(o,{class:"html",id:"stylesheet",code:c.booleanAttributes.example2,lang:"html"},null,8,["code"]),t[7]||(t[7]=e("p",{class:"-text"},[a("Some components, like "),e("code",null,"chi-drawer"),a(", have helper methods in order to change the state of commonly modified attributes:")],-1)),i(o,{class:"html",id:"stylesheet",code:c.booleanAttributes.example3,lang:"html"},null,8,["code"])])])])])])])])],64)}}}),te={class:"chi-tabs -border",ref:"chi-vue-tabs"},se={class:"chi-tabs-panel -active",id:"chi-vue-tabs--npm"},ie={class:"-d--flex -no-gutter -bg--grey-15"},ne={class:"-bg--grey-15 -py--3 -br--1",style:{width:"14rem"}},oe={class:"chi-tabs -vertical",ref:"chi-vue-npm-tabs",role:"tablist","aria-label":"chi-tabs-vertical-base"},ae=["href"],le={class:"-flex--grow1 -h--100"},ce={class:"chi-tabs-panel -active",id:"npm--npmrc",role:"tabpanel"},re={class:"chi-tabs-panel",id:"npm--package",role:"tabpanel"},pe={class:"chi-tabs-panel",id:"npm--main",role:"tabpanel"},de={class:"chi-tabs-panel",id:"chi-vue-tabs--umd"},he=b({__name:"_chi_vue",setup(y){const c=_(),r=[{title:".npmrc",link:"npmrc"},{title:"package.json",link:"package"},{title:"main.ts",link:"main"}],l={npm:{npmrc:`registry=https://registry.npmjs.org
@centurylink:registry=https://npm.pkg.github.com/centurylink
//npm.pkg.github.com/:_authToken=\${GH_TOKEN}`,package:`"@centurylink/chi-vue": "${I}",
"pinia": "^2.1.4",`,main:`import { createApp } from 'vue';
import { ChiVue, ChiSearchInput } from "@centurylink/chi-vue";
import App from './App.vue';

const app = createApp(App);

app.use(ChiVue, {});
app.component("ChiSearchInput", ChiSearchInput);

app.mount('#app');`,plugin:`import { createApp } from 'vue';
import { ChiVue } from "@centurylink/chi-vue";

const app = createApp(App);

app.use(ChiVue, {});`,pluginOptions:`{
  chiOptions: {
    theme: 'lumen' | 'portal' | 'centuryLink',
    forceVersion: string;
  }
}`,pluginExample:`import { createApp } from 'vue';
import { ChiVue } from "@centurylink/chi-vue";

const app = createApp(App);

app.use(ChiVue, {
  chiOptions: {
    theme: 'centurylink',
    forceVersion: '5.78.0'
  }
});
`},umd:`<!-- UMD asset -->
<script src="https://cdn.jsdelivr.net/npm/vue-demi@0.14.6"><\/script>
<script src="https://cdn.jsdelivr.net/npm/pinia@2.1.4"><\/script>
<script src="https://lib.lumen.com/chi/${c.value}/chi-vue/umd/index.umd.js"><\/script>

<!-- Vue component example -->
const exampleVueComponent = Vue.createApp({
  data() {
    return {
      // Your data
    }
  },
  methods: {
    // Your methods
  }
});

exampleVueComponent.component('ChiVuePagination', window["chi-vue"].library.components.ChiPagination);
exampleVueComponent.mount('#example');

<!-- Vue template example -->
<chi-vue-pagination :pages="5" :current-page="currentPage"></chi-vue-pagination>`},t=k("chi-vue-tabs"),s=k("chi-vue-npm-tabs");return j(()=>{t.value&&chi.tab(t.value)}),j(()=>{s.value&&chi.tab(s.value)}),(o,n)=>{const m=v,p=f;return d(),h(u,null,[i(m,{title:"Chi Vue",id:"chi-vue","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),n[6]||(n[6]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),n[7]||(n[7]=e("p",{class:"-text"},"Chi supports a set of native Vue components. Chi Vue can be installed via Github npm registry or included from CDN as a UMD library.",-1)),e("ul",te,n[0]||(n[0]=[e("li",{class:"-active"},[e("a",{href:"#chi-vue-tabs--npm"},"NPM")],-1),e("li",null,[e("a",{href:"#chi-vue-tabs--umd"},"UMD")],-1)]),512),e("div",se,[e("div",ie,[e("div",ne,[e("ul",oe,[(d(),h(u,null,$(r,(w,C)=>e("li",{key:C,class:T({"-active":C===0})},[e("a",{href:`#npm--${w.link}`,role:"tab"},V(w.title),9,ae)],2)),64))],512)]),e("div",le,[e("div",ce,[i(p,{id:"npmrcSnippet",code:l.npm.npmrc,lang:"javascript"},null,8,["code"])]),e("div",re,[i(p,{id:"npmPackageSnippet",code:l.npm.package,lang:"javascript"},null,8,["code"])]),e("div",pe,[n[1]||(n[1]=e("div",{class:"chi-tab__description -p--2"},"Import Chi Vue and register its components globally",-1)),i(p,{id:"npmrcExample",code:l.npm.main,lang:"typescript"},null,8,["code"])])])]),n[3]||(n[3]=e("p",{class:"-text"},"Chi Vue plugin is optional to be installed with the use function to set up the default configuration",-1)),i(p,{id:"plugin",code:l.npm.plugin,lang:"javascript"},null,8,["code"]),n[4]||(n[4]=e("p",{class:"-text"},"It is not necessary to pass any options to the plugin to install all Chi dependencies (CSS, JS and Web Components) as it uses the portal theme and the latest available version of Chi by default. If you want to pass a specific theme or version, the plugin accepts a configuration object:",-1)),i(p,{id:"pluginOptions",code:l.npm.pluginOptions,lang:"javascript"},null,8,["code"]),n[5]||(n[5]=e("p",{class:"-text"},"Here you can see an example installation with a theme and a customized version:",-1)),i(p,{id:"pluginExample",code:l.npm.pluginExample,lang:"javascript"},null,8,["code"]),e("div",de,[n[2]||(n[2]=e("div",{class:"chi-tab__description"},"Include Chi Vue UMD library from CDN and register the components you need.",-1)),i(p,{id:"vueUMD",code:l.umd,lang:"javascript"},null,8,["code"])])])],64)}}}),ue=b({__name:"_framework_specific_boilerplates",setup(y){_();const c=["Vue","Stencil","Angular","React"],r=[{title:"",key:"class"},{title:"chi.css",key:"css"},{title:"chi.js",key:"js"},{title:"Web components",key:"webComponents"},{title:"Favicon",key:"favicon"},{title:"Download",key:"download"}].map(t=>({...t,className:"-text--center"}));x(()=>{chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),{mode:"accordion"})});const l=(t,s)=>{switch(t.key){case"class":return`<span class="-text--bold">${s}</span>`;case"download":return`<a href="/boilerplates/chi-vue-es6-boilerplate.zip" class="chi-button">
                    <div class="chi-button__content">
                        <i aria-hidden="true" class="chi-icon icon-circle-arrow-down-outline"></i>
                        <span>Download</span>
                    </div>
                 </a>`;default:return'<i class="chi-icon icon-check -icon--success"></i>'}};return(t,s)=>{const o=v,n=E;return d(),h(u,null,[i(o,{title:"Framework specific boilerplates",id:"framework-specific-boilerplates","title-size":"h2","additional-classes":"-mt--5 -text--h2 -text--bold"}),s[0]||(s[0]=e("p",{class:"-text"},"Boilerplates include:",-1)),i(n,{data:c,columns:g(r),getContent:l,"additional-classes":"-mt--3 -mb--3 -bordered -text--center"},null,8,["columns"])],64)}}}),me={class:"chi-grid__container -pt--3"},fe=b({__name:"index",setup(y){return(c,r)=>(d(),h("div",me,[i(L),i(M),i(O),i(ee),i(he),i(ue)]))}});export{fe as _};

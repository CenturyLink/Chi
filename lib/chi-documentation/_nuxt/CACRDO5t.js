import{_ as g}from"./DD5d-mQ_.js";import{_ as f}from"./Cr4Krhex.js";import{d as V}from"./DhIYcLiR.js";import{e as b,W as _,l as A,c as d,o as h,F as m,b as i,a as e,j as v,d as a,y as x,i as S,n as T,t as $,g as k,h as j,X as M}from"./BnvmtQYM.js";import{_ as I}from"./CpGl5nKs.js";const D=b({__name:"_css",setup(y){const c=_(),r=A(),l={htmlblueprint:s=>{var o;return`<link rel="stylesheet" href="https://lib.lumen.com/chi/${s}/${(o=V[r.value])==null?void 0:o.css}" integrity="sha256-1bhPx5yXmCMWKzXn9PFea05NRF+239d9pqYJcR3GHWY=" crossorigin="anonymous">`}},t={htmlblueprint:`<html class="chi">
  ...
</html>`};return(s,o)=>{const n=g,u=f;return h(),d(m,null,[i(n,{title:"CSS",id:"css","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),o[0]||(o[0]=e("p",{class:"-text"},"Add Chi CSS by copying and pasting the stylesheet below into the header of your project. Chi's stylesheet is hosted on Lumen's Assets Server which is a highly available and performant option for loading assets into your Lumen project.",-1)),i(u,{class:"-mb--2",id:"stylesheet",code:l.htmlblueprint(v(c)),lang:"html"},null,8,["code"]),o[1]||(o[1]=e("p",{class:"-text -mb--2"},[a("Next, add the "),e("code",null,"chi"),a(" CSS class to the "),e("code",null,"<html>"),a(" tag of your document to properly scope the styles. This allows Chi to override any existing styles that have been defined by legacy markup.")],-1)),i(u,{class:"-mb--2",id:"ts-class",code:t.htmlblueprint,lang:"html"},null,8,["code"]),o[2]||(o[2]=e("p",{class:"-text -mb--3"},"At this point you can now start using Chi. The documentation includes a wealth of templates and code samples to get you started.",-1))],64)}}}),E=b({__name:"_favicon",setup(y){const c=A(),r=_(),l={htmlblueprint:(t,s)=>`<link rel="icon" type="image/svg+xml" href="https://lib.lumen.com/chi/${t}/assets/themes/${s}/images/favicon.svg" integrity="sha256-s8cfYbPxhcrLj+FL/OxALhZoDmlCwvX2/K3I0hq1PAs=" crossorigin="anonymous">
<link rel="alternate icon" href="https://lib.lumen.com/chi/${t}/assets/themes/${s}/images/favicon.ico" integrity="sha256-EkKmbH+i/VIQAtUl7NF4bPVaaJZCeBc5xWx8LTcMJp0=" crossorigin="anonymous">`};return(t,s)=>{const o=g,n=f;return h(),d(m,null,[i(o,{title:"Favicon",id:"favicon","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),s[0]||(s[0]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),s[1]||(s[1]=e("p",{class:"-text"},[a("A favicon is a small icon associated with a webpage that is typically displayed in a browser's address bar, bookmarks, and tabs. To add a Lumen favicon to your project, insert the following code before the closing "),e("code",null,"<head>"),a(" tag.")],-1)),i(n,{class:"-mb--2",id:"stylesheet",lang:"html",code:l.htmlblueprint(v(r),v(c))},null,8,["code"])],64)}}}),P={class:"chi-tabs -border",id:"chi-js-tabs"},L=["href"],J={class:"chi-tabs-panel -active",id:"chi-js-tabs--file"},H={class:"-mb--2"},B={class:"chi-tabs-panel",id:"chi-js-tabs--amd"},O=b({__name:"_javascript",setup(y){const c=[{title:"JavaScript file",link:"file"},{title:"AMD module",link:"amd"}],r={htmlblueprint:{jsFile:t=>`<script src="https://lib.lumen.com/chi/${t}/js/chi.js" integrity="sha256-6QhYmHCoTdqje2hbaXewfi4/GRD7ar8PaJNc/txRYpw=" crossorigin="anonymous"><\/script>`,amd:`'chi': {
  path: [CHI_PATH, 'amd', 'chi'].join('/'),
  shim: {
    deps: ['Popper'],
    exports: 'chi'
  }
}`}};x(()=>{chi.tab(document.getElementById("chi-js-tabs"))});const l=_();return(t,s)=>{const o=g,n=f;return h(),d(m,null,[i(o,{title:"JavaScript",id:"javascript","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),s[2]||(s[2]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),s[3]||(s[3]=e("p",{class:"-text"},"Although Chi can be used as a pure HTML and CSS library with only the stylesheet above, many advanced components like tabs, drop downs, date pickers, and others require JavaScript to function. In most cases the need is minimal. You may write your own JavaScript to integrate Chi's CSS and blueprints into your project, or use Chi's JavaScript library which was written to provide a complete solution.",-1)),s[4]||(s[4]=e("p",{class:"-text"},"Chi's JavaScript library depends on Popper.js for positioning components like Popovers and Dropdown menus, and Day.js for calculating dates in the Datepicker component. For the rest, the library is entirely independent.",-1)),s[5]||(s[5]=e("p",{class:"-text"},"Chi's JavaScript library is developed as an ES6 component, but with the help of Webpack, it is available in several flavors. Choose the method that best fits your project.",-1)),e("ul",P,[(h(),d(m,null,S(c,(u,p)=>e("li",{key:p,class:T({"-active":p===0})},[e("a",{href:`#chi-js-tabs--${u.link}`},$(u.title),9,L)],2)),64))]),e("div",J,[s[0]||(s[0]=e("p",{class:"-text"},"To use the old method of including Chi in your project, include the ES5, browser prepared, JavaScript file from the Lumen Assets Server. In this solution Popper.js and Day.js are bundled into the file.",-1)),e("div",H,[i(n,{id:"stylesheet",code:r.htmlblueprint.jsFile(v(l)),lang:"javascript"},null,8,["code"])])]),e("div",B,[s[1]||(s[1]=e("p",{class:"-text"},[a("If you use RequireJS or any other AMD compatible module loader in your project, you will find the AMD compatible version in the "),e("code",null,"amd"),a(" folder. Then, you will have to update your require configuration:")],-1)),i(n,{id:"stylesheet",code:r.htmlblueprint.amd,lang:"javascript"},null,8,["code"])])],64)}}}),z={class:"chi-expansion-panel -web-components"},W={class:"chi-epanel -no-step","data-chi-epanel-group":"web-component-details"},N={class:"chi-epanel__collapse"},F={class:"-active--only"},R={class:"chi-epanel__body"},Y={class:"chi-epanel__content"},q={class:"chi-epanel__text"},G={class:"chi-epanel -no-step","data-chi-epanel-group":"web-component-details"},U={class:"chi-epanel__collapse"},X={class:"-active--only"},Z={class:"chi-epanel__body"},K={class:"chi-epanel__content"},Q={class:"chi-epanel__text"},ee=b({__name:"_web_components",setup(y){const c={htmlblueprint:l=>`<script type="module" src="https://lib.lumen.com/chi/${l}/js/ce/ux-chi-ce/ux-chi-ce.esm.js" integrity="sha256-sjGS/0v1TobGl9rMXlni36WXTnT7J6sMysVcZ5nxUZw=" crossorigin="anonymous"><\/script>
<script nomodule="" src="https://lib.lumen.com/chi/${l}/js/ce/ux-chi-ce/ux-chi-ce.js" integrity="sha256-YrDiIH91dWgnfQRTLsWYoxQj7LGxf7PHV4TIZcazh5M=" crossorigin="anonymous"><\/script>`,HTMLAttribute:`<chi-button id="close-btn" size="md">Close</chi-button>
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
<\/script>`}};x(()=>{chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),{mode:"accordion"})});const r=_();return(l,t)=>{const s=g,o=f;return h(),d(m,null,[i(s,{title:"Web Components",id:"web-components","title-size":"h2","additional-classes":"-mt--4 -text--h2 -text--bold"}),t[9]||(t[9]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),t[10]||(t[10]=e("p",{class:"-text"},[a("Chi Web Components are "),e("a",{target:"_blank",href:"https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements",rel:"noopener"},"Custom Elements"),a(" designed to Lumen's specifications and built according to the HTML Living Standard. They are written in vanilla Javascript for compatibility with major frameworks including AngularJS, ReactJS, VueJS, or no framework at all.")],-1)),t[11]||(t[11]=e("p",{class:"-text"},"Add Chi Web Components by copying and pasting the JavaScript files below into the header of your web application. Placing the files in the header is important as it will load any Polyfill if the browser doesn't support Web Components.",-1)),i(o,{class:"-mb--2 html",id:"stylesheet",code:c.htmlblueprint(v(r)),lang:"html"},null,8,["code"]),t[12]||(t[12]=e("p",{class:"-text -mb--3"},"After placing the files in your header, you are now ready to use the Web Components described in this documentation.",-1)),e("div",z,[e("div",W,[t[3]||(t[3]=e("div",{class:"chi-epanel__header"},[e("div",{class:"chi-epanel__title -w--100","data-chi-epanel-action":"toggle"},[e("i",{class:"chi-icon icon-chevron-right -mr--2","aria-hidden":"true"}),a("HTML attributes and DOM properties")])],-1)),e("div",N,[e("div",F,[e("div",R,[e("div",Y,[e("div",q,[t[0]||(t[0]=e("p",{class:"-text"},[a("Chi Web Components can be used in several different ways. The most common are the HTML attributes and the DOM properties. In most cases, we keep them synchronized. For example, the "),e("code",null,"chi-button"),a(" element has a "),e("code",null,"size"),a(" attribute that can be accessed and modified in two ways.")],-1)),t[1]||(t[1]=e("h3",{class:"-text--h5 -mt--3 -anchor"},"Modifying the HTML attribute",-1)),i(o,{class:"html",id:"stylesheet",code:c.HTMLAttribute,lang:"html"},null,8,["code"]),t[2]||(t[2]=e("h3",{class:"-text--h5 -mt--3"},"Setting the DOM property",-1)),i(o,{class:"html",id:"stylesheet",code:c.DOMProperty,lang:"html"},null,8,["code"])])])])])])]),e("div",G,[t[8]||(t[8]=e("div",{class:"chi-epanel__header"},[e("div",{class:"chi-epanel__title -w--100","data-chi-epanel-action":"toggle"},[e("i",{class:"chi-icon icon-chevron-right -mr--2","aria-hidden":"true"}),a("Boolean attributes and properties")])],-1)),e("div",U,[e("div",X,[e("div",Z,[e("div",K,[e("div",Q,[t[4]||(t[4]=e("p",{class:"-text"},[a("Some Chi components have boolean attributes which function the same way as the well known "),e("code",null,"disabled"),a(" attribute. Boolean attributes are "),e("code",null,"true"),a(" when the HTML element has the attribute and "),e("code",null,"false"),a(" when not.")],-1)),t[5]||(t[5]=e("p",{class:"-text"},"Boolean attributes can be set to true this way:",-1)),i(o,{class:"html",id:"stylesheet",code:c.booleanAttributes.example1,lang:"html"},null,8,["code"]),t[6]||(t[6]=e("p",{class:"-text"},"And set to false this way:",-1)),i(o,{class:"html",id:"stylesheet",code:c.booleanAttributes.example2,lang:"html"},null,8,["code"]),t[7]||(t[7]=e("p",{class:"-text"},[a("Some components, like "),e("code",null,"chi-drawer"),a(", have helper methods in order to change the state of commonly modified attributes:")],-1)),i(o,{class:"html",id:"stylesheet",code:c.booleanAttributes.example3,lang:"html"},null,8,["code"])])])])])])])])],64)}}}),te={class:"chi-tabs -border",ref:"chi-vue-tabs"},se={class:"chi-tabs-panel -active",id:"chi-vue-tabs--npm"},ie={class:"-d--flex -no-gutter -bg--grey-15"},ne={class:"-bg--grey-15 -py--3 -br--1",style:{width:"14rem"}},oe={class:"chi-tabs -vertical",ref:"chi-vue-npm-tabs",role:"tablist","aria-label":"chi-tabs-vertical-base"},ae=["href"],le={class:"-flex--grow1 -h--100"},ce={class:"chi-tabs-panel -active",id:"npm--npmrc",role:"tabpanel"},re={class:"chi-tabs-panel",id:"npm--package",role:"tabpanel"},pe={class:"chi-tabs-panel",id:"npm--main",role:"tabpanel"},de={class:"chi-tabs-panel",id:"chi-vue-tabs--umd"},he=b({__name:"_chi_vue",setup(y){const c=_(),r=[{title:".npmrc",link:"npmrc"},{title:"package.json",link:"package"},{title:"main.ts",link:"main"}],l={npm:{npmrc:`registry=https://registry.npmjs.org
@centurylink:registry=https://npm.pkg.github.com/centurylink
//npm.pkg.github.com/:_authToken=\${GH_TOKEN}`,package:`"@centurylink/chi-vue": "${M}",
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
<chi-vue-pagination :pages="5" :current-page="currentPage"></chi-vue-pagination>`},t=k("chi-vue-tabs"),s=k("chi-vue-npm-tabs");return j(()=>{t.value&&chi.tab(t.value)}),j(()=>{s.value&&chi.tab(s.value)}),(o,n)=>{const u=g,p=f;return h(),d(m,null,[i(u,{title:"Chi Vue",id:"chi-vue","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),n[6]||(n[6]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),n[7]||(n[7]=e("p",{class:"-text"},"Chi supports a set of native Vue components. Chi Vue can be installed via Github npm registry or included from CDN as a UMD library.",-1)),e("ul",te,n[0]||(n[0]=[e("li",{class:"-active"},[e("a",{href:"#chi-vue-tabs--npm"},"NPM")],-1),e("li",null,[e("a",{href:"#chi-vue-tabs--umd"},"UMD")],-1)]),512),e("div",se,[e("div",ie,[e("div",ne,[e("ul",oe,[(h(),d(m,null,S(r,(w,C)=>e("li",{key:C,class:T({"-active":C===0})},[e("a",{href:`#npm--${w.link}`,role:"tab"},$(w.title),9,ae)],2)),64))],512)]),e("div",le,[e("div",ce,[i(p,{id:"npmrcSnippet",code:l.npm.npmrc,lang:"javascript"},null,8,["code"])]),e("div",re,[i(p,{id:"npmPackageSnippet",code:l.npm.package,lang:"javascript"},null,8,["code"])]),e("div",pe,[n[1]||(n[1]=e("div",{class:"chi-tab__description -p--2"},"Import Chi Vue and register its components globally",-1)),i(p,{id:"npmrcExample",code:l.npm.main,lang:"typescript"},null,8,["code"])])])]),n[3]||(n[3]=e("p",{class:"-text"},"Chi Vue plugin is optional to be installed with the use function to set up the default configuration",-1)),i(p,{id:"plugin",code:l.npm.plugin,lang:"javascript"},null,8,["code"]),n[4]||(n[4]=e("p",{class:"-text"},"It is not necessary to pass any options to the plugin to install all Chi dependencies (CSS, JS and Web Components) as it uses the portal theme and the latest available version of Chi by default. If you want to pass a specific theme or version, the plugin accepts a configuration object:",-1)),i(p,{id:"pluginOptions",code:l.npm.pluginOptions,lang:"javascript"},null,8,["code"]),n[5]||(n[5]=e("p",{class:"-text"},"Here you can see an example installation with a theme and a customized version:",-1)),i(p,{id:"pluginExample",code:l.npm.pluginExample,lang:"javascript"},null,8,["code"]),e("div",de,[n[2]||(n[2]=e("div",{class:"chi-tab__description"},"Include Chi Vue UMD library from CDN and register the components you need.",-1)),i(p,{id:"vueUMD",code:l.umd,lang:"javascript"},null,8,["code"])])])],64)}}}),me=b({__name:"_framework_specific_boilerplates",setup(y){_();const c=["Vue","Stencil","Angular","React"],r=[{title:"",key:"class"},{title:"chi.css",key:"css"},{title:"chi.js",key:"js"},{title:"Web components",key:"webComponents"},{title:"Favicon",key:"favicon"},{title:"Download",key:"download"}].map(t=>({...t,className:"-text--center"}));x(()=>{chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),{mode:"accordion"})});const l=(t,s)=>{switch(t.key){case"class":return`<span class="-text--bold">${s}</span>`;case"download":return`<a href="/boilerplates/chi-vue-es6-boilerplate.zip" class="chi-button">
                    <div class="chi-button__content">
                        <i aria-hidden="true" class="chi-icon icon-circle-arrow-down-outline"></i>
                        <span>Download</span>
                    </div>
                 </a>`;default:return'<i class="chi-icon icon-check -icon--success"></i>'}};return(t,s)=>{const o=g,n=I;return h(),d(m,null,[i(o,{title:"Framework specific boilerplates",id:"framework-specific-boilerplates","title-size":"h2","additional-classes":"-mt--5 -text--h2 -text--bold"}),s[0]||(s[0]=e("p",{class:"-text"},"Boilerplates include:",-1)),i(n,{data:c,columns:v(r),getContent:l,"additional-classes":"-mt--3 -mb--3 -bordered -text--center"},null,8,["columns"])],64)}}}),ue={class:"chi-grid__container -pt--3"},fe=b({__name:"index",setup(y){return(c,r)=>(h(),d("div",ue,[i(D),i(E),i(O),i(ee),i(he),i(me)]))}});export{fe as _};

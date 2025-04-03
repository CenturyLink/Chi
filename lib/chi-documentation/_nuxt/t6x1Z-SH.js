import{_ as g}from"./B1-AdL93.js";import{_}from"./LNeokCJg.js";import{c as S}from"./DmOWWIWS.js";import{e as v,l as A,W as x,s as w,S as b,c as d,o as u,F as m,b as i,a as e,j as f,d as a,X as T,y as C,i as V,n as I,t as E,g as j,h as $,Y as M}from"./-E9oTzhC.js";import{_ as D}from"./B5KlrkA7.js";const H=v({__name:"_css",setup(y){const l=A(),p=x(),r=w(()=>{var o,c,h;const t=`dist/${(o=S[l.value])==null?void 0:o.css}`,s=(c=p.value)==null?void 0:c[t];return s?`<link rel="stylesheet" href="https://lib.lumen.com/chi/${b}/${(h=S[l.value])==null?void 0:h.css}" integrity="${s}" crossorigin="anonymous">`:""}),n={htmlblueprint:`<html class="chi">
  ...
</html>`};return(t,s)=>{const o=g,c=_;return u(),d(m,null,[i(o,{title:"CSS",id:"css","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),s[0]||(s[0]=e("p",{class:"-text"},"Add Chi CSS by copying and pasting the stylesheet below into the header of your project. Chi's stylesheet is hosted on Lumen's Assets Server which is a highly available and performant option for loading assets into your Lumen project.",-1)),i(c,{class:"-mb--2",id:"stylesheet",code:f(r),lang:"html"},null,8,["code"]),s[1]||(s[1]=e("p",{class:"-text -mb--2"},[a("Next, add the "),e("code",null,"chi"),a(" CSS class to the "),e("code",null,"<html>"),a(" tag of your document to properly scope the styles. This allows Chi to override any existing styles that have been defined by legacy markup.")],-1)),i(c,{class:"-mb--2",id:"ts-class",code:n.htmlblueprint,lang:"html"},null,8,["code"]),s[2]||(s[2]=e("p",{class:"-text -mb--3"},"At this point you can now start using Chi. The documentation includes a wealth of templates and code samples to get you started.",-1))],64)}}}),L=v({__name:"_favicon",setup(y){const l=A();T();const p=x(),r=w(()=>{var s,o;const n=(s=p.value)==null?void 0:s[`dist/assets/themes/${l.value}/images/favicon.svg`],t=(o=p.value)==null?void 0:o[`dist/assets/themes/${l.value}/images/favicon.ico`];return n&&t?`<link rel="icon" type="image/svg+xml" href="https://lib.lumen.com/chi/${b}/assets/themes/${l.value}/images/favicon.svg" integrity="${n}" crossorigin="anonymous">
<link rel="alternate icon" href="https://lib.lumen.com/chi/${b}/assets/themes/${l.value}/images/favicon.ico" integrity="${t}" crossorigin="anonymous">`:""});return(n,t)=>{const s=g,o=_;return u(),d(m,null,[i(s,{title:"Favicon",id:"favicon","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),t[0]||(t[0]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),t[1]||(t[1]=e("p",{class:"-text"},[a("A favicon is a small icon associated with a webpage that is typically displayed in a browser's address bar, bookmarks, and tabs. To add a Lumen favicon to your project, insert the following code before the closing "),e("code",null,"<head>"),a(" tag.")],-1)),i(o,{class:"-mb--2",id:"stylesheet",lang:"html",code:f(r)},null,8,["code"])],64)}}}),O={class:"chi-tabs -border",id:"chi-js-tabs"},B=["href"],J={class:"chi-tabs-panel -active",id:"chi-js-tabs--file"},P={class:"-mb--2"},z={class:"chi-tabs-panel",id:"chi-js-tabs--amd"},N=`'chi': {
  path: [CHI_PATH, 'amd', 'chi'].join('/'),
  shim: {
    deps: ['Popper'],
    exports: 'chi'
  }
}`,W=v({__name:"_javascript",setup(y){const l=x(),p=[{title:"JavaScript file",link:"file"},{title:"AMD module",link:"amd"}],r=w(()=>{var t;const n=(t=l.value)==null?void 0:t["dist/js/chi.js"];return n?`<script src="https://lib.lumen.com/chi/${b}/js/chi.js" integrity="${n}" crossorigin="anonymous"><\/script>`:""});return C(()=>{chi.tab(document.getElementById("chi-js-tabs"))}),(n,t)=>{const s=g,o=_;return u(),d(m,null,[i(s,{title:"JavaScript",id:"javascript","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),t[2]||(t[2]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),t[3]||(t[3]=e("p",{class:"-text"},"Although Chi can be used as a pure HTML and CSS library with only the stylesheet above, many advanced components like tabs, drop downs, date pickers, and others require JavaScript to function. In most cases the need is minimal. You may write your own JavaScript to integrate Chi's CSS and blueprints into your project, or use Chi's JavaScript library which was written to provide a complete solution.",-1)),t[4]||(t[4]=e("p",{class:"-text"},"Chi's JavaScript library depends on Popper.js for positioning components like Popovers and Dropdown menus, and Day.js for calculating dates in the Datepicker component. For the rest, the library is entirely independent.",-1)),t[5]||(t[5]=e("p",{class:"-text"},"Chi's JavaScript library is developed as an ES6 component, but with the help of Webpack, it is available in several flavors. Choose the method that best fits your project.",-1)),e("ul",O,[(u(),d(m,null,V(p,(c,h)=>e("li",{key:h,class:I({"-active":h===0})},[e("a",{href:`#chi-js-tabs--${c.link}`},E(c.title),9,B)],2)),64))]),e("div",J,[t[0]||(t[0]=e("p",{class:"-text"},"To use the old method of including Chi in your project, include the ES5, browser prepared, JavaScript file from the Lumen Assets Server. In this solution Popper.js and Day.js are bundled into the file.",-1)),e("div",P,[i(o,{id:"stylesheet",code:f(r),lang:"javascript"},null,8,["code"])])]),e("div",z,[t[1]||(t[1]=e("p",{class:"-text"},[a("If you use RequireJS or any other AMD compatible module loader in your project, you will find the AMD compatible version in the "),e("code",null,"amd"),a(" folder. Then, you will have to update your require configuration:")],-1)),i(o,{id:"stylesheet",code:N,lang:"javascript"})])],64)}}}),F={class:"chi-expansion-panel -web-components"},R={class:"chi-epanel -no-step","data-chi-epanel-group":"web-component-details"},U={class:"chi-epanel__collapse"},q={class:"-active--only"},Y={class:"chi-epanel__body"},G={class:"chi-epanel__content"},K={class:"chi-epanel__text"},X={class:"chi-epanel -no-step","data-chi-epanel-group":"web-component-details"},Q={class:"chi-epanel__collapse"},Z={class:"-active--only"},ee={class:"chi-epanel__body"},te={class:"chi-epanel__content"},se={class:"chi-epanel__text"},ie=v({__name:"_web_components",setup(y){const l=x(),p=w(()=>{if(l.value){const n=l.value["dist/js/ce/ux-chi-ce/ux-chi-ce.esm.js"],t=l.value["dist/js/ce/ux-chi-ce/ux-chi-ce.js"];return`<script type="module" src="https://lib.lumen.com/chi/${b}/js/ce/ux-chi-ce/ux-chi-ce.esm.js" integrity="${n}" crossorigin="anonymous"><\/script>
<script nomodule="" src="https://lib.lumen.com/chi/${b}/js/ce/ux-chi-ce/ux-chi-ce.js" integrity="${t}" crossorigin="anonymous"><\/script>`}}),r={HTMLAttribute:`<chi-button id="close-btn" size="md">Close</chi-button>
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
<\/script>`}};return C(()=>{chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),{mode:"accordion"})}),T(),(n,t)=>{const s=g,o=_;return u(),d(m,null,[i(s,{title:"Web Components",id:"web-components","title-size":"h2","additional-classes":"-mt--4 -text--h2 -text--bold"}),t[9]||(t[9]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),t[10]||(t[10]=e("p",{class:"-text"},[a("Chi Web Components are "),e("a",{target:"_blank",href:"https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements",rel:"noopener"},"Custom Elements"),a(" designed to Lumen's specifications and built according to the HTML Living Standard. They are written in vanilla Javascript for compatibility with major frameworks including AngularJS, ReactJS, VueJS, or no framework at all.")],-1)),t[11]||(t[11]=e("p",{class:"-text"},"Add Chi Web Components by copying and pasting the JavaScript files below into the header of your web application. Placing the files in the header is important as it will load any Polyfill if the browser doesn't support Web Components.",-1)),i(o,{class:"-mb--2 html",id:"stylesheet",code:f(p),lang:"html"},null,8,["code"]),t[12]||(t[12]=e("p",{class:"-text -mb--3"},"After placing the files in your header, you are now ready to use the Web Components described in this documentation.",-1)),e("div",F,[e("div",R,[t[3]||(t[3]=e("div",{class:"chi-epanel__header"},[e("div",{class:"chi-epanel__title -w--100","data-chi-epanel-action":"toggle"},[e("i",{class:"chi-icon icon-chevron-right -mr--2","aria-hidden":"true"}),a("HTML attributes and DOM properties")])],-1)),e("div",U,[e("div",q,[e("div",Y,[e("div",G,[e("div",K,[t[0]||(t[0]=e("p",{class:"-text"},[a("Chi Web Components can be used in several different ways. The most common are the HTML attributes and the DOM properties. In most cases, we keep them synchronized. For example, the "),e("code",null,"chi-button"),a(" element has a "),e("code",null,"size"),a(" attribute that can be accessed and modified in two ways.")],-1)),t[1]||(t[1]=e("h3",{class:"-text--h5 -mt--3 -anchor"},"Modifying the HTML attribute",-1)),i(o,{class:"html",id:"stylesheet",code:r.HTMLAttribute,lang:"html"},null,8,["code"]),t[2]||(t[2]=e("h3",{class:"-text--h5 -mt--3"},"Setting the DOM property",-1)),i(o,{class:"html",id:"stylesheet",code:r.DOMProperty,lang:"html"},null,8,["code"])])])])])])]),e("div",X,[t[8]||(t[8]=e("div",{class:"chi-epanel__header"},[e("div",{class:"chi-epanel__title -w--100","data-chi-epanel-action":"toggle"},[e("i",{class:"chi-icon icon-chevron-right -mr--2","aria-hidden":"true"}),a("Boolean attributes and properties")])],-1)),e("div",Q,[e("div",Z,[e("div",ee,[e("div",te,[e("div",se,[t[4]||(t[4]=e("p",{class:"-text"},[a("Some Chi components have boolean attributes which function the same way as the well known "),e("code",null,"disabled"),a(" attribute. Boolean attributes are "),e("code",null,"true"),a(" when the HTML element has the attribute and "),e("code",null,"false"),a(" when not.")],-1)),t[5]||(t[5]=e("p",{class:"-text"},"Boolean attributes can be set to true this way:",-1)),i(o,{class:"html",id:"stylesheet",code:r.booleanAttributes.example1,lang:"html"},null,8,["code"]),t[6]||(t[6]=e("p",{class:"-text"},"And set to false this way:",-1)),i(o,{class:"html",id:"stylesheet",code:r.booleanAttributes.example2,lang:"html"},null,8,["code"]),t[7]||(t[7]=e("p",{class:"-text"},[a("Some components, like "),e("code",null,"chi-drawer"),a(", have helper methods in order to change the state of commonly modified attributes:")],-1)),i(o,{class:"html",id:"stylesheet",code:r.booleanAttributes.example3,lang:"html"},null,8,["code"])])])])])])])])],64)}}}),ne={class:"chi-tabs -border",ref:"chi-vue-tabs"},oe={class:"chi-tabs-panel -active",id:"chi-vue-tabs--npm"},ae={class:"-d--flex -no-gutter -bg--grey-15"},le={class:"-bg--grey-15 -py--3 -br--1",style:{width:"14rem"}},ce={class:"chi-tabs -vertical",ref:"chi-vue-npm-tabs",role:"tablist","aria-label":"chi-tabs-vertical-base"},re=["href"],pe={class:"-flex--grow1 -h--100"},de={class:"chi-tabs-panel -active",id:"npm--npmrc",role:"tabpanel"},ue={class:"chi-tabs-panel",id:"npm--package",role:"tabpanel"},he={class:"chi-tabs-panel",id:"npm--main",role:"tabpanel"},me={class:"chi-tabs-panel",id:"chi-vue-tabs--umd"},be=v({__name:"_chi_vue",setup(y){const l=j("chi-vue-tabs"),p=j("chi-vue-npm-tabs"),r=[{title:".npmrc",link:"npmrc"},{title:"package.json",link:"package"},{title:"main.ts",link:"main"}];$(()=>{l.value&&chi.tab(l.value)}),$(()=>{p.value&&chi.tab(p.value)});const n={npm:{npmrc:`registry=https://registry.npmjs.org
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
<script src="https://lib.lumen.com/chi/${b}/chi-vue/umd/index.umd.js"><\/script>

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
<chi-vue-pagination :pages="5" :current-page="currentPage"></chi-vue-pagination>`};return(t,s)=>{const o=g,c=_;return u(),d(m,null,[i(o,{title:"Chi Vue",id:"chi-vue","title-size":"h2","additional-classes":"-text--h2 -text--bold"}),s[6]||(s[6]=e("div",{class:"chi-badge -dark -outline -xs -mb--1"},[e("span",null,"Optional")],-1)),s[7]||(s[7]=e("p",{class:"-text"},"Chi supports a set of native Vue components. Chi Vue can be installed via Github npm registry or included from CDN as a UMD library.",-1)),e("ul",ne,s[0]||(s[0]=[e("li",{class:"-active"},[e("a",{href:"#chi-vue-tabs--npm"},"NPM")],-1),e("li",null,[e("a",{href:"#chi-vue-tabs--umd"},"UMD")],-1)]),512),e("div",oe,[e("div",ae,[e("div",le,[e("ul",ce,[(u(),d(m,null,V(r,(h,k)=>e("li",{key:k,class:I({"-active":k===0})},[e("a",{href:`#npm--${h.link}`,role:"tab"},E(h.title),9,re)],2)),64))],512)]),e("div",pe,[e("div",de,[i(c,{id:"npmrcSnippet",code:n.npm.npmrc,lang:"javascript"},null,8,["code"])]),e("div",ue,[i(c,{id:"npmPackageSnippet",code:n.npm.package,lang:"javascript"},null,8,["code"])]),e("div",he,[s[1]||(s[1]=e("div",{class:"chi-tab__description -p--2"},"Import Chi Vue and register its components globally",-1)),i(c,{id:"npmrcExample",code:n.npm.main,lang:"typescript"},null,8,["code"])])])]),s[2]||(s[2]=e("p",{class:"-text"},"Chi Vue plugin is optional to be installed with the use function to set up the default configuration",-1)),i(c,{id:"plugin",code:n.npm.plugin,lang:"javascript"},null,8,["code"]),s[3]||(s[3]=e("p",{class:"-text"},"It is not necessary to pass any options to the plugin to install all Chi dependencies (CSS, JS and Web Components) as it uses the portal theme and the latest available version of Chi by default. If you want to pass a specific theme or version, the plugin accepts a configuration object:",-1)),i(c,{id:"pluginOptions",code:n.npm.pluginOptions,lang:"javascript"},null,8,["code"]),s[4]||(s[4]=e("p",{class:"-text"},"Here you can see an example installation with a theme and a customized version:",-1)),i(c,{id:"pluginExample",code:n.npm.pluginExample,lang:"javascript"},null,8,["code"])]),e("div",me,[s[5]||(s[5]=e("div",{class:"chi-tab__description -py--2"},"Include Chi Vue UMD library from CDN and register the components you need.",-1)),i(c,{id:"vueUMD",code:n.umd,lang:"javascript"},null,8,["code"])])],64)}}}),ve=v({__name:"_framework_specific_boilerplates",setup(y){const l=["Vue","Stencil","Angular","React"],p=[{title:"",key:"class"},{title:"chi.css",key:"css"},{title:"chi.js",key:"js"},{title:"Web components",key:"webComponents"},{title:"Favicon",key:"favicon"},{title:"Download",key:"download"}].map(n=>({...n,className:"-text--center"}));C(()=>{chi.expansionPanel(document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),{mode:"accordion"})});const r=(n,t)=>{switch(n.key){case"class":return`<span class="-text--bold">${t}</span>`;case"download":return`<a href="/boilerplates/chi-vue-es6-boilerplate.zip" class="chi-button">
                    <div class="chi-button__content">
                        <i aria-hidden="true" class="chi-icon icon-circle-arrow-down-outline"></i>
                        <span>Download</span>
                    </div>
                 </a>`;default:return'<i class="chi-icon icon-check -icon--success"></i>'}};return(n,t)=>{const s=g,o=D;return u(),d(m,null,[i(s,{title:"Framework specific boilerplates",id:"framework-specific-boilerplates","title-size":"h2","additional-classes":"-mt--5 -text--h2 -text--bold"}),t[0]||(t[0]=e("p",{class:"-text"},"Boilerplates include:",-1)),i(o,{data:l,columns:f(p),getContent:r,"additional-classes":"-mt--3 -mb--3 -bordered -text--center"},null,8,["columns"])],64)}}}),ye={class:"chi-grid__container -pt--3"},Ce=v({__name:"index",setup(y){return(l,p)=>(u(),d("div",ye,[i(H),i(L),i(W),i(ie),i(be),i(ve)]))}});export{Ce as _};

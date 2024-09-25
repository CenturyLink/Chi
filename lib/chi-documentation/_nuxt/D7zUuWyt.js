import{_ as f}from"./BJfyOiY6.js";import{_}from"./onyWiYp2.js";import{e as y,a5 as C,f as r,g as u,o as m,c as h,b as i,a as e,F as d,i as k,k as V,n as x,t as A}from"./CEIPSiTs.js";const j={class:"chi-tabs -border",ref:"chi-vue-tabs"},S={class:"-no-example-code-snippet"},w={class:"chi-tabs-panel -active",id:"chi-vue-tabs--npm"},D={class:"-d--flex -no-gutter -bg--grey-15"},E={class:"-bg--grey-15 -py--3 -br--1",style:{width:"14rem"}},I={class:"chi-tabs -vertical",ref:"chi-vue-npm-tabs",role:"tablist","aria-label":"chi-tabs-vertical-base"},N=["href"],O={class:"-flex--grow1 -h--100"},T={class:"chi-tabs-panel -active",id:"npm--npmrc",role:"tabpanel"},M={class:"chi-tabs-panel",id:"npm--package",role:"tabpanel"},P={class:"chi-tabs-panel",id:"npm--main",role:"tabpanel"},U={class:"chi-tabs-panel",id:"chi-vue-tabs--umd"},G=y({__name:"_chi_vue",setup($){const v=C(),g=[{title:".npmrc",link:"npmrc"},{title:"package.json",link:"package"},{title:"main.ts",link:"main"}],n={npm:{npmrc:`registry=https://registry.npmjs.org
@centurylink:registry=https://npm.pkg.github.com/centurylink
//npm.pkg.github.com/:_authToken=\${GH_TOKEN}`,package:`"@centurylink/chi-vue": "3.8.1",
"pinia": "^2.1.4",`,main:`import { createApp } from 'vue';
import { ChiVue, ChiSearchInput } from "@centurylink/chi-vue";
import App from './App.vue';

const app = createApp(App);

app.use(ChiVue, {});
app.component("ChiSearchInput", ChiSearchInput);

app.mount('#app');`,plugin:`import { createApp } from 'vue';
import { ChiVue } from "@centurylink/chi-vue";

const app = createApp(App);

app.use(ChiVue, {});`},pluginOptions:`{
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
`,umd:o=>`<!-- UMD asset -->
<script src="https://lib.lumen.com/chi/${o}/chi-vue/umd/chi-vue.umd.js"><\/script>

<!-- Vue component example -->
new Vue({
  components: {
    chiVuePagination: window['chi-vue'].library.components.ChiPagination,
  }
});

<!-- Vue template example -->
<chi-vue-pagination :pages="5" :current-page="currentPage"></chi-vue-pagination>`},s=r("chi-vue-tabs"),p=r("chi-vue-npm-tabs");return u(()=>{s.value&&chi.tab(s.value)}),u(()=>{p.value&&chi.tab(p.value)}),(o,t)=>{const b=f,a=_;return m(),h(d,null,[i(b,{title:"Chi Vue",id:"chi-vue",titleSize:"h2",additionalClasses:"-lh--4"}),t[6]||(t[6]=e("div",{class:"chi-badge -dark -outline -xs -mr--1"},[e("span",null,"Optional")],-1)),t[7]||(t[7]=e("p",{class:"-text"},"Chi supports a set of native Vue components. Chi Vue can be installed via Github npm registry or included from CDN as a UMD library.",-1)),e("ul",j,t[0]||(t[0]=[e("li",{class:"-active"},[e("a",{href:"#chi-vue-tabs--npm"},"NPM")],-1),e("li",null,[e("a",{href:"#chi-vue-tabs--umd"},"UMD")],-1)]),512),e("div",S,[e("div",w,[e("div",D,[e("div",E,[e("ul",I,[(m(),h(d,null,k(g,(l,c)=>e("li",{key:c,class:x({"-active":c===0})},[e("a",{href:`#npm--${l.link}`,role:"tab"},A(l.title),9,N)],2)),64))],512)]),e("div",O,[e("div",T,[i(a,{id:"npmrcSnippet",code:n.npm.npmrc,lang:"javascript"},null,8,["code"])]),e("div",M,[i(a,{id:"npmPackageSnippet",code:n.npm.package,lang:"javascript"},null,8,["code"])]),e("div",P,[t[1]||(t[1]=e("div",{class:"chi-tab__description"},"Import Chi Vue and register its components globally",-1)),i(a,{id:"npmrcExample",code:n.npm.main,lang:"typescript"},null,8,["code"])])])]),t[2]||(t[2]=e("p",{class:"-text"},"Chi Vue plugin is optional to be installed with the use function to set up the default configuration",-1)),i(a,{id:"plugin",code:n.npm.plugin,lang:"javascript"},null,8,["code"]),t[3]||(t[3]=e("p",{class:"-text"},"It is not necessary to pass any options to the plugin to install all Chi dependencies (CSS, JS and Web Components) as it uses the portal theme and the latest available version of Chi by default. If you want to pass a specific theme or version, the plugin accepts a configuration object:",-1)),i(a,{id:"pluginOptions",code:n.npm.pluginOptions,lang:"javascript"},null,8,["code"]),t[4]||(t[4]=e("p",{class:"-text"},"Here you can see an example installation with a theme and a customized version:",-1)),i(a,{id:"pluginExample",code:n.npm.pluginExample,lang:"javascript"},null,8,["code"])]),e("div",U,[t[5]||(t[5]=e("div",{class:"chi-tab__description"},"Include Chi Vue UMD library from CDN and register the components you need.",-1)),i(a,{id:"snippets",code:n.umd(V(v)),lang:"javascript"},null,8,["code"])])])],64)}}});export{G as _};

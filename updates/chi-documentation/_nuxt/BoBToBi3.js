var _=Object.defineProperty;var b=(e,i,s)=>i in e?_(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s;var p=(e,i,s)=>b(e,typeof i!="symbol"?i+"":i,s);import{V as y,N as f}from"./uJTUijt2.js";import{a1 as k,o as u,c as h,b as a,a as t,F as V,i as C,a3 as j,d as v,n as w,t as N}from"./B5CYXVwa.js";import{_ as x}from"./drvuhYu1.js";import{_ as P}from"./D8GK0F__.js";import{_ as D}from"./DlAUqK2U.js";import"./C-hgEc7b.js";var $=Object.defineProperty,O=Object.getOwnPropertyDescriptor,E=(e,i,s,c)=>{for(var n=c>1?void 0:c?O(i,s):i,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(c?o(i,s,n):o(n))||n);return c&&n&&$(i,s,n),n};let d=class extends y{constructor(){super(...arguments);p(this,"version",k);p(this,"tabs",[{title:".npmrc",link:"npmrc"},{title:"package.json",link:"package"},{title:"main.ts",link:"main"},{title:"vue.config.js",link:"vueconfig"}]);p(this,"stylesheet",{npm:{npmrc:`registry=https://registry.npmjs.org
@centurylink:registry=https://npm.pkg.github.com/centurylink
//npm.pkg.github.com/:_authToken=\${GH_TOKEN}`,package:`"@centurylink/chi-vue": "2.2.0",
"copy-webpack-plugin": "^5.1.1",`,vueconfig:`const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    configureWebpack: config => {
      if (!config.externals) {
        config.externals = {};
      }

      config.output.filename = '[name].js';
      config.output.chunkFilename = '[name].js';

      let plugins = [{ from: '@centurylink/chi-vue/dist' }];
      config.plugins.push(
        new CopyWebpackPlugin(plugins, {
          context: 'node_modules',
          ignore: ['.DS_Store'],
        }));
    },
  };`,main:`import(/* webpackChunkName: "chi-vue" */ '@centurylink/chi-vue').then(chiVue => {
  Object.keys(chiVue.library.components).forEach((name: string) => {
    Vue.component(name, chiVue.library.components[name]);
  });
}).finally(() =>{
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}).catch(() => {
  throw('@centurylink/chi-vue library is not loaded correctly!');
});`},umd:s=>`<!-- UMD asset -->
<script src="https://lib.lumen.com/chi/${s}/chi-vue/umd/chi-vue.umd.js"><\/script>

<!-- Vue component example -->
new Vue({
  components: {
    chiVuePagination: window['chi-vue'].library.components.ChiPagination,
  }
});

<!-- Vue template example -->
<chi-vue-pagination :pages="5" :current-page="currentPage"></chi-vue-pagination>`})}mounted(){chi.tab(document.getElementById("chi-vue-tabs")),chi.tab(document.getElementById("chi-vue-npm-tabs"))}};d=E([f({})],d);const I=j('<div class="chi-badge -dark -outline -xs -mr--1"><span>Optional</span></div><p class="-text">Chi supports a set of native Vue components. Chi Vue can be installed via Github npm registry or included from CDN as a UMD library.</p><ul class="chi-tabs -border" id="chi-vue-tabs"><li class="-active"><a href="#chi-vue-tabs--npm">NPM</a></li><li><a href="#chi-vue-tabs--umd">UMD</a></li></ul>',3),S={class:"-no-example-code-snippet"},B={class:"chi-tabs-panel -active",id:"chi-vue-tabs--npm"},M={class:"-d--flex -no-gutter -bg--grey-15"},U={class:"-bg--grey-15 -py--3 -br--1",style:{width:"14rem"}},T={class:"chi-tabs -vertical",id:"chi-vue-npm-tabs",role:"tablist","aria-label":"chi-tabs-vertical-base"},W=["href"],F={class:"-flex--grow1 -h--100"},z={class:"chi-tabs-panel -active",id:"npm--npmrc",role:"tabpanel"},A={class:"chi-tabs-panel",id:"npm--package",role:"tabpanel"},G={class:"chi-tabs-panel",id:"npm--main",role:"tabpanel"},H=t("div",{class:"chi-tab__description"},"Import Chi Vue and register its components globally",-1),q={class:"chi-tabs-panel",id:"npm--vueconfig",role:"tabpanel"},K=t("div",{class:"chi-tab__description"},[v("Use "),t("code",null,"CopyWebpackPlugin"),v(" in vue.config.js to copy Chi Vue assets to dist")],-1),L={class:"chi-tabs-panel",id:"chi-vue-tabs--umd"},R=t("div",{class:"chi-tab__description"},"Include Chi Vue UMD library from CDN and register the components you need.",-1);function J(e,i,s,c,n,r){const o=x,l=P;return u(),h("div",null,[a(o,{title:"Chi Vue",id:"chi-vue",titleSize:"h2",additionalClasses:"-lh--4"}),I,t("div",S,[t("div",B,[t("div",M,[t("div",U,[t("ul",T,[(u(!0),h(V,null,C(e.tabs,(m,g)=>(u(),h("li",{key:g,class:w({"-active":g===0})},[t("a",{href:`#npm--${m.link}`,role:"tab"},N(m.title),9,W)],2))),128))])]),t("div",F,[t("div",z,[a(l,{id:"stylesheet",code:e.stylesheet.npm.npmrc,lang:"javascript"},null,8,["code"])]),t("div",A,[a(l,{id:"stylesheet",code:e.stylesheet.npm.package,lang:"javascript"},null,8,["code"])]),t("div",G,[H,a(l,{id:"stylesheet",code:e.stylesheet.npm.main,lang:"typescript"},null,8,["code"])]),t("div",q,[K,a(l,{id:"stylesheet",code:e.stylesheet.npm.vueconfig,lang:"javascript"},null,8,["code"])])])])]),t("div",L,[R,a(l,{id:"stylesheet",code:e.stylesheet.umd(e.version),lang:"javascript"},null,8,["code"])])])])}const ne=D(d,[["render",J]]);export{ne as default};

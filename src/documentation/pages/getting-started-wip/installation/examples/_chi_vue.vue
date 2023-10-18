<template lang="pug">
  div
    <TitleAnchor title="Chi Vue" id="chi-vue" titleSize="h2" additionalClasses="-lh--4" />
    .chi-badge.-dark.-outline.-xs.-mr--1
      span Optional
    p.-text Chi supports a set of native Vue components. Chi Vue can be installed via Github npm registry or included from CDN as a UMD library.

    ul#chi-vue-tabs.chi-tabs.-border
      li.-active
        a(href='#chi-vue-tabs--npm') NPM
      li
        a(href='#chi-vue-tabs--umd') UMD
    .-no-example-code-snippet
      #chi-vue-tabs--npm.chi-tabs-panel.-active
        .-d--flex.-no-gutter.-bg--grey-15
          .-bg--grey-15.-py--3.-br--1(style="width: 14rem;")
            ul#chi-vue-npm-tabs.chi-tabs.-vertical(role='tablist' aria-label='chi-tabs-vertical-base')
              li(v-for="(tab, index) in tabs" :key="index" :class="{ '-active': index === 0 }")
                a(:href="`#npm--${tab.link}`" role='tab') {{ tab.title }}
          .-flex--grow1.-h--100
            #npm--npmrc.chi-tabs-panel.-active(role='tabpanel')
              <Copy id="stylesheet">
                <pre class="language-html" slot="code">
                  <code v-highlight="stylesheet.npm.npmrc" lang='bash' class="html"></code>
                </pre>
              </Copy>
            #npm--package.chi-tabs-panel(role='tabpanel')
              <Copy id="stylesheet">
                <pre class="language-javascript" slot="code">
                  <code v-highlight="stylesheet.npm.package" lang='javascript' class="language-javascript"></code>
                </pre>
              </Copy>
            #npm--main.chi-tabs-panel(role='tabpanel')
              .chi-tab__description
                | Import Chi Vue and register its components globally
              <Copy id="stylesheet">
                <pre class="language-javascript" slot="code">
                  <code v-highlight="stylesheet.npm.main" lang='javascript' class="language-javascript"></code>
                </pre>
              </Copy>
            #npm--vueconfig.chi-tabs-panel(role='tabpanel')
              .chi-tab__description
                | Use <code>CopyWebpackPlugin</code> in vue.config.js to copy Chi Vue assets to dist
              <Copy id="stylesheet">
                <pre class="language-javascript" slot="code">
                  <code v-highlight="stylesheet.npm.vueconfig" lang='javascript' class="language-javascript"></code>
                </pre>
              </Copy>
      #chi-vue-tabs--umd.chi-tabs-panel
        .chi-tab__description
          | Include Chi Vue UMD library from CDN and register the components you need.
        <Copy id="stylesheet">
          <pre class="language-html" slot="code">
            <code v-highlight="stylesheet.umd(version)" lang='javascript' class="language-html"></code>
          </pre>
        </Copy>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      tabs: [
        { title: '.npmrc', link: 'npmrc' },
        { title: 'package.json', link: 'package' },
        { title: 'main.ts', link: 'main' },
        { title: 'vue.config.js', link: 'vueconfig' },
      ],
      stylesheet: {
        npm: {
          npmrc: `registry=https://registry.npmjs.org
@centurylink:registry=https://npm.pkg.github.com/centurylink
//npm.pkg.github.com/:_authToken=\${GH_TOKEN}`,
          package: `"@centurylink/chi-vue": "2.2.0",
"copy-webpack-plugin": "^5.1.1",`,
          vueconfig: `const CopyWebpackPlugin = require('copy-webpack-plugin');

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
  };`,
          main: `import(/* webpackChunkName: "chi-vue" */ '@centurylink/chi-vue').then(chiVue => {
  Object.keys(chiVue.library.components).forEach((name: string) => {
    Vue.component(name, chiVue.library.components[name]);
  });
}).finally(() =>{
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}).catch(() => {
  throw('@centurylink/chi-vue library is not loaded correctly!');
});`
        },
        umd: (version: string) => `<!-- UMD asset -->
<script src="https://assets.ctl.io/chi/${version}/chi-vue/umd/chi-vue.umd.js">\x3C/script>

<!-- Vue component example -->
new Vue({
  components: {
    chiVuePagination: window['chi-vue'].library.components.ChiPagination,
  }
});

<!-- Vue template example -->
<chi-vue-pagination :pages="5" :current-page="currentPage"></chi-vue-pagination>`
      },
    }
  }
})
export default class ChiVue extends Vue {
  mounted() {
    chi.tab(document.getElementById('chi-vue-tabs'));
    chi.tab(document.getElementById('chi-vue-npm-tabs'));
  }

  get theme() {
    return this.$store.state.themes.theme;
  }

  get version() {
    return this.$store.state.themes.version;
  }
}
</script>

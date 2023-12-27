<template lang="pug">
  div
    <TitleAnchor title="JavaScript" id="javascript" titleSize="h2" additionalClasses="-lh--4" />
    .chi-badge.-dark.-outline.-xs.-mr--1
      span Optional
    p.-text Although Chi can be used as a pure HTML and CSS library with only the stylesheet above, many advanced components like tabs, drop downs, date pickers, and others require JavaScript to function. In most cases the need is minimal. You may write your own JavaScript to integrate Chi's CSS and blueprints into your project, or use Chi's JavaScript library which was written to provide a complete solution.
    p.-text Chi's JavaScript library depends on Popper.js for positioning components like Popovers and Dropdown menus, and Day.js for calculating dates in the Datepicker component. For the rest, the library is entirely independent.
    p.-text Chi's JavaScript library is developed as an ES6 component, but with the help of Webpack, it is available in several flavors. Choose the method that best fits your project.

    ul#chi-js-tabs.chi-tabs.-border
      li(v-for="(tab, index) in tabs" :key="index" :class="{ '-active': index === 0 }")
        a(:href="`#chi-js-tabs--${tab.link}`") {{ tab.title }}

    #chi-js-tabs--file.chi-tabs-panel.-active
      p.-text
        | To use the old method of including Chi in your project, include the ES5, browser prepared, JavaScript
        | file from the Lumen Assets Server. In this solution Popper.js and Day.js are bundled into the file.
      .-mb--2
        <Copy id="stylesheet">
          <pre class="language-html" slot="code">
          <code v-highlight="stylesheet.htmlblueprint.jsFile(version)" lang='bash' class="html"></code>
          </pre>
        </Copy>
    #chi-js-tabs--amd.chi-tabs-panel
      p.-text
        | If you use RequireJS or any other AMD compatible module loader in your project, you will find the AMD compatible
        | version in the <code>amd</code> folder. Then, you will have to update your require configuration:
      <Copy id="stylesheet">
        <pre class="language-html" slot="code">
          <code v-highlight="stylesheet.htmlblueprint.amd" lang='bash' class="html"></code>
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
        { title: 'JavaScript file', link: 'file' },
        { title: 'AMD module', link: 'amd' },
      ],
      stylesheet: {
        htmlblueprint: {
          jsFile: (version: string) => `<script src="https://lib.lumen.com/chi/${version}/js/chi.js" integrity="sha256-6QhYmHCoTdqje2hbaXewfi4/GRD7ar8PaJNc/txRYpw=" crossorigin="anonymous">\x3C/script>`,
          amd: `'chi': {
  path: [CHI_PATH, 'amd', 'chi'].join('/'),
  shim: {
    deps: ['Popper'],
    exports: 'chi'
  }
}`
        }
      },
    }
  }
})
export default class JavaScript extends Vue {
  mounted() {
    chi.tab(document.getElementById('chi-js-tabs'));
  }

  get version() {
    return this.$store.state.themes.version;
  }
}
</script>

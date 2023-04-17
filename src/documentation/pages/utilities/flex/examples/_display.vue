<template lang="pug">
fragment
  AnchorTitle(title="Display", tag="h2", :anchor="`?theme=${$store.state.themes.theme}#display`")
  p.-text To enable flex, apply a flex display utility class. This will transform your element into a flexbox container and its direct children into flex items.

  UtilityExample(title="Responsive background-color examples", id="responsive-background-color-examples", titleSize="h3", additionalClasses="-show--example")
    div(slot="example")
      .-text.-p--2.-m--1.-d--flex -d--flex
    <pre class="language-html" slot="code-example">
      <code v-highlight="$data.codeSnippet" class="html"></code>
    </pre>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import {Fragment} from 'vue-fragment'
  @Component({
    components: {
      Fragment
    },
    data: ()=> {
      return {
        codeSnippet: `<div class="-d--flex"></div>`,
      }
    }
  })
  export default class Display extends Vue {}
</script>

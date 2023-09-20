<template lang="pug">
  div
    <TitleAnchor title="Setup" id="setup" titleSize="h2" />
    p.-text In order to set up Chi Development workflow, fork and clone
      a(href='https://github.com/CenturyLink/Chi' target="_blank") Chi GitHub repository.
    p.-text
      | Set up your Chi development environment with Docker. First make sure you have Docker installed, then run
      | the command:
    <Copy id="setup">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint" lang='bash' class="html"></code>
      </pre>
    </Copy>
    p.-text Now your environment is set up. To start development run:
    <Copy id="start">
      <pre class="language-html" slot="code">
        <code v-highlight="codeSnippets.htmlblueprint1" lang='bash' class="html"></code>
      </pre>
    </Copy>
    p.-text
      | Once the container has been bootstrapped and the Chi project has started, connect to
      | <a href="http://localhost:8000/">http://localhost:8000/</a>
      | in your browser to load Chi. While running, any changes to the Chi source will be automatically reloaded in your
      | browser.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeSnippets: {
        htmlblueprint: `$ scripts/docker.sh alias
$ source ~/.bash_profile`,
        htmlblueprint1: '$ chi start'
      }
    }
  }
})
export default class Setup extends Vue {}
</script>

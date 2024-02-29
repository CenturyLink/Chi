<template lang="pug">
<TitleAnchor title="Setup" id="setup" titleSize="h2" />
p.-text
  | In order to set up Chi Development workflow, fork and clone
  |
  a(href='https://github.com/CenturyLink/Chi' target="_blank") Chi
  |  GitHub repository.
p.-text Set up your Chi development environment with Docker. First make sure you have Docker installed, then run the command:

Copy(id="setup" :code="codeSnippets.htmlblueprint" lang="bash")


p.-text Now your environment is set up. To start development run:
Copy(id="start" :code="codeSnippets.htmlblueprint1" lang="bash")

p.-text
  | Once the container has been bootstrapped and the Chi project has started, connect to
  | <a href="http://localhost:8000/">http://localhost:8000/</a>
  | in your browser to load Chi. While running, any changes to the Chi source will be automatically reloaded in your
  | browser.
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Setup extends Vue {
  codeSnippets = {
    htmlblueprint: `$ scripts/docker.sh alias
$ source ~/.bash_profile`,
    htmlblueprint1: '$ chi start',
  };
}
</script>

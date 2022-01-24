<template lang="pug">
  <ComponentExample title="Keep default link behavior" id="default-link" padding="-p--0" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | By default, Chi JavaScript enabled tabs will ignore default link behavior.
      | To preserve it, specify a target property on the link.
    .-p--3.-pb--4(slot="example")
      ul#example-default-link-behavior.chi-tabs(role="tablist" aria-label="example-default-link-behavior")
        li.-active
          a(
            href='#a2'
            role="tab"
            aria-selected="true"
            aria-controls="a2") Tab a
        li
          a(
            href='#b2'
            role="tab"
            aria-selected="false"
            tabindex="-1"
            aria-controls="ab2") Tab b
        li
          a(
            href='#c2'
            role="tab"
            aria-selected="true"
            tabindex="-1"
            aria-controls="c2") Tab c
        li
          a(href='https://assets.ctl.io/chi/' target='_self') External Link
      #a2.chi-tabs-panel.-active(role="tabpanel")
        p.-text Content for tab a
      #b2.chi-tabs-panel(role="tabpanel")
        p.-text Content for tab b
      #c2.chi-tabs-panel(role="tabpanel")
        p.-text Content for tab c
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<ul class="chi-tabs" id="example-tabs-2" role="tablist" aria-label="example-default-link-behavior">
  <li class="-active">
    <a
      href="#a2"
      role="tab"
      aria-selected="true"
      aria-controls="a2">Tab a</a>
  </li>
  <li>
    <a
      href="#b2"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="ab2">Tab b</a>
  </li>
  <li>
    <a
      href="#c2"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="c2">Tab c</a>
  </li>
  <li><a href="https://assets.ctl.io/chi/" target="_self">External Link</a></li>
</ul>

<div class="chi-tabs-panel -active" id="a2" role="tabpanel">
  <p class="-text">Content for tab a</p>
</div>
<div class="chi-tabs-panel" id="b2" role="tabpanel">
  <p class="-text">Content for tab b</p>
</div>
<div class="chi-tabs-panel" id="c2" role="tabpanel">
  <p class="-text">Content for tab c</p>
</div>

<script>chi.tab(document.getElementById('example-tabs-2'));<\/script>`,
      },
    };
  },
})
export default class DefaultLink extends Vue {
  mounted() {
    chi.tab(document.getElementById('example-default-link-behavior'));
  }
}
</script>

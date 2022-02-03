<template lang="pug">
  <ComponentTest title="Horizontal" id="horizontal-lumen-centurylink" padding="-p--0" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuTabs[0].id">
    //- div(slot="example-description")
    //-   ul#chi-tabs--menu.chi-tabs(
    //-     role="tablist"
    //-     aria-label="chi-tabs-horizontal-examples")
    //-     li.-active
    //-       a(
    //-         href='#chi-tabs-panel--horizontal-base'
    //-         role="tab"
    //-         aria-selected="true"
    //-         aria-controls="chi-tabs-panel--horizontal-base") Base
    //-     li
    //-       a(
    //-         href='#chi-tabs-panel--horizontal-inverse'
    //-         role="tab"
    //-         aria-selected="false"
    //-         tabindex="-1"
    //-         aria-controls="chi-tabs-panel--horizontal-inverse") Inverse

    .-p--3.-bg--grey-20(slot="menu-base")
      .-bg--white.-px--3
        ul.chi-tabs#example-horizontal-base(
          role="tablist"
          aria-label="chi-tabs-horizontal")
          li.-active
            a(
              href='#horizontal-base-1'
              role="tab"
              aria-selected="true"
              aria-controls="horizontal-base-1"
              ) Active Tab
          li
            a(
              href='#horizontal-base-2'
              role="tab"
              aria-selected="false"
              tabindex="-1"
              aria-controls="horizontal-base-2") Tab Link
          li
            a(
              href='#horizontal-base-3'
              role="tab"
              aria-selected="false"
              tabindex="-1"
              aria-controls="horizontal-base-3"
              ) Tab Link
        .-py--3
          .chi-tabs-panel.-active#horizontal-base-1(role="tabpanel")
            .-text Tab 1 content
          .chi-tabs-panel#horizontal-base-2(role="tabpanel")
            .-text Tab 2 content
          .chi-tabs-panel#horizontal-base-3(role="tabpanel")
            .-text Tab 3 content

    .-p--3.-bg--grey-20(slot="menu-inverse")
      .-bg--black.-px--3
        ul.chi-tabs.-inverse#example-horizontal-inverse(role="tablist" aria-label="chi-tabs-horizontal-inverse")
          li.-active
            a(
              href='#horizontal-inverse-1'
              role="tab"
              aria-selected="true"
              aria-controls="horizontal-inverse-1") Active Tab
          li
            a(
              href='#horizontal-inverse-2'
              role="tab"
              aria-selected="false"
              tabindex="-1"
              aria-controls="horizontal-inverse-2") Tab Link
          li
            a(
              href='#horizontal-inverse-3'
              role="tab"
              aria-selected="false"
              tabindex="-1"
              aria-controls="horizontal-inverse-3") Tab Link
      .-bg--white.-p--3
        .chi-tabs-panel.-active#horizontal-inverse-1(role="tabpanel")
          .-text Tab 1 content
        .chi-tabs-panel#horizontal-inverse-2(role="tabpanel")
          .-text Tab 2 content
        .chi-tabs-panel#horizontal-inverse-3(role="tabpanel")
          .-text Tab 3 content

    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentTest>
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
       menuTabs: [
        {
          active: true,
          id: 'base',
          label: 'Base',
        },
        {
          id: 'inverse',
          label: 'Inverse',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<ul class="chi-tabs" id="example-horizontal-base" role="tablist" aria-label="chi-tabs-horizontal">
  <li class="-active">
    <a
      href="#horizontal-base-1"
      role="tab"
      aria-selected="true"
      aria-controls="horizontal-base-1">Active Tab</a>
  </li>
  <li role="tab">
    <a
      href="#horizontal-base-2"
      aria-selected="false"
      tabindex="-1"
      aria-controls="horizontal-base-2">Tab Link</a>
  </li>
  <li role="tab">
    <a
      href="#horizontal-base-3"
      aria-selected="false"
      tabindex="-1"
      aria-controls="horizontal-base-3">Tab Link</a>
  </li>
</ul>

<div class="chi-tabs-panel -active" id="horizontal-base-1" role="tabpanel">Tab 1 content</div>
<div class="chi-tabs-panel" id="horizontal-base-2" role="tabpanel">Tab 2 content</div>
<div class="chi-tabs-panel" id="horizontal-base-3" role="tabpanel">Tab 3 content</div>

<script>chi.tab(document.getElementById('example-horizontal-base'));<\/script>`,
      },
    };
  },
})
export default class Horizontal extends Vue {
  mounted() {
    // chi.tab(document.getElementById('example-base'));
    // chi.tab(document.getElementById('example-horizontal-base'));
  }
}
</script>

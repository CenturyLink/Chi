<template lang="pug">
  <ComponentTabExample title="Wait for animations" id="wait-animations-lumen-centurylink" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuId" @toggleMenuId="toggleMenuId">
    p.-text(slot="example-description")
      | Browsers stop any execution of JavaScript as soon as a link is clicked and it starts to fetch the destination URL.
      | For this reason, the sliding border animation will not be perceived by the user when an external link is clicked, as
      | the animation will not be done, an this can be confusing for the user. To prevent this possible confusion, this
      | component has the option to wait for the animation to finish and, then, it will redirect the user to the destination
      | URL. You can enable this behavior by setting the <code>waitForAnimations</code> option to <code>true</code>.

    .div(:slot="$data.menuTabs[0].id")
      ul.chi-tabs.chi-navigationExample.chi-customExample
        li.-active
          a(href='?tab=1') Tab Link
        li
          a(href='?tab=2') Tab Link
        li
          a(href='?tab=3') Tab Link
        li
          a(href='?tab=4') Tab Link
        li
          a(href='?tab=5') Tab Link
        li
          a(href='?tab=6') Tab Link
      
    .div(:slot="$data.menuTabs[1].id")
      ul.chi-tabs.chi-navigationExample.chi-customExample
        li.-active
          a(href='?tab=1') Tab Link
        li
          a(href='?tab=2') Tab Link
        li
          a(href='?tab=3') Tab Link
        li
          a(href='?tab=4') Tab Link
        li
          a(href='?tab=5') Tab Link
        li
          a(href='?tab=6') Tab Link  
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-if="menuId === $data.menuTabs[0].id" v-highlight="$data.codeSnippets.htmlblueprintEnable" class="html"></code>
        <code v-if="menuId === $data.menuTabs[1].id" v-highlight="$data.codeSnippets.htmlblueprintDisable" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentTabExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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
          id: 'enable',
          label: 'Enabled',
        },
        {
          id: 'disable',
          label: 'Disabled',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprintEnable: `<ul id="navigationexample-4-enabled" class="chi-tabs">
  <li class="-active">
    <a href="/">Tab Link</a>
  </li>
  <li>
    <a href="/">Tab Link</a>
  </li>
  <li>
    <a href="/">Tab Link</a>
  </li>
  <li>
    <a href="/">Tab Link</a>
  </li>
  <li>
    <a href="/">Tab Link</a>
  </li>
  <li>
    <a href="/">Tab Link</a>
  </li>
</ul>
<script>
const navigationElem = document.getElementById('#navigationexample-4-enabled');
chi.navigation(
  navigationElem,
  {waitForAnimations: true}
);
<\/script>`,
        htmlblueprintDisable: `<ul id="navigationexample-4-disabled" class="chi-tabs">
  <li class="-active">
    <a href="/">Tab Link</a>
  </li>
  <li>
    <a href="/">Tab Link</a>
  </li>
  <li>
    <a href="/">Tab Link</a>
  </li>
  <li>
    <a href="/">Tab Link</a>
  </li>
  <li>
    <a href="/">Tab Link</a>
  </li>
  <li>
    <a href="/">Tab Link</a>
  </li>
</ul>
<script>
  const navigationElem = document.getElementById('#navigationexample-4-disabled');
  chi.navigation(
    navigationElem,
    {waitForAnimations: false}
  );
<\/script>`
      },
    };
  },
})
export default class WaitAnimationsLumenCenturyLink extends Vue {
  menuId = 'enable';

  toggleMenuId(e: string) {
    this.menuId = e;
  }
}
</script>

<template lang="pug">
<ComponentExample title="Wait for animations" :id="exampleId" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeSelectedTab(e)">
  p.-text(slot='example-description')
    | Browsers stop any execution of JavaScript as soon as a link is clicked and it starts to fetch the destination URL.
    | For this reason, the sliding border animation will not be perceived by the user when an external link is clicked, as
    | the animation will not be done, an this can be confusing for the user. To prevent this possible confusion, this
    | component has the option to wait for the animation to finish and, then, it will redirect the user to the destination
    | URL. You can enable this behavior by setting the <code>waitForAnimations</code> option to <code>true</code>.

  .div(slot='example')
    ul.chi-tabs.chi-navigationExample.chi-customExample
      li(
        :class='index === 0 ? "-active" : ""',
        v-for='(link, index) in tabLinks'
      )
        a(:href='`?tab=${index + 1}`') {{ link }}
  <Wrapper :slot="`code-${exampleId}-${tab.id}-webcomponent`" v-for="tab in headTabs" :key="tab.id">
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code> 
    </pre>
  </Wrapper>
  <Wrapper v-for="tab in headTabs" :slot="`code-${exampleId}-${tab.id}-htmlblueprint`" :key="tab.id">
    <JSNeeded />
    <pre class="language-html">
      <code v-highlight="tab.codeSnippets.htmlBlueprint.code" class="html"></code> 
    </pre>
  </Wrapper>
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HeadTabsInterface } from '../../../../models/models';

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
      tabLinks: Array(6).fill('Tab Link'),
      headTabs: [
        {
          active: true,
          id: 'enabled',
          label: 'Enabled',
          selectedItemId: 1,
          codeSnippets: {
            webComponent: {
              code: ``,
            },
            htmlBlueprint: {
              code: ``,
            },
          },
        },
        {
          id: 'disabled',
          label: 'Disabled',
          selectedItemId: 1,
          codeSnippets: {
            webComponent: {
              code: ``,
              description: ``,
            },
            htmlBlueprint: {
              code: ``,
            },
          },
        },
      ],
      exampleId: 'wait-animations-lumen-centurylink',
    };
  },
})
export default class WaitAnimationsLumenCenturyLink extends Vue {
  selectedTab: any;
  tab: any;

  _setCodeSnippets() {
    this.$data.headTabs.forEach((headTab: any) => {
      let tabLinks = '';
      this.$data.tabLinks.forEach((tabLink: string, index: number) => {
        tabLinks += `
  <li ${index === 0 ? 'class="-active"' : ''}>
    <a href="/>${tabLink}</a>
  </li>`;
      });

      headTab.codeSnippets.htmlBlueprint.code = `<ul id="example__tabs_navigation_${headTab.id}" class="chi-tabs">${tabLinks}
</ul>

<script>
const navigationElem = document.getElementById('#example__tabs_navigation_${headTab.id}');
chi.navigation(
  navigationElem,
  {waitForAnimations: ${headTab.id === 'enabled' ? 'true' : 'false'}}
);
<\/script>
`;
    });
  }
  created() {
    this.selectedTab = this.$data.headTabs[0];
    this._setCodeSnippets();
  }

  changeSelectedTab(e: HeadTabsInterface) {
    this.$data.selectedTabId = e.id;
    this.selectedTab = this.$data.headTabs.find((tab: any) => tab.id === e.id);
  }
}
</script>

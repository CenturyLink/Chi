<template lang="pug">
  <ComponentExample title="Wait for animations" id="wait-for-animations" :tabs="exampleTabs" titleSize="h4" :headTabs="headTabs" additionalClasses="-pb--4">
    template(#example-description)
      p.-text
        | Browsers stop any execution of JavaScript as soon as a link is clicked and it starts to fetch the destination URL.
        | For this reason, the sliding border animation will not be perceived by the user when an external link is clicked, as
        | the animation will not be done, an this can be confusing for the user. To prevent this possible confusion, this
        | component has the option to wait for the animation to finish and, then, it will redirect the user to the destination
        | URL. You can enable this behavior by setting the <code>waitForAnimations</code> option to <code>true</code>.
    template(#example)
      ul.chi-tabs.chi-navigationExample.chi-customExample
        li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
          a(:href="`#${link.href}`") {{link.text}}
    template(#["`code-wait-for-animations-${tab.id}-webcomponent`" :key="tab.id"] v-for="tab in headTabs")
      Copy(lang="html" :code="tab.codeSnippets.webComponent.code")

    template(#["`code-wait-for-animations-${tab.id}-htmlblueprint`" :key="tab.id"] v-for="tab in headTabs")
      <JSNeeded />
      Copy(lang="html" :code="tab.codeSnippets.htmlBlueprint.code")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class WaitForAnimation extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  tabLinks = [
    {
      href: '?tab=1',
      text: 'Tab Link',
      active: true,
    },
    {
      href: '?tab=2',
      text: 'Tab Link',
    },
    {
      href: '?tab=3',
      text: 'Tab Link',
    },
    {
      href: '?tab=4',
      text: 'Tab Link',
    },
    {
      href: '?tab=5',
      text: 'Tab Link',
    },
    {
      href: '?tab=6',
      text: 'Tab Link',
    },
  ];

  get headTabs() {
    return [
      {
        active: true,
        id: 'enabled',
        label: 'Enabled',
        codeSnippets: {
          webComponent: {
            code: '',
          },
          htmlBlueprint: {
            code: `<ul id="navigationexample-4-enabled" class="chi-tabs">
${this.tabsLinksHtml}
</ul>
<script>
  const navigationElem = document.getElementById('#navigationexample-4-enabled');
  chi.navigation(
    navigationElem,
    {waitForAnimations: true}
  );
<\/script>`,
          },
        },
      },
      {
        id: 'disabled',
        label: 'Disabled',
        codeSnippets: {
          webComponent: {
            code: '',
          },
          htmlBlueprint: {
            code: `<ul id="navigationexample-4-disabled" class="chi-tabs">
${this.tabsLinksHtml}
</ul>
<script>
  const navigationElem = document.getElementById('#navigationexample-4-disabled');
  chi.navigation(
    navigationElem,
    {waitForAnimations: false}
  );
<\/script>`,
          },
        },
      },
    ];
  }

  get tabsLinksHtml() {
    return this.tabLinks
      .map((_, index) => {
        return `  <li${index === 0 ? ' class="-active"' : ''}>
    <a href="/">Tab Link</a>
  </li>`;
      })
      .join('\n');
  }
}
</script>

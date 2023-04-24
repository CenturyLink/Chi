<template lang="pug">
  <ComponentExample title="Wait for animations" id="wait-for-animations" :tabs="exampleTabs" :headTabs="headTabs" additionalClasses="-pb--4">
    p.-text(slot="example-description")
      | Browsers stop any execution of JavaScript as soon as a link is clicked and it starts to fetch the destination URL.
      | For this reason, the sliding border animation will not be perceived by the user when an external link is clicked, as
      | the animation will not be done, an this can be confusing for the user. To prevent this possible confusion, this
      | component has the option to wait for the animation to finish and, then, it will redirect the user to the destination
      | URL. You can enable this behavior by setting the <code>waitForAnimations</code> option to <code>true</code>.
    div(slot="example")
      ul.chi-tabs.chi-navigationExample.chi-customExample
        li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
          a(:href="`#${link.href}`") {{link.text}}
    <Wrapper v-for="tab in headTabs" :slot="`code-wait-for-animations-${tab.id}-webcomponent`" :key="tab.id">
      <pre class="language-html">
        <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper v-for="tab in headTabs" :slot="`code-wait-for-animations-${tab.id}-htmlblueprint`" :key="tab.id">
      <pre class="language-html">
        <JSNeeded />
        <code v-highlight="tab.codeSnippets.htmlBlueprint.code" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({})

export default class WaitForAnimation extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component'
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint'
    }
  ]

  tabLinks = [
    {
      href: '?tab=1',
      text: 'Tab Link',
      active: true
    },
    {
      href: '?tab=2',
      text: 'Tab Link'
    },
    {
      href: '?tab=3',
      text: 'Tab Link'
    },
    {
      href: '?tab=4',
      text: 'Tab Link'
    },
    {
      href: '?tab=5',
      text: 'Tab Link'
    },
    {
      href: '?tab=6',
      text: 'Tab Link'
    }
  ]

  headTabs = [
    {
      active: true,
      id: 'enabled',
      label: 'Enabled',
      codeSnippets: {
        webComponent: {
          code: ''
        },
        htmlBlueprint: {
          code: `<ul id="navigationexample-4-enabled" class="chi-tabs">
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
<\/script>`
        }
      }
    },
    {
      id: 'disabled',
      label: 'Disabled',
      codeSnippets: {
        webComponent: {
          code: ''
        },
        htmlBlueprint: {
          code: `<ul id="navigationexample-4-disabled" class="chi-tabs">
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
        }
      }
    }
  ]
}
</script>

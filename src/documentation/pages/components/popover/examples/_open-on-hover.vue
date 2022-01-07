<template lang="pug">
  <ComponentExample title="Open on hover" id="open-on-hover" :tabs="exampleTabs">
    .-position--relative(slot='example')
      chi-button#button-open-on-hover Hover me!
      chi-popover#popover-open-on-hover(variant="text", arrow,  reference="#button-open-on-hover")
        | Popover content
    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Use the available methods to show / hide popover when <code>chiMouseEnter</code>, <code>chiMouseLeave</code> or any other event is triggered
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot='code-htmlblueprint'>
      .chi-tab__description
        | Use the available methods to show / hide popover when <code>mouseEnter</code>, <code>mouseLeave</code> or any other event is triggered
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-button id="button-open-on-hover">Hover me!</chi-button>
<chi-popover id="popover-open-on-hover" variant="text" arrow="arrow" reference="#button-open-on-hover">Popover content</chi-popover>
<script>
  const buttonOpenOnHover = document.getElementById("button-open-on-hover");
  const popoverOpenOnHover = document.getElementById("popover-open-on-hover");
  let hoverAnimationTimeout;

  buttonOpenOnHover.addEventListener('chiMouseEnter', function() {
    hoverAnimationTimeout = setTimeout(() => {
      popoverOpenOnHover.show();
    }, 300);
  });

  buttonOpenOnHover.addEventListener('chiMouseLeave', function() {
    if (hoverAnimationTimeout) {
      clearTimeout(hoverAnimationTimeout);
    }
    popoverOpenOnHover.hide();
  });

  buttonOpenOnHover.addEventListener('click', function() {
    popoverOpenOnHover.toggle();
  });
<\/script>`,
        htmlblueprint: `<button class="chi-button" id="button-open-on-hover" data-target="#popover-open-on-hover">Hover me!</button>
<section class="chi-popover" id="popover-open-on-hover" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>

<script>
  const buttonOpenOnHover = document.getElementById('button-open-on-hover');
  const popover = chi.popover(buttonOpenOnHover);
  let hoverAnimationTimeout;

  buttonOpenOnHover.addEventListener("mouseenter", function() {
    hoverAnimationTimeout = setTimeout(() => {
      popover.show();
    }, 300);
  });

  buttonOpenOnHover.addEventListener("mouseleave", function() {
    if (hoverAnimationTimeout) {
      clearTimeout(hoverAnimationTimeout);
    }
    popover.hide();
  });

  buttonOpenOnHover.addEventListener("click", function() {
    popover.toggle();
  });
<\/script>`
      }
    };
  }
})
export default class OpenOnHover extends Vue {
  mounted() {
    const buttonOpenOnHover = document.getElementById('button-open-on-hover');
    const popoverOpenOnHover: any = document.getElementById(
      'popover-open-on-hover'
    );
    let hoverAnimationTimeout: any;

    buttonOpenOnHover?.addEventListener('chiMouseEnter', function() {
      hoverAnimationTimeout = setTimeout(() => {
        popoverOpenOnHover?.show();
      }, 300);
    });

    buttonOpenOnHover?.addEventListener('chiMouseLeave', function() {
      if (hoverAnimationTimeout) {
        clearTimeout(hoverAnimationTimeout);
      }
      popoverOpenOnHover?.hide();
    });

    buttonOpenOnHover?.addEventListener('click', function() {
      popoverOpenOnHover?.toggle();
    });
  }
}
</script>

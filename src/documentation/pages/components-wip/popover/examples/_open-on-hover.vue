<template lang="pug">
<ComponentExample title="Open on hover" id="open-on-hover" :tabs="exampleTabs">
  template(#example)
    .-position--relative
      chi-button#button-open-on-hover(@chiMouseEnter="show" @chiMouseLeave="hide" @click="toggle") Hover me!
      chi-popover(ref="popover" variant="text", arrow,  reference="#button-open-on-hover")
        | Popover content
  template(#code-webcomponent)
    .chi-tab__description
      | Use the available methods to show / hide popover when <code>chiMouseEnter</code>, <code>chiMouseLeave</code> or any other event is triggered
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      | Use the available methods to show / hide popover when <code>mouseEnter</code>, <code>mouseLeave</code> or any other event is triggered
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class OpenOnHover extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
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
<\/script>`,
  };
  show() {
    (this.$refs.popover as any).show();
  }

  hide() {
    (this.$refs.popover as any).hide();
  }

  toggle() {
    (this.$refs.popover as any).toggle();
  }
}
</script>

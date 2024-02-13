<template lang="pug">
<ComponentExample title="Arrow" id="arrow" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Popovers support arrows to indicate the element they originate from. Arrows can be located anywhere around the Popover.
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--6.-w-md--4.-w-xl--3(v-for="position in ['Top', 'Right', 'Bottom', 'Left']")
        h4.-text--h5.-mb--3 {{ position }}
        .-position--relative(:style="position === 'Bottom' ? 'height: 100px; top: -12px' : 'height: 100px;'")
          chi-popover(:position="position.toLowerCase()", variant="text", active, arrow, prevent-auto-hide)
            | Popover content
  template(#code-webcomponent)
    .chi-tab__description
      | Add the attribute <code>arrow</code> and use the attribute <code>position</code>
      | with the values: <code>top</code>, <code>right</code>, <code>bottom</code> and
      | <code>left</code> to position the arrow in the proper place.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      | Use the classes <code>chi-popover--top</code>, <code>chi-popover--right</code>, <code>chi-popover--bottom</code> and
      | <code>chi-popover--left</code> to position the arrow in the proper place.
      | If you use a position engine such as Popper.js (used by Chi), the attribute <code>x-placement</code> should be used instead of
      | these classes. It accepts all the values Popper.js does. Popper.js sets this attribute automatically, so there is
      | no need to include it on the code.
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<!-- Top -->
<chi-popover position="top" variant="text" active arrow>
  Popover content
</chi-popover>

<!-- Right -->
<chi-popover position="right" variant="text" active arrow>
  Popover content
</chi-popover>

<!-- Bottom -->
<chi-popover position="bottom" variant="text" active arrow>
  Popover content
</chi-popover>

<!-- Left -->
<chi-popover position="left" variant="text" active arrow>
  Popover content
</chi-popover>`,
        htmlblueprint: `<!-- Top -->
<section class="chi-popover chi-popover--top -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
  <div class="chi-popover__arrow"></div>
</section>

<!-- Right -->
<section class="chi-popover chi-popover--right -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
  <div class="chi-popover__arrow"></div>
</section>

<!-- Bottom -->
<section class="chi-popover chi-popover--bottom -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
  <div class="chi-popover__arrow"></div>
</section>

<!-- Left -->
<section class="chi-popover chi-popover--left -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
  <div class="chi-popover__arrow"></div>
</section>`,
      },
    };
  },
})
export default class Arrow extends Vue { }
</script>

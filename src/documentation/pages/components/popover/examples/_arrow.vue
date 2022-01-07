<template lang="pug">
  <ComponentExample title="Arrow" id="arrow" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Popovers support arrows to indicate the element they originate from. Arrows can be located anywhere around the Popover.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--6.-w-md--4.-w-xl--3
        h4.-text--h5.-mb--3 Top
        .-position--relative(style='height: 100px')
          chi-popover(position="top", variant="text", active, arrow, prevent-auto-hide)
            | Popover content
      .chi-col.-w--6.-w-md--4.-w-xl--3
        h4.-text--h5.-mb--3 Right
        .-position--relative(style='height: 100px')
          chi-popover(position="right", variant="text", active, arrow, prevent-auto-hide)
            | Popover content
      .chi-col.-w--6.-w-md--4.-w-xl--3
        h4.-text--h5.-mb--3 Bottom
        .-position--relative(style='height: 100px; top: -12px')
          chi-popover(position="bottom", variant="text", active, arrow, prevent-auto-hide)
            | Popover content
      .chi-col.-w--6.-w-md--4.-w-xl--3
        h4.-text--h5.-mb--3 Left
        .-position--relative(style='height: 100px')
          chi-popover(position="left", variant="text", active, arrow, prevent-auto-hide)
            | Popover content
    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Add the attribute <code>arrow</code> and use the attribute <code>position</code>
        | with the values: <code>top</code>, <code>right</code>, <code>bottom</code> and
        | <code>left</code> to position the arrow in the proper place.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot='code-htmlblueprint'>
      .chi-tab__description
        | Use the classes <code>chi-popover--top</code>, <code>chi-popover--right</code>, <code>chi-popover--bottom</code> and
        | <code>chi-popover--left</code> to position the arrow in the proper place.
        | If you use a position engine such as Popper.js (used by Chi), the attribute <code>x-placement</code> should be used instead of
        | these classes. It accepts all the values Popper.js does. Popper.js sets this attribute automatically, so there is
        | no need to include it on the code.
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
</section>`
      }
    };
  }
})
export default class Arrow extends Vue {}
</script>

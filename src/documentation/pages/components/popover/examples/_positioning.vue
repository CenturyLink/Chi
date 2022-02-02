<template lang="pug">
  <ComponentExample title="Positioning" id="positioning" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Further positions can be used in this mode: <code>top</code>,
      | <code>right</code>, <code>bottom</code>, <code>left</code>, <code>top-start</code>,
      | <code>top-end</code>, <code>right-start</code>, <code>right-end</code>,
      | <code>bottom-start</code>, <code>bottom-end</code>, <code>left-start</code>,
      | <code>left-end</code>.
    .chi-grid.-no-gutter.-px-xl--3(slot="example")
      .chi-col(:class="getClasses(pos)" v-for="pos in ['top', 'left', '', 'right', 'bottom']")
        div.-w--75.-text.-text--muted.-text--center.-lh--2(v-if="pos === ''") Click buttons to see popover positions
        template(v-else)
          div.-p--1.-py-sm--3(v-for="position in positions[pos]")
            chi-button(@click="togglePopover(`popover-${position.position}`)" :id="`button-${position.position}`") {{ position.label }}
            chi-popover(:ref="`popover-${position.position}`" :position="position.position", title="Popover title", variant="text", arrow, :reference="`#button-${position.position}`")
              | This popover is {{ position.position }} positioned.
    <pre class="language-html" slot='code-webcomponent'>
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot='code-htmlblueprint'>
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VNode from 'vue';

@Component({
  data: () => {
    return {
      positions: {
        top: [
          { label: 'Top start', position: 'top-start' },
          { label: 'Top', position: 'top' },
          { label: 'Top end', position: 'top-end' }
        ],
        left: [
          { label: 'Left start', position: 'left-start' },
          { label: 'Left', position: 'left' },
          { label: 'Left end', position: 'left-end' }
        ],
        right: [
          { label: 'Right start', position: 'right-start' },
          { label: 'Right', position: 'right' },
          { label: 'Right end', position: 'right-end' }
        ],
        bottom: [
          { label: 'Bottom start', position: 'bottom-start' },
          { label: 'Bottom', position: 'bottom' },
          { label: 'Bottom end', position: 'bottom-end' }
        ]
      },
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
<chi-button id="example-4-t-button">Top popover</chi-button>
<chi-popover id="example-4-t-popover" position="top" title="Popover title" variant="text" arrow reference="#example-4-t-button">
  This popover is top positioned.
</chi-popover>

<!-- Top Start -->
<chi-button id="example-4-ts-button">Top start popover</chi-button>
<chi-popover id="example-4-ts-popover" position="top-start" title="Popover title" variant="text" arrow reference="#example-4-ts-button">
  This popover is top-start positioned.
</chi-popover>

<!-- Top End -->
<chi-button id="example-4-te-button">Top end popover</chi-button>
<chi-popover id="example-4-te-popover" position="top-end" title="Popover title" variant="text" arrow reference="#example-4-te-button">
  This popover is top-end positioned.
</chi-popover>

<!-- Right -->
<chi-button id="example-4-r-button">Right popover</chi-button>
<chi-popover id="example-4-r-popover" position="right" title="Popover title" variant="text" arrow reference="#example-4-r-button">
  This popover is right positioned.
</chi-popover>

<!-- Right Start -->
<chi-button id="example-4-rs-button">Right start popover</chi-button>
<chi-popover id="example-4-rs-popover" position="right-start" title="Popover title" variant="text" arrow reference="#example-4-rs-button">
  This popover is right-start positioned.
</chi-popover>

<!-- Right End -->
<chi-button id="example-4-re-button">Right end popover</chi-button>
<chi-popover id="example-4-re-popover" position="right-end" title="Popover title" variant="text" arrow reference="#example-4-re-button">
  This popover is right-end positioned.
</chi-popover>

<!-- Bottom -->
<chi-button id="example-4-b-button">Bottom popover</chi-button>
<chi-popover id="example-4-b-popover" position="bottom" title="Popover title" variant="text" arrow reference="#example-4-b-button">
  This popover is bottom positioned.
</chi-popover>

<!-- Bottom Start -->
<chi-button id="example-4-bs-button">Bottom start popover</chi-button>
<chi-popover id="example-4-bs-popover" position="bottom-start" title="Popover title" variant="text" arrow reference="#example-4-bs-button">
  This popover is bottom-start positioned.
</chi-popover>

<!-- Bottom End -->
<chi-button id="example-4-be-button">Bottom end popover</chi-button>
<chi-popover id="example-4-be-popover" position="bottom-end" title="Popover title" variant="text" arrow reference="#example-4-be-button">
  This popover is bottom-end positioned.
</chi-popover>

<!-- Left -->
<chi-button id="example-4-l-button">Left popover</chi-button>
<chi-popover id="example-4-l-popover" position="left" title="Popover title" variant="text" arrow reference="#example-4-l-button">
  This popover is left positioned.
</chi-popover>

<!-- Left Start -->
<chi-button id="example-4-ls-button">Left start popover</chi-button>
<chi-popover id="example-4-ls-popover" position="left-start" title="Popover title" variant="text" arrow reference="#example-4-ls-button">
  This popover is left-start positioned.
</chi-popover>

<!-- Left End -->
<chi-button id="example-4-le-button">Left end popover</chi-button>
<chi-popover id="example-4-le-popover" position="left-end" title="Popover title" variant="text" arrow reference="#example-4-le-button">
  This popover is left-end positioned.
</chi-popover>`,
        htmlblueprint: `<!-- Top -->
<button data-position='top' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is top positioned.</p></div>' class="chi-button">Top popover</button>

<!-- Top Start -->
<button data-position='top-start' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is top start positioned.</p></div>' class="chi-button">Top start popover</button>

<!-- Top End -->
<button data-position='top-end' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is top end positioned.</p></div>' class="chi-button">Top end popover</button>

<!-- Right -->
<button class="chi-button" data-position='right' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is right positioned.</p></div>'>Right popover</button>

<!-- Right Start -->
<button class="chi-button" data-position='right-start' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is right start positioned.</p></div>'>Right start popover</button class="chi-button">

<!-- Right End -->
<button class="chi-button" data-position='right-end' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is right end positioned.</p></div>'>Right end popover</button class="chi-button">

<!-- Bottom -->
<button class="chi-button" data-position='bottom' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is bottom positioned.</p></div>'>Bottom popover</button>

<!-- Bottom Start -->
<button class="chi-button" data-position='bottom-start' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is bottom start positioned.</p></div>'>Bottom start popover</button class="chi-button">

<!-- Bottom End -->
<button class="chi-button" data-position='bottom-end' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is bottom end positioned.</p></div>'>Bottom end popover</button class="chi-button">

<!-- Left -->
<button class="chi-button" data-position='left' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is left positioned.</p></div>'>Left popover</button>

<!-- Left Start -->
<button class="chi-button" data-position='left-start' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is left start positioned.</p></div>'>Left start popover</button>

<!-- Left End -->
<button class="chi-button" data-position='left-end' data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover positioning</h2></header><div class="chi-popover__content"><p class="chi-popover__text">This popover is left end positioned.</p></div>'>Left end popover</button>

<!-- JavaScript -->
<script>chi.popover(document.querySelectorAll('[data-popover-content]'));<\/script>`
      }
    };
  }
})
export default class Positioning extends Vue {
  togglePopover(popoverRef: string) {
    ((this.$refs[popoverRef] as VNode[])[0] as any).toggle();
  }

  getClasses(index: string) {
    if (['top', 'bottom'].includes(index)) {
      return '-w--12 -w-xl--10 -o-xl--1 -d--flex -justify-content-sm--around -flex--wrap';
    } else if (index === 'left') {
      return '-w--12 -w-sm--4 -d--flex -flex-sm--column -flex--wrap';
    } else if (index === '') {
      return '-d--none -w--12 -w-sm--4 -d-sm--flex -flex-sm--column -justify-content-sm--center -align-items-sm--center';
    }
    return '-w--12 -w-sm--4 -d--flex -flex-sm--column -align-items-sm--end -flex--wrap';
  }
}
</script>

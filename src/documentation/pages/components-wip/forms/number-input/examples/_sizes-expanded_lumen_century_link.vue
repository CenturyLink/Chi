<template lang="pug">
<ComponentExample title="Sizes" id="sizes-expanded_lumen_century_link" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Expanded number inputs support the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>, <code>xl</code>. The default size is <code>md</code>.
  template(#example)
    .-d--flex.-flex--column
      each size in ['xs', 'sm', 'md', 'lg', 'xl']
        .-py--2
          .chi-form__item
            chi-label(for=`example__expanded-size-${size}`) Label
            chi-number-input(expanded=true, size=`${size}`, class='-mr--2', id=`example__expanded-size-${size}`)
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
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
        webcomponent: `<!-- xs -->
<chi-label for="example__expanded-size-xs">Label</chi-label>
<chi-number-input expanded size="xs" id="example__expanded-size-xs"></chi-number-input>

<!-- sm -->
<chi-label for="example__expanded-size-sm">Label</chi-label>
<chi-number-input expanded size="sm" id="example__expanded-size-sm"></chi-number-input>

<!-- md -->
<chi-label for="example__expanded-size-md">Label</chi-label>
<chi-number-input expanded size="md" id="example__expanded-size-md"></chi-number-input>

<!-- lg -->
<chi-label for="example__expanded-size-lg">Label</chi-label>
<chi-number-input expanded size="lg" id="example__expanded-size-lg"></chi-number-input>

<!-- xl -->
<chi-label for="example__expanded-size-xl">Label</chi-label>
<chi-number-input expanded size="xl" id="example__expanded-size-xl"></chi-number-input>`,
        htmlblueprint: `<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-xs">Label</label>
  <div class="chi-number-input -expanded -xs">
    <input id="example__expanded-size-xs" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-sm">Label</label>
  <div class="chi-number-input -expanded -sm">
    <input id="example__expanded-size-sm" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-sm'));<\/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-md">Label</label>
  <div class="chi-number-input -expanded -md">
    <input id="example__expanded-size-md" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-lg">Label</label>
  <div class="chi-number-input -expanded -lg">
    <input id="example__expanded-size-lg" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-lg'));<\/script>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="example__expanded-size-xl">Label</label>
  <div class="chi-number-input -expanded -xl">
    <input id="example__expanded-size-xl" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('example__expanded-size-xl'));<\/script>`,
      },
    };
  },
})
export default class SizesExpandedLumenCenturyLink extends Vue {}
</script>

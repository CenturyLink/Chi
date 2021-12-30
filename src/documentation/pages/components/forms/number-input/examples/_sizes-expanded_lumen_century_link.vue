<template lang="pug">
  <ComponentExample title="Sizes" id="sizes-expanded_lumen_century_link" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Expanded number inputs support the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>, <code>xl</code>. The default size is <code>md</code>.
    .-d--flex.-flex--column(slot="example")
      each size in ['xs', 'sm', 'md', 'lg', 'xl']
        .-py--2
          .chi-form__item
            chi-label(for=`example-expanded-sizes-${size}`) Label
            chi-number-input(expanded=true, size=`${size}`, class='-mr--2', id=`example-expanded-sizes-${size}`)
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded /> 
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
        webcomponent: `<!-- xs -->
<chi-label for="example-6-xs">Label</chi-label>
<chi-number-input expanded size="xs" id="example-6-xs"></chi-number-input>

<!-- sm -->
<chi-label for="example-6-sm">Label</chi-label>
<chi-number-input expanded size="sm" id="example-6-sm"></chi-number-input>

<!-- md -->
<chi-label for="example-6-md">Label</chi-label>
<chi-number-input expanded size="md" id="example-6-md"></chi-number-input>

<!-- lg -->
<chi-label for="example-6-lg">Label</chi-label>
<chi-number-input expanded size="lg" id="example-6-lg"></chi-number-input>

<!-- xl -->
<chi-label for="example-6-xl">Label</chi-label>
<chi-number-input expanded size="xl" id="example-6-xl"></chi-number-input>`,
        htmlblueprint: `<!-- xs -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-xs">Label</label>
  <div class="chi-number-input -expanded -xs">
    <input id="input-example-expanded-xs" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-xs'));<\/script>

<!-- sm -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-sm">Label</label>
  <div class="chi-number-input -expanded -sm">
    <input id="input-example-expanded-sm" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i>
    </div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-sm'));<\/script>

<!-- md -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-md">Label</label>
  <div class="chi-number-input -expanded -md">
    <input id="input-example-expanded-md" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-md'));<\/script>

<!-- lg -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-lg">Label</label>
  <div class="chi-number-input -expanded -lg">
    <input id="input-example-expanded-lg" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-lg'));<\/script>

<!-- xl -->
<div class="chi-form__item">
  <label class="chi-label" for="input-example-expanded-xl">Label</label>
  <div class="chi-number-input -expanded -xl">
    <input id="input-example-expanded-xl" class="chi-input" type="number" value="0" aria-label="Input Label">
    <button class="chi-button -icon" aria-label="Decrease">
      <div class="chi-button__content"><i class="chi-icon icon-minus" aria-hidden="true"></i></div>
    </button>
    <button class="chi-button -icon" aria-label="Increase">
      <div class="chi-button__content"><i class="chi-icon icon-plus" aria-hidden="true"></i></div>
    </button>
  </div>
</div>
<script>chi.numberInput(document.getElementById('input-example-expanded-xl'));<\/script>`
      }
    };
  }
})
export default class SizesExpandedLumenCenturyLink extends Vue {}
</script>

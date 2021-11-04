<template lang="pug">
  <ComponentExample title="Sizes" titleSize="h4" id="toast_sizes_lumen_centurylink" padding="-p--1" :tabs="exampleTabs">
    div(slot='example')
      p.-text--bold.-ml--2 sm
      chi-alert.-m--2(type='toast', color='success', icon='circle-check', size='sm')
        | This is a small success alert
      chi-alert.-m--2(type='toast', color='success', icon='circle-check', size='sm', title='Success')
        | This is a small success alert
      p.-text--bold.-ml--2 md (default)
      chi-alert.-m--2(type='toast', color='success', icon='circle-check')
        | This is a success alert
      chi-alert.-m--2(type='toast', color='success', icon='circle-check', title='Success')
        | This is a success alert
      p.-text--bold.-ml--2 lg
      chi-alert.-m--2(type='toast', color='success', icon='circle-check', size='lg')
        | This is a large success alert
      chi-alert.-m--2(type='toast', color='success', icon='circle-check', size='lg', title='Success')
        | This is a large success alert
    div(slot='code-webcomponent')
      .chi-tab__description
        span
          | Use the <code>size=""</code> attribute to customize the size of an alert. Supported sizes are <code>sm</code>, <code>md</code>, and <code>lg</code>.
      pre.language-html
        code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    div(slot='code-htmlblueprint')
      .chi-tab__description
        span
          | Use size classes to customize the size of an alert. Supported size classes are <code>-sm</code>, <code>-md</code>, and <code>-lg</code>.
      pre.language-html
        code(v-highlight="$data.codeSnippets.htmlblueprint" class="html")
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
          active: false,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- Small -->
<chi-alert type="toast" color="success" icon="circle-check" size="sm">
  This is a small success alert
</chi-alert>
<!-- Small Titled -->
<chi-alert type="toast" color="success" icon="circle-check" size="sm" title="Success">
  This is a small success alert
</chi-alert>
<!-- Medium -->
<chi-alert type="toast" color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Medium Titled -->
<chi-alert type="toast" color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>
<!-- Large -->
<chi-alert type="toast" color="success" icon="circle-check" size="lg">
  This is a large success alert
</chi-alert>
<!-- Large Titled -->
<chi-alert type="toast" color="success" icon="circle-check" size="lg" title="Success">
  This is a large success alert
</chi-alert>`,
        htmlblueprint: `<div class="chi-alert -toast -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<div class="chi-alert -toast -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<div class="chi-alert -toast -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<div class="chi-alert -toast -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<div class="chi-alert -toast -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<div class="chi-alert -toast -success -lg" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a large success alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>`
      }
    };
  }
})
export default class ToastSizesLumenCenturyLink extends Vue {
  mounted() {}
}
</script>

<template lang="pug">
  <ComponentExample title="Sizes" titleSize="h4" id="bubble_sizes_portal" padding="-p--1" :tabs="exampleTabs">
    div(slot='example')
      p.-text--bold.-ml--2 sm
      chi-alert.-m--2(color='success', icon='circle-check', size='sm')
        | This is a small success alert
      chi-alert.-m--2(color='success', icon='circle-check', size='sm', title="Success")
        | This is a small success alert
      p.-text--bold.-ml--2 md (default)
      chi-alert.-m--2(color='success', icon='circle-check')
        | This is a success alert
      chi-alert.-m--2(color='success', icon='circle-check', title="Success")
        | This is a success alert
    div(slot='code-webcomponent')
      .chi-tab__description
        span
          | Use the <code>size=""</code> attribute to customize the size of an alert. Supported sizes are <code>sm</code> and <code>md</code>.
      pre.language-html
        code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    div(slot='code-htmlblueprint')
      .chi-tab__description
        span
          | Use size classes to customize the size of an alert. Supported size classes are <code>-sm</code> and <code>-md</code>.
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
<chi-alert color="success" icon="circle-check" size="sm">
  This is a small success alert
</chi-alert>
<!-- Small Titled -->
<chi-alert color="success" icon="circle-check" size="sm" title="Success">
  This is a small success alert
</chi-alert>
<!-- Medium -->
<chi-alert color="success" icon="circle-check">
  This is a success alert
</chi-alert>
<!-- Medium Titled -->
<chi-alert color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>`,
        htmlblueprint: `<!-- Small -->
<div class="chi-alert -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Small Titled -->
<div class="chi-alert -success -sm" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a small success alert</p>
  </div>
</div>
<!-- Medium -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Medium Titled -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>`
      }
    };
  }
})
export default class BubbleSizesPortal extends Vue {
  mounted() {}
}
</script>

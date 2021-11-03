<template lang="pug">
  <ComponentExample title="Titled" titleSize="h4" id="toast_titled_lumen_centurylink" padding="-p--1" :tabs="exampleTabs">
    div(slot='example')
      chi-alert.-m--2(type='toast', icon='circle-info', title="Base")
        | This is a base alert
      each val, type in {success:'circle-check', danger:'circle-warning', warning:'warning', info:'circle-info', muted:'circle-info'}
        chi-alert.-m--2(type='toast', color=type, icon=val, title=type)
          =`This is ${type === 'info' ? 'an' : 'a'} ${type} alert`
    div(slot='code-webcomponent')
      pre.language-html
        code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    div(slot='code-htmlblueprint')
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
        webcomponent: `<!-- Base - No semantic color defined -->
<chi-alert type="toast" icon="circle-info" title="Base">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert type="toast" icon="circle-check" color="success" title="Success">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert type="toast" color="danger" icon="circle-warning" title="Danger">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert type="toast" color="warning" icon="warning" title="Warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert type="toast" color="info" icon="circle-info" title="Info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert type="toast" color="muted" icon="circle-info" title="Muted">
  This is a muted alert
</chi-alert>`,
        htmlblueprint: `<!-- Base - No semantic color class defined -->
<div class="chi-alert -toast" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a base alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Success -->
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
<!-- Danger -->
<div class="chi-alert -toast -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Danger</p>
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Warning -->
<div class="chi-alert -toast -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Info -->
<div class="chi-alert -toast -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Info</p>
    <p class="chi-alert__text">This is an info alert</p>
  </div>
  <button class="chi-alert__close-button chi-button -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
</div>
<!-- Muted -->
<div class="chi-alert -toast -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Muted</p>
    <p class="chi-alert__text">This is a muted alert</p>
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
export default class ToastTitled extends Vue {
  mounted() {}
}
</script>

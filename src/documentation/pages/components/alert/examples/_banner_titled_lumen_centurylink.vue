<template lang="pug">
  <ComponentExample title="Titled" titleSize="h4" id="banner_titled_lumen_centurylink" padding="-p--1" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text
        | The title will automatically get colored based on the alerts semantic color class.
        | To override the title color, apply a text color utility class.
    div(slot='example')
      chi-alert.-m--2(type='banner', icon='circle-info', title="Base")
        | This is a base alert
      each val, type in {success:'circle-check', danger:'circle-warning', warning:'warning', info:'circle-info', muted:'circle-info'}
        chi-alert.-m--2(color=type, type='banner', icon=val, title=type)
          =`This is ${type === 'info' ? 'an' : 'a'} ${type} alert`
    div(slot='code-webcomponent')
      .chi-tab__description
        span
          | Use <code>title=""</code> attribute to add a title to an Alert.
      pre.language-html
        code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    div(slot='code-htmlblueprint')
      .chi-tab__description
        span
          | Use <code>chi-alert__title</code> class to add a title to an Alert.
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
<chi-alert type="banner" icon="circle-info" title="Base">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert type="banner" icon="circle-check" color="success" title="Success">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert type="banner" icon="circle-warning" color="danger" title="Danger">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert type="banner" icon="warning" color="warning" title="Warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert type="banner" icon="circle-info" color="info" title="Info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert type="banner" icon="circle-info" color="muted" title="Muted">
  This is a muted alert
</chi-alert>`,
        htmlblueprint: `<!-- Base - No semantic color class defined -->
<div class="chi-alert -banner" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -banner -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -banner -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Danger</p>
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -banner -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -banner -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Info</p>
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -banner -muted" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Muted</p>
    <p class="chi-alert__text">This is a muted alert</p>
  </div>
</div>`
      }
    };
  }
})
export default class BannerTitled extends Vue {
  mounted() {}
}
</script>

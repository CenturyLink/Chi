<template lang="pug">
  <ComponentExample title="Titled" titleSize="h4" id="bubble_titled" padding="-p--1" :tabs="exampleTabs">
    p.-text(slot="example-description") The title will automatically get colored based on the alerts semantic color class.
    <Wrapper slot='example'>
      chi-alert(icon='circle-info', title="Base").-m--2
        | This is a base alert
      each val, type in {success:'circle-check', danger:'circle-warning', warning:'warning', info:'circle-info', muted:'circle-info'}
        chi-alert.-m--2(color=type, icon=val, title=type)
          =`This is ${type === 'info' ? 'an' : 'a'} ${type} alert`
    </Wrapper>
    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        span
          | Use the <code>title=""</code> attribute to display a title above the alert text.
      pre.language-html
        code(v-highlight="$data.codeSnippets.webcomponent" class="html")
    </Wrapper>
    <Wrapper slot='code-htmlblueprint'>
      .chi-tab__description
        span
          | Use <code>chi-alert__title</code> to add a title to an Alert.
          | To override the title color, apply a text color utility class.
      pre.language-html
        code(v-highlight="$data.codeSnippets.htmlblueprint" class="html")
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
          active: false,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- Base - No semantic color defined -->
<chi-alert icon="circle-info" title="Base">
  This is a base alert
</chi-alert>
<!-- Success -->
<chi-alert color="success" icon="circle-check" title="Success">
  This is a success alert
</chi-alert>
<!-- Danger -->
<chi-alert color="danger" icon="circle-warning" title="Danger">
  This is a danger alert
</chi-alert>
<!-- Warning -->
<chi-alert color="warning" icon="warning" title="Warning">
  This is a warning alert
</chi-alert>
<!-- Info -->
<chi-alert color="info" icon="circle-info" title="Info">
  This is an info alert
</chi-alert>
<!-- Muted -->
<chi-alert color="muted" icon="circle-info" title="Muted">
  This is a muted alert
</chi-alert>`,
        htmlblueprint: `<!-- Base - No semantic color class defined -->
<div class="chi-alert" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Base</p>
    <p class="chi-alert__text">This is a base alert</p>
  </div>
</div>
<!-- Success -->
<div class="chi-alert -success" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-check" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Success</p>
    <p class="chi-alert__text">This is a success alert</p>
  </div>
</div>
<!-- Danger -->
<div class="chi-alert -danger" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Danger</p>
    <p class="chi-alert__text">This is a danger alert</p>
  </div>
</div>
<!-- Warning -->
<div class="chi-alert -warning" role="alert">
  <i class="chi-alert__icon chi-icon icon-warning" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Warning</p>
    <p class="chi-alert__text">This is a warning alert</p>
  </div>
</div>
<!-- Info -->
<div class="chi-alert -info" role="alert">
  <i class="chi-alert__icon chi-icon icon-circle-info" aria-hidden="true"></i>
  <div class="chi-alert__content">
    <p class="chi-alert__title">Info</p>
    <p class="chi-alert__text">This is an info alert</p>
  </div>
</div>
<!-- Muted -->
<div class="chi-alert -muted" role="alert">
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
export default class BubbleTitled extends Vue {
  mounted() {}
}
</script>

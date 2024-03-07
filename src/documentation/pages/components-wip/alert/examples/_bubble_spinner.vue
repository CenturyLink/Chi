<template lang="pug">
<ComponentExample title="Spinner" titleSize="h4" id="bubble_spinner" padding="-p--1" :tabs="exampleTabs">
  template(#example-description)
    p.-text Use the spinner attribute to let users know when information is saving or loading.
  template(#example)
    chi-alert(icon='flag', spinner).-m--2
      | This is a spinner alert
    each val, type in {success:'circle-check', danger:'circle-warning', warning:'warning', info:'circle-info', muted:'circle-info'}
      chi-alert.-m--2(color=type, icon=val, spinner)
        =`This is ${type === 'info' ? 'an' : 'a'} ${type} alert`

  template(#code-webcomponent)
    .chi-tab__description
      span
        | Use the <code>spinner</code> attribute to display a spinner inside the alert.
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description
      span
        | Use <code>spinner</code> to add a spinner to an Alert.
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
          active: false,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<!-- Base - No semantic color defined -->
  <chi-alert icon="flag" spinner>
    This is a base alert
  </chi-alert>
  <!-- Success -->
  <chi-alert color="success" icon="circle-check" spinner>
    This is a success alert
  </chi-alert>
  <!-- Danger -->
  <chi-alert color="danger" icon="circle-warning" spinner>
    This is a danger alert
  </chi-alert>
  <!-- Warning -->
  <chi-alert color="warning" icon="warning" spinner>
    This is a warning alert
  </chi-alert>
  <!-- Info -->
  <chi-alert color="info" icon="circle-info" spinner>
    This is an info alert
  </chi-alert>
  <!-- Muted -->
  <chi-alert color="muted" icon="circle-info" spinner>
    This is a muted alert
  </chi-alert>`,
        htmlblueprint: `<!-- Base - No semantic color class defined -->
      <div class="chi-alert" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Base</p>
          <p class="chi-alert__text">This is a base alert</p>
        </div>
      </div>
      <!-- Success -->
      <div class="chi-alert -success" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Success</p>
          <p class="chi-alert__text">This is a success alert</p>
        </div>
      </div>
      <!-- Danger -->
      <div class="chi-alert -danger" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Danger</p>
          <p class="chi-alert__text">This is a danger alert</p>
        </div>
      </div>
      <!-- Warning -->
      <div class="chi-alert -warning" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Warning</p>
          <p class="chi-alert__text">This is a warning alert</p>
        </div>
      </div>
      <!-- Info -->
      <div class="chi-alert -info" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Info</p>
          <p class="chi-alert__text">This is an info alert</p>
        </div>
      </div>
      <!-- Muted -->
      <div class="chi-alert -muted" role="alert">
        <div class="chi-alert__spinner">
          <svg class="chi-spinner" viewBox="0 0 66 66">
            <title>Loading</title>
            <circle class="path" cx="33" cy="33" r="30" fill="none" stroke-width="6"></circle>
          </svg>
        </div>
        <div class="chi-alert__content">
          <p class="chi-alert__title">Muted</p>
          <p class="chi-alert__text">This is a muted alert</p>
        </div>
      </div>`,
      },
    };
  },
})
export default class BubbleSpinner extends Vue {}
</script>

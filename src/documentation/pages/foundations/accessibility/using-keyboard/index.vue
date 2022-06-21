<template lang="pug">
  div
    <TitleBar title="Using the Keyboard" />
    .chi-grid__container.-pt--3
      p.-text
        | Blind users and users with motor disabilities must use the keyboard for navigation. These users may use traditional
        | keyboards, but some users may use modified keyboards or other hardware to mimic keyboard functionality.
      p.-text
        | All content needs to be accessed using the keyboard alone. When using the keyboard only to ensure that all interactions
        | are predictable. Below are some of the keystrokes used to navigate a website.
      ul.-text
        template(v-for="keyStroke in $data.keyStrokes")
          li <strong>{{keyStroke.firstKey}}</strong>{{keyStroke.textBetweenKeys}}<strong>{{keyStroke.secondKey}}</strong>{{keyStroke.description}}
      p.-text
        | Visit <a target="_blank" href="https://webaim.org/techniques/keyboard/" rel="noopener">WebAIM</a> for keyboard techniques.
      template(v-for="usageType in $data.usageTypes")
        h2.-mt--3 {{usageType.title}}
        <KeyboardUsageComponent :usageTypeData="usageType"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KeyboardUsageComponent from './_keyboard-usage-type.vue';
import { USAGE_TYPES, KEY_STROKES } from './fixtures';

declare const chi: any;

@Component({
  components: {
    KeyboardUsageComponent
  },
  mounted(){
    chi.expansionPanel(
      document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),
      {mode: 'accordion'}
    );
  },
  data(){
    return {
      usageTypes: USAGE_TYPES,
      keyStrokes: KEY_STROKES
    }
  }
})
export default class Overview extends Vue {}
</script>

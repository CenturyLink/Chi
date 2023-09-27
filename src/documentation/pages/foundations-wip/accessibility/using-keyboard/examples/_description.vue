<template lang="pug">
  div
    p.-text
      | Blind users and users with motor disabilities must use the keyboard for navigation. These users may use traditional
      | keyboards, but some users may use modified keyboards or other hardware to mimic keyboard functionality.
    p.-text
      | All content needs to be accessed using the keyboard alone. When using the keyboard only to ensure that all interactions
      | are predictable. Below are some of the keystrokes used to navigate a website.
    ul.-text
      li <strong>Tab</strong> and <strong>Shift+Tab</strong> key(s) to navigate towards and backwards through links and form controls.
      li <strong>Enter</strong> (and sometimes <strong>Spacebar</strong>) to select an element.
      li <strong>Arrow</strong> keys are sometimes used for other navigation.
      li <strong>ESC</strong> to close dialog boxes.
      li <strong>Home/End</strong> goes to beginning or end.
    p.-text
      | Visit <a target="_blank" href="https://webaim.org/techniques/keyboard/" rel="noopener">WebAIM</a> for keyboard techniques.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class UserState extends Vue {}
</script>

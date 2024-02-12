<template lang="pug">
  div
    h3 Preventing memory leaks
    p.-text
      | Rangeslider component has a dispose function to free all the resources attached to the element, such as event listeners
      | and object data. You should call this method when you want to remove the component.
    Copy(lang="javascript" :code="codeMemory1")

    p.-text
      | It is safe to call the <code>rangeSlider</code> method more than once, as it will return any previously created rangeSlider component
      | associated with the element.
    Copy(lang="javascript" :code="codeMemory2")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      codeMemory1: `var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
// do stuff
rangeSlider.dispose();`,
      codeMemory2: `var elem = document.getElementById('range01');
var rangeSlider = chi.rangeSlider(elem);
var elem2 = document.getElementById('range02');
var rangeSlider2 = chi.rangeSlider(elem2);
rangeSlider === rangeSlider2; // returns true

rangeSlider.dispose(); // Only have to do it once.`,
    };
  },
})
export default class Properties extends Vue { }
</script>

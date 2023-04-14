<template lang="pug">
div
  TitleBar(title="Border" description="Use shorthand border utility classes to control border, border width and border color on elements.")
  section.chi-grid__container.-pt--3
    AnchorTitle(title="Notation", tag="h2", :anchor="`?theme=${$store.state.themes.theme}#notation`")
    p.-text Border utility classes can be defined using the format <code>-b{sides}[-{breakpoint}]--{size}</code>.

    AnchorTitle(title="{sides}", tag="h3", :anchor="`?theme=${$store.state.themes.theme}#sides`")
    ul.-text
      li <code>t</code> - use to apply <code>border-top</code>
      li <code>b</code> - use to apply <code>border-bottom</code>
      li <code>l</code> - use to apply <code>border-left</code>
      li <code>r</code> - use to apply <code>border-right</code>
      li <code>x</code> - use to apply <code>border-left</code> and <code>border-right</code>
      li <code>y</code> - use to apply <code>border-top</code> and <code>border-bottom</code>
      li blank - leave blank to apply <code>border</code> to all 4 sides.

    AnchorTitle(title="{breakpoint}", tag="h3", :anchor="`?theme=${$store.state.themes.theme}#breakpoint`")
    p.-text
      | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
      | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
    ul.-text
      li blank - leave blank to apply <code>border</code> to all breakpoints.
      li <code>sm</code> - use to apply <code>border</code> to sm and larger breakpoints.
      li <code>md</code> - use to apply <code>border</code> to ms and larger breakpoints.
      li <code>lg</code> - use to apply <code>border</code> to lg and larger breakpoints.
      li <code>xl</code> - use to apply <code>border</code> to xl breakpoints.

    AnchorTitle(title="{size}", tag="h3", :anchor="`?theme=${$store.state.themes.theme}#size`")
    ul.-text
      li <code>0</code> - use to eliminate existing <code>border</code> and set to <code>0</code>
      li <code>1</code> - use to set <code>border</code> to <code>1px</code>
      li <code>2</code> - use to set <code>border</code> to <code>2px</code>
      li <code>3</code> - use to set <code>border</code> to <code>3px</code>
      li <code>4</code> - use to set <code>border</code> to <code>4px</code>

    Examples
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Examples from './examples/index.vue'

  @Component({
    components: {
      Examples
    },
  })

  export default class Border extends Vue {}
</script>

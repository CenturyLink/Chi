<template lang="pug">
  <ComponentTabExample titleSize="h4" title="Color" id="color" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuId" @toggleMenuId="toggleMenuId">
    p.-text(slot="example-description")
      | Both icon and initial avatars support <a href="../../foundations/color/">Chi colors</a>.
      | To color an icon, apply any of the following color classes: <code>-grey</code>, <code>-red</code>,
      | <code>-pink</code>, <code>-purple</code>, <code>-indigo</code>, <code>-navy</code>, <code>-blue</code>,
      | <code>-teal</code>, <code>-green</code>, <code>-yellow</code>, <code>-orange</code>,
      | <code>-secondary</code>, <code>-primary</code>
    .-p--0(:slot="$data.menuTabs[0].id")
      .chi-grid.-align-items--extends
        template(v-for="color in colors" v-if="color !== 'secondary'")
          .chi-col.-w--2.-text--center
            div(:class="`chi-avatar -${color}`") AA
            p.-text {{color}}

    .-p--0(:slot="$data.menuTabs[1].id")
      .chi-grid.-align-items--end
        template(v-for="color in colors" v-if="color !== 'secondary'")
          .chi-col.-w--2.-text--center
            div(:class="`chi-avatar -${color}`")
              i.chi-icon.icon-user(aria-hidden="true")
            p.-text {{color}}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="highlightedHTMLBluePrint ? highlightedHTMLBluePrint : $data.codeSnippets.htmlblueprint.initial" class="html"></code>
    </pre>
  </ComponentTabExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      menuTabs: [
        {
          active: true,
          id: 'initial',
          label: 'Initial',
        },
        {
          id: 'icon',
          label: 'Icon',
        },
      ],
      colors: ["grey", "red", "pink", "purple", "indigo", "navy", "blue", "cyan", "teal", "green", "yellow", "orange", "secondary", "primary"],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: {
          initial: `<div class="chi-avatar -grey">AA</div>
<div class="chi-avatar -red">AA</div>
<div class="chi-avatar -pink">AA</div>
<div class="chi-avatar -purple">AA</div>
<div class="chi-avatar -indigo">AA</div>
<div class="chi-avatar -navy">AA</div>
<div class="chi-avatar -blue">AA</div>
<div class="chi-avatar -cyan">AA</div>
<div class="chi-avatar -teal">AA</div>
<div class="chi-avatar -green">AA</div>
<div class="chi-avatar -yellow">AA</div>
<div class="chi-avatar -orange">AA</div>
<div class="chi-avatar -primary">AA</div>`,
          icon: `<div class="chi-avatar -grey">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -red">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -pink">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -purple">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -indigo">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -navy">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -blue">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -cyan">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -teal">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -green">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -yellow">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -orange">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -primary">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`
        },
      },
    };
  },
})
export default class ColorCustomization extends Vue {
  menuId = 'initial';
  highlightedHTMLBluePrint = '';
  toggleMenuId(toggleTabEvent: string) {
    this.menuId = toggleTabEvent;
    this.highlightedHTMLBluePrint = this.$data.codeSnippets.htmlblueprint[toggleTabEvent];
  }
}
</script>

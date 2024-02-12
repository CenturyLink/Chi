<template lang="pug">
ComponentExample(title="Color" id="color" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="headTabChanged")
  template(#example-description)
    p.-text
      | Both icon and initial avatars support <a href="../../foundations/color/">Chi colors</a>.
      | To color an icon, apply any of the following color classes: <code>-grey</code>, <code>-red</code>,
      | <code>-pink</code>, <code>-purple</code>, <code>-indigo</code>, <code>-navy</code>, <code>-blue</code>,
      | <code>-teal</code>, <code>-green</code>, <code>-yellow</code>, <code>-orange</code>,
      | <code>-secondary</code>, <code>-primary</code>

  template(#example)
    .-p--0
      .chi-grid.-align-items--end
        .chi-col.-w--2.-text--center(v-for="color in colors" v-if="color !== 'secondary'")
          div(:class="`chi-avatar -${color}`") {{ showIconAvatar ? '' : 'AA' }}
            i(v-if="showIconAvatar" aria-hidden="true").chi-icon.icon-user
          p.-text {{ color }}

  template(v-for="tab in headTabs" v-slot:[`code-color-${tab.id}-htmlblueprint`])
    Copy(lang="html" :code="codeSnippets.htmlblueprint[tab.id]")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type IHeadTabs } from '~/models/models';

@NuxtComponent({})
export default class ColorCustomization extends Vue {
  showIconAvatar = false;
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  headTabs = [
    {
      active: true,
      id: 'initial',
      label: 'Initial',
    },
    {
      id: 'icon',
      label: 'Icon',
    },
  ];
  colors = [
    'grey',
    'red',
    'pink',
    'purple',
    'indigo',
    'navy',
    'blue',
    'cyan',
    'teal',
    'green',
    'yellow',
    'orange',
    'secondary',
    'primary',
  ];

  codeSnippets = {
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
</div>`,
    }}

  headTabChanged(headTab: IHeadTabs) {
    this.showIconAvatar = headTab.id === 'icon';
  }
}
</script>

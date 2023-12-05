<template lang="pug">
  <ComponentExample title="Size" id="size" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="headTabChanged">
    p.-text(slot="example-description")
      | All three avatar styles support a full spectrum of sizes: <code>-xs</code>, <code>-sm</code>,
      | <code>-sm--2</code>, <code>-sm--3</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>, <code>-xxl</code>.
      | <code>-md</code> is the default size.

    .-p--0(slot="example")
      .chi-grid.-align-items--end
        div(
          v-for="size in sizes"
          :class="`chi-col -w--${columnWidths[size][0]} -w-lg--${columnWidths[size][1]} -w-xl--${columnWidths[size][2]} -text--center`"
        )
          div(:class="`chi-avatar -${size}`") {{  avatarType === 'initial' ? 'AA' : '' }}
            i.chi-icon.icon-user(v-if="avatarType === 'icon'" aria-hidden="true")
            img(v-if="avatarType === 'image'" src='../../../../assets/images/avatar.jpg', alt="avatar")
          p.-text {{size}}

    <Wrapper v-for="tab in headTabs" :slot="`code-size-${tab.id}-htmlblueprint`" :key="tab.id">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint[tab.id]" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IHeadTabs } from '~/models/models';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      headTabs: [
        {
          active: true,
          id: 'initial',
          label: 'Initial'
        },
        {
          id: 'icon',
          label: 'Icon'
        },
        {
          id: 'image',
          label: 'Image'
        }
      ],
      sizes: ['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl'],
      columnWidths: {
        xs: ['4', '3', '1'],
        sm: ['4', '3', '1'],
        'sm--2': ['4', '3', '1'],
        'sm--3': ['4', '3', '1'],
        md: ['4', '2', '1'],
        lg: ['4', '3', '2'],
        xl: ['6', '3', '2'],
        xxl: ['6', '4', '3']
      },
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: {
          initial: `<div class="chi-avatar -xs">AA</div>
<div class="chi-avatar -sm">AA</div>
<div class="chi-avatar -sm--2">AA</div>
<div class="chi-avatar -sm--3">AA</div>
<div class="chi-avatar -md">AA</div>
<div class="chi-avatar -lg">AA</div>
<div class="chi-avatar -xl">AA</div>
<div class="chi-avatar -xxl">AA</div>`,
          icon: `<div class="chi-avatar -xs">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -sm">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -sm--2">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -sm--3">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -md">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -lg">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -xl">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>
<div class="chi-avatar -xxl">
  <i class="chi-icon icon-user" aria-hidden="true"></i>
</div>`,
          image: `<div class="chi-avatar -xs">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -sm">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -sm--2">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -sm--3">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -md">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -lg">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -xl">
  <img src="path/to/image.jpg">
</div>
<div class="chi-avatar -xxl">
  <img src="path/to/image.jpg">
</div>`
        }
      }
    };
  }
})
export default class Sizes extends Vue {
  avatarType = 'initial';

  headTabChanged(headTab: IHeadTabs) {
    this.avatarType = headTab.id;
  }
}
</script>

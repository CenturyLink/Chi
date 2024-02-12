<template lang="pug">
<ComponentExample title="Avatar Groups" id="avatar-groups" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use avatar groups to group multiple avatars or add descriptive text such as a users name.
      | Render an avatar group by wrapping an avatar in the class <code>chi-avatar-group</code>.
  template(#example)
    .chi-grid
      template(v-for="color in colors" v-if="color !== 'secondary'")
        .-mb--1.chi-col.-w--6.-w-sm--4.-w-md--6.-w-lg--4.-w-xl--3
          .chi-avatar-group
            div(:class="`chi-avatar -${color}`") L
            = `Label {{color}}`

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent")
  template(#code-htmlblueprint)
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      colors: [
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
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-avatar-group">
  <div class="chi-avatar">L</div>Label text
</div>`,
      },
    };
  },
})
export default class AvatarGroups extends Vue {}
</script>

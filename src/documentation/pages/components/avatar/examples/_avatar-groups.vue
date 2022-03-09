<template lang="pug">
  <ComponentExample titleSize="h4" title="Avatar Groups" id="avatar-groups" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use avatar groups to group multiple avatars or add descriptive text such as a users name.
      | Render an avatar group by wrapping an avatar in the class <code>chi-avatar-group</code>.
    .chi-grid(slot="example")
      template(v-for="color in colors" v-if="color !== 'secondary'")
        .-mb--1.chi-col.-w--6.-w-sm--4.-w-md--6.-w-lg--4.-w-xl--3
          .chi-avatar-group
            div(:class="`chi-avatar -${color}`") L
            = `Label {{color}}`
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
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
      colors: ["grey", "red", "pink", "purple", "indigo", "navy", "blue", "cyan", "teal", "green", "yellow", "orange", "secondary", "primary"],
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

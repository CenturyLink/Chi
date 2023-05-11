<template lang="pug">
  <ComponentExample title="Semantic" id="semantic" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use semantic border colors to communicate meaning to users. Use green (success) for positive, blue (info) for informative,
      | red (danger) for negative, and yellow (warning) for needs attention.
    <Wrapper slot="example">
      .chi-grid.-no-gutter.-text.-text--center
        .chi-col.-w--6.-w-md--3.-w-xl--2(v-for="border in borders" :key="border.className")
          .-m--1.-p--1.-py--5.-b--1(:class="`-b--${border.className}`") {{ border.title }}
    </Wrapper>
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
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-b--1 -b--success"></div>
<div class="-b--1 -b--success-light"></div>
<div class="-b--1 -b--info"></div>
<div class="-b--1 -b--info-light"></div>
<div class="-b--1 -b--danger"></div>
<div class="-b--1 -b--danger-light"></div>
<div class="-b--1 -b--warning"></div>
<div class="-b--1 -b--warning-light"></div>`
      },
      borders: [
        {
          className: 'success',
          title: 'Success',
        },
        {
          className: 'success-light -bg--danger-lighter',
          title: 'Success Light',
        },
        {
          className: 'info',
          title: 'Info',
        },
        {
          className: 'info-light -bg--danger-lighter',
          title: 'Info Light',
        },
        {
          className: 'danger',
          title: 'Danger',
        },
        {
          className: 'danger-light -bg--danger-lighter',
          title: 'Danger Light',
        },
        {
          className: 'warning',
          title: 'Warning',
        },
        {
          className: 'warning-light -bg--warning-lighter',
          title: 'Warning Light'
        }
      ]
    };
  }
})
export default class SemanticBorderColor extends Vue {}
</script>

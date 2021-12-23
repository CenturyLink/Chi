<template lang="pug">
  div
    <ComponentExample title="Small" titleSize="h4" id="small_size" :tabs="exampleTabs" padding="-p--2">
      <Wrapper slot="example">
        chi-badge(size='sm', class='-m--1')= 'Badge'
        chi-badge(size='sm', class='-m--1', variant='flat')
          chi-icon(icon='atom')
          span Badge
      </Wrapper>
      <Wrapper slot="code-webcomponent">
        .chi-tab__description
          | Set the attribute <code>size</code> to <code>sm</code> to render small badges.
        <pre class="language-html">
          <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
        </pre>
      </Wrapper>
      <Wrapper slot="code-htmlblueprint">
        .chi-tab__description
          | Use the <code>-sm</code> modifier class to render small badges.
        <pre class="language-html">
          <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
        </pre>
      </Wrapper>
    </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-badge size="sm">Badge</chi-badge>
<chi-badge size="sm" variant="flat">
  <chi-icon icon="atom"></chi-icon>
  <span>Badge</span>
</chi-badge>`,
        htmlblueprint: `<div class="chi-badge -sm">
  <span>Badge</span>
</div>
<div class="chi-badge -flat -sm">
  <div class="chi-badge__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Badge</span>
  </div>
</div>`
      }
    };
  }
})
export default class SmallSize extends Vue {}
</script>

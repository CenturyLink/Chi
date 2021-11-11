<template lang="pug">
  <ComponentExample title="Extra small" titleSize="h4" id="extrasmall_size" :tabs="exampleTabs" padding="-p--2">
    <Wrapper slot="example">
      chi-badge(size='xs', class='-m--1')= 'Badge'
      chi-badge(size='xs', class='-m--1', variant='flat')
        chi-icon(icon='atom')
        span Badge
    </Wrapper>
    <Wrapper slot="code-webcomponent">
      .chi-tab__description
        | Set the attribute <code>size</code> to <code>xs</code> to render even smaller badges.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        | Use the <code>-xs</code> modifier class to render even smaller badges.
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
        webcomponent: `<chi-badge size="xs">Badge</chi-badge>
<chi-badge size="xs" variant="flat">
  <chi-icon icon="atom"></chi-icon>
  <span>Badge</span>
</chi-badge>`,
        htmlblueprint: `<div class="chi-badge -xs">
  <span>Badge</span>
</div>
<div class="chi-badge -flat -xs">
  <div class="chi-badge__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
    <span>Badge</span>
  </div>
</div>`
      }
    };
  }
})
export default class ExtraSmall extends Vue {}
</script>

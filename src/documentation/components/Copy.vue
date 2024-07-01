<template>
  <div :key="id" :id="'example-' + id" :ref="`tab-panel-${id}`" role="tabpanel">
    <div class="clipboard">
      <button class="clipboard__button chi-button -xs -flat" @click="() => copy(`tab-panel-${id}`)">Copy</button>
    </div>
    <ClientOnly>
      <highlightjs :code="code" :class="`language-${lang}`" :autodetect="false" />
    </ClientOnly>
  </div>
</template>

<style>
code.hljs {
  display: unset;
  padding: 0 !important;
}
</style>

<script lang="ts">
import { Vue, Prop } from 'vue-facing-decorator';

@NuxtComponent({
  methods: {
    copy(id: string) {
      const tabElement = this.$refs[id] as HTMLElement;
      if (tabElement) {
        const codeElement = (tabElement as HTMLElement).querySelector('code');
        const codeSnippet = codeElement?.textContent;

        if (codeSnippet || typeof codeSnippet === 'string') {
          if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(codeSnippet);
          } else {
            const textArea = document.createElement('textarea');

            textArea.value = codeSnippet as string;
            textArea.classList.add('-sr--only');
            tabElement.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
          }
        }
      }
    },
  },
})
export default class Copy extends Vue {
  @Prop({ default: '' }) id?: string;
  @Prop({ default: '' }) code?: string;
  @Prop({ default: '' }) lang?: string;
}
</script>

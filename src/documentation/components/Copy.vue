<template>
  <div
    :key="id"
    :id="'example-' + id"
    :ref="`tab-panel-${id}`"
    role="tabpanel"
  >
    <div class="clipboard">
      <button
        class="clipboard__button chi-button -xs -flat"
        @click="() => copy(`tab-panel-${id}`)"
      >
        Copy
      </button>
    </div>
    <slot name="code"></slot>
  </div>
</template>

<style>
pre code.hljs {
  display: unset;
  padding: 0;
}
</style>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import { SR_ONLY } from '../../chi-vue/src/constants/classes';

@Component({
  methods: {
    copy(id: string) {
      const tabElement = (this.$refs[id] as HTMLElement);
      if (tabElement) {
        const codeElement = (tabElement as HTMLElement).querySelector('code');
        const codeSnippet = codeElement?.textContent;

        if (codeSnippet || typeof codeSnippet === 'string') {
          if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard
              .writeText(codeSnippet);
          } else {
            const textArea = document.createElement("textarea");

            textArea.value = codeSnippet as string;
            textArea.classList.add(SR_ONLY);
            tabElement.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
          }
        }
      }
    }
  }
})
export default class Copy extends Vue {
  @Prop() id: string;
}
</script>

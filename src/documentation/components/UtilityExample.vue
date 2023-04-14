<template>
  <fragment>
    <component :is="titleSize || 'h3'" class="-anchor" :id="id">
      {{ title }}
      <span>
        <a class="-ml--1" :href="`?theme=${$store.state.themes.theme}#${id}`">#</a>
      </span>
    </component>
    <slot name="example-description"></slot>
    <div class="example -mb--3" :style="additionalStyle" :id="`example-${id}`">
      <div :class="[padding || '-p--3', additionalClasses]">
        <slot name="example"></slot>
      </div>
      <div :class="'chi-tabs-panel -active'" role="tabpanel">
        <div class="clipboard">
          <button
            class="clipboard__button chi-button -xs -flat"
            @click="() => copy(`#example-${id}`)"
          >
            Copy
          </button>
        </div>
        <slot :name="'code-example'"></slot>
      </div>
    </div>
  </fragment>
</template>

<style>
  pre {
    border-top: .0625rem solid #dadee2;
  }
  pre code.hljs {
    display: unset;
    padding: 0;
  }
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Fragment } from 'vue-fragment'

Vue.config.warnHandler = (msg: string, _vm: Vue, trace: string) => {
  if (
    !msg.includes(
      'The client-side rendered virtual DOM tree is not matching server-rendered content.'
    )
  ) {
    console.warn(msg, trace);
  }
};

@Component({
  components: {
    Fragment
  },
  methods: {
    copy(el: string) {
      const element = document.querySelector(el);
      const codeElement = element?.querySelector('code');
      const codeSnippet = codeElement?.textContent;

      if (!codeSnippet || typeof codeSnippet !== 'string') {
        return
      }

      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(codeSnippet);
      }
    }
  }
})
export default class UtilityExample extends Vue {
  [x: string]: any;

  @Prop() id?: string;
  @Prop() title?: string;
  @Prop() titleSize?: 'h3' | 'h4';
  @Prop() snippet?: string;
  @Prop() padding?: string;
  @Prop() additionalClasses?: string;
  @Prop() additionalStyle?: string;
}
</script>

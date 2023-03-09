<template>
  <div class="example-wrapper">
    <h4 v-if="titleSize === 'h4' && !hideTitle" class="-anchor" :id="id">
      {{ title }}
      <span>
        <a
          class="-ml--1"
          :href="'?theme=' + $store.state.themes.theme + '#' + id"
        >#</a
        >
      </span>
    </h4>
    <h2 v-else-if="titleSize === 'h2' && !hideTitle" class="-anchor" :id="id">
      {{ title }}
      <span>
        <a
          class="-ml--1"
          :href="'?theme=' + $store.state.themes.theme + '#' + id"
        >#</a
        >
      </span>
    </h2>
    <h3 v-else-if="!hideTitle" class="-anchor" :id="id">
      {{ title }}
      <span>
        <a
          class="-ml--1"
          :href="'?theme=' + $store.state.themes.theme + '#' + id"
        >#</a
        >
      </span>
    </h3>
    <slot name="example-description"></slot>
    <div v-if="headTabs">
      <ul
        :id="'head-tabs-' + id"
        :aria-label="'head-tabs-' + id"
        class="chi-tabs -animated"
        role="tablist"
      >
        <li
          :class="[headTab.active ? '-active' : '']"
          :key="headTab.id"
          v-for="headTab in headTabs"
          role="tab"
        >
          <a
            :href="'#head-tabs-' + id + '-' + headTab.id"
            :aria-selected="headTab.active ? true : false"
            :aria-controls="'#head-tabs-' + id + '-' + headTab.id"
            @click="emitHeadTabsChange(headTab)"
          >{{ headTab.label }}</a
          >
        </li>
      </ul>
      <div
        :class="['chi-tabs-panel', headTab.active ? '-active' : '']"
        :id="'head-tabs-' + id + '-' + headTab.id"
        :key="headTab.id"
        v-for="headTab in headTabs"
        role="tabpanel"
      >
        <div class="example -mb--3" :style="additionalStyle">
          <div :class="[padding || '-p--3', additionalClasses]">
            <slot name="example"></slot>
          </div>
          <div class="example-tabs -pl--2">
            <ul
              :id="'code-snippet-tabs-' + id + '-' + headTab.id"
              class="chi-tabs -animated"
              role="tabs"
            >
              <li
                :class="[
                  tab.active ? '-active' : '',
                  tab.disabled ? '-disabled' : ''
                ]"
                :key="tab.id"
                v-for="tab in tabs"
              >
                <a
                  :href="'#example-' + id + '-' + headTab.id + '-' + tab.id"
                  :aria-controls="
                    '#example-' + id + '-' + headTab.id + '-' + tab.id
                  "
                  :aria-selected="tab.active ? true : false"
                  role="tab"
                >
                  {{ tab.label }}
                </a>
              </li>
            </ul>
          </div>
          <div
            :class="['chi-tabs-panel', tab.active ? '-active' : '']"
            :key="tab.id"
            :id="'example-' + id + '-' + headTab.id + '-' + tab.id"
            v-for="tab in tabs"
            role="tabpanel"
          >
            <slot :name="'code-' + id + '-' + headTab.id + '-' + tab.id"></slot>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="example -mb--3" :style="additionalStyle">
      <div :class="[padding || '-p--3', additionalClasses]">
        <slot name="example"></slot>
      </div>
      <div v-if="!hideTabsHead" class="example-tabs -pl--2">
        <ul
          class="chi-tabs -animated"
          :id="'code-snippet-tabs-' + id"
          role="tabs"
        >
          <li
            :class="[
              tab.active ? '-active' : '',
              tab.disabled ? '-disabled' : ''
            ]"
            v-for="tab in tabs"
            :key="tab.id"
          >
            <a
              role="tab"
              :aria-controls="'#example-' + id + '-' + tab.id"
              :aria-selected="tab.active ? true : false"
              :href="'#example-' + id + '-' + tab.id"
              :tabindex="tab.disabled ? -1 : null"
            >
              {{ tab.label }}
            </a>
          </li>
        </ul>
      </div>
      <div
        :class="[!hideTabsHead ? 'chi-tabs-panel' : '', tab.active ? '-active' : '']"
        v-for="tab in tabs"
        :key="tab.id"
        :id="'example-' + id + '-' + tab.id"
        :ref="`tab-panel-${tab.id}`"
        role="tabpanel"
      >
        <div class="clipboard">
          <button
            class="clipboard__button chi-button -xs -flat"
            @click="() => copy(`tab-panel-${tab.id}`)"
          >
            Copy
          </button>
        </div>
        <slot :name="'code-' + tab.id"></slot>
      </div>
    </div>
  </div>
</template>

<style>
pre code.hljs {
  display: unset;
  padding: 0;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TabsInterface, HeadTabsInterface } from '../models/models';
import { COMPONENT_EXAMPLE_EVENTS } from '../constants/constants';
import { SR_ONLY } from '../../chi-vue/src/constants/classes';

declare const chi: any;

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
  methods: {
    copy(id: string) {
      const tabElement = (this.$refs[id] as HTMLElement[])[0];

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
export default class ComponentExample extends Vue {
  @Prop() id?: string;
  @Prop() title?: string;
  @Prop() titleSize?: 'h3' | 'h4';
  @Prop() tabs?: TabsInterface[];
  @Prop() headTabs?: HeadTabsInterface[];
  @Prop() padding?: string;
  @Prop() additionalClasses?: string;
  @Prop() additionalStyle?: string;
  @Prop() hideTabsHead?: boolean;
  @Prop() hideTitle?: boolean;

  chiTabs: any;
  chiHeadTabs: any;

  mounted() {
    const chiTabs = document.getElementById(
      'code-snippet-tabs-' + this.$props.id
    );
    const chiHeadTabs = document.getElementById('head-tabs-' + this.$props.id);

    if (chiTabs) this.chiTabs = chi.tab(chiTabs);
    if (chiHeadTabs) {
      this.headTabs?.forEach((tab: HeadTabsInterface) => {
        const codeSnippetTab = document.getElementById(
          `code-snippet-tabs-${this.$props.id}-${tab.id}`
        );

        if (codeSnippetTab) chi.tab(codeSnippetTab);
      });

      this.chiHeadTabs = chi.tab(chiHeadTabs);
    }
  }

  emitHeadTabsChange(tab: HeadTabsInterface) {
    this.$emit(COMPONENT_EXAMPLE_EVENTS.CHI_HEAD_TABS_CHANGE, tab);
  }
}
</script>

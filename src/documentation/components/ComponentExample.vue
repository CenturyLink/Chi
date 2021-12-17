<template>
  <div class="example-wrapper">
    <h4 v-if="titleSize === 'h4'" class="-anchor" :id="id">
      {{ title }}
      <span>
        <a
          class="-ml--1"
          :href="'?theme=' + $store.state.themes.theme + '#' + id"
          >#</a
        >
      </span>
    </h4>
    <h3 v-else class="-anchor" :id="id">
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
    <div :class="['-mb--3', { example: tabs }]">
      <div :class="[padding || '-p--3', additionalClasses]">
        <slot name="example"></slot>
      </div>
      <div v-if="tabs" class="example-tabs -pl--2">
        <ul
          class="chi-tabs -animated"
          :id="'code-snippet-tabs' + id"
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
              :aria-controls="'#example-' + '-' + id + '-' + tab.id"
              :aria-selected="tab.active ? true : false"
              :href="'#example-' + '-' + id + '-' + tab.id"
              :tabindex="tab.disabled ? -1 : null"
            >
              {{ tab.label }}
            </a>
          </li>
        </ul>
      </div>
      <div
        :class="['chi-tabs-panel', tab.active ? '-active' : '']"
        v-for="tab in tabs"
        :key="tab.id"
        :id="'example-' + '-' + id + '-' + tab.id"
        role="tabpanel"
      >
        <slot :name="'code-' + tab.id"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TabsInterface } from '../models/models';

declare const chi: any;

@Component({})
export default class ComponentExample extends Vue {
  @Prop() id?: string;
  @Prop() title?: string;
  @Prop() titleSize?: 'h3' | 'h4';
  @Prop() tabs?: TabsInterface[];
  @Prop() padding?: string;
  @Prop() additionalClasses?: string;

  chiTabs: any;

  mounted() {
    const chiTabs = document.getElementById(
      'code-snippet-tabs' + this.$props.id
    );

    if (chiTabs) {
      this.chiTabs = chi.tab(chiTabs);
    }
  }
}
</script>

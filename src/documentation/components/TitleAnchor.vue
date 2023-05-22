<template>
  <div class="example-wrapper">
    <h4 v-if="titleSize === 'h4'" class="-anchor" :id="id">
      <slot></slot>
      <span>
        <a
          class="-ml--1"
          :href="'?theme=' + $store.state.themes.theme + '#' + id"
        >#</a
        >
      </span>
    </h4>
    <h2 v-else-if="titleSize === 'h2'" class="-anchor" :id="id">
      <slot></slot>
      <span>
        <a
          class="-ml--1"
          :href="'?theme=' + $store.state.themes.theme + '#' + id"
        >#</a
        >
      </span>
    </h2>
    <div v-else class="example -mb--3" :style="additionalStyle">
      <div :class="[padding || '-p--3', additionalClasses]">
        <slot name="example"></slot>
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
  }
})
export default class TitleAnchor extends Vue {
  @Prop() id?: string;
  @Prop({ default: 'h2' }) titleSize?: 'h2' | 'h4';
  @Prop() padding?: string;
  @Prop() additionalClasses?: string;
  @Prop() additionalStyle?: string;
}
</script>

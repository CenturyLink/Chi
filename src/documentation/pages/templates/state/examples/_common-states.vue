<template lang="pug">
  <ComponentExample :title="$props.title" :id="$props.id" hasSingleHtmlCode="true">
    template()
      template(slot="example")
        template(v-for="stateData in $props.stateDataList")
          .chi-badge(:class="`-flat${stateData.class} -m--1`")
            .chi-badge__content
              svg(v-if="stateData.svgViewBox" :class="stateData.icon" :viewBox="stateData.svgViewBox")
                title {{stateData.label}}
                circle(class="path" :cx="stateData.circle.cx" :cy="stateData.circle.cy" :r="stateData.circle.radius" :fill="stateData.circle.fill" :stroke-width="stateData.circle.strokeWidth")
              i(v-else :class="stateData.icon" aria-hidden="true")
              span {{stateData.label}}
      <pre class="language-html-hella" slot="single-html-code">
        <code v-highlight="$props.stateCodeSnippet" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { StateData } from './utilities';

@Component({
  props: {
    title: String,
    id: String,
    stateDataList: {
      type: Array as () => StateData[]
    },
    stateCodeSnippet: String
  }
})

export default class CommonState extends Vue {}
</script>

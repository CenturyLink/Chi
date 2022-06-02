<template lang="pug">
  <ComponentExample title="application states" id="application-states" hasSingleHtmlCode="true">
    template()
      template(slot="example")
        template(v-for="stateData in $data._applicationStateDataList")
          .chi-badge(:class="`-flat ${stateData.class} -m--1`")
            .chi-badge__content
              i(:class="stateData.icon" aria-hidden="true")
              span {{stateData.label}}
      <pre class="language-html-hella" slot="single-html-code">
        <code v-highlight="$data._applicationStateCodeSnippet" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { _applicationStateDataList } from './utilities';

@Component({
  data: () => {
    return {
      _applicationStateDataList: _applicationStateDataList,
      _applicationStateCodeSnippet: ``
    };
  }
})

export default class ApplicationStates extends Vue {
  created(){
    this._createCodeSnippet();
  }
  _createCodeSnippet(){
    let _applicationStateCodeSnippet = ``;
    _applicationStateDataList.forEach((stateType, index) => {
      _applicationStateCodeSnippet += `<!-- ${stateType.label} -->
<div class="chi-badge -flat${stateType.class ? stateType.class : ''}">
  <div class="chi-badge__content">
    <i class="${stateType.icon}" aria-hidden="true"></i>
    <span>${stateType.label}</span>
  </div>
</div>${index++ === _applicationStateDataList.length ? `
`:''}`
    });
    this.$data._applicationStateCodeSnippet = _applicationStateCodeSnippet;
  }
}
</script>

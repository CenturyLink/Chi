<template lang="pug">
  <ComponentExample title="User states" id="user-states" hasSingleHtmlCode="true">
    template()
      template(slot="example")
        template(v-for="stateData in $data._userStateDataList")
          .chi-badge(:class="`-flat ${stateData.class} -m--1`")
            .chi-badge__content
              i(:class="stateData.icon" aria-hidden="true")
              span {{stateData.label}}
      <pre class="language-html-hella" slot="single-html-code">
        <code v-highlight="$data._userStateCodeSnippet" class="html"></code>
      </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { _userStateDataList } from './utilities';

@Component({
  data: () => {
    return {
      _userStateDataList: _userStateDataList,
      _userStateCodeSnippet: ``
    };
  }
})

export default class UserStates extends Vue {
  created(){
    this._createCodeSnippet();
  }
  _createCodeSnippet(){
    let _userStateCodeSnippet = ``;
    _userStateDataList.forEach((stateType, index) => {
      _userStateCodeSnippet += `<!-- ${stateType.label} -->
<div class="chi-badge -flat${stateType.class}">
  <div class="chi-badge__content">
    <i class="${stateType.icon}" aria-hidden="true"></i>
    <span>${stateType.label}</span>
  </div>
</div>${index++ === _userStateDataList.length ? `
`:''}`
    });
    this.$data._userStateCodeSnippet = _userStateCodeSnippet;
  }
}
</script>

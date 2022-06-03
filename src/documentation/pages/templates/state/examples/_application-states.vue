<template lang="pug">
  <CommonState title="Application states" id="application-states" :stateDataList="$data.applicationStateDataList" :stateCodeSnippet="$data.applicationStateCodeSnippet" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommonState from './_common-states.vue';
import { _applicationStateDataList, _createApplicationStateCodeSnippet } from './utilities';

@Component({
  components: {
    CommonState
  },
  data: () => {
    return {
      applicationStateDataList: _applicationStateDataList,
      applicationStateCodeSnippet: _createApplicationStateCodeSnippet()
    };
  }
})

export default class ApplicationStates extends Vue {}
</script>

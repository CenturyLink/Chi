<template lang="pug">
  <CommonState title="Application states" id="application-states" :stateDataList="$data.applicationStateDataList" :stateCodeSnippet="$data.applicationStateCodeSnippet" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommonState from './_common-states.vue';
import { _createApplicationStateCodeSnippet } from './utilities';
import { APPLICATION_STATE_DATA_LIST } from './fixtures';

@Component({
  components: {
    CommonState
  },
  data: () => {
    return {
      applicationStateDataList: APPLICATION_STATE_DATA_LIST,
      applicationStateCodeSnippet: _createApplicationStateCodeSnippet()
    };
  }
})

export default class ApplicationStates extends Vue {}
</script>

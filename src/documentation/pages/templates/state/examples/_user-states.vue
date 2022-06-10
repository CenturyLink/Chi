<template lang="pug">
  <CommonState title="User states" id="user-states" :stateDataList="$data.userStateDataList" :stateCodeSnippet="$data.userStateCodeSnippet" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommonState from './_common-states.vue';
import { _createUserStateCodeSnippet } from './utilities';
import { USER_STATE_DATA_LIST } from './fixtures';

@Component({
  components: {
    CommonState
  },
  data: () => {
    return {
      userStateDataList: USER_STATE_DATA_LIST,
      userStateCodeSnippet: _createUserStateCodeSnippet()
    };
  }
})

export default class UserStates extends Vue {}
</script>

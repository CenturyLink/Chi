<template lang="pug">
  <CommonState title="User states" id="user-states" :stateDataList="$data.userStateDataList" :stateCodeSnippet="$data.userStateCodeSnippet" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommonState from './_common-states.vue';
import { _userStateDataList, _createUserStateCodeSnippet } from './utilities';

@Component({
  components: {
    CommonState
  },
  data: () => {
    return {
      userStateDataList: _userStateDataList,
      userStateCodeSnippet: _createUserStateCodeSnippet()
    };
  }
})

export default class UserStates extends Vue {}
</script>

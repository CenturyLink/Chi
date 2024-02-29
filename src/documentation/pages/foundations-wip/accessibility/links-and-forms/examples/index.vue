<template lang="pug">
.chi-grid__container.-pt--3
  <InfoAndRelationships />
  <OnFocus />
  <OnInput />
  <ErrorIdentification />
  <LabelsInstructions />
  <ErrorSuggestion />
  <ErrorPrevention />
  <NameRoleValue />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import InfoAndRelationships from './_info-and-relationships.vue';
import OnFocus from './_on-focus.vue';
import OnInput from './_on-input.vue';
import ErrorIdentification from './_error-identification.vue';
import LabelsInstructions from './_labels-instructions.vue';
import ErrorSuggestion from './_error-suggestion.vue';
import ErrorPrevention from './_error-prevention.vue';
import NameRoleValue from './_name-role-value.vue';

@NuxtComponent({
  components: {
    InfoAndRelationships,
    OnFocus,
    OnInput,
    ErrorIdentification,
    LabelsInstructions,
    ErrorSuggestion,
    ErrorPrevention,
    NameRoleValue,
  },
})
export default class Examples extends Vue {}
</script>

<template>
  <div class="chi-dropdown">
    <button ref="dropdownTrigger" class="chi-button -icon -flat" aria-label="More options">
      <div class="chi-button__content">
        <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
      </div>
    </button>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#">
        <span><i class="chi-icon -sm -icon--primary icon-edit" aria-hidden="true"/></span>
        <span>Edit</span>
      </a>
      <a class="chi-dropdown__menu-item" href="#">
        <span><i class="chi-icon -sm -icon--primary icon-delete" aria-hidden="true"/></span>
        <span>Delete</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// eslint-disable-next-line
declare const chi: any;

@Component({
  components: {},
  props: {
    id: String,
  },
})
export default class ExampleActions extends Vue {
  mounted() {
    chi.dropdown(this.$refs.dropdownTrigger);
  }
}
</script>

<template>
  <div class="chi-data-table__cell-desktop">
    <div class="chi-dropdown">
      <button ref="dropdownTrigger" class="chi-button -icon -flat" aria-label="More options" data-position="left-start">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({})
export default class DesktopActions extends Vue {
  dropdown: any;

  mounted() {
    this.dropdown = chi.dropdown(this.$refs.dropdownTrigger);
  }

  beforeDestroy() {
    this.dropdown.dispose();
  }
}
</script>

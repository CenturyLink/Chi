<template>
  <div class="chi-dropdown">
    <button ref="dropdownTrigger" class="chi-button -icon -flat -bg--none -opacity-hover--80">
      <div class="chi-button__content">
        <i class="chi-icon icon-more-vert"></i>
      </div>
    </button>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#">
        <span><i class="chi-icon -sm -icon--primary icon-edit"/></span>
        <span>Edit</span>
      </a>
      <a class="chi-dropdown__menu-item" href="#">
        <span><i class="chi-icon -sm -icon--primary icon-delete"/></span>
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

<template>
  <div class="chi-dropdown">
    <button
      :id="`action-button-${id}`"
      class="chi-button -icon -flat -bg--none -opacity-hover--80"
    >
      <div class="chi-button__content">
        <i class="chi-icon icon-more-vert"></i>
      </div>
    </button>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#">Edit</a>
      <a class="chi-dropdown__menu-item" href="#">Delete</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  components: {},
  props: {
    id: String
  }
})
export default class Actions extends Vue {
  mounted() {
    chi.dropdown(document.getElementById(`action-button-${this.$props.id}`));
  }
}
</script>

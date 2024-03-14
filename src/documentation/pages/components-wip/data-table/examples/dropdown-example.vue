<template>
  <div class="chi-dropdown -position--absolute">
    <button
      :id="'action-button-' + id"
      class="chi-button -icon -primary -flat"
      aria-label="More options"
      data-position="left-start"
    >
      <div class="chi-button__content">
        <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
      </div>
    </button>
    <div class="chi-dropdown__menu">
      <a class="chi-dropdown__menu-item" href="#" v-for="action in actions">
        <span><chi-icon :icon="action.icon" size="sm" color="primary"></chi-icon></span>
        <span>{{ action.name }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-facing-decorator';
declare const chi: any;

@NuxtComponent({})
export default class DropdownExample extends Vue {
  @Prop() id!: number;
  dropdown: any;
  actions = [
    {name: 'View', icon: 'check-alt'},
    {name: 'Edit', icon: 'edit'},
    {name: 'Delete', icon: 'delete'}
  ]

  mounted() {
    this.dropdown = chi.dropdown(document.getElementById(`action-button-${this.id}`));
  }

  beforeDestroy() {
    this.dropdown.dispose();
  }
}
</script>

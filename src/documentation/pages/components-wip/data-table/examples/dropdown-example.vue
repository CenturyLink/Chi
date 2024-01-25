<template>
    <div class="chi-dropdown -position--absolute">
        <button :id="'action-button-' + id" class="chi-button -icon -primary -flat" aria-label="More options"
            data-position="left-start">
            <div class="chi-button__content">
                <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
        </button>
        <div class="chi-dropdown__menu">
            <a class="chi-dropdown__menu-item" href="#">
                <span><chi-icon icon="edit" size="sm" color="primary"></chi-icon></span>
                <span>Edit {{ id }}</span>
            </a>
            <a class="chi-dropdown__menu-item" href="#">
                <span><chi-icon icon="delete" size="sm" color="primary"></chi-icon></span>
                <span>Delete {{ id }}</span>
            </a>
        </div>
    </div>
</template>
  
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
    data() {
        return {
            dropdown: null as unknown
        }
    },
})

export default class DropdownExample extends Vue {
    @Prop() id!: number;

    mounted() {
        this.$data.dropdown = chi.dropdown(document.getElementById(`action-button-${this.id}`));
    }

    beforeDestroy() {
        this.$data.dropdown.dispose();
    }
}
</script>
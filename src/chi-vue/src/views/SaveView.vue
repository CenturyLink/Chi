<template>
  <div>
    <h3>Interactive</h3>
    <button class="chi-button -mr--2" @click="toggleSaveView">Toggle Save View</button>
    <button class="chi-button" @click="toggleSaveButton">Toggle Save Button</button>
    <SaveView
      class="-mt--2"
      :config="interactiveSaveViewConfig"
      @chiViewSave="saveView"
      @chiViewDelete="deleteView"
      @chiSaveViewShown="saveViewShown"
      @chiSaveViewHide="saveViewHide"
      @chiSaveViewHidden="saveViewHidden"
      @chiSaveViewInput="saveViewInput"
    >
      <button
        class="chi-button -light -icon -flat -xs"
        aria-label="Edit"
        @click="() => toggleInfoPopover()"
        slot="info-icon"
      >
        <div class="chi-button__content">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </div>
      </button>
      <chi-popover
        :active="isInfoPopoverActive"
        position="right-start"
        title="Popover title"
        variant="text"
        arrow
        reference="#chi-save-view__info-trigger"
        slot="info-popover"
        @chiPopoverHidden="() => (isInfoPopoverActive = false)"
      >
        Lorem ipsum test test
      </chi-popover>
    </SaveView>
    <h3>Modes</h3>
    <div class="-mt--2" v-for="(config, key) in configs" :key="key">
      <h4>{{ setLabel(config.mode) }}</h4>
      <SaveView :config="setSaveViewConfig(config)" @chiViewSave="saveView" @chiViewDelete="deleteView"></SaveView>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import SaveView from '../components/data-table-save-view/SaveView';
import { SaveViewConfig, SaveViewModes } from '../constants/types';

@Component({
  components: {
    SaveView,
  },
  data: () => {
    return {
      interactiveSaveViewConfig: {
        active: false,
        results: '(1-40 of 78)',
      },
      configs: [
        {
          mode: SaveViewModes.BASE,
        },
        { id: 'example-mode-saved', mode: SaveViewModes.SAVED, title: 'Title example saved' },
      ],
    };
  },
})
export default class SaveViewView extends Vue {
  active = false;
  isInfoPopoverActive = false;
  rowSelected = true;
  title = '';

  deleteView(e: Event) {
    console.log(e);
  }

  saveView(e: Event) {
    console.log(e);
  }

  saveViewShown(e: Event) {
    console.log(e);
  }

  saveViewHide(e: Event) {
    console.log(e);
  }

  saveViewHidden(e: Event) {
    console.log(e);
  }

  saveViewInput(e: string) {
    this.title = e;

    this.checkSaveViewButton();
  }

  checkSaveViewButton() {
    this.$data.interactiveSaveViewConfig = {
      ...this.$data.interactiveSaveViewConfig,
      saveButtonDisabled: !(this.title && this.title.length !== 0 && this.rowSelected),
    };
  }

  toggleInfoPopover() {
    this.isInfoPopoverActive = !this.isInfoPopoverActive;
  }

  toggleSaveView() {
    this.active = !this.active;

    this.$data.interactiveSaveViewConfig = {
      ...this.$data.interactiveSaveViewConfig,
      active: this.active,
    };
  }

  toggleSaveButton() {
    this.rowSelected = !this.rowSelected;

    this.checkSaveViewButton();
  }

  setLabel(label: SaveViewModes): string {
    return label[0].toUpperCase() + label.substring(1);
  }

  setSaveViewConfig(config: SaveViewConfig): SaveViewConfig {
    return {
      active: true,
      results: '(1-40 of 78)',
      id: config.id,
      mode: config.mode,
      title: config.title,
    };
  }
}
</script>

<style lang="scss"></style>

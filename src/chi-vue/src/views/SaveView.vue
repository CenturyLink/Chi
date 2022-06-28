<template>
  <div>
    <h3>Interactive</h3>
    <button class="chi-button" @click="toggleSaveView">Toggle Save View</button>
    <SaveView
      class="-mt--2"
      :active="active"
      results="(1-40 of 78)"
      @chiViewSave="saveView"
      @chiViewDelete="deleteView"
      @chiSaveViewShown="saveViewShown"
      @chiSaveViewHide="saveViewHide"
      @chiSaveViewHidden="saveViewHidden"
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
    <div class="-mt--2" v-for="(mode, key) in modes" :key="key">
      <h4>{{ mode.mode }}</h4>
      <SaveView
        :active="true"
        :mode="mode.mode.toLowerCase()"
        results="(1-40 of 78)"
        :default="mode.default"
        :id="mode.id"
        :title="mode.title"
        @chiViewSave="saveView"
        @chiViewDelete="deleteView"
      ></SaveView>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SaveView from '../components/data-table-save-view/SaveView';

@Component({
  components: {
    SaveView,
  },
  data: () => {
    return {
      modes: [
        {
          mode: 'Base',
        },
        { id: 'example-mode-saved', mode: 'Saved', title: 'Title example saved' },
      ],
    };
  },
})
export default class SaveViewView extends Vue {
  active = false;
  isInfoPopoverActive = false;

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

  toggleInfoPopover() {
    this.isInfoPopoverActive = !this.isInfoPopoverActive;
  }

  toggleSaveView() {
    this.active = !this.active;
  }
}
</script>

<style lang="scss"></style>

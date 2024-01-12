<template>
  <h3>Interactive</h3>
  <button class="chi-button -mr--2" @click="toggleSaveView">Toggle Save View</button>
  <button class="chi-button" @click="toggleSaveButton">Toggle Save Button</button>
  <SaveView
    class="-mt--2"
    :config="interactiveSaveViewConfig"
    @chiViewSave="(e) => saveView(e)"
    @chiViewDelete="(e) => deleteView(e)"
    @chiSaveViewShown="(e) => saveViewShown(e)"
    @chiSaveViewHide="(e) => saveViewHide(e)"
    @chiSaveViewHidden="(e) => saveViewHidden(e)"
    @chiSaveViewInput="(e) => saveViewInput(e)"
    @chiSaveViewDefault="(e) => saveViewDefault(e)"
  >
    <template v-slot:info-icon>
      <button
        id="chi-save-view__info-trigger-interactive"
        class="chi-button -light -icon -flat -xs"
        aria-label="Edit"
        @click="() => toggleInfoPopover()"
      >
        <div class="chi-button__content">
          <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
        </div>
      </button>
    </template>
    <template v-slot:info-popover>
      <chi-popover
        :active.prop="isInfoPopoverActive"
        position="right-start"
        title="Popover title"
        variant="text"
        arrow
        reference="#chi-save-view__info-trigger-interactive"
        @chiPopoverHidden="() => (isInfoPopoverActive = false)"
      >
        Lorem ipsum test test
      </chi-popover>
    </template>
  </SaveView>
  <h3>Modes</h3>
  <div class="-mt--2" v-for="(config, key) in configs" :key="key">
    <h4>{{ setLabel(config.mode) }}</h4>
    <SaveView :config="setSaveViewConfig(config)" @chiViewSave="saveView" @chiViewDelete="deleteView"></SaveView>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SaveView from '../components/data-table-save-view/SaveView';
import { SaveViewConfig, SaveViewModes } from '../constants/types';

const interactiveSaveViewConfig = ref<SaveViewConfig>({
  active: false,
  results: '(1-40 of 78)',
});

const configs = ref<SaveViewConfig[]>([
  {
    active: false,
    results: '(1-40 of 78)',
    mode: SaveViewModes.BASE,
  },
  {
    id: 'example-mode-saved',
    mode: SaveViewModes.SAVED,
    title: 'Title example saved',
    active: false,
    results: '(1-40 of 78)',
  },
]);

const active = ref(false);
const isInfoPopoverActive = ref(false);
const rowSelected = ref(true);
const title = ref('');

const deleteView = (e: Event) => {
  console.log(e);
};

const saveView = (e: Event) => {
  console.log(e);
};

const saveViewShown = (e: Event) => {
  console.log(e);
};

const saveViewHide = (e: Event) => {
  console.log(e);
};

const saveViewHidden = (e: Event) => {
  console.log(e);
};

const saveViewInput = (e: string) => {
  title.value = e;

  checkSaveViewButton();
};

const saveViewDefault = (e: boolean) => {
  console.log(e);
};

const checkSaveViewButton = () => {
  interactiveSaveViewConfig.value = {
    ...interactiveSaveViewConfig.value,
    saveButtonDisabled: !(title.value && title.value.length !== 0 && rowSelected.value),
  };
};

const toggleInfoPopover = () => {
  isInfoPopoverActive.value = !isInfoPopoverActive.value;
};

const toggleSaveView = () => {
  active.value = !active.value;

  interactiveSaveViewConfig.value = {
    ...interactiveSaveViewConfig.value,
    active: active.value,
  };
};

const toggleSaveButton = () => {
  rowSelected.value = !rowSelected.value;

  checkSaveViewButton();
};

const setLabel = (label: SaveViewModes | undefined) => {
  if (!label) return;

  return label[0].toUpperCase() + label.substring(1);
};

const setSaveViewConfig = (config: SaveViewConfig): SaveViewConfig => {
  return {
    active: true,
    results: '(1-40 of 78)',
    id: config.id,
    mode: config.mode,
    title: config.title,
  };
};
</script>

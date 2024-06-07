<template>
  <template v-if="!props.modal">
    <TransferListComponent :config="transferListConfig" />
  </template>
  <template v-else>
    <Tooltip :message="modalConfig.tooltipMsg">
      <chi-button
        ref="modalTrigger"
        :data-target="`#modal-${uuid}`"
        variant="flat"
        type="icon"
        @chiClick="() => modal.show()"
      >
        <chi-icon :icon="modalConfig.icon"></chi-icon>
      </chi-button>
    </Tooltip>
    <div :class="[BACKDROP_CLASSES.BACKDROP, CLOSED_CLASS]">
      <div :class="BACKDROP_CLASSES.WRAPPER">
        <section
          :id="`modal-${uuid}`"
          :class="MODAL_CLASSES.MODAL"
          role="dialog"
          :aria-label="modalConfig?.ariaLabel || modalConfig?.title"
          aria-modal="true"
        >
          <header :class="MODAL_CLASSES.HEADER">
            <h2 :class="MODAL_CLASSES.TITLE">{{ modalConfig?.title }}</h2>
            <button
              :class="[BUTTON_CLASSES.BUTTON, BUTTON_CLASSES.ICON_BUTTON, CLOSE_CLASS]"
              data-dismiss="modal"
              aria-label="Close"
            >
              <div :class="BUTTON_CLASSES.CONTENT">
                <chi-icon icon="x"></chi-icon>
              </div>
            </button>
          </header>
          <div :class="MODAL_CLASSES.CONTENT">
            <TransferListComponent :config="transferListConfig" />
          </div>
        </section>
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { ref, provide, readonly, watch, onMounted, onBeforeMount, onUnmounted } from 'vue';
import {
  TransferListItem,
  TransferListColumnItemsActive,
  TransferList,
  TransferListModalConfig,
} from '@/constants/types';
import { CHI_VUE_KEYS } from '@/constants/constants';
import { TransferListEmits } from '@/constants/events';
import TransferListComponent from './TransferListComponent.vue';
import Tooltip from '..//tooltip/tooltip';
import { uuid4 } from '../../utils/utils';
import { BACKDROP_CLASSES, BUTTON_CLASSES, CLOSED_CLASS, CLOSE_CLASS, MODAL_CLASSES } from '@/constants/classes';
import { DEFAULT_ITEMS_SELECTION, defaultConfig } from './default-config';

declare const chi: any;

const props = defineProps<TransferList>();
const emit = defineEmits<TransferListEmits>();
const uuid = uuid4();
const modalTrigger = ref(null);
let modalConfig = props.modal as TransferListModalConfig;
let transferListConfig = props.config || defaultConfig.transferList;
let modal;

/**
 * Saved state of the component
 */
const transferList = ref<TransferListItem[]>(props.transferListData);

/**
 * Unsaved state of the component
 */
const currentList = ref<TransferListItem[]>(props.transferListData);

const selectedItems = ref<TransferListColumnItemsActive>(DEFAULT_ITEMS_SELECTION);

const applyColumnCustomizationConfig = () => {
  modalConfig = defaultConfig.modal as TransferListModalConfig;
  transferListConfig = defaultConfig.transferList;
};

const onSaveTransferList = () => {
  transferList.value = currentList.value;
  modal?.hide();

  emit('chiTransferListSave', currentList.value);
};

const onResetTransferList = () => {
  transferList.value = currentList.value;
  currentList.value = props.transferListData;

  emit('chiTransferListReset', props.transferListData);
};

/**
 * Updates current state of the component
 */
const onUpdateCurrentList = (list: TransferListItem[]) => (currentList.value = list);

const onCancel = () => {
  onUpdateCurrentList(transferList.value);
  onClearSelection();
  modal?.hide();

  emit('chiTransferListCancel');
};
const onSelectItem = (list: TransferListColumnItemsActive) => (selectedItems.value = list);

const onClearSelection = () => (selectedItems.value = DEFAULT_ITEMS_SELECTION);

//#region LifeCycle
/**
 * If prop modal is used as boolean, applies column customization configuration
 */
onBeforeMount(() => {
  if (props.modal === true) {
    applyColumnCustomizationConfig();
  }
});

onMounted(() => {
  if (props.modal) {
    modal = chi.modal(modalTrigger.value);
  }
});

onUnmounted(() => modal?.dispose());
//#endregioncómo

watch(currentList, () => emit('chiTransferListChange', currentList.value));

provide(CHI_VUE_KEYS.TRANSFER_LIST, {
  originalTransferList: readonly(props.transferListData),
  transferList: readonly(transferList),
  currentList: readonly(currentList),
  selectedItems: readonly(selectedItems),
  onUpdateCurrentList,
  onSelectItem,
  onClearSelection,
  onSaveTransferList,
  onResetTransferList,
  onCancel,
});
</script>

<style>
.fit-content {
  width: fit-content;
}
</style>

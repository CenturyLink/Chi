<template>
  <Tooltip message="Download">
    <div class="chi-dropdown">
      <button ref="dropdownTrigger" class="chi-button -icon -flat" aria-label="Download" data-position="bottom-end">
        <div class="chi-button__content">
          <i class="chi-icon icon-arrow-to-bottom" aria-hidden="true"></i>
        </div>
      </button>
      <div class="chi-dropdown__menu">
        <a class="chi-dropdown__menu-item" href="#">Download All Data</a>
        <a class="chi-dropdown__menu-item" href="#">Download All Current Results</a>
      </div>
    </div>
  </Tooltip>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import Tooltip from '../../../components/tooltip/tooltip';

declare const chi: any;

@Component({
  components: {
    Tooltip,
  },
})
export default class ExampleDownloadIcon extends Vue {
  mounted() {
    chi.dropdown(this.$refs.dropdownTrigger);
  }
}
</script>

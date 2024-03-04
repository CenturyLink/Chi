<template lang="pug">
<TitleBar title="File input" description="File inputs are used to select one or more files from a user's device storage." :tabs="pageTabs" />
.chi-grid__container.-pt--3
  .chi-tabs-panel.-active#examples
    <Examples />
  .chi-tabs-panel#properties
    <Properties />
  .chi-tabs-panel#accessibility
    <Accessibility />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Examples from './examples/index.vue';
import Properties from './_properties.vue';
import Accessibility from './_accessibility.vue';
import { standardComponentPageTabs } from '@/constants/constants';

@NuxtComponent({
  components: {
    Accessibility,
    Examples,
    Properties,
  },
})
export default class FileInput extends Vue {
  pageTabs = standardComponentPageTabs;

  mounted() {
    this.saveFile();
  }

  saveFile() {
    const inputFiles = document.querySelectorAll('input[type="file"].chi-file-input');

    inputFiles.forEach((input: Element) => {
      const label = input.nextElementSibling;

      input.addEventListener('change', (e: Event) => {
        const fileName = (e.target as HTMLInputElement).value.split('\\').pop();

        if (label && fileName) {
          label.innerHTML = fileName;
        }
      });
    });
  }
}
</script>

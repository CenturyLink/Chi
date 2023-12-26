<template lang="pug">
  div
    <TitleAnchor title="Framework specific boilerplates" id="framework-specific-boilerplates" titleSize="h2" additionalClasses="-lh--4" />
    <TableComponent :data="values" :columns="columns" :getContent="getContent" additionalClasses="-mt--3 -mb--3 -bordered -text--center" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITableColumn, ITableContent } from "~/models/models";

declare const chi: any;

const columns = [
  {
    title: '',
    key: 'class',
  },
  {
    title: 'chi.css',
    key: 'css',
  },
  {
    title: 'chi.js',
    key: 'js',
  },
  {
    title: 'Web components',
    key: 'webComponents',
  },
  {
    title: 'Favicon',
    key: 'favicon',
  },
  {
    title: 'Download',
    key: 'download',
  }
];
const values = ['Vue', 'Stencil', 'Angular', 'React', 'Vue + ES6'];

  @Component({
  data: () => {
    return {
      stylesheet: {
        htmlblueprint: (version: string) => `<link rel="stylesheet" href="https://lib.lumen.com/chi/${version}/chi.css" integrity="sha256-1bhPx5yXmCMWKzXn9PFea05NRF+239d9pqYJcR3GHWY=" crossorigin="anonymous">`
      },
      values,
      columns
    }
  }
})
export default class Boilerplates extends Vue {
  mounted() {
    chi.expansionPanel(
      document.querySelectorAll('[data-chi-epanel-group="web-component-details"]'),
      {mode: 'accordion'}
    );
  }

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'class':
        return `<span class="-text--bold">${content}</span>`;
      case 'download':
        return `<a href="../../boilerplates/chi-vue-es6-boilerplate.zip" class="chi-button">
                    <div class="chi-button__content">
                        <i aria-hidden="true" class="chi-icon icon-circle-arrow-down-outline"></i>
                        <span>Download</span>
                    </div>
                 </a>`;
      default:
        return '<i class="chi-icon icon-check -icon--success"></i>';
    }
  }

  get version() {
    return this.$store.state.themes.version;
  }
}
</script>

<template>
  <div class="chi-grid__container">
    <nav class="docs-tabs">
      <ul class="chi-tabs -animated" id="page-content-tabs">
        <li :class="[tab.active ? '-active' : '']" v-for="tab in tabs" :key="tab.id">
          <a :href="'#'+tab.id">
            {{ tab.label }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Themes } from '../models/models';
import { TabsInterface } from '../models/models';

declare const chi: any;

@Component({})
export default class PageContentTabs extends Vue {
  @Prop() tabs?: TabsInterface[];

  theme: Themes = this.$store.state.themes.theme;
  chiTabs: any;

  mounted() {
    const chiTabs = document.getElementById('page-content-tabs');

    this.chiTabs = chi.tab(chiTabs);
  }
}
</script>

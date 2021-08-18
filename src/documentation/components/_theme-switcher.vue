<template>
  <div class="chi-dropdown">
    <button id="theme-switcher" class="-theme-switch chi-button -fluid chi-dropdown__trigger">
      <div class="chi-button__content -flex--column">
        <span class="-d--flex -w--100 -mr--0 -text--normal -text--sm"
          >Theme</span
        >
        <div class="-d--flex -w--100">
          <div class="-align-items--center -mr--1">
            <img
              class="-favicon"
              width="16"
              height="16"
              src="../assets/themes/lumen/images/favicon.svg"
            />
          </div>
          <div class="-theme-name">Lumen Enterprise Portal</div>
        </div>
      </div>
    </button>
    <div
      class="chi-dropdown__menu"
      x-placement="bottom-start">
      <a

        v-bind:class="[theme === 'centurylink' ? '-active' : '', 'theme-trigger-centurylink', 'chi-dropdown__menu-item']"
        href="#"
        @click="setTheme('centurylink')"
        ><img
          class="-mr--1"
          width="16"
          height="16"
          src="../assets/themes/centurylink/images/favicon.svg"
        />
        <div class="-theme-name">CenturyLink</div></a
      ><a
        v-bind:class="[theme === 'lumen' ? '-active' : '', 'theme-trigger-lumen', 'chi-dropdown__menu-item']"
        href="#"
        @click="setTheme('lumen')"
        ><img
          class="-mr--1"
          width="16"
          height="16"
          src="../assets/themes/lumen/images/favicon.svg"
        />
        <div class="-theme-name">Lumen</div></a
      ><a
        v-bind:class="[theme === 'portal' ? '-active' : '', 'theme-trigger-portal', 'chi-dropdown__menu-item']"
        href="#"
        @click="setTheme('portal')"
        ><img
          class="-mr--1"
          width="16"
          height="16"
          src="../assets/themes/lumen/images/favicon.svg"
        />
        <div class="-theme-name">Lumen Enterprise Portal</div></a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { getModule } from 'vuex-module-decorators';
import store, { STORE_KEY } from '../store/index';
import { Themes } from '../models/models';

declare const chi: any;

export default {
  created() {
    this.theme = this.$store.state.theme;
    this.storeModule = getModule(store, this.$store);
  },
  methods: {
    async setTheme(theme: Themes) {
      await this.storeModule.updateTheme(theme);
    },
  },
  mounted() {
    const themeSwitcher = document.getElementById('theme-switcher');

    chi.dropdown(themeSwitcher);
  },
};
</script>

<style>
</style>

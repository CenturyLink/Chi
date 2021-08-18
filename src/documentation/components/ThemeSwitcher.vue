<template>
  <div class="chi-dropdown -w--100">
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
              :src="'/themes/'+this.$store.state.themes.theme+'/images/favicon.svg'"
            />
          </div>
          <div class="-theme-name">{{themes[this.$store.state.themes.theme].label}}</div>
        </div>
      </div>
    </button>
    <div
      class="chi-dropdown__menu"
      x-placement="bottom-start">
      <a

        v-bind:class="[this.$store.state.themes.theme === 'centurylink' ? '-active' : '', 'theme-trigger-centurylink', 'chi-dropdown__menu-item']"
        href="#"
        @click="setTheme('centurylink')"
        ><img
          class="-mr--1"
          width="16"
          height="16"
          src="/themes/centurylink/images/favicon.svg"
        />
        <div class="-theme-name">CenturyLink</div></a
      ><a
        v-bind:class="[this.$store.state.themes.theme === 'lumen' ? '-active' : '', 'theme-trigger-lumen', 'chi-dropdown__menu-item']"
        href="#"
        @click="setTheme('lumen')"
        ><img
          class="-mr--1"
          width="16"
          height="16"
          src="/themes/lumen/images/favicon.svg"
        />
        <div class="-theme-name">Lumen</div></a
      ><a
        v-bind:class="[this.$store.state.themes.theme === 'portal' ? '-active' : '', 'theme-trigger-portal', 'chi-dropdown__menu-item']"
        href="#"
        @click="setTheme('portal')"
        ><img
          class="-mr--1"
          width="16"
          height="16"
          src="/themes/lumen/images/favicon.svg"
        />
        <div class="-theme-name">Lumen Enterprise Portal</div></a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Themes } from '../models/models';
import { THEMES } from '../constants/constants';

declare const chi: any;

export default {
  created() {
    this.theme = this.$store.state.themes.theme;
    this.themes = THEMES;
  },
  methods: {
    setTheme(theme: Themes) {
      this.$store.commit('themes/set', theme);
      console.log(this.$store.state.themes.theme);
    },
  },
  mounted() {
    const themeSwitcher = document.getElementById('theme-switcher');

    chi.dropdown(themeSwitcher);
  },
};
</script>

<style></style>

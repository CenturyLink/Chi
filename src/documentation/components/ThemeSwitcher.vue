<template>
  <div class="chi-dropdown -w--100">
    <button
      ref="switcher"
      class="-theme-switch chi-button -fluid chi-dropdown__trigger"
    >
      <div class="chi-button__content -flex--column">
        <span class="-d--flex -w--100 -mr--0 -text--normal -text--sm"
          >Theme</span
        >
        <div class="-d--flex -w--100">
          <div class="-align-items--center -mr--1">
            <nuxt-img
              class="-favicon"
              width="16"
              height="16"
              :src="
                `/themes/${getThemeSwitcherTriggerIcon()}/images/favicon.svg`
              "
            />
          </div>
          <div class="-theme-name">
            {{ themes[this.$store.state.themes.theme].label }}
          </div>
        </div>
      </div>
    </button>
    <div class="chi-dropdown__menu" x-placement="bottom-start">
      <a
        v-bind:class="[
          this.$store.state.themes.theme === 'centurylink' ? '-active' : '',
          'theme-trigger-centurylink',
          'chi-dropdown__menu-item'
        ]"
        @click="setTheme('centurylink')"
        ><nuxt-img
          class="-mr--1"
          width="16"
          height="16"
          :src="`/themes/centurylink/images/favicon.svg`"
        />
        <div class="-theme-name">CenturyLink</div></a
      ><a
        v-bind:class="[
          this.$store.state.themes.theme === 'lumen' ? '-active' : '',
          'theme-trigger-lumen',
          'chi-dropdown__menu-item'
        ]"
        @click="setTheme('lumen')"
        ><nuxt-img
          class="-mr--1"
          width="16"
          height="16"
          :src="`/themes/lumen/images/favicon.svg`"
        />
        <div class="-theme-name">Lumen</div></a
      ><a
        v-bind:class="[
          this.$store.state.themes.theme === 'portal' ? '-active' : '',
          'theme-trigger-portal',
          'chi-dropdown__menu-item'
        ]"
        @click="setTheme('portal')"
        ><nuxt-img
          class="-mr--1"
          width="16"
          height="16"
          :src="`/themes/lumen/images/favicon.svg`"
        />
        <div class="-theme-name">Lumen Enterprise Portal</div></a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Themes } from '../models/models';
import { THEMES } from '../constants/constants';
import { Component, Vue } from 'vue-property-decorator';
import { BASE_URL } from '../constants/constants';

declare const chi: any;
interface AssetToReplace {
  type: 'css' | 'docsCss';
  id: string;
}

@Component({
  data: () => {
    return {
      BASE_URL
    };
  }
})
export default class ThemeSwitcher extends Vue {
  themeSwitcherDropdown: any;
  themes = THEMES;

  getThemeSwitcherTriggerIcon() {
    const theme = this.$store.state.themes.theme;

    if (theme === 'portal') {
      return 'lumen';
    }

    return theme;
  }

  setTheme(theme: Themes): void {
    const brandLogo = document.getElementById('header-logo') as HTMLElement;
    const assetsToReplace: AssetToReplace[] = [
      { type: 'css', id: 'chi-css' },
      { type: 'docsCss', id: 'chi-docs-css' }
    ];

    assetsToReplace.forEach((asset: AssetToReplace) => {
      const currentAsset = document.getElementById(asset.id);
      const replacementAsset = document.createElement('LINK');
      const replacementHref = THEMES[theme][asset.type];

      if (currentAsset && replacementAsset) {
        replacementAsset.setAttribute('rel', 'stylesheet');
        replacementAsset.setAttribute('href', replacementHref);
        if (currentAsset.parentNode) {
          currentAsset.parentNode.insertBefore(
            replacementAsset,
            currentAsset.nextSibling
          );
        }
        replacementAsset.addEventListener('load', () => {
          replacementAsset.setAttribute('id', asset.id);
          currentAsset.remove();
        });
      }
    });
    brandLogo.setAttribute(
      'logo',
      theme === 'centurylink' ? 'centurylink' : 'lumen'
    );

    this.$store.commit('themes/set', theme);
  }

  mounted() {
    const themeSwitcherElement = this.$refs.switcher as HTMLElement;

    if (themeSwitcherElement) {
      this.themeSwitcherDropdown = chi.dropdown(themeSwitcherElement);
    }
  }

  beforeDestroy() {
    this.themeSwitcherDropdown.dispose();
  }
}
</script>

<style></style>

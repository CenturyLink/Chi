<template>
  <div class="chi-dropdown -w--100">
    <button ref="switcher" class="-theme-switch chi-button -fluid chi-dropdown__trigger">
      <div class="chi-button__content -flex--column">
        <span class="-d--flex -w--100 -mr--0 -text--normal -text--sm">Theme</span>
        <div class="-d--flex -w--100">
          <div class="-align-items--center -mr--1">
            <nuxt-img
              class="-favicon"
              width="16"
              height="16"
              :src="`/themes/${getThemeSwitcherTriggerIcon()}/images/favicon.svg`"
            />
          </div>
          <div class="-theme-name">
            {{ themeName }}
          </div>
        </div>
      </div>
    </button>
    <div class="chi-dropdown__menu" x-placement="bottom-start">
      <a
        v-bind:class="[
          selectedTheme === 'centurylink' ? '-active' : '',
          'theme-trigger-centurylink',
          'chi-dropdown__menu-item',
        ]"
        @click="setTheme('centurylink')"
        ><nuxt-img class="-mr--1" width="16" height="16" :src="`/themes/centurylink/images/favicon.svg`" />
        <div class="-theme-name">CenturyLink</div></a
      ><a
        v-bind:class="[selectedTheme === 'lumen' ? '-active' : '', 'theme-trigger-lumen', 'chi-dropdown__menu-item']"
        @click="setTheme('lumen')"
        ><nuxt-img class="-mr--1" width="16" height="16" :src="`/themes/lumen/images/favicon.svg`" />
        <div class="-theme-name">Lumen</div></a
      ><a
        v-bind:class="[selectedTheme === 'portal' ? '-active' : '', 'theme-trigger-portal', 'chi-dropdown__menu-item']"
        @click="setTheme('portal')"
        ><nuxt-img class="-mr--1" width="16" height="16" :src="`/themes/lumen/images/favicon.svg`" />
        <div class="-theme-name">Lumen Enterprise Portal</div></a
      ><a
        v-bind:class="[selectedTheme === 'lumenrebrand24' ? '-active' : '', 'theme-trigger-lumenrebrand24', 'chi-dropdown__menu-item']"
        @click="setTheme('lumenrebrand24')"
        ><nuxt-img class="-mr--1" width="16" height="16" :src="`/themes/lumen/images/favicon.svg`" />
        <div class="-theme-name">Lumen Rebrand24</div></a
      ><a
        v-bind:class="[selectedTheme === 'portalrebrand24' ? '-active' : '', 'theme-trigger-portalrebrand24', 'chi-dropdown__menu-item']"
        @click="setTheme('portalrebrand24')"
        ><nuxt-img class="-mr--1" width="16" height="16" :src="`/themes/lumen/images/favicon.svg`" />
        <div class="-theme-name">Portal Rebrand24</div></a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { type Themes } from '@/models/models';
import { THEMES } from '@/constants/constants';
import { Vue } from 'vue-facing-decorator';
import { TEMP_DEVELOPMENT_FALLBACK_URL } from '@/constants/constants';
import { capitalize } from '@/utilities/utilities';

declare const chi: any;
interface AssetToReplace {
  type: 'css' | 'docsCss';
  id: string;
}

@NuxtComponent({})
export default class ThemeSwitcher extends Vue {
  themeSwitcherDropdown: any;
  selectedTheme = useSelectedTheme();

  getThemeSwitcherTriggerIcon() {
    const excludedThemes = ['portal', 'lumenrebrand24', 'portalrebrand24', 'colt', 'brightspeed'];

    return excludedThemes.includes(this.selectedTheme) ? 'lumen' : this.selectedTheme;
  }

  get themeName() {
    const excludedThemes = ['colt', 'brightspeed'];

    return excludedThemes.includes(this.selectedTheme)
      ? 'Lumen'
      : THEMES[this.selectedTheme as keyof typeof THEMES].label || 'Lumen';
  }

  setTheme(theme: Themes): void {
    const brandLogo = document.getElementById('header-logo') as HTMLElement;
    const assetsToReplace: AssetToReplace[] = [
      { type: 'css', id: 'chi-css' },
      { type: 'docsCss', id: 'chi-docs-css' },
    ];

    assetsToReplace.forEach((asset: AssetToReplace) => {
      const currentAsset = document.getElementById(asset.id);
      const replacementAsset = document.createElement('LINK');
      const replacementHref = `${TEMP_DEVELOPMENT_FALLBACK_URL}/${THEMES[theme][asset.type]}`;

      if (currentAsset && replacementAsset) {
        replacementAsset.setAttribute('rel', 'stylesheet');
        replacementAsset.setAttribute('href', replacementHref);
        if (currentAsset.parentNode) {
          currentAsset.parentNode.insertBefore(replacementAsset, currentAsset.nextSibling);
        }
        replacementAsset.addEventListener('load', () => {
          replacementAsset.setAttribute('id', asset.id);
          currentAsset.remove();
        });
      }
    });

    brandLogo.setAttribute('logo', theme === 'centurylink' ? 'centurylink' : 'lumen');

    this.selectedTheme = theme;
    this.setUrlTheme(theme);
  }

  mounted() {
    const themeSwitcherElement = this.$refs.switcher as HTMLElement;

    if (themeSwitcherElement) {
      this.themeSwitcherDropdown = chi.dropdown(themeSwitcherElement);
    }

    this.setThemeFromUrl();
  }

  getUrlTheme() {
    return useRoute().query?.theme?.toString() || '';
  }

  setThemeFromUrl() {
    const theme = this.getUrlTheme()?.toLowerCase();
    const isValidTheme = Object.keys(THEMES).includes(theme);

    if (isValidTheme) {
      this.setTheme(theme as Themes);
    }
  }

  async setUrlTheme(newTheme: string) {
    const urlTheme = this.getUrlTheme();
    if (newTheme !== urlTheme) {
      const queryTheme = newTheme === 'centurylink' ? 'CenturyLink' : capitalize(newTheme);
      await navigateTo({
        path: useRoute().path,
        query: {
          theme: queryTheme,
        },
      });
    }
  }

  beforeDestroy() {
    this.themeSwitcherDropdown.dispose();
  }
}
</script>

<style></style>

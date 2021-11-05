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
            <img
              class="-favicon"
              width="16"
              height="16"
              :src="
                '/themes/' +
                  this.$store.state.themes.theme +
                  '/images/favicon.svg'
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
        v-bind:class="[
          this.$store.state.themes.theme === 'lumen' ? '-active' : '',
          'theme-trigger-lumen',
          'chi-dropdown__menu-item'
        ]"
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
        v-bind:class="[
          this.$store.state.themes.theme === 'portal' ? '-active' : '',
          'theme-trigger-portal',
          'chi-dropdown__menu-item'
        ]"
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
import { THEMES, defaultCss, defaultDocsCss } from '../constants/constants';
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;
interface AssetsToReplace {
  type: 'css' | 'docsCss';
  id: string;
}

@Component({
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          id: 'chi-css',
          type: 'text/css',
          href: defaultCss
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          id: 'chi-docs-css',
          href: defaultDocsCss
        },
      ],
    }
  }
})
export default class ThemeSwitcher extends Vue {
  themes = THEMES;

  setTheme(theme: Themes): void {
    const brandLogo = document.getElementById('header-logo') as any;
    const assetsToReplace : AssetsToReplace[] = [{type: 'css', id: 'chi-css'}, {type: 'docsCss', id: 'chi-docs-css'}];

    assetsToReplace.forEach((asset: { type: 'css' | 'docsCss', id: string }) => {
      const currentAsset = document.getElementById(asset.id);
      const replacementAsset = document.createElement('LINK');
      const replacementHref = THEMES[theme][asset.type];

      if (currentAsset && replacementAsset) {
        replacementAsset.setAttribute('rel', 'stylesheet');
        replacementAsset.setAttribute('href', replacementHref);
        if (currentAsset.parentNode) {
          currentAsset.parentNode
            .insertBefore(replacementAsset, currentAsset.nextSibling);
        }
        replacementAsset.addEventListener('load', function() {
          replacementAsset.setAttribute('id', asset.id);
          currentAsset.remove();
        });
      }
    });
    brandLogo.logo = theme === 'centurylink' ? 'centurylink' : 'lumen';
    this.$store.commit('themes/set', theme);
  }

  mounted() {
    const themeSwitcherElement = this.$refs.switcher as HTMLElement;

    chi.dropdown(themeSwitcherElement);
  }
}
</script>

<style></style>

<template lang="pug">
  <ComponentExample title="Neutral" titleSize="h2" id="neutral" padding="-p--0" :showSnippetTabs="false" additionalStyle="border: 0;">
    div(slot="example" v-if="color")
      .chi-grid(v-for="grid in color?.neutral")
        .chi-col.-w-sm--12.-w-md--6.-w-lg--3.-mb--3(v-for="col in grid")
          .palette-container
            .palette.-p--2.chi-grid.-no-gutter.-text(:style="`background-color:${col.code};`" :class="col.class || '-text--body'")
              .chi-col.-w--12
                .-text--bold {{ col.text }}
              .chi-col.-w--6.-text--sm
                code.-bg--none.-text--inherit.-p--0 {{ col.code }}
              .chi-col.-w--6.-text--right.-text--sm
                .a11y {{ col.a11y }}
          p.-text--sm.-mb--0 {{ col.description }}
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IThemes } from '~/models/models';
import { colors } from '~/fixtures/fixtures';

@Component({})
export default class Neutral extends Vue {
  get theme() {
    return this.$store.state.themes.theme;
  }

  get color() {
    return colors[this.theme as keyof IThemes];
  }
}
</script>

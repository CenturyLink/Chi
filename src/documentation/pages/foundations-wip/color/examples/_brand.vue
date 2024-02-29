<template lang="pug">
<ComponentExample title="Brand" id="brand" titleSize="h3" padding="-p--0" :showSnippetTabs="false" additionalStyle="border: 0;">
  template(#example v-if="color")
    .chi-grid
      .chi-col.-w-sm--12.-w-md--6.-w-lg--6.-mb--3(v-for="mainColor in color.brand.main")
        <TitleAnchor :title="mainColor.title" :id="mainColor.id" titleSize="h4" />
        .palette-container
          .palette.-p--2.chi-grid.-no-gutter.-text.-pt--10(:style="`background-color:${mainColor.code};`" :class="mainColor.class || '-text--body'")
            .chi-col.-w--12
              .-text--bold {{ mainColor.text }}
            .chi-col.-w--6.-text--sm
              code.-bg--none.-text--inherit.-p--0 {{ mainColor.code }}
            .chi-col.-w--6.-text--right.-text--sm
              .a11y {{ mainColor.a11y }}
    .chi-grid
      .chi-col.-w--12
        <TitleAnchor title="Supporting Colors" id="supporting-colors" titleSize="h4" />
      .chi-col.-w-sm--12.-w-md--6.-mb--3(v-for="supportingColor in color.brand.supporting" :class="supportingColor.wrapperClass || '-w-lg--3'")
        .palette-container
          .palette.-p--2.chi-grid.-no-gutter.-text.-text--black(:style="`background-color:${supportingColor.code};`" :class="supportingColor.class")
            .chi-col.-w--12
              .-text--bold {{ supportingColor.text }}
            .chi-col.-w--6.-text--sm
              code.-bg--none.-text--inherit.-p--0 {{ supportingColor.code }}
            .chi-col.-w--6.-text--right.-text--sm
              .a11y {{ supportingColor.a11y }}
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type IThemes } from '~/models/models';
import { colors } from '~/fixtures/fixtures';

@NuxtComponent({})
export default class Brand extends Vue {
  theme = useSelectedTheme();

  get color() {
    return colors[this.theme as keyof IThemes];
  }
}
</script>

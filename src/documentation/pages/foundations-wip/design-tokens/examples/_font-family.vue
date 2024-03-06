<template lang="pug">
<TitleAnchor title="Font" id="font" titleSize="h2" />
<TitleAnchor title="Font family" id="font-family" />
<TableComponent :data="fontFamily" :columns="columns" :getContent="getContent" additionalClasses="-xs -mt--2 -mb--4 -lumen--show" />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';

const monoFamily = { name: 'mono', value: "Menlo, Consolas, 'Liberation Mono', Courier, monospace" };

@NuxtComponent({})
export default class FontFamily extends Vue {
  columns = [
    {
      title: 'Token',
      key: 'token',
      width: '35%',
    },
    {
      title: 'Value',
      key: 'value',
      width: '45%',
    },
    {
      title: 'Example',
      key: 'example',
      width: '20%',
    },
  ];
  lumenFontFamily = [{ name: 'base', value: "'Gotham', Arial, Helvetica, Verdana, sans-serif" }, monoFamily];

  centurylinkFontFamily = [{ name: 'base', value: "'Maison Neue', Arial, Helvetica, Verdana, sans-serif" }, monoFamily];

  portalFontFamily = [{ name: 'base', value: "'Inter', Arial, Helvetica, Verdana, sans-serif" }, monoFamily];

  theme = useSelectedTheme();

  get fontFamily() {
    if (this.theme === 'centurylink') {
      return this.centurylinkFontFamily;
    } else if (this.theme === 'lumen') {
      return this.portalFontFamily;
    }
    return this.lumenFontFamily;
  }

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'token':
        return `<code>$font-family-${content.name}</code>`;
      case 'value':
        return `<div class="-text">${content.value}</div>`;
      case 'example':
        return `<div class="-text --lg -lh--2" style="${
          content.name === 'mono' ? "font-family: Menlo, Consolas, 'Liberation Mono', Courier, monospace;" : ''
        }">Aa</div>`;
      default:
        return '';
    }
  }
}
</script>

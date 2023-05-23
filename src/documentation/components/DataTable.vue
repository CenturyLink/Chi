<template>
  <section :class="['chi-table -bordered', additionalClasses]">
    <table class="-text">
      <thead>
      <tr>
        <th v-for="column in tableColumns">{{ column.title }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="content in data">
        <td v-for="column in tableColumns" :style="`width: ${column.width}`">
          <span v-html="generateContent(column, content)" />
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ITableColumn, ITableContent } from '~/models/models';

@Component({})
export default class CustomTable extends Vue {
  @Prop() columns?: ITableColumn[];
  @Prop({ default: [] }) data!: any[];
  @Prop() getContent?: Function;
  @Prop({ default: '-mt--3 -mb--3' }) additionalClasses?: string;
  @Prop() title?: string;

  get basicColumns() {
    return [
      {
        title: this.title ? this.title : 'Class',
        key: 'class',
        width: '25%'
      },
      {
        title: 'Value',
        key: 'value',
        width: '35%'
      },
      {
        title: 'Result',
        key: 'result',
        width: ''
      }
    ]
  }

  get tableColumns() {
    return this.columns ? this.columns : this.basicColumns;
  }

  generateBasicContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'class':
        return `<code>-bg--${content.name}</code>`;
      case 'value':
        return `<code>background-color: ${content.value}</code>`;
      case 'result':
        return `<div class="-text -b--1" style="background-color:${content.value}; height:15px;"></div>`;
      default:
        return '';
    }
  }

  generateContent(column: ITableColumn, content: ITableContent) {
    if (this.getContent) {
      return this.getContent(column, content);
    } else {
      return this.generateBasicContent(column, content);
    }
  }
}
</script>

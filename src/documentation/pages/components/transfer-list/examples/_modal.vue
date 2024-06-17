<template lang="pug">
  ComponentExample(
    title="Modal"
    id="modal"
    :tabs="exampleTabs"
    additionalStyle="position: static;"
  )
    template(#example)
      div.-d--flex
        ChiTransferList(
          :transferListData="transferListData"
          :config="config"
          modal
        )
    template(#code-vue)
      Copy(lang="html" :code="codeSnippets.vue")
  </template>
  
  <script lang="ts">
  import { Vue } from 'vue-facing-decorator';

  @NuxtComponent({})
  export default class Modal extends Vue {
    exampleTabs = [
      {
        active: false,
        id: 'webcomponent',
        label: 'Web Component',
        disabled: true,
      },
      {
        active: true,
        id: 'vue',
        label: 'Vue',
      },
      {
        active: false,
        id: 'htmlblueprint',
        label: 'HTML Blueprint',
        disabled: true,
      },
    ];
    transferListData = [
      {
        value: 'first',
        label: 'First',
        selected: false,
        locked: false,
        wildcard: false,
      },
      {
        value: 'second',
        label: 'Second',
        selected: false,
        locked: false,
        wildcard: false,
      },
      {
        value: 'third',
        label: 'Third',
        selected: true,
        locked: true,
        wildcard: false,
      },
      {
        value: 'fourth',
        label: 'Fourth',
        selected: true,
        locked: true,
        wildcard: false,
      },
      {
        value: 'fifth',
        label: 'Fifth',
        selected: true,
        locked: false,
        wildcard: false,
      },
      {
        value: 'sixth',
        label: 'Sixth',
        selected: true,
        locked: false,
        wildcard: true,
      },
      {
        value: 'seventh',
        label: 'Seventh',
        selected: true,
        locked: false,
        wildcard: true,
      },
    ];
    config = {
      searchInput: true,
      checkbox: false,
      columns: {
        from: {
          title: 'From',
          description: 'Description from',
        },
        to: {
          title: 'To',
          description: 'Description to',
        },
      },
    };
    codeSnippets = {
      vue: `<!-- Vue component -->
<ChiTransferList
  :transferListData="list"
  :config="config"
  modal
/>

<!-- Config and Data -->
data: {
  config: {
    searchInput: true,
    checkbox: false,
    columns: {
      from: {
        title: 'From',
        description: 'Description from',
      },
      to: {
        title: 'To',
        description: 'Description to',
      },
    },
  },
  list: [
    {
      value: 'first',
      label: 'First',
      selected: false,
      locked: false,
      wildcard: false,
    },
    {
      value: 'second',
      label: 'Second',
      selected: false,
      locked: false,
      wildcard: false,
    },
    {
      value: 'third',
      label: 'Third',
      selected: true,
      locked: true,
      wildcard: false,
    },
    {
      value: 'fourth',
      label: 'Fourth',
      selected: true,
      locked: true,
      wildcard: false,
    },
    {
      value: 'fifth',
      label: 'Fifth',
      selected: true,
      locked: false,
      wildcard: false,
    },
    {
      value: 'sixth',
      label: 'Sixth',
      selected: true,
      locked: false,
      wildcard: true,
    },
    {
      value: 'seventh',
      label: 'Seventh',
      selected: true,
      locked: false,
      wildcard: true,
    },
  ]
}`,
      webcomponent: ``,
    };
  }
  </script>
  
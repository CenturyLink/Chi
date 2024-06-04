<template lang="pug">
  ComponentExample(title="Modal" id="modal" :tabs="exampleTabs")
    template(#example)
      .-p--0
        .-d--flex.-justify-content--start.-align-items--start
          button#modal-trigger-1.chi-button.-primary.chi-modal__trigger(data-target='#modal-1' ref="baseModal")
            | Click me to open the modal
      .chi-backdrop.-center.-closed
        .chi-backdrop__wrapper
          section.chi-modal#modal-1(role="dialog", aria-label="Modal description", aria-modal="true")
            header.chi-modal__header
              h2.chi-modal__title Modal Transfer List
              button(class='chi-button -icon -close', data-dismiss='modal', aria-label='Close')
                .chi-button__content
                  i.chi-icon.icon-x(aria-hidden="true")
            .chi-modal__content
              ChiTransferList(:transferListData='transferListData', :config='config')
    template(#code-vue)
      Copy(lang="html" :code="codeSnippets.vue")
  </template>
  
  <script lang="ts">
  import { Vue } from 'vue-facing-decorator';
  
  declare const chi: any;

  @NuxtComponent({})
  export default class Base extends Vue {
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
      vue: `<!-- Trigger -->
<button id="modal-trigger-1" class="chi-button -primary chi-modal__trigger" data-target="#modal-1">
  Click me to open the modal
</button>

<!-- Modal -->
<div class="chi-backdrop -center -closed">
  <div class="chi-backdrop__wrapper">
    <section id="modal-1" class="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
      <header class="chi-modal__header">
        <h2 class="chi-modal__title">Modal Transfer List</h2>
        <button class="chi-button -icon -close" data-dismiss="modal" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </header>
      <div class="chi-modal__content">
        <ChiTransferList
          :transferListData="list"
          :config="config"
        />
      </div>
    </section>
  </div>
</div>

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
}

<!-- Initialization -->
onMounted(() => {
  chi.modal(document.getElementById('modal-trigger-1'));
});`,
      webcomponent: ``,
    };
    modal: any;

    mounted() {
      this.modal = chi.modal(this.$refs.baseModal as HTMLElement);
    }

    beforeDestroy() {
      this.modal.dispose();
    }
  }
  </script>
  
<template lang="pug">
<ComponentExample title="Selectable" id="selectable-portal" :tabs="exampleTabs">
  template(#example)
    table.chi-table.-portal
      thead
        tr
          th
            .chi-checkbox
              input#portal-chk-1.chi-checkbox__input(type='checkbox')
              label.chi-checkbox__label(for='portal-chk-1')
                .-sr--only Label
          th.-sorted.-ascending
            div Name
          th ID
          th Last Login
      tbody
        tr(v-for="(row, index) in rows" :key="index" :class="{'-active': index === 0}")
          td
            .chi-checkbox
              input.chi-checkbox__input(type='checkbox', :checked="index === 0" :id="`portal-chk-1-0${index}`")
              label.chi-checkbox__label(:for="`portal-chk-1-0${index}`")
                .-sr--only Label
          td {{ row.cell1 }}
          td {{ row.cell2 }}
          td {{ row.cell3 }}
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      rows: [
        { cell1: 'Name 1', cell2: 'name-1', cell3: 'Dec 18, 2020 3:26 PM' },
        { cell1: 'Name 2', cell2: 'name-2', cell3: 'Dec 18, 2020 2:38 AM' },
        { cell1: 'Name 3', cell2: 'name-3', cell3: 'Nov 5, 2020 10:15 AM' },
      ],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<table class="chi-table -portal">
  <thead>
      <tr>
          <th>
            <div class="chi-checkbox">
              <input class="chi-checkbox__input" type="checkbox" id="portal-chk-1" />
              <label class="chi-checkbox__label" for="portal-chk-1">
                <div class="-sr--only">Label</div>
              </label>
            </div>
          </th>
          <th class="-sorted -ascending">
              <div>Name</div>
          </th>
          <th>ID</th>
          <th>Last Login</th>
      </tr>
  </thead>
  <tbody>
      <tr class="-active">
          <td>
            <div class="chi-checkbox">
              <input class="chi-checkbox__input" type="checkbox" id="portal-chk-1-01" checked="checked" />
              <label class="chi-checkbox__label" for="portal-chk-1-01">
                <div class="-sr--only">Label</div>
              </label>
            </div>
          </td>
          <td>Name 1</td>
          <td>name-1</td>
          <td>Dec 18, 2020 3:26 PM</td>
      </tr>
      <tr>
          <td>
            <div class="chi-checkbox">
              <input class="chi-checkbox__input" type="checkbox" id="portal-chk-1-02" />
              <label class="chi-checkbox__label" for="portal-chk-1-02">
                <div class="-sr--only">Label</div>
              </label>
            </div>
          </td>
          <td>Name 2</td>
          <td>name-2</td>
          <td>Dec 18, 2020 2:38 AM</td>
      </tr>
      <tr>
          <td>
            <div class="chi-checkbox">
              <input class="chi-checkbox__input" type="checkbox" id="portal-chk-1-03" />
              <label class="chi-checkbox__label" for="portal-chk-1-03">
                  <div class="-sr--only">Label</div>
              </label>
            </div>
          </td>
          <td>Name 3</td>
          <td>name-3</td>
          <td>Nov 5, 2020 10:15 AM</td>
      </tr>
  </tbody>
</table>`,
      },
    };
  },
})
export default class SelectablePortal extends Vue {}
</script>

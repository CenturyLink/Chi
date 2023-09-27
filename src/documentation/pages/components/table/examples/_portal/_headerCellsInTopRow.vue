<template lang="pug">
  <ComponentExample title="Table with header cells in the top row and first column" id="header-cells-in-top-row-portal" :tabs="exampleTabs">
    .chi-card(slot="example")
      .chi-card__header
        .chi-card__title Title
      .chi-card__content.-p--0
        .-p--2
          .chi-picker-group
            .chi-picker-group__content
              input#unique-id-ba1.chi-picker__input(type='radio', name='unique-name-ba', checked='checked')
              label(for='unique-id-ba1') Option 1
              input#unique-id-ba2.chi-picker__input(type='radio', name='unique-name-ba')
              label(for='unique-id-ba2') Option 2
              input#unique-id-ba3.chi-picker__input(type='radio', name='unique-name-ba')
              label(for='unique-id-ba3') Option 3
        .-overflow--auto
          table.chi-table.-bordered.-striped.-xs.-text--center
            tbody
              tr
                td.-th
                th(scope='col' v-for="(header, index) in headers" :key="index") {{ header }}
              tr
                th(scope='row') ABQ1
                td(v-for="(header, index) in headers" :key="index" :class="{'-bg--info-light': index === 0}") 52
              tr
                th(scope='row') ABY1
                td(v-for="(header, index) in 11" :key="index") 42
              tr
                th(scope='row') AKN4
                td(v-for="(header, index) in 11" :key="index") 127
              tr
                th(scope='row') ANT1
                td(v-for="(header, index) in 11" :key="index" :class="{'-bg--danger-lighter -b--1 -b--danger': index === 3}") {{ index === 3 ? '52' : '21' }}
              tr
                th(scope='row') ANT2
                td(v-for="(header, index) in 11" :key="index" :class="{'-bg--warning-lighter -b--1 -b--warning': index === 9}") {{ index === 9 ? '180' : '136' }}
              tr
                th(scope='row') ATL12
                td(v-for="(header, index) in 11" :key="index") 164
              tr
                th(scope='row') ATL14
                td(v-for="(header, index) in 11" :key="index") 52
              tr
                th(scope='row') AUS1
                td(v-for="(header, index) in 11" :key="index") 52
              tr
                th(scope='row') AUS3
                td(v-for="(header, index) in 11" :key="index") 32
              tr
                th(scope='row') BCH1
                td(v-for="(header, index) in 11" :key="index") 21
              tr
                th(scope='row') BER1
                td(v-for="(header, index) in 11" :key="index") 31
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre> 
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      headers: [
        'ABY1',
        'AKN4',
        'ANT1',
        'ANT2',
        'ATL12',
        'ATL14',
        'AUS1',
        'AUS1',
        'AUS3',
        'BCH1',
        'BER1'
      ],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-card">
    <div class="chi-card__header">
        <div class="chi-card__title">Title</div>
    </div>
    <div class="chi-card__content -p--0">
        <div class="-p--2">
            <div class="chi-picker-group">
                <div class="chi-picker-group__content"><input class="chi-picker__input" id="unique-id-ba1" type="radio" name="unique-name-ba" checked="checked" /><label for="unique-id-ba1">Option 1</label><input class="chi-picker__input" id="unique-id-ba2" type="radio" name="unique-name-ba" /><label for="unique-id-ba2">Option 2</label><input class="chi-picker__input" id="unique-id-ba3" type="radio" name="unique-name-ba" /><label for="unique-id-ba3">Option 3</label></div>
            </div>
        </div>
        <div class="-overflow--auto">
            <table class="chi-table -bordered -striped -xs -text--center">
                <tbody>
                    <tr>
                        <td class="-th"></td>
                        <th scope="col">ABQ1</th>
                        <th scope="col">ABY1</th>
                        <th scope="col">AKN4</th>
                        <th scope="col">ANT1</th>
                        <th scope="col">ANT2</th>
                        <th scope="col">ATL12</th>
                        <th scope="col">ATL14</th>
                        <th scope="col">AUS1</th>
                        <th scope="col">AUS3</th>
                        <th scope="col">BCH1</th>
                        <th scope="col">BER1</th>
                    </tr>
                    <tr>
                        <th scope="row">ABQ1</th>
                        <td class="-bg--info-light">52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                    </tr>
                    <tr>
                        <th scope="row">ABY1</th>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                    </tr>
                    <tr>
                        <th scope="row">AKN4</th>
                        <td>127</td>
                        <td>127</td>
                        <td>127</td>
                        <td>127</td>
                        <td>127</td>
                        <td>127</td>
                        <td>127</td>
                        <td>127</td>
                        <td>127</td>
                        <td>127</td>
                        <td>127</td>
                    </tr>
                    <tr>
                        <th scope="row">ANT1</th>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td class="-bg--danger-lighter -b--1 -b--danger">52</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <th scope="row">ANT2</th>
                        <td>136</td>
                        <td>136</td>
                        <td>136</td>
                        <td>136</td>
                        <td>136</td>
                        <td>136</td>
                        <td>136</td>
                        <td>136</td>
                        <td>136</td>
                        <td class="-bg--warning-lighter -b--1 -b--warning">180</td>
                        <td>136</td>
                    </tr>
                    <tr>
                        <th scope="row">ATL12</th>
                        <td>164</td>
                        <td>164</td>
                        <td>164</td>
                        <td>164</td>
                        <td>164</td>
                        <td>164</td>
                        <td>164</td>
                        <td>164</td>
                        <td>164</td>
                        <td>164</td>
                        <td>164</td>
                    </tr>
                    <tr>
                        <th scope="row">ATL14</th>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                    </tr>
                    <tr>
                        <th scope="row">AUS1</th>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                        <td>52</td>
                    </tr>
                    <tr>
                        <th scope="row">AUS3</th>
                        <td>32</td>
                        <td>32</td>
                        <td>32</td>
                        <td>32</td>
                        <td>32</td>
                        <td>32</td>
                        <td>32</td>
                        <td>32</td>
                        <td>32</td>
                        <td>32</td>
                        <td>32</td>
                    </tr>
                    <tr>
                        <th scope="row">BCH1</th>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <th scope="row">BER1</th>
                        <td>31</td>
                        <td>31</td>
                        <td>31</td>
                        <td>31</td>
                        <td>31</td>
                        <td>31</td>
                        <td>31</td>
                        <td>31</td>
                        <td>31</td>
                        <td>31</td>
                        <td>31</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`
      }
    };
  }
})
export default class HeaderCellsInTopRowPortal extends Vue {}
</script>

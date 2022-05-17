<template lang="pug">
  ComponentExample(title="Special display classes" :id="id" :padding="'-p--0'" :noExample="true")
    template(slot="no-example")
      p.-text To target screen readers only or a specific media type (@media screen or @media print), use the below classes.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
        template(v-for="body, index in table.body")
          .-text(v-if="body.data[0] === '-sr--only'" :slot="`customCell-${index}-1`") Screen reader only
          .-text(v-else-if="body.data[0] === '-d-screen--only'" :slot="`customCell-${index}-1`") <code>display: block;</code> on @media screen, <code>display: none;</code> on @media print.
          .-text(v-else :slot="`customCell-${index}-1`") <code>display: none;</code> on @media screen, <code>display: block;</code> on @media print.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'special-display-classes-notation',
      table: {
        head: ['Display Class', 'Value'],
        body: [
          { data: ['-sr--only'] },
          { data: ['-d-screen--only'] },
          { data: ['-d-print--only'] }
        ],
        config: {
          cells: [{ hasCode: true, width: '40%' }, { hasCode: false }]
        }
      }
    };
  }
})
export default class SpecialDisplayClasses extends Vue {}
</script>

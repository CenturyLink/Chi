<template lang="pug">
<ComponentExample title="Base" id="base" padding="-p--0" :tabs="exampleTabs">
  template(#example)
    .-p-md--5
      .chi-activity
        .chi-activity__day
          .chi-activity__header
            | Monday, Apr 22 2019
          .chi-activity__content
            .chi-activity__item
              .chi-activity__start
                div
                  | 2:50 PM
              .chi-activity__end
                .chi-activity__end-header
                  |  Password change for user trent.anderson
                .chi-activity__end-footer
                  | Admin
            .chi-activity__item
              .chi-activity__start
                div
                  | 2:38 PM
              .chi-activity__end
                .chi-activity__end-header
                  |  Password change for user trent.anderson
                .chi-activity__end-footer
                  | Admin
            .chi-activity__item
              .chi-activity__start
                div
                  | 11:37 PM
              .chi-activity__end
                .chi-activity__end-header
                  |  Password change for user trent.anderson
                .chi-activity__end-footer
                  | Admin
        .chi-activity__day
          .chi-activity__header
            | Monday, Apr 21 2019
          .chi-activity__content
            .chi-activity__item
              .chi-activity__start
                div
                  | 5:00 PM
              .chi-activity__end
                .chi-activity__end-header
                  |  Password change for user trent.anderson
                .chi-activity__end-footer
                  | Admin
            .chi-activity__item
              .chi-activity__start
                div
                  | 5:00 PM
              .chi-activity__end
                .chi-activity__end-header
                  |  Password change for user trent.anderson
                .chi-activity__end-footer
                  | Admin
            .chi-activity__item
              .chi-activity__start
                div
                  | 11:20 AM
              .chi-activity__end
                .chi-activity__end-header
                  |  Password change for user trent.anderson
                .chi-activity__end-footer
                  | Admin
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class BaseActivity extends Vue {
  exampleTabs = [
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
  ];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-activity">
  <div class="chi-activity__day">
    <div class="chi-activity__header">Monday, Apr 22 2019</div>
    <div class="chi-activity__content">
      <div class="chi-activity__item">
        <div class="chi-activity__start">
          <div>2:50 PM</div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header">Password change for user trent.anderson</div>
          <div class="chi-activity__end-footer">Admin</div>
        </div>
      </div>
      <div class="chi-activity__item">
        <div class="chi-activity__start">
          <div>2:38 PM</div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header">Password change for user trent.anderson</div>
          <div class="chi-activity__end-footer">Admin</div>
        </div>
      </div>
      <div class="chi-activity__item">
        <div class="chi-activity__start">
          <div>11:37 PM</div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header">Password change for user trent.anderson</div>
          <div class="chi-activity__end-footer">Admin</div>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-activity__day">
    <div class="chi-activity__header">Monday, Apr 21 2019</div>
    <div class="chi-activity__content">
      <div class="chi-activity__item">
        <div class="chi-activity__start">
          <div>5:00 PM</div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header">Password change for user trent.anderson</div>
          <div class="chi-activity__end-footer">Admin</div>
        </div>
      </div>
      <div class="chi-activity__item">
        <div class="chi-activity__start">
          <div>5:00 PM</div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header">Password change for user trent.anderson</div>
          <div class="chi-activity__end-footer">Admin</div>
        </div>
      </div>
      <div class="chi-activity__item">
        <div class="chi-activity__start">
          <div>11:20 AM</div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header">Password change for user trent.anderson</div>
          <div class="chi-activity__end-footer">Admin</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  };
}
</script>

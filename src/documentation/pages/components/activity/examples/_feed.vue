<template lang="pug">
<ComponentExample title="Feed" id="feed" padding="-p--0" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Apply the modifier class <code>-feed</code> to render with feed style
  template(#example)
    .-p-md--5
      .chi-activity.-feed
        .chi-activity__day
          .chi-activity__content
            .chi-activity__item
              .chi-activity__item-avatar
                .chi-avatar
                  img(src='../../../../assets/images/avatar.jpg', alt="avatar")
              .chi-activity__end
                .chi-activity__end-header
                  strong trent.anderson
                  |  deployed
                  strong  Active Directory
                .chi-activity__end-footer
                  | 04/22/2019 &#183; 2:50 PM
            .chi-activity__item
              .chi-activity__item-avatar
                .chi-avatar
                  img(src='../../../../assets/images/avatar.jpg', alt="avatar")
              .chi-activity__end
                .chi-activity__end-header
                  strong trent.anderson
                  |  deployed
                  strong  Active Directory
                .chi-activity__end-footer
                  | 04/22/2019 &#183; 2:38 PM
            .chi-activity__item
              .chi-activity__item-avatar
                .chi-avatar
                  img(src='../../../../assets/images/avatar.jpg', alt="avatar")
              .chi-activity__end
                .chi-activity__end-header
                  strong trent.anderson
                  |  deployed
                  strong  Active Directory
                .chi-activity__end-footer
                  | 04/22/2019 &#183; 2:37 PM
            .chi-activity__item
              .chi-activity__item-avatar
                .chi-avatar
                  img(src='../../../../assets/images/avatar.jpg', alt="avatar")
              .chi-activity__end
                .chi-activity__end-header
                  strong trent.anderson
                  |  deployed
                  strong  Active Directory
                .chi-activity__end-footer
                  | 04/16/2019 &#183; 5:00 PM
            .chi-activity__item
              .chi-activity__item-avatar
                .chi-avatar
                  img(src='../../../../assets/images/avatar.jpg', alt="avatar")
              .chi-activity__end
                .chi-activity__end-header
                  strong trent.anderson
                  |  deployed
                  strong  Active Directory
                .chi-activity__end-footer
                  | 04/16/2019 &#183; 5:00 PM
            .chi-activity__item
              .chi-activity__item-avatar
                .chi-avatar
                  img(src='../../../../assets/images/avatar.jpg', alt="avatar")
              .chi-activity__end
                .chi-activity__end-header
                  strong trent.anderson
                  |  deployed
                  strong  Active Directory
                .chi-activity__end-footer
                  | 04/16/2019 &#183; 11:20 AM
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Feed extends Vue {
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
    htmlblueprint: `<div class="chi-activity -feed">
  <div class="chi-activity__day">
    <div class="chi-activity__content">
      <div class="chi-activity__item">
        <div class="chi-activity__item-avatar">
          <div class="chi-avatar"><img src="../../assets/images/avatar.jpg" alt="avatar"></div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header"><strong>trent.anderson</strong> deployed<strong> Active Directory</strong>
          </div>
          <div class="chi-activity__end-footer">04/22/2019 &#183; 2:50 PM</div>
        </div>
      </div>
      <div class="chi-activity__item">
        <div class="chi-activity__item-avatar">
          <div class="chi-avatar"><img src="../../assets/images/avatar.jpg" alt="avatar"></div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header"><strong>trent.anderson</strong> deployed<strong> Active Directory</strong>
          </div>
          <div class="chi-activity__end-footer">04/22/2019 &#183; 2:38 PM</div>
        </div>
      </div>
      <div class="chi-activity__item">
        <div class="chi-activity__item-avatar">
          <div class="chi-avatar"><img src="../../assets/images/avatar.jpg" alt="avatar"></div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header"><strong>trent.anderson</strong> deployed<strong> Active Directory</strong>
          </div>
          <div class="chi-activity__end-footer">04/22/2019 &#183; 2:37 PM</div>
        </div>
      </div>
      <div class="chi-activity__item">
        <div class="chi-activity__item-avatar">
          <div class="chi-avatar"><img src="../../assets/images/avatar.jpg" alt="avatar"></div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header"><strong>trent.anderson</strong> deployed<strong> Active Directory</strong>
          </div>
          <div class="chi-activity__end-footer">04/16/2019 &#183; 5:00 PM</div>
        </div>
      </div>
      <div class="chi-activity__item">
        <div class="chi-activity__item-avatar">
          <div class="chi-avatar"><img src="../../assets/images/avatar.jpg" alt="avatar"></div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header"><strong>trent.anderson</strong> deployed<strong> Active Directory</strong>
          </div>
          <div class="chi-activity__end-footer">04/16/2019 &#183; 5:00 PM</div>
        </div>
      </div>
      <div class="chi-activity__item">
        <div class="chi-activity__item-avatar">
          <div class="chi-avatar"><img src="../../assets/images/avatar.jpg" alt="avatar"></div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header"><strong>trent.anderson</strong> deployed<strong> Active Directory</strong>
          </div>
          <div class="chi-activity__end-footer">04/16/2019 &#183; 11:20 AM</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  };
}
</script>

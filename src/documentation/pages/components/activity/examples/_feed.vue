<template lang="pug">
  <ComponentExample titleSize="h4" title="Feed" id="feed" padding="-p--0" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Apply the modifier class <code>-feed</code> to render with feed style
    .-p-md--5(slot="example")
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
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
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
      },
    };
  },
})
export default class Feed extends Vue {}
</script>

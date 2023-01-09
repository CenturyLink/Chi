<template lang="pug">
  <ComponentExample title="Feed with stories" id="feed-stories" padding="-p--0" :tabs="exampleTabs">
    .-p-md--5(slot="example")
      .chi-activity.-feed.-stories
        .chi-activity__day
          .chi-activity__content
            .chi-activity__item
              .chi-activity__start
                div
                  .chi-avatar
                    img(src='../../../../assets/images/avatar.jpg', alt="avatar")
              .chi-activity__end
                .chi-activity__end-header
                  strong trent.anderson
                  |  deployed
                  strong  Active Directory
                .chi-activity__end-content
                  ul
                    li
                      i.chi-icon.-icon--success.icon-check(aria-hidden="true")
                      div
                        div Instance successfully deployed
                        .-time  1 minute ago
                    li
                      i.chi-icon.-icon--success.icon-check(aria-hidden="true")
                      div
                        div Machine active-directory-vbo8o-1 successfully deployed
                        .-time 2 minutes ago
                    li
                      i.chi-icon.-icon--muted.icon-circle-plus-outline(aria-hidden="true")
                      div
                        div Executing install:Active Directory in machine active-directory-vbo8o-1
                        .-time 2 minutes ago
                    li
                      i.chi-icon.-icon--muted.icon-circle-plus-outline(aria-hidden="true")
                      div
                        div Updating machine IPs
                        .-time 3 minutes ago
                .chi-activity__end-footer
                  | 04/22/2019
        .chi-activity__day
          .chi-activity__content
            .chi-activity__item
              .chi-activity__start
                div
                  .chi-avatar
                    img(src='../../../../assets/images/avatar.jpg', alt="avatar")
              .chi-activity__end
                .chi-activity__end-header
                  strong trent.anderson
                  |  deployed
                  strong  Active Directory
                .chi-activity__end-content
                  ul
                    li
                      i.chi-icon.-icon--success.icon-check(aria-hidden="true")
                      div
                        div Instance successfully deployed
                        .-time 1 minute ago
                    li
                      i.chi-icon.-icon--success.icon-check(aria-hidden="true")
                      div
                        div Machine active-directory-vbo8o-1 successfully deployed
                        .-time 2 minutes ago
                    li
                      i.chi-icon.-icon--muted.icon-circle-plus-outline(aria-hidden="true")
                      div
                        div Executing install:Active Directory in machine active-directory-vbo8o-1
                        .-time 2 minutes ago
                    li
                      i.chi-icon.-icon--muted.icon-circle-plus-outline(aria-hidden="true")
                      div
                        div Updating machine IPs
                        .-time 3 minutes ago
                .chi-activity__end-footer
                  | 04/21/2019
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
    htmlblueprint: `<div class="chi-activity -feed -stories">
  <div class="chi-activity__day">
    <div class="chi-activity__content">
      <div class="chi-activity__item">
        <div class="chi-activity__start">
          <div>
            <div class="chi-avatar">
              <img src="../../assets/images/avatar.jpg" alt="avatar">
            </div>
          </div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header"><strong>trent.anderson</strong> deployed<strong> Active Directory</strong>
          </div>
          <div class="chi-activity__end-content">
            <ul>
              <li>
                <i class="chi-icon -icon--success icon-check" aria-hidden="true"></i>
                <div>
                  <div>Instance successfully deployed</div>
                  <div class="-time">1 minute ago</div>
                </div>
              </li>
              <li>
                <i class="chi-icon -icon--success icon-check" aria-hidden="true"></i>
                <div>
                  <div>Machine active-directory-vbo8o-1 successfully deployed</div>
                  <div class="-time">2 minutes ago</div>
                </div>
              </li>
              <li>
                <i class="chi-icon -icon--muted icon-circle-plus-outline" aria-hidden="true"></i>
                <div>
                  <div>Executing install:Active Directory in machine active-directory-vbo8o-1</div>
                  <div class="-time">2 minutes ago</div>
                </div>
              </li>
              <li>
                <i class="chi-icon -icon--muted icon-circle-plus-outline" aria-hidden="true"></i>
                <div>
                  <div>Updating machine IPs</div>
                  <div class="-time">3 minutes ago</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="chi-activity__end-footer">04/22/2019</div>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-activity__day">
    <div class="chi-activity__content">
      <div class="chi-activity__item">
        <div class="chi-activity__start">
          <div>
            <div class="chi-avatar">
              <img src="../../assets/images/avatar.jpg" alt="avatar">
            </div>
          </div>
        </div>
        <div class="chi-activity__end">
          <div class="chi-activity__end-header"><strong>trent.anderson</strong> deployed<strong> Active Directory</strong>
          </div>
          <div class="chi-activity__end-content">
            <ul>
              <li>
                <i class="chi-icon -icon--success icon-check" aria-hidden="true"></i>
                <div>
                  <div>Instance successfully deployed</div>
                  <div class="-time">1 minute ago</div>
                </div>
              </li>
              <li>
                <i class="chi-icon -icon--success icon-check" aria-hidden="true"></i>
                <div>
                  <div>Machine active-directory-vbo8o-1 successfully deployed</div>
                  <div class="-time">2 minutes ago</div>
                </div>
              </li>
              <li>
                <i class="chi-icon -icon--muted icon-circle-plus-outline" aria-hidden="true"></i>
                <div>
                  <div>Executing install:Active Directory in machine active-directory-vbo8o-1</div>
                  <div class="-time">2 minutes ago</div>
                </div>
              </li>
              <li>
                <i class="chi-icon -icon--muted icon-circle-plus-outline" aria-hidden="true"></i>
                <div>
                  <div>Updating machine IPs</div>
                  <div class="-time">3 minutes ago</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="chi-activity__end-footer">04/21/2019</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
      },
    };
  },
})
export default class FeedStories extends Vue {}
</script>

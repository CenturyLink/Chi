<template lang="pug">
  <ComponentExample title="Vertical Subtabs" id="vertical-subtabs-lumen-centurylink" padding="-p--0" :tabs="exampleTabs">
    .-p--3.-bg--grey-20(slot="example")
      .-bg--white.-p--3
        ul.chi-tabs.-vertical.-icons.-list
          li.-active
            a.chi-tabs_item(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span.chi-tabs_item-title Tab Link
              span.chi-tabs_item-text Tab description
          li
            a.chi-tabs_item(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span.chi-tabs_item-title Active Tab
              span.chi-tabs_item-text Tab description
            ul.chi-tabs__subtabs
              li
                a.chi-tabs_item(href='#')
                  span.chi-tabs_item-title Subtab Link
                  span.chi-tabs_item-text Subtab description
              li
                a.chi-tabs_item(href='#')
                  span.chi-tabs_item-title Subtab Link
                  span.chi-tabs_item-text Subtab description
              li
                a.chi-tabs_item(href='#')
                  span.chi-tabs_item-title Subtab Link
                  span.chi-tabs_item-text Subtab description
          li
            a.chi-tabs_item(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span.chi-tabs_item-title Tab Link
              span.chi-tabs_item-text Tab description
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
        htmlblueprint: `<ul class="chi-tabs -vertical -icons -list">
	<li class="-active">
		<a class="chi-tabs_item" href="#">
			<i class="chi-icon icon-atom" aria-hidden="true"></i>
			<span class="chi-tabs_item-title">Tab Link</span>
			<span class="chi-tabs_item-text">Tab description</span>
		</a>
	</li>
	<li>
		<a class="chi-tabs_item" href="#">
			<i class="chi-icon icon-atom" aria-hidden="true"></i>
			<span class="chi-tabs_item-title">Active Tab</span>
			<span class="chi-tabs_item-text">Tab description</span>
		</a>
		<ul class="chi-tabs__subtabs">
			<li>
				<a class="chi-tabs_item" href="#">
					<span class="chi-tabs_item-title">Subtab Link</span>
					<span class="chi-tabs_item-text">Subtab description</span>
				</a>
			</li>
			<li>
				<a class="chi-tabs_item" href="#">
					<span class="chi-tabs_item-title">Subtab Link</span>
					<span class="chi-tabs_item-text">Subtab description</span>
				</a>
			</li>
			<li>
				<a class="chi-tabs_item" href="#">
					<span class="chi-tabs_item-title">Subtab Link</span>
					<span class="chi-tabs_item-text">Subtab description</span>
				</a>
			</li>
		</ul>
	</li>
	<li>
		<a class="chi-tabs_item" href="#">
			<i class="chi-icon icon-atom" aria-hidden="true"></i>
			<span class="chi-tabs_item-title">Tab Link</span>
			<span class="chi-tabs_item-text">Tab description</span>
		</a>
	</li>
</ul>`,
      },
    };
  },
})
export default class VerticalSubtabsLumenCenturyLink extends Vue {}
</script>

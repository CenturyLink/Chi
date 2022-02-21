<template lang="pug">
  <ComponentExample title="Base with ribbon and bulk actions" id="base-with-ribbon-and-bulkactions-portal" additionalClasses="-position--relative" :tabs="exampleTabs">
    <Wrapper slot="example">
      .chi-toolbar
        .chi-toolbar__header
          .chi-toolbar__start
            .chi-toolbar__search
              .chi-form__item
                chi-search-input(id="example__base-4")
            .chi-divider.-vertical
            .chi-toolbar__views
              .chi-toolbar__views-desktop
                .chi-form__item
                  select(class="chi-select", id="example-views-4")
                    option(value="view-1") View 1
                    option(value="view-2") View 2
            .chi-divider.-vertical
            .chi-toolbar__filters
              .chi-toolbar__filters-desktop
                .chi-form__item(v-for="index in 2" :key="index")
                  select(class="chi-select")
                    option(value="") Select
                    option Option 1
                    option Option 2
                    option Option 3
                button.chi-button.-icon.-flat(id="button-pr-filters" aria-label="Filters" data-tooltip="Filters" data-position="top")
                  .chi-button__content
                    i.chi-icon.icon-filter(aria-hidden="true")
              .chi-toolbar__filters-mobile
                button#drawer-trigger-filter1.chi-button.-icon.-flat.chi-drawer__trigger(aria-label="Button action")
                  .chi-button__content
                    i.chi-icon.icon-filter(aria-hidden="true")
          .chi-toolbar__end
            .chi-toolbar__actions
              .chi-toolbar__actions-desktop
                button.chi-button.-icon.-flat(id="button-pr-download" aria-label="Download" data-tooltip="Download" data-position="top")
                  .chi-button__content
                    i.chi-icon.icon-arrow-to-bottom(aria-hidden="true")
                button.chi-button.-icon.-flat(id="button-pr-refresh" aria-label="Refresh" data-tooltip="Refresh" data-position="top")
                  .chi-button__content
                    i.chi-icon.icon-refresh(aria-hidden="true")
                button.chi-button.-icon.-flat(id="button-pr-column-customization" aria-label="Column Customization" data-tooltip="Column Customization" data-position="top")
                  .chi-button__content
                    i.chi-icon.icon-table-column-settings(aria-hidden="true")
              .chi-toolbar__actions-mobile
                button#drawer-trigger-actions1.chi-button.-icon.-flat.chi-drawer__trigger(aria-label="Button action")
                  .chi-button__content
                    i.chi-icon.icon-more-vert(aria-hidden="true")
        .chi-toolbar__ribbon
          .chi-toolbar__start
            i.chi-icon.icon-arrow-down.-xs(aria-hidden="true")
            .chi-toolbar__results
              span.chi-toolbar__label Search Results 
              span (1-40 of 78)
            .chi-divider.-vertical
            chi-link(href='#', size='md') Save View
          .chi-toolbar__end
            button.chi-button.-icon.-flat(aria-label="Button action")
              .chi-button__content
                i.chi-icon.icon-x(aria-hidden="true")
      .chi-bulk-actions
        .chi-bulk-actions__top.-position--absolute
          button.chi-button.-flat.-px--1 Select all
          button.chi-button.-flat.-px--1 Cancel
        .chi-bulk-actions__start
          .chi-bulk-actions__results
            .chi-bulk-actions__label Actions (10 Selected)
            .chi-form__item
              .chi-checkbox
                input#checkbox-ba1.chi-checkbox__input(type='checkbox')
                label.chi-checkbox__label(for='checkbox-ba1') Show Selected Only
          .chi-divider.-vertical
          .chi-bulk-actions__buttons
            .chi-bulk-actions__buttons-mobile.-position--absolute
              chi-button(variant='flat' type='icon' alternative-text='Button action' data-tooltip='Edit')
                chi-icon(icon='edit')
              chi-button(variant='flat' type='icon' alternative-text='Button action' data-tooltip='Compose')
                chi-icon(icon='compose')
              chi-button(variant='flat' type='icon' alternative-text='Button action' data-tooltip='Delete')
                chi-icon(icon='delete')
              chi-button(variant='flat' type='icon' alternative-text='Button action' data-tooltip='Print')
                chi-icon(icon='print')
            .chi-bulk-actions__buttons-desktop
              chi-button(size='xs')
                chi-icon(icon='arrow-to-bottom')
                span Download
              chi-button(size='xs')
                chi-icon(icon='compose')
                span Compose
              chi-button(size='xs')
                chi-icon(icon='delete')
                span Delete
              chi-button(size='xs')
                chi-icon(icon='print')
                span Print
        .chi-bulk-actions__end
          chi-button(type='close')
    </Wrapper>
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      .chi-tab__description
        | To render toolbar, use the class <code>chi-toolbar</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-toolbar">
  <div class="chi-toolbar__header">
    <div class="chi-toolbar__start">
      <div class="chi-toolbar__search">
        <div class="chi-form__item">
          <chi-search-input id="example__base-4"></chi-search-input>
        </div>
      </div>
      <div class="chi-divider -vertical"></div>
      <div class="chi-toolbar__views">
        <div class="chi-toolbar__views-desktop">
          <div class="chi-form__item">
            <select class="chi-select" id="example-views-4">
              <option>View 1</option>
              <option>View 2</option>
            </select>
          </div>
        </div>
      </div>
      <div class="chi-divider -vertical"></div>
      <div class="chi-toolbar__filters">
        <div class="chi-toolbar__filters-desktop">
          <div class="chi-form__item">
            <select class="chi-select" id="example-ba9">
              <option value="">Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div class="chi-form__item">
            <select class="chi-select" id="example-ba10">
              <option value="">Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <button class="chi-button -icon -flat" id="button-pr-filters" aria-label="Filters" data-tooltip="Filters" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-filter" aria-hidden="true"></i>
            </div>
          </button>
        </div>
        <div class="chi-toolbar__filters-mobile">
          <button class="chi-button -icon -flat chi-drawer__trigger" id="drawer-trigger-brbap1" data-target="#drawer-1" aria-label="Button action">
            <div class="chi-button__content">
              <i class="chi-icon icon-filter" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="chi-toolbar__end">
      <div class="chi-toolbar__actions">
        <div class="chi-toolbar__actions-desktop">
          <button class="chi-button -icon -flat" id="button-pr-download" aria-label="Download" data-tooltip="Download" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-arrow-to-bottom" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -icon -flat" id="button-pr-refresh" aria-label="Refresh" data-tooltip="Refresh" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-refresh" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -icon -flat" id="button-pr-column-customization" aria-label="Column Customization" data-tooltip="Column Customization" data-position="top">
            <div class="chi-button__content">
              <i class="chi-icon icon-table-column-settings" aria-hidden="true"></i>
            </div>
          </button>
        </div>
        <div class="chi-toolbar__actions-mobile">
          <button class="chi-button -icon -flat chi-drawer__trigger" id="drawer-trigger-brbap2" data-target="#drawer-2" aria-label="Button action">
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-toolbar__ribbon">
    <div class="chi-toolbar__start">
      <i class="chi-icon icon-arrow-down -xs" aria-hidden="true"></i>
      <div class="chi-toolbar__results">
        <span class="chi-toolbar__label">Search Results </span>
        <span>(1-40 of 78)</span>
      </div>
      <div class="chi-divider -vertical"></div>
      <chi-link href="#" size="md">Save View</chi-link>
    </div>
    <div class="chi-toolbar__end">
      <button class="chi-button -icon -flat" aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
    </div>
  </div>
</div>
<div class="chi-bulk-actions">
  <div class="chi-bulk-actions__top">
    <button class="chi-button -flat -px--1">Select all</button>
    <button class="chi-button -flat -px--1">Cancel</button>
  </div>
  <div class="chi-bulk-actions__start">
    <div class="chi-bulk-actions__results">
      <div class="chi-bulk-actions__label">Actions (10 Selected)</div>
      <div class="chi-form__item">
        <div class="chi-checkbox">
          <input class="chi-checkbox__input" id="checkbox-ba1" type="checkbox" />
          <label class="chi-checkbox__label" for="checkbox-ba1">Show Selected Only</label>
        </div>
      </div>
    </div>
    <div class="chi-divider -vertical"></div>
    <div class="chi-bulk-actions__buttons">
      <div class="chi-bulk-actions__buttons-mobile">
        <button class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Edit">
          <div class="chi-button__content">
            <i class="chi-icon icon-edit" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Compose">
          <div class="chi-button__content">
            <i class="chi-icon icon-compose" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Delete">
          <div class="chi-button__content">
            <i class="chi-icon icon-delete" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Print">
          <div class="chi-button__content">
            <i class="chi-icon icon-print" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-bulk-actions__buttons-desktop">
        <button class="chi-button -xs">
          <div class="chi-button__content">
            <i class="chi-icon icon-arrow-to-bottom" aria-hidden="true"></i>
            <span>Download</span>
          </div>
        </button>
        <button class="chi-button -xs">
          <div class="chi-button__content">
            <i class="chi-icon icon-compose" aria-hidden="true"></i>
            <span>Compose</span>
          </div>
        </button>
        <button class="chi-button -xs">
          <div class="chi-button__content">
            <i class="chi-icon icon-delete" aria-hidden="true"></i>
            <span>Delete</span>
          </div>
        </button>
        <button class="chi-button -xs">
          <div class="chi-button__content">
            <i class="chi-icon icon-print" aria-hidden="true"></i>
            <span>Print</span>
          </div>
        </button>
      </div>
    </div>
  </div>
  <div class="chi-bulk-actions__end">
    <button class="chi-button -icon -flat" aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-x" aria-hidden="true"></i>
        </div>
      </button>
  </div>
</div>

<!-- Drawer -->
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div class="chi-drawer -left -menu -position--absolute" id="drawer-1">
      <div class="chi-drawer__header">
        <span class="chi-drawer__title">Filters</span>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content -px--2 -py--3">
        <div class="chi-form__item -mb--2">
          <label class="chi-label" for="example-ba11">Label</label>
          <select class="chi-select" id="example-ba11">
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label class="chi-label" for="example-ba12">Label</label>
          <select class="chi-select" id="example-ba12">
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label class="chi-label" for="example-ba13">Label</label>
          <select class="chi-select" id="example-ba13">
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div class="chi-form__item -mb--2">
          <label class="chi-label" for="example-ba14">Label</label>
          <select class="chi-select" id="example-ba14">
            <option value="">Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
      <div class="-d--flex -justify-content--center -pb--2">
        <button class="chi-button -primary">Apply</button>
        <button class="chi-button -ml--2">Cancel</button>
      </div>
    </div>
  </div>
</div>
<div class="chi-backdrop -closed">
  <div class="chi-backdrop__wrapper">
    <div class="chi-drawer -right -menu -position--absolute" id="drawer-2">
      <div class="chi-drawer__header">
        <span class="chi-drawer__title">Actions</span>
        <button class="chi-button -icon -close" aria-label="Close">
          <div class="chi-button__content">
            <i class="chi-icon icon-x" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-drawer__content -px--2">
        <ul class="-no-style">
          <li class="-text--md">Download data</li>
          <div class="chi-divider"></div>
          <li class="-text--md">Refresh results</li>
          <div class="chi-divider"></div>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Javascript -->
<script>
  chi.drawer(document.getElementById('drawer-trigger-brbap1'));
  chi.drawer(document.getElementById('drawer-trigger-brbap2'));
  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`
      }
    };
  }
})
export default class BaseWithRibbonAndBulkActionsPortal extends Vue {}
</script>

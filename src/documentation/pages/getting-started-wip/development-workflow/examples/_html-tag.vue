<template lang="pug">
<TitleAnchor title="Naming" id="naming" titleSize="h2" />
<TitleAnchor title="HTML tag" id="html-tag" titleSize="h3" />
<TitleAnchor title="PREFIX" id="prefix" titleSize="h4" />

p.-text
  | The prefix has a major role when you are creating a collection of components intended to be used across different
  | projects. Web Components are not scoped because they are globally declared within the webpage, which means a
  | "unique" prefix is needed to prevent collisions and can help to quickly identify the collection.
  | Additionally, web components are required to contain a "-" dash within the tag name, so using the
  | first section to namespace your components is a natural fit.

p.-text Tag prefix must be <code>chi</code>:

Copy(id="prefix" :code="codeSnippets.htmlblueprint" lang="html")

<TitleAnchor title="NAME" id="name" titleSize="h4" />

p.-text
  | Components are not actions, they are conceptually "things". It is better to use nouns instead of verbs, such as
  | "animation" instead of "animating". Here are some good examples of component names: "input", "tab", "nav", and "menu".

<TitleAnchor title="MODIFIERS" id="modifiers" titleSize="h4" />

p.-text
  | When several components are related and/or coupled, it is a good practice to use common naming with different
  | modifiers, for example:
Copy(id="modifier" :code="codeSnippets.htmlblueprint1" lang="html")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class HTMLTag extends Vue {
  codeSnippets = {
    htmlblueprint: `<chi-button>
<chi-header>`,
    htmlblueprint1: `<chi-card>
<chi-card-header>
<chi-card-content>`,
  };
}
</script>

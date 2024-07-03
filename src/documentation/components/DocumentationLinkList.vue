<template>
  <ul class="chi-tabs__subtabs">
    <li
      v-for="link in items"
      :class="{
        '-active': route.path.endsWith(link.to || link.href),
      }"
    >
      <template v-if="isDev">
        <NuxtLink :to="`/${link.to}${linkQuery}`">
          {{ link.label }}
        </NuxtLink>
      </template>

      <template v-else>
        <a v-if="link.href && link.source === 'pug'" :href="`${$config.public.baseUrl}${link.href}${linkQuery}`">
          {{ link.label }}
        </a>
        <NuxtLink v-else-if="link.to" :to="`/${link.to}${linkQuery}`">
          {{ link.label }}
        </NuxtLink>
      </template>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['links']);
const route = useRoute();
const isDev = useRuntimeConfig().public.isDev;

const getWipUrl = (item) => {
  if (item.source === 'pug') {
    const paths = item.href.split('/');
    paths[0] = paths[0] + '-wip';
    return paths.join('/');
  }

  return item.to;
};

const items = computed(() => {
  if (!isDev) {
    return props.links;
  }

  return props.links.map((link) => ({
    ...link,
    to: getWipUrl(link),
  }));
});

/**
 * Computes query parameters for the links, adding the theme
 */
const linkQuery = computed(() => {
  return route.query.theme
    ? `?theme=${route.query.theme}`
    : '';
})
</script>

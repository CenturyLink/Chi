<template>
  <li v-for="link in items" :class="{
    '-active': route.fullPath.includes(link.to || link.href)
  }">
    <template v-if="isDev">
      <NuxtLink :to="`/${link.to}`">
        {{ link.label }}
      </NuxtLink>
    </template>

    <template v-else>
      <NuxtLink v-if="link.to && link.source === 'vue'" :to="`/${link.to}`">
        {{ link.label }}
      </NuxtLink>
      <a v-else :href="`${baseUrl}${link.href}`">
        {{ link.label }}
      </a>
    </template>
  </li>
</template>

<script setup>
const props = defineProps(['links']);
const route = useRoute();
const isDev = useRuntimeConfig().public.isDev;

const getWipUrl = item => {
  if (item.source === 'pug') {
    const paths = item.href.split('/');
    paths[0] = paths[0] + '-wip';
    return paths.join('/');
  }

  return item.to;
}

const items = computed(() => {
  if (!isDev) {
    return props.links;
  }

  return props.links.map(link => ({
    ...link,
    to: getWipUrl(link)
  }));
});
</script>

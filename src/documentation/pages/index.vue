<template></template>

<script setup lang="ts">
import { SECTION_URLS } from '~/constants/constants';

const { path, query } = useRoute();
const isDev = useRuntimeConfig().public.isDev;


if (path === '/' && isDev) {
  await navigateTo({
    path: `/${SECTION_URLS.gettingStarted}${isDev ? '-wip' : ''}`,
    query,
  });
}
</script>

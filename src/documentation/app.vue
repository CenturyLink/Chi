<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (chunk: any) => {
    if (chunk) {
      return `Chi - ${chunk}`;
    }

    return 'Chi - ';
  },
});
</script>

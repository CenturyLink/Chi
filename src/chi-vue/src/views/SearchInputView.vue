<template>
  <div class="search-input-examples__wrapper">
    <h2>Search Input</h2>
    <h3>xs</h3>
    <SearchInput
      @chiInput="(ev) => input(ev)"
      @chiChange="(ev) => change(ev)"
      @chiClean="() => clean()"
      @chiFocus="() => focus()"
      @chiBlur="() => blur()"
      @chiSearch="(ev) => search(ev)"
      class="-mt--2"
      size="xs"
    />
    <h3>sm</h3>
    <SearchInput class="-mt--2" size="sm" />
    <h3>md</h3>
    <SearchInput class="-mt--2" size="md" />
    <h3>lg</h3>
    <SearchInput class="-mt--2" size="lg" />
    <h3>lg</h3>
    <SearchInput class="-mt--2" size="xl" />
    <h3>disabled</h3>
    <SearchInput class="-mt--2" disabled />
    <h3>value</h3>
    <SearchInput class="-mt--2" value="Value" />
    <h3>placeholder</h3>
    <SearchInput class="-mt--2" placeholder="placeholder" />
    <h3>name</h3>
    <SearchInput class="-mt--2" name="name" />
    <h3>readonly</h3>
    <SearchInput class="-mt--2" :readOnly="true" value="Value" />
  </div>
</template>

<script lang="ts" setup>
import SearchInput from '@/components/search-input/SearchInput';

const input = (ev: Event) => {
  console.log('input ' + ev);
};

const change = (ev: Event) => {
  console.log('change ' + ev);
};

const clean = () => {
  console.log('clean');
};

const focus = () => {
  console.log('focus');
};

const blur = () => {
  console.log('blur');
};

const search = (ev: Event) => {
  console.log('search ' + ev);
};
</script>

<style lang="scss">
.search-input-examples__wrapper {
  max-width: 20rem;
}
</style>

<template>
  <div class="section">
    <h1>{{ section.title }}</h1>
    <div class="section-list">
      <a v-for="link in section.links" :href="link.link">{{ link.label }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Links } from '@/configuration';

const props = defineProps<{ section: Links }>()

</script>

<style lang="scss" scoped>
h1 {
  font-size: large;
  // margin-bottom: 0.8rem;
  text-transform: uppercase;
  color: color-mix(in srgb, v-bind("section.color") 70%, var(--color-text));
}
.section {
  // max-width: fit-content;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  // flex: 1;
  max-width: 35%;
  // padding: 1rem;

  @media (max-width: 640px) {
    width: 100%;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    // flex: 1;
    // min-width: 30%;
    width: 100%;
  }

  // &:hover {
  //   background-color: #1f1e1e97;
  //   background-color: color-mix(in srgb, v-bind("section.color") 5%, var(--color-background));
  // }
}

a {
  cursor: pointer;
  text-decoration: none;
  color: var(--color-text);
}

a:hover {
  text-decoration: underline;
}

a:visited {
  color: var(--color-text);
}
</style>
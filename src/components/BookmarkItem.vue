<template>
  <main @click="openLink">
    <bookmark-icon :icon="bookmark.icon" />
    <div>
      <p class="title">{{ bookmark.title }}</p>
      <p class="subtitle">{{ bookmark.subtitle ?? bookmark.link }}</p>
    </div>
  </main>
</template>
<script lang="ts" setup>
import BookmarkIcon from "./BookmarkIcon.vue";
import type { Bookmark } from "@/configuration";

const props = defineProps<{
  bookmark: Bookmark;
}>();

const openLink = () => {
  window.open(props.bookmark.link);
};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;

  .title {
    font-size: x-large;
  }

  .subtitle {
    font-size: smaller;
    white-space: nowrap;
    text-overflow: ellipsis;
    filter: brightness(0.6);
  }

  &:hover {
    cursor: pointer;

    border: 1px solid var(--color-border);

    .title,
    .subtitle {
      text-decoration: underline;
    }
  }
}
</style>

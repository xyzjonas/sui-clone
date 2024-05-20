<template>
  <main @click="openLink">
    <bookmark-icon :icon="bookmark.icon" />
    <div>
      <p class="title">{{ bookmark.title }}</p>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import BookmarkIcon from "./BookmarkIcon.vue";
import type { Bookmark } from "@/configuration";

const props = defineProps<{
  bookmark: Bookmark;
}>();

const openLink = () => {
  window.open(props.bookmark.link);
};

const subtitle = computed(() => {
  let bmark = props.bookmark.subtitle ?? props.bookmark.link.replace("https://", "").replace("http://", "")
  
  if (bmark.endsWith("/")) {
    bmark = bmark.substring(0, bmark.length - 1)
  }

  if (bmark.length > 27) {
    bmark = bmark.substring(0, 26) + "..."
  }

  return bmark
})
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: row;
  gap: 1rem;
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

<template>
  <div class="dashboard-section">
    <h1>
      <bookmark-icon v-if="section.icon" :icon="section.icon" />
      {{ section.title }}
    </h1>
    <div class="dashboard-section-list">
      <bookmark-item v-for="bookmark in section.bookmarks" :bookmark="bookmark" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import BookmarkIcon from "./BookmarkIcon.vue";
import type { Section } from "@/configuration";
import BookmarkItem from "./BookmarkItem.vue";
import { computed } from "vue";

const props = defineProps<{
  section: Section;
}>();

const gridCols = computed(() => [...Array(props.section.maxCols).keys()].map(() => "1fr").join(" "));
</script>
<style lang="scss" scoped>
h1 {
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 0.8rem;
  transition: 0.1s ease-in-out;
  text-transform: uppercase;
}
.dashboard-section {
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  padding: 1rem;

  flex-grow: 1;

  @media (max-width: 640px) {
    width: 100%;
  }

  &-list {
    display: grid;
    grid-template-columns: v-bind("gridCols");
    gap: 1rem;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  &:hover {
    background-color: #1f1e1e97;

    h1 {
      font-weight: 600;
      margin-bottom: 1rem;
    }
  }
}
ul {
  list-style: none;
  padding-left: 0;
}
</style>

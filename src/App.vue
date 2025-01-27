<template>
  <main>
    <dashboard />
  </main>
  <footer>
    <button v-if="!isPreview" @click="isPreview = !isPreview">preview</button>
    <div v-if="isPreview">
      <BookmarkItem :bookmark="preview" />
      <div class="input-row">
        <input v-model="preview.icon">
        <input v-model="preview.title">
        <input v-model="preview.subtitle">
        <button @click="isPreview = !isPreview">hide</button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Dashboard from "@/views/Dashboard.vue";
import type { Bookmark } from "./configuration";
import BookmarkItem from "./components/BookmarkItem.vue";
import { ref } from "vue";

const isPreview = ref(false)
const preview = ref<Bookmark>({
  link: "https://github.com",
  title: "Github",
  icon: "si-github"
})
</script>

<style lang="css" scoped>
main {
  height: 100%;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
}

button {
  background-color: transparent;
  color: var(--color-text);
  padding: 5px 10px;
  border: none;
  transition: 0.3s all ease-in-out;
  border-radius: 5px;
}

input {
  background-color: transparent;
  color: var(--color-text);
  padding: 5px 10px;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.267);
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.068);
}

.input-row {
  display: flex;
  gap: 3px;
  margin-top: 5px;
}
</style>

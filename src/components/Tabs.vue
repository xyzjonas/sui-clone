<template>
  <div class="tabs">
    <div v-for="tab in tabs" :class="{item: true, active: modelValue === tab}" @click="modelValue = tab">
      {{ tab }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ tabs: string[] }>()
const modelValue = defineModel<string>()

</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: row;
  gap: .5rem;
}

.item {
  font-size: small;
  padding: .3rem .5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.active {
  // border: 1px solid red;
  background-color: rgba(65, 65, 65, 0.404);
  border-radius: 4px;

  &:hover {
    text-decoration: none;
  }
}
</style>
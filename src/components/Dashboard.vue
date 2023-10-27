<template>
  <div class="dashboard">
    <dashboard-section v-for="section in configuration.sections" :section="section" />
  </div>
</template>
<script lang="ts" setup>
import { configuration } from "@/configuration";
import DashboardSection from "./DashboardSection.vue";
</script>
<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>

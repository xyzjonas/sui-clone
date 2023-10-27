<template>
  <div>
    <header>
      <clock />
    </header>
    <div class="dashboard">
      <dashboard-section v-for="section in configuration.sections" :section="section" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { configuration } from "@/configuration";
import Clock from "./Clock.vue";
import DashboardSection from "./DashboardSection.vue";
</script>
<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;
  margin-bottom: 1rem;
}
.dashboard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>

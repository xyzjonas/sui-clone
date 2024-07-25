<template>
  <div class="main">
    <header>
      <clock />
      <date />
    </header>
    <div class="links">
      <link-section v-for="s in configuration.links" :section="s" />
    </div>
    <div class="dashboard">
      <dashboard-section v-for="section in configuration.sections" :section="section" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { configuration } from "@/configuration";
import Clock from "@/components/Clock.vue";
import Date from "@/components/Date.vue";
import DashboardSection from "@/components/DashboardSection.vue";
import LinkSection from "@/components/LinkSection.vue";
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
header {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 1rem;
}
.dashboard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
.links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>

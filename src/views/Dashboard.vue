<template>
  <div class="main">
    <tabs v-model="activeDashId" :tabs="Object.keys(configuration)"/>
    <div class="dash">
      <header>
          <clock />
          <date />
      </header>
      <div class="links">
        <link-section v-for="s in activeDash.links" :section="s" />
      </div>
      <div class="dashboard">
        <dashboard-section v-for="section in activeDash.sections" :section="section" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { configuration } from "@/configuration";
import Clock from "@/components/Clock.vue";
import Date from "@/components/Date.vue";
import DashboardSection from "@/components/DashboardSection.vue";
import LinkSection from "@/components/LinkSection.vue";
import Tabs from "@/components/Tabs.vue";
import { computed, ref } from "vue";
import { useStorage } from "@vueuse/core";

const activeDashId = useStorage("active-tab", "personal")
const activeDash = computed(() => configuration[activeDashId.value])

</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.dash {
  flex: 1
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

<template>
  <h1>{{ datetime.toLocaleTimeString() }}</h1>
</template>
<script lang="ts" setup>
import { useTime } from "@/composables/time";
const { datetime } = useTime();
</script>

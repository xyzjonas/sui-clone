<template>
  <h1>{{ `${hours}`.padStart(2, "0") }}:{{ `${minutes}`.padStart(2, "0") }}<small>.{{ `${seconds}`.padStart(2, "0") }}</small></h1>
</template>
<script lang="ts" setup>
import { useTime } from "@/composables/time";
const { hours, minutes, seconds } = useTime();
</script>
<style lang="css" scoped>
h1 {
  display: flex;
  align-items: baseline;
  margin: 0;
  font-size: 7rem;
  font-weight: 200;
}

@media (max-width: 991.98px){
  h1 {
    font-size: 3rem;
  }
}

small {
  font-size: 1.5rem;
}
</style>

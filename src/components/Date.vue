<template>
  <h1>{{ date }}</h1>
</template>
<script lang="ts" setup>
import { useTime } from "@/composables/time";
const { date } = useTime();
</script>
<style lang="css" scoped>
h1 {
  display: flex;
  align-items: baseline;
  margin-top: -2.5rem;
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: 200;
}

@media (max-width: 991.98px){
  h1 {
    font-size: 1.2rem;
    margin-top: -1rem;
    margin-left: .3rem;
  }
}

small {
  font-size: 1.5rem;
}
</style>

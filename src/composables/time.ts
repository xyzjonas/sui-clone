import { computed, ref } from "vue";

export function useTime() {
  const datetime = ref<Date>(new Date());
  const hours = computed(() => datetime.value.getHours());
  const minutes = computed(() => datetime.value.getMinutes());
  const seconds = computed(() => datetime.value.getSeconds());

  const date = computed(() => datetime.value.toDateString())


  setInterval(() => (datetime.value = new Date()), 1000);

  return {
    datetime,
    hours,
    minutes,
    seconds,
    date,
  };
}

<template>
  <img
    v-if="simpleIcon"
    style="filter: opacity(0.64)"
    height="28"
    width="28"
    :src="`https://cdn.simpleicons.org/${simpleIcon}/${textColor}`"
  />
  <span v-else class="material-icons">{{ icon ?? "apps" }}</span>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{ icon?: string, color?: string }>();

const simpleIcon = computed(() => {
  if (props.icon?.startsWith("si-")) {
    return props.icon.slice(3);
  }
});

const RGBAToHexA = (rgba: string, forceRemoveAlpha = true) => {
  return (
    "#" +
    rgba
      .replace(/^rgba?\(|\s+|\)$/g, "") // Get's rgba / rgb string values
      .split(",") // splits them at ","
      .filter((string, index) => !forceRemoveAlpha || index !== 3)
      .map((string) => parseFloat(string)) // Converts them to numbers
      .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
      .map((number) => number.toString(16)) // Converts numbers to hex
      .map((string) => (string.length === 1 ? "0" + string : string)) // Adds 0 when length of one number is 1
      .join("")
  ); // Puts the array to togehter to a string
};

const style = getComputedStyle(document.body);
const textColor = computed(() => {
  console.info(RGBAToHexA(props.color ?? ''))
  if (props.color) {
    return props.color.replace("#", "")
  }
  return RGBAToHexA(style.getPropertyValue("--color-text-hex")).replace("#", "")
});
</script>
<style lang="scss" scoped>
.material-icons {
  font-size: 2.2rem;
}
</style>

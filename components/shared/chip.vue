<template>
  <button
    :class="`w-[${props.width} || fit-content] rounded-full min-w-[60px] border border-gray-300 px-5 text-sm font-light`"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

let props = defineProps(["title", "width"]);
</script>

<style></style>

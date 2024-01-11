<template>
  <div
    class="bg-[#FFF5E9] px-2 rounded-xl border border-gray-200 shadow-sm flex dark:bg-gray-800 dark:border-gray-700 h-[50px] "
  >
    <a href="#" v-html="props.icon">
    </a>
    <div class="md:px-5 md:ml-0 py-1 sm:px-1 ml-2">
      <h3 class="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{{ props.count }}</a>
      </h3>
      <p class="mt-1 mb-4 text-xs font-light text-[#FF951D] dark:text-gray-400">
        {{ props.title }}
      </p>
    </div>
  </div>
</template>

<script setup lang>
import { defineProps } from "vue";

const props = defineProps(["count", "title", "icon"]);
</script>

<style></style>

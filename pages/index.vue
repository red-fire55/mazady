<template>
  <main class="flex-1 p-4 space-y-4 mt-16 px-3 bg-[#F6F4F5] min-h-screen md:px-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-4">
      <!-- left section (en) -->
      <div class="col-span-1 grid gap-4 mb-4 lg:mb-0">
        <left-section></left-section>
      </div>
      <!-- right section (en) -->
      <div class="col-span-2 flex flex-col gap-4">
        <right-section></right-section>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>

<style></style>

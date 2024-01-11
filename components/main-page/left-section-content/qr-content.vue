<template>
  <div>
    <div class="flex justify-between flex-row p-4 flex-wrap">
      <div class="mr-auto text-xl font-semibold">QR Code</div>
      <div class="ml-auto text-xl font-semibold text-right flex justify-between">
        <button
          class="w-[26px] h-[26px] mr-1 ml-1 rounded-lg"
          v-for="(item, i) in share_options"
          :key="i"
          v-html="item.icon"
        ></button>
      </div>
      <info-card
        class="w-full mt-4 py-2"
        title="Download the QR code or share it with your friends."
        :icon="info_icon"
      ></info-card>
      <div
        class="mx-auto bg-gradient-to-r from-[#D20653] via-[red] w-full to-[#FF951D] hover:bg-gradient-to-br focus:ring-4
         focus:outline-none rounded-xl text-sm min-h-[350px] px-5 mt-3 py-5 text-center justify-center  md:flex"
      >
      <div class="bg-white min-h-full w-full rounded-xl py-3">
        <img
            class="w-44 h-16 mx-auto"
            src="~/assets/img/Layer 1.png"
            alt="mazady photo"
          />
          <h3 class="w-full mt-2 text-xl">Hala Ahmed</h3>
          <img
            class=" mx-auto"
            src="~/assets/img/qr-image.svg"
            alt="mazady photo"
          />
          <h5 class="w-full mt-4 text-md">Follow Us on Mazaady</h5>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let share_options = ref<Array<object>>([
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

`,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
`,
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11V17L11 15" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 17L7 15" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  },
]);

let info_icon = ref<string>(`<svg width="24" height="24" class="mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11V17L11 15" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 17L7 15" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
</script>

<style></style>

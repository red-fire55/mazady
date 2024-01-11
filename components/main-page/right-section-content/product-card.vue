<template>
  <div class="flex items-start pt-3 pb-3 sm:flex-row relative w-full px-2 md:items-center ">
    <div class="relative mr-2 md:mr-8  flex items-start">
      <img
        class="mx-auto h-36 w-36 rounded-[30px] sm:ml-0 -mt-8 md:mt-0 "
        src="~/assets/img/product.svg"
        alt="Roberta Avatar"
      />
      <div
        class="absolute w-[85%] ml-[15px] text-center bg-[#D20653] 
        z-30 top-[56%] rounded-tl-[30px] rounded-br-[30px] h-5 text-xs py-1 text-white md:ml-[38px] md:w-[75%] md:top-[70%] md:h-8 md:text-md
        md:py-2"
      >
        Live Action
      </div>
    </div>

    <div class="text-left sm:text-left w-[70%]">
      <p class="mt-1 md:mt-3 mb-1 w-full text-gray-800 dark:text-gray-400 text-xs md:text-md">
        <a href="#">{{ props.title }}</a>
      </p>
      <p class="md:mt-3 mb-1 w-full text-gray-800 dark:text-gray-400">
        starting price <span class="text-xl font-bold">{{ props.price }} EGP</span>
      </p>
      <div class="mt-3 mb-4 w-full text-gray-400 dark:text-gray-400 flex flex-col text-xs md:text-md md:flex-row">
        <span class="w-full md:w-fit">Lot starts in</span>
        <ul class="flex justify-center space-x-4 sm:justify-start ml-4 mt-2 md:mt-0">
          <li v-for="(item, i) in props.time_list" :key="i">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <chip
                class="bg-[#FFF5E9] text-[#FF951D] border-none py-1 text-xs px-0 md:px-2"
                :title="item"
              ></chip>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- fav button -->
    <button type="button" class="md:right-0  md:mr-3 absolute top-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :fill="props.fav ? 'red' : 'white'"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        :class="['w-6 h-6', props.fav ? 'border-none' : '']"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps(["time_list", "title", "price", "fav"]);
</script>

<style></style>

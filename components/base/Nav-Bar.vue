<template>
  <nav
    class="bg-[#FFFFFF] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 dark:border-gray-700 left-0 right-0 top-0 fixed z-[999]"
  >
    <div class="flex flex-wrap justify-between items-center md:px-14">
      <div class="flex justify-start items-center">
        <a href="https://flowbite.com" class="flex mr-4 items-center justify-center">
          <img
            class="w-24 h-8 rounded-full"
            src="~/assets/img/Layer 1.png"
            alt="user photo"
          />
        </a>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:ml-4"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li v-for="(item, i) in nav_items" :key="i" @click="toggleActive(i)">
              <a
                :id="item.active? 'active-nav': ''"
                href="#"
                class="block py-2 px-3 text-white bg-blue-700 md:bg-transparent md:text-[#828282] md:p-0 shadow-none rounded-none"
                aria-current="page"
                >{{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center lg:order-2">
        <!-- Apps -->
        <button
          type="button"
          data-dropdown-toggle="apps-dropdown"
          class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <span class="sr-only">View notifications</span>
          <!-- Icon -->
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
        </button>
        <span class="vertical-line"></span>
        <!-- Notifications -->
        <button
          type="button"
          data-dropdown-toggle="notification-dropdown"
          class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <span class="sr-only">View notifications</span>
          <!-- Bell icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
            />
          </svg>
        </button>
        <span class="vertical-line"></span>
        <button
          type="button"
          class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="dropdown"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-8 h-8 rounded-full"
            src="~/assets/img/Rectangle 12.png"
            alt="user photo"
          />
        </button>

        <button
          type="button"
          class="text-white bg-gradient-to-r from-[#D20653] via-[red] to-[#FF951D] hover:bg-gradient-to-br focus:ring-4 focus:outline-none rounded-lg text-sm font-medium px-5 py-1.5 text-center mx-3 hidden md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          Add New Product
        </button>

        <!-- language button -->
        <button
          type="button"
          class="text-sm font-sm text-black focus:outline-none font-medium r ounded-lg px-5 py-2.5 text-center hidden md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 mt-[3.5px] mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          EN
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Collapse } from "flowbite";
import { ref, defineProps, defineEmits } from "vue";
defineProps({ name: "Nav-Bar" });

let nav_items: Array<object> = ref([
  {
    title: "Home",
    active: true,
  },
  {
    title: "Blogs",
    active: false,
  },
  {
    title: "Gifts",
    active: false,
  },
]);

let toggleActive = (index: number)=>{
  nav_items.value.forEach(item=>{
     if(item.active){
      item.active = false
     }
  })

  nav_items.value[index].active = true
}
</script>

<style>
a#active-nav::after {
  content: "";
  position: relative;
  display: block;
  top: 16px;
  /* transform: translateY(-50%); */
  left: 0;
  background: #d20653;
  width: 100%;
  height: 5px;
  transition: all 0.25s ease;
  border-radius: 8px 8px 0 0;
}
</style>

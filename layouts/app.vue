<template>
  <div class="overflow-y-hidden">
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <!-- Sidebar -->
      <SideNav
        :collapsed="collapsed"
        :items="[
          {
            header: 'Main Navigation',
            hiddenOnCollapse: true,
          },
          {
            href: '/',
            title: 'Dashboard',
            icon: 'fa fa-user',
          },
          {
            href: '/charts',
            title: 'Charts',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link',
              },
            ],
          },
        ]"
      />

      <main class="bg-gray-50 dark:bg-gray-900 min-h-full ml-[16vw] content  mt-8 pb-8">
        <Nav-Bar @collapse-sideBar="collapse_sideBar" />
        <div class="mt-4 p-3 pb-0">
          <breadCrumb :base="base_route"/>
        </div>
        <!-- <div class="grid grid-cols-3 gap-4 mb-4">
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 lg:h-64"
          ></div>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 lg:h-64"
          ></div>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 lg:h-64"
          ></div>
        </div>
        <div
          class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-96 mb-4"
        ></div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"
          ></div>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"
          ></div>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"
          ></div>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"
          ></div>
        </div>
        <div
          class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-96 mb-4"
        ></div>
        <div class="grid grid-cols-2 gap-4">
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"
          ></div>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"
          ></div>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"
          ></div>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-48 lg:h-72"
          ></div>
        </div> -->
        <div class="p-5 min-h-screen">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import "~/plugins/app.bundle.js";

let collapsed = ref<Boolean>(false);
const collapse_sideBar = () => {
  collapsed.value = !collapsed.value;
};

let base_route = ref<Object>({
  title: "Home",
  icon: "house",
  href: "dashboard"
})

const { $api } = useNuxtApp()

</script>

<style lang="scss">
$width: 80w;
.v-sidebar-menu {
  width: calc(100vw - 80vw) !important;
  position: fixed;
  height: 100vh;
  padding-top: 63px;
}

.content {
  transition: margin-left 0.3s ease;
  flex: 1; /* Adjust margin based on your sidebar width */
  padding: 20px; /* Adjust padding as needed */
}
.content-collapse {
  margin-left: 35px !important;
}
</style>

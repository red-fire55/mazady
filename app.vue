<template>
  <div >
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { ofetch } from "ofetch";
const app = useNuxtApp();
const $swal = app.vueApp.config.globalProperties.$swal;
let token = process.client ? localStorage.getItem("token") : ""
globalThis.$fetch = ofetch.create({
  baseURL: "http://127.0.0.1:5000/api/",
  headers: {
    token: token,
  },
  onRequest: (req) => {},
  onResponse: (res) => {
    if (res.options.method === "POST" && res.response.status === 200) {
      $swal.fire({
        title: "success",
        text: "",
        icon: "success",
      });
    } else if (res.options.method === "POST" && res.response.status !== 200) {
      $swal.fire({
        title: "something wrong happened ... please try again !",
        text: "",
        icon: "error",
      });
    }
  },
});
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

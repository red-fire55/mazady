<template>
  <div>
    <ctable :p_headers="headers" :p_data_items="data_items" :p_title="title"/>
  </div>
</template>

<script setup lang="ts">
import ctable from "@/components/common/ctable.vue";
import { ref } from "vue";

//configure store instance
import { useStore } from "vuex";
let store = useStore();

let headers = ref([]);
let data_items = ref([]);
let title = ref("Render Data")
Object.entries(store.state.form).forEach((entry) => {
  headers.value.push(entry[0]);
  data_items.value.push(entry[1]);
});
</script>

<style></style>

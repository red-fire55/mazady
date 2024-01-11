<template>
  <div class="flex flex-row flex-wrap justify-between">
    <div class="mr-auto text-xl font-semibold">
      <chip
        :class="[
          'mr-1 ml-1',
          item.active ? 'border border-[#FF951D] bg-[#FFF5E9] text-[#FF951D]' : '',
        ]"
        v-for="(item, i) in top_filter_items"
        :key="i"
        :title="item.title"
        @click="toggleActive(i)"
      ></chip>
    </div>
    <div class="ml-auto text-xl font-semibold text-right flex justify-between">
      <button
        type="button"
        class="text-white bg-gradient-to-r from-[#D20653] via-[red] to-[#FF951D] hover:bg-gradient-to-br focus:ring-4 focus:outline-none rounded-lg text-sm font-medium px-5 py-1.5 text-center mx-3 hidden md:flex"
      >
        Add Review
      </button>
    </div>
    <p class="w-full text-xl font-bold mt-4 px-2">Products</p>

    <product-card
      class="mt-1"
      v-for="(product, i) in product_list"
      :key="i"
      :title="product.title"
      :price="product.price"
      :time_list="product.time_list"
      :fav="product.fav"
    ></product-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

//top filter items
let top_filter_items: Array<object> = ref([
  {
    title: "Products",
    active: true,
  },
  {
    title: "Articles",
    active: false,
  },
  {
    title: "Reviews",
    active: false,
  },
]);
let toggleActive = (index: number) => {
  top_filter_items.value.forEach((item) => {
    if (item.active) {
      item.active = false;
    }
  });
  top_filter_items.value[index].active = true;
};

//products list
let product_list: Array<object> = ref([
  {
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000",
    time_list: ["2 Days", "10 Hours", "50 Minutes"],
    fav: false,
  },
  {
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000",
    time_list: ["2 Days", "10 Hours", "50 Minutes"],
    fav: true,
  },
  {
    title: "Jeep Car, new, used for only one time",
    price: "1000",
    time_list: ["2 Days", "10 Hours", "50 Minutes"],
    fav: false,
  },
  {
    title: "Jeep Car, new, used for only one time",
    price: "1000",
    time_list: ["2 Days", "10 Hours", "50 Minutes"],
    fav: false,
  },
  {
    title: "Jeep Car, new, used for only one time",
    price: "1000",
    time_list: ["2 Days", "10 Hours", "50 Minutes"],
    fav: false,
  },
]);
</script>

<style></style>

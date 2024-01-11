<template>
  <div class="mb-5">
    <label
      for="email"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
      >{{ title || "" }}</label
    >
    <input
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      v-model="target"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import { ref, defineComponent, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: ["items", "placeholder", "title", "key_value", "form_data"],
  setup(props) {
    const store = useStore();

    let form_data = props.form_data;
    let target = ref(form_data[props.key_value] || "");
    watch(target, (val) => {
      form_data[props.key_value] = val;
    });
    return {
      target,
    };
  },
});
</script>

<style></style>

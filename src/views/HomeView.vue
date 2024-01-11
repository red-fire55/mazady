<template>
  <div class="flex justify-center flex-1 flex-row flex-grow pt-24">
    <cform>
      <template v-slot:fields>
        <!-- main categories selector -->
        <cselect
          key_value="main_category"
          :form_data="form_data"
          title="Main Category"
          placeholder="please choose a category"
          :options="to_choose_categories"
        />
        <!-- sub categories selector -->
        <cselect
          key_value="sub_category"
          :form_data="form_data"
          title="Sub Category"
          placeholder="please choose a category"
          :options="sub_categories"
        />

        <!-- sub child attributes of sub categories -->
        <template v-for="(option, i) in sub_children" :key="i">
          <cselect
            :key_value="option.title"
            :form_data="form_data.form"
            :title="option.title"
            placeholder="please choose a category"
            :options="option.filtered_options"
            @changed="setChildren(form_data.form[option.title], i)"
            class="mb-2"
          />
          <!-- input for other sub child custom value -->
          <cinput
            v-if="form_data.form[option.title] == 'other'"
            :key_value="option.title + 1"
            :form_data="form_data.form"
            :title="option.title"
            placeholder="please enter a category"
          />

          <!-- items in the sub children  -->
          <template v-for="(child, x) in option.children" :key="x">
            <cselect
              :key_value="option.title + child.title"
              :form_data="form_data.form"
              :title="child.title"
              placeholder="please choose a category"
              :options="child.options"
            />
          </template>
        </template>
      </template>

      <template v-slot:actions>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="submit"
        >
          Submit
        </button>
      </template>
    </cform>
  </div>
</template>

<script lang="ts" setup>
//vue modules
import { ref, onMounted, watch } from "vue";
import axios from "../plugins/axios";

//compasables
import { useMain } from "@/compasables/useMain.js";
const methods = useMain();

//defined components
import cform from "../components/common/form.vue";
import cselect from "../components/common/cselect.vue";
import cinput from "../components/common/cinput.vue";

//configure store instance
import { useStore } from "vuex";
let store = useStore();

//configure router instance
import { useRouter } from "vue-router";
let router = useRouter();

//implement the targeted form
let form_data = store.state;
let all_categories = [];
let sub_categories = ref([]);
let to_choose_categories = ref([]);
let sub_children = ref([]);

//we use mounted hook to resolve the async calls
onMounted(async () => {
  all_categories = await methods.fetchAllCategories();
  to_choose_categories.value = all_categories.map((opt) => {
    return {
      text: opt.name,
      value: opt.id,
    };
  });
});

//we are using it here for reactivity reasons
let setChildren = async (_id, _index) => {
  if(_id == 'other') return
  const data = await methods.fetchOptionsInSubChildren(_id, _index);
  sub_children.value[data.index].children = data.children;
};

//submit method
let submit = ()=>{
  router.push("/render-data")
}

//here we handle the watchers
//the following syntax represents the deep watch in vue3 composition api
watch(
  () => form_data["main_category"],
  (val) => {
    sub_categories.value = methods.filterCategories(val, all_categories);
  }
);
//sub category changes listenere(watcher)
watch(
  () => form_data["sub_category"],
  async (val) => {
    sub_children.value = await methods.fetchSubChildrenCategories(val);
  }
);
</script>

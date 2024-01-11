import axios from "@/plugins/axios.js"
import { toRaw } from "vue"
export const useMain = () => {
  let fetchAllCategories = async () => {
    return (await axios.get("get_all_cats")).data.data.categories;
  };

  let filterCategories = (id, arr) => {
    //filter through the categories to fetch the children of the main category
    let category = arr.filter((cat) => {
      return cat.id == id;
    });

    return category[0].children.map((item) => {
      return {
        text: item.name,
        value: item.id,
      };
    });
  }

  //fetch all sub children to a sub category
  let fetchSubChildrenCategories = async (id) => {
    let res = (await axios.get(`properties?cat=${id}`)).data.data
    return res.map(item => {
      return {
        id: item.id,
        title: item.name,
        filtered_options: item.options
          .map((opt) => {
            return {
              text: opt.name,
              value: opt.id,
            };
          })
          .concat([
            {
              text: "other",
              value: "other",
            },
          ]),
      };
    })
  }

  //fetch options in sub children 
  let fetchOptionsInSubChildren = async (id, index) => {
    let res = (await axios.get(`get-options-child/${id}`)).data.data
    let children = res.map((child) => {
      return {
        id: child.id,
        title: child.name,
        options: child.options.map((opt) => {
          return {
            text: opt.name,
            value: opt.value,
          };
        }),
      };
    });
    return { children, index }
  }
  return {
    fetchAllCategories,
    filterCategories,
    fetchSubChildrenCategories,
    fetchOptionsInSubChildren
  };
};

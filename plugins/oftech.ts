import { ofetch } from "ofetch";
export default defineNuxtPlugin((nuxtApp) => {
  const app = useNuxtApp();
  const $swal = app.vueApp.config.globalProperties.$swal;
  let token = process.client ? localStorage.getItem("token") : "";

  const instance = ofetch.create({
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

  // You can also just do this instead of returning
  // nuxtApp.provide('ofetch', instance)

  return {
    provide: {
      ofetch: instance,
    },
  };
});

import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const app = useNuxtApp();
  const $swal = app.vueApp.config.globalProperties.$swal;
  let token = process.client ? localStorage.getItem("token") : "";
  let api = axios.create({
    baseURL: "http://127.0.0.1:5000/api/",
    headers: {
      token: token,
      common: {},
    },
  });

  // Request interceptor
  api.interceptors.request.use(
    (config) => {
      // Do something before the request is sent
      const token = process.client ? localStorage.getItem("token") : "";
      if (token) {
        // Add the Authorization header if a token is available
        config.headers.token = token;
      }
      return config;
    },
    (error) => {
      // Do something with the request error
      return Promise.reject(error);
    }
  );

  // Response interceptor
  api.interceptors.response.use(
    (response) => {
      // Do something with the successful response
      if (response.config.method === "POST" && response.status === 200) {
        $swal.fire({
          title: "success",
          text: "",
          icon: "success",
        });
        // Show success message or perform other actions
      }
      return response;
    },
    (error) => {
      // Do something with the response error
      if (
        error.config.method === "POST" &&
        error.response &&
        error.response.status !== 200
      ) {
        alert("hello")
        // Show error message or perform other actions
        $swal.fire({
          title: "something wrong happened ... please try again !",
          text: "",
          icon: "error",
        });
      }
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      api: api,
    },
  };
});

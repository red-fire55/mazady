import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import "./assets/tailwind.css";
// import "./plugins/axios.js";
const app = createApp(App);
app.use(store).use(router).mount("#app");

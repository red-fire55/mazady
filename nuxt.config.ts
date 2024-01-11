// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css",
],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  plugins: ["~/plugins/sweetalert.ts", "~/plugins/font-awesome.ts", "~/plugins/app.bundle.js", "~/plugins/oftech.ts", "~/plugins/axios.ts"],
  components: ["~/components/base/", "~/components/shared/", "~/components/main-page/",
   "~/components/main-page/left-section-content",
   "~/components/main-page/right-section-content"
  ],
  // modules: ['@pinia/nuxt'],
  // routes: [
  //   {
  //     path: "/",
  //     redirect: '/auth/signin'
  //   },
  // ]
});

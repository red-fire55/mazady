import Swal from 'sweetalert2';

export default defineNuxtPlugin(nuxtApp => {
  // Inject Swal to the context as $swal
  nuxtApp.vueApp.config.globalProperties.$swal= Swal
});
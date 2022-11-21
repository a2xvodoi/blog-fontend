import { createApp } from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import VueSocialSharing from 'vue-social-sharing'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import plugins from "./plugins";

// import css assets
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/plugins/adminlte/fontawesome-free/css/all.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "vue-multiselect/dist/vue-multiselect.css";

const app = createApp(App).use(i18n);
app.use(router);
app.use(store);
app.use(plugins);
app.use(VueSweetalert2);
app.use(VueSocialSharing);

app.mount("#app");

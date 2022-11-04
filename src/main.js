import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import css assets
import "bootstrap/dist/css/bootstrap.css";

import i18n from './i18n'

const app = createApp(App).use(i18n);
app.use(router);
app.use(store);
app.mount("#app");

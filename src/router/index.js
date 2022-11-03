import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
// import common from "@/utils/common";

// configure router
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

const DEFAULT_TITLE = "Admin Dashboard";

// router.beforeEach((to, from, next) => {
//   // go to login page if not already logged in
//   const publicPages = ["/login", "/register"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = common.getStorageDataByKey("user");

//   if (loggedIn) {
//     if (!authRequired) {
//       return next("/");
//     }
//   } else {
//     if (authRequired) {
//       return next("/login");
//     }
//   }
//   next();
// });

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;

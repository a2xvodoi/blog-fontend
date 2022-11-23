import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import i18n from "@/i18n";
import common from "@/utils/common";
import Auth from "@/api/Auth";

// configure router
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  mode: "history",
  routes,
});

const DEFAULT_TITLE = "Admin Dashboard";
const publicPages = [
  "login",
  "home",
  "blog-by-tag",
  "blog-detail",
  "not-found-page",
  "about",
  "contact",
];

const adminPages = [
  "dashboard",
  "tag-manager",
  "tag-create",
  "tag-edit",
  "blog-manager",
  "blog-create",
  "blog-edit",
];

const checkLogin = () => {
  return new Promise((resolve) => {
    Auth.check()
      .then((response) => resolve(response.code))
      .catch(() => resolve(0));
  });
};

router.beforeEach(async (to, from, next) => {
  const authRequired = !publicPages.includes(to.name);
  const auth = authRequired ? await checkLogin() : 1;
  if (!auth) {
    common.clearStorage();
  }
  const loggedIn = common.getStorageDataByKey("user");
  // if (to.name !== "login" && !auth) {
  //   if (authRequired) {
  //     next({ name: "login" });
  //   } else {
  //     next();
  //   }
  // } else if (to.name === "login") {
  //   next("/");
  // } else {
  //   if (loggedIn.permissions) {
  //     if (adminPages.includes(to.name)) {
  //       next("/admin");
  //     } else {
  //       next();
  //     }
  //   } else {
  //     if (adminPages.includes(to.name)) {
  //       next("/not-found-page");
  //     } else {
  //       next();
  //     }
  //   }
  // }

  if (loggedIn) {
    if (!authRequired && to.name !== "home") {
      if (loggedIn.permissions && adminPages.includes(to.name)) {
        return next("/admin");
      }

      if (to.name === "login") {
        return next("/");
      }

      return next();
    }
    if (!loggedIn.permissions && adminPages.includes(to.name)) {
      return next("/not-found-page");
    }
  } else {
    if (authRequired) {
      return next("/login");
    }
  }
  next();
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = i18n.global.t(to.meta.title || DEFAULT_TITLE);
  });
});

export default router;

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "client-layout" */ "@/layouts/client/MainLayout.vue"),
    redirect: "/",
    children: [
      {
        path: "",
        name: "home",
        meta: { title: "Trang chủ" },
        component: () => import(/* webpackChunkName: "home" */ "@/pages/client/HomePage.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    meta: { title: "Not found page" },
    component: () => import(/* webpackChunkName: "not-found" */ "@/pages/NotFoundPage.vue"),
  },
];

export default routes;

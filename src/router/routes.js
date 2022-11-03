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
    path: "/admin",
    component: () => import(/* webpackChunkName: "client-layout" */ "@/layouts/admin/MainLayout.vue"),
    redirect: "admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: { title: "Dashboard Admin" },
        component: () => import(/* webpackChunkName: "dashboard-page" */ "@/pages/admin/DashboardPage.vue"),
      },
      {
        path: "tags",
        name: "tag-manager",
        meta: { title: "Quản lý tag" },
        component: () => import(/* webpackChunkName: "tag-page" */ "@/pages/admin/TagPage.vue"),
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

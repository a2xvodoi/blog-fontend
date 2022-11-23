const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "client-layout" */ "@/layouts/client/MainLayout.vue"
      ),
    redirect: "/",
    children: [
      {
        path: "",
        name: "home",
        meta: { title: "home" },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/pages/client/HomePage.vue"),
      },
      {
        path: "tags/:slug",
        name: "blog-by-tag",
        meta: { title: "blog by tag" },
        component: () =>
          import(/* webpackChunkName: "blog" */ "@/pages/client/BlogPage.vue"),
      },
      {
        path: "blogs/:slug",
        name: "blog-detail",
        meta: { title: "blog detail" },
        component: () =>
          import(
            /* webpackChunkName: "blog" */ "@/pages/client/BlogDetailPage.vue"
          ),
      },
      {
        path: "about",
        name: "about",
        meta: { title: "about" },
        component: () =>
          import(
            /* webpackChunkName: "blog" */ "@/pages/client/AboutPage.vue"
          ),
      },
      {
        path: "contact",
        name: "contact",
        meta: { title: "contact" },
        component: () =>
          import(
            /* webpackChunkName: "blog" */ "@/pages/client/ContactPage.vue"
          ),
      },
    ],
  },
  {
    path: "/admin",
    component: () =>
      import(
        /* webpackChunkName: "admin-layout" */ "@/layouts/admin/MainLayout.vue"
      ),
    redirect: "admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: { title: "dashboard admin" },
        component: () =>
          import(
            /* webpackChunkName: "dashboard-page" */ "@/pages/admin/DashboardPage.vue"
          ),
      },
      {
        path: "tags",
        component: () =>
          import(
            /* webpackChunkName: "tag-page" */ "@/layouts/admin/EmptyLayout.vue"
          ),
        children: [
          {
            path: "",
            name: "tag-manager",
            meta: { title: "tag management" },
            component: () =>
              import(
                /* webpackChunkName: "tag-page" */ "@/pages/admin/tag/TagPage.vue"
              ),
          },
          {
            path: "create",
            name: "tag-create",
            meta: { title: "create tag" },
            component: () =>
              import(
                /* webpackChunkName: "tag-page" */ "@/pages/admin/tag/TagCreatePage.vue"
              ),
          },
          {
            path: "edit/:id",
            name: "tag-edit",
            meta: { title: "edit tag" },
            component: () =>
              import(
                /* webpackChunkName: "tag-page" */ "@/pages/admin/tag/TagEditPage.vue"
              ),
          },
        ],
      },
      {
        path: "blogs",
        component: () =>
          import(
            /* webpackChunkName: "blog-page" */ "@/layouts/admin/EmptyLayout.vue"
          ),
        children: [
          {
            path: "",
            name: "blog-manager",
            meta: { title: "blog management" },
            component: () =>
              import(
                /* webpackChunkName: "blog-page" */ "@/pages/admin/blog/BlogPage.vue"
              ),
          },
          {
            path: "create",
            name: "blog-create",
            meta: { title: "create blog" },
            component: () =>
              import(
                /* webpackChunkName: "blog-page" */ "@/pages/admin/blog/BlogCreatePage.vue"
              ),
          },
          {
            path: "edit/:id",
            name: "blog-edit",
            meta: { title: "edit blog" },
            component: () =>
              import(
                /* webpackChunkName: "blog-page" */ "@/pages/admin/blog/BlogEditPage.vue"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "Login - Register" },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/pages/LoginPage.vue"),
  },
  {
    path: "/switch",
    name: "switch",
    meta: { title: "Switch page" },
    component: () =>
      import(/* webpackChunkName: "switch" */ "@/pages/SwitchPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found-page",
    meta: { title: "Not found page" },
    component: () =>
      import(/* webpackChunkName: "not-found" */ "@/pages/NotFoundPage.vue"),
  },
];

export default routes;

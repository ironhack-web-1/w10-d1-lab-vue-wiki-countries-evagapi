import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "root",
    component: () => import("../components/Root.vue"),
    children: [
      {
        path: "/:code",
        name: "code",
        component: () => import("../components/CountryDetails.vue"),
        props: (route) => ({ code: route.params.code }),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;

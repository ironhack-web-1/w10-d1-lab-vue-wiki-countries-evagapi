import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "CountriesRoot",
    component: () => import("../components/CountriesRoot.vue"),
    children: [
      {
        path: "/:alpha3Code",
        name: "alpha3Code",
        component: () => import("../components/CountryDetails.vue"),
        props: (route) => ({ alpha3Code: route.params.alpha3Code }),
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

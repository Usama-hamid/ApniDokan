import { createRouter, createWebHistory } from "vue-router";
import TheLayout from "../layout/TheLayout.vue";

// import jwt from 'jsonwebtoken'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TheLayout,
      redirect: "/dashboard",
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("../views/DashboardView.vue"),
        },
        {
          path: "/products",
          name: "products",
          component: () => import("../views/Products/ProductsView.vue"),
        },
        {
          path: "/products/add",
          name: "addproducts",
          component: () =>
            import("../views/Products/components/addProductsView.vue"),
        },
        {
          path: "/products/:id",
          name: "addproducts",
          component: () =>
            import("../views/Products/components/addProductsView.vue"),
        },
        {
          path: "/collections",
          name: "collections",
          component: () => import("../views/collection/CollectionsView.vue"),
        },
        {
          path: "/collections/add",
          name: "addcollection",
          component: () =>
            import("../views/Products/components/addProductsView.vue"),
        },
        {
          path: "/collections/:id",
          name: "addcollection",
          component: () =>
            import("../views/Products/components/addProductsView.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/createUser",
          name: "createUser",
          component: () => import("../views/RegisterView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        hideLayout: true,
      },
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../components/NotFound.vue"),
      meta: {
        hideLayout: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  console.log(!loggedIn);
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;

import Vue from "vue";
import Router from "vue-router";
import Profile from "../components/Profile.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import All from "../components/All.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(Router);

export function createRouter() {
  const router = new Router({
    mode: "history",
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: "/", name: "index", component: Profile },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
        meta: { authRequired: true }
      },
      { path: "/login", name: "login", component: Login },
      { path: "/register", name: "register", component: Register },
      {
        path: "/all",
        name: "all",
        component: All,
        meta: { authRequired: true }
      },
      { path: "*", component: NotFound }
    ]
  });

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next({
          path: "/login",
          params: { nextUrl: to.fullPath }
        });
      }
    } else {
      next();
    }
  });

  return router;
}

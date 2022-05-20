import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import HomeRouter from "../router/HomeRouter.js";
import LoginPage from "../Generic/LoginPage.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    HomeRouter.HOMEROUTER,
    {
      path: "/",
      redirect: "/home/homepage",
      meta: { title: "Home", unAuthentication: true },
    },
    {
      path: "/helloword",
      component: HelloWorld,
      meta: { title: "Home", unAuthentication: true },
    },
    {
      path: "/login",
      component: LoginPage,
      alias: "/dangnhap",
      meta: { title: "Đăng nhập", unAuthentication: true },
    },
    //Router for Home layout
  ],
});

router.beforeEach(function (to, from) {
  /** Start Thay đổi title */
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  /** End Thay đổi title */
});

router.afterEach(function (to, from) {
  console.log("Global afterEach");
  console.log(to, from);
  console.log("Gọi API gửi dữ liệu log về server");
});

export default router;

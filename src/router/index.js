// Import Vue
import Vue from "vue";
// Import Vue Router
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
Vue.use(VueRouter);

// Import axios
import axios from "axios";
// Default base Url / Endpoint API
axios.defaults.baseURL = "http://localhost:8000";
const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "Home" */ "@/views/home/Index"),
    },
    {
      path: "/post",
      name: "post",
      component: () =>
        import(/* webpackChunkName: "PostIndex" */ "@/views/post/Index"),
    },
    {
      path: "/tag/:slug",
      name: "detail_tag",
      component: () =>
        import(/* webpackChunkName: "TagShow" */ "@/views/tag/Show"),
    },
    {
      path: "/category/:slug",
      name: "detail_category",
      component: () =>
        import(/* webpackChunkName: "CategoryShow" */ "@/views/category/Show"),
    },
    {
      path: "/event",
      name: "event",
      component: () =>
        import(/* webpackChunkName: "EventIndex" */ "@/views/event/Index"),
    },
    {
      path: "/event/:slug",
      name: "detail_event",
      component: () =>
        import(/* webpackChunkName: "EventShow" */ "@/views/event/Show"),
    },
    {
      path: "/photo",
      name: "photo",
      component: () =>
        import(/* webpackChunkName: "PhotoIndex" */ "@/views/photo/Index"),
    },
    {
      path: "/video",
      name: "video",
      component: () =>
        import(/* webpackChunkName: "VideoIndex" */ "@/views/video/Index"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "ContactIndex" */ "@/views/contact/Index"),
    },
    {
      path: "/:slug",
      name: "detail_post",
      component: () =>
        import(/* webpackChunkName: "PostShow" */ "@/views/post/Show"),
    },
  ],
  mode: "history",
});

export default router;

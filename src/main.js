import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import AlbumsList from "./components/AlbumsList";
import Photos from "./components/Photos";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: AlbumsList },
    {
      path: "/albums/:id/photos",
      name: "photos",
      component: Photos,
    },
  ],
});

const app = createApp(App);

app.use(router);
app.mount("#app");

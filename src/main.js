import { createApp } from "vue";

const app = createApp({
  data() {
    return {
      title: "Comedy ievents",
    };
  },
});

const mountedApp = app.mount("#app");

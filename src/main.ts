import { createApp } from "vue";
import * as Vue from "vue";
import "./style.css";
import App from "./App.vue";

window.Vue = Vue;

const app = createApp(App);

window._vue_app = app;

app.mount("#app");

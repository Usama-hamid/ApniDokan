import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import store from "./stores";

import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";

import "./assets/css/app.min.css";
import "./assets/js/app.min.js";
import "./assets/js/vendor.min.js";
import "./assets/plugins/jvectormap-next/jquery-jvectormap.min.js";
import "./assets/plugins/jvectormap-content/world-mill.js";
// import "./assets/plugins/apexcharts/dist/apexcharts.min.js"
import "./assets/js/demo/dashboard.demo.js";
import "./assets/plugins/jvectormap-next/jquery-jvectormap.min.js";
import "./assets/plugins/jvectormap-next/jquery-jvectormap.css";
import "./assets/js/email-decode.min.js";
import "./assets/js/rocket-loader.min.js";
import "./assets/css/icon.main.css";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(VueAxios, axios);

app.use(Toast);

app.use(router);
app.use(store);

app.mount("#app");

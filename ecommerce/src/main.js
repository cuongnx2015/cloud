import "vuetify/styles"; // Global CSS has to be imported
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router/index.js";
import axios from "axios";
import store from "./store/index.js";
import '@mdi/font/css/materialdesignicons.css'


// khai báo đường dẫn mặc định cho toàn project
axios.defaults.baseURL = "http://localhost:9106";
// axios.defaults.baseURL = "http://115.79.241.149:9106";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
}); // Replaces new Vuetify(...)

app.use(vuetify);
app.use(router);
app.use(store);
app.mount("#app");

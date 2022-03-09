import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
    // duration: 500,
  });
import "./assets/custom.css";

createApp(App).mount("#app");

import { createApp } from "vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { }  from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faGithub, faXTwitter);

const app = createApp(App);

/* 5. Register the component globally so you can use it anywhere */
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

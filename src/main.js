import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import App from "./App.vue";
import ComingSoon from "./routes/ComingSoon.vue";
import Index from "./routes/Index.vue";

import { createRouter, createWebHistory } from "vue-router";

import { VueReCaptcha } from "vue-recaptcha-v3";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faSquareArrowUpRight,
    faTerminal,
    faCoffee,
    faObjectGroup,
    faBookOpen,
    faRocket,
    faWrench,
    faPaperPlane,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faLinkedin,
    faGithub,
    faXTwitter,
    faSquareArrowUpRight,
    faTerminal,
    faCoffee,
    faObjectGroup,
    faBookOpen,
    faRocket,
    faWrench,
    faPaperPlane,
    faArrowRight,
);

const routes = [
    { path: "/", component: Index },
    // {
    //     path: "/projects",
    //     redirect: "/",
    //     children: [
    //         {
    //             path: ":id",
    //             component: ProjectDetail,
    //             props: true,
    //         },
    //     ],
    // },
    { path: "/:pathMatch(.*)*", component: ComingSoon },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.use(VueReCaptcha, {
    siteKey: "6LdW3PgsAAAAAF30sllT24bvt0rgSc5tpRKEDinh",
    loaderOptions: {
        useRecaptchaNet: true,
        autoHideBadge: true,
    },
});

app.mount("#app");

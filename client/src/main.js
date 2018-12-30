import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { createRouter } from "./router";
import axios from "axios";
import Notifications from "vue-notification";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBolt,
  faPencilAlt,
  faTimes,
  faSignOutAlt,
  faSpinner,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBolt);
library.add(faUser);
library.add(faPencilAlt);
library.add(faTimes);
library.add(faSignOutAlt);
library.add(faSpinner);
library.add(faExclamationTriangle);

Vue.use(Notifications);
Vue.component("font-awesome-icon", FontAwesomeIcon);

const router = createRouter();

Vue.router = router;
Vue.config.productionTip = false;

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      Vue.router.push("/login");
    } else if (error.response.status !== 400) {
      vue.$notify({
        type: "error",
        group: "portal",
        title: "Sorry an unexpected error occurred!",
        text:
          "Our system is encountering a bit of downtime. We apologize for the inconvience."
      });
    }
    throw error;
  }
);

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

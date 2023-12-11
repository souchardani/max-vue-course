import { createApp } from "vue";
import App from "./App.vue";

import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

createApp(App)
  .component("active-user", ActiveUser)
  .component("user-data", UserData)
  .mount("#app");

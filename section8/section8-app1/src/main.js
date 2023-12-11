//si importas desde un paquete solo pones el nombre del paquete
import { createApp } from "vue";

//si importas desde un custom file, debes usar la ruta relativa ./significa en el mismo directorio
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("new-friend", NewFriend);

app.mount("#app");

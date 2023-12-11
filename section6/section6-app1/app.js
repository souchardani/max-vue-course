const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "012 456 789",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "098 765 432",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {},
});

//el componente de vue recibe 2 parametros: identificador o nombre,  y un objeto con todas las propiedades (el mismo de createApp)
//en general, un componente en otra vue app(o mini app), que en este caso pertenece a un app principal o apppadre
app.component("friend-contact", {
  template: `
    <li :key="friend.id">
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? "Hide" : "Show" }} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "012 456 789",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");

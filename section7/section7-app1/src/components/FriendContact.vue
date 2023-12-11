<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAdress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //props recibe las propiedades custom que queremos pasar a nuetro componente
  //los props, como son variables javascript al igual que en data, no llevan guiones y deben ser camelcase
  //en la plantilla html, vue las transcribe a kebab-case, por eso usamos phone-number alli
  props: ["name", "phoneNumber", "emailAdress"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "daniel",
        name: "Daniel Souchar",
        phone: "123 456 789",
        email: "dani@mail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

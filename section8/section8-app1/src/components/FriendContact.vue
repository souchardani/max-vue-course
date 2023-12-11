<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAdress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  //props recibe las propiedades custom que queremos pasar a nuetro componente
  //los props, como son variables javascript al igual que en data, no llevan guiones y deben ser camelcase
  //en la plantilla html, vue las transcribe a kebab-case, por eso usamos phone-number alli
  //props: ["name", "phoneNumber", "emailAdress", "isFavorite"],
  //para dar mas informacion al prop, podemos pasar un typo, o un objeto con info de la propiedad del prop
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAdress: {
      type: String,
      required: false,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  //emits es el contrario a props
  //en props definimos los atributos que recibe el componente
  //en emits definimos los eventos custom que el componente eventualmente puede emitir
  //son opcionales, pero ayuda a no tener que buscar los eventos emits en todo el codigo
  emits: ["toggle-favorite", "delete"],
  //para dar mas informacion, podemos definir el emit como un objeto, donde el par clave valor es una funcion que tiene..
  //como parametro el valor que eventualmente vamos a emitir
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is missing");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavorite() {
      //emit es basicamente un evento que se emite desde el componente hijo, y que luego el componente padre puede escuchar
      //como el click de un boton basicamente
      //pasamos primero el nombre, y luego los datos que queramos que van a ser data de la app hijo que pasa al padre
      this.$emit("toggle-favorite", this.id);
      // this.isFriendFavorite = !this.isFriendFavorite;
    },
    deleteFriend() {},
  },
};
</script>

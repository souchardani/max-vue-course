<template>
  <section>
    <header><h1>My friends</h1></header>
    <h2>Add New Friends</h2>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <!-- cuando usamos v-for en un componente custom, el uso del :key es OBLIGATORIO -->
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-adress="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contact>
      <!-- nota: si tenemos un prop que usa cualquier valor que no sea string, debemos usar v-bind: o simplemente : para que reconozca ese valor,  -->
    </ul>
  </section>
</template>

<script>
//esto nos dice que este objeto es el export por defecto de este archivo app.vue
export default {
  data() {
    return {
      friends: [
        {
          id: "daniel",
          name: "Daniel Souchar",
          phone: "123 456 789",
          email: "dani@mail.com",
          isFavorite: true,
        },
        {
          id: "diego",
          name: "Diego Souchar",
          phone: "987 654 321",
          email: "diego@mail.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      //en el metodo que recibe este evento, recibimos el parametro que pasamos en el emit en el mismo orden como args de la funcion
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addContact(name, phone, email) {
      const newFriend = {
        name,
        phone,
        email,
        id: new Date().toISOString(),
        isFavorite: false,
      };
      this.friends.push(newFriend);
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>

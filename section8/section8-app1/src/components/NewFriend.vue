<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name:</label>
      <input v-model="enteredName" type="text" id="name" />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input v-model="enteredPhone" type="tel" id="phone" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input v-model="enteredEmail" type="email" id="email" />
    </div>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  emits: ["add-contact"],
  methods: {
    submitData() {
      if (
        this.enteredName == "" ||
        this.enteredPhone == "" ||
        this.enteredEmail == ""
      ) {
        alert("completa todos los campos del amigo");
      } else {
        this.$emit(
          "add-contact",
          this.enteredName,
          this.enteredPhone,
          this.enteredEmail
        );
      }
    },
  },
};
</script>

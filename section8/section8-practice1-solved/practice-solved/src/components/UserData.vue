<template>
  <section>
    <form action="" @submit.prevent="submitData">
      <input type="text" placeholder="your Name" v-model="enteredName" />
      <input type="text" placeholder="Your Age" v-model="enteredAge" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>

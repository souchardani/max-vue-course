<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goalText" />
  <button @click="setGoal">Set Goal</button>
  <!-- en teleport, que es un built in component, simplemente pasas un selector css y el componente se transporta a ese lugar -->
  <teleport to="body">
    <error-alert v-if="inputInvalid">
      <h2>Input is invalid</h2>
      <p>Please enter at least a few characters!</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  data() {
    return {
      inputInvalid: false,
    };
  },
  components: {
    ErrorAlert,
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goalText.value;
      if (enteredValue == "") {
        this.inputInvalid = true;
      }
    },
    confirmError() {
      this.inputInvalid = false;
    },
  },
};
</script>

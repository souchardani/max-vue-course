const app = Vue.createApp({
  data() {
    return {
      name: "",
      nameEnter: "",
    };
  },
  methods: {
    showAlert() {
      alert("The magic you're loking for is in the work you're avoiding");
    },
    showName(event) {
      this.name = event.target.value;
    },
    showNameEnter(event) {
      this.nameEnter = event.target.value;
    },
  },
});

app.mount("#assignment");

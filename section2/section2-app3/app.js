const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  //debes llamar a tus propiedades computadas como si fueran data properties ya que la idea es que  se comporten igual
  computed: {
    fullname() {
      console.log("running");
      if (this.name == "") return "";
      return this.name + " Souchar";
    },
  },
  watch: {
    counter(value) {
      if (value > 50) this.counter = 0;
    },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
      if (this.counter > 50) this.counter = 0;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");

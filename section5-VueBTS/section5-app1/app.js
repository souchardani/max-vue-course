const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
  //fuera de metodos, añadimos los hooks ( en cualquier lugar de nuestra app)
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `<p>{{ favoriteMeal }}</p>`,
  data() {
    return {
      favoriteMeal: "Pizza!!",
    };
  },
});

app2.mount("#app2");

//....TEMA DE PROXYS Y COMO FUNCIONA VUE

// let obj = {
//   message: "Hello",
//   longMessage: "",
// };

// let handler = {
//   set(target, key, value) {
//     if (key === "message") {
//       target.longMessage = value + " amigos mios queridos";
//     }
//     target[key] = value;
//   },
// };

// const proxy = new Proxy(obj, handler);

// proxy.message = "hola";

// console.log(proxy);

// console.log(proxy.longMessage);

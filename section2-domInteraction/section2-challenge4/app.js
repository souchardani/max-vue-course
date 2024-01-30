const app = Vue.createApp({
  data() {
    return {
      iclass: "",
      visibleParagraph: true,
      backColor: "red",
    };
  },
  computed: {
    getColor() {
      return { backgroundColor: this.backColor };
    },
  },
  methods: {
    togglep() {
      this.visibleParagraph = !this.visibleParagraph;
    },
    inputClass(event) {
      this.iclass = event.target.value;
    },
  },
});

app.mount("#assignment");

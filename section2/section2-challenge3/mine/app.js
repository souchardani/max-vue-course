const app = Vue.createApp({
  methods: {
    add(number) {
      this.number += number;
    },
  },
  data() {
    return {
      number: 0,
      result: 37,
    };
  },
  computed: {
    displayResult() {
      if (this.number < 37) return "Not there yet";
      else if (this.number > 37) return "Too much!";
      else return 37;
    },
  },
  watch: {
    displayResult() {
      const temp = this;
      setTimeout(() => {
        console.log("watcher executing...");
        temp.number = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");

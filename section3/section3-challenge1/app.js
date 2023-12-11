const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskText: "",
      status: {
        name: "Hide",
        value: true,
      },
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskText);
    },
    toogleStatus() {
      if (this.status.name === "Hide") {
        this.status.name = "Show";
      } else {
        this.status.name = "Hide";
      }
      this.status.value = !this.status.value;
    },
  },
});

app.mount("#assignment");

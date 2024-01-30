<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active goals</button>
    <button @click="setSelectedComponent('mange-goals')">Manage goals</button>
    <!-- <active-goals></active-goals>
    <mange-goals></mange-goals> -->
    <!-- keep alive mantiene a los componentes dinamicos activos independientemente de que cambien a otros -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import MangeGoals from "./components/MangeGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";

export default {
  components: {
    TheHeader,
    MangeGoals,
    ActiveGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      selectedComponent: "active-goals",
    };
  },
  methods: {
    showSlot(slotProps) {
      console.log(slotProps);
    },
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
  mounted() {
    console.dir(this.slotProps);
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

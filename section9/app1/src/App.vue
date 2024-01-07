<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <!-- slotProp contiene todos los atributos que se pasan desde el slot al componente que los usa -->
      <template #default="slotProps">
        <h2 @click="showSlot(slotProps)">{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
      <!-- si hay un solo slot, podriamos omitir el template -->
    </course-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    showSlot(slotProps) {
      console.log(slotProps);
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

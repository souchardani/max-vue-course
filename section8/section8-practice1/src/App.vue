<script>
export default {
  data() {
    return {
      name: "Daniel Souchar Cotoret",
      age: 23,
    };
  },
};
</script>

<template>
  <section class="my-10 mx-24">
    <div>
      <h1
        class="bg-blue-400 text-center p-4 rounded-lg text-xl font-bold shadow-lg text-slate-800"
      >
        Bienvenidos al ejercicio
      </h1>
    </div>
    <div class="flex gap-8 mt-4">
      <active-user :username="name" :age="age" class="grow"></active-user>
      <user-data
        @cambiar-nombre="(nombreRecibido) => (name = nombreRecibido)"
        @cambiar-edad="(edadRecibidad) => (age = edadRecibidad)"
        :name="name"
        :age="age"
        class="grow"
      ></user-data>
    </div>
  </section>
</template>

<style></style>

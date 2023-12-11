<template>
  <div
    class="bg-lime-300 rounded-lg shadow-2xl h-56 grid place-content-center drop-shadow-lg"
  >
    <h2>Actualizar Datos</h2>
    Nombre:<input
      type="text"
      v-model="nombreLocal"
      @input="$emit('cambiar-nombre', nombreLocal)"
    />
    <br />
    Edad:
    <input
      type="text"
      v-model="edadLocal"
      @input="$emit('cambiar-edad', edadLocal)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombreLocal: this.name,
      edadLocal: this.age,
    };
  },
  props: ["name", "age"],
  methods: {},
};
</script>

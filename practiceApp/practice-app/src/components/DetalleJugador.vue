<script>
export default {
  data() {
    return {
      datosLocal: this.datos
    }
  },
  methods: {
    mostrar() {
      this.datosLocal = !this.datosLocal
    },
    modifmvp() {
      this.$emit('modificar-mpv', this.nombre)
    }
  },
  props: {
    nombre: String,
    posicion: String,
    equipo: String,
    datos: {
      type: Boolean,
      default: true,
      required: false
    },
    estrella: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>

<template>
  <div class="jugador">
    <h2>{{ nombre }} - {{ estrella ? 'MVP' : '' }}</h2>
    <button @click="modifmvp">Modificar MVP</button>
    <button @click="mostrar">Ocultar detalles</button>
    <div v-show="datosLocal">
      <h4>{{ posicion }}</h4>
      <h4>{{ equipo }}</h4>
    </div>
  </div>
</template>

<style>
.jugador {
  width: 500px;
  height: 500px;
  border: 5px solid red;
  background-color: aquamarine;
}
</style>

<script>
export default {
  data() {
    return {
      mensaje: 'holaaa David!',
      jugadores: [
        {
          nombre: 'Jude Bellinghan',
          posicion: 'mediocentro',
          equipo: 'Real Madrid',
          estrella: false
        },
        {
          nombre: 'Lionel Messi',
          posicion: 'mediocentro',
          equipo: 'Fc Barcelona',
          estrella: false
        }
      ]
    }
  },
  methods: {
    modificarMVP(nombre) {
      const jugadorAModificar = this.jugadores.filter((elemento) => elemento.nombre === nombre)
      jugadorAModificar[0].estrella = !jugadorAModificar[0].estrella
    }
  },
  computed: {}
}
</script>

<template>
  <h2>{{ mensaje }}</h2>
  <detalle-jugador
    v-for="jugador in jugadores"
    :nombre="jugador.nombre"
    :key="jugador.nombre"
    :posicion="jugador.posicion"
    :equipo="jugador.equipo"
    :estrella="jugador.estrella"
    @modificar-mpv="modificarMVP"
  >
  </detalle-jugador>
  <detalle-jugador></detalle-jugador>
</template>

<style scoped></style>

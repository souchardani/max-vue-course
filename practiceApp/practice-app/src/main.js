import { createApp } from 'vue'
import App from './App.vue'
import DetalleJugador from './components/DetalleJugador.vue'

const app = createApp(App)

app.component('detalle-jugador', DetalleJugador)

app.mount('#app')

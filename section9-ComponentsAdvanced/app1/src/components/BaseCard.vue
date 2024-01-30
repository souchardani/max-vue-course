<template>
  <div>
    <header v-if="$slots.header">
      <!-- cuando añadimos mas de un slot, debemos identificarlos con el atributo name -->
      <slot name="header">
        <!-- todo el contenido que va dentro del slot es el contenido default que se va a sobreescribir -->
        <!-- <h2>The Default</h2> -->
      </slot>
    </header>
    <!-- solo puedes dejar uno sin nombrar, que va a ser el slot por defecto -->
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<script>
export default {
  mounted() {
    console.log(this.$slots.header);
  },
};
</script>

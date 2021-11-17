<template>
  <template v-for="proyecto in proyectos" :key="proyecto.id">
    <Proyecto :proyecto="proyecto" />
  </template>
</template>

<script>
import Proyecto from "./Proyecto.vue";
export default {
  name: "ListaProyectos",
  props: {
    proyectos: Array,
  },
  components: {
    Proyecto,
  },
};
</script>

<style></style>

<template>
  <div class="content">
    <template v-for="proyecto in proyectos" :key="proyecto.id">
      <Proyecto :proyecto="proyecto" />
    </template>
  </div>
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

<style lang="scss" scoped>
.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media screen and (max-width: 930px) {
  .content {
    justify-content: center;
  }
}
</style>

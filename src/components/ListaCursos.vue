<template>
  <div class="content">
    <template v-for="curso in cursos" :key="curso.id">
      <Curso :curso="curso" />
    </template>
  </div>
</template>

<script>
import Curso from "./Curso.vue";
export default {
  name: "ListaCursos",
  props: {
    cursos: Array,
  },
  components: {
    Curso,
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

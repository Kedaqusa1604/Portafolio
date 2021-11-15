<template>
  <div class="content">
    <template v-for="conocimiento in conocimientos" :key="conocimiento.id">
      <Conocimiento :conocimiento="conocimiento" />
    </template>
  </div>
</template>

<script>
import Conocimiento from "./Conocimiento.vue";
export default {
  name: "ListaConocimientos",
  props: {
    conocimientos: Array,
  },
  components: {
    Conocimiento,
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

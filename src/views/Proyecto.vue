<template>
  <BasicLayout2>
    <div>
      <img :src="proyecto.image" alt="" />
    </div>
    <h1>{{ proyecto.title }}</h1>
    <p v-text="proyecto.description"></p>
  </BasicLayout2>
</template>

<script>
import BasicLayout2 from "../layouts/BasicLayout2.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  components: {
    BasicLayout2,
  },
  setup() {
    const store = useStore();
    const id = useRoute().params.id;
    const proyecto = computed(() => store.getters.getProyecto(id));
    return {
      store,
      proyecto,
      id,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 500px;
  img {
    width: 100%;
  }
}
</style>

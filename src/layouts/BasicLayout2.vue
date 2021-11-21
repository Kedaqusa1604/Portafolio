<template>
  <div class="basic-layout">
    <Menu class="menu" />
    <slot class="content" />
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
  name: "BasicLayout2",
  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
$azulTexto: #1f3c5d;
.menu {
  background: $azulTexto;
}
.basic-layout {
  padding: 60px 0;
}
</style>

<template>
  <div class="basicLayout">
    <Menu />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
  name: "BasicLayout",
  components: {
    Menu,
  },
};
</script>

<style></style>

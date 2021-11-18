<template>
  <div class="basicLayout">
    <Menu class="menu" />
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

<style lang="scss" scoped>
// .basicLayout {
//   display: grid;
//   grid-template-columns: repeat(10, auto);

//   .menu {
//     grid-column-start: 1;
//     grid-column-end: 3;
//   }
//   .content {
//     grid-column-start: 3;
//     grid-column-end: -1;
//   }
// }
</style>
